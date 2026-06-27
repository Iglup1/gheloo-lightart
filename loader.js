(function() {
  var url = 'https://raw.githubusercontent.com/Iglup1/gheloo-lightart/master/extensions/pixelart-lightart.js';
  fetch(url + '?t=' + Date.now(), { cache: 'no-store' })
    .then(function(r) { return r.text(); })
    .then(function(code) { (0, eval)(code); console.log('[lightart] loaded from GitHub'); })
    .catch(function(e) { console.error('[lightart] load failed:', e); });
})();
