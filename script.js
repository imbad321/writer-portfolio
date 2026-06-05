(function () {
  'use strict';

  /* ═══════════════════════════════════════════════
     CONTENT DATA
  ═══════════════════════════════════════════════ */

  const WORKS = [
    {
      id: 1,
      title: 'Cartography of the Unnamed',
      type: 'poetry',
      year: 2023,
      excerpt:
`I.
There are cities my grandmother carried
without names for them — the one
where the river smelled of cardamom,
the one where all the doors faced east.

II.
I inherit her silence like a landmass:
vast, unmarked, belonging
to no atlas I have found.
Each language she left me is a border.

III.
I draw maps in the margins of her letters.
They lead nowhere I recognise.
Still I fold them into my coat
and call them origin, and call them home.`,
    },
    {
      id: 2,
      title: 'The Translator\'s Daughter',
      type: 'fiction',
      year: 2024,
      excerpt:
`My mother translated other people's grief for a living. She sat in glass booths above courtrooms and hospital corridors, turning one kind of sorrow into another, word by careful word. She said translation was not about finding the right word but the right silence — the pause where two languages agree there is no equivalent, only approximation.

I grew up between her approximations. English for school, Urdu for anger, a third language we invented for the hours after dinner when neither felt right. In that language, the word for homesickness was the same as the word for tomorrow. We never found it strange.

When I began to write, she read my work with the patience of a woman trained to wait for the precise moment of meaning. She underlined one sentence, once, in the margin of my first published story: This is what you could not say in either of our languages. I still do not know if it was praise.`,
    },
    {
      id: 3,
      title: 'Elegy for a Radio Left On',
      type: 'poetry',
      year: 2022,
      excerpt:
`I.
After the funeral we forgot to turn it off.
For three days it spoke to the empty kitchen,
cycling through the frequencies of elsewhere —
a cricket match, a love song, the shipping forecast.

II.
My father's hands, which had always known
the exact pressure needed to silence a room,
were busy learning to be still.
We let the radio keep speaking for him.

III.
Now I think of sound as a kind of persistence:
the way a voice continues in a room
long after the one who spoke it
has gone to somewhere the signal does not reach.`,
    },
    {
      id: 4,
      title: 'All the Things We Carried',
      type: 'fiction',
      year: 2023,
      excerpt:
`We crossed in February, which my mother later said was the wrong month for crossings. She meant the cold, but I think she also meant the light — how it fell on everything at that angle which refuses comfort, which insists on clarity, which says: look at what you are leaving, and look clearly.

We had one bag each. Mine held a novel I had already read three times, a photograph of my secondary school class, and a jar of dried apricots my grandmother had packed because she believed apricots prevented grief. They did not. But I ate them slowly, over many months, and by the time the jar was empty something had shifted in me that I cannot fully name.

My sister carried her notebooks. My mother carried documents. My father, who was a man who had once needed very little, carried nothing — which is to say he carried everything, which is the way of fathers who do not speak about such things.`,
    },
    {
      id: 5,
      title: 'Notes on Forgetting',
      type: 'prose',
      year: 2023,
      excerpt:
`I have been trying to remember the exact sound of my grandfather's voice and I cannot. I remember that it was low, and that it carried — he could speak quietly and still fill a room — and that it had a particular quality on Fridays, slower and more deliberate, as if he were saving words for something. But the voice itself is gone. What remains is the shape of it: the places where it would have been.

This is what forgetting actually is, I think. Not absence but outline. The space a thing occupied when it was present, now empty in the exact dimensions of what is lost. Which is why grief is so disorienting — you keep walking into furniture that isn't there.

I write to furnish the empty rooms. It does not replace what was there. But it gives me somewhere to sit in the dark, and something to do with my hands while I'm waiting.`,
    },
    {
      id: 6,
      title: 'What the Monsoon Teaches',
      type: 'poetry',
      year: 2022,
      excerpt:
`I.
It teaches you to trust the delay —
how the sky spends a whole afternoon
preparing to say one thing,
and then says it without apology.

II.
It teaches you the difference
between what can be held off
and what cannot:
how long you can stand in a doorway.

III.
It teaches you that most thresholds
are not about the rain.
The rain is only the occasion.
The rain is what asks you to decide.`,
    },
    {
      id: 7,
      title: 'In the Language of the Old Country',
      type: 'fiction',
      year: 2024,
      excerpt:
`My aunt sent letters in Urdu, which I could read slowly but could not read quickly enough. By the time I understood one sentence the shape of it had shifted, the way water in a cupped hand shifts before you can decide what to do with it. Reading her letters felt like translation of a place I had only visited in childhood: a country made partly of language and partly of the gaps in language where feeling lived.

She wrote about ordinary things. The price of mangoes. A neighbour's daughter's wedding. The new tiles in the mosque. And then, in the margin of one letter, in smaller handwriting as though she had not meant to include it: We are waiting for you to come back and you do not come and we have started to understand what it means that you do not come.

I am still writing the reply. I have been writing it for four years. It begins: Auntie, I know. I know. Here is what I have made instead.`,
    },
    {
      id: 8,
      title: 'What the House Remembers',
      type: 'prose',
      year: 2022,
      excerpt:
`A house remembers through its resistances — the door that sticks in August, the particular creak of the second stair that announces children coming home late, the window latch that requires the exact pressure of the left thumb, learned by every person who has ever needed to close it against the rain. These are the things that survive the people who made them. Long after you forget the sound of a voice, a door will stick in August and you will remember the whole summer.

I sold my childhood home in March, which everyone agreed was a practical decision, which was true, and which had nothing to do with the fact that all winter I had been sleeping badly and waking in the small hours to the sound of the second stair, which is a sound that in our family means someone you love is home.

The new owners have re-carpeted. The stair is quiet now. I know this because my mother drove past and told me. We did not talk about what it meant, which is how we talk about the things that matter most — by not talking about them, by circling close and saying something else, something true in a different direction.`,
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
        ['win-works', 'win-reading', 'win-nowwriting', 'win-contact'].forEach(function (id) {
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

      // Arrange / Open-All: three-column layout
      var positions = [
        { id: 'win-works',      l: 110, t: 14,  w: 282, h: 316 },
        { id: 'win-reading',    l: 404, t: 14,  w: 476, h: 674 },
        { id: 'win-about',      l: 110, t: 342, w: 282, h: 346 },
        { id: 'win-nowwriting', l: 892, t: 14,  w: 320, h: 316 },
        { id: 'win-contact',    l: 892, t: 342, w: 320, h: 346 },
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

      // Bring reading pane forward
      if (MobileNav.isMobile()) {
        MobileNav.show('win-reading');
      } else {
        var rp = state.windows['win-reading'];
        if (rp && (rp.minimized || rp.closed)) {
          WindowManager.reopen('win-reading');
        } else {
          WindowManager.bringToFront('win-reading');
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
