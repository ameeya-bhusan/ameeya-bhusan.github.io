/* Shared behaviour: mobile menu, footer year, reading progress, blog filters. */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Reading progress bar (article page only)
  var bar = document.querySelector('.progress');
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Blog tag filters
  var filters = document.querySelectorAll('.filters button');
  var cards = document.querySelectorAll('.grid .card');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tag = btn.getAttribute('data-tag');
      filters.forEach(function (b) { b.classList.remove('on'); });
      btn.classList.add('on');
      cards.forEach(function (c) {
        var show = tag === 'all' || (c.getAttribute('data-tags') || '').split(' ').indexOf(tag) !== -1;
        c.style.display = show ? '' : 'none';
      });
    });
  });
})();
