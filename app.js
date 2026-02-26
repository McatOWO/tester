const STORAGE_KEY = "eft-task-manager-v3";

const TASK_SEEDS = [
  ["Debut", "Prapor", "Customs", "Scav討伐とショットガン納品"],
  ["Checking", "Prapor", "Customs", "トラックの時計を回収"],
  ["Shootout Picnic", "Prapor", "Woods", "Scavを一定数討伐"],
  ["Delivery from the Past", "Prapor", "Customs / Factory", "書類を回収して設置"],
  ["BP Depot", "Prapor", "Customs", "タンカーにマーカー設置"],
  ["Bad Rep Evidence", "Prapor", "Customs", "保管庫の証拠を回収"],
  ["Ice Cream Cones", "Prapor", "複数", "60連マガジンを納品"],
  ["Postman Pat - Part 1", "Prapor", "Factory", "手紙を回収"],
  ["Shaking up Teller", "Prapor", "Customs", "寮の金庫から書類回収"],
  ["The Punisher - Part 1", "Prapor", "Shoreline", "Scav討伐とショットガン回収"],
  ["The Punisher - Part 2", "Prapor", "Shoreline", "PMC討伐"],
  ["The Punisher - Part 3", "Prapor", "Customs", "AKS-74U系で討伐"],
  ["The Punisher - Part 4", "Prapor", "Shoreline", "装備条件付きPMC討伐"],
  ["The Punisher - Part 5", "Prapor", "複数", "AK-74NとM4納品"],
  ["The Punisher - Part 6", "Prapor", "複数", "SVDでPMC討伐"],
  ["Polikhim Hobo", "Prapor", "Customs", "寮周辺Scav討伐"],
  ["Big Customer", "Prapor", "Customs", "寮エリアのScav討伐"],
  ["No Offence", "Prapor", "Woods", "USECキャンプ周辺制圧"],
  ["Grenadier", "Prapor", "複数", "グレネードでPMC討伐"],
  ["Test Drive - Part 1", "Prapor", "複数", "指定武器でPMC討伐"],

  ["Shortage", "Therapist", "Factory", "Salewaを納品"],
  ["Sanitary Standards - Part 1", "Therapist", "Customs", "ガスアナライザー納品"],
  ["Sanitary Standards - Part 2", "Therapist", "複数", "追加ガスアナ納品"],
  ["Operation Aquarius - Part 1", "Therapist", "Customs", "寮の部屋を調査"],
  ["Operation Aquarius - Part 2", "Therapist", "Customs", "Scav討伐"],
  ["Painkiller", "Therapist", "複数", "鎮痛剤を納品"],
  ["Pharmacist", "Therapist", "Customs", "Caseを回収"],
  ["Health Care Privacy - Part 1", "Therapist", "Shoreline", "救急車を調査"],
  ["Health Care Privacy - Part 2", "Therapist", "複数", "医療品を納品"],
  ["Health Care Privacy - Part 3", "Therapist", "Customs", "寮から情報回収"],
  ["Health Care Privacy - Part 4", "Therapist", "Woods", "血液サンプル回収"],
  ["Health Care Privacy - Part 5", "Therapist", "Factory", "PMC討伐"],
  ["Disease History", "Therapist", "Reserve", "感染サンプルを回収"],
  ["Colleagues - Part 1", "Therapist", "Shoreline", "医療班の痕跡調査"],
  ["Colleagues - Part 2", "Therapist", "Lighthouse", "サンプル回収"],
  ["Colleagues - Part 3", "Therapist", "複数", "情報引き渡し"],
  ["An Apple a Day Keeps the Doctor Away", "Therapist", "複数", "医療品を納品"],

  ["Supplier", "Skier", "複数", "TOZとボディアーマー納品"],
  ["The Extortionist", "Skier", "Customs", "キャビンキーで資料回収"],
  ["Stirrup", "Skier", "複数", "ハンドガンでPMC討伐"],
  ["What’s on the Flash Drive?", "Skier", "複数", "USBを納品"],
  ["Golden Swag", "Skier", "Customs", "ライター回収と設置"],
  ["Chemical - Part 1", "Skier", "Customs", "寮の情報回収"],
  ["Chemical - Part 2", "Skier", "Customs", "隠し資料を確保"],
  ["Chemical - Part 3", "Skier", "Customs", "薬品を引き渡し"],
  ["Chemical - Part 4", "Skier", "複数", "報酬ルート分岐"],
  ["Loyalty Buyout", "Skier", "複数", "別ルート分岐タスク"],
  ["Friend from the West - Part 1", "Skier", "複数", "USECドッグタグ回収"],
  ["Friend from the West - Part 2", "Skier", "複数", "指定通貨を納品"],
  ["The Setup", "Skier", "Customs", "装備縛りでPMC討伐"],
  ["Silent Caliber", "Skier", "複数", "サプレッサーSGで討伐"],
  ["Bullshit", "Skier", "Customs", "寮にアイテム設置"],
  ["Chumming", "Skier", "Interchange", "夜間PMC討伐"],
  ["Insomnia", "Skier", "複数", "22:00-05:00にPMC討伐"],

  ["Fishing Gear", "Peacekeeper", "Shoreline", "SV-98とマルチツール設置"],
  ["Tigr Safari", "Peacekeeper", "Customs", "BTRにマーカー設置"],
  ["Scrap Metal", "Peacekeeper", "Interchange", "戦車にマーカー設置"],
  ["Eagle Eye", "Peacekeeper", "Shoreline", "UAVを回収"],
  ["Humanitarian Supplies", "Peacekeeper", "Shoreline", "UN装備でScav討伐"],
  ["The Cult - Part 1", "Peacekeeper", "Shoreline", "マーカー設置"],
  ["The Cult - Part 2", "Peacekeeper", "Woods", "サークルを調査"],
  ["Spa Tour - Part 1", "Peacekeeper", "Shoreline", "リゾート調査"],
  ["Spa Tour - Part 2", "Peacekeeper", "Shoreline", "フェンス越し討伐"],
  ["Spa Tour - Part 3", "Peacekeeper", "Shoreline", "アイテム設置"],
  ["Spa Tour - Part 4", "Peacekeeper", "Shoreline", "Sanitar関連"],
  ["Spa Tour - Part 5", "Peacekeeper", "Shoreline", "装備納品"],
  ["Spa Tour - Part 6", "Peacekeeper", "Shoreline", "夜間討伐"],
  ["Spa Tour - Part 7", "Peacekeeper", "Shoreline", "上位装備討伐"],
  ["Cargo X - Part 1", "Peacekeeper", "Shoreline", "貨物資料回収"],
  ["Cargo X - Part 2", "Peacekeeper", "Shoreline", "リゾート資料回収"],
  ["Cargo X - Part 3", "Peacekeeper", "Customs", "隠し資料設置"],
  ["Wet Job - Part 1", "Peacekeeper", "Shoreline", "Scav討伐"],
  ["Wet Job - Part 2", "Peacekeeper", "Shoreline", "リゾート管理者を排除"],
  ["Wet Job - Part 3", "Peacekeeper", "Shoreline", "PMCヘッドショット"],

  ["Gunsmith - Part 1", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 2", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 3", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 4", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 5", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 6", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 7", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 8", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 9", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 10", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 11", "Mechanic", "複数", "武器カスタム納品"],
  ["Gunsmith - Part 12", "Mechanic", "複数", "武器カスタム納品"],
  ["Signal - Part 1", "Mechanic", "Shoreline", "通信塔の確認"],
  ["Signal - Part 2", "Mechanic", "Shoreline", "リゾート内調査"],
  ["Signal - Part 3", "Mechanic", "複数", "電子機器納品"],
  ["Signal - Part 4", "Mechanic", "複数", "ビーコン設置"],
  ["Farming - Part 1", "Mechanic", "Factory", "制御盤修理"],
  ["Farming - Part 2", "Mechanic", "複数", "ケーブル等納品"],
  ["Farming - Part 3", "Mechanic", "Factory", "制御盤設置"],
  ["Farming - Part 4", "Mechanic", "複数", "GPU納品"],
  ["Bad Habit", "Mechanic", "複数", "タバコ類を納品"],
  ["A Shooter Born in Heaven", "Mechanic", "複数", "長距離HS"],

  ["Only Business", "Ragman", "Interchange", "防具と装備納品"],
  ["Make ULTRA Great Again", "Ragman", "Interchange", "店内電源作業"],
  ["Big Sale", "Ragman", "Interchange", "店舗を巡回"],
  ["The Blood of War - Part 1", "Ragman", "Shoreline", "タンクにマーカー設置"],
  ["The Blood of War - Part 2", "Ragman", "Interchange", "燃料関連アイテム納品"],
  ["The Blood of War - Part 3", "Ragman", "Woods", "SUVを調査"],
  ["Database - Part 1", "Ragman", "Interchange", "店内の記録媒体を回収"],
  ["Database - Part 2", "Ragman", "Interchange", "追加媒体の回収"],
  ["Sew it Good - Part 1", "Ragman", "複数", "アーマー納品"],
  ["Sew it Good - Part 2", "Ragman", "複数", "タクティカルリグ納品"],
  ["Sew it Good - Part 3", "Ragman", "複数", "高耐久アーマー納品"],
  ["Sew it Good - Part 4", "Ragman", "複数", "追加防具納品"],
  ["Living High is Not a Crime - Part 1", "Ragman", "複数", "高級品納品"],
  ["Living High is Not a Crime - Part 2", "Ragman", "複数", "高級品納品"],
  ["Minibus", "Ragman", "Interchange", "バスにマーカー設置"],

  ["Introduction", "Jaeger", "Woods", "キャンプで手紙回収"],
  ["Acquaintance", "Jaeger", "複数", "食料アイテム納品"],
  ["The Survivalist Path - Unprotected but Dangerous", "Jaeger", "Woods", "防具なしでScav討伐"],
  ["The Survivalist Path - Thrifty", "Jaeger", "Woods", "埋設物資を設置"],
  ["The Survivalist Path - Zhivchik", "Jaeger", "複数", "脱水状態で脱出"],
  ["The Survivalist Path - Wounded Beast", "Jaeger", "複数", "痛み状態で討伐"],
  ["The Survivalist Path - Tough Guy", "Jaeger", "Factory", "回復せず脱出"],
  ["The Survivalist Path - Eagle-Owl", "Jaeger", "Factory", "夜間討伐"],
  ["The Tarkov Shooter - Part 1", "Jaeger", "複数", "ボルトアクションで条件達成"],
  ["The Tarkov Shooter - Part 2", "Jaeger", "複数", "ボルトアクションで条件達成"],
  ["The Tarkov Shooter - Part 3", "Jaeger", "複数", "近距離でPMC討伐"],
  ["The Tarkov Shooter - Part 4", "Jaeger", "複数", "長距離でPMC討伐"],
  ["The Tarkov Shooter - Part 5", "Jaeger", "複数", "脚部命中でPMC討伐"],
  ["The Tarkov Shooter - Part 6", "Jaeger", "複数", "ボルトアクション連続討伐"],
  ["The Tarkov Shooter - Part 7", "Jaeger", "複数", "サプレッサーでPMC討伐"],
  ["The Tarkov Shooter - Part 8", "Jaeger", "Woods", "3連続PMC討伐"],
  ["The Tarkov Shooter - Part 9", "Jaeger", "複数", "100m超HS"],
  ["The Tarkov Shooter - Part 10", "Jaeger", "複数", "最終段階"],
  ["Hunting Trip", "Jaeger", "Woods", "M700でShturman討伐"],
  ["Hunter", "Jaeger", "Woods", "Shturman討伐"],
  ["Psycho Sniper", "Jaeger", "複数", "高スナイパースキル条件"],
  ["Kill Killa", "Jaeger", "Interchange", "Killa討伐"],
  ["The Huntsman Path - Secured Perimeter", "Jaeger", "Factory", "オフィスエリアPMC討伐"],
  ["The Huntsman Path - Controller", "Jaeger", "Customs", "ヘッドショット討伐"],
  ["The Huntsman Path - Evil Watchman", "Jaeger", "Customs", "寮周辺PMC討伐"],

  ["Collector", "Fence", "複数", "Kappa用アイテム回収"],
];

const defaultTasks = TASK_SEEDS.map(([questName, trader, map, objective], index) => ({
  id: `seed-${index}-${questName.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`,
  questName,
  trader,
  map,
  objective,
  priority: trader === "Fence" || questName.includes("Part 10") ? "高" : "中",
  status: "未着手",
  createdAt: new Date(Date.now() - index * 60000).toISOString(),
}));

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
