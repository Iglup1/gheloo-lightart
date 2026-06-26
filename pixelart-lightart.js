(function() {
  try { if (window.__la_shutdown) window.__la_shutdown(); } catch(_) {}
  const SETTINGS_KEY = '__gheloo_lightart_js_settings_v1';
  const LOG_KEY = '__gheloo_lightart_js_log_v1';
  const CHECKPOINT_KEY = '__gheloo_lightart_js_checkpoint_v1';

  const LIGHT_TYPES = {
    XXL: { typeId: 886600850, pageId: 368, offerId: 36841, radius: 170, name: 'hfdiy_NewLight_XXL_xueze' },
    XL:  { typeId: 886600851, pageId: 368, offerId: 36842, radius: 126, name: 'hfdiy_NewLight_XL_xueze' },
    L:   { typeId: 886600852, pageId: 368, offerId: 36844, radius: 82,  name: 'hfdiy_NewLight_L_xueze' },
    M:   { typeId: 886600853, pageId: 368, offerId: 36843, radius: 42,  name: 'hfdiy_NewLight_M_xueze' },
    S:   { typeId: 886600854, pageId: 368, offerId: 36845, radius: 18,  name: 'hfdiy_NewLight_S_xueze' }
  };

  const COLORS = {
    0: { name: 'white',  r: 255, g: 255, b: 255, hex: '#ffffff' },
    1: { name: 'red',    r: 255, g: 18,  b: 10,  hex: '#ff120a' },
    2: { name: 'orange', r: 255, g: 148, b: 8,   hex: '#ff9408' },
    3: { name: 'yellow', r: 255, g: 255, b: 0,   hex: '#ffff00' },
    4: { name: 'green',  r: 0,   g: 245, b: 20,  hex: '#00f514' },
    5: { name: 'cyan',   r: 0,   g: 235, b: 235, hex: '#00ebeb' },
    6: { name: 'purple', r: 92,  g: 58,  b: 255, hex: '#5c3aff' },
    7: { name: 'pink',   r: 215, g: 0,   b: 245, hex: '#d700f5' }
  };

  const LIGHT_RENDER = {
    0: { inner: [255,255,255], outer: [70,70,70] },
    1: { inner: [255,0,0],     outer: [54,0,0] },
    2: { inner: [255,165,0],   outer: [64,34,0] },
    3: { inner: [255,255,0],   outer: [60,60,0] },
    4: { inner: [0,255,0],     outer: [0,58,0] },
    5: { inner: [0,245,245],   outer: [0,58,58] },
    6: { inner: [88,68,255],   outer: [18,10,70] },
    7: { inner: [235,0,255],   outer: [50,0,64] }
  };

  const NEON_PRISMA = {
    pageId: 4848,
    firstOfferId: 26526,
    lastOfferId: 26717,
    firstTypeId: 0x34DB8176,
    lastTypeId: 0x34DB825D,
    hex: {
      1:'F7EBBC',2:'FFD837',3:'FF9900',4:'FF99BC',5:'E14218',6:'672913',7:'007223',8:'92D13D',9:'AC5AB1',10:'835AB1',
      11:'5EAAF8',12:'ABD0D2',13:'525252',14:'FFFFFE',15:'99FFCC',16:'666600',17:'6F3D0C',18:'778084',19:'BCC0C4',20:'A1E8FD',
      21:'2CBFFF',22:'0074FF',23:'0000FF',24:'0000C8',25:'0085FF',26:'6685FF',27:'BCB7FF',28:'DDB6FE',29:'9C73FF',30:'683EFF',
      31:'3F1BC7',32:'96008E',33:'DE00D7',34:'FE72FF',35:'FEB6FE',36:'F5BFE1',37:'FF549C',38:'E7005F',39:'E7005F',40:'FF3600',
      41:'FF7852',42:'F5D1B3',43:'FDE1B1',44:'FEA13D',45:'E76000',46:'8D1600',47:'513100',48:'AD8100',49:'FDD97E',50:'9ABD00',
      51:'DBF96F',52:'BAFA00',53:'00BA00',54:'007900',55:'2E632E',56:'00AA00',57:'52DA50',58:'B6FA70',59:'8AAE00',60:'0D380C',
      61:'005900',62:'00A943',63:'00A943',64:'4EFA99',65:'00F8FD',66:'00E9E5',67:'008895',68:'004059',69:'336666',70:'000001'
    }
  };

  const DEFAULTS = {
    generatorMode: 'light_art',
    variant: 'stacked',
    renderWidth: 1000,
    roomW: 63,
    roomH: 63,
    crop: true,
    alpha: 8,
    sat: 34,
    bright: 0,
    contrast: 18,
    gamma: 100,
    redPower: 100,
    greenPower: 100,
    bluePower: 100,
    focus: 55,
    bgDim: 45,
    darkCut: 5,
    coarseStep: 7,
    midStep: 3,
    detailStep: 1,
    intensity: 88,
    overlap: 72,
    stack: 55,
    mix: 72,
    whiteFill: 70,
    maxLights: 15500,
    startX: 21,
    startY: 62,
    xyStep: 1,
    baseBh: 0,
    bhStep: 0.5,
    rotation: 2,
    delay: 300,
    settingDelay: 1000,
    burst: 3,
    burstPause: 185,
    retry: 185,
    attempts: 20,
    chunkMode: true,
    chunkSize: 20,
    chunkCols: 2,
    chunkSelection: '',
    chunkBleed: 3,
    chunkRightX: 27,
    chunkRightY: -2,
    chunkUpX: 0,
    chunkUpY: -29,
    markerCylinderType: 886731030,
    markerCylinderPage: 2026,
    markerCylinderOffer: 6572,
    markerCornerType: 886748112,
    markerCornerPage: 348,
    markerCornerOffer: 21567,
    markerNumberType: 886656643,
    markerNumberPage: -1,
    markerNumberOffer: 240903,
    markerNumberBh: 0,
    markerNumberRot: 4,
    markerBh: 0,
    markerRot: 2,
    typeXXL: 886600850,
    typeXL: 886600851,
    typeL: 886600852,
    typeM: 886600853,
    typeS: 886600854,
    pageXXL: 368,
    pageXL: 368,
    pageL: 368,
    pageM: 368,
    pageS: 368,
    offerXXL: 36841,
    offerXL: 36842,
    offerL: 36844,
    offerM: 36843,
    offerS: 36845
  };

  let settings = loadSettings();
  settings.settingDelay = Math.max(1000, parseFloat(settings.settingDelay) || DEFAULTS.settingDelay);
  settings.burstPause = Math.max(185, parseFloat(settings.burstPause) || DEFAULTS.burstPause);
  settings.retry = Math.max(185, parseFloat(settings.retry) || DEFAULTS.retry);
  settings.delay = Math.max(0, parseFloat(settings.delay) || DEFAULTS.delay);
  settings.attempts = Math.max(1, parseInt(settings.attempts, 10) || DEFAULTS.attempts);
  settings.baseBh = Math.max(0, parseFloat(String(settings.baseBh).replace(',', '.')) || 0);
  settings.bhStep = Math.max(0.1, parseFloat(String(settings.bhStep).replace(',', '.')) || DEFAULTS.bhStep);
  let active = true;
  let image = null;
  let imageName = '';
  let plan = [];
  let packetPreviewMode = false;
  let roomPreviewOriginalPlan = null;
  let running = false;
  let stopRequested = false;
  let ackDetails = [];
  let progressStart = 0;
  let purchaseOkCounter = 0;
  let buildStateAck = { bh: null, bs: null, bd: null, bhAt: 0, bsAt: 0, bdAt: 0 };
  let placeFlowSincePause = 0;
  let lastBuildSettingSentAt = 0;
  let localInventory = { byType: {}, byItem: {}, loadedAt: 0 };
  let purchaseHistory = [];
  let placeRemoveAcks = [];
  let previewFrame = { w: 1, h: 1, work: null };
  let sourceFrame = { w: 1, h: 1, work: null };
  let previewView = { zoom: 1, x: 0, y: 0 };
  let buildLog = loadBuildLog();
  let checkpoint = loadCheckpoint();
  let resumeSkip = 0;
  let previewPlacementActive = false;
  let previewPlacementIds = [];
  let previewPlacementRun = false;
  window.__la_shutdown = function() {
    active = false;
    try { if (window.__la_resizeObserver) window.__la_resizeObserver.disconnect(); } catch(_) {}
    const old = document.getElementById('__la');
    if (old) old.remove();
  };

  function loadSettings() {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')); }
    catch(_) { return Object.assign({}, DEFAULTS); }
  }
  function saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch(_) {}
  }
  function loadBuildLog() {
    try { return JSON.parse(localStorage.getItem(LOG_KEY) || '[]'); }
    catch(_) { return []; }
  }
  function saveBuildLog() {
    try { localStorage.setItem(LOG_KEY, JSON.stringify(buildLog.slice(-250))); } catch(_) {}
  }
  function loadCheckpoint() {
    try { return JSON.parse(localStorage.getItem(CHECKPOINT_KEY) || 'null'); }
    catch(_) { return null; }
  }
  function saveCheckpoint(data) {
    checkpoint = Object.assign({ at: new Date().toISOString(), imageName }, data || {});
    try { localStorage.setItem(CHECKPOINT_KEY, JSON.stringify(checkpoint)); } catch(_) {}
  }
  function clearCheckpoint() {
    checkpoint = null;
    try { localStorage.removeItem(CHECKPOINT_KEY); } catch(_) {}
  }
  function logBuild(root, text, data) {
    const line = {
      t: new Date().toLocaleTimeString(),
      text: String(text || ''),
      data: data || null
    };
    buildLog.push(line);
    if (buildLog.length > 250) buildLog.splice(0, buildLog.length - 250);
    saveBuildLog();
    if (root) {
      const out = root.querySelector('#__la_log');
      if (out) out.textContent = formatBuildLog();
    }
  }
  function formatBuildLog() {
    return buildLog.map(function(x, i) {
      const data = x.data ? ' ' + JSON.stringify(x.data) : '';
      return String(i + 1).padStart(3, '0') + ' [' + x.t + '] ' + x.text + data;
    }).join('\n');
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function sleep(ms) { return new Promise(function(resolve) { setTimeout(resolve, ms); }); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function byte(v) { return clamp(Math.round(v), 0, 255); }
  function lum(r, g, b) { return (r * 0.299 + g * 0.587 + b * 0.114) / 255; }
  function satOf(r, g, b) {
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    return mx ? (mx - mn) / mx : 0;
  }
  function inputNum(root, id, fallback) {
    const el = root.querySelector(id);
    const n = parseFloat(String(el && el.value || '').replace(',', '.'));
    return Number.isFinite(n) ? n : fallback;
  }
  function inputVal(root, id, fallback) {
    const el = root.querySelector(id);
    return el ? String(el.value || '') : fallback;
  }
  function packetId(dir, short, fallback) {
    const table = (window.PKT && window.PKT[dir]) || {};
    for (const pair of Object.entries(table)) {
      if (window.shortName(pair[1], dir) === short) return parseInt(pair[0], 10);
    }
    return fallback;
  }
  function sendOut(short, payload, fallback) {
    const id = packetId('OUT', short, fallback);
    if (!id) throw new Error('Packet niet gevonden: ' + short);
    window.sendPacket('OUT', id, payload || '');
  }
  function sendIn(short, payload, fallback) {
    const id = packetId('IN', short, fallback);
    if (!id) throw new Error('Packet niet gevonden: ' + short);
    return window.sendPacket('IN', id, payload || '');
  }
  function packetString(value) {
    return '{s:"' + String(value == null ? '' : value).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"}';
  }
  function sendChatCommand(text) {
    sendOut('Chat', '{s:"' + String(text).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"}{i:26}', 1314);
  }
  function sendPlace(item) {
    sendOut('PlaceObject', '{s:"' + item.id + ' ' + item.x + ' ' + item.y + ' ' + item.rotation + '"}', 1258);
  }
  function sendPickup(objectId) {
    sendOut('PickupObject', '{i:10}{i:' + objectId + '}', 3456);
  }
  function injectObjectRemove(objectId) {
    return sendIn('ObjectRemove', '{s:"' + objectId + '"}{i:17586}{i:218103808}{b:false}', 2703);
  }
  function injectObjectsPacket(items) {
    const ownerId = parseInt((window.Room && (window.Room.ownerId || window.Room.userId)) || 4502029, 10) || 4502029;
    const ownerName = (window._selfName || (window.Room && window.Room.ownerName) || 'kadet');
    let payload = '{i:1}{i:' + ownerId + '}' + packetString(ownerName) + '{i:' + items.length + '}';
    items.forEach(function(item) {
      payload +=
        '{i:' + parseInt(item.id, 10) + '}' +
        '{i:' + parseInt(item.typeId, 10) + '}' +
        '{i:' + Math.round(item.x) + '}' +
        '{i:' + Math.round(item.y) + '}' +
        '{i:' + Math.round(item.rotation || 0) + '}' +
        packetString(item.z == null ? '0.0' : item.z) +
        packetString('0.001') +
        '{i:1}{i:0}' +
        packetString(item.state == null ? '0' : item.state) +
        '{i:-1}{i:1}{i:' + ownerId + '}';
    });
    return sendIn('Objects', payload, 1778);
  }
  function sendPurchase(pageId, offerId, amount) {
    sendOut('PurchaseFromCatalog', '{i:' + pageId + '}{i:' + offerId + '}{s:""}{i:' + amount + '}', 3492);
  }
  function sendNumberPurchase(offerId) {
    sendOut('PurchaseFromCatalog', '{i:-1}{i:' + offerId + '}{i:0}{b:false}{b:true}', 3492);
  }
  async function purchaseAmount(pageId, offerId, amount, typeId) {
    const count = Math.max(1, Math.min(100, Math.round(parseFloat(amount) || 1)));
    if (stopRequested) return false;
    if (typeId) purchaseHistory.push({ typeId: parseInt(typeId, 10), remaining: count, expires: Date.now() + 120000 });
    const before = purchaseOkCounter;
    if (parseInt(pageId, 10) === -1) {
      for (let i = 0; i < count; i++) {
        sendNumberPurchase(offerId);
        await sleep(120);
      }
    } else {
      sendPurchase(pageId, offerId, count);
      await waitPurchaseOk(before, 2500);
    }
    return true;
  }
  function requestInventory() {
    sendOut('RequestFurniInventory', '', 3150);
  }
  function rememberInventoryItem(item) {
    if (!item || String(item.type || 'S').toUpperCase() !== 'S') return;
    const typeId = parseInt(item.typeId, 10);
    const placeId = parseInt(item.placementId || item.id, 10);
    if (!Number.isFinite(typeId) || !Number.isFinite(placeId)) return;
    localInventory.byItem[placeId] = typeId;
    if (!localInventory.byType[typeId]) localInventory.byType[typeId] = [];
    if (!localInventory.byType[typeId].includes(placeId)) localInventory.byType[typeId].push(placeId);
    localInventory.loadedAt = Date.now();
  }
  function forgetInventoryItem(itemId) {
    const id = parseInt(itemId, 10);
    if (!Number.isFinite(id)) return;
    placeRemoveAcks.push({ id: id, at: Date.now() });
    if (placeRemoveAcks.length > 500) placeRemoveAcks.splice(0, placeRemoveAcks.length - 500);
    const typeId = localInventory.byItem[id];
    if (typeId && localInventory.byType[typeId]) {
      localInventory.byType[typeId] = localInventory.byType[typeId].filter(function(x) { return x !== id; });
    }
    delete localInventory.byItem[id];
  }
  function rebuildLocalInventoryFromWindow() {
    localInventory = { byType: {}, byItem: {}, loadedAt: Date.now() };
    const items = (window.Inventory && window.Inventory.items) || {};
    Object.values(items).forEach(rememberInventoryItem);
  }
  function parseUnseenItemIds(raw) {
    const r = window.makeReader && window.makeReader(raw);
    const ids = [];
    if (!r) return ids;
    try {
      const cats = r.int();
      if (cats < 0 || cats > 20) throw new Error('bad category count');
      for (let c = 0; c < cats; c++) {
        r.int();
        const count = r.int();
        if (count < 0 || count > 10000) throw new Error('bad unseen count');
        for (let i = 0; i < count; i++) ids.push(r.int());
      }
      return ids.filter(function(id) { return id > 0; });
    } catch(_) {}
    try {
      const r2 = window.makeReader && window.makeReader(raw);
      r2.int(); r2.int();
      const count = r2.int();
      for (let i = 0; i < count && i < 10000; i++) ids.push(r2.int());
    } catch(_) {}
    return ids.filter(function(id) { return id > 0; });
  }
  function mapUnseenItems(raw) {
    const ids = parseUnseenItemIds(raw);
    if (!ids.length) return;
    const now = Date.now();
    purchaseHistory = purchaseHistory.filter(function(j) { return j && j.remaining > 0 && j.expires > now; });
    ids.forEach(function(id) {
      while (purchaseHistory.length && purchaseHistory[0].remaining <= 0) purchaseHistory.shift();
      const job = purchaseHistory[0];
      if (!job) return;
      rememberInventoryItem({ type: 'S', placementId: id, id: id, typeId: job.typeId });
      job.remaining--;
    });
  }
  function sizeConfig(size) {
    const base = LIGHT_TYPES[size] || LIGHT_TYPES.M;
    return {
      size,
      typeId: parseInt(settings['type' + size] || base.typeId, 10),
      pageId: parseInt(settings['page' + size] || base.pageId, 10),
      offerId: parseInt(settings['offer' + size] || base.offerId, 10),
      radius: base.radius,
      name: base.name
    };
  }
  function lightSizeFromTypeId(typeId) {
    const id = parseInt(typeId, 10);
    let found = null;
    Object.keys(LIGHT_TYPES).forEach(function(size) {
      const cfg = sizeConfig(size);
      if (parseInt(cfg.typeId, 10) === id) found = size;
    });
    return found;
  }
  function roomPacketTokens(text) {
    const tokens = [];
    String(text || '').replace(/\{([is]):(?:"((?:\\.|[^"\\])*)"|(-?\d+(?:\.\d+)?))\}/g, function(_, type, str, num) {
      if (type === 'i') tokens.push({ type: 'i', value: parseInt(num, 10) });
      else tokens.push({ type: 's', value: String(str || '').replace(/\\"/g, '"').replace(/\\\\/g, '\\') });
      return '';
    });
    return tokens;
  }
  function parseRoomPacketObjects(text) {
    const tokens = roomPacketTokens(text);
    const out = [];
    const seen = {};
    for (let i = 1; i < tokens.length - 6; i++) {
      if (tokens[i].type !== 'i') continue;
      const size = lightSizeFromTypeId(tokens[i].value);
      if (!size || !tokens[i - 1] || tokens[i - 1].type !== 'i') continue;
      const id = tokens[i - 1].value;
      const x = tokens[i + 1], y = tokens[i + 2], rot = tokens[i + 3], z = tokens[i + 4];
      if (!x || !y || !rot || !z || x.type !== 'i' || y.type !== 'i' || rot.type !== 'i' || z.type !== 's') continue;
      let state = '0';
      for (let j = i + 5; j < Math.min(tokens.length, i + 14); j++) {
        if (tokens[j].type === 's' && /^-?\d+$/.test(tokens[j].value)) {
          state = tokens[j].value;
          break;
        }
      }
      const key = id + '|' + tokens[i].value + '|' + x.value + '|' + y.value + '|' + state;
      if (seen[key]) continue;
      seen[key] = true;
      out.push({ id, typeId: tokens[i].value, size, x: x.value, y: y.value, rot: rot.value, z: parseFloat(z.value), state });
    }
    return out;
  }
  function normalizeHeight(v) {
    const n = parseFloat(String(v).replace(',', '.'));
    if (!Number.isFinite(n)) return String(v);
    const rounded = Math.round(n * 100) / 100;
    if (Math.abs(rounded - Math.round(rounded)) < 0.001) return String(Math.round(rounded));
    return rounded.toFixed(2).replace(/\.?0+$/, '');
  }
  function adjustRgb(r, g, b, satPct, brightPct, contrastPct, gammaPct, redPct, greenPct, bluePct) {
    const sat = 1 + satPct / 100;
    const bright = 1 + brightPct / 100;
    const contrast = 1 + contrastPct / 100;
    const gamma = Math.max(0.2, gammaPct / 100);
    const gray = r * 0.299 + g * 0.587 + b * 0.114;
    function one(ch) {
      const saturated = gray + (ch - gray) * sat;
      const contrasted = ((saturated - 128) * contrast) + 128;
      const brightened = clamp(contrasted * bright, 0, 255);
      return byte(255 * Math.pow(brightened / 255, 1 / gamma));
    }
    return {
      r: byte(one(r) * (Math.max(0, redPct || 100) / 100)),
      g: byte(one(g) * (Math.max(0, greenPct || 100) / 100)),
      b: byte(one(b) * (Math.max(0, bluePct || 100) / 100))
    };
  }
  function noise01(seedX, seedY, salt) {
    let h = ((seedX * 73856093) ^ (seedY * 19349663) ^ ((salt || 0) * 83492791)) | 0;
    h ^= h >>> 13;
    h = Math.imul(h, 1274126177);
    return (h & 65535) / 65535;
  }
  function jitter(seedX, seedY, amount) {
    const h = ((seedX * 73856093) ^ (seedY * 19349663) ^ (seedX * seedY * 83492791)) | 0;
    return {
      x: (((h & 255) / 255) - 0.5) * amount,
      y: ((((h >>> 8) & 255) / 255) - 0.5) * amount
    };
  }
  function detailAt(data, w, h, x, y) {
    const i = (y * w + x) * 4;
    let total = 0, count = 0;
    for (let yy = Math.max(0, y - 1); yy <= Math.min(h - 1, y + 1); yy++) {
      for (let xx = Math.max(0, x - 1); xx <= Math.min(w - 1, x + 1); xx++) {
        if (xx === x && yy === y) continue;
        const j = (yy * w + xx) * 4;
        total += Math.abs(data[i] - data[j]) + Math.abs(data[i + 1] - data[j + 1]) + Math.abs(data[i + 2] - data[j + 2]);
        count++;
      }
    }
    return count ? total / count : 0;
  }
  function sampleCell(data, w, h, cx, cy, radius) {
    const x0 = Math.max(0, Math.floor(cx - radius));
    const y0 = Math.max(0, Math.floor(cy - radius));
    const x1 = Math.min(w - 1, Math.ceil(cx + radius));
    const y1 = Math.min(h - 1, Math.ceil(cy + radius));
    let r = 0, g = 0, b = 0, a = 0, n = 0;
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const i = (y * w + x) * 4;
        if (data[i + 3] < 2) continue;
        r += data[i]; g += data[i + 1]; b += data[i + 2]; a += data[i + 3]; n++;
      }
    }
    return n ? { r: r / n, g: g / n, b: b / n, a: a / n } : { r: 0, g: 0, b: 0, a: 0 };
  }
  function nearestHueMix(r, g, b, allowWhite) {
    const s = satOf(r, g, b);
    const l = lum(r, g, b);
    if (s < 0.18) return allowWhite && l > 0.32 ? [0] : [];
    if (r > g * 1.10 && r > b * 1.18) {
      if (g > r * 0.58) return [2, 1];
      if (g > r * 0.40) return [1, 2];
      if (b > r * 0.45) return [7, 1];
      return [1];
    }
    if (g > r * 1.18 && g > b * 1.18) {
      if (b > g * 0.45) return [5, 4];
      if (r > g * 0.45) return [3, 4];
      return [4];
    }
    if (b > r * 1.18 && b > g * 1.18) {
      if (r > b * 0.45) return [7, 6];
      if (g > b * 0.45) return [5, 6];
      return [6];
    }
    if (r > 150 && g > 135 && b < 105) return Math.abs(r - g) < 42 ? [3, 2] : [2, 1];
    if (r > 110 && g > 70 && b > 45) return [2, 3];
    if (r > 130 && b > 130) return [7, 6];
    if (g > 120 && b > 120) return [5];
    return r + g > b * 2 ? [3] : [5];
  }
  function lightMixColor(codes) {
    let r = 0, g = 0, b = 0;
    codes.forEach(function(code) {
      const c = COLORS[code] || COLORS[0];
      r += c.r; g += c.g; b += c.b;
    });
    return { r: Math.min(255, r), g: Math.min(255, g), b: Math.min(255, b) };
  }
  function hueVec(r, g, b) {
    const m = Math.max(1, r, g, b);
    return { r: r / m, g: g / m, b: b / m };
  }
  function chooseLightMix(r, g, b, allowWhite, mixPower) {
    const s = satOf(r, g, b);
    const l = lum(r, g, b);
    if (l < 0.035 || (s < 0.10 && !allowWhite)) return [];
    const target = hueVec(r, g, b);
    const redPure = r > g * 1.55 && r > b * 1.55 && g < r * 0.33 && b < r * 0.36;
    const orangeWarm = r > g * 1.08 && g > b * 1.35 && g > r * 0.32;
    const magentaWarm = r > 95 && b > 80 && b > g * 1.12;
    const one = [[1],[2],[3],[4],[5],[6],[7]];
    const two = [
      [2,3],[2,4],[3,4],[4,5],[5,6],[6,7],[5,7],
      [1,2],[1,7],[1,3]
    ];
    const three = mixPower > 62 ? [[2,3,4],[5,6,7],[2,6,7],[3,5,6]] : [];
    const white = allowWhite ? [[0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7]] : [];
    const candidates = one.concat(mixPower > 28 ? two : [], three, white);
    let best = [], bestScore = Infinity;
    candidates.forEach(function(codes) {
      const m = lightMixColor(codes);
      const ms = satOf(m.r, m.g, m.b);
      const ml = lum(m.r, m.g, m.b);
      const mv = hueVec(m.r, m.g, m.b);
      let score = (Math.pow(target.r - mv.r, 2) + Math.pow(target.g - mv.g, 2) + Math.pow(target.b - mv.b, 2)) * 160000;
      score += Math.abs(ml - l) * 17000;
      if (s > 0.28 && codes.indexOf(0) !== -1) score += 90000 * s;
      if (s > 0.22 && ms < s * 0.55) score += 60000;
      if (!allowWhite && codes.indexOf(0) !== -1) score += 200000;
      if (codes.indexOf(1) !== -1 && !redPure) score += 85000;
      if (codes.length === 1 && codes[0] === 1 && !redPure) score += 160000;
      if (orangeWarm && codes.indexOf(2) === -1 && codes.indexOf(3) === -1) score += 42000;
      if (magentaWarm && codes.indexOf(6) === -1 && codes.indexOf(7) === -1) score += 52000;
      if (codes.length > 2 && mixPower < 72) score += 28000;
      if (score < bestScore) { bestScore = score; best = codes; }
    });
    if (best.length && best[0] === 0 && s > 0.24) return nearestHueMix(r, g, b, false).slice(0, mixPower > 25 ? 2 : 1);
    return best;
  }
  function nearestNeonPrisma(r, g, b) {
    let best = 1, bestD = Infinity;
    Object.entries(NEON_PRISMA.hex).forEach(function(kv) {
      const n = parseInt(kv[0], 10);
      const h = kv[1];
      const rr = parseInt(h.slice(0, 2), 16);
      const gg = parseInt(h.slice(2, 4), 16);
      const bb = parseInt(h.slice(4, 6), 16);
      const d = Math.pow(r - rr, 2) + Math.pow(g - gg, 2) + Math.pow(b - bb, 2);
      if (d < bestD) { bestD = d; best = n; }
    });
    return {
      colorNo: best,
      name: 'bc_leet_muur_prisma*' + best,
      pageId: NEON_PRISMA.pageId,
      offerId: best === 70 ? NEON_PRISMA.lastOfferId : NEON_PRISMA.firstOfferId + best - 1,
      typeId: best === 70 ? NEON_PRISMA.lastTypeId : NEON_PRISMA.firstTypeId + best - 1
    };
  }
  function cropVisibleBox(data, w, h, alphaCutoff) {
    let minX = w, minY = h, maxX = -1, maxY = -1;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const a = data[(y * w + x) * 4 + 3];
        if (a < alphaCutoff) continue;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
    if (maxX < minX || maxY < minY) return { x: 0, y: 0, w, h };
    return { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };
  }
  function focusWeight(x, y, w, h, focusPct) {
    if (focusPct <= 0) return 1;
    const nx = (x / Math.max(1, w - 1) - 0.52) / 0.58;
    const ny = (y / Math.max(1, h - 1) - 0.48) / 0.62;
    const d = Math.sqrt(nx * nx + ny * ny);
    const t = clamp((d - 0.72) / 0.55, 0, 1);
    return 1 - (focusPct / 100) * t;
  }
  function lightLayerFor(kind, l, det) {
    if (kind === 'halo') return l > 0.45 ? 'XXL' : 'XL';
    if (kind === 'body') return det > 0.35 ? 'M' : 'L';
    return det > 0.30 ? 'S' : 'M';
  }
  function pushLight(out, w, h, x, y, colorCode, size, radius, opacity, edge, layer, stackIndex) {
    if (out.length >= settings.maxLights) return;
    const c = COLORS[colorCode] || COLORS[0];
    out.push({
      px: clamp(x, 0, w - 1),
      py: clamp(y, 0, h - 1),
      cx: clamp(x, 0, w - 1),
      cy: clamp(y, 0, h - 1),
      colorCode,
      colorName: c.name,
      state: String(colorCode),
      size,
      typeId: sizeConfig(size).typeId,
      radius,
      opacity,
      edge,
      layer,
      stackIndex: stackIndex || 0
    });
  }
  function placeStacked(out, w, h, x, y, rgb, radius, opacity, edge, kind, allowWhite, stackPower, mixPower, sx, sy) {
    const det = detailAt(out.__data, w, h, clamp(Math.round(x), 0, w - 1), clamp(Math.round(y), 0, h - 1)) / 255;
    const l = lum(rgb.r, rgb.g, rgb.b);
    const colors = chooseLightMix(rgb.r, rgb.g, rgb.b, allowWhite, mixPower);
    if (!colors.length) return;
    const maxMix = mixPower > 70 ? 3 : (mixPower > 25 ? 2 : 1);
    const useColors = colors.slice(0, maxMix);
    useColors.forEach(function(code, idx) {
      const ox = (idx - ((useColors.length - 1) / 2)) * radius * 0.28;
      const oy = (((idx * 2) % 3) - 1) * radius * 0.12;
      const size = lightLayerFor(kind, l, det);
      pushLight(out, w, h, x + ox, y + oy, code, size, radius, opacity / (1 + idx * 0.28), edge, kind, idx);
      if (stackPower > 30 && l > 0.18) {
        pushLight(out, w, h, x + ox + (noise01(sx, sy, 301 + idx) - 0.5) * radius * 0.10, y + oy + (noise01(sx, sy, 401 + idx) - 0.5) * radius * 0.10, code, size, radius * 0.70, opacity * 0.62, edge * 0.72, kind + '-stack', idx + 1);
      }
      if (stackPower > 65 && l > 0.42 && code !== 0 && kind === 'core') {
        const coreSize = size === 'XXL' || size === 'XL' ? 'L' : size;
        pushLight(out, w, h, x + ox, y + oy, code, coreSize, radius * 0.38, opacity * 0.72, edge * 0.55, kind + '-core', idx + 2);
      }
    });
  }
  function dominantLightColor(r, g, b, allowWhite, mixPower) {
    const colors = chooseLightMix(r, g, b, allowWhite, mixPower);
    if (!colors.length) return [];
    const l = lum(r, g, b);
    const s = satOf(r, g, b);
    const max = (l > 0.55 && s < 0.24) ? 2 : (mixPower > 68 && s > 0.18 ? 2 : 1);
    return colors.slice(0, max);
  }
  function addLightArtRaster(raw, w, h, work, intensity, overlap, stackPower, mixPower) {
    const maxLights = clamp(+settings.maxLights || 65000, 1, 120000);
    const baseOpacity = 0.12 + intensity * 0.14;
    const glowOpacity = 0.09 + intensity * 0.11;

    // Pass 1: S light at every visible pixel — deterministic, no jitter/noise skip
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        if (work[i + 3] < 2) continue;
        const r = work[i], g = work[i + 1], b = work[i + 2];
        const l = lum(r, g, b);
        const s = satOf(r, g, b);
        if (l < 0.05 && s < 0.18) continue;
        const allowWhite = l > 0.58 && s < 0.22;
        const colors = chooseLightMix(r, g, b, allowWhite, mixPower);
        if (!colors.length) continue;
        const maxMix = mixPower > 68 ? Math.min(colors.length, 2) : 1;
        for (let ci = 0; ci < maxMix; ci++) {
          pushLight(raw, w, h, x, y, colors[ci], 'S', 0.9 + overlap * 0.35,
            Math.min(0.28, baseOpacity * (0.5 + l * 0.9)),
            0.16, 'base', ci);
        }
        if (stackPower > 38 && l > 0.20) {
          pushLight(raw, w, h, x, y, colors[0], 'S', 0.85 + overlap * 0.22,
            Math.min(0.24, baseOpacity * (0.32 + l * 0.55)),
            0.12, 'base-stack', 2);
        }
        if (raw.length >= maxLights) return;
      }
    }

    // Pass 2: M lights for glow (every 2nd pixel, l >= 0.20)
    for (let y = 0; y < h; y += 2) {
      for (let x = 0; x < w; x += 2) {
        const rgb = sampleCell(work, w, h, x, y, 1);
        if (rgb.a < 2) continue;
        const l = lum(rgb.r, rgb.g, rgb.b);
        if (l < 0.20) continue;
        const s = satOf(rgb.r, rgb.g, rgb.b);
        const colors = chooseLightMix(rgb.r, rgb.g, rgb.b, l > 0.62 && s < 0.24, mixPower);
        if (!colors.length) continue;
        pushLight(raw, w, h, x, y, colors[0], 'M', 2 * (0.5 + overlap * 0.15),
          Math.min(0.22, glowOpacity * (0.4 + l * 0.8)),
          0.18, 'mid', 0);
        if (raw.length >= maxLights) return;
      }
    }

    // Pass 3: L lights for bloom (every 4th pixel, l >= 0.40, only if stackPower high enough)
    if (stackPower > 58) {
      for (let y = 0; y < h; y += 4) {
        for (let x = 0; x < w; x += 4) {
          const rgb = sampleCell(work, w, h, x, y, 2);
          if (rgb.a < 2) continue;
          const l = lum(rgb.r, rgb.g, rgb.b);
          if (l < 0.55) continue;
          const s = satOf(rgb.r, rgb.g, rgb.b);
          const colors = chooseLightMix(rgb.r, rgb.g, rgb.b, l > 0.65 && s < 0.25, mixPower);
          if (!colors.length) continue;
          pushLight(raw, w, h, x, y, colors[0], 'L', 3.2 * (0.65 + overlap * 0.16),
            Math.min(0.13, glowOpacity * (0.35 + l * 0.42)),
            0.22, 'glow', 0);
          if (raw.length >= maxLights) return;
        }
      }
    }
  }
  function collectSettings(root) {
    const ids = {
      generatorMode:'#__la_mode', variant:'#__la_variant', renderWidth:'#__la_renderw', roomW:'#__la_roomw', roomH:'#__la_roomh',
      alpha:'#__la_alpha', sat:'#__la_sat', bright:'#__la_bright', contrast:'#__la_contrast', gamma:'#__la_gamma',
      redPower:'#__la_red_power', greenPower:'#__la_green_power', bluePower:'#__la_blue_power',
      focus:'#__la_focus', bgDim:'#__la_bgdim', darkCut:'#__la_dark', coarseStep:'#__la_coarse',
      midStep:'#__la_mid', detailStep:'#__la_fine', intensity:'#__la_intensity', overlap:'#__la_overlap',
      stack:'#__la_stack', mix:'#__la_mix', whiteFill:'#__la_whitefill', maxLights:'#__la_max',
      startX:'#__la_x', startY:'#__la_y', xyStep:'#__la_xystep', baseBh:'#__la_bh', bhStep:'#__la_bhstep',
      rotation:'#__la_rot', delay:'#__la_delay', settingDelay:'#__la_setting_delay', burst:'#__la_burst', burstPause:'#__la_burst_pause', retry:'#__la_retry', attempts:'#__la_attempts',
      chunkSize:'#__la_chunk_size', chunkCols:'#__la_chunk_cols', chunkSelection:'#__la_chunk_select', chunkBleed:'#__la_chunk_bleed',
      chunkRightX:'#__la_chunk_rx', chunkRightY:'#__la_chunk_ry', chunkUpX:'#__la_chunk_ux', chunkUpY:'#__la_chunk_uy',
      markerCylinderType:'#__la_marker_cyl_type', markerCylinderPage:'#__la_marker_cyl_page', markerCylinderOffer:'#__la_marker_cyl_offer',
      markerCornerType:'#__la_marker_corner_type', markerCornerPage:'#__la_marker_corner_page', markerCornerOffer:'#__la_marker_corner_offer',
      markerNumberType:'#__la_marker_num_type', markerNumberPage:'#__la_marker_num_page', markerNumberOffer:'#__la_marker_num_offer',
      markerBh:'#__la_marker_bh', markerRot:'#__la_marker_rot', markerNumberBh:'#__la_marker_num_bh', markerNumberRot:'#__la_marker_num_rot',
      typeXXL:'#__la_type_xxl', typeXL:'#__la_type_xl', typeL:'#__la_type_l', typeM:'#__la_type_m', typeS:'#__la_type_s',
      pageXXL:'#__la_page_xxl', pageXL:'#__la_page_xl', pageL:'#__la_page_l', pageM:'#__la_page_m', pageS:'#__la_page_s',
      offerXXL:'#__la_offer_xxl', offerXL:'#__la_offer_xl', offerL:'#__la_offer_l', offerM:'#__la_offer_m', offerS:'#__la_offer_s'
    };
    Object.entries(ids).forEach(function(kv) {
      const el = root.querySelector(kv[1]);
      if (el) settings[kv[0]] = el.value;
    });
    settings.crop = !!root.querySelector('#__la_crop')?.checked;
    settings.chunkMode = !!root.querySelector('#__la_chunk_mode')?.checked;
    settings.baseBh = Math.max(0, parseFloat(String(settings.baseBh).replace(',', '.')) || 0);
    settings.bhStep = Math.max(0.1, parseFloat(String(settings.bhStep).replace(',', '.')) || DEFAULTS.bhStep);
    settings.settingDelay = Math.max(1000, parseFloat(settings.settingDelay) || DEFAULTS.settingDelay);
    settings.burstPause = Math.max(185, parseFloat(settings.burstPause) || DEFAULTS.burstPause);
    settings.retry = Math.max(185, parseFloat(settings.retry) || DEFAULTS.retry);
    settings.delay = Math.max(0, parseFloat(settings.delay) || DEFAULTS.delay);
    saveSettings();
  }
  function makePlan(root) {
    if (!image) throw new Error('Kies eerst een afbeelding.');
    packetPreviewMode = false;
    roomPreviewOriginalPlan = null;
    collectSettings(root);
    const src = document.createElement('canvas');
    src.width = image.naturalWidth;
    src.height = image.naturalHeight;
    const sx = src.getContext('2d', { willReadFrequently: true });
    sx.drawImage(image, 0, 0);
    const srcData = sx.getImageData(0, 0, src.width, src.height);
    const box = settings.crop ? cropVisibleBox(srcData.data, src.width, src.height, settings.alpha) : { x: 0, y: 0, w: src.width, h: src.height };
    const roomWForPlan = Math.max(1, +settings.roomW || 63);
    const roomHForPlan = Math.max(1, +settings.roomH || 63);
    const chunkForPlan = Math.max(4, +settings.chunkSize || 20);
    settings.__autoSingleChunk = !!settings.chunkMode && !String(settings.chunkSelection || '').trim() && (roomWForPlan <= chunkForPlan && roomHForPlan <= chunkForPlan);
    const lightArtPlan = settings.generatorMode === 'light_art';
    const gridInfoForPlan = chunkGridInfo();
    const tileW = lightArtPlan ? (settings.chunkMode ? gridInfoForPlan.cols * gridInfoForPlan.chunkSize : roomWForPlan) : 0;
    const tileH = lightArtPlan ? (settings.chunkMode ? gridInfoForPlan.rows * gridInfoForPlan.chunkSize : roomHForPlan) : 0;
    const renderW = clamp(parseInt(settings.renderWidth, 10) || 1000, 160, 1400);
    const sourceScale = renderW / Math.max(1, box.w);
    const sourceW = Math.max(1, Math.round(box.w * sourceScale));
    const sourceH = Math.max(1, Math.round(box.h * sourceScale));
    const sourceCanvas = document.createElement('canvas');
    sourceCanvas.width = sourceW;
    sourceCanvas.height = sourceH;
    const sctx2 = sourceCanvas.getContext('2d', { willReadFrequently: true });
    sctx2.imageSmoothingEnabled = true;
    sctx2.drawImage(src, box.x, box.y, box.w, box.h, 0, 0, sourceW, sourceH);
    const sourceImg = sctx2.getImageData(0, 0, sourceW, sourceH);
    const sourceWork = new Uint8ClampedArray(sourceImg.data.length);
    for (let i = 0; i < sourceImg.data.length; i += 4) {
      if (sourceImg.data[i + 3] < (parseInt(settings.alpha, 10) || 8)) { sourceWork[i + 3] = 0; continue; }
      const a = adjustRgb(sourceImg.data[i], sourceImg.data[i + 1], sourceImg.data[i + 2], +settings.sat, +settings.bright, +settings.contrast, +settings.gamma, +settings.redPower, +settings.greenPower, +settings.bluePower);
      sourceWork[i] = a.r; sourceWork[i + 1] = a.g; sourceWork[i + 2] = a.b; sourceWork[i + 3] = 255;
    }
    sourceFrame = { w: sourceW, h: sourceH, work: sourceWork };
    const scale = lightArtPlan ? 1 : renderW / Math.max(1, box.w);
    const w = lightArtPlan ? Math.max(1, Math.round(tileW)) : Math.max(1, Math.round(box.w * scale));
    const h = lightArtPlan ? Math.max(1, Math.round(tileH)) : Math.max(1, Math.round(box.h * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(src, box.x, box.y, box.w, box.h, 0, 0, w, h);
    const img = ctx.getImageData(0, 0, w, h);
    const data = img.data;
    const alphaCut = clamp(parseInt(settings.alpha, 10) || 8, 1, 255);
    const work = new Uint8ClampedArray(data.length);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        if (data[i + 3] < alphaCut) { work[i + 3] = 0; continue; }
        const a = adjustRgb(data[i], data[i + 1], data[i + 2], +settings.sat, +settings.bright, +settings.contrast, +settings.gamma, +settings.redPower, +settings.greenPower, +settings.bluePower);
        const fw = focusWeight(x, y, w, h, +settings.focus);
        const l = lum(a.r, a.g, a.b);
        const s = satOf(a.r, a.g, a.b);
        if (l < (+settings.darkCut / 100) && s < 0.25) { work[i + 3] = 0; continue; }
        const dim = fw < 1 ? fw * (1 - (+settings.bgDim / 220)) : 1;
        work[i] = byte(a.r * dim);
        work[i + 1] = byte(a.g * dim);
        work[i + 2] = byte(a.b * dim);
        work[i + 3] = 255;
      }
    }
    const raw = [];
    raw.__data = work;
    const intensity = (+settings.intensity || 88) / 100;
    const overlap = (+settings.overlap || 72) / 100;
    const stackPower = +settings.stack || 55;
    const mixPower = +settings.mix || 72;
    if (lightArtPlan) {
      addLightArtRaster(raw, w, h, work, intensity, overlap, stackPower, mixPower);
      delete raw.__data;
      plan = raw.slice(0, clamp(+settings.maxLights || 65000, 1, 120000));
      // Use original image-pixel coords for meubel preview: shows stitched chunk layout
      const pvW = w, pvH = h;
      plan.forEach(function(p) { p.cx = p.px; p.cy = p.py; });
      previewFrame = { w: pvW, h: pvH, work };
      renderPreview(root, pvW, pvH);
      root.querySelector('#__la_meta').textContent = imageName + ' | bouwgrid ' + w + 'x' + h + ' | ' + plan.length + ' lampen' + (settings.__autoSingleChunk ? ' | auto 1 chunk' : '');
      return;
    }
    const smallTileArt = lightArtPlan && Math.max(w, h) <= 30;
    const coarse = smallTileArt ? Math.max(4, Math.min(+settings.coarseStep || 30, 10)) : Math.max(8, +settings.coarseStep || 30);
    const mid = smallTileArt ? Math.max(2, Math.min(+settings.midStep || 10, 4)) : Math.max(4, +settings.midStep || 10);
    const fine = smallTileArt ? 1 : Math.max(2, +settings.detailStep || 4);
    for (let sy = 0; sy < h; sy += coarse) {
      for (let sx0 = 0; sx0 < w; sx0 += coarse) {
        const rgb = sampleCell(work, w, h, sx0 + coarse / 2, sy + coarse / 2, coarse / 2);
        const l = lum(rgb.r, rgb.g, rgb.b), s = satOf(rgb.r, rgb.g, rgb.b);
        if (rgb.a < 2 || s < 0.12 || l < 0.045) continue;
        const j = jitter(sx0, sy, coarse * 0.32);
        placeStacked(raw, w, h, sx0 + coarse / 2 + j.x, sy + coarse / 2 + j.y, rgb, coarse * (1.15 + overlap * 0.55), Math.min(0.30, l * 0.30 * intensity), 0.36, 'halo', false, stackPower, mixPower, sx0, sy);
      }
    }
    for (let sy = 0; sy < h; sy += mid) {
      for (let sx0 = 0; sx0 < w; sx0 += mid) {
        const rgb = sampleCell(work, w, h, sx0 + mid / 2, sy + mid / 2, Math.max(1, mid / 2));
        const l = lum(rgb.r, rgb.g, rgb.b), s = satOf(rgb.r, rgb.g, rgb.b);
        if (rgb.a < 2 || l < 0.035 || (s < 0.08 && l < 0.16)) continue;
        if (noise01(sx0, sy, 23) > Math.min(0.96, l * 1.65 + s * 0.48)) continue;
        const j = jitter(sx0 + 1009, sy + 917, mid * 0.42);
        const allowWhite = s < 0.26 && l > 0.14;
        placeStacked(raw, w, h, sx0 + mid / 2 + j.x, sy + mid / 2 + j.y, rgb, mid * (0.82 + overlap * 0.34), Math.min(0.26, l * 0.25 * intensity), 0.24, 'body', allowWhite, stackPower, mixPower, sx0, sy);
      }
    }
    if (+settings.whiteFill > 0) {
      const fillStep = Math.max(mid, fine * 2);
      for (let y = Math.floor(fillStep / 2); y < h; y += fillStep) {
        for (let x = Math.floor(fillStep / 2); x < w; x += fillStep) {
          const i = (y * w + x) * 4;
          const l = lum(work[i], work[i + 1], work[i + 2]);
          const s = satOf(work[i], work[i + 1], work[i + 2]);
          if (work[i + 3] < 2 || s > 0.24 || l < 0.28) continue;
          if (noise01(x, y, 131) > Math.min(0.88, l * 1.25 * (+settings.whiteFill / 100))) continue;
          const rgb = { r: work[i], g: work[i + 1], b: work[i + 2] };
          placeStacked(raw, w, h, x, y, rgb, fillStep * (1.15 + overlap * 0.35), Math.min(0.22, l * 0.19 * intensity), 0.30, 'white-fill', true, stackPower, 0, x, y);
        }
      }
    }
    for (let y = Math.floor(fine / 2); y < h; y += fine) {
      for (let x = Math.floor(fine / 2); x < w; x += fine) {
        const i = (y * w + x) * 4;
        if (work[i + 3] < 2) continue;
        const rgb = { r: work[i], g: work[i + 1], b: work[i + 2] };
        const l = lum(rgb.r, rgb.g, rgb.b), s = satOf(rgb.r, rgb.g, rgb.b), det = detailAt(work, w, h, x, y);
        if (det < 42 && (s < 0.13 || l < 0.13)) continue;
        if (noise01(x, y, 71) > Math.min(0.88, det / 180 + s * 0.32 + l * 0.20)) continue;
        const j = jitter(x + 211, y + 307, fine * 0.48);
        placeStacked(raw, w, h, x + j.x, y + j.y, rgb, fine * (0.68 + overlap * 0.22), Math.min(0.26, Math.max(0.035, l * 0.24 * intensity)), 0.13, 'core', s < 0.22 && det > 55 && l > 0.08, stackPower, mixPower, x, y);
      }
    }
    delete raw.__data;
    previewFrame = { w, h, work };
    plan = raw.slice(0, clamp(+settings.maxLights || 65000, 1, 120000));
    renderPreview(root, w, h);
    root.querySelector('#__la_meta').textContent = imageName + ' | bouwgrid ' + w + 'x' + h + ' | ' + plan.length + ' lampen' + (settings.__autoSingleChunk ? ' | auto 1 chunk' : '');
  }
  function drawPreviewViewport(ctx, canvas, w, h, drawFn) {
    const fit = Math.min(canvas.width / Math.max(1, w), canvas.height / Math.max(1, h));
    const scale = fit * previewView.zoom;
    const tx = (canvas.width - w * scale) / 2 + previewView.x;
    const ty = (canvas.height - h * scale) / 2 + previewView.y;
    ctx.save();
    ctx.translate(tx, ty);
    ctx.scale(scale, scale);
    drawFn(scale);
    ctx.restore();
  }
  function drawChunkOverlayLogical(ctx, w, h) {
    if (!settings.chunkMode) return;
    const chunk = Math.max(1, +settings.chunkSize || 20);
    const info = chunkGridInfo();
    const lightArt = settings.generatorMode === 'light_art';
    const refW = lightArt ? info.cols * chunk : (+settings.roomW || 42);
    const refH = lightArt ? info.rows * chunk : (+settings.roomH || 42);
    const stepX = (chunk / refW) * w;
    const stepY = (chunk / refH) * h;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,.48)';
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 4]);
    for (let x = 0; x <= w + 0.1; x += stepX) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y <= h + 0.1; y += stepY) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
    ctx.setLineDash([]);
    ctx.font = '10px Arial';
    const selected = selectedChunksSet();
    for (let col = 0; col < info.cols; col++) {
      for (let rowTop = 0; rowTop < info.rows; rowTop++) {
        const nr = chunkNumberForGrid(col, rowTop);
        const x = col * stepX, y = rowTop * stepY;
        if (selected && selected.has(nr)) {
          ctx.fillStyle = 'rgba(25,135,84,.18)';
          ctx.fillRect(x, y, stepX, stepY);
        }
        ctx.fillStyle = selected && selected.has(nr) ? 'rgba(144,255,194,.95)' : 'rgba(255,255,255,.85)';
        ctx.fillText(String(nr), x + 4, y + 12);
      }
    }
    ctx.restore();
  }
  function renderPreview(root, w, h) {
    const source = root.querySelector('#__la_source');
    const canvas = root.querySelector('#__la_preview');
    [source, canvas].forEach(function(c) {
      c.width = Math.max(220, c.clientWidth || 300);
      c.height = Math.max(150, c.clientHeight || 210);
    });
    const sctx = source.getContext('2d');
    sctx.fillStyle = '#050505';
    sctx.fillRect(0, 0, source.width, source.height);
    if (sourceFrame.work) {
      const off = document.createElement('canvas');
      off.width = sourceFrame.w; off.height = sourceFrame.h;
      const ox = off.getContext('2d');
      const img = ox.createImageData(sourceFrame.w, sourceFrame.h);
      img.data.set(sourceFrame.work);
      ox.putImageData(img, 0, 0);
      drawPreviewViewport(sctx, source, sourceFrame.w, sourceFrame.h, function() {
        sctx.drawImage(off, 0, 0);
        drawChunkOverlayLogical(sctx, sourceFrame.w, sourceFrame.h);
      });
    }
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawPreviewViewport(ctx, canvas, w, h, function() {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      plan.forEach(function(p) {
        const c = COLORS[p.colorCode] || COLORS[0];
        const render = LIGHT_RENDER[p.colorCode] || LIGHT_RENDER[0];
        const inner = render.inner;
        const outer = render.outer;
        const x = p.cx, y = p.cy, r = Math.max(1.5, p.radius);
        const alpha = clamp((p.opacity || 0.14) * (p.colorCode === 0 ? 0.55 : 0.78), 0.018, 0.38);
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r * (1 + (p.edge || 0.2) * 2.4));
        grad.addColorStop(0, 'rgba(' + inner[0] + ',' + inner[1] + ',' + inner[2] + ',' + alpha + ')');
        grad.addColorStop(0.38, 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + (alpha * 0.62) + ')');
        grad.addColorStop(0.78, 'rgba(' + outer[0] + ',' + outer[1] + ',' + outer[2] + ',' + (alpha * 0.24) + ')');
        grad.addColorStop(1, 'rgba(' + outer[0] + ',' + outer[1] + ',' + outer[2] + ',0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r * (1 + (p.edge || 0.2) * 2.4), 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
      drawChunkOverlayLogical(ctx, w, h);
    });
  }
  function drawChunkOverlay(ctx, canvas, w, h, scale) {
    if (!settings.chunkMode) return;
    const roomW = +settings.roomW || 42;
    const roomH = +settings.roomH || 42;
    const chunk = Math.max(1, +settings.chunkSize || 20);
    const pxPerRoomX = w / Math.max(1, roomW);
    const pxPerRoomY = h / Math.max(1, roomH);
    const stepX = chunk * pxPerRoomX * scale;
    const stepY = chunk * pxPerRoomY * scale;
    if (!Number.isFinite(stepX) || !Number.isFinite(stepY) || stepX < 2 || stepY < 2) return;
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,.55)';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 4]);
    for (let x = 0; x <= canvas.width + 1; x += stepX) {
      ctx.beginPath(); ctx.moveTo(Math.round(x) + 0.5, 0); ctx.lineTo(Math.round(x) + 0.5, canvas.height); ctx.stroke();
    }
    for (let y = 0; y <= canvas.height + 1; y += stepY) {
      ctx.beginPath(); ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(canvas.width, Math.round(y) + 0.5); ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.font = '10px Arial';
    const selected = selectedChunksSet();
    let colIdx = 0;
    for (let x = 0; x < canvas.width - 1; x += stepX) {
      let rowTop = 0;
      for (let y = 0; y < canvas.height - 1; y += stepY) {
        const nr = chunkNumberForGrid(colIdx, rowTop);
        if (selected && selected.has(nr)) {
          ctx.fillStyle = 'rgba(25,135,84,.18)';
          ctx.fillRect(x, y, stepX, stepY);
        }
        ctx.fillStyle = selected && selected.has(nr) ? 'rgba(144,255,194,.95)' : 'rgba(255,255,255,.85)';
        ctx.fillText(String(nr), x + 4, y + 12);
        rowTop++;
      }
      colIdx++;
    }
    ctx.restore();
  }
  function inventoryByType() {
    const out = {};
    const items = (window.Inventory && window.Inventory.items) || {};
    Object.values(items).forEach(function(item) {
      if (!item || item.type !== 'S') return;
      const typeId = parseInt(item.typeId, 10);
      const placeId = parseInt(item.placementId || item.id, 10);
      if (!Number.isFinite(typeId) || !Number.isFinite(placeId)) return;
      if (!out[typeId]) out[typeId] = [];
      if (!out[typeId].includes(placeId)) out[typeId].push(placeId);
    });
    Object.entries(localInventory.byType || {}).forEach(function(kv) {
      const typeId = parseInt(kv[0], 10);
      if (!out[typeId]) out[typeId] = [];
      kv[1].forEach(function(id) {
        if (!out[typeId].includes(id)) out[typeId].push(id);
      });
    });
    return out;
  }
  async function waitInventoryReady(timeoutMs) {
    const started = Date.now();
    const end = Date.now() + timeoutMs;
    while (Date.now() < end && !stopRequested) {
      if (window.Inventory && window.Inventory.loaded) {
        rebuildLocalInventoryFromWindow();
        return true;
      }
      if (Date.now() - started > 900 && Object.keys(localInventory.byItem || {}).length > 0 && Date.now() - localInventory.loadedAt < 180000) return true;
      await sleep(100);
    }
    if (window.Inventory && Object.keys(window.Inventory.items || {}).length) {
      rebuildLocalInventoryFromWindow();
      return true;
    }
    return Object.keys(localInventory.byItem || {}).length > 0;
  }
  function neededBySize() {
    const out = {};
    const selected = selectedChunksSet();
    const maxPx = Math.max.apply(null, plan.map(function(p) { return p.px; }));
    const maxPy = Math.max.apply(null, plan.map(function(p) { return p.py; }));
    const roomW = +settings.roomW || 63, roomH = +settings.roomH || 63;
    const info = chunkGridInfo();
    const chunkSize = Math.max(4, +settings.chunkSize || 20);
    const mapW = settings.chunkMode ? info.cols * chunkSize : roomW;
    const mapH = settings.chunkMode ? info.rows * chunkSize : roomH;
    plan.forEach(function(p) {
      if (settings.chunkMode && selected) {
        const lx = maxPx ? (p.px / maxPx) * mapW : p.px;
        const ly = maxPy ? (p.py / maxPy) * mapH : p.py;
        if (!selected.has(chunkNumberForRoomPoint(lx, ly))) return;
      }
      if (!out[p.size]) out[p.size] = { need: 0, typeId: p.typeId };
      out[p.size].need++;
      out[p.size].typeId = p.typeId;
    });
    return out;
  }
  function refreshPlanTypeIds() {
    plan.forEach(function(p) {
      p.typeId = sizeConfig(p.size).typeId;
    });
  }
  async function waitPurchaseOk(before, timeoutMs) {
    const end = Date.now() + timeoutMs;
    while (!stopRequested && Date.now() < end) {
      if (purchaseOkCounter > before) return true;
      await sleep(50);
    }
    return false;
  }
  function buyProgress(root, cur, total, label) {
    const bar = root.querySelector('#__la_bar');
    const pct = total ? Math.round(cur / total * 100) : 0;
    if (bar) bar.style.width = pct + '%';
    root.querySelector('#__la_status').textContent = label + ': ' + cur + '/' + total + ' (' + pct + '%)';
  }
  async function buyMissing(root) {
    if (!plan.length) makePlan(root);
    collectSettings(root);
    refreshPlanTypeIds();
    root.querySelector('#__la_status').textContent = 'Inventory scannen...';
    if (window.Inventory && Object.keys(window.Inventory.items || {}).length) rebuildLocalInventoryFromWindow();
    if (window.Inventory) window.Inventory.loaded = false;
    requestInventory();
    const ready = await waitInventoryReady(8000);
    if (!ready) {
      root.querySelector('#__la_status').textContent = 'Inventory niet volledig geladen; koop gestopt.';
      return false;
    }
    const inv = inventoryByType();
    const jobs = [];
    const debugCounts = {};
    Object.entries(neededBySize()).forEach(function(kv) {
      const size = kv[0];
      const info = kv[1];
      const cfg = sizeConfig(size);
      const have = (inv[info.typeId] || []).length;
      debugCounts[size] = { need: info.need, have: have, typeId: info.typeId };
      let missing = Math.max(0, info.need - have);
      while (missing > 0) {
        const amount = Math.min(100, missing);
        jobs.push({ size, cfg, amount });
        missing -= amount;
      }
    });
    root.querySelector('#__la_status').textContent = 'Inventory: ' + Object.entries(debugCounts).map(function(kv) { return kv[0] + ' ' + kv[1].have + '/' + kv[1].need; }).join(', ');
    await sleep(250);
    if (!jobs.length) {
      root.querySelector('#__la_status').textContent = 'Alles zit al in inventory.';
      return true;
    }
    for (let i = 0; i < jobs.length; i++) {
      if (stopRequested) return false;
      const job = jobs[i];
      buyProgress(root, i + 1, jobs.length, 'Kopen ' + job.size);
      await purchaseAmount(job.cfg.pageId, job.cfg.offerId, job.amount, job.cfg.typeId);
      await sleep(300);
    }
    root.querySelector('#__la_status').textContent = 'Koop klaar. Inventory opnieuw laden...';
    if (window.Inventory && Object.keys(window.Inventory.items || {}).length) rebuildLocalInventoryFromWindow();
    if (window.Inventory) window.Inventory.loaded = false;
    requestInventory();
    await waitInventoryReady(8000);
    return true;
  }
  function chunkGridInfo() {
    const roomW = +settings.roomW || 63;
    const roomH = +settings.roomH || 63;
    const chunkSize = Math.max(4, +settings.chunkSize || 20);
    if (settings.__autoSingleChunk) return { roomW, roomH, chunkSize, cols: 1, rows: 1, autoSingle: true };
    const lightArt = settings.generatorMode === 'light_art';
    // light_art: cols derived from Art grootte / chunk tegels so 80÷20=4 cols automatically
    const cols = lightArt
      ? Math.max(1, Math.round(roomW / chunkSize))
      : Math.max(1, Math.round(+settings.chunkCols || Math.ceil(roomW / chunkSize)));
    const isDefaultLightRoom = Math.round(chunkSize) === 20 && cols === 2;
    // light_art: rows = cols (square grid)
    const rows = isDefaultLightRoom ? 2 : lightArt ? cols : Math.max(1, Math.round(roomH / chunkSize));
    return { roomW, roomH, chunkSize, cols, rows };
  }
  function exactChunkAnchor(nr) {
    const info = chunkGridInfo();
    if (Math.round(info.chunkSize) !== 20 || info.cols !== 2) return null;
    const anchors = {
      1: { x: 21, y: 61 },
      2: { x: 21, y: 32 },
      3: { x: 51, y: 32 },
      4: { x: 47, y: 58 }
    };
    return anchors[nr] || null;
  }
  function exactLightArtFrameStart(nr) {
    const info = chunkGridInfo();
    if (Math.round(info.chunkSize) !== 20 || info.cols !== 2) return null;
    const starts = {
      1: { x: 2, y: 42 },
      2: { x: 2, y: 13 },
      3: { x: 32, y: 13 },
      4: { x: 28, y: 39 }
    };
    return starts[nr] || null;
  }
  function selectedChunksSet() {
    if (settings.__autoSingleChunk) return new Set([1]);
    const raw = String(settings.chunkSelection || '').trim();
    if (!raw) return null;
    const set = new Set();
    raw.split(/[,\s;]+/).forEach(function(part) {
      if (!part) return;
      const m = part.match(/^(\d+)-(\d+)$/);
      if (m) {
        const a = parseInt(m[1], 10), b = parseInt(m[2], 10);
        const lo = Math.min(a, b), hi = Math.max(a, b);
        for (let n = lo; n <= hi; n++) set.add(n);
        return;
      }
      const n = parseInt(part, 10);
      if (Number.isFinite(n) && n > 0) set.add(n);
    });
    return set.size ? set : null;
  }
  function chunkNumberForGrid(col, rowFromTop) {
    const info = chunkGridInfo();
    if (Math.round(info.chunkSize) === 20 && info.cols === 2 && info.rows === 2) {
      const map = [[2, 3], [1, 4]];
      return map[clamp(rowFromTop, 0, 1)][clamp(col, 0, 1)];
    }
    const rowFromBottom = Math.max(0, info.rows - 1 - rowFromTop);
    return col * info.rows + rowFromBottom + 1;
  }
  function chunkNumberForRoomPoint(lx, ly) {
    const info = chunkGridInfo();
    const col = clamp(Math.floor(lx / info.chunkSize), 0, info.cols - 1);
    const row = clamp(Math.floor(ly / info.chunkSize), 0, info.rows - 1);
    return chunkNumberForGrid(col, row);
  }
  function chunkAnchor(col, rowFromTop) {
    const info = chunkGridInfo();
    const rowFromBottom = info.rows - 1 - rowFromTop;
    const nr = chunkNumberForGrid(col, rowFromTop);
    const exact = exactChunkAnchor(nr);
    if (exact) return { x: exact.x, y: exact.y, rowFromBottom };
    const startX = Math.round(+settings.startX || 21);
    const startY = Math.round(+settings.startY || 62);
    const rightX = parseFloat(String(settings.chunkRightX).replace(',', '.')) || 0;
    const rightY = parseFloat(String(settings.chunkRightY).replace(',', '.')) || 0;
    const upX = parseFloat(String(settings.chunkUpX).replace(',', '.')) || 0;
    const upY = parseFloat(String(settings.chunkUpY).replace(',', '.')) || 0;
    return {
      x: Math.round(startX + col * rightX + rowFromBottom * upX),
      y: Math.round(startY + col * rightY + rowFromBottom * upY),
      rowFromBottom
    };
  }
  function markerSpecs() {
    const info = chunkGridInfo();
    const selected = selectedChunksSet();
    const out = [];
    function addNumberDigits(nr, a) {
      String(nr).padStart(2, '0').split('').forEach(function(d, idx) {
        const dx = idx === 0 ? 1 : 2;
        const dy = idx === 0 ? 1 : 0;
        out.push({
          kind: 'number',
          nr,
          typeId: +settings.markerNumberType,
          pageId: +settings.markerNumberPage,
          offerId: +settings.markerNumberOffer,
          x: a.x + dx,
          y: a.y + dy,
          rot: +settings.markerNumberRot || 4,
          state: String(d),
          z: normalizeHeight(settings.markerNumberBh)
        });
      });
    }
    for (let row = 0; row < info.rows; row++) {
      for (let col = 0; col < info.cols; col++) {
        const a = chunkAnchor(col, row);
        const nr = chunkNumberForGrid(col, row);
        if (selected && !selected.has(nr)) continue;
        out.push({ kind: 'cylinder', nr, typeId: +settings.markerCylinderType, pageId: +settings.markerCylinderPage, offerId: +settings.markerCylinderOffer, x: a.x, y: a.y, rot: 0, state: '0' });
        out.push({ kind: 'corner', nr, typeId: +settings.markerCornerType, pageId: +settings.markerCornerPage, offerId: +settings.markerCornerOffer, x: a.x + 1, y: a.y, rot: +settings.markerRot || 2, state: '0' });
        addNumberDigits(nr, a);
      }
    }
    return out;
  }
  async function buyAndPlaceChunkMarkers(root, internalRun) {
    if (running && !internalRun) return;
    if (!internalRun) {
      running = true;
      stopRequested = false;
      checkpoint = loadCheckpoint();
      resumeSkip = checkpoint && String(checkpoint.stage || '').toLowerCase().includes('marker') ? (parseInt(checkpoint.completed, 10) || 0) : 0;
    }
    try {
      collectSettings(root);
      const specs = markerSpecs();
      logBuild(root, 'markers gestart', { total: specs.length, resumeSkip });
      root.querySelector('#__la_status').textContent = 'Markers kopen/scannen...';
      if (window.Inventory && Object.keys(window.Inventory.items || {}).length) rebuildLocalInventoryFromWindow();
      if (window.Inventory) window.Inventory.loaded = false;
      requestInventory();
      await waitInventoryReady(8000);
      const inv = inventoryByType();
      const need = {};
      specs.forEach(function(s) { need[s.typeId] = (need[s.typeId] || { have: (inv[s.typeId] || []).length, missing: 0, pageId: s.pageId, offerId: s.offerId }); need[s.typeId].missing++; });
      for (const kv of Object.entries(need)) {
        let missing = Math.max(0, kv[1].missing - kv[1].have);
        while (missing > 0) {
          const amount = Math.min(100, missing);
          await purchaseAmount(kv[1].pageId, kv[1].offerId, amount, parseInt(kv[0], 10));
          await sleep(150);
          missing -= amount;
        }
      }
      if (window.Inventory) window.Inventory.loaded = false;
      requestInventory();
      await waitInventoryReady(8000);
      const inv2 = inventoryByType();
      const items = [];
      specs.forEach(function(s) {
        const arr = inv2[s.typeId] || [];
        const id = arr.shift();
        const z = s.z != null ? s.z : normalizeHeight(settings.markerBh);
        if (id) items.push({ id, typeId: s.typeId, x: s.x, y: s.y, z, rotation: s.rot, state: s.state, nr: s.nr, kind: s.kind, name: 'marker_' + s.kind });
      });
      await placeGrouped(root, items, 'Markers', 0, items.length);
      if (!internalRun) {
        clearCheckpoint();
        resumeSkip = 0;
      }
      logBuild(root, 'markers klaar', { total: items.length });
      root.querySelector('#__la_status').textContent = 'Chunk markers klaar.';
    } catch (ex) {
      logBuild(root, 'marker fout', { message: ex.message });
      root.querySelector('#__la_status').textContent = 'Marker fout: ' + ex.message;
    } finally {
      if (!internalRun) running = false;
    }
  }
  function makeProjectedBuildObjects(root, withInventory) {
    refreshPlanTypeIds();
    const inv = withInventory ? inventoryByType() : {};
    const maxPx = Math.max.apply(null, plan.map(function(p) { return p.px; }));
    const maxPy = Math.max.apply(null, plan.map(function(p) { return p.py; }));
    const roomW = +settings.roomW || 63, roomH = +settings.roomH || 63;
    const startX = Math.round(+settings.startX || 21), startY = Math.round(+settings.startY || 62);
    const xyStep = Math.max(1, +settings.xyStep || 3);
    const parsedBaseBh = parseFloat(String(settings.baseBh).replace(',', '.'));
    const parsedBhStep = parseFloat(String(settings.bhStep).replace(',', '.'));
    const baseBh = Number.isFinite(parsedBaseBh) ? Math.max(0, parsedBaseBh) : 0;
    const bhStep = Number.isFinite(parsedBhStep) ? Math.max(0.1, parsedBhStep) : 0.5;
    const rotation = settings.generatorMode === 'light_art' ? 0 : Math.round(+settings.rotation || 2);
    const chunkMode = !!settings.chunkMode;
    const chunkSize = Math.max(4, +settings.chunkSize || 20);
    const chunkCols = Math.max(1, Math.round(+settings.chunkCols || 2));
    const bleed = Math.max(0, +settings.chunkBleed || 0);
    const rightX = parseFloat(String(settings.chunkRightX).replace(',', '.')) || 0;
    const rightY = parseFloat(String(settings.chunkRightY).replace(',', '.')) || 0;
    const upX = parseFloat(String(settings.chunkUpX).replace(',', '.')) || 0;
    const upY = parseFloat(String(settings.chunkUpY).replace(',', '.')) || 0;
    const selected = selectedChunksSet();
    const gridInfo = chunkGridInfo();
    const mapW = chunkMode ? gridInfo.cols * chunkSize : roomW;
    const mapH = chunkMode ? gridInfo.rows * chunkSize : roomH;
    const out = [], missing = {};
    const tileUse = {};
    function tileCap(size) {
      if (size === 'XXL' || size === 'XL') return 2;
      if (size === 'L') return 3;
      if (size === 'M') return 5;
      return 8;
    }
    function reserveTile(typeId, state, size, x, y, z) {
      const cap = tileCap(size);
      const offsets = [[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[2,0],[-2,0],[0,2],[0,-2]];
      for (const o of offsets) {
        const xx = clamp(x + o[0], 0, 63);
        const yy = clamp(y + o[1], 0, 63);
        const key = [typeId, state, size, xx, yy, z].join('|');
        if ((tileUse[key] || 0) < cap) {
          tileUse[key] = (tileUse[key] || 0) + 1;
          return { x: xx, y: yy };
        }
      }
      return { x, y };
    }
    plan.forEach(function(p) {
      const isLA = settings.generatorMode === 'light_art';
      const lx = isLA ? p.px : (maxPx ? (p.px / maxPx) * mapW : p.px);
      const ly = isLA ? p.py : (maxPy ? (p.py / maxPy) * mapH : p.py);
      const chunkNr = chunkNumberForRoomPoint(lx, ly);
      if (chunkMode && selected && !selected.has(chunkNr)) return;
      let id = p.id || (out.length + 1);
      if (withInventory) {
        const arr = inv[p.typeId] || [];
        id = arr.shift();
        if (!id) { missing[p.size] = (missing[p.size] || 0) + 1; return; }
      }
      let anchorX = startX, anchorY = startY, localX = lx, localY = ly, chunkIndex = 0, chunkCol = 0, chunkRow = 0;
      if (chunkMode) {
        chunkCol = clamp(Math.floor(lx / chunkSize), 0, chunkCols - 1);
        chunkRow = clamp(Math.floor(ly / chunkSize), 0, Math.max(0, gridInfo.rows - 1));
        chunkIndex = chunkNr - 1;
        localX = lx - chunkCol * chunkSize;
        localY = ly - chunkRow * chunkSize;
        if (bleed) {
          localX = clamp(localX, -bleed, chunkSize + bleed);
          localY = clamp(localY, -bleed, chunkSize + bleed);
        }
        const rowFromBottom = Math.max(0, gridInfo.rows - 1 - chunkRow);
        const exact = exactChunkAnchor(chunkNr);
        if (exact) {
          anchorX = exact.x;
          anchorY = exact.y;
        } else {
          anchorX = startX + (chunkCol * rightX) + (rowFromBottom * upX);
          anchorY = startY + (chunkCol * rightY) + (rowFromBottom * upY);
        }
      }
      const logicalW = chunkMode ? chunkSize : roomW;
      const logicalH = chunkMode ? chunkSize : roomH;
      let x, y;
      if (settings.generatorMode === 'light_art') {
        if (!withInventory) {
          // Client-side preview: image coords as room coords directly — no 63 limit
          x = p.px; y = p.py;
        } else {
          // Real build: isometric projection into 0-63 room tiles
          const frameStart = chunkMode ? exactLightArtFrameStart(chunkNr) : null;
          if (frameStart) {
            x = clamp(Math.round(frameStart.x + (localX * 0.5) + localY), 0, 63);
            y = clamp(Math.round(frameStart.y - (localX * 0.5) + localY), 0, 63);
          } else {
            const sxRoom = (chunkMode ? chunkSize : roomW) / Math.max(1, logicalW);
            const syRoom = (chunkMode ? chunkSize : roomH) / Math.max(1, logicalH);
            x = clamp(Math.round(anchorX + (localX * sxRoom)), 0, 63);
            y = clamp(Math.round(anchorY - (logicalH - 1 - localY) * syRoom), 0, 63);
          }
        }
      } else {
        const dx = (localX - logicalW / 2) / xyStep;
        x = clamp(Math.round(anchorX + dx), 0, 63);
        y = clamp(Math.round(anchorY - dx), 0, 63);
      }
      const z = normalizeHeight(baseBh);
      const spot = settings.generatorMode === 'light_art' ? { x, y } : reserveTile(p.typeId, p.state, p.size, x, y, z);
      out.push({ id, typeId: p.typeId, x: spot.x, y: spot.y, z, rotation, state: p.state, size: p.size });
    });
    if (Object.keys(missing).length) throw new Error('Niet genoeg lights: ' + JSON.stringify(missing));
    return out;
  }
  function makeBuildItems(root) {
    return makeProjectedBuildObjects(root, true);
  }
  function makeMarkerPreviewObjects() {
    if (!settings.chunkMode) return [];
    return markerSpecs().map(function(s) {
      return {
        id: 0,
        typeId: s.typeId,
        x: s.x,
        y: s.y,
        z: s.z != null ? s.z : normalizeHeight(settings.markerBh),
        rotation: s.rot || 0,
        state: s.state || '0',
        size: 'marker',
        marker: true
      };
    });
  }
  function ackMatches(ack, item, afterTs) {
    if (!ack || ack.at < afterTs) return false;
    if (ack.id === item.id) return true;
    if (ack.typeId !== item.typeId || ack.x !== item.x || ack.y !== item.y) return false;
    if (ack.rot !== item.rotation) return false;
    if (Number.isFinite(ack.z) && Math.abs(ack.z - parseFloat(item.z)) > 0.12) return false;
    if (ack.state !== null && ack.state !== undefined && String(ack.state) !== String(item.state)) return false;
    return true;
  }
  function ackLooksLikeTarget(ack, item, afterTs) {
    if (!ack || ack.at < afterTs) return false;
    return ack.id === item.id || (ack.typeId === item.typeId && ack.x === item.x && ack.y === item.y);
  }
  function ackWrongForItem(ack, item, afterTs) {
    return ackLooksLikeTarget(ack, item, afterTs) && !ackMatches(ack, item, afterTs);
  }
  async function waitObjectAddResult(item, timeoutMs, afterTs) {
    const end = Date.now() + timeoutMs;
    while (!stopRequested && Date.now() < end) {
      const good = ackDetails.find(function(ack) { return ackMatches(ack, item, afterTs); });
      if (good) return { ok: true, ack: good };
      const bad = ackDetails.find(function(ack) { return ackWrongForItem(ack, item, afterTs); });
      if (bad) return { ok: false, bad: bad };
      const removed = placeRemoveAcks.find(function(ack) { return ack.id === item.id && ack.at >= afterTs; });
      if (removed) return { ok: true, ack: removed, removeOnly: true };
      await sleep(35);
    }
    return { ok: false, bad: null };
  }
  async function placeWithWatchdog(root, item, step, total) {
    const attempts = Math.max(1, parseInt(settings.attempts, 10) || 20);
    ackDetails = ackDetails.filter(function(ack) { return ack.id !== item.id; });
    placeRemoveAcks = placeRemoveAcks.filter(function(ack) { return ack.id !== item.id; });
    for (let a = 1; a <= attempts; a++) {
      if (a === 1) {
        const burst = Math.max(1, Math.round(+settings.burst || 3));
        if (placeFlowSincePause >= burst) {
          placeFlowSincePause = 0;
          await sleep(Math.max(0, +settings.burstPause || 185));
        }
      } else {
        await sleep(Math.max(185, +settings.burstPause || 185));
      }
      const ts = Date.now();
      logBuild(root, 'place poging ' + a + '/' + attempts, { step, total, id: item.id, typeId: item.typeId, x: item.x, y: item.y, z: item.z, bs: item.state, bd: item.rotation });
      sendPlace(item);
      const result = await waitObjectAddResult(item, a === 1 ? 900 : 1500, ts);
      if (result.ok) {
        logBuild(root, result.removeOnly ? 'place ok via inventory remove' : 'ObjectAdd ok', { step, id: item.id, ack: result.ack || null });
        if (previewPlacementRun) {
          const placedId = result.ack && result.ack.id ? result.ack.id : item.id;
          if (previewPlacementIds.indexOf(placedId) === -1) previewPlacementIds.push(placedId);
        }
        placeFlowSincePause++;
        return true;
      }
      if (result.bad) {
        const el = root && root.querySelector('#__la_status');
        if (el) el.textContent = 'Verkeerd geplaatst, pak op en retry: ' + result.bad.id;
        logBuild(root, 'verkeerd geplaatst, pickup + retry', { step, bad: result.bad, want: { id: item.id, x: item.x, y: item.y, z: item.z, bs: item.state, bd: item.rotation } });
        sendPickup(result.bad.id);
        await sleep(650);
        await setBuildSetting(root, 'bh', item.z);
        await setBuildSetting(root, 'bs', item.state);
        await setBuildSetting(root, 'bd', item.rotation);
      }
      placeFlowSincePause = 0;
      await sleep(+settings.retry || 185);
    }
    const recent = ackDetails.filter(function(ack) { return ack.at > Date.now() - 12000; }).slice(-8);
    logBuild(root, 'stop na ' + attempts + ' pogingen zonder geldige plaatsing', { step, id: item.id, typeId: item.typeId, x: item.x, y: item.y, z: item.z, bs: item.state, bd: item.rotation, recentAcks: recent });
    return false;
  }
  function progress(root, cur, total) {
    const bar = root.querySelector('#__la_bar');
    const pct = total ? Math.round(cur / total * 100) : 0;
    if (bar) bar.style.width = pct + '%';
    if (!progressStart || cur <= 1) progressStart = Date.now();
    const eta = cur > 0 && total > cur ? Math.round(((Date.now() - progressStart) / cur) * (total - cur) / 1000) : 0;
    root.querySelector('#__la_status').textContent = 'Bouwen: ' + cur + '/' + total + ' (' + pct + '%) ETA ' + Math.floor(eta / 60) + ':' + String(eta % 60).padStart(2, '0');
  }
  function buildGroupKey(item) {
    return [String(item.z), String(item.state == null ? '0' : item.state), String(item.rotation)].join('|');
  }
  function sortGroupKey(key) {
    const p = key.split('|');
    return {
      z: parseFloat(p[0]) || 0,
      s: parseInt(p[1], 10) || 0,
      r: parseInt(p[2], 10) || 0
    };
  }
  async function placeGrouped(root, items, label, offset, totalOverride) {
    const groups = {};
    items.forEach(function(item) {
      const key = buildGroupKey(item);
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });
    const keys = Object.keys(groups).sort(function(a, b) {
      const aa = sortGroupKey(a), bb = sortGroupKey(b);
      return (aa.z - bb.z) || (aa.s - bb.s) || (aa.r - bb.r);
    });
    let lastH = null, lastS = null, lastR = null;
    let placed = 0;
    const total = totalOverride || items.length;
    for (const key of keys) {
      if (stopRequested) break;
      const parts = key.split('|');
      const h = parts[0], state = parts[1], rot = parts[2];
      if (h !== lastH) { logBuild(root, 'setting bh', { value: h }); await setBuildSetting(root, 'bh', h); lastH = h; }
      if (state !== lastS) { logBuild(root, 'setting bs', { value: state }); await setBuildSetting(root, 'bs', state); lastS = state; }
      if (String(rot) !== String(lastR)) { logBuild(root, 'setting bd', { value: rot }); await setBuildSetting(root, 'bd', rot); lastR = rot; }
      for (const item of groups[key]) {
        if (stopRequested) break;
        const globalStep = (offset || 0) + placed + 1;
        if (globalStep <= resumeSkip) {
          placed++;
          continue;
        }
        placed++;
        progress(root, globalStep, total);
        const el = root.querySelector('#__la_status');
        if (el && label) el.textContent = el.textContent.replace('Bouwen:', label + ':');
        saveCheckpoint({ stage: label || 'Bouwen', completed: globalStep - 1, nextStep: globalStep, total, item });
        if (!await placeWithWatchdog(root, item, globalStep, total)) {
          saveCheckpoint({ stage: label || 'Bouwen', failed: true, completed: globalStep - 1, nextStep: globalStep, total, item });
          throw new Error('Geen ObjectAdd bij stap ' + globalStep);
        }
        saveCheckpoint({ stage: label || 'Bouwen', completed: globalStep, nextStep: globalStep + 1, total, item });
        await sleep(Math.max(0, +settings.delay || 120));
      }
    }
    return placed;
  }
  function sameBuildValue(kind, a, b) {
    if (kind === 'bh') return Math.abs(parseFloat(a) - parseFloat(b)) <= 0.03;
    return String(Math.round(parseFloat(a))) === String(Math.round(parseFloat(b)));
  }
  function applyBuildAck(kind, value) {
    if (value === null || value === undefined || value === '') return;
    buildStateAck[kind] = String(value).replace(',', '.');
    buildStateAck[kind + 'At'] = Date.now();
  }
  function readPacketText(p) {
    if (!p) return '';
    if (p.parsed) {
      if (typeof p.parsed === 'string') return p.parsed;
      const direct = ['text', 'message', 'msg', 'chat', 'whisper'].map(function(k) { return p.parsed && p.parsed[k]; }).find(Boolean);
      if (direct) return String(direct);
      try {
        const parsedStrings = [];
        JSON.stringify(p.parsed, function(_k, v) {
          if (typeof v === 'string') parsedStrings.push(v);
          return v;
        });
        if (parsedStrings.length) return parsedStrings.join(' ');
      } catch(_) {}
    }
    const rawBuf = p.raw;
    const rawText = String(p.raw || '');
    const r = window.makeReader && window.makeReader(rawBuf);
    if (r) {
      try {
        r.int();
        return String(r.str() || '');
      } catch(_) {}
    }
    if (rawBuf instanceof ArrayBuffer) {
      try {
        const view = new DataView(rawBuf.slice(6));
        const dec = new TextDecoder();
        const strings = [];
        for (let pos = 0; pos + 2 <= view.byteLength; pos++) {
          const len = view.getUint16(pos);
          if (len < 2 || len > 400 || pos + 2 + len > view.byteLength) continue;
          const s = dec.decode(new Uint8Array(rawBuf.slice(6 + pos + 2, 6 + pos + 2 + len)));
          if (/[\w: .,!?\-]/.test(s) && !/[\u0000-\u0008\u000e-\u001f]/.test(s)) strings.push(s);
        }
        if (strings.length) return strings.join(' ');
      } catch(_) {}
    }
    const m = rawText.match(/\{s:"((?:\\"|[^"])*)"\}/g);
    return m ? m.map(function(x) { return x.slice(4, -2).replace(/\\"/g, '"'); }).join(' ') : rawText;
  }
  function handleBuildStateText(text) {
    const s = String(text || '').replace(',', '.');
    let m = s.match(/bouwhoogte\s+is\s+veranderd\s+naar:\s*(-?\d+(?:\.\d+)?)/i);
    if (m) applyBuildAck('bh', m[1]);
    m = s.match(/draaipositie\s+is\s+veranderd\s+naar:\s*(-?\d+)/i);
    if (m) applyBuildAck('bd', m[1]);
    m = s.match(/staat\s+is\s+veranderd\s+naar:\s*(-?\d+)/i);
    if (m) applyBuildAck('bs', m[1]);
    m = s.match(/(?:^|\s):?bh\s+(-?\d+(?:\.\d+)?)(?:\D|$)/i);
    if (m) applyBuildAck('bh', m[1]);
    m = s.match(/(?:^|\s):?bs\s+(-?\d+)(?:\D|$)/i);
    if (m) applyBuildAck('bs', m[1]);
    m = s.match(/(?:^|\s):?bd\s+(-?\d+)(?:\D|$)/i);
    if (m) applyBuildAck('bd', m[1]);
  }
  async function waitBuildAck(kind, value, since, timeoutMs) {
    const end = Date.now() + timeoutMs;
    while (!stopRequested && Date.now() < end) {
      if (buildStateAck[kind + 'At'] >= since && sameBuildValue(kind, buildStateAck[kind], value)) return true;
      await sleep(40);
    }
    return false;
  }
  async function setBuildSetting(root, kind, value) {
    const command = ':' + kind + ' ' + value;
    placeFlowSincePause = 0;
    const cooldown = Math.max(1000, +settings.settingDelay || 1150);
    for (let attempt = 1; attempt <= 3; attempt++) {
      const wait = cooldown - (Date.now() - lastBuildSettingSentAt);
      if (wait > 0) await sleep(wait);
      const since = Date.now();
      sendChatCommand(command);
      lastBuildSettingSentAt = Date.now();
      const ok = await waitBuildAck(kind, value, since, Math.max(1200, cooldown + 350));
      if (ok) {
        logBuild(root, 'setting bevestigd', { kind, value });
        return true;
      }
      const el = root && root.querySelector('#__la_status');
      if (el) el.textContent = 'Geen bevestiging voor :' + kind + ' ' + value + ' - poging ' + (attempt + 1);
      logBuild(root, 'geen setting bevestiging', { kind, value, attempt });
    }
    throw new Error('Geen juiste bevestiging voor :' + kind + ' ' + value);
  }
  function watchBuildPacket(p) {
    if (!active || !p || p.direction !== 'IN') return;
    const name = String(p.name || '');
    if (!/Chat|Whisper|CustomStackingHeight/i.test(name)) return;
    handleBuildStateText(readPacketText(p));
  }
  async function build(root) {
    if (running) return;
    if (packetPreviewMode) {
      const el = root && root.querySelector('#__la_status');
      if (el) el.textContent = 'Packet preview is alleen om te kijken. Klik eerst Preview bij een foto.';
      return;
    }
    if (roomPreviewOriginalPlan) {
      plan = roomPreviewOriginalPlan;
      roomPreviewOriginalPlan = null;
    }
    if (!plan.length) makePlan(root);
    collectSettings(root);
    running = true;
    stopRequested = false;
    try {
      logBuild(root, resumeSkip ? 'continue build vanaf checkpoint' : 'build gestart', { resumeSkip });
      if (window.Inventory && Object.keys(window.Inventory.items || {}).length) rebuildLocalInventoryFromWindow();
      requestInventory();
      await waitInventoryReady(8000);
      const items = makeBuildItems(root);
      progressStart = Date.now();
      await placeGrouped(root, items, 'Bouwen', 0, items.length);
      sendChatCommand(':bh'); sendChatCommand(':bs'); sendChatCommand(':bd');
      clearCheckpoint();
      resumeSkip = 0;
      logBuild(root, 'build klaar', { total: items.length });
      root.querySelector('#__la_status').textContent = stopRequested ? 'Gestopt.' : 'Klaar.';
    } catch (ex) {
      logBuild(root, 'build fout', { message: ex.message });
      root.querySelector('#__la_status').textContent = 'Fout: ' + ex.message;
    } finally {
      running = false;
    }
  }
  async function buyAndBuild(root) {
    if (running) return;
    if (packetPreviewMode) {
      const el = root && root.querySelector('#__la_status');
      if (el) el.textContent = 'Packet preview is alleen om te kijken. Klik eerst Preview bij een foto.';
      return;
    }
    if (roomPreviewOriginalPlan) {
      plan = roomPreviewOriginalPlan;
      roomPreviewOriginalPlan = null;
    }
    running = true;
    stopRequested = false;
    resumeSkip = 0;
    try {
      logBuild(root, 'koop+bouw gestart', { imageName, plan: plan.length });
      const ok = await buyMissing(root);
      if (ok && !stopRequested && settings.chunkMode) await buyAndPlaceChunkMarkers(root, true);
      running = false;
      if (ok && !stopRequested) await build(root);
    } catch (ex) {
      logBuild(root, 'koop+bouw fout', { message: ex.message });
      const el = root.querySelector('#__la_status');
      if (el) el.textContent = 'Fout: ' + ex.message;
      running = false;
    }
  }
  function updatePreviewToggle(root) {
    const btn = root && root.querySelector('#__la_place_preview');
    if (!btn) return;
    btn.classList.toggle('active', previewPlacementActive);
    btn.textContent = previewPlacementActive ? 'Verwijder preview uit kamer' : 'Plaats preview in kamer';
  }
  async function togglePlacePreview(root) {
    if (running) return;
    if (previewPlacementActive) {
      running = true;
      stopRequested = false;
      try {
        const ids = previewPlacementIds.slice().reverse();
        let hidden = 0;
        root.querySelector('#__la_status').textContent = 'Preview client-side verwijderen...';
        for (let i = 0; i < ids.length; i++) {
          if (injectObjectRemove(ids[i])) hidden++;
          if (i % 250 === 249) await sleep(1);
        }
        previewPlacementIds = [];
        previewPlacementActive = false;
        updatePreviewToggle(root);
        root.querySelector('#__la_status').textContent = hidden ? 'Preview client-side verborgen: ' + hidden + ' meubels.' : 'Preview kon niet client-side worden verwijderd.';
      } finally {
        running = false;
      }
      return;
    }
    running = true;
    stopRequested = false;
    try {
      if (!plan.length || packetPreviewMode || roomPreviewOriginalPlan) makePlan(root);
      collectSettings(root);
      const items = makeMarkerPreviewObjects().concat(makeProjectedBuildObjects(root, false));
      const fakeBase = 700000000 + (Date.now() % 900000000);
      previewPlacementIds = items.map(function(item, idx) {
        item.id = fakeBase + idx;
        return item.id;
      });
      root.querySelector('#__la_status').textContent = 'Preview packet injecteren...';
      const ok = injectObjectsPacket(items);
      previewPlacementActive = !!ok && previewPlacementIds.length > 0;
      if (!previewPlacementActive) previewPlacementIds = [];
      updatePreviewToggle(root);
      root.querySelector('#__la_status').textContent = previewPlacementActive
        ? 'Preview als incoming Objects packet geplaatst: ' + previewPlacementIds.length + ' meubels incl. markers.'
        : 'Preview packet kon niet worden geinjecteerd.';
      logBuild(root, 'preview Objects geinjecteerd', { total: previewPlacementIds.length });
    } catch (ex) {
      previewPlacementIds = [];
      previewPlacementActive = false;
      updatePreviewToggle(root);
      root.querySelector('#__la_status').textContent = 'Preview fout: ' + ex.message;
      logBuild(root, 'preview fout', { message: ex.message });
    } finally {
      running = false;
    }
  }
  function parseObjectAdd(raw) {
    const r = window.makeReader && window.makeReader(raw);
    if (!r) return null;
    try {
      const out = { id: r.int(), typeId: r.int(), x: r.int(), y: r.int(), rot: r.int(), z: parseFloat(r.str()), state: null, at: Date.now() };
      try {
        r.str();
        r.int();
        r.int();
        out.state = r.str();
      } catch(_) {}
      return out;
    } catch(_) {
      return null;
    }
  }
  function renderRoomObjectsPreview(root, objs, label) {
    if (!objs || !objs.length) throw new Error('Geen light objects om te previewen.');
    packetPreviewMode = true;
    const maxX = Math.max(63, Math.max.apply(null, objs.map(function(o) { return o.x; })));
    const maxY = Math.max(63, Math.max.apply(null, objs.map(function(o) { return o.y; })));
    const w = Math.max(64, maxX + 1);
    const h = Math.max(64, maxY + 1);
    const black = new Uint8ClampedArray(w * h * 4);
    for (let i = 0; i < black.length; i += 4) {
      black[i] = 0; black[i + 1] = 0; black[i + 2] = 0; black[i + 3] = 255;
    }
    const radiusScale = Math.max(0.55, Math.min(1.25, w / 64));
    plan = objs.map(function(o, idx) {
      const cfg = sizeConfig(o.size || lightSizeFromTypeId(o.typeId) || 'M');
      const code = clamp(parseInt(o.state, 10) || 0, 0, 7);
      const color = COLORS[code] || COLORS[0];
      const size = o.size || lightSizeFromTypeId(o.typeId) || 'M';
      return {
        px: o.x,
        py: maxY - o.y,
        cx: o.x,
        cy: maxY - o.y,
        colorCode: code,
        colorName: color.name,
        state: String(code),
        size,
        typeId: o.typeId,
        radius: Math.max(1.5, (cfg.radius / 12) * radiusScale),
        opacity: size === 'XXL' ? 0.34 : (size === 'XL' ? 0.30 : 0.24),
        edge: size === 'XXL' || size === 'XL' ? 0.42 : 0.26,
        layer: 'packet',
        stackIndex: idx
      };
    });
    previewFrame = { w, h, work: black };
    previewView = { zoom: 1, x: 0, y: 0 };
    renderPreview(root, w, h);
    const meta = root.querySelector('#__la_meta');
    if (meta) meta.textContent = (label || 'Kamer-preview') + ' | ' + w + 'x' + h + ' tegels | ' + plan.length + ' lampen';
    const status = root.querySelector('#__la_status');
    if (status) status.textContent = (label || 'Kamer-preview') + ' geladen. Klik foto reload om generatorplan terug te maken.';
  }
  function renderRoomPacketPreview(root) {
    const input = root && root.querySelector('#__la_packet_text');
    const text = input ? input.value : '';
    const objs = parseRoomPacketObjects(text);
    if (!objs.length) throw new Error('Geen light objects gevonden in deze packet.');
    imageName = 'room packet preview';
    roomPreviewOriginalPlan = null;
    renderRoomObjectsPreview(root, objs, 'Room packet preview');
  }
  function renderCurrentBuildPreview(root) {
    if (!image && !plan.length) throw new Error('Kies eerst een afbeelding.');
    if (!plan.length || packetPreviewMode) makePlan(root);
    collectSettings(root);
    const originalPlan = plan.slice();
    const objs = makeProjectedBuildObjects(root, false);
    renderRoomObjectsPreview(root, objs, 'Kamer-preview van huidig plan');
    packetPreviewMode = false;
    roomPreviewOriginalPlan = originalPlan;
  }
  function planInfoText() {
    const counts = {};
    plan.forEach(function(p) { counts[p.size + ' ' + p.colorName] = (counts[p.size + ' ' + p.colorName] || 0) + 1; });
    return JSON.stringify({
      imageName,
      total: plan.length,
      checkpoint: loadCheckpoint(),
      chunks: {
        enabled: !!settings.chunkMode,
        size: settings.chunkSize,
        cols: settings.chunkCols,
        selected: settings.chunkSelection || 'all',
        right: [settings.chunkRightX, settings.chunkRightY],
        up: [settings.chunkUpX, settings.chunkUpY],
        bleed: settings.chunkBleed
      },
      counts
    }, null, 2);
  }
  function renderSavesPanel(root) {
    const out = root && root.querySelector('#__la_out');
    const log = root && root.querySelector('#__la_log');
    if (out) out.textContent = planInfoText();
    if (log) log.textContent = formatBuildLog();
  }
  function buildUI() {
    if (document.getElementById('__la')) return;
    const style = document.createElement('style');
    style.textContent = [
      '#__la,#__la *{box-sizing:border-box}',
      '#__la{position:fixed;top:16px;right:16px;width:min(760px,calc(100vw - 32px));height:min(760px,calc(100vh - 32px));min-width:430px;min-height:430px;max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);resize:both;overflow:hidden;z-index:2147483647;user-select:none}',
      '#__la .card{min-width:0;height:100%;display:flex;flex-direction:column;background:#e9e8df}',
      '#__la .hdr{cursor:move}',
      '#__la .close{cursor:pointer}',
      '#__la .body{flex:1 1 auto;box-sizing:border-box;width:100%;min-width:0;min-height:0;overflow:hidden;padding:8px;display:flex;flex-direction:column;gap:7px;background:#e9e8df}',
      '#__la .preview-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;min-height:150px;flex:0 0 auto}',
      '#__la .preview-box{display:flex;flex-direction:column;min-width:0;gap:2px}',
      '#__la .preview-title{font-size:11px;font-style:italic;color:#333}',
      '#__la canvas{width:100%;height:clamp(125px,26vh,220px);flex:0 0 auto;background:#050505;border:1px solid rgba(0,0,0,.25);object-fit:contain;cursor:grab}',
      '#__la canvas:active{cursor:grabbing}',
      '#__la .row{display:flex;align-items:center;gap:6px;width:100%;min-width:0;flex-wrap:wrap}',
      '#__la label{min-width:64px;font-weight:bold}',
      '#__la input,#__la select{min-width:0}',
      '#__la textarea{width:100%;min-height:86px;resize:vertical;font-size:11px;font-family:monospace}',
      '#__la .form-control,#__la .form-select{font-size:12px;height:25px;padding:2px 8px;max-width:100%}',
      '#__la input[type=range]{flex:1;min-width:120px}',
      '#__la .tabs{display:flex;flex-direction:row;gap:2px;background:#e9e8df;border-bottom:1px solid rgba(0,0,0,.28);padding:0;margin:0;width:100%;min-width:0;flex:0 0 auto}',
      '#__la .tabs button{flex:1 1 0;min-width:0;width:auto;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}',
      '#__la .btn-primary,#__la .btn-secondary{background:#1f7f99!important;border-color:#0f5f75!important;color:#fff!important}',
      '#__la .btn-primary.active,#__la .btn-secondary.active{background:#155f73!important;border-color:#0b4b5e!important}',
      '#__la #__la_place_preview{background:#3a9fd4!important;border-color:#2276a3!important;color:#fff!important}',
      '#__la #__la_place_preview.active{background:#0d4a7a!important;border-color:#083454!important;color:#fff!important}',
      '#__la .tabs .btn-secondary{background:#d1d0c8!important;border-color:#111!important;color:#000!important}',
      '#__la .tabs .btn-secondary.active{background:#f3efe4!important;border-color:#111!important;color:#000!important}',
      '#__la .btn-success{background:#198754!important;border-color:#11653d!important;color:#fff!important}',
      '#__la .btn-warning{background:#f0b429!important;border-color:#b88512!important;color:#fff!important}',
      '#__la #__la_continue{background:#1f9b58!important;border-color:#13743f!important;color:#fff!important}',
      '#__la .btn-danger{background:#b51b12!important;border-color:#7f100b!important;color:#fff!important}',
      '#__la .panel{display:none;flex-direction:column;gap:7px;min-height:0;overflow-y:auto;overflow-x:hidden;padding-right:2px}',
      '#__la .panel.on{display:flex;flex:1 1 auto}',
      '#__la .sec{font-weight:bold;border-bottom:1px solid rgba(0,0,0,.18);padding-bottom:2px}',
      '#__la pre{white-space:pre-wrap;word-break:break-word;background:#f7f7f2;border:1px solid rgba(0,0,0,.18);padding:6px;max-height:260px;overflow:auto;margin:0;font-size:11px}',
      '#__la #__la_out{min-height:130px}',
      '#__la [data-panel="saves"].on #__la_log{flex:1 1 220px;min-height:180px;max-height:none}',
      '#__la .prog{height:8px;background:rgba(0,0,0,.14);overflow:hidden;border-radius:4px}',
      '#__la .bar{height:100%;width:0;background:#198754}',
      '@media (max-width:560px){#__la .preview-grid{grid-template-columns:1fr}#__la canvas{height:130px}}'
    ].join('');
    document.head.appendChild(style);
    const root = document.createElement('div');
    root.id = '__la';
    root.innerHTML =
      '<div class="d-flex overflow-hidden position-relative flex-column nitro-card theme-primary nitro-catalog card"><div class="d-flex position-relative align-items-center justify-content-center nitro-card-header hdr" id="__la_hdr"><span class="nitro-card-header-text">PixelArt</span><div class="position-absolute end-0 nitro-card-header-close close" id="__la_close"></div></div><div class="container-fluid content-area body">' +
        '<input id="__la_file" type="file" accept="image/*">' +
        '<div class="preview-grid"><div class="preview-box"><div class="preview-title">Bron + color</div><canvas id="__la_source"></canvas></div><div class="preview-box"><div class="preview-title">Meubel preview</div><canvas id="__la_preview"></canvas></div></div><div id="__la_meta">Geen afbeelding</div>' +
        '<div class="tabs menu"><button class="btn btn-secondary btn-sm active" data-tab="gen">Generator</button><button class="btn btn-secondary btn-sm" data-tab="color">Color</button><button class="btn btn-secondary btn-sm" data-tab="build">Settings</button><button class="btn btn-secondary btn-sm" data-tab="saves">Saves</button></div>' +
        '<div class="panel on" data-panel="gen">' +
          '<div class="sec">Generator</div>' +
          '<div class="row"><label>Soort art</label><select id="__la_mode"><option value="light_art">Light Art</option><option value="cylinder">Halve cilinder</option><option value="neon_prisma">Neon prisma</option><option value="mini_blocks">Mini blocks</option></select></div>' +
          '<div class="row"><label>Stijl</label><select id="__la_variant"><option value="stacked">Veel overlap / glow</option><option value="soft">Zachter leesbaar</option><option value="whitefill">Meer witte highlights</option></select></div>' +
          '<div class="row"><label>Preview pixels</label><input id="__la_renderw" type="number" value="' + esc(settings.renderWidth) + '"><label>Art grootte</label><input id="__la_roomw" type="number" title="breedte in hoteltegels" value="' + esc(settings.roomW) + '"><input id="__la_roomh" type="number" title="hoogte in hoteltegels" value="' + esc(settings.roomH) + '"></div>' +
          '<div class="row"><label>Max lampen</label><input id="__la_max" type="range" min="500" max="65000" step="500" value="' + esc(settings.maxLights) + '"><span id="__la_max_label">' + esc(settings.maxLights) + '</span></div>' +
          '<div class="row"><label>Transparantie</label><input id="__la_alpha" type="range" min="1" max="255" value="' + esc(settings.alpha) + '" title="hogere waarde negeert meer half-transparante pixels"><label><input id="__la_crop" type="checkbox"' + (settings.crop ? ' checked' : '') + '> rand wegknippen</label></div>' +
          '<div class="row"><label>Details</label><input id="__la_coarse" type="number" title="grote glow-stappen" value="' + esc(settings.coarseStep) + '"><input id="__la_mid" type="number" title="middelste lamp-stappen" value="' + esc(settings.midStep) + '"><input id="__la_fine" type="number" title="kleine detail-stappen" value="' + esc(settings.detailStep) + '"></div>' +
          '<div class="sec">Chunks</div>' +
          '<div class="row"><label><input id="__la_chunk_mode" type="checkbox"' + (settings.chunkMode ? ' checked' : '') + '> in stukken</label><label>Chunk tegels</label><input id="__la_chunk_size" type="number" value="' + esc(settings.chunkSize) + '"><label>Chunks per zijde</label><input id="__la_chunk_cols" type="number" min="1" max="8" value="' + esc(settings.chunkCols) + '" title="2 = 4 chunks (40x40), 4 = 16 chunks (80x80)"><label>Rand overlap</label><input id="__la_chunk_bleed" type="number" value="' + esc(settings.chunkBleed) + '"></div>' +
          '<div class="row"><label>Welke stukken</label><input id="__la_chunk_select" type="text" placeholder="leeg = auto, bv. 1 of 1,2,4,5" value="' + esc(settings.chunkSelection) + '"></div>' +
          '<div class="row"><label>Naar rechts</label><input id="__la_chunk_rx" type="number" title="x verschil naar volgende chunk rechts" value="' + esc(settings.chunkRightX) + '"><input id="__la_chunk_ry" type="number" title="y verschil naar volgende chunk rechts" value="' + esc(settings.chunkRightY) + '"><label>Naar boven</label><input id="__la_chunk_ux" type="number" title="x verschil naar chunk erboven" value="' + esc(settings.chunkUpX) + '"><input id="__la_chunk_uy" type="number" title="y verschil naar chunk erboven" value="' + esc(settings.chunkUpY) + '"></div>' +
          '<div class="row"><button id="__la_plan" class="btn btn-secondary btn-sm flex-grow-1">Reload foto-preview</button></div>' +
          '<div class="sec">Koop en bouw</div><div class="prog"><div class="bar" id="__la_bar"></div></div><div id="__la_status">Klaar.</div>' +
          '<div class="row"><button id="__la_room_preview" class="btn btn-primary btn-sm flex-grow-1">Canvas kamer-preview</button><button id="__la_place_preview" class="btn btn-primary btn-sm flex-grow-1">Plaats preview in kamer</button></div>' +
          '<div class="row"><button id="__la_build" class="btn btn-warning btn-sm flex-grow-1">Koop+Bouw</button><button id="__la_info" class="btn btn-primary btn-sm">Plan info</button></div>' +
          '<div class="row"><button id="__la_stop" class="btn btn-danger btn-sm flex-grow-1">Stop</button></div>' +
          '<div class="row"><button id="__la_continue" class="btn btn-success btn-sm flex-grow-1">Continue</button></div>' +
        '</div>' +
        '<div class="panel" data-panel="color">' +
          '<div class="sec">Kleur van bronfoto</div>' +
          '<div class="row"><label>Kleurkracht</label><input id="__la_sat" type="range" min="-100" max="200" value="' + esc(settings.sat) + '"></div>' +
          '<div class="row"><label>Lichtsterkte</label><input id="__la_bright" type="range" min="-80" max="120" value="' + esc(settings.bright) + '"></div>' +
          '<div class="row"><label>Contrast</label><input id="__la_contrast" type="range" min="-80" max="120" value="' + esc(settings.contrast) + '"></div>' +
          '<div class="row"><label>Gamma</label><input id="__la_gamma" type="range" min="40" max="220" value="' + esc(settings.gamma) + '"></div>' +
          '<div class="row"><label>Rood</label><input id="__la_red_power" type="range" min="0" max="180" value="' + esc(settings.redPower) + '"></div>' +
          '<div class="row"><label>Groen</label><input id="__la_green_power" type="range" min="0" max="180" value="' + esc(settings.greenPower) + '"></div>' +
          '<div class="row"><label>Blauw</label><input id="__la_blue_power" type="range" min="0" max="180" value="' + esc(settings.bluePower) + '"></div>' +
          '<div class="sec">Lamp glow</div>' +
          '<div class="row"><label>Midden focus</label><input id="__la_focus" type="range" min="0" max="90" value="' + esc(settings.focus) + '"></div>' +
          '<div class="row"><label>Achtergrond dim</label><input id="__la_bgdim" type="range" min="0" max="90" value="' + esc(settings.bgDim) + '"></div>' +
          '<div class="row"><label>Donker negeren</label><input id="__la_dark" type="range" min="0" max="80" value="' + esc(settings.darkCut) + '"></div>' +
          '<div class="row"><label>Felheid lampen</label><input id="__la_intensity" type="range" min="20" max="160" value="' + esc(settings.intensity) + '"></div>' +
          '<div class="row"><label>Glow overlap</label><input id="__la_overlap" type="range" min="0" max="120" value="' + esc(settings.overlap) + '"></div>' +
          '<div class="row"><label>Dubbel stapelen</label><input id="__la_stack" type="range" min="0" max="100" value="' + esc(settings.stack) + '"></div>' +
          '<div class="row"><label>Kleuren mengen</label><input id="__la_mix" type="range" min="0" max="100" value="' + esc(settings.mix) + '"></div>' +
          '<div class="row"><label>Witte highlights</label><input id="__la_whitefill" type="range" min="0" max="100" value="' + esc(settings.whiteFill) + '"></div>' +
        '</div>' +
        '<div class="panel" data-panel="build">' +
          '<div class="sec">Bouwpositie</div>' +
          '<div class="row"><label>Start tegel</label><input id="__la_x" type="number" value="' + esc(settings.startX) + '"><input id="__la_y" type="number" value="' + esc(settings.startY) + '"><label>Draaiing</label><input id="__la_rot" type="number" value="' + esc(settings.rotation) + '"></div>' +
          '<div class="row"><label>Tegel schaal</label><input id="__la_xystep" type="text" value="' + esc(settings.xyStep) + '"></div>' +
          '<div class="row"><label>Bouwhoogte</label><input id="__la_bh" type="text" value="' + esc(settings.baseBh) + '"><label>Hoogte stap</label><input id="__la_bhstep" type="text" value="' + esc(settings.bhStep) + '"></div>' +
          '<div class="row"><label>Na plaatsen</label><input id="__la_delay" type="number" value="' + esc(settings.delay) + '"><label>Na :bs/:bh</label><input id="__la_setting_delay" type="number" value="' + esc(settings.settingDelay) + '"></div>' +
          '<div class="row"><label>Per batch</label><input id="__la_burst" type="number" value="' + esc(settings.burst) + '"><label>Batch pauze</label><input id="__la_burst_pause" type="number" value="' + esc(settings.burstPause) + '"><label>Retry wacht</label><input id="__la_retry" type="number" value="' + esc(settings.retry) + '"><label>Pogingen</label><input id="__la_attempts" type="number" value="' + esc(settings.attempts) + '"></div>' +
          '<div class="sec">Chunk camera markers</div>' +
          '<div class="row"><button id="__la_markers" class="btn btn-warning btn-sm flex-grow-1">Koop+Plaats markers</button><label>BH</label><input id="__la_marker_bh" type="number" value="' + esc(settings.markerBh) + '"><label>Rot</label><input id="__la_marker_rot" type="number" value="' + esc(settings.markerRot) + '"></div>' +
          '<div class="row"><label>Cyl 14</label><input id="__la_marker_cyl_type" type="number" value="' + esc(settings.markerCylinderType) + '"><input id="__la_marker_cyl_page" type="number" value="' + esc(settings.markerCylinderPage) + '"><input id="__la_marker_cyl_offer" type="number" value="' + esc(settings.markerCylinderOffer) + '"></div>' +
          '<div class="row"><label>Corner</label><input id="__la_marker_corner_type" type="number" value="' + esc(settings.markerCornerType) + '"><input id="__la_marker_corner_page" type="number" value="' + esc(settings.markerCornerPage) + '"><input id="__la_marker_corner_offer" type="number" value="' + esc(settings.markerCornerOffer) + '"></div>' +
          '<div class="row"><label>Numbers</label><input id="__la_marker_num_type" type="number" value="' + esc(settings.markerNumberType) + '"><input id="__la_marker_num_page" type="number" value="' + esc(settings.markerNumberPage) + '"><input id="__la_marker_num_offer" type="number" value="' + esc(settings.markerNumberOffer) + '"></div>' +
          '<div class="row"><label>Num set</label><input id="__la_marker_num_bh" type="number" value="' + esc(settings.markerNumberBh) + '"><input id="__la_marker_num_rot" type="number" value="' + esc(settings.markerNumberRot) + '"></div>' +
          '<div class="sec">Catalog lights</div>' +
          '<div class="row"><label>XXL</label><input id="__la_type_xxl" type="number" value="' + esc(settings.typeXXL) + '"><input id="__la_page_xxl" type="number" value="' + esc(settings.pageXXL) + '"><input id="__la_offer_xxl" type="number" value="' + esc(settings.offerXXL) + '"></div>' +
          '<div class="row"><label>XL</label><input id="__la_type_xl" type="number" value="' + esc(settings.typeXL) + '"><input id="__la_page_xl" type="number" value="' + esc(settings.pageXL) + '"><input id="__la_offer_xl" type="number" value="' + esc(settings.offerXL) + '"></div>' +
          '<div class="row"><label>L</label><input id="__la_type_l" type="number" value="' + esc(settings.typeL) + '"><input id="__la_page_l" type="number" value="' + esc(settings.pageL) + '"><input id="__la_offer_l" type="number" value="' + esc(settings.offerL) + '"></div>' +
          '<div class="row"><label>M</label><input id="__la_type_m" type="number" value="' + esc(settings.typeM) + '"><input id="__la_page_m" type="number" value="' + esc(settings.pageM) + '"><input id="__la_offer_m" type="number" value="' + esc(settings.offerM) + '"></div>' +
          '<div class="row"><label>S</label><input id="__la_type_s" type="number" value="' + esc(settings.typeS) + '"><input id="__la_page_s" type="number" value="' + esc(settings.pageS) + '"><input id="__la_offer_s" type="number" value="' + esc(settings.offerS) + '"></div>' +
        '</div>' +
        '<div class="panel" data-panel="saves">' +
          '<div class="sec">Room packet preview</div>' +
          '<textarea id="__la_packet_text" class="form-control" placeholder="Plak hier {in:Objects} of {in:ObjectAdd} packet text"></textarea>' +
          '<div class="row"><button id="__la_packet_preview" class="btn btn-primary btn-sm flex-grow-1">Maak preview van packet</button></div>' +
          '<div class="sec">Plan info</div><pre id="__la_out"></pre>' +
          '<div class="sec">Logboek</div><pre id="__la_log"></pre>' +
          '<div class="row"><button id="__la_refresh_log" class="btn btn-primary btn-sm flex-grow-1">Refresh log</button><button id="__la_copy_log" class="btn btn-success btn-sm flex-grow-1">Copy log</button><button id="__la_clear_log" class="btn btn-danger btn-sm flex-grow-1">Wis log</button></div>' +
        '</div>' +
      '</div></div>';
    document.body.appendChild(root);
    root.style.display = '';
    window.__la_root = root;
    window.__la_neonPrisma = { config: NEON_PRISMA, nearest: nearestNeonPrisma };
    root.querySelector('#__la_mode').value = settings.generatorMode || 'light_art';
    root.querySelector('#__la_variant').value = settings.variant || 'stacked';
    root.querySelectorAll('input:not([type="file"]):not([type="checkbox"]):not([type="range"])').forEach(function(el) {
      el.classList.add('form-control', 'form-control-sm');
    });
    root.querySelector('#__la_file').classList.add('form-control', 'form-control-sm');
    root.querySelectorAll('select').forEach(function(el) {
      el.classList.add('form-select', 'form-select-sm');
    });
    root.querySelectorAll('input[type="range"]').forEach(function(el) {
      el.classList.add('form-range');
    });
    root.querySelectorAll('[data-tab]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const tab = btn.getAttribute('data-tab');
        root.querySelectorAll('[data-tab]').forEach(function(b) { b.classList.toggle('active', b === btn); });
        root.querySelectorAll('[data-panel]').forEach(function(p) { p.classList.toggle('on', p.getAttribute('data-panel') === tab); });
      });
    });
    function redrawCurrentPreview() {
      if (previewFrame && previewFrame.work) renderPreview(root, previewFrame.w, previewFrame.h);
    }
    function bindPreviewPanZoom(canvas) {
      let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0;
      canvas.addEventListener('wheel', function(e) {
        e.preventDefault();
        const old = previewView.zoom;
        const next = clamp(old * (e.deltaY < 0 ? 1.16 : 0.86), 0.5, 8);
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left - canvas.width / 2;
        const my = e.clientY - rect.top - canvas.height / 2;
        previewView.x = (previewView.x - mx) * (next / old) + mx;
        previewView.y = (previewView.y - my) * (next / old) + my;
        previewView.zoom = next;
        redrawCurrentPreview();
      }, { passive: false });
      canvas.addEventListener('mousedown', function(e) {
        dragging = true; sx = e.clientX; sy = e.clientY; ox = previewView.x; oy = previewView.y;
      });
      document.addEventListener('mousemove', function(e) {
        if (!dragging) return;
        previewView.x = ox + (e.clientX - sx);
        previewView.y = oy + (e.clientY - sy);
        redrawCurrentPreview();
      });
      document.addEventListener('mouseup', function() { dragging = false; });
      canvas.addEventListener('dblclick', function() {
        previewView = { zoom: 1, x: 0, y: 0 };
        redrawCurrentPreview();
      });
    }
    bindPreviewPanZoom(root.querySelector('#__la_source'));
    bindPreviewPanZoom(root.querySelector('#__la_preview'));
    let timer = null;
    function updateMaxLabel() {
      const el = root.querySelector('#__la_max_label');
      if (el) el.textContent = String(root.querySelector('#__la_max')?.value || settings.maxLights);
    }
    updateMaxLabel();
    root.querySelectorAll('input,select').forEach(function(el) {
      el.addEventListener('input', function() {
        collectSettings(root);
        updateMaxLabel();
        if (image && ['__la_sat','__la_bright','__la_contrast','__la_gamma','__la_red_power','__la_green_power','__la_blue_power','__la_focus','__la_bgdim','__la_dark','__la_intensity','__la_overlap','__la_stack','__la_mix','__la_whitefill','__la_alpha','__la_coarse','__la_mid','__la_fine','__la_renderw','__la_roomw','__la_roomh','__la_chunk_mode','__la_chunk_size','__la_chunk_cols','__la_chunk_select','__la_chunk_bleed','__la_max'].includes(el.id)) {
          clearTimeout(timer);
          timer = setTimeout(function() { try { makePlan(root); } catch(ex) { root.querySelector('#__la_status').textContent = ex.message; } }, 180);
        }
      });
    });
    root.querySelector('#__la_file').addEventListener('change', function(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      imageName = file.name;
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = function() {
        image = img;
        URL.revokeObjectURL(url);
        try { makePlan(root); } catch(ex) { root.querySelector('#__la_status').textContent = ex.message; }
      };
      img.src = url;
    });
    root.querySelector('#__la_plan').addEventListener('click', function() { try { makePlan(root); } catch(ex) { root.querySelector('#__la_status').textContent = ex.message; } });
    root.querySelector('#__la_room_preview').addEventListener('click', function() {
      try { renderCurrentBuildPreview(root); } catch(ex) { root.querySelector('#__la_status').textContent = 'Kamer-preview fout: ' + ex.message; }
    });
    root.querySelector('#__la_place_preview').addEventListener('click', function() {
      togglePlacePreview(root);
    });
    root.querySelector('#__la_build').addEventListener('click', function() { buyAndBuild(root); });
    root.querySelector('#__la_continue').addEventListener('click', function() {
      checkpoint = loadCheckpoint();
      resumeSkip = checkpoint && checkpoint.completed ? parseInt(checkpoint.completed, 10) || 0 : 0;
      logBuild(root, 'continue geklikt', { checkpoint, resumeSkip });
      if (checkpoint && String(checkpoint.stage || '').toLowerCase().includes('marker')) buyAndPlaceChunkMarkers(root);
      else build(root);
    });
    root.querySelector('#__la_markers').addEventListener('click', function() { buyAndPlaceChunkMarkers(root); });
    root.querySelector('#__la_stop').addEventListener('click', function() {
      stopRequested = true;
      logBuild(root, 'stop gevraagd', { checkpoint: loadCheckpoint() });
    });
    root.querySelector('#__la_info').addEventListener('click', function() {
      renderSavesPanel(root);
      root.querySelectorAll('[data-panel]').forEach(function(p) { p.classList.toggle('on', p.getAttribute('data-panel') === 'saves'); });
      root.querySelectorAll('[data-tab]').forEach(function(b) { b.classList.toggle('active', b.getAttribute('data-tab') === 'saves'); });
    });
    root.querySelector('#__la_packet_preview').addEventListener('click', function() {
      try {
        renderRoomPacketPreview(root);
        renderSavesPanel(root);
      } catch(ex) {
        const el = root.querySelector('#__la_status');
        if (el) el.textContent = 'Packet preview fout: ' + ex.message;
      }
    });
    root.querySelector('#__la_refresh_log').addEventListener('click', function() { renderSavesPanel(root); });
    root.querySelector('#__la_copy_log').addEventListener('click', function() {
      renderSavesPanel(root);
      const text = 'PLAN INFO\n' + planInfoText() + '\n\nLOGBOEK\n' + formatBuildLog();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
          root.querySelector('#__la_status').textContent = 'Log gekopieerd.';
        }).catch(function() {
          const ta = document.createElement('textarea');
          ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
          root.querySelector('#__la_status').textContent = 'Log gekopieerd.';
        });
      } else {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
        root.querySelector('#__la_status').textContent = 'Log gekopieerd.';
      }
    });
    root.querySelector('#__la_clear_log').addEventListener('click', function() {
      buildLog = [];
      saveBuildLog();
      clearCheckpoint();
      resumeSkip = 0;
      renderSavesPanel(root);
    });
    root.querySelector('#__la_close').addEventListener('click', function() { root.style.display = 'none'; });
    const hdr = root.querySelector('#__la_hdr');
    let drag = false, ox = 0, oy = 0;
    hdr.addEventListener('mousedown', function(e) { if (e.target.id === '__la_close') return; drag = true; ox = e.clientX - root.getBoundingClientRect().left; oy = e.clientY - root.getBoundingClientRect().top; });
    document.addEventListener('mousemove', function(e) { if (!drag) return; root.style.right = 'auto'; root.style.left = (e.clientX - ox) + 'px'; root.style.top = (e.clientY - oy) + 'px'; });
    function keepPanelInViewport() {
      const margin = 8;
      const r = root.getBoundingClientRect();
      let left = root.style.left ? parseFloat(root.style.left) : r.left;
      let top = root.style.top ? parseFloat(root.style.top) : r.top;
      if (r.width > window.innerWidth - margin * 2) root.style.width = Math.max(320, window.innerWidth - margin * 2) + 'px';
      if (r.height > window.innerHeight - margin * 2) root.style.height = Math.max(360, window.innerHeight - margin * 2) + 'px';
      const nr = root.getBoundingClientRect();
      if (nr.right > window.innerWidth - margin) left -= nr.right - (window.innerWidth - margin);
      if (nr.left < margin) left += margin - nr.left;
      if (nr.bottom > window.innerHeight - margin) top -= nr.bottom - (window.innerHeight - margin);
      if (nr.top < margin) top += margin - nr.top;
      root.style.right = 'auto';
      root.style.left = Math.max(margin, left) + 'px';
      root.style.top = Math.max(margin, top) + 'px';
    }
    document.addEventListener('mouseup', function() { drag = false; keepPanelInViewport(); });
    window.addEventListener('resize', keepPanelInViewport);
    keepPanelInViewport();
    root.style.display = '';
    if (window.__ext_onStop) window.__ext_onStop(function() { active = false; root.remove(); style.remove(); });
  }

  window.onPacket('ObjectAdd', function(p) {
    if (!active) return;
    const d = parseObjectAdd(p.raw);
    if (!d) return;
    ackDetails.push(d);
    if (ackDetails.length > 1000) ackDetails.splice(0, ackDetails.length - 1000);
  });
  window.onPacket('PurchaseOK', function() {
    if (!active) return;
    purchaseOkCounter++;
  });
  window.onPacket('FurniList', function(p) {
    if (!active || !p.parsed) return;
    if (p.parsed.pageIndex === 0) localInventory = { byType: {}, byItem: {}, loadedAt: Date.now() };
    (p.parsed.items || []).forEach(rememberInventoryItem);
  });
  window.onPacket('FurniListAddOrUpdate', function(p) {
    if (!active || !p.parsed) return;
    rememberInventoryItem(p.parsed);
  });
  window.onPacket('ItemAdd', function(p) {
    if (!active || !p.parsed) return;
    rememberInventoryItem(p.parsed);
  });
  window.onPacket('FurniListRemove', function(p) {
    if (!active || !p.parsed) return;
    forgetInventoryItem(p.parsed.itemId);
  });
  window.onPacket('UnseenItems', function(p) {
    if (!active) return;
    mapUnseenItems(p.raw);
  });
  window.onPacket('Whisper', function(p) {
    if (!active) return;
    handleBuildStateText(readPacketText(p));
  });
  window.onPacket('WhisperMessage', function(p) {
    if (!active) return;
    handleBuildStateText(readPacketText(p));
  });
  window.onPacket('Chat', function(p) {
    if (!active) return;
    handleBuildStateText(readPacketText(p));
  });
  window.onPacket('ChatMessage', function(p) {
    if (!active) return;
    handleBuildStateText(readPacketText(p));
  });
  if (window.PacketStore && window.PacketStore.subscribe) window.PacketStore.subscribe(watchBuildPacket);

  function bootPixelArt() {
    if (window.__ghk_ready) window.__ghk_ready(buildUI);
    else buildUI();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootPixelArt);
  else bootPixelArt();
})();
