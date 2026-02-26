const STORAGE_KEY = "eft-task-manager-v2";

const defaultTasks = [
  {
    id: crypto.randomUUID(),
    questName: "Debut",
    trader: "Prapor",
    map: "Customs",
    objective: "Scavを5体キルし、MP-133を2丁引き渡す",
    priority: "高",
    status: "進行中",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    questName: "Shortage",
    trader: "Therapist",
    map: "Factory",
    objective: "Salewa救急キットを3つ引き渡す",
    priority: "中",
    status: "未着手",
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    questName: "Search Mission",
    trader: "Prapor",
    map: "Woods",
    objective: "USECキャンプと軍用車両を調査して脱出",
    priority: "中",
    status: "未着手",
    createdAt: new Date().toISOString(),
  },
];

const form = document.querySelector("#task-form");
const listEl = document.querySelector("#task-list");
const statsEl = document.querySelector("#stats");
const template = document.querySelector("#task-template");
const searchEl = document.querySelector("#search");
const filterTraderEl = document.querySelector("#filterTrader");
const filterMapEl = document.querySelector("#filterMap");
const filterStatusEl = document.querySelector("#filterStatus");
const progressFillEl = document.querySelector("#progress-fill");
const clearCompletedEl = document.querySelector("#clear-completed");
const resetAllEl = document.querySelector("#reset-all");

let tasks = loadTasks();
let filters = {
  search: "",
  trader: "all",
  map: "all",
  status: "all",
};

init();

function init() {
  fillFilterOptions();
  render();

  form.addEventListener("submit", handleAddTask);
  searchEl.addEventListener("input", handleSearch);
  filterTraderEl.addEventListener("change", handleFilterChange("trader"));
  filterMapEl.addEventListener("change", handleFilterChange("map"));
  filterStatusEl.addEventListener("change", handleFilterChange("status"));
  clearCompletedEl.addEventListener("click", clearCompleted);
  resetAllEl.addEventListener("click", resetAll);
}

function handleAddTask(event) {
  event.preventDefault();
  const data = new FormData(form);

  const task = {
    id: crypto.randomUUID(),
    questName: data.get("questName").toString().trim(),
    trader: data.get("trader").toString(),
    map: data.get("map").toString(),
    objective: data.get("objective").toString().trim(),
    priority: data.get("priority").toString(),
    status: data.get("status").toString(),
    createdAt: new Date().toISOString(),
  };

  if (!task.questName || !task.objective) {
    return;
  }

  tasks.unshift(task);
  commitState();
  form.reset();
  document.querySelector("#priority").value = "中";
  document.querySelector("#status").value = "未着手";
}

function handleSearch(event) {
  filters.search = event.target.value.trim().toLowerCase();
  render();
}

function handleFilterChange(type) {
  return (event) => {
    filters[type] = event.target.value;
    render();
  };
}

function loadTasks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [...defaultTasks];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [...defaultTasks];
    return parsed.filter(isValidTask);
  } catch {
    return [...defaultTasks];
  }
}

function isValidTask(task) {
  return task && task.id && task.questName && task.trader && task.map && task.objective && task.priority && task.status;
}

function persistTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function commitState() {
  persistTasks();
  fillFilterOptions();
  render();
}

function fillFilterOptions() {
  const traders = Array.from(new Set(tasks.map((task) => task.trader))).sort();
  const maps = Array.from(new Set(tasks.map((task) => task.map))).sort();

  updateSelect(filterTraderEl, traders, "全トレーダー", filters.trader);
  updateSelect(filterMapEl, maps, "全マップ", filters.map);
}

function updateSelect(selectEl, values, allLabel, selectedValue) {
  const allValue = "all";
  const currentSelection = values.includes(selectedValue) || selectedValue === allValue ? selectedValue : allValue;

  selectEl.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = allValue;
  allOption.textContent = allLabel;
  selectEl.appendChild(allOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectEl.appendChild(option);
  });

  selectEl.value = currentSelection;
}

function getPriorityRank(priority) {
  if (priority === "高") return 3;
  if (priority === "中") return 2;
  return 1;
}

function getStatusRank(status) {
  if (status === "進行中") return 3;
  if (status === "未着手") return 2;
  return 1;
}

function getVisibleTasks() {
  return tasks
    .filter((task) => {
      const matchesSearch =
        !filters.search ||
        task.questName.toLowerCase().includes(filters.search) ||
        task.objective.toLowerCase().includes(filters.search);

      const matchesTrader = filters.trader === "all" || task.trader === filters.trader;
      const matchesMap = filters.map === "all" || task.map === filters.map;
      const matchesStatus = filters.status === "all" || task.status === filters.status;

      return matchesSearch && matchesTrader && matchesMap && matchesStatus;
    })
    .sort((a, b) => {
      const statusDiff = getStatusRank(b.status) - getStatusRank(a.status);
      if (statusDiff !== 0) return statusDiff;

      const priorityDiff = getPriorityRank(b.priority) - getPriorityRank(a.priority);
      if (priorityDiff !== 0) return priorityDiff;

      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
}

function render() {
  const visibleTasks = getVisibleTasks();
  listEl.innerHTML = "";

  visibleTasks.forEach((task) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.dataset.id = task.id;

    node.querySelector("h3").textContent = task.questName;
    const badge = node.querySelector(".priority");
    badge.textContent = `${task.priority}優先`;
    badge.dataset.priority = task.priority;

    node.querySelector(".meta").textContent = `${task.trader} / ${task.map} / ${task.status}`;
    node.querySelector(".objective").textContent = task.objective;

    const statusSelect = node.querySelector(".status-select");
    statusSelect.value = task.status;
    statusSelect.addEventListener("change", (event) => {
      task.status = event.target.value;
      commitState();
    });

    node.querySelector(".delete").addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      commitState();
    });

    listEl.appendChild(node);
  });

  const completed = tasks.filter((task) => task.status === "完了").length;
  const progressPercent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  statsEl.textContent = `全${tasks.length}件 / 完了${completed}件 (${progressPercent}%) / 表示${visibleTasks.length}件`;
  progressFillEl.style.width = `${progressPercent}%`;

  if (!visibleTasks.length) {
    const empty = document.createElement("li");
    empty.className = "task-item";
    empty.textContent = "条件に一致するタスクはありません。";
    listEl.appendChild(empty);
  }
}

function clearCompleted() {
  const nextTasks = tasks.filter((task) => task.status !== "完了");
  if (nextTasks.length === tasks.length) return;
  tasks = nextTasks;
  commitState();
}

function resetAll() {
  if (!window.confirm("全タスクを削除して初期サンプルに戻します。よろしいですか？")) {
    return;
  }
  tasks = [...defaultTasks];
  commitState();
}
