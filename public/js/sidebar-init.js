(function(){
  'use strict';

  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
      var html = document.documentElement;
      var isDark = html.classList.toggle('dark-theme');
      localStorage.setItem('DARK', isDark ? '1' : '0');
    });
  }

  function initSidebar() {
    var toggler = document.getElementById('sidebar-toggler');
    var sidebar = document.getElementById('sidebar');
    if (!toggler || !sidebar) return;
    var mask = sidebar.querySelector('.mask');
    function open() {
      sidebar.classList.add('open');
      toggler.setAttribute('aria-expanded', 'true');
      toggler.setAttribute('aria-label', 'Close menu');
    }
    function close() {
      sidebar.classList.remove('open');
      toggler.setAttribute('aria-expanded', 'false');
      toggler.setAttribute('aria-label', 'Open menu');
    }
    toggler.addEventListener('click', function() {
      sidebar.classList.contains('open') ? close() : open();
    });
    if (mask) mask.addEventListener('click', close);
    document.querySelectorAll('#sidebar summary').forEach(function(s) {
      s.addEventListener('click', function() {
        var y = window.pageYOffset;
        requestAnimationFrame(function() { window.scrollTo(0, y); });
      }, { passive: true });
    });
  }

  function initSearch() {
    var input = document.getElementById('tool-search');
    if (!input) return;
    var container = document.querySelector('#sidebar .container');
    input.addEventListener('input', function() {
      var q = this.value.toLowerCase();
      container.querySelectorAll('li').forEach(function(li) {
        li.style.display = (q && li.textContent.toLowerCase().indexOf(q) === -1) ? 'none' : '';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      initSidebar();
      initSearch();
    });
  } else {
    initTheme();
    initSidebar();
    initSearch();
  }
})();
