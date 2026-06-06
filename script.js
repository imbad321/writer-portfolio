(function () {
  'use strict';

  /* ═══════════════════════════════════════════════
     CONTENT DATA
  ═══════════════════════════════════════════════ */

  const WORKS = [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor',
      type: 'poetry',
      year: 2023,
      excerpt:
`I.
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.

II.
Ut enim ad minim veniam,
quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea
commodo consequat.

III.
Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore
eu fugiat nulla pariatur,
excepteur sint occaecat cupidatat.`,
    },
    {
      id: 2,
      title: 'Sit Amet Consectetur',
      type: 'fiction',
      year: 2024,
      excerpt:
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
      id: 3,
      title: 'Adipiscing Elit Sed',
      type: 'poetry',
      year: 2022,
      excerpt:
`I.
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.

II.
Nemo enim ipsam voluptatem quia
voluptas sit aspernatur aut odit
aut fugit, sed quia consequuntur
magni dolores eos qui ratione.

III.
Neque porro quisquam est qui dolorem
ipsum quia dolor sit amet consectetur
adipisci velit sed quia non numquam
eius modi tempora incidunt.`,
    },
    {
      id: 4,
      title: 'Eiusmod Tempor Incididunt',
      type: 'fiction',
      year: 2023,
      excerpt:
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.`,
    },
    {
      id: 5,
      title: 'Ut Labore Dolore',
      type: 'prose',
      year: 2023,
      excerpt:
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },
    {
      id: 6,
      title: 'Magna Aliqua Enim',
      type: 'poetry',
      year: 2022,
      excerpt:
`I.
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.

II.
Ut enim ad minim veniam,
quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea
commodo consequat.

III.
Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore
eu fugiat nulla pariatur,
excepteur sint occaecat cupidatat.`,
    },
    {
      id: 7,
      title: 'Veniam Quis Nostrud',
      type: 'fiction',
      year: 2024,
      excerpt:
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam.`,
    },
    {
      id: 8,
      title: 'Exercitation Ullamco Laboris',
      type: 'prose',
      year: 2022,
      excerpt:
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.`,
    },
  ];

  /* ═══════════════════════════════════════════════
     STATE
  ═══════════════════════════════════════════════ */

  const state = {
    zCounter:        100,
    focusedWindowId: null,
    windows:         {},   // id → { el, minimized, closed, maximized, savedRect }
  };

  /* ═══════════════════════════════════════════════
     STARS
  ═══════════════════════════════════════════════ */

  function generateStars(count) {
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var s      = document.createElement('div');
      var accent = i < 18;   // first 18 are larger accent stars
      var size   = accent
        ? (2.2 + Math.random() * 2).toFixed(1)    // 2.2–4.2 px
        : (0.6 + Math.random() * 1.4).toFixed(1); // 0.6–2 px
      s.className = 'star';
      s.style.cssText = [
        'left:'  + (Math.random() * 100).toFixed(2) + 'vw',
        'top:'   + (Math.random() * 90).toFixed(2)  + 'vh',
        'width:' + size + 'px',
        'height:' + size + 'px',
        '--twinkle-dur:'   + (3 + Math.random() * 5).toFixed(1) + 's',
        '--twinkle-delay:' + (-Math.random() * 9).toFixed(1) + 's',
        '--star-min:'  + (accent ? 0.04 : 0.06 + Math.random() * 0.12).toFixed(2),
        '--star-max:'  + (accent ? 0.75 + Math.random() * 0.25 : 0.45 + Math.random() * 0.45).toFixed(2),
      ].join(';');
      frag.appendChild(s);
    }
    document.body.appendChild(frag);
  }

  /* ═══════════════════════════════════════════════
     WINDOW MANAGER
  ═══════════════════════════════════════════════ */

  var WindowManager = {
    init: function (initialLoad) {
      document.querySelectorAll('.window').forEach(function (el) {
        var id = el.id;
        state.windows[id] = { el: el, minimized: false, closed: el.classList.contains('is-hidden'), maximized: false, savedRect: null };

        el.addEventListener('mousedown', function () { WindowManager.bringToFront(id); });

        // Click on a minimized title bar restores the window
        el.querySelector('.window-titlebar').addEventListener('click', function (e) {
          if (e.target.closest('.window-controls')) return;
          var ws = state.windows[id];
          if (ws && ws.minimized) WindowManager.minimize(id);
        });

        el.querySelector('.btn-minimize').addEventListener('click', function (e) {
          e.stopPropagation();
          WindowManager.minimize(id);
        });
        el.querySelector('.btn-maximize').addEventListener('click', function (e) {
          e.stopPropagation();
          WindowManager.toggleMaximize(id);
        });
        el.querySelector('.btn-close').addEventListener('click', function (e) {
          e.stopPropagation();
          WindowManager.close(id);
        });
      });
      this.positionWindows(initialLoad);
    },

    bringToFront: function (id) {
      var win = state.windows[id];
      if (!win || win.minimized || win.closed) return;
      state.zCounter++;
      win.el.style.zIndex = state.zCounter;
      Object.values(state.windows).forEach(function (w) { w.el.classList.remove('is-focused'); });
      win.el.classList.add('is-focused');
      state.focusedWindowId = id;
      TaskbarManager.updateActiveButton(id);
    },

    minimize: function (id) {
      var win = state.windows[id];
      win.minimized = !win.minimized;
      win.el.classList.toggle('is-minimized', win.minimized);
      if (!win.minimized) this.bringToFront(id);
      TaskbarManager.updateButtons();
    },

    toggleMaximize: function (id) {
      var win = state.windows[id];
      if (win.maximized) {
        if (win.savedRect) {
          win.el.style.left   = win.savedRect.left;
          win.el.style.top    = win.savedRect.top;
          win.el.style.width  = win.savedRect.width;
          win.el.style.height = win.savedRect.height;
        }
        win.maximized = false;
      } else {
        win.savedRect = {
          left:   win.el.style.left,
          top:    win.el.style.top,
          width:  win.el.style.width,
          height: win.el.style.height,
        };
        win.el.style.left   = '0px';
        win.el.style.top    = '0px';
        win.el.style.width  = '100vw';
        win.el.style.height = 'calc(100vh - 36px)';
        win.maximized = true;
      }
      this.bringToFront(id);
    },

    close: function (id) {
      var win = state.windows[id];
      if (win.closed) return;
      win.closed    = true;
      win.minimized = false;
      win.el.classList.remove('is-minimized', 'is-focused');
      win.el.classList.add('is-closing');
      win.el.addEventListener('animationend', function () {
        win.el.classList.remove('is-closing');
        win.el.classList.add('is-hidden');
        TaskbarManager.updateButtons();
      }, { once: true });
    },

    reopen: function (id) {
      var win = state.windows[id];
      win.closed    = false;
      win.minimized = false;
      win.el.classList.remove('is-hidden', 'is-minimized');

      // Default sizes for first open; then use current size
      var defaults = {
        'win-works':      { w: 700, h: 500 },
        'win-about':      { w: 420, h: 480 },
        'win-contact':    { w: 320, h: 340 },
        'win-nowwriting': { w: 320, h: 290 },
      };
      var el  = win.el;
      var def = defaults[id] || { w: 400, h: 320 };
      var w   = parseInt(el.style.width)  || def.w;
      var h   = parseInt(el.style.height) || def.h;
      el.style.width  = w + 'px';
      el.style.height = h + 'px';

      // Random position within the usable desktop area
      var vw   = window.innerWidth;
      var vh   = window.innerHeight;
      var maxL = Math.max(40, vw  - w - 40);
      var maxT = Math.max(20, vh - 36 - h - 20);
      el.style.left = Math.round(40 + Math.random() * maxL * 0.7) + 'px';
      el.style.top  = Math.round(20 + Math.random() * maxT * 0.6) + 'px';

      win.el.classList.add('is-opening');
      win.el.addEventListener('animationend', function () {
        win.el.classList.remove('is-opening');
      }, { once: true });
      this.bringToFront(id);
      TaskbarManager.updateButtons();
    },

    positionWindows: function (initialLoad) {
      var vw    = window.innerWidth;
      var vh    = window.innerHeight;
      var scale = Math.min(1, vw / 1280);

      if (initialLoad) {
        // First visit: only About Me, centered on the desktop
        var aw = 420, ah = 540;
        var al = Math.round((vw - aw) / 2);
        var at = Math.max(20, Math.round((vh - 36 - ah) / 2));

        var about = state.windows['win-about'];
        if (about) {
          about.el.style.left   = al + 'px';
          about.el.style.top    = at + 'px';
          about.el.style.width  = aw + 'px';
          about.el.style.height = ah + 'px';
          about.el.style.zIndex = 20;
          about.closed = false; about.minimized = false; about.maximized = false;
          about.el.classList.remove('is-hidden', 'is-minimized', 'is-opening');
          setTimeout(function () {
            about.el.classList.add('is-opening');
            about.el.addEventListener('animationend', function () {
              about.el.classList.remove('is-opening');
            }, { once: true });
          }, 150);
        }

        // All other windows stay closed
        ['win-works', 'win-nowwriting', 'win-contact'].forEach(function (id) {
          var w = state.windows[id];
          if (!w) return;
          w.closed = true; w.minimized = false;
          w.el.classList.remove('is-minimized', 'is-opening');
          w.el.classList.add('is-hidden');
        });

        state.zCounter = 21;
        TaskbarManager.updateButtons();
        return;
      }

      // Arrange / Open-All: two-column layout
      var positions = [
        { id: 'win-works',      l: 110, t: 14,  w: 700, h: 560 },
        { id: 'win-about',      l: 110, t: 586, w: 700, h: 280 },
        { id: 'win-nowwriting', l: 822, t: 14,  w: 340, h: 270 },
        { id: 'win-contact',    l: 822, t: 296, w: 340, h: 280 },
      ];

      positions.forEach(function (p, i) {
        var win = state.windows[p.id];
        if (!win) return;
        win.el.style.left   = Math.round(p.l * scale) + 'px';
        win.el.style.top    = Math.round(p.t * scale) + 'px';
        win.el.style.width  = p.w + 'px';
        win.el.style.height = p.h + 'px';
        win.el.style.zIndex = 10 + i;
        win.maximized = false; win.closed = false; win.minimized = false;
        win.el.classList.remove('is-hidden', 'is-minimized', 'is-opening');
        var delay = i * 55;
        setTimeout(function () {
          win.el.classList.add('is-opening');
          win.el.addEventListener('animationend', function () {
            win.el.classList.remove('is-opening');
          }, { once: true });
        }, delay);
      });

      state.zCounter = 15;
      TaskbarManager.updateButtons();
    },
  };

  /* ═══════════════════════════════════════════════
     DRAG MANAGER
  ═══════════════════════════════════════════════ */

  var DragManager = {
    active: null,

    init: function () {
      document.querySelectorAll('.window-titlebar').forEach(function (tb) {
        tb.addEventListener('mousedown', function (e) { DragManager.startDrag(e); });
      });
      document.addEventListener('mousemove', function (e) { DragManager.onDrag(e); });
      document.addEventListener('mouseup',   function ()  { DragManager.stopDrag(); });
    },

    startDrag: function (e) {
      if (e.target.closest('.window-controls')) return;
      var win = e.currentTarget.closest('.window');
      if (!win) return;
      var id  = win.id;
      var ws  = state.windows[id];
      if (ws && (ws.minimized || ws.maximized)) return;
      WindowManager.bringToFront(id);
      this.active = {
        el:       win,
        startX:   e.clientX,
        startY:   e.clientY,
        origLeft: parseInt(win.style.left) || 0,
        origTop:  parseInt(win.style.top)  || 0,
      };
      e.preventDefault();
    },

    onDrag: function (e) {
      if (!this.active) return;
      var dx      = e.clientX - this.active.startX;
      var dy      = e.clientY - this.active.startY;
      var newLeft = this.active.origLeft + dx;
      var newTop  = this.active.origTop  + dy;

      // Keep title bar reachable
      var minLeft = -(this.active.el.offsetWidth - 60);
      var maxTop  = window.innerHeight - 36 - 28;
      newLeft = Math.max(minLeft, newLeft);
      newTop  = Math.max(0, Math.min(maxTop, newTop));

      this.active.el.style.left = newLeft + 'px';
      this.active.el.style.top  = newTop  + 'px';
    },

    stopDrag: function () { this.active = null; },
  };

  /* ═══════════════════════════════════════════════
     TASKBAR MANAGER
  ═══════════════════════════════════════════════ */

  var TaskbarManager = {
    init: function () {
      document.querySelectorAll('.taskbar-win-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var id  = btn.dataset.win;
          var win = state.windows[id];
          if (!win) return;

          if (win.closed) {
            WindowManager.reopen(id);
            return;
          }
          if (state.focusedWindowId === id && !win.minimized) {
            WindowManager.minimize(id);
          } else {
            if (win.minimized) WindowManager.minimize(id); // toggle off minimized
            WindowManager.bringToFront(id);
          }
        });
      });
    },

    updateActiveButton: function (id) {
      document.querySelectorAll('.taskbar-win-btn').forEach(function (btn) {
        btn.classList.toggle('is-active', btn.dataset.win === id);
      });
    },

    updateButtons: function () {
      document.querySelectorAll('.taskbar-win-btn').forEach(function (btn) {
        var win = state.windows[btn.dataset.win];
        if (!win) return;
        btn.classList.toggle('is-minimized-btn', win.minimized && !win.closed);
        btn.classList.toggle('is-active',
          !win.minimized && !win.closed && btn.dataset.win === state.focusedWindowId);
      });
    },
  };

  /* ═══════════════════════════════════════════════
     TYPEWRITER
  ═══════════════════════════════════════════════ */

  var Typewriter = {
    _timer: null,

    stop: function () {
      if (this._timer) { clearInterval(this._timer); this._timer = null; }
    },

    // Types `text` into `el` using textContent, then calls optional onDone.
    // Poetry gets a slower, more deliberate pace; prose/fiction flows faster.
    type: function (el, text, type, onDone) {
      this.stop();
      el.textContent = '';
      el.classList.add('is-typing');

      var i    = 0;
      var len  = text.length;
      var step = (type === 'poetry') ? 14 : 6;   // ms per character

      this._timer = setInterval(function () {
        // Advance several chars per tick for long pieces so it never drags
        var burst = (len > 300) ? 2 : 1;
        for (var b = 0; b < burst && i < len; b++) {
          el.textContent += text[i];
          i++;
        }
        if (i >= len) {
          clearInterval(Typewriter._timer);
          Typewriter._timer = null;
          el.classList.remove('is-typing');
          if (onDone) onDone();
        }
      }, step);
    },
  };

  /* ═══════════════════════════════════════════════
     READING PANE
  ═══════════════════════════════════════════════ */

  var ReadingPane = {
    init: function () {
      var ul = document.querySelector('#works-list .works-list-ul');
      WORKS.forEach(function (work) {
        var li = document.createElement('li');
        li.className      = 'work-item';
        li.dataset.id     = work.id;
        li.dataset.type   = work.type;
        li.innerHTML      =
          '<span class="type-dot dot-' + work.type + '"></span>' +
          '<span class="work-title">'  + escHtml(work.title) + '</span>' +
          '<span class="work-meta">'   + work.year + '</span>';
        li.addEventListener('click', function () { ReadingPane.loadWork(work.id); });
        ul.appendChild(li);
      });
    },

    loadWork: function (id) {
      var work = WORKS.find(function (w) { return w.id === id; });
      if (!work) return;

      // Cancel any in-progress typewriter
      Typewriter.stop();

      var body    = document.getElementById('reading-pane');
      var type    = work.type.charAt(0).toUpperCase() + work.type.slice(1);
      var dropcap = (work.type === 'fiction' || work.type === 'prose') ? ' reading-text-dropcap' : '';

      // Scroll to top, then replace content
      body.scrollTop = 0;
      body.innerHTML =
        '<div class="reading-content">' +
        '<h2 class="reading-title">' + escHtml(work.title) + '</h2>' +
        '<p class="reading-meta">'   + type + ' &middot; ' + work.year + '</p>' +
        '<div class="reading-text' + dropcap + '"></div>' +
        '</div>';

      var textEl    = body.querySelector('.reading-text');
      var wordCount = work.excerpt.split(/\s+/).filter(Boolean).length;

      document.getElementById('reading-status').textContent = 'typing…';
      Typewriter.type(textEl, work.excerpt, work.type, function () {
        document.getElementById('reading-status').textContent =
          type + ' · ' + wordCount + ' words';
      });

      // Highlight selected in works list
      document.querySelectorAll('.work-item').forEach(function (li) {
        li.classList.toggle('is-selected', parseInt(li.dataset.id) === id);
      });

      // Bring the combined works window forward
      if (!MobileNav.isMobile()) {
        var rp = state.windows['win-works'];
        if (rp && (rp.minimized || rp.closed)) {
          WindowManager.reopen('win-works');
        } else {
          WindowManager.bringToFront('win-works');
        }
      }
    },
  };

  /* ═══════════════════════════════════════════════
     CLOCK
  ═══════════════════════════════════════════════ */

  var Clock = {
    init: function () {
      var el = document.getElementById('system-clock');
      function tick() {
        var now = new Date();
        var h   = String(now.getHours()).padStart(2, '0');
        var m   = String(now.getMinutes()).padStart(2, '0');
        el.textContent = h + ':' + m;
      }
      tick();
      setInterval(tick, 1000);
    },
  };

  /* ═══════════════════════════════════════════════
     START MENU
  ═══════════════════════════════════════════════ */

  var StartMenu = {
    el: null,
    isOpen: false,

    init: function () {
      this.el = document.getElementById('start-menu');
      var self = this;

      document.getElementById('start-btn').addEventListener('click', function (e) {
        e.stopPropagation();
        self.isOpen ? self.close() : self.open();
      });

      document.addEventListener('click', function () { self.close(); });

      this.el.querySelectorAll('[data-action]').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          self.handleAction(item.dataset.action);
          self.close();
        });
      });
    },

    open:  function () { this.el.classList.remove('hidden'); this.isOpen = true; },
    close: function () { this.el.classList.add('hidden');    this.isOpen = false; },

    handleAction: function (action) {
      if (action === 'open-all' || action === 'arrange') {
        WindowManager.positionWindows(false);
      }
      if (action === 'about-os') {
        alert(
          'Shaheer Khan — Portfolio  v1.0\n' +
          'Optimised for Netscape Navigator 4.0\n\n' +
          '© 2024 Shaheer Khan. All rights reserved.'
        );
      }
    },
  };

  /* ═══════════════════════════════════════════════
     UTILITY
  ═══════════════════════════════════════════════ */

  function escHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ═══════════════════════════════════════════════
     DESKTOP ICONS
  ═══════════════════════════════════════════════ */

  var DesktopIcons = {
    selected: null,

    init: function () {
      var self = this;
      document.querySelectorAll('.desktop-icon').forEach(function (icon) {
        var winId = icon.dataset.win;

        // Single click: select
        icon.addEventListener('click', function (e) {
          e.stopPropagation();
          self.select(icon);
        });

        // Double click: open window
        icon.addEventListener('dblclick', function (e) {
          e.stopPropagation();
          var win = state.windows[winId];
          if (win && (win.closed || win.minimized)) {
            WindowManager.reopen(winId);
          } else {
            WindowManager.bringToFront(winId);
          }
          self.deselect();
        });

        // Keyboard: Enter to open
        icon.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') {
            var win = state.windows[winId];
            if (win && (win.closed || win.minimized)) {
              WindowManager.reopen(winId);
            } else {
              WindowManager.bringToFront(winId);
            }
            self.deselect();
          }
        });
      });

      // Click on desktop deselects
      document.addEventListener('click', function () { self.deselect(); });
    },

    select: function (icon) {
      if (this.selected && this.selected !== icon) {
        this.selected.classList.remove('is-selected');
      }
      icon.classList.add('is-selected');
      this.selected = icon;
    },

    deselect: function () {
      if (this.selected) {
        this.selected.classList.remove('is-selected');
        this.selected = null;
      }
    },
  };

  /* ═══════════════════════════════════════════════
     MOBILE NAV
  ═══════════════════════════════════════════════ */

  var MobileNav = {
    isMobile: function () { return window.innerWidth <= 768; },

    init: function () {
      if (!this.isMobile()) return;
      this.show('win-about');
      var self = this;
      document.querySelectorAll('.mob-tab').forEach(function (btn) {
        btn.addEventListener('click', function () { self.show(btn.dataset.tab); });
      });
    },

    show: function (id) {
      document.querySelectorAll('.window').forEach(function (w) { w.classList.remove('mob-visible'); });
      document.querySelectorAll('.mob-tab').forEach(function (btn) {
        var active = btn.dataset.tab === id;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      var target = document.getElementById(id);
      if (target) {
        target.classList.remove('is-hidden');
        target.classList.add('mob-visible');
      }
    },
  };

  /* ═══════════════════════════════════════════════
     DESKTOP HINT
  ═══════════════════════════════════════════════ */

  var DesktopHint = {
    init: function () {
      if (MobileNav.isMobile()) return;
      var hint = document.getElementById('desktop-hint');
      if (!hint) return;

      setTimeout(function () {
        hint.classList.add('is-visible');
        setTimeout(function () { hint.classList.remove('is-visible'); }, 9000);
      }, 2000);

      // Dismiss when user opens any window from the taskbar
      var tb = document.getElementById('taskbar-windows');
      if (tb) tb.addEventListener('click', function () {
        hint.classList.remove('is-visible');
      }, { once: true });
    },
  };

  /* ═══════════════════════════════════════════════
     WORKS FILTER
  ═══════════════════════════════════════════════ */

  var WorksFilter = {
    active: { poetry: true, fiction: true, prose: true },

    init: function () {
      document.querySelectorAll('.legend-dot[data-filter]').forEach(function (dot) {
        dot.addEventListener('click', function (e) {
          e.stopPropagation();
          var t = dot.dataset.filter;
          WorksFilter.active[t] = !WorksFilter.active[t];
          dot.classList.toggle('is-inactive', !WorksFilter.active[t]);
          WorksFilter.apply();
        });
      });
    },

    apply: function () {
      document.querySelectorAll('.work-item').forEach(function (li) {
        li.classList.toggle('is-filtered', !WorksFilter.active[li.dataset.type]);
      });
    },
  };

  /* ═══════════════════════════════════════════════
     BOOT SCREEN
  ═══════════════════════════════════════════════ */

  var BootScreen = {
    run: function (onComplete) {
      var screen = document.getElementById('boot-screen');
      // Splash visible for ~1800ms, then CRT-collapse animation (~700ms)
      setTimeout(function () {
        screen.classList.add('is-collapsing');
        screen.addEventListener('animationend', function () {
          screen.style.display = 'none';
          onComplete();
        }, { once: true });
      }, 1800);
    },
  };

  /* ═══════════════════════════════════════════════
     BOOT
  ═══════════════════════════════════════════════ */

  document.addEventListener('DOMContentLoaded', function () {
    generateStars(120);
    BootScreen.run(function () {
      WindowManager.init(true);
      DragManager.init();
      TaskbarManager.init();
      ReadingPane.init();
      WorksFilter.init();
      Clock.init();
      StartMenu.init();
      DesktopIcons.init();
      MobileNav.init();
      DesktopHint.init();
      setTimeout(function () {
        if (!MobileNav.isMobile()) WindowManager.bringToFront('win-about');
      }, 500);
    });
  });

})();
