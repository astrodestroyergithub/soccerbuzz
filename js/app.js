(function () {
  const DATA = window.SOCCERBUZZ_DATA;

  const state = {
    activeView: "match-center",
    activeCompFilter: "ALL",
    selectedMatchId: "m1",
    matchTab: "commentary",
    commFilter: "all",
    pitchTeamMode: "both",
    pitchOverlay: "formation",
    standingsLeague: "LALIGA",
    fixturesComp: "ALL",
    fixturesStatus: "ALL",
    fixturesPinnedOnly: false,
    searchQuery: "",
    transferFilter: "ALL",
    comparePlayerA: "p1",
    comparePlayerB: "p4",
    liveSimRunning: true,
    soundEnabled: false,
    lightTheme: false,
    pinnedMatches: { m1: true, m2: true, m5: true },
    motmVotes: {
      m1: { "J. Bellingham": 48, "K. Mbappé": 31, "Lamine Yamal": 21 },
      m2: { "L. Messi": 44, "K. Mbappé": 38, "M. Olise": 18 },
      m3: { "H. Kane": 52, "J. Musiala": 36, "S. Guirassy": 12 },
      m4: { "N. Williams": 46, "Lamine Yamal": 34, "C. Palmer": 20 },
      m5: { "G. Stewart": 49, "J. Maclaren": 35, "D. Diamantakos": 16 },
      m6: { "M. Salah": 51, "F. Wirtz": 49 }
    },
    userVotedMotm: {},
    bracketSelections: {
      sf1: "Spain 🇪🇸",
      sf2: "Argentina 🇦🇷",
      sf3: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      sf4: "Netherlands 🇳🇱",
      final1: "Spain 🇪🇸",
      final2: "Argentina 🇦🇷",
      champion: "Argentina 🇦🇷"
    }
  };

  let xgChartInstance = null;
  let momentumChartInstance = null;
  let compareChartInstance = null;
  let simIntervalId = null;
  let audioCtx = null;

  function playStadiumSound(type) {
    if (!state.soundEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtx) audioCtx = new AudioContextClass();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const now = audioCtx.currentTime;
      if (type === "goal") {
        const freqs = [261.63, 329.63, 392.0, 523.25];
        freqs.forEach((f, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(f, now + idx * 0.06);
          gain.gain.setValueAtTime(0.12, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + 0.95);
        });
      } else {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(2800, now);
        osc.frequency.setValueAtTime(2950, now + 0.08);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.26);
      }
    } catch (e) {
      // Ignore audio errors
    }
  }

  function showToast(message, badgeText) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border border-emerald-400/40 bg-slate-900/95 text-white text-sm font-medium transform transition-all duration-300";
    toast.innerHTML = `
      <span class="px-2 py-0.5 text-xs font-bold uppercase rounded bg-emerald-500 text-slate-950">${badgeText || "SOCCERBUZZ"}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 3400);
  }

  function getSelectedMatch() {
    return DATA.matches.find((m) => m.id === state.selectedMatchId) || DATA.matches[0];
  }

  function renderTeamCrest(team, sizeClass) {
    const sz = sizeClass || "w-9 h-9 text-xs";
    return `<div class="${sz} rounded-full flex items-center justify-center font-extrabold tracking-tighter shadow-inner shrink-0 border-2" style="background:${team.color}; border-color:${team.accent}; color:#ffffff;">${team.code}</div>`;
  }

  // 1. Render Top Competition Filter Pills
  function renderCompFilterBar() {
    const el = document.getElementById("comp-filter-bar");
    if (!el) return;
    el.innerHTML = DATA.competitions
      .map((c) => {
        const active = state.activeCompFilter === c.id;
        let count = DATA.matches.length;
        if (c.id === "LIVE") count = DATA.matches.filter((m) => m.status === "LIVE").length;
        else if (c.id !== "ALL") count = DATA.matches.filter((m) => m.compId === c.id).length;
        return `<button type="button" onclick="window.sbSetCompFilter('${c.id}')" class="px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
          active
            ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
            : "sb-surface-2 hover:border-emerald-500/40 border text-slate-300"
        }">
          <span>${c.icon}</span>
          <span>${c.short}</span>
          <span class="px-1.5 py-0.2 rounded-full text-[10px] ${active ? "bg-slate-950/20 text-slate-950" : "bg-slate-700/60 text-slate-300"}">${count}</span>
        </button>`;
      })
      .join("");
  }

  // 2. Render Cricbuzz-style Top Match Strip
  function renderMatchStrip() {
    const strip = document.getElementById("live-match-strip");
    if (!strip) return;
    let list = DATA.matches;
    if (state.activeCompFilter === "LIVE") {
      list = list.filter((m) => m.status === "LIVE");
    } else if (state.activeCompFilter !== "ALL") {
      list = list.filter((m) => m.compId === state.activeCompFilter);
    }
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.trim().toLowerCase();
      list = list.filter(
        (m) =>
          m.home.name.toLowerCase().includes(q) ||
          m.away.name.toLowerCase().includes(q) ||
          m.compName.toLowerCase().includes(q)
      );
    }

    if (list.length === 0) {
      strip.innerHTML = `<div class="p-4 text-xs sb-text-muted">No matches match the current filter. <button type="button" onclick="window.sbSetCompFilter('ALL')" class="text-emerald-400 underline ml-1">Reset filters</button></div>`;
      return;
    }

    strip.innerHTML = list
      .map((m) => {
        const isSelected = m.id === state.selectedMatchId;
        const isPinned = !!state.pinnedMatches[m.id];
        const statusBadge =
          m.status === "LIVE"
            ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-red-500/20 text-red-400 border border-red-500/30"><span class="w-1.5 h-1.5 rounded-full bg-red-500 live-dot"></span>${m.minute}' LIVE</span>`
            : m.status === "FT"
            ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-700/60 text-slate-300">FT</span>`
            : `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300">${m.kickoff}</span>`;

        return `<div onclick="window.sbSelectMatch('${m.id}')" class="ticker-card cursor-pointer shrink-0 w-72 sm:w-80 rounded-xl p-3.5 sb-surface border ${
          isSelected ? "active-match" : ""
        }">
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <span class="text-[11px] font-semibold sb-text-muted truncate">${m.compName}</span>
            <div class="flex items-center gap-1.5 shrink-0">
              ${statusBadge}
              <button type="button" onclick="event.stopPropagation(); window.sbTogglePin('${m.id}')" title="Pin Match" class="text-xs px-1 hover:scale-110 transition ${
          isPinned ? "text-amber-400" : "text-slate-500"
        }">★</button>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5 min-w-0">
                ${renderTeamCrest(m.home, "w-7 h-7 text-[10px]")}
                <span class="font-bold text-sm truncate">${m.home.name}</span>
              </div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-[10px] sb-text-muted">xG ${m.home.xg.toFixed(2)}</span>
                <span class="text-lg font-extrabold">${m.status === "UPCOMING" ? "-" : m.home.score}</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5 min-w-0">
                ${renderTeamCrest(m.away, "w-7 h-7 text-[10px]")}
                <span class="font-bold text-sm truncate">${m.away.name}</span>
              </div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-[10px] sb-text-muted">xG ${m.away.xg.toFixed(2)}</span>
                <span class="text-lg font-extrabold">${m.status === "UPCOMING" ? "-" : m.away.score}</span>
              </div>
            </div>
          </div>

          <p class="mt-2.5 pt-2 border-t border-slate-700/40 text-[11px] text-emerald-400 truncate font-medium">${m.buzzLine}</p>

          <div class="mt-2 flex items-center justify-between text-[11px] sb-text-muted font-semibold">
            <span class="hover:text-emerald-400" onclick="event.stopPropagation(); window.sbQuickJump('${m.id}', 'commentary')">Commentary</span>
            <span>•</span>
            <span class="hover:text-emerald-400" onclick="event.stopPropagation(); window.sbQuickJump('${m.id}', 'scorecard')">Scorecard</span>
            <span>•</span>
            <span class="hover:text-emerald-400" onclick="event.stopPropagation(); window.sbQuickJump('${m.id}', 'pitch')">2D Pitch</span>
            <span>•</span>
            <span class="hover:text-emerald-400" onclick="event.stopPropagation(); window.sbQuickJump('${m.id}', 'stats')">xG Stats</span>
          </div>
        </div>`;
      })
      .join("");
  }

  // 3. Render Match Center Header & Sub-Tabs
  function renderMatchCenter() {
    const m = getSelectedMatch();
    const headerEl = document.getElementById("mc-hero-header");
    if (!headerEl) return;

    const statusPill =
      m.status === "LIVE"
        ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-red-500 text-white shadow-lg shadow-red-500/30"><span class="w-2 h-2 rounded-full bg-white live-dot"></span>${m.minute}' • ${m.period}</span>`
        : m.status === "FT"
        ? `<span class="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-700 text-white">FULL TIME • HT ${m.home.htScore}-${m.away.htScore}</span>`
        : `<span class="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-slate-950">${m.period}</span>`;

    headerEl.innerHTML = `
      <div class="relative rounded-2xl overflow-hidden border sb-surface shadow-xl">
        <div class="absolute inset-0 opacity-25 pointer-events-none">
          <img src="assets/stadium-hero.jpg" alt="Stadium backdrop" class="w-full h-full object-cover max-w-full" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/50"></div>
        </div>

        <div class="relative p-4 sm:p-6">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-1 rounded-md text-xs font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">${m.compName}</span>
              <span class="text-xs sb-text-muted">🏟️ ${m.venue}</span>
              <span class="text-xs sb-text-muted hidden md:inline">• 👥 ${m.attendance} • ⚖️ ${m.referee}</span>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" onclick="window.sbSimulateGoal()" class="px-3 py-1.5 rounded-lg text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-md flex items-center gap-1">
                <span>⚽</span><span>+ Simulate Live Goal</span>
              </button>
              <button type="button" onclick="window.sbSimulateVar()" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition">
                🖥️ Trigger VAR Check
              </button>
              <button type="button" onclick="window.sbCopyMatchShare()" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold sb-surface-2 border hover:border-emerald-400 transition">
                🔗 Share Score
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-6 py-5">
            <!-- Home Team -->
            <div class="flex items-center md:justify-start justify-between gap-4">
              ${renderTeamCrest(m.home, "w-14 h-14 sm:w-16 sm:h-16 text-lg")}
              <div>
                <div class="flex items-center gap-2">
                  <h2 class="text-xl sm:text-2xl font-black tracking-tight">${m.home.name}</h2>
                  <span class="text-xs px-2 py-0.5 rounded sb-surface-3 font-mono">${m.home.formation}</span>
                </div>
                <p class="text-xs sb-text-muted mt-0.5">Mgr: ${m.home.manager} • xG: <strong class="text-emerald-400">${m.home.xg.toFixed(2)}</strong></p>
                <div class="mt-1.5 flex flex-wrap gap-1">
                  ${m.home.scorers.map((s) => `<span class="text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-semibold">⚽ ${s}</span>`).join("")}
                </div>
              </div>
            </div>

            <!-- Scoreboard Center -->
            <div class="flex flex-col items-center justify-center text-center">
              ${statusPill}
              <div id="mc-score-box" class="my-2.5 flex items-center gap-4 text-4xl sm:text-5xl font-black tracking-tight">
                <span>${m.status === "UPCOMING" ? "-" : m.home.score}</span>
                <span class="text-emerald-400 text-2xl">:</span>
                <span>${m.status === "UPCOMING" ? "-" : m.away.score}</span>
              </div>
              <p class="text-xs text-emerald-300 font-medium max-w-md">${m.buzzLine}</p>
            </div>

            <!-- Away Team -->
            <div class="flex items-center md:justify-end justify-between gap-4 md:flex-row-reverse md:text-right">
              ${renderTeamCrest(m.away, "w-14 h-14 sm:w-16 sm:h-16 text-lg")}
              <div>
                <div class="flex items-center md:justify-end gap-2">
                  <span class="text-xs px-2 py-0.5 rounded sb-surface-3 font-mono">${m.away.formation}</span>
                  <h2 class="text-xl sm:text-2xl font-black tracking-tight">${m.away.name}</h2>
                </div>
                <p class="text-xs sb-text-muted mt-0.5">Mgr: ${m.away.manager} • xG: <strong class="text-emerald-400">${m.away.xg.toFixed(2)}</strong></p>
                <div class="mt-1.5 flex flex-wrap md:justify-end gap-1">
                  ${m.away.scorers.map((s) => `<span class="text-[11px] px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 font-semibold">⚽ ${s}</span>`).join("")}
                </div>
              </div>
            </div>
          </div>

          <!-- Cricbuzz-style Live Win Probability Bar -->
          <div class="pt-3 border-t border-white/10">
            <div class="flex items-center justify-between text-[11px] font-bold mb-1">
              <span>${m.home.code} Win Prob: ${m.winProb.home}%</span>
              <span class="sb-text-muted">Draw: ${m.winProb.draw}%</span>
              <span>${m.away.code} Win Prob: ${m.winProb.away}%</span>
            </div>
            <div class="w-full h-2 rounded-full overflow-hidden flex bg-slate-800">
              <div style="width:${m.winProb.home}%; background:${m.home.color}" class="h-full transition-all duration-500"></div>
              <div style="width:${m.winProb.draw}%" class="h-full bg-slate-500 transition-all duration-500"></div>
              <div style="width:${m.winProb.away}%; background:${m.away.color}" class="h-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    renderMatchSubTabs();
    renderMatchSubContent();
  }

  function renderMatchSubTabs() {
    const tabBar = document.getElementById("mc-subtabs");
    if (!tabBar) return;
    const tabs = [
      { id: "commentary", label: "🎙️ Live Commentary" },
      { id: "scorecard", label: "📋 Full Scorecard & Ratings" },
      { id: "pitch", label: "🏟️ 2D Tactical Pitch" },
      { id: "stats", label: "📊 Match Stats & xG Worm" },
      { id: "h2h", label: "⚔️ Head-to-Head (H2H)" }
    ];
    tabBar.innerHTML = tabs
      .map((t) => {
        const active = state.matchTab === t.id;
        return `<button type="button" onclick="window.sbSetMatchTab('${t.id}')" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
          active
            ? "bg-emerald-500 text-slate-950 shadow-md"
            : "sb-surface border hover:border-emerald-500/40"
        }">${t.label}</button>`;
      })
      .join("");
  }

  function renderMatchSubContent() {
    const m = getSelectedMatch();
    const container = document.getElementById("mc-tab-content");
    if (!container) return;

    if (state.matchTab === "commentary") {
      const filters = [
        { id: "all", label: "All Updates" },
        { id: "goal", label: "⚽ Goals" },
        { id: "chance", label: "🔥 Big Chances" },
        { id: "var", label: "🖥️ VAR & Key" },
        { id: "card", label: "🟨 Cards" },
        { id: "sub", label: "🔄 Subs" }
      ];
      const commList =
        state.commFilter === "all"
          ? m.commentary
          : m.commentary.filter((c) => c.type === state.commFilter);

      const votes = state.motmVotes[m.id] || { [m.home.name]: 50, [m.away.name]: 50 };
      const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0) || 1;

      container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 space-y-4">
            <div class="p-4 rounded-xl sb-surface border flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap gap-1.5">
                ${filters
                  .map(
                    (f) => `<button type="button" onclick="window.sbSetCommFilter('${f.id}')" class="px-3 py-1 rounded-lg text-xs font-bold transition ${
                      state.commFilter === f.id
                        ? "bg-emerald-500 text-slate-950"
                        : "sb-surface-2 hover:border-emerald-400 border"
                    }">${f.label}</button>`
                  )
                  .join("")}
              </div>
              <span class="text-xs sb-text-muted">${commList.length} entries</span>
            </div>

            <!-- Interactive Fan Pulse Input -->
            <form onsubmit="window.sbPostFanComment(event)" class="p-3.5 rounded-xl sb-surface border flex flex-col sm:flex-row gap-2">
              <input id="fan-comment-input" type="text" placeholder="Add your live tactical take or reaction to the commentary stream..." class="flex-1 px-3.5 py-2 rounded-lg text-xs sm:text-sm sb-surface-2 border focus:outline-none focus:border-emerald-400" />
              <button type="submit" class="px-4 py-2 rounded-lg text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shrink-0 transition">Post to Live Feed</button>
            </form>

            <!-- Minute by Minute Stream -->
            <div class="space-y-3">
              ${commList
                .map((item) => {
                  const badgeStyle =
                    item.type === "goal"
                      ? "bg-emerald-500 text-slate-950"
                      : item.type === "card"
                      ? "bg-amber-400 text-slate-950"
                      : item.type === "var"
                      ? "bg-purple-500 text-white"
                      : item.type === "chance"
                      ? "bg-rose-500 text-white"
                      : "bg-slate-700 text-slate-200";
                  return `<div class="p-4 rounded-xl sb-surface border flex gap-3.5 items-start hover:border-emerald-500/40 transition">
                    <div class="w-12 h-11 rounded-lg sb-surface-2 flex items-center justify-center font-mono font-black text-sm text-emerald-400 shrink-0 border">${item.min}</div>
                    <div class="flex-1 min-w-0">
                      <div class="flex flex-wrap items-center gap-2 mb-1">
                        <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase ${badgeStyle}">${item.tag}</span>
                        <h4 class="font-extrabold text-sm">${item.title}</h4>
                      </div>
                      <p class="text-xs sm:text-sm sb-text-muted leading-relaxed">${item.text}</p>
                    </div>
                  </div>`;
                })
                .join("")}
            </div>
          </div>

          <!-- Right Sidebar: Key Match Pulse & Man of the Match Poll -->
          <div class="space-y-4">
            <div class="p-4 rounded-xl sb-surface border">
              <h3 class="text-sm font-extrabold uppercase tracking-wider text-emerald-400 mb-3">🏆 Live Man of the Match Poll</h3>
              <p class="text-xs sb-text-muted mb-3">Tap a player below to cast your live fan vote:</p>
              <div class="space-y-2.5">
                ${Object.entries(votes)
                  .map(([pName, count]) => {
                    const pct = Math.round((count / totalVotes) * 100);
                    const voted = state.userVotedMotm[m.id] === pName;
                    return `<button type="button" onclick="window.sbVoteMotm('${pName.replace(/'/g, "\\'")}')" class="w-full text-left p-2.5 rounded-lg sb-surface-2 border ${
                      voted ? "border-emerald-400" : ""
                    } hover:border-emerald-400 transition">
                      <div class="flex justify-between text-xs font-bold mb-1">
                        <span>${pName} ${voted ? "✓" : ""}</span>
                        <span class="text-emerald-400">${pct}% (${count})</span>
                      </div>
                      <div class="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div class="h-full bg-emerald-500" style="width:${pct}%"></div>
                      </div>
                    </button>`;
                  })
                  .join("")}
              </div>
            </div>

            <div class="p-4 rounded-xl sb-surface border">
              <h3 class="text-sm font-extrabold uppercase tracking-wider text-emerald-400 mb-3">⚡ Cricbuzz-Style Key Match Facts</h3>
              <ul class="space-y-2 text-xs sb-text-muted">
                <li class="flex justify-between py-1 border-b border-slate-700/40"><span>Expected Goals (xG)</span><strong class="text-white">${m.home.xg.toFixed(2)} vs ${m.away.xg.toFixed(2)}</strong></li>
                <li class="flex justify-between py-1 border-b border-slate-700/40"><span>PPDA (Pressing Intensity)</span><strong class="text-white">${m.stats.ppda[0]} vs ${m.stats.ppda[1]}</strong></li>
                <li class="flex justify-between py-1 border-b border-slate-700/40"><span>Big Chances Created</span><strong class="text-white">${m.stats.bigChances[0]} vs ${m.stats.bigChances[1]}</strong></li>
                <li class="flex justify-between py-1 border-b border-slate-700/40"><span>Pass Completion</span><strong class="text-white">${m.stats.passAccuracy[0]}% vs ${m.stats.passAccuracy[1]}%</strong></li>
                <li class="flex justify-between py-1"><span>Weather / Turf</span><strong class="text-white">${m.weather}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      `;
    } else if (state.matchTab === "scorecard") {
      const renderTeamTable = (teamObj, players, sideKey) => `
        <div class="rounded-xl sb-surface border overflow-hidden">
          <div class="p-4 sb-surface-2 border-b flex items-center justify-between">
            <div class="flex items-center gap-3">
              ${renderTeamCrest(teamObj, "w-8 h-8 text-xs")}
              <div>
                <h3 class="font-extrabold text-sm sm:text-base">${teamObj.name} — Starting XI (${teamObj.formation})</h3>
                <p class="text-xs sb-text-muted">Manager: ${teamObj.manager} • Team xG: ${teamObj.xg.toFixed(2)}</p>
              </div>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">Click any player for Scout Card</span>
          </div>
          <div class="table-scroll">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="sb-surface-3 text-[11px] uppercase sb-text-muted">
                  <th class="py-2.5 px-3">#</th>
                  <th class="py-2.5 px-3">Player</th>
                  <th class="py-2.5 px-3">Pos</th>
                  <th class="py-2.5 px-3 text-right">G</th>
                  <th class="py-2.5 px-3 text-right">A</th>
                  <th class="py-2.5 px-3 text-right">Shots</th>
                  <th class="py-2.5 px-3 text-right">xG</th>
                  <th class="py-2.5 px-3 text-right">Passes</th>
                  <th class="py-2.5 px-3 text-right">Tkl</th>
                  <th class="py-2.5 px-3 text-right">Rating</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-700/40">
                ${players
                  .map(
                    (p, idx) => `<tr onclick="window.sbOpenPlayerModal('${sideKey}', ${idx})" class="hover:bg-emerald-500/10 cursor-pointer transition">
                      <td class="py-2.5 px-3 font-mono sb-text-muted">${p.num}</td>
                      <td class="py-2.5 px-3 font-bold">
                        ${p.name}
                        ${p.goals > 0 ? `<span class="ml-1 text-emerald-400">${"⚽".repeat(p.goals)}</span>` : ""}
                        ${p.card === "yellow" ? `<span class="ml-1">🟨</span>` : ""}
                        ${p.subOut ? `<span class="ml-1 text-[10px] text-amber-400">🔄 ${p.subOut}</span>` : ""}
                      </td>
                      <td class="py-2.5 px-3"><span class="px-1.5 py-0.5 rounded text-[10px] font-bold sb-surface-2 border">${p.pos}</span></td>
                      <td class="py-2.5 px-3 text-right font-bold">${p.goals}</td>
                      <td class="py-2.5 px-3 text-right">${p.assists}</td>
                      <td class="py-2.5 px-3 text-right">${p.shots}</td>
                      <td class="py-2.5 px-3 text-right font-mono">${p.xg.toFixed(2)}</td>
                      <td class="py-2.5 px-3 text-right font-mono text-xs">${p.passes}</td>
                      <td class="py-2.5 px-3 text-right">${p.tackles}</td>
                      <td class="py-2.5 px-3 text-right">
                        <span class="px-2 py-0.5 rounded font-extrabold text-xs ${
                          p.rating >= 8.5
                            ? "bg-emerald-500 text-slate-950"
                            : p.rating >= 7.5
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-slate-700 text-slate-200"
                        }">${p.rating.toFixed(1)} ★</span>
                      </td>
                    </tr>`
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
      container.innerHTML = `<div class="space-y-6">${renderTeamTable(m.home, m.lineups.home, "home")}${renderTeamTable(m.away, m.lineups.away, "away")}</div>`;
    } else if (state.matchTab === "pitch") {
      renderPitchTab(container, m);
    } else if (state.matchTab === "stats") {
      renderStatsTab(container, m);
    } else if (state.matchTab === "h2h") {
      renderH2HTab(container, m);
    }
  }

  // 4. Render 2D Interactive Tactical Pitch
  function renderPitchTab(container, m) {
    const homePlayers = state.pitchTeamMode === "away" ? [] : m.lineups.home;
    const awayPlayers = state.pitchTeamMode === "home" ? [] : m.lineups.away;

    let overlayMarkup = "";
    if (state.pitchOverlay === "passnet") {
      const makeLinks = (list, color) => {
        let lines = "";
        for (let i = 0; i < list.length - 1; i++) {
          const a = list[i];
          const b = list[(i + 2) % list.length];
          lines += `<line x1="${a.x * 10}" y1="${a.y * 6}" x2="${b.x * 10}" y2="${b.y * 6}" stroke="${color}" stroke-width="2.2" stroke-opacity="0.48" stroke-dasharray="4 3" />`;
        }
        return lines;
      };
      overlayMarkup = makeLinks(homePlayers, "#38bdf8") + makeLinks(awayPlayers, "#facc15");
    } else if (state.pitchOverlay === "shotmap") {
      overlayMarkup = `
        <circle cx="885" cy="280" r="16" fill="#00d09c" fill-opacity="0.55" stroke="#ffffff" stroke-width="2"><title>Goal xG: 0.61</title></circle>
        <circle cx="850" cy="340" r="14" fill="#00d09c" fill-opacity="0.55" stroke="#ffffff" stroke-width="2"><title>Goal xG: 0.52</title></circle>
        <circle cx="810" cy="210" r="9" fill="#38bdf8" fill-opacity="0.45" stroke="#ffffff" stroke-width="1.5"></circle>
        <circle cx="135" cy="250" r="13" fill="#f59e0b" fill-opacity="0.6" stroke="#ffffff" stroke-width="2"><title>Away Goal xG: 0.31</title></circle>
        <circle cx="165" cy="330" r="10" fill="#ef4444" fill-opacity="0.45" stroke="#ffffff" stroke-width="1.5"></circle>
      `;
    } else if (state.pitchOverlay === "heatmap") {
      overlayMarkup = `
        <ellipse cx="420" cy="300" rx="140" ry="180" fill="#00d09c" fill-opacity="0.22" />
        <ellipse cx="640" cy="260" rx="130" ry="160" fill="#f59e0b" fill-opacity="0.22" />
        <ellipse cx="780" cy="310" rx="95" ry="130" fill="#ef4444" fill-opacity="0.24" />
      `;
    }

    const renderNode = (p, team, sideKey, idx) => {
      const cx = p.x * 10;
      const cy = p.y * 6;
      return `
        <g class="pitch-node" onclick="window.sbOpenPlayerModal('${sideKey}', ${idx})">
          <circle cx="${cx}" cy="${cy}" r="18" fill="${team.color}" stroke="${team.accent}" stroke-width="3" />
          <text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">${p.num}</text>
          <rect x="${cx - 42}" y="${cy + 21}" width="84" height="17" rx="4" fill="#09131c" fill-opacity="0.88" />
          <text x="${cx}" y="${cy + 33}" text-anchor="middle" fill="#f8fafc" font-size="10" font-weight="700">${p.name}</text>
          <rect x="${cx + 12}" y="${cy - 22}" width="26" height="13" rx="3" fill="#00d09c" />
          <text x="${cx + 25}" y="${cy - 13}" text-anchor="middle" fill="#022c22" font-size="9" font-weight="900">${p.rating.toFixed(1)}</text>
        </g>
      `;
    };

    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-4 rounded-xl sb-surface border flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-bold sb-text-muted uppercase">Team View:</span>
            ${[
              { id: "both", label: "Both XIs" },
              { id: "home", label: `${m.home.name} (${m.home.formation})` },
              { id: "away", label: `${m.away.name} (${m.away.formation})` }
            ]
              .map(
                (b) => `<button type="button" onclick="window.sbSetPitchTeam('${b.id}')" class="px-3 py-1 rounded-lg text-xs font-bold ${
                  state.pitchTeamMode === b.id ? "bg-emerald-500 text-slate-950" : "sb-surface-2 border"
                }">${b.label}</button>`
              )
              .join("")}
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-bold sb-text-muted uppercase">Tactical Layer:</span>
            ${[
              { id: "formation", label: "📍 Formations" },
              { id: "passnet", label: "🕸️ Pass Network" },
              { id: "shotmap", label: "🎯 xG Shot Map" },
              { id: "heatmap", label: "🔥 Territorial Heatmap" }
            ]
              .map(
                (o) => `<button type="button" onclick="window.sbSetPitchOverlay('${o.id}')" class="px-3 py-1 rounded-lg text-xs font-bold ${
                  state.pitchOverlay === o.id ? "bg-amber-400 text-slate-950" : "sb-surface-2 border"
                }">${o.label}</button>`
              )
              .join("")}
          </div>
        </div>

        <div class="pitch-wrapper shadow-2xl">
          <svg viewBox="0 0 1000 600" class="w-full h-auto block">
            <!-- Turf Stripes -->
            ${Array.from({ length: 10 })
              .map(
                (_, i) =>
                  `<rect x="${i * 100}" y="0" width="100" height="600" fill="${
                    i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.06)"
                  }" />`
              )
              .join("")}
            <!-- Pitch Markings -->
            <rect x="25" y="25" width="950" height="550" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="3" />
            <line x1="500" y1="25" x2="500" y2="575" stroke="rgba(255,255,255,0.55)" stroke-width="3" />
            <circle cx="500" cy="300" r="75" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="3" />
            <circle cx="500" cy="300" r="4" fill="#ffffff" />
            <!-- Left Penalty Box -->
            <rect x="25" y="135" width="145" height="330" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="3" />
            <rect x="25" y="215" width="55" height="170" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="3" />
            <!-- Right Penalty Box -->
            <rect x="830" y="135" width="145" height="330" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="3" />
            <rect x="920" y="215" width="55" height="170" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="3" />

            ${overlayMarkup}
            ${homePlayers.map((p, idx) => renderNode(p, m.home, "home", idx)).join("")}
            ${awayPlayers.map((p, idx) => renderNode(p, m.away, "away", idx)).join("")}
          </svg>
        </div>
        <p class="text-xs sb-text-muted text-center">💡 Tip: Tap any player jersey on the 2D pitch to inspect their live match metrics, heatmap role, and scouting bio.</p>
      </div>
    `;
  }

  // 5. Render Match Stats & Chart.js xG / Momentum Worm
  function renderStatsTab(container, m) {
    const rows = [
      { label: "Ball Possession (%)", vals: m.stats.possession, suffix: "%" },
      { label: "Expected Goals (xG)", vals: [m.home.xg, m.away.xg], decimals: 2 },
      { label: "Total Shots", vals: m.stats.shots },
      { label: "Shots on Target", vals: m.stats.shotsOnTarget },
      { label: "Big Chances", vals: m.stats.bigChances },
      { label: "Corner Kicks", vals: m.stats.corners },
      { label: "Total Passes", vals: m.stats.passes },
      { label: "Pass Accuracy (%)", vals: m.stats.passAccuracy, suffix: "%" },
      { label: "PPDA (Pressing Intensity)", vals: m.stats.ppda, decimals: 1 },
      { label: "Tackles Won", vals: m.stats.tackles },
      { label: "Goalkeeper Saves", vals: m.stats.saves },
      { label: "Fouls Committed", vals: m.stats.fouls }
    ];

    container.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="p-5 rounded-xl sb-surface border space-y-3.5">
          <div class="flex items-center justify-between pb-2 border-b border-slate-700/40">
            <span class="font-extrabold text-sm">${m.home.name}</span>
            <span class="text-xs font-extrabold uppercase text-emerald-400">Head-to-Head Metrics</span>
            <span class="font-extrabold text-sm">${m.away.name}</span>
          </div>
          ${rows
            .map((r) => {
              const v1 = Number(r.vals[0]);
              const v2 = Number(r.vals[1]);
              const sum = v1 + v2 || 1;
              const p1 = Math.round((v1 / sum) * 100);
              const p2 = 100 - p1;
              const d1 = r.decimals ? v1.toFixed(r.decimals) : v1;
              const d2 = r.decimals ? v2.toFixed(r.decimals) : v2;
              return `<div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span>${d1}${r.suffix || ""}</span>
                  <span class="sb-text-muted">${r.label}</span>
                  <span>${d2}${r.suffix || ""}</span>
                </div>
                <div class="w-full h-2 rounded-full overflow-hidden flex bg-slate-800 gap-0.5">
                  <div class="h-full" style="width:${p1}%; background:${m.home.color}"></div>
                  <div class="h-full" style="width:${p2}%; background:${m.away.color}"></div>
                </div>
              </div>`;
            })
            .join("")}
        </div>

        <div class="space-y-6">
          <div class="p-5 rounded-xl sb-surface border">
            <h3 class="text-sm font-extrabold uppercase tracking-wider text-emerald-400 mb-1">📈 Cumulative Expected Goals (xG Worm)</h3>
            <p class="text-xs sb-text-muted mb-3">Soccerbuzz's equivalent of Cricbuzz's Worm Graph — tracking shot quality progression:</p>
            <div class="relative h-64">
              <canvas id="xg-worm-canvas"></canvas>
            </div>
          </div>

          <div class="p-5 rounded-xl sb-surface border">
            <h3 class="text-sm font-extrabold uppercase tracking-wider text-emerald-400 mb-1">🌊 Attack Momentum & Territorial Wave</h3>
            <p class="text-xs sb-text-muted mb-3">Positive bars = ${m.home.code} pressure • Negative bars = ${m.away.code} pressure:</p>
            <div class="relative h-56">
              <canvas id="momentum-wave-canvas"></canvas>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => initMatchCharts(m), 30);
  }

  function initMatchCharts(m) {
    if (typeof window.Chart === "undefined") return;
    const xgCanvas = document.getElementById("xg-worm-canvas");
    if (xgCanvas) {
      if (xgChartInstance) xgChartInstance.destroy();
      xgChartInstance = new window.Chart(xgCanvas, {
        type: "line",
        data: {
          labels: m.xgTimeline.labels,
          datasets: [
            {
              label: `${m.home.name} xG`,
              data: m.xgTimeline.home,
              borderColor: "#00d09c",
              backgroundColor: "rgba(0, 208, 156, 0.15)",
              borderWidth: 3,
              stepped: true,
              fill: true
            },
            {
              label: `${m.away.name} xG`,
              data: m.xgTimeline.away,
              borderColor: "#f59e0b",
              backgroundColor: "rgba(245, 158, 11, 0.12)",
              borderWidth: 3,
              stepped: true,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: "#cbd5e1" } } },
          scales: {
            x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.1)" } },
            y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.1)" } }
          }
        }
      });
    }

    const momCanvas = document.getElementById("momentum-wave-canvas");
    if (momCanvas) {
      if (momentumChartInstance) momentumChartInstance.destroy();
      momentumChartInstance = new window.Chart(momCanvas, {
        type: "bar",
        data: {
          labels: m.momentum.map((_, i) => `${(i + 1) * 5}'`),
          datasets: [
            {
              label: "Pressure Index",
              data: m.momentum,
              backgroundColor: m.momentum.map((v) => (v >= 0 ? "#00d09c" : "#3b82f6")),
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: "#94a3b8" }, grid: { display: false } },
            y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.1)" } }
          }
        }
      });
    }
  }

  // 6. Render H2H Tab
  function renderH2HTab(container, m) {
    const h = m.h2h;
    const total = h.totalPlayed || 1;
    const pHome = Math.round((h.homeWins / total) * 100);
    const pDraw = Math.round((h.draws / total) * 100);
    const pAway = 100 - pHome - pDraw;

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-5 rounded-xl sb-surface border space-y-4">
          <h3 class="text-sm font-extrabold uppercase tracking-wider text-emerald-400">⚔️ Historical Head-to-Head (${h.totalPlayed} Official Clashes)</h3>
          <div class="grid grid-cols-3 text-center gap-3">
            <div class="p-3 rounded-lg sb-surface-2 border">
              <div class="text-2xl font-black text-emerald-400">${h.homeWins}</div>
              <div class="text-xs sb-text-muted">${m.home.name} Wins</div>
            </div>
            <div class="p-3 rounded-lg sb-surface-2 border">
              <div class="text-2xl font-black text-amber-400">${h.draws}</div>
              <div class="text-xs sb-text-muted">Draws</div>
            </div>
            <div class="p-3 rounded-lg sb-surface-2 border">
              <div class="text-2xl font-black text-blue-400">${h.awayWins}</div>
              <div class="text-xs sb-text-muted">${m.away.name} Wins</div>
            </div>
          </div>
          <div class="w-full h-3 rounded-full overflow-hidden flex">
            <div style="width:${pHome}%" class="bg-emerald-500"></div>
            <div style="width:${pDraw}%" class="bg-amber-400"></div>
            <div style="width:${pAway}%" class="bg-blue-500"></div>
          </div>
        </div>

        <div class="p-5 rounded-xl sb-surface border space-y-3">
          <h3 class="text-sm font-extrabold uppercase tracking-wider text-emerald-400">🕓 Recent Meetings</h3>
          ${h.recent
            .map(
              (r) => `<div class="p-3 rounded-lg sb-surface-2 border flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span class="font-bold">${r.score}</span>
                  <span class="block text-[11px] sb-text-muted">${r.comp}</span>
                </div>
                <span class="px-2 py-0.5 rounded sb-surface-3 text-xs font-mono">${r.date}</span>
              </div>`
            )
            .join("")}
        </div>
      </div>
    `;
  }

  // 7. Render Fixtures View
  function renderFixturesView() {
    const el = document.getElementById("fixtures-list-container");
    if (!el) return;
    let list = DATA.matches;
    if (state.fixturesComp !== "ALL") list = list.filter((m) => m.compId === state.fixturesComp);
    if (state.fixturesStatus !== "ALL") list = list.filter((m) => m.status === state.fixturesStatus);
    if (state.fixturesPinnedOnly) list = list.filter((m) => !!state.pinnedMatches[m.id]);

    if (list.length === 0) {
      el.innerHTML = `<div class="p-8 text-center rounded-xl sb-surface border sb-text-muted">No fixtures match your selected filter.</div>`;
      return;
    }

    el.innerHTML = list
      .map(
        (m) => `<div class="p-4 rounded-xl sb-surface border hover:border-emerald-400 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-xs sb-text-muted">
              <span class="font-bold text-emerald-400">${m.compName}</span>
              <span>•</span>
              <span>${m.dateLabel} (${m.kickoff})</span>
              <span>•</span>
              <span>${m.venue}</span>
            </div>
            <div class="flex items-center gap-4 pt-1">
              <div class="flex items-center gap-2">
                ${renderTeamCrest(m.home, "w-7 h-7 text-[10px]")}
                <span class="font-extrabold text-sm sm:text-base">${m.home.name}</span>
              </div>
              <span class="px-3 py-1 rounded-lg sb-surface-2 font-black text-sm border">${
                m.status === "UPCOMING" ? "VS" : `${m.home.score} - ${m.away.score}`
              }</span>
              <div class="flex items-center gap-2">
                ${renderTeamCrest(m.away, "w-7 h-7 text-[10px]")}
                <span class="font-extrabold text-sm sm:text-base">${m.away.name}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2 self-end sm:self-center">
            <button type="button" onclick="window.sbTogglePin('${m.id}')" class="px-3 py-1.5 rounded-lg text-xs font-bold sb-surface-2 border ${
          state.pinnedMatches[m.id] ? "text-amber-400 border-amber-400/40" : "sb-text-muted"
        }">★ ${state.pinnedMatches[m.id] ? "Pinned" : "Pin"}</button>
            <button type="button" onclick="window.sbSelectMatch('${m.id}')" class="px-3.5 py-1.5 rounded-lg text-xs font-extrabold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition">Open Match Center →</button>
          </div>
        </div>`
      )
      .join("");
  }

  // 8. Render Standings & Knockout Bracket View
  function renderStandingsView() {
    const tableWrap = document.getElementById("standings-table-container");
    const bracketWrap = document.getElementById("knockout-bracket-container");
    if (!tableWrap || !bracketWrap) return;

    const league = DATA.standings[state.standingsLeague] || DATA.standings.LALIGA;
    tableWrap.innerHTML = `
      <div class="rounded-xl sb-surface border overflow-hidden">
        <div class="p-4 sb-surface-2 border-b flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="font-extrabold text-base">${league.name}</h3>
            <p class="text-xs sb-text-muted">${league.zoneNote}</p>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${Object.keys(DATA.standings)
              .map(
                (k) => `<button type="button" onclick="window.sbSetStandingsLeague('${k}')" class="px-3 py-1 rounded-lg text-xs font-bold ${
                  state.standingsLeague === k ? "bg-emerald-500 text-slate-950" : "sb-surface-3"
                }">${k}</button>`
              )
              .join("")}
          </div>
        </div>
        <div class="table-scroll">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="sb-surface-3 text-[11px] uppercase sb-text-muted">
                <th class="py-2.5 px-3">#</th>
                <th class="py-2.5 px-3">Club</th>
                <th class="py-2.5 px-3 text-right">P</th>
                <th class="py-2.5 px-3 text-right">W</th>
                <th class="py-2.5 px-3 text-right">D</th>
                <th class="py-2.5 px-3 text-right">L</th>
                <th class="py-2.5 px-3 text-right">GF:GA</th>
                <th class="py-2.5 px-3 text-right">GD</th>
                <th class="py-2.5 px-3 text-right">xGD</th>
                <th class="py-2.5 px-3 text-right">Pts</th>
                <th class="py-2.5 px-3">Form</th>
                <th class="py-2.5 px-3">Next</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-700/40">
              ${league.rows
                .map((r) => {
                  const zoneBar =
                    r.zone === "ucl"
                      ? "border-l-4 border-l-emerald-400"
                      : r.zone === "uel"
                      ? "border-l-4 border-l-blue-400"
                      : r.zone === "uecl"
                      ? "border-l-4 border-l-amber-400"
                      : "";
                  return `<tr class="hover:bg-emerald-500/5 ${zoneBar}">
                    <td class="py-2.5 px-3 font-bold">${r.pos}</td>
                    <td class="py-2.5 px-3 font-extrabold">${r.team}</td>
                    <td class="py-2.5 px-3 text-right">${r.p}</td>
                    <td class="py-2.5 px-3 text-right">${r.w}</td>
                    <td class="py-2.5 px-3 text-right">${r.d}</td>
                    <td class="py-2.5 px-3 text-right">${r.l}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${r.gf}:${r.ga}</td>
                    <td class="py-2.5 px-3 text-right font-bold">${r.gd}</td>
                    <td class="py-2.5 px-3 text-right font-mono text-emerald-400">${r.xgd}</td>
                    <td class="py-2.5 px-3 text-right font-black text-base">${r.pts}</td>
                    <td class="py-2.5 px-3">
                      <div class="flex gap-1">
                        ${r.form
                          .map(
                            (f) =>
                              `<span class="w-5 h-5 rounded text-[10px] font-black flex items-center justify-center ${
                                f === "W"
                                  ? "bg-emerald-500 text-slate-950"
                                  : f === "D"
                                  ? "bg-amber-400 text-slate-950"
                                  : "bg-rose-500 text-white"
                              }">${f}</span>`
                          )
                          .join("")}
                      </div>
                    </td>
                    <td class="py-2.5 px-3 text-xs sb-text-muted font-mono">${r.next}</td>
                  </tr>`;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    const b = state.bracketSelections;
    bracketWrap.innerHTML = `
      <div class="p-5 rounded-xl sb-surface border space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="text-base font-extrabold text-emerald-400">🏆 Interactive World Cup & Euro Knockout Bracket Predictor</h3>
            <p class="text-xs sb-text-muted">Click any team in the Semi-Finals or Final to simulate your tournament champion:</p>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950">Predicted Champion: ${b.champion}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="space-y-2">
            <div class="text-xs font-bold uppercase sb-text-muted">Semi-Finalists (Tap to Advance)</div>
            <div class="p-3 rounded-lg sb-surface-2 border space-y-1.5">
              <button type="button" onclick="window.sbPickBracket('final1', '${b.sf1}')" class="w-full text-left px-3 py-1.5 rounded text-xs font-bold ${
                b.final1 === b.sf1 ? "bg-emerald-500 text-slate-950" : "sb-surface-3"
              }">${b.sf1}</button>
              <button type="button" onclick="window.sbPickBracket('final1', '${b.sf2}')" class="w-full text-left px-3 py-1.5 rounded text-xs font-bold ${
                b.final1 === b.sf2 ? "bg-emerald-500 text-slate-950" : "sb-surface-3"
              }">${b.sf2}</button>
            </div>
            <div class="p-3 rounded-lg sb-surface-2 border space-y-1.5">
              <button type="button" onclick="window.sbPickBracket('final2', '${b.sf3}')" class="w-full text-left px-3 py-1.5 rounded text-xs font-bold ${
                b.final2 === b.sf3 ? "bg-emerald-500 text-slate-950" : "sb-surface-3"
              }">${b.sf3}</button>
              <button type="button" onclick="window.sbPickBracket('final2', '${b.sf4}')" class="w-full text-left px-3 py-1.5 rounded text-xs font-bold ${
                b.final2 === b.sf4 ? "bg-emerald-500 text-slate-950" : "sb-surface-3"
              }">${b.sf4}</button>
            </div>
          </div>

          <div class="space-y-2 flex flex-col justify-center">
            <div class="text-xs font-bold uppercase sb-text-muted">Grand Final (Tap Winner)</div>
            <div class="p-4 rounded-lg sb-surface-2 border space-y-2">
              <button type="button" onclick="window.sbPickBracket('champion', '${b.final1}')" class="w-full text-left px-3 py-2 rounded text-sm font-extrabold ${
                b.champion === b.final1 ? "bg-amber-400 text-slate-950" : "sb-surface-3"
              }">${b.final1}</button>
              <div class="text-center text-[10px] sb-text-muted font-bold">VS</div>
              <button type="button" onclick="window.sbPickBracket('champion', '${b.final2}')" class="w-full text-left px-3 py-2 rounded text-sm font-extrabold ${
                b.champion === b.final2 ? "bg-amber-400 text-slate-950" : "sb-surface-3"
              }">${b.final2}</button>
            </div>
          </div>

          <div class="p-5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border border-amber-400/40 flex flex-col items-center justify-center text-center">
            <div class="text-4xl mb-2">🏆</div>
            <div class="text-xs uppercase font-bold text-amber-300">Your Crowned Winner</div>
            <div class="text-2xl font-black mt-1">${b.champion}</div>
          </div>
        </div>
      </div>
    `;
  }

  // 9. Render Stats Corner & Player Comparator
  function renderStatsCornerView() {
    const lbEl = document.getElementById("stats-leaderboard-container");
    const cmpEl = document.getElementById("player-comparator-container");
    if (!lbEl || !cmpEl) return;

    lbEl.innerHTML = `
      <div class="rounded-xl sb-surface border overflow-hidden">
        <div class="p-4 sb-surface-2 border-b">
          <h3 class="font-extrabold text-base">👟 Golden Boot & Playmaker Radar Across Leagues</h3>
          <p class="text-xs sb-text-muted">Goals, Assists, Expected Goals (xG), Expected Assists (xA), and Soccerbuzz Impact Rating:</p>
        </div>
        <div class="table-scroll">
          <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr class="sb-surface-3 text-[11px] uppercase sb-text-muted">
                <th class="py-2.5 px-3">Player</th>
                <th class="py-2.5 px-3">Club / League</th>
                <th class="py-2.5 px-3 text-right">Goals</th>
                <th class="py-2.5 px-3 text-right">Assists</th>
                <th class="py-2.5 px-3 text-right">xG</th>
                <th class="py-2.5 px-3 text-right">xA</th>
                <th class="py-2.5 px-3 text-right">Mins/G</th>
                <th class="py-2.5 px-3 text-right">Key Passes</th>
                <th class="py-2.5 px-3 text-right">Rating</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-700/40">
              ${DATA.playerStats
                .map(
                  (p) => `<tr class="hover:bg-emerald-500/5">
                    <td class="py-2.5 px-3 font-extrabold">${p.name}</td>
                    <td class="py-2.5 px-3 text-xs sb-text-muted">${p.club} (${p.comp})</td>
                    <td class="py-2.5 px-3 text-right font-black text-emerald-400">${p.goals}</td>
                    <td class="py-2.5 px-3 text-right font-bold">${p.assists}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${p.xg.toFixed(1)}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${p.xa.toFixed(1)}</td>
                    <td class="py-2.5 px-3 text-right font-mono">${p.minsPerGoal}'</td>
                    <td class="py-2.5 px-3 text-right">${p.keyPasses}</td>
                    <td class="py-2.5 px-3 text-right"><span class="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-xs">${p.rating.toFixed(2)}</span></td>
                  </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    const pA = DATA.playerStats.find((p) => p.id === state.comparePlayerA) || DATA.playerStats[0];
    const pB = DATA.playerStats.find((p) => p.id === state.comparePlayerB) || DATA.playerStats[3];

    cmpEl.innerHTML = `
      <div class="p-5 rounded-xl sb-surface border space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 class="font-extrabold text-base text-emerald-400">⚡ Head-to-Head Star Player Comparator</h3>
            <p class="text-xs sb-text-muted">Compare any two world football stars across 6 core performance dimensions:</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <select onchange="window.sbSetComparePlayer('A', this.value)" class="px-3 py-1.5 rounded-lg text-xs font-bold sb-surface-2 border">
              ${DATA.playerStats.map((p) => `<option value="${p.id}" ${p.id === pA.id ? "selected" : ""}>${p.name} (${p.club})</option>`).join("")}
            </select>
            <span class="text-xs font-black text-amber-400">VS</span>
            <select onchange="window.sbSetComparePlayer('B', this.value)" class="px-3 py-1.5 rounded-lg text-xs font-bold sb-surface-2 border">
              ${DATA.playerStats.map((p) => `<option value="${p.id}" ${p.id === pB.id ? "selected" : ""}>${p.name} (${p.club})</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="relative h-72">
          <canvas id="player-compare-canvas"></canvas>
        </div>
      </div>
    `;

    setTimeout(() => {
      if (typeof window.Chart === "undefined") return;
      const c = document.getElementById("player-compare-canvas");
      if (!c) return;
      if (compareChartInstance) compareChartInstance.destroy();
      compareChartInstance = new window.Chart(c, {
        type: "bar",
        data: {
          labels: ["Goals", "Assists", "Expected Goals (xG)", "Expected Assists (xA)", "Key Passes", "Successful Dribbles"],
          datasets: [
            {
              label: pA.name,
              data: [pA.goals, pA.assists, pA.xg, pA.xa, pA.keyPasses, pA.dribbles],
              backgroundColor: "#00d09c",
              borderRadius: 5
            },
            {
              label: pB.name,
              data: [pB.goals, pB.assists, pB.xg, pB.xa, pB.keyPasses, pB.dribbles],
              backgroundColor: "#3b82f6",
              borderRadius: 5
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: "#cbd5e1" } } },
          scales: {
            x: { ticks: { color: "#94a3b8" }, grid: { display: false } },
            y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148,163,184,0.1)" } }
          }
        }
      });
    }, 30);
  }

  // 10. Render Transfer Buzz & Editorial Newsroom
  function renderTransfersAndNewsView() {
    const trEl = document.getElementById("transfers-container");
    const newsEl = document.getElementById("news-articles-container");
    if (!trEl || !newsEl) return;

    const list =
      state.transferFilter === "ALL"
        ? DATA.transfers
        : DATA.transfers.filter((t) => t.status === state.transferFilter);

    trEl.innerHTML = `
      <div class="rounded-xl sb-surface border p-5 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="font-extrabold text-base text-emerald-400">🚨 Transfer Radar & Deal Tracker</h3>
            <p class="text-xs sb-text-muted">Verified club moves, contract extensions, and high-tier market intelligence:</p>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${["ALL", "CONFIRMED", "ADVANCED TALKS", "RUMOUR MILL"]
              .map(
                (st) => `<button type="button" onclick="window.sbSetTransferFilter('${st}')" class="px-3 py-1 rounded-lg text-xs font-bold ${
                  state.transferFilter === st ? "bg-emerald-500 text-slate-950" : "sb-surface-2 border"
                }">${st}</button>`
              )
              .join("")}
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          ${list
            .map(
              (t) => `<div class="p-4 rounded-xl sb-surface-2 border space-y-2">
                <div class="flex items-center justify-between">
                  <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                    t.status === "CONFIRMED"
                      ? "bg-emerald-500 text-slate-950"
                      : t.status === "ADVANCED TALKS"
                      ? "bg-amber-400 text-slate-950"
                      : "bg-purple-500 text-white"
                  }">${t.status}</span>
                  <span class="text-xs font-mono sb-text-muted">${t.tier} • Impact ${t.impact}</span>
                </div>
                <h4 class="font-extrabold text-base">${t.player}</h4>
                <div class="text-xs font-bold text-emerald-400">${t.from} ➔ ${t.to} • <span class="text-white">${t.fee}</span></div>
                <p class="text-xs sb-text-muted">${t.summary}</p>
              </div>`
            )
            .join("")}
        </div>
      </div>
    `;

    newsEl.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        ${DATA.articles
          .map(
            (a) => `<div class="rounded-xl sb-surface border overflow-hidden flex flex-col justify-between">
              <div>
                <img src="${a.image}" alt="${a.title}" class="w-full h-44 object-cover max-w-full" />
                <div class="p-4 space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-bold text-emerald-400">
                    <span>${a.category}</span>
                    <span class="sb-text-muted">${a.readTime}</span>
                  </div>
                  <h4 class="font-extrabold text-base leading-snug">${a.title}</h4>
                  <p class="text-xs sb-text-muted leading-relaxed">${a.summary}</p>
                </div>
              </div>
              <div class="p-4 pt-0">
                <button type="button" onclick="window.sbOpenArticleModal('${a.id}')" class="w-full py-2 rounded-lg text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition">Read Full Breakdown →</button>
              </div>
            </div>`
          )
          .join("")}
      </div>
    `;
  }

  // 11. Render Crickbuzz-to-Soccerbuzz Reasoning Glossary View
  function renderGlossaryView() {
    const el = document.getElementById("glossary-container");
    if (!el) return;
    el.innerHTML = `
      <div class="p-5 rounded-xl sb-surface border space-y-4">
        <div>
          <span class="px-2.5 py-1 rounded text-xs font-black uppercase bg-emerald-500/20 text-emerald-300">Cricket : Cricbuzz :: Football : Soccerbuzz</span>
          <h3 class="text-lg font-black mt-2">🧠 The Reasoning Bridge: Translating Cricket Analytics into Football Intelligence</h3>
          <p class="text-xs sm:text-sm sb-text-muted mt-1">Built specifically for fans who love Cricbuzz's structure and want the exact same analytical power for every football match:</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${DATA.glossary
            .map(
              (g) => `<div class="p-4 rounded-xl sb-surface-2 border space-y-2">
                <div class="flex items-center justify-between gap-2 text-xs font-extrabold">
                  <span class="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300">🏏 ${g.cricket}</span>
                  <span class="text-emerald-400 font-black">➔</span>
                  <span class="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300">⚽ ${g.football}</span>
                </div>
                <p class="text-xs sb-text-muted"><strong>In Cricbuzz:</strong> ${g.cricbuzzUse}</p>
                <p class="text-xs text-slate-200"><strong>In Soccerbuzz:</strong> ${g.soccerbuzzUse}</p>
              </div>`
            )
            .join("")}
        </div>
      </div>
    `;
  }

  // Switch Primary Navigation Views
  function switchView(viewId) {
    state.activeView = viewId;
    const views = ["match-center", "fixtures", "standings", "stats", "transfers", "glossary"];
    views.forEach((v) => {
      const sec = document.getElementById(`view-${v}`);
      if (sec) sec.classList.toggle("hidden", v !== viewId);
      const navBtn = document.getElementById(`nav-btn-${v}`);
      if (navBtn) {
        navBtn.className =
          v === viewId
            ? "px-3.5 py-2 rounded-lg text-xs sm:text-sm font-extrabold bg-emerald-500 text-slate-950 shadow-sm transition whitespace-nowrap"
            : "px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-white/10 transition whitespace-nowrap";
      }
    });

    if (viewId === "match-center") renderMatchCenter();
    if (viewId === "fixtures") renderFixturesView();
    if (viewId === "standings") renderStandingsView();
    if (viewId === "stats") renderStatsCornerView();
    if (viewId === "transfers") renderTransfersAndNewsView();
    if (viewId === "glossary") renderGlossaryView();
  }

  // Live Simulation Loop
  function startLiveSimulator() {
    if (simIntervalId) clearInterval(simIntervalId);
    simIntervalId = setInterval(() => {
      if (!state.liveSimRunning) return;
      DATA.matches.forEach((m) => {
        if (m.status === "LIVE") {
          m.minute = m.minute < 90 ? m.minute + 1 : 46;
          m.home.xg = +(m.home.xg + 0.01).toFixed(2);
          m.stats.passes[0] += 3;
          m.stats.passes[1] += 2;
        }
      });
      renderMatchStrip();
      if (state.activeView === "match-center") {
        const m = getSelectedMatch();
        const scoreBox = document.getElementById("mc-score-box");
        if (scoreBox && m.status === "LIVE") {
          renderMatchCenter();
        }
      }
    }, 6500);
  }

  // Global Handlers exposed for onclick
  window.sbSwitchView = switchView;

  window.sbSetCompFilter = function (compId) {
    state.activeCompFilter = compId;
    renderCompFilterBar();
    renderMatchStrip();
  };

  window.sbSelectMatch = function (matchId) {
    state.selectedMatchId = matchId;
    state.activeView = "match-center";
    renderMatchStrip();
    switchView("match-center");
  };

  window.sbQuickJump = function (matchId, subTab) {
    state.selectedMatchId = matchId;
    state.matchTab = subTab;
    renderMatchStrip();
    switchView("match-center");
  };

  window.sbSetMatchTab = function (tabId) {
    state.matchTab = tabId;
    renderMatchSubTabs();
    renderMatchSubContent();
  };

  window.sbSetCommFilter = function (fId) {
    state.commFilter = fId;
    renderMatchSubContent();
  };

  window.sbPostFanComment = function (ev) {
    ev.preventDefault();
    const input = document.getElementById("fan-comment-input");
    if (!input || !input.value.trim()) return;
    const m = getSelectedMatch();
    m.commentary.unshift({
      min: m.status === "LIVE" ? `${m.minute}'` : "FAN",
      type: "tactical",
      tag: "FAN PULSE 💬",
      title: "Live Supporter Reaction",
      text: input.value.trim()
    });
    input.value = "";
    renderMatchSubContent();
    showToast("Your live reaction is now on the commentary stream!", "FAN PULSE");
  };

  window.sbVoteMotm = function (playerName) {
    const m = getSelectedMatch();
    if (!state.motmVotes[m.id]) state.motmVotes[m.id] = {};
    state.motmVotes[m.id][playerName] = (state.motmVotes[m.id][playerName] || 10) + 1;
    state.userVotedMotm[m.id] = playerName;
    renderMatchSubContent();
    showToast(`Vote recorded for ${playerName} as Man of the Match!`, "MOTM POLL");
  };

  window.sbSimulateGoal = function () {
    const m = getSelectedMatch();
    const isHome = Math.random() >= 0.42;
    const scoringSide = isHome ? m.home : m.away;
    const lineup = isHome ? m.lineups.home : m.lineups.away;
    const star = lineup[lineup.length - 1] || lineup[0];
    if (m.status === "UPCOMING") {
      m.status = "LIVE";
      m.minute = 12;
      m.period = "1st Half";
    }
    scoringSide.score += 1;
    scoringSide.xg = +(scoringSide.xg + 0.48).toFixed(2);
    star.goals += 1;
    star.shots += 1;
    star.xg = +(star.xg + 0.48).toFixed(2);
    star.rating = Math.min(9.9, +(star.rating + 0.4).toFixed(1));
    scoringSide.scorers.push(`${star.name} ${m.minute}'`);
    m.buzzLine = `GOAL! ${star.name} (${m.minute}') fires ${scoringSide.name} ahead in dramatic fashion!`;
    m.commentary.unshift({
      min: `${m.minute}'`,
      type: "goal",
      tag: `GOAL! ${m.home.score}-${m.away.score}`,
      title: `${star.name.toUpperCase()} FINDS THE BACK OF THE NET FOR ${scoringSide.name.toUpperCase()}!`,
      text: `Electric finish inside the penalty area! ${star.name} latches onto a razor-sharp through-ball and drills an unstoppable strike into the corner! (xG: 0.48)`
    });

    playStadiumSound("goal");
    renderMatchStrip();
    renderMatchCenter();
    const box = document.getElementById("mc-score-box");
    if (box) box.classList.add("goal-celebration-flash");
    showToast(`⚽ GOAL! ${star.name} (${m.minute}') — ${m.home.name} ${m.home.score}-${m.away.score} ${m.away.name}`, "LIVE GOAL");
  };

  window.sbSimulateVar = function () {
    const m = getSelectedMatch();
    playStadiumSound("whistle");
    m.commentary.unshift({
      min: `${m.minute || 65}'`,
      type: "var",
      tag: "VAR REVIEW 🖥️",
      title: "Semi-Automated Offside & Penalty Check Complete",
      text: "The VAR room at the broadcast center has reviewed the penalty-box tangle — play continues with no penalty awarded!"
    });
    renderMatchCenter();
    showToast("🖥️ VAR Check logged in the Minute-by-Minute Commentary stream!", "VAR ALERT");
  };

  window.sbCopyMatchShare = function () {
    const m = getSelectedMatch();
    const summary = `Soccerbuzz Live: ${m.home.name} ${m.home.score}-${m.away.score} ${m.away.name} (${m.compName}) — xG: ${m.home.xg.toFixed(2)} vs ${m.away.xg.toFixed(2)}`;
    try {
      const ta = document.createElement("textarea");
      ta.value = summary;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    } catch (e) {
      // Ignore clipboard fallback issue
    }
    showToast(`Copied: "${summary}"`, "SHARED");
  };

  window.sbTogglePin = function (matchId) {
    state.pinnedMatches[matchId] = !state.pinnedMatches[matchId];
    renderMatchStrip();
    if (state.activeView === "fixtures") renderFixturesView();
    showToast(
      state.pinnedMatches[matchId] ? "Match pinned to your personal scoreboard!" : "Match unpinned.",
      "MY SOCCERBUZZ"
    );
  };

  window.sbSetPitchTeam = function (mode) {
    state.pitchTeamMode = mode;
    renderMatchSubContent();
  };

  window.sbSetPitchOverlay = function (ov) {
    state.pitchOverlay = ov;
    renderMatchSubContent();
  };

  window.sbOpenPlayerModal = function (sideKey, idx) {
    const m = getSelectedMatch();
    const p = m.lineups[sideKey][idx];
    const team = sideKey === "home" ? m.home : m.away;
    const modal = document.getElementById("sb-modal");
    const body = document.getElementById("sb-modal-body");
    if (!modal || !body || !p) return;

    body.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            ${renderTeamCrest(team, "w-12 h-12 text-sm")}
            <div>
              <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-500 text-slate-950">${team.name} • #${p.num} ${p.pos}</span>
              <h3 class="text-xl font-black mt-0.5">${p.name}</h3>
            </div>
          </div>
          <div class="text-right">
            <div class="text-xs sb-text-muted">Soccerbuzz Rating</div>
            <div class="text-2xl font-black text-emerald-400">${p.rating.toFixed(1)} ★</div>
          </div>
        </div>
        <p class="text-xs sm:text-sm sb-text-muted">${p.bio}</p>
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
          <div class="p-2.5 rounded-lg sb-surface-2 border"><div class="text-lg font-black">${p.goals}</div><div class="text-[10px] sb-text-muted">Goals</div></div>
          <div class="p-2.5 rounded-lg sb-surface-2 border"><div class="text-lg font-black">${p.assists}</div><div class="text-[10px] sb-text-muted">Assists</div></div>
          <div class="p-2.5 rounded-lg sb-surface-2 border"><div class="text-lg font-black">${p.shots}</div><div class="text-[10px] sb-text-muted">Shots</div></div>
          <div class="p-2.5 rounded-lg sb-surface-2 border"><div class="text-lg font-black text-emerald-400">${p.xg.toFixed(2)}</div><div class="text-[10px] sb-text-muted">xG</div></div>
          <div class="p-2.5 rounded-lg sb-surface-2 border"><div class="text-sm font-black">${p.passes}</div><div class="text-[10px] sb-text-muted">Passes</div></div>
          <div class="p-2.5 rounded-lg sb-surface-2 border"><div class="text-lg font-black">${p.tackles}</div><div class="text-[10px] sb-text-muted">Tackles</div></div>
        </div>
      </div>
    `;
    modal.classList.remove("hidden");
  };

  window.sbOpenArticleModal = function (artId) {
    const a = DATA.articles.find((x) => x.id === artId);
    const modal = document.getElementById("sb-modal");
    const body = document.getElementById("sb-modal-body");
    if (!modal || !body || !a) return;

    body.innerHTML = `
      <div class="space-y-4">
        <img src="${a.image}" alt="${a.title}" class="w-full h-52 object-cover rounded-xl max-w-full" />
        <div class="flex items-center justify-between text-xs font-bold text-emerald-400">
          <span>${a.category}</span>
          <span>${a.readTime}</span>
        </div>
        <h3 class="text-xl font-black">${a.title}</h3>
        <div class="space-y-3 text-xs sm:text-sm sb-text-muted leading-relaxed">
          ${a.body.split("\n\n").map((para) => `<p>${para}</p>`).join("")}
        </div>
      </div>
    `;
    modal.classList.remove("hidden");
  };

  window.sbCloseModal = function () {
    const modal = document.getElementById("sb-modal");
    if (modal) modal.classList.add("hidden");
  };

  window.sbScrollStrip = function (dir) {
    const strip = document.getElementById("live-match-strip");
    if (strip) strip.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  window.sbSetStandingsLeague = function (lg) {
    state.standingsLeague = lg;
    renderStandingsView();
  };

  window.sbPickBracket = function (slot, teamName) {
    state.bracketSelections[slot] = teamName;
    if (slot === "final1" || slot === "final2") {
      state.bracketSelections.champion = teamName;
    }
    renderStandingsView();
    showToast(`${teamName} advanced in your Knockout Bracket!`, "BRACKET");
  };

  window.sbSetFixturesComp = function (val) {
    state.fixturesComp = val;
    renderFixturesView();
  };

  window.sbSetFixturesStatus = function (val) {
    state.fixturesStatus = val;
    renderFixturesView();
  };

  window.sbToggleFixturesPinned = function () {
    state.fixturesPinnedOnly = !state.fixturesPinnedOnly;
    const btn = document.getElementById("btn-pinned-filter");
    if (btn) {
      btn.className = state.fixturesPinnedOnly
        ? "px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950"
        : "px-3 py-1.5 rounded-lg text-xs font-bold sb-surface-2 border";
    }
    renderFixturesView();
  };

  window.sbSetComparePlayer = function (slot, val) {
    if (slot === "A") state.comparePlayerA = val;
    else state.comparePlayerB = val;
    renderStatsCornerView();
  };

  window.sbSetTransferFilter = function (val) {
    state.transferFilter = val;
    renderTransfersAndNewsView();
  };

  window.sbHandleSearch = function (val) {
    state.searchQuery = val || "";
    renderMatchStrip();
  };

  window.sbToggleSim = function () {
    state.liveSimRunning = !state.liveSimRunning;
    const btn = document.getElementById("btn-live-sim");
    if (btn) {
      btn.innerHTML = state.liveSimRunning ? "⚡ Live Sim: ON" : "⏸️ Live Sim: PAUSED";
      btn.className = state.liveSimRunning
        ? "px-3 py-1.5 rounded-lg text-xs font-extrabold bg-emerald-500 text-slate-950 transition"
        : "px-3 py-1.5 rounded-lg text-xs font-bold sb-surface-2 border transition";
    }
    showToast(state.liveSimRunning ? "Real-time match clock & xG simulator resumed." : "Live simulator paused.", "SIMULATOR");
  };

  window.sbToggleSound = function () {
    state.soundEnabled = !state.soundEnabled;
    const btn = document.getElementById("btn-sound-toggle");
    if (btn) {
      btn.innerHTML = state.soundEnabled ? "🔊 Audio: ON" : "🔇 Audio: OFF";
    }
    if (state.soundEnabled) playStadiumSound("whistle");
    showToast(state.soundEnabled ? "Stadium whistle & goal horn audio enabled!" : "Audio muted.", "AUDIO");
  };

  window.sbToggleTheme = function () {
    state.lightTheme = !state.lightTheme;
    document.documentElement.classList.toggle("light-theme", state.lightTheme);
    const btn = document.getElementById("btn-theme-toggle");
    if (btn) btn.innerHTML = state.lightTheme ? "🌙 Floodlight Dark" : "☀️ Daylight Mode";
  };

  window.addEventListener("DOMContentLoaded", () => {
    renderCompFilterBar();
    renderMatchStrip();
    switchView("match-center");
    startLiveSimulator();
  });
})();
