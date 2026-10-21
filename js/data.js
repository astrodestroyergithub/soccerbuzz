window.SOCCERBUZZ_DATA = {
  competitions: [
    { id: "ALL", name: "All Matches", short: "ALL", icon: "🌐" },
    { id: "LIVE", name: "Live Now", short: "LIVE", icon: "🔴" },
    { id: "WC", name: "FIFA World Cup", short: "FIFA WC", icon: "🏆" },
    { id: "LALIGA", name: "LaLiga EA Sports", short: "LaLiga", icon: "🇪🇸" },
    { id: "BUNDESLIGA", name: "Bundesliga", short: "Bundesliga", icon: "🇩🇪" },
    { id: "EURO", name: "UEFA Euro", short: "Euro Cup", icon: "🇪🇺" },
    { id: "UCL", name: "UEFA Champions League", short: "UCL", icon: "⭐" },
    { id: "EPL", name: "Premier League", short: "EPL", icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { id: "SERIEA", name: "Serie A Enilive", short: "Serie A", icon: "🇮🇹" },
    { id: "ISL", name: "Indian Super League", short: "ISL", icon: "🇮🇳" }
  ],

  matches: [
    {
      id: "m1",
      compId: "LALIGA",
      compName: "LaLiga • Matchday 11 • El Clásico",
      status: "LIVE",
      minute: 78,
      addedTime: 0,
      period: "2nd Half",
      dateLabel: "Today • Live",
      kickoff: "20:00 CET",
      venue: "Estadio Santiago Bernabéu, Madrid",
      attendance: "83,186",
      referee: "Jesús Gil Manzano (ESP)",
      weather: "16°C • Clear Floodlit Night",
      buzzLine: "Bellingham strikes in the 74th minute after Yamal's curler! End-to-end El Clásico thriller.",
      winProb: { home: 54, draw: 24, away: 22 },
      home: {
        name: "Real Madrid",
        code: "RMA",
        color: "#3b82f6",
        accent: "#facc15",
        score: 2,
        htScore: 1,
        xg: 2.34,
        formation: "4-3-1-2",
        manager: "Carlo Ancelotti",
        scorers: ["Mbappé 24'", "Bellingham 74'"],
        form: ["W", "W", "D", "W", "W"]
      },
      away: {
        name: "FC Barcelona",
        code: "BAR",
        color: "#dc2626",
        accent: "#1d4ed8",
        score: 1,
        htScore: 0,
        xg: 1.89,
        formation: "4-2-3-1",
        manager: "Hansi Flick",
        scorers: ["Lamine Yamal 58'"],
        form: ["W", "W", "W", "L", "W"]
      },
      stats: {
        possession: [48, 52],
        shots: [16, 14],
        shotsOnTarget: [8, 6],
        bigChances: [4, 3],
        corners: [7, 5],
        passes: [462, 510],
        passAccuracy: [90, 91],
        tackles: [19, 17],
        fouls: [10, 12],
        offsides: [2, 5],
        saves: [5, 6],
        ppda: [8.4, 7.6]
      },
      momentum: [15, 28, 42, -18, -35, 38, 22, -25, -44, -12, 18, 48, -32, 41, 55, 30],
      xgTimeline: {
        labels: ["0'", "15'", "24'", "30'", "45'", "58'", "65'", "74'", "78'"],
        home: [0.0, 0.32, 0.98, 1.15, 1.28, 1.41, 1.65, 2.24, 2.34],
        away: [0.0, 0.18, 0.29, 0.64, 0.85, 1.42, 1.68, 1.79, 1.89]
      },
      lineups: {
        home: [
          { num: 1, name: "T. Courtois", pos: "GK", x: 7, y: 50, rating: 8.1, goals: 0, assists: 0, shots: 0, xg: 0.0, passes: "28 (86%)", tackles: 0, bio: "Belgian shot-stopper with 5 crucial saves tonight." },
          { num: 17, name: "L. Vázquez", pos: "RB", x: 22, y: 84, rating: 7.2, goals: 0, assists: 0, shots: 1, xg: 0.05, passes: "46 (89%)", tackles: 3, bio: "Tireless overlapping right-back providing width." },
          { num: 3, name: "É. Militão", pos: "CB", x: 19, y: 63, rating: 7.6, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "52 (92%)", tackles: 4, bio: "Dominant aerial presence in central defense." },
          { num: 22, name: "A. Rüdiger", pos: "CB", x: 19, y: 37, rating: 7.8, goals: 0, assists: 0, shots: 0, xg: 0.0, passes: "58 (94%)", tackles: 3, card: "yellow", bio: "Relentless man-marker neutralizing Lewandowski." },
          { num: 23, name: "F. Mendy", pos: "LB", x: 22, y: 16, rating: 7.1, goals: 0, assists: 0, shots: 0, xg: 0.0, passes: "41 (90%)", tackles: 2, bio: "One-on-one defensive specialist on the left flank." },
          { num: 8, name: "F. Valverde", pos: "CM", x: 35, y: 70, rating: 8.4, goals: 0, assists: 1, shots: 3, xg: 0.22, passes: "64 (93%)", tackles: 4, bio: "Box-to-box engine room with lung-bursting recoveries." },
          { num: 14, name: "A. Tchouaméni", pos: "CDM", x: 31, y: 50, rating: 7.4, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "59 (92%)", tackles: 2, bio: "Shielding the back four and breaking transition lines." },
          { num: 6, name: "E. Camavinga", pos: "CM", x: 35, y: 30, rating: 7.7, goals: 0, assists: 0, shots: 1, xg: 0.07, passes: "48 (91%)", tackles: 1, subOut: "70'", bio: "Press-resistant ball carrier through the left half-space." },
          { num: 5, name: "J. Bellingham", pos: "CAM", x: 43, y: 50, rating: 9.1, goals: 1, assists: 0, shots: 3, xg: 0.68, passes: "44 (88%)", tackles: 2, bio: "Clutch big-game match-winner crashing the box late." },
          { num: 9, name: "K. Mbappé", pos: "ST", x: 48, y: 66, rating: 8.8, goals: 1, assists: 0, shots: 4, xg: 0.84, passes: "29 (84%)", tackles: 0, bio: "Clinical opener in the 24th minute; electric pace in behind." },
          { num: 7, name: "Vinícius Jr.", pos: "ST", x: 48, y: 34, rating: 8.5, goals: 0, assists: 1, shots: 2, xg: 0.34, passes: "33 (85%)", tackles: 0, bio: "Dazzling wing play and decisive assist for Bellingham." }
        ],
        away: [
          { num: 13, name: "I. Peña", pos: "GK", x: 93, y: 50, rating: 7.0, goals: 0, assists: 0, shots: 0, xg: 0.0, passes: "31 (84%)", tackles: 0, bio: "High-sweeper keeper supporting Flick's high line." },
          { num: 23, name: "J. Koundé", pos: "RB", x: 78, y: 18, rating: 7.3, goals: 0, assists: 0, shots: 0, xg: 0.0, passes: "56 (91%)", tackles: 4, card: "yellow", bio: "Tasked with containing Vinícius Jr. on the flank." },
          { num: 2, name: "P. Cubarsí", pos: "CB", x: 81, y: 38, rating: 7.5, goals: 0, assists: 0, shots: 0, xg: 0.0, passes: "69 (95%)", tackles: 3, bio: "Teenage ball-playing center-back threading line-breaking passes." },
          { num: 5, name: "I. Martínez", pos: "CB", x: 81, y: 62, rating: 7.2, goals: 0, assists: 0, shots: 1, xg: 0.05, passes: "62 (92%)", tackles: 2, bio: "Leader of Barcelona's offside-trap high defensive line." },
          { num: 3, name: "A. Balde", pos: "LB", x: 78, y: 82, rating: 7.4, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "44 (89%)", tackles: 2, bio: "Jet-heeled left-back pushing high into attack." },
          { num: 8, name: "Pedri", pos: "CM", x: 67, y: 62, rating: 8.2, goals: 0, assists: 1, shots: 2, xg: 0.19, passes: "74 (94%)", tackles: 3, bio: "Metronome orchestrating tempo in tight midfield pockets." },
          { num: 17, name: "M. Casadó", pos: "CDM", x: 69, y: 38, rating: 7.3, goals: 0, assists: 0, shots: 0, xg: 0.0, passes: "58 (91%)", tackles: 3, subOut: "68'", bio: "Tenacious La Masia pivot winning second balls." },
          { num: 19, name: "Lamine Yamal", pos: "RW", x: 57, y: 20, rating: 8.7, goals: 1, assists: 0, shots: 4, xg: 0.56, passes: "39 (87%)", tackles: 1, bio: "Sensational curling equalizer into the far top corner at 58'." },
          { num: 20, name: "Dani Olmo", pos: "CAM", x: 59, y: 50, rating: 7.6, goals: 0, assists: 0, shots: 2, xg: 0.28, passes: "35 (86%)", tackles: 1, bio: "Sharp half-turn playmaker linking midfield to attack." },
          { num: 11, name: "Raphinha", pos: "LW", x: 57, y: 80, rating: 7.9, goals: 0, assists: 0, shots: 2, xg: 0.31, passes: "37 (83%)", tackles: 1, bio: "Relentless pressing forward and dangerous set-piece delivery." },
          { num: 9, name: "R. Lewandowski", pos: "ST", x: 52, y: 50, rating: 7.4, goals: 0, assists: 0, shots: 2, xg: 0.44, passes: "25 (80%)", tackles: 0, bio: "Poacher supreme testing Courtois from close range." }
        ]
      },
      commentary: [
        { min: "78'", type: "chance", tag: "BIG CHANCE", title: "Courtois denies Raphinha on the counter!", text: "Pedri slips a disguised vertical pass into Raphinha, who fires a fierce low drive toward the bottom corner — Courtois gets a strong left glove down to parry it wide! (xG: 0.24)" },
        { min: "74'", type: "goal", tag: "GOAL! 2-1", title: "JUDE BELLINGHAM RESTORES REAL MADRID'S LEAD!", text: "Vinícius Jr. isolates Koundé on the left touchline and whips an inviting trivela cross to the back post where Jude Bellingham arrives unmarked to volley home past Peña! The Bernabéu erupts! (xG: 0.52)" },
        { min: "70'", type: "sub", tag: "SUBSTITUTION", title: "Luka Modrić replaces Eduardo Camavinga (RMA)", text: "Carlo Ancelotti brings on club captain Luka Modrić to dictate tempo in the final 20 minutes." },
        { min: "68'", type: "sub", tag: "SUBSTITUTION", title: "Frenkie de Jong replaces Marc Casadó (BAR)", text: "Hansi Flick introduces Frenkie de Jong to add progressive ball-carrying through the middle." },
        { min: "63'", type: "card", tag: "YELLOW CARD", title: "Jules Koundé booked for tactical foul (BAR)", text: "Koundé tugs back Vinícius Jr. just as the Brazilian threatened to break clear down the left channel." },
        { min: "58'", type: "goal", tag: "GOAL! 1-1", title: "LAMINE YAMAL CURLS IN A MASTERPIECE!", text: "Pedri finds Lamine Yamal on the right corner of the box. Yamal shifts onto his left boot and bends an unstoppable effort off the inside of the far post! 1-1 in El Clásico! (xG: 0.31)" },
        { min: "49'", type: "var", tag: "VAR CHECK", title: "Offside confirmed against Lewandowski", text: "Semi-automated offside technology (SAOT) confirms Robert Lewandowski's heel was 4cm beyond Antonio Rüdiger before his shot hit the post." },
        { min: "45+2'", type: "tactical", tag: "HALF TIME", title: "HT: Real Madrid 1-0 FC Barcelona", text: "Real Madrid lead at the break courtesy of Kylian Mbappé's clinical dink, though Barcelona's high line has forced 2 offsides and 52% possession." },
        { min: "36'", type: "card", tag: "YELLOW CARD", title: "Antonio Rüdiger cautioned (RMA)", text: "Late challenge by Rüdiger on Dani Olmo in the center circle earns the first booking of the night." },
        { min: "24'", type: "goal", tag: "GOAL! 1-0", title: "KYLIAN MBAPPÉ OPENS HIS CLÁSICO ACCOUNT!", text: "Federico Valverde threads a laser pass between Cubarsí and Koundé. Mbappé times his run to perfection and delicately chips Iñaki Peña from 12 yards! (xG: 0.61)" }
      ],
      h2h: {
        totalPlayed: 258,
        homeWins: 106,
        draws: 52,
        awayWins: 100,
        recent: [
          { date: "Apr 2024", comp: "LaLiga", score: "Real Madrid 3 - 2 FC Barcelona" },
          { date: "Jan 2024", comp: "Supercopa", score: "Real Madrid 4 - 1 FC Barcelona" },
          { date: "Oct 2023", comp: "LaLiga", score: "FC Barcelona 1 - 2 Real Madrid" },
          { date: "Apr 2023", comp: "Copa del Rey", score: "FC Barcelona 0 - 4 Real Madrid" }
        ]
      }
    },

    {
      id: "m2",
      compId: "WC",
      compName: "FIFA World Cup 2026 • Quarter-Final Spotlight",
      status: "LIVE",
      minute: 64,
      addedTime: 0,
      period: "2nd Half",
      dateLabel: "Today • Live",
      kickoff: "21:00 EST",
      venue: "MetLife Stadium, New York / New Jersey",
      attendance: "82,500",
      referee: "Szymon Marciniak (POL)",
      weather: "21°C • Humid Night",
      buzzLine: "Messi & Julian Álvarez combine against Mbappé's Les Bleus in a seismic World Cup rematch!",
      winProb: { home: 39, draw: 32, away: 29 },
      home: {
        name: "Argentina",
        code: "ARG",
        color: "#38bdf8",
        accent: "#ffffff",
        score: 2,
        htScore: 1,
        xg: 1.96,
        formation: "4-3-3",
        manager: "Lionel Scaloni",
        scorers: ["L. Messi 19' (P)", "J. Álvarez 54'"],
        form: ["W", "W", "W", "D", "W"]
      },
      away: {
        name: "France",
        code: "FRA",
        color: "#1e40af",
        accent: "#ef4444",
        score: 2,
        htScore: 1,
        xg: 2.08,
        formation: "4-2-3-1",
        manager: "Didier Deschamps",
        scorers: ["K. Mbappé 38'", "M. Olise 61'"],
        form: ["W", "D", "W", "W", "W"]
      },
      stats: {
        possession: [53, 47],
        shots: [13, 14],
        shotsOnTarget: [6, 7],
        bigChances: [3, 4],
        corners: [5, 6],
        passes: [418, 376],
        passAccuracy: [89, 88],
        tackles: [21, 18],
        fouls: [13, 11],
        offsides: [1, 3],
        saves: [5, 4],
        ppda: [7.9, 8.8]
      },
      momentum: [30, 45, 52, 18, -22, -48, -35, 14, 29, 55, 38, -42, -50, 20, -18, 32],
      xgTimeline: {
        labels: ["0'", "19'", "30'", "38'", "45'", "54'", "61'", "64'"],
        home: [0.0, 0.88, 1.05, 1.12, 1.24, 1.78, 1.85, 1.96],
        away: [0.0, 0.14, 0.42, 1.04, 1.19, 1.38, 1.96, 2.08]
      },
      lineups: {
        home: [
          { num: 23, name: "E. Martínez", pos: "GK", x: 7, y: 50, rating: 7.9, goals: 0, assists: 0, shots: 0, xg: 0, passes: "24 (82%)", tackles: 0, bio: "Big-game penalty and 1v1 specialist for La Albiceleste." },
          { num: 26, name: "N. Molina", pos: "RB", x: 22, y: 82, rating: 7.1, goals: 0, assists: 0, shots: 1, xg: 0.04, passes: "39 (88%)", tackles: 3, bio: "Attacking right-back overlapping Messi." },
          { num: 13, name: "C. Romero", pos: "CB", x: 19, y: 62, rating: 7.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "48 (93%)", tackles: 5, card: "yellow", bio: "Aggressive front-foot stopper." },
          { num: 25, name: "L. Martínez", pos: "CB", x: 19, y: 38, rating: 7.5, goals: 0, assists: 0, shots: 0, xg: 0, passes: "51 (94%)", tackles: 3, bio: "Line-breaking left-footed center-back." },
          { num: 3, name: "N. Tagliafico", pos: "LB", x: 22, y: 18, rating: 7.2, goals: 0, assists: 0, shots: 0, xg: 0, passes: "35 (87%)", tackles: 3, bio: "Dependable defensive full-back." },
          { num: 7, name: "R. De Paul", pos: "CM", x: 35, y: 70, rating: 8.0, goals: 0, assists: 1, shots: 1, xg: 0.08, passes: "58 (91%)", tackles: 4, bio: "Relentless midfield warrior and transition catalyst." },
          { num: 24, name: "E. Fernández", pos: "CDM", x: 32, y: 50, rating: 7.7, goals: 0, assists: 0, shots: 2, xg: 0.14, passes: "66 (92%)", tackles: 2, bio: "Deep-lying playmaker dictating switches of play." },
          { num: 20, name: "A. Mac Allister", pos: "CM", x: 35, y: 30, rating: 7.9, goals: 0, assists: 0, shots: 2, xg: 0.19, passes: "49 (90%)", tackles: 1, bio: "Intelligent box-to-box connector." },
          { num: 10, name: "L. Messi", pos: "RW", x: 46, y: 74, rating: 8.9, goals: 1, assists: 1, shots: 4, xg: 0.94, passes: "34 (86%)", tackles: 0, bio: "Converted the 19' penalty and crafted Álvarez's goal." },
          { num: 9, name: "J. Álvarez", pos: "ST", x: 49, y: 50, rating: 8.5, goals: 1, assists: 0, shots: 2, xg: 0.46, passes: "19 (84%)", tackles: 0, bio: "Tireless pressing striker who buried the 54' finish." },
          { num: 15, name: "N. González", pos: "LW", x: 46, y: 24, rating: 7.3, goals: 0, assists: 0, shots: 1, xg: 0.11, passes: "25 (81%)", tackles: 0, bio: "Direct runner stretching France's backline." }
        ],
        away: [
          { num: 16, name: "M. Maignan", pos: "GK", x: 93, y: 50, rating: 7.4, goals: 0, assists: 0, shots: 0, xg: 0, passes: "29 (85%)", tackles: 0, bio: "Sweeper-keeper with rapid distribution." },
          { num: 5, name: "J. Koundé", pos: "RB", x: 78, y: 20, rating: 7.2, goals: 0, assists: 0, shots: 0, xg: 0, passes: "41 (90%)", tackles: 3, bio: "Solid right-sided defensive anchor." },
          { num: 17, name: "W. Saliba", pos: "CB", x: 81, y: 40, rating: 7.6, goals: 0, assists: 0, shots: 0, xg: 0, passes: "52 (94%)", tackles: 3, bio: "Composed recovery defender." },
          { num: 4, name: "D. Upamecano", pos: "CB", x: 81, y: 60, rating: 7.0, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "47 (91%)", tackles: 2, bio: "Powerful progressive passer from the back." },
          { num: 22, name: "T. Hernández", pos: "LB", x: 78, y: 80, rating: 7.8, goals: 0, assists: 1, shots: 2, xg: 0.18, passes: "38 (87%)", tackles: 3, bio: "Overlapping powerhouse who set up Mbappé's equalizer." },
          { num: 8, name: "A. Tchouaméni", pos: "CDM", x: 68, y: 40, rating: 7.5, goals: 0, assists: 0, shots: 2, xg: 0.15, passes: "49 (90%)", tackles: 4, bio: "Midfield destroyer and long-range threat." },
          { num: 6, name: "E. Camavinga", pos: "CM", x: 67, y: 62, rating: 7.6, goals: 0, assists: 0, shots: 1, xg: 0.07, passes: "42 (89%)", tackles: 3, bio: "Dynamic ball-winner in central midfield." },
          { num: 7, name: "M. Olise", pos: "CAM", x: 58, y: 50, rating: 8.6, goals: 1, assists: 0, shots: 3, xg: 0.58, passes: "33 (86%)", tackles: 0, bio: "Curled home a sublime 61' equalizer from 20 yards." },
          { num: 11, name: "O. Dembélé", pos: "RW", x: 56, y: 22, rating: 7.5, goals: 0, assists: 1, shots: 1, xg: 0.19, passes: "24 (82%)", tackles: 0, bio: "Two-footed dribbler tormenting full-backs." },
          { num: 10, name: "K. Mbappé", pos: "LW", x: 55, y: 78, rating: 8.8, goals: 1, assists: 0, shots: 3, xg: 0.69, passes: "21 (84%)", tackles: 0, bio: "Clinical 38' strike; always thrives on the World Cup stage." },
          { num: 9, name: "M. Thuram", pos: "ST", x: 52, y: 50, rating: 7.1, goals: 0, assists: 0, shots: 1, xg: 0.16, passes: "18 (79%)", tackles: 0, bio: "Physical focal point pinning Argentina's center-backs." }
        ]
      },
      commentary: [
        { min: "61'", type: "goal", tag: "GOAL! 2-2", title: "MICHAEL OLISE WHIPS FRANCE LEVEL AGAIN!", text: "Ousmane Dembélé cuts inside and lays the ball off to Michael Olise at the edge of the arc — Olise sweeps a first-time left-footed rocket past Emi Martínez! 2-2 in New York! (xG: 0.34)" },
        { min: "54'", type: "goal", tag: "GOAL! 2-1", title: "JULIÁN ÁLVAREZ FINISHES MESSI'S REVERSE PASS!", text: "Lionel Messi drops into the pocket, draws two French midfielders, and slides a reverse pass into Julián Álvarez who slots coolly under Mike Maignan! (xG: 0.41)" },
        { min: "38'", type: "goal", tag: "GOAL! 1-1", title: "MBAPPÉ FIRES HOME FROM HERNÁNDEZ CUTBACK!", text: "Theo Hernández surges down the left flank and pulls it back to Kylian Mbappé, who drills a low shot inside the near post! (xG: 0.48)" },
        { min: "19'", type: "goal", tag: "GOAL! 1-0", title: "LIONEL MESSI CONVERTS FROM THE SPOT!", text: "After Mac Allister was clipped in the box, Messi waits for Maignan to dive and rolls the penalty into the bottom-right corner! (xG: 0.79)" }
      ],
      h2h: {
        totalPlayed: 14,
        homeWins: 7,
        draws: 4,
        awayWins: 3,
        recent: [
          { date: "Dec 2022", comp: "FIFA World Cup Final", score: "Argentina 3 - 3 France (4-2 pens)" },
          { date: "Jun 2018", comp: "FIFA World Cup R16", score: "France 4 - 3 Argentina" }
        ]
      }
    },

    {
      id: "m3",
      compId: "BUNDESLIGA",
      compName: "Bundesliga • Matchday 9 • Der Klassiker",
      status: "LIVE",
      minute: 83,
      addedTime: 0,
      period: "2nd Half",
      dateLabel: "Today • Live",
      kickoff: "18:30 CET",
      venue: "Allianz Arena, Munich",
      attendance: "75,024",
      referee: "Felix Zwayer (GER)",
      weather: "12°C • Crisp Autumn Evening",
      buzzLine: "Harry Kane brace & Jamal Musiala magic put Bayern in command despite Guirassy's header!",
      winProb: { home: 84, draw: 11, away: 5 },
      home: {
        name: "Bayern Munich",
        code: "BAY",
        color: "#dc2626",
        accent: "#ffffff",
        score: 3,
        htScore: 2,
        xg: 2.88,
        formation: "4-2-3-1",
        manager: "Vincent Kompany",
        scorers: ["H. Kane 14', 69'", "J. Musiala 41'"],
        form: ["W", "W", "D", "W", "W"]
      },
      away: {
        name: "Borussia Dortmund",
        code: "BVB",
        color: "#eab308",
        accent: "#111827",
        score: 1,
        htScore: 1,
        xg: 1.14,
        formation: "4-2-3-1",
        manager: "Nuri Şahin",
        scorers: ["S. Guirassy 31'"],
        form: ["W", "L", "W", "W", "L"]
      },
      stats: {
        possession: [62, 38],
        shots: [19, 9],
        shotsOnTarget: [9, 4],
        bigChances: [5, 2],
        corners: [8, 3],
        passes: [612, 374],
        passAccuracy: [92, 85],
        tackles: [16, 22],
        fouls: [9, 11],
        offsides: [2, 2],
        saves: [3, 6],
        ppda: [6.8, 11.4]
      },
      momentum: [35, 58, 40, -15, -42, 25, 62, 48, 30, 18, -22, 45, 64, 50, 28, 35],
      xgTimeline: {
        labels: ["0'", "14'", "31'", "41'", "45'", "60'", "69'", "83'"],
        home: [0.0, 0.72, 1.05, 1.68, 1.82, 2.15, 2.69, 2.88],
        away: [0.0, 0.12, 0.64, 0.71, 0.79, 0.94, 1.02, 1.14]
      },
      lineups: {
        home: [
          { num: 1, name: "M. Neuer", pos: "GK", x: 7, y: 50, rating: 7.4, goals: 0, assists: 0, shots: 0, xg: 0, passes: "35 (91%)", tackles: 0, bio: "Sweeper-keeper icon commanding Bayern's build-up." },
          { num: 27, name: "K. Laimer", pos: "RB", x: 23, y: 82, rating: 7.5, goals: 0, assists: 0, shots: 1, xg: 0.05, passes: "54 (90%)", tackles: 4, bio: "High-intensity pressing right-back." },
          { num: 2, name: "D. Upamecano", pos: "CB", x: 19, y: 62, rating: 7.7, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "78 (95%)", tackles: 3, bio: "Stepping into midfield to overload Dortmund." },
          { num: 3, name: "Kim Min-jae", pos: "CB", x: 19, y: 38, rating: 7.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "82 (96%)", tackles: 3, bio: "Dominant recovery speed on the halfway line." },
          { num: 19, name: "A. Davies", pos: "LB", x: 25, y: 16, rating: 8.1, goals: 0, assists: 1, shots: 1, xg: 0.09, passes: "59 (91%)", tackles: 2, bio: "Blistering overlap to set up Musiala's goal." },
          { num: 6, name: "J. Kimmich", pos: "CDM", x: 34, y: 60, rating: 8.5, goals: 0, assists: 1, shots: 2, xg: 0.14, passes: "98 (95%)", tackles: 2, bio: "98 passes completed; total control of the center circle." },
          { num: 45, name: "A. Pavlović", pos: "CDM", x: 34, y: 40, rating: 7.6, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "71 (93%)", tackles: 2, bio: "Composed academy graduate alongside Kimmich." },
          { num: 17, name: "M. Olise", pos: "RW", x: 44, y: 78, rating: 8.2, goals: 0, assists: 1, shots: 3, xg: 0.38, passes: "41 (88%)", tackles: 0, bio: "Pinpoint inswinging delivery for Kane's second goal." },
          { num: 42, name: "J. Musiala", pos: "CAM", x: 43, y: 50, rating: 9.0, goals: 1, assists: 0, shots: 4, xg: 0.74, passes: "46 (89%)", tackles: 0, bio: "Slalomed past three BVB defenders to score at 41'." },
          { num: 7, name: "S. Gnabry", pos: "LW", x: 44, y: 22, rating: 7.4, goals: 0, assists: 0, shots: 2, xg: 0.28, passes: "29 (84%)", tackles: 0, bio: "Dangerous inside forward runs." },
          { num: 9, name: "H. Kane", pos: "ST", x: 49, y: 50, rating: 9.2, goals: 2, assists: 0, shots: 4, xg: 1.06, passes: "24 (82%)", tackles: 0, bio: "Clinical brace taking his Bundesliga tally to 14 goals." }
        ],
        away: [
          { num: 1, name: "G. Kobel", pos: "GK", x: 93, y: 50, rating: 7.6, goals: 0, assists: 0, shots: 0, xg: 0, passes: "28 (78%)", tackles: 0, bio: "Kept Dortmund alive with 6 top-drawer stops." },
          { num: 26, name: "J. Ryerson", pos: "RB", x: 78, y: 20, rating: 6.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "34 (83%)", tackles: 4, bio: "Tested heavily by Davies and Gnabry." },
          { num: 3, name: "W. Anton", pos: "CB", x: 81, y: 40, rating: 6.9, goals: 0, assists: 0, shots: 0, xg: 0, passes: "42 (88%)", tackles: 3, bio: "Battling Harry Kane in the box." },
          { num: 4, name: "N. Schlotterbeck", pos: "CB", x: 81, y: 60, rating: 7.2, goals: 0, assists: 1, shots: 1, xg: 0.05, passes: "49 (87%)", tackles: 4, card: "yellow", bio: "Delivered the diagonal ball leading to Guirassy's goal." },
          { num: 5, name: "R. Bensebaini", pos: "LB", x: 78, y: 80, rating: 6.7, goals: 0, assists: 0, shots: 0, xg: 0, passes: "31 (81%)", tackles: 3, bio: "Pinned back by Michael Olise's trickery." },
          { num: 23, name: "E. Can", pos: "CDM", x: 69, y: 42, rating: 6.9, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "41 (86%)", tackles: 3, bio: "Dortmund skipper anchoring midfield." },
          { num: 13, name: "P. Groß", pos: "CM", x: 68, y: 58, rating: 7.1, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "48 (89%)", tackles: 2, bio: "Intelligent set-piece specialist." },
          { num: 10, name: "J. Brandt", pos: "CAM", x: 59, y: 50, rating: 7.3, goals: 0, assists: 0, shots: 2, xg: 0.21, passes: "36 (84%)", tackles: 1, bio: "Creative hub looking for transition runners." },
          { num: 20, name: "M. Sabitzer", pos: "RW", x: 57, y: 24, rating: 6.8, goals: 0, assists: 0, shots: 1, xg: 0.11, passes: "25 (82%)", tackles: 1, bio: "Working hard on the right side." },
          { num: 43, name: "J. Gittens", pos: "LW", x: 57, y: 76, rating: 7.4, goals: 0, assists: 0, shots: 1, xg: 0.15, passes: "21 (80%)", tackles: 1, bio: "Explosive 1v1 dribbler on the counter." },
          { num: 9, name: "S. Guirassy", pos: "ST", x: 52, y: 50, rating: 7.8, goals: 1, assists: 0, shots: 2, xg: 0.48, passes: "19 (77%)", tackles: 0, bio: "Towering 31' header past Manuel Neuer." }
        ]
      },
      commentary: [
        { min: "69'", type: "goal", tag: "GOAL! 3-1", title: "HARRY KANE HEADS HOME HIS SECOND!", text: "Michael Olise clips a teasing cross to the penalty spot where Harry Kane steers a bullet header into the top corner! (xG: 0.44)" },
        { min: "41'", type: "goal", tag: "GOAL! 2-1", title: "JAMAL MUSIALA DANCES THROUGH DORTMUND!", text: "Alphonso Davies darts inside and feeds Musiala, who glides past two yellow shirts before slotting low past Kobel! (xG: 0.49)" },
        { min: "31'", type: "goal", tag: "GOAL! 1-1", title: "SERHOU GUIRASSY LEVELS DER KLASSIKER!", text: "Schlotterbeck's deep diagonal finds Guirassy peeling off Upamecano to power a header inside the far post! (xG: 0.36)" },
        { min: "14'", type: "goal", tag: "GOAL! 1-0", title: "HARRY KANE STRIKES FIRST FOR BAYERN!", text: "Joshua Kimmich splits the lines and Kane sweeps a first-time finish into the bottom corner! (xG: 0.51)" }
      ],
      h2h: {
        totalPlayed: 136,
        homeWins: 68,
        draws: 35,
        awayWins: 33,
        recent: [
          { date: "Mar 2024", comp: "Bundesliga", score: "Bayern Munich 0 - 2 Borussia Dortmund" },
          { date: "Nov 2023", comp: "Bundesliga", score: "Borussia Dortmund 0 - 4 Bayern Munich" }
        ]
      }
    },

    {
      id: "m4",
      compId: "EURO",
      compName: "UEFA Euro Championship • Final Showcase",
      status: "FT",
      minute: 90,
      addedTime: 4,
      period: "Full Time",
      dateLabel: "Completed Classic",
      kickoff: "21:00 CET",
      venue: "Olympiastadion, Berlin",
      attendance: "65,600",
      referee: "François Letexier (FRA)",
      weather: "19°C • Clear Berlin Night",
      buzzLine: "Mikel Oyarzabal's 86th-minute slide crowns Spain 4-time European Champions over England!",
      winProb: { home: 100, draw: 0, away: 0 },
      home: {
        name: "Spain",
        code: "ESP",
        color: "#dc2626",
        accent: "#facc15",
        score: 2,
        htScore: 0,
        xg: 2.12,
        formation: "4-2-3-1",
        manager: "Luis de la Fuente",
        scorers: ["N. Williams 47'", "M. Oyarzabal 86'"],
        form: ["W", "W", "W", "W", "W"]
      },
      away: {
        name: "England",
        code: "ENG",
        color: "#e2e8f0",
        accent: "#dc2626",
        score: 1,
        htScore: 0,
        xg: 0.89,
        formation: "4-2-3-1",
        manager: "Gareth Southgate",
        scorers: ["C. Palmer 73'"],
        form: ["D", "W", "W", "W", "L"]
      },
      stats: {
        possession: [65, 35],
        shots: [16, 9],
        shotsOnTarget: [6, 4],
        bigChances: [4, 1],
        corners: [10, 2],
        passes: [548, 294],
        passAccuracy: [91, 82],
        tackles: [14, 19],
        fouls: [11, 5],
        offsides: [1, 0],
        saves: [3, 4],
        ppda: [7.2, 13.5]
      },
      momentum: [20, 35, 28, 15, -18, 65, 52, 40, -25, -55, 22, 44, 72, 60, 45, 50],
      xgTimeline: {
        labels: ["0'", "30'", "45'", "47'", "60'", "73'", "86'", "90'"],
        home: [0.0, 0.35, 0.52, 1.04, 1.42, 1.56, 2.08, 2.12],
        away: [0.0, 0.14, 0.28, 0.32, 0.45, 0.69, 0.78, 0.89]
      },
      lineups: {
        home: [
          { num: 23, name: "U. Simón", pos: "GK", x: 7, y: 50, rating: 7.3, goals: 0, assists: 0, shots: 0, xg: 0, passes: "26 (88%)", tackles: 0, bio: "Commanding presence in goal for La Roja." },
          { num: 2, name: "D. Carvajal", pos: "RB", x: 22, y: 82, rating: 7.9, goals: 0, assists: 0, shots: 0, xg: 0, passes: "59 (92%)", tackles: 4, bio: "Veteran right-back locking down England's left side." },
          { num: 3, name: "R. Le Normand", pos: "CB", x: 19, y: 62, rating: 7.2, goals: 0, assists: 0, shots: 1, xg: 0.07, passes: "48 (94%)", tackles: 2, bio: "Solid aerial defender." },
          { num: 14, name: "A. Laporte", pos: "CB", x: 19, y: 38, rating: 7.6, goals: 0, assists: 0, shots: 1, xg: 0.05, passes: "67 (95%)", tackles: 2, bio: "Progressive passing anchor from defense." },
          { num: 24, name: "M. Cucurella", pos: "LB", x: 24, y: 18, rating: 8.3, goals: 0, assists: 1, shots: 0, xg: 0, passes: "49 (90%)", tackles: 3, bio: "Delivered the decisive low cross for Oyarzabal at 86'!" },
          { num: 16, name: "Rodri", pos: "CDM", x: 32, y: 55, rating: 7.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "42 (95%)", tackles: 2, subOut: "46'", bio: "Tournament MVP orchestrating midfield." },
          { num: 8, name: "Fabián Ruiz", pos: "CM", x: 35, y: 38, rating: 8.1, goals: 0, assists: 0, shots: 2, xg: 0.16, passes: "68 (92%)", tackles: 2, bio: "Silky left-footed conductor in midfield." },
          { num: 19, name: "Lamine Yamal", pos: "RW", x: 45, y: 80, rating: 8.6, goals: 0, assists: 1, shots: 3, xg: 0.42, passes: "38 (89%)", tackles: 0, bio: "Assisted Nico Williams 2 minutes into the second half." },
          { num: 10, name: "Dani Olmo", pos: "CAM", x: 43, y: 50, rating: 8.4, goals: 0, assists: 0, shots: 3, xg: 0.36, passes: "41 (88%)", tackles: 1, bio: "Heroic 90th-minute goal-line header to preserve the trophy!" },
          { num: 17, name: "N. Williams", pos: "LW", x: 45, y: 20, rating: 8.8, goals: 1, assists: 0, shots: 3, xg: 0.48, passes: "36 (87%)", tackles: 0, bio: "Final MVP after his clinical 47' opener." },
          { num: 21, name: "M. Oyarzabal", pos: "ST", x: 49, y: 50, rating: 8.7, goals: 1, assists: 0, shots: 3, xg: 0.58, passes: "18 (85%)", tackles: 0, bio: "Super-sub who poked home the 86' Euro winner." }
        ],
        away: [
          { num: 1, name: "J. Pickford", pos: "GK", x: 93, y: 50, rating: 7.5, goals: 0, assists: 0, shots: 0, xg: 0, passes: "32 (74%)", tackles: 0, bio: "Denied Yamal twice with outstretched saves." },
          { num: 2, name: "K. Walker", pos: "RB", x: 78, y: 20, rating: 6.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "36 (88%)", tackles: 2, bio: "Recovery pace tested by Nico Williams." },
          { num: 5, name: "J. Stones", pos: "CB", x: 81, y: 40, rating: 7.1, goals: 0, assists: 0, shots: 0, xg: 0, passes: "44 (92%)", tackles: 2, card: "yellow", bio: "Composed defender stepping out from the back." },
          { num: 6, name: "M. Guéhi", pos: "CB", x: 81, y: 60, rating: 7.0, goals: 0, assists: 0, shots: 1, xg: 0.14, passes: "39 (90%)", tackles: 3, bio: "Nearly equalized at 90' before Olmo's goal-line clearance." },
          { num: 3, name: "L. Shaw", pos: "LB", x: 78, y: 80, rating: 7.2, goals: 0, assists: 0, shots: 0, xg: 0, passes: "29 (83%)", tackles: 4, bio: "Returned to the starting XI for the Berlin final." },
          { num: 4, name: "D. Rice", pos: "CDM", x: 69, y: 42, rating: 7.1, goals: 0, assists: 0, shots: 1, xg: 0.18, passes: "38 (89%)", tackles: 3, bio: "Covered huge ground in midfield." },
          { num: 26, name: "K. Mainoo", pos: "CM", x: 68, y: 58, rating: 6.9, goals: 0, assists: 0, shots: 0, xg: 0, passes: "24 (86%)", tackles: 2, subOut: "70'", bio: "Replaced by Cole Palmer at 70'." },
          { num: 7, name: "B. Saka", pos: "RW", x: 56, y: 22, rating: 7.3, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "22 (81%)", tackles: 1, bio: "Sparked the break for England's equalizer." },
          { num: 10, name: "J. Bellingham", pos: "CAM", x: 58, y: 50, rating: 7.6, goals: 0, assists: 1, shots: 2, xg: 0.19, passes: "26 (82%)", tackles: 2, bio: "Cushioned the lay-off for Cole Palmer's equalizer." },
          { num: 24, name: "C. Palmer", pos: "LW", x: 57, y: 76, rating: 8.2, goals: 1, assists: 0, shots: 2, xg: 0.21, passes: "15 (87%)", tackles: 0, bio: "Scored 3 minutes after coming off the bench!" },
          { num: 9, name: "H. Kane", pos: "ST", x: 52, y: 50, rating: 6.5, goals: 0, assists: 0, shots: 2, xg: 0.09, passes: "11 (75%)", tackles: 0, card: "yellow", subOut: "61'", bio: "Early booking and replaced by Ollie Watkins." }
        ]
      },
      commentary: [
        { min: "90'", type: "chance", tag: "GOAL-LINE CLEARANCE", title: "Dani Olmo heads Marc Guéhi's header off the line!", text: "Unai Simón saves Declan Rice's first header, and Dani Olmo chests & heads Guéhi's follow-up off the goal line to seal Euro glory for Spain!" },
        { min: "86'", type: "goal", tag: "GOAL! 2-1", title: "MIKEL OYARZABAL WINS IT FOR SPAIN!", text: "Oyarzabal links with Cucurella and slides in at the near post to redirect Cucurella's first-time cross past Pickford! SAOT confirms he stayed onside by inches! (xG: 0.49)" },
        { min: "73'", type: "goal", tag: "GOAL! 1-1", title: "COLE PALMER DRILLS ENGLAND LEVEL FROM 22 YARDS!", text: "Bukayo Saka drives down the right and finds Jude Bellingham, who lays it back for substitute Cole Palmer to pass a laser finish into the bottom corner! (xG: 0.12)" },
        { min: "47'", type: "goal", tag: "GOAL! 1-0", title: "NICO WILLIAMS SWEEPS HOME YAMAL'S PASS!", text: "Lamine Yamal drifts inside from the right and threads a diagonal ball across the box for Nico Williams to finish first-time past Pickford! (xG: 0.38)" }
      ],
      h2h: {
        totalPlayed: 28,
        homeWins: 11,
        draws: 4,
        awayWins: 13,
        recent: [
          { date: "Jul 2024", comp: "UEFA Euro Final", score: "Spain 2 - 1 England" },
          { date: "Oct 2018", comp: "UEFA Nations League", score: "Spain 2 - 3 England" }
        ]
      }
    },

    {
      id: "m5",
      compId: "ISL",
      compName: "Indian Super League • Kolkata Derby Blockbuster",
      status: "LIVE",
      minute: 71,
      addedTime: 0,
      period: "2nd Half",
      dateLabel: "Today • Live",
      kickoff: "19:30 IST",
      venue: "Vivekananda Yuba Bharati Krirangan (Salt Lake Stadium), Kolkata",
      attendance: "64,850",
      referee: "Crystal John (IND)",
      weather: "27°C • Electric Kolkata Derby Atmosphere",
      buzzLine: "Jamie Maclaren & Greg Stewart put the Mariners ahead in front of 64,850 roaring fans in Kolkata!",
      winProb: { home: 66, draw: 21, away: 13 },
      home: {
        name: "Mohun Bagan SG",
        code: "MBSG",
        color: "#881337",
        accent: "#15803d",
        score: 2,
        htScore: 1,
        xg: 2.15,
        formation: "4-2-3-1",
        manager: "José Molina",
        scorers: ["J. Maclaren 29'", "G. Stewart 63'"],
        form: ["W", "W", "W", "D", "W"]
      },
      away: {
        name: "East Bengal FC",
        code: "EBFC",
        color: "#dc2626",
        accent: "#facc15",
        score: 1,
        htScore: 1,
        xg: 1.22,
        formation: "4-3-3",
        manager: "Oscar Bruzón",
        scorers: ["D. Diamantakos 42'"],
        form: ["L", "D", "W", "L", "W"]
      },
      stats: {
        possession: [56, 44],
        shots: [15, 10],
        shotsOnTarget: [7, 4],
        bigChances: [4, 2],
        corners: [7, 4],
        passes: [412, 319],
        passAccuracy: [86, 81],
        tackles: [18, 20],
        fouls: [12, 14],
        offsides: [2, 3],
        saves: [3, 5],
        ppda: [8.2, 10.6]
      },
      momentum: [25, 42, 58, 35, -20, -48, -30, 18, 40, 62, 55, 28, -22, 34, 46, 38],
      xgTimeline: {
        labels: ["0'", "15'", "29'", "42'", "45'", "63'", "71'"],
        home: [0.0, 0.34, 0.96, 1.12, 1.25, 1.94, 2.15],
        away: [0.0, 0.18, 0.31, 0.85, 0.92, 1.08, 1.22]
      },
      lineups: {
        home: [
          { num: 1, name: "Vishal Kaith", pos: "GK", x: 7, y: 50, rating: 7.7, goals: 0, assists: 0, shots: 0, xg: 0, passes: "22 (80%)", tackles: 0, bio: "ISL Golden Glove winner standing tall at Salt Lake Stadium." },
          { num: 44, name: "Asish Rai", pos: "RB", x: 22, y: 82, rating: 7.3, goals: 0, assists: 0, shots: 0, xg: 0, passes: "38 (85%)", tackles: 3, bio: "Relentless overlapper down the right touchline." },
          { num: 5, name: "Tom Aldred", pos: "CB", x: 19, y: 62, rating: 7.6, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "44 (90%)", tackles: 3, bio: "Commanding Scottish center-back." },
          { num: 21, name: "Alberto Rodríguez", pos: "CB", x: 19, y: 38, rating: 7.5, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "47 (91%)", tackles: 2, bio: "Spanish ball-playing defender." },
          { num: 15, name: "Subhasish Bose", pos: "LB", x: 22, y: 18, rating: 7.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "41 (87%)", tackles: 4, bio: "Mohun Bagan captain leading by example in the Kolkata Derby." },
          { num: 45, name: "Lalengmawia Ralte (Apuia)", pos: "CDM", x: 33, y: 58, rating: 8.2, goals: 0, assists: 0, shots: 1, xg: 0.07, passes: "56 (92%)", tackles: 4, bio: "Composed Indian international dictating central midfield." },
          { num: 6, name: "Anirudh Thapa", pos: "CM", x: 35, y: 40, rating: 7.6, goals: 0, assists: 1, shots: 1, xg: 0.09, passes: "44 (88%)", tackles: 2, bio: "Set-piece architect and tireless box-to-box runner." },
          { num: 17, name: "Liston Colaco", pos: "LW", x: 45, y: 20, rating: 8.1, goals: 0, assists: 1, shots: 3, xg: 0.32, passes: "28 (83%)", tackles: 0, bio: "Whipped in the cross for Jamie Maclaren's opener." },
          { num: 10, name: "Greg Stewart", pos: "CAM", x: 43, y: 50, rating: 8.9, goals: 1, assists: 0, shots: 4, xg: 0.64, passes: "36 (86%)", tackles: 0, bio: "Curled a sublime 63' left-footed strike into the top corner!" },
          { num: 11, name: "Manvir Singh", pos: "RW", x: 45, y: 80, rating: 7.7, goals: 0, assists: 0, shots: 1, xg: 0.18, passes: "26 (82%)", tackles: 0, bio: "Powerful winger stretching East Bengal's defense." },
          { num: 29, name: "Jamie Maclaren", pos: "ST", x: 49, y: 50, rating: 8.5, goals: 1, assists: 0, shots: 3, xg: 0.71, passes: "18 (84%)", tackles: 0, bio: "A-League all-time top scorer netting yet again in the Boro Derby!" }
        ],
        away: [
          { num: 13, name: "Prabhsukhan Gill", pos: "GK", x: 93, y: 50, rating: 7.1, goals: 0, assists: 0, shots: 0, xg: 0, passes: "24 (75%)", tackles: 0, bio: "Made 5 sharp saves under heavy Mariners pressure." },
          { num: 12, name: "Md. Rakip", pos: "RB", x: 78, y: 20, rating: 6.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "29 (80%)", tackles: 3, bio: "Tasked with tracking Liston Colaco." },
          { num: 4, name: "Anwar Ali", pos: "CB", x: 81, y: 40, rating: 7.2, goals: 0, assists: 0, shots: 1, xg: 0.05, passes: "39 (86%)", tackles: 3, bio: "Crisp long-range passing from the back." },
          { num: 5, name: "Hijazi Maher", pos: "CB", x: 81, y: 60, rating: 7.0, goals: 0, assists: 0, shots: 1, xg: 0.09, passes: "35 (84%)", tackles: 3, card: "yellow", bio: "Jordanian aerial powerhouse." },
          { num: 19, name: "Lalchungnunga", pos: "LB", x: 78, y: 80, rating: 6.9, goals: 0, assists: 0, shots: 0, xg: 0, passes: "27 (79%)", tackles: 4, bio: "Committed full-back in the derby battle." },
          { num: 21, name: "Saul Crespo", pos: "CDM", x: 69, y: 50, rating: 7.4, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "42 (86%)", tackles: 3, bio: "Spanish midfielder anchoring East Bengal." },
          { num: 8, name: "Jeakson Singh", pos: "CM", x: 66, y: 34, rating: 7.1, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "34 (85%)", tackles: 2, bio: "Shielding the middle third." },
          { num: 10, name: "Madih Talal", pos: "CAM", x: 60, y: 66, rating: 7.8, goals: 0, assists: 1, shots: 2, xg: 0.24, passes: "33 (83%)", tackles: 1, bio: "Crafted the equalizer for Diamantakos." },
          { num: 29, name: "Naorem Mahesh Singh", pos: "RW", x: 56, y: 22, rating: 7.3, goals: 0, assists: 0, shots: 1, xg: 0.14, passes: "22 (80%)", tackles: 1, bio: "Dangerous left-footed crosses from the wing." },
          { num: 11, name: "Nandhakumar Sekar", pos: "LW", x: 56, y: 78, rating: 7.0, goals: 0, assists: 0, shots: 1, xg: 0.12, passes: "19 (78%)", tackles: 0, bio: "Derby specialist looking for space in behind." },
          { num: 9, name: "D. Diamantakos", pos: "ST", x: 52, y: 50, rating: 7.9, goals: 1, assists: 0, shots: 2, xg: 0.44, passes: "16 (76%)", tackles: 0, bio: "Greek striker who leveled the match right before halftime." }
        ]
      },
      commentary: [
        { min: "63'", type: "goal", tag: "GOAL! 2-1", title: "GREG STEWART CURLS IN A SALT LAKE SCREAMER!", text: "Anirudh Thapa recycles possession to Greg Stewart 20 yards out — Stewart shifts past Saul Crespo and bends a gorgeous strike into the top-left corner! Green & Maroon flares light up Salt Lake Stadium! (xG: 0.28)" },
        { min: "42'", type: "goal", tag: "GOAL! 1-1", title: "DIAMANTAKOS EQUALIZES FOR EAST BENGAL!", text: "Madih Talal threads a clever pass into the six-yard box where Dimitrios Diamantakos sweeps home first-time past Vishal Kaith! (xG: 0.41)" },
        { min: "29'", type: "goal", tag: "GOAL! 1-0", title: "JAMIE MACLAREN DRAWS FIRST BLOOD IN THE DERBY!", text: "Liston Colaco skins his marker on the left and flashes a low cross across goal — Jamie Maclaren darts ahead of Hijazi Maher to tap home! (xG: 0.56)" }
      ],
      h2h: {
        totalPlayed: 396,
        homeWins: 132,
        draws: 124,
        awayWins: 140,
        recent: [
          { date: "Oct 2024", comp: "ISL", score: "East Bengal FC 0 - 2 Mohun Bagan SG" },
          { date: "Mar 2024", comp: "ISL", score: "East Bengal FC 1 - 3 Mohun Bagan SG" }
        ]
      }
    },

    {
      id: "m6",
      compId: "UCL",
      compName: "UEFA Champions League • League Phase MD4",
      status: "LIVE",
      minute: 56,
      addedTime: 0,
      period: "2nd Half",
      dateLabel: "Today • Live",
      kickoff: "21:00 CET",
      venue: "Anfield, Liverpool",
      attendance: "61,276",
      referee: "Daniele Orsato (ITA)",
      weather: "11°C • Floodlit Anfield Roar",
      buzzLine: "Mohamed Salah and Florian Wirtz trade goals under the Anfield lights!",
      winProb: { home: 49, draw: 28, away: 23 },
      home: {
        name: "Liverpool",
        code: "LIV",
        color: "#dc2626",
        accent: "#facc15",
        score: 1,
        htScore: 1,
        xg: 1.62,
        formation: "4-3-3",
        manager: "Arne Slot",
        scorers: ["M. Salah 34'"],
        form: ["W", "W", "W", "D", "W"]
      },
      away: {
        name: "Bayer Leverkusen",
        code: "B04",
        color: "#ef4444",
        accent: "#111827",
        score: 1,
        htScore: 0,
        xg: 1.38,
        formation: "3-4-2-1",
        manager: "Xabi Alonso",
        scorers: ["F. Wirtz 51'"],
        form: ["W", "D", "W", "D", "W"]
      },
      stats: {
        possession: [51, 49],
        shots: [12, 11],
        shotsOnTarget: [5, 5],
        bigChances: [3, 2],
        corners: [6, 4],
        passes: [388, 372],
        passAccuracy: [89, 90],
        tackles: [15, 16],
        fouls: [8, 9],
        offsides: [2, 1],
        saves: [4, 4],
        ppda: [7.5, 8.1]
      },
      momentum: [28, 40, 55, 32, -18, 45, 22, -30, -52, -40, 25, 38],
      xgTimeline: {
        labels: ["0'", "15'", "34'", "45'", "51'", "56'"],
        home: [0.0, 0.28, 0.94, 1.18, 1.35, 1.62],
        away: [0.0, 0.22, 0.41, 0.68, 1.24, 1.38]
      },
      lineups: {
        home: [
          { num: 62, name: "C. Kelleher", pos: "GK", x: 7, y: 50, rating: 7.4, goals: 0, assists: 0, shots: 0, xg: 0, passes: "24 (85%)", tackles: 0, bio: "Calm shot-stopper deputizing at Anfield." },
          { num: 66, name: "T. Alexander-Arnold", pos: "RB", x: 24, y: 82, rating: 7.8, goals: 0, assists: 1, shots: 1, xg: 0.06, passes: "52 (89%)", tackles: 2, bio: "Laser outside-of-the-boot pass to release Salah." },
          { num: 5, name: "I. Konaté", pos: "CB", x: 19, y: 62, rating: 7.5, goals: 0, assists: 0, shots: 0, xg: 0, passes: "48 (92%)", tackles: 3, bio: "Commanding physical presence." },
          { num: 4, name: "V. van Dijk", pos: "CB", x: 19, y: 38, rating: 7.7, goals: 0, assists: 0, shots: 1, xg: 0.09, passes: "54 (94%)", tackles: 2, bio: "Colossus marshaling Liverpool's back four." },
          { num: 26, name: "A. Robertson", pos: "LB", x: 24, y: 18, rating: 7.2, goals: 0, assists: 0, shots: 0, xg: 0, passes: "39 (87%)", tackles: 3, bio: "Relentless left-flank runner." },
          { num: 38, name: "R. Gravenberch", pos: "CDM", x: 32, y: 50, rating: 8.1, goals: 0, assists: 0, shots: 1, xg: 0.07, passes: "58 (93%)", tackles: 3, bio: "Gliding past pressers under Arne Slot." },
          { num: 10, name: "A. Mac Allister", pos: "CM", x: 36, y: 66, rating: 7.6, goals: 0, assists: 0, shots: 2, xg: 0.18, passes: "46 (90%)", tackles: 2, bio: "Tempo controller in central midfield." },
          { num: 17, name: "C. Jones", pos: "CM", x: 36, y: 34, rating: 7.4, goals: 0, assists: 0, shots: 1, xg: 0.12, passes: "42 (91%)", tackles: 1, bio: "Sharp ball retention in the left half-space." },
          { num: 11, name: "M. Salah", pos: "RW", x: 46, y: 78, rating: 8.6, goals: 1, assists: 0, shots: 3, xg: 0.62, passes: "25 (82%)", tackles: 0, bio: "Trademark curler into the Kop end net at 34'." },
          { num: 7, name: "L. Díaz", pos: "LW", x: 46, y: 22, rating: 7.7, goals: 0, assists: 0, shots: 2, xg: 0.28, passes: "29 (84%)", tackles: 0, bio: "Electric dribbling on the left wing." },
          { num: 18, name: "C. Gakpo", pos: "ST", x: 49, y: 50, rating: 7.2, goals: 0, assists: 0, shots: 1, xg: 0.20, passes: "19 (80%)", tackles: 0, bio: "Linking play across the front three." }
        ],
        away: [
          { num: 1, name: "L. Hrádecký", pos: "GK", x: 93, y: 50, rating: 7.2, goals: 0, assists: 0, shots: 0, xg: 0, passes: "26 (81%)", tackles: 0, bio: "Leverkusen skipper between the posts." },
          { num: 12, name: "E. Tapsoba", pos: "CB", x: 81, y: 32, rating: 7.3, goals: 0, assists: 0, shots: 0, xg: 0, passes: "51 (92%)", tackles: 2, bio: "Progressive right-sided stopper." },
          { num: 4, name: "J. Tah", pos: "CB", x: 82, y: 50, rating: 7.4, goals: 0, assists: 0, shots: 0, xg: 0, passes: "56 (94%)", tackles: 3, bio: "Central anchor of Xabi Alonso's back three." },
          { num: 3, name: "P. Hincapié", pos: "CB", x: 81, y: 68, rating: 7.1, goals: 0, assists: 0, shots: 0, xg: 0, passes: "45 (90%)", tackles: 3, bio: "Aggressive left-footed defender." },
          { num: 30, name: "J. Frimpong", pos: "RM", x: 68, y: 18, rating: 7.6, goals: 0, assists: 1, shots: 2, xg: 0.24, passes: "28 (83%)", tackles: 2, bio: "Flying wing-back who assisted Wirtz." },
          { num: 34, name: "G. Xhaka", pos: "CM", x: 69, y: 42, rating: 7.9, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "69 (93%)", tackles: 2, bio: "Metronomic quarter-back in midfield." },
          { num: 8, name: "R. Andrich", pos: "CM", x: 69, y: 58, rating: 7.2, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "44 (89%)", tackles: 3, bio: "Physical enforcer next to Xhaka." },
          { num: 20, name: "A. Grimaldo", pos: "LM", x: 68, y: 82, rating: 7.7, goals: 0, assists: 0, shots: 2, xg: 0.19, passes: "41 (87%)", tackles: 1, bio: "Dead-ball specialist and inverted wing-back." },
          { num: 10, name: "F. Wirtz", pos: "CAM", x: 58, y: 62, rating: 8.7, goals: 1, assists: 0, shots: 3, xg: 0.49, passes: "38 (88%)", tackles: 0, bio: "Silky 51' equalizer on Xabi Alonso's return to Anfield." },
          { num: 11, name: "M. Terrier", pos: "CAM", x: 58, y: 38, rating: 7.0, goals: 0, assists: 0, shots: 1, xg: 0.12, passes: "24 (82%)", tackles: 0, bio: "Operating between the lines." },
          { num: 22, name: "V. Boniface", pos: "ST", x: 52, y: 50, rating: 7.3, goals: 0, assists: 0, shots: 1, xg: 0.20, passes: "18 (79%)", tackles: 0, bio: "Dynamic number 9 occupying Konaté and van Dijk." }
        ]
      },
      commentary: [
        { min: "51'", type: "goal", tag: "GOAL! 1-1", title: "FLORIAN WIRTZ SILENCES ANFIELD WITH A GEM!", text: "Jeremie Frimpong bursts down the right and squares to Florian Wirtz, who takes one velvet touch and slots inside the far post! (xG: 0.39)" },
        { min: "34'", type: "goal", tag: "GOAL! 1-0", title: "MOHAMED SALAH CURLS IN AN ANFIELD CLASSIC!", text: "Trent Alexander-Arnold releases Salah down the right channel; the Egyptian King cuts onto his left and bends it past Hrádecký! (xG: 0.44)" }
      ],
      h2h: {
        totalPlayed: 6,
        homeWins: 4,
        draws: 1,
        awayWins: 1,
        recent: [
          { date: "Mar 2005", comp: "UCL R16", score: "Bayer Leverkusen 1 - 3 Liverpool" }
        ]
      }
    },

    {
      id: "m7",
      compId: "EPL",
      compName: "Premier League • Title Six-Pointer",
      status: "UPCOMING",
      minute: 0,
      addedTime: 0,
      period: "Kickoff 16:30 GMT",
      dateLabel: "Tomorrow",
      kickoff: "16:30 GMT",
      venue: "Emirates Stadium, London",
      attendance: "60,704 (Sold Out)",
      referee: "Michael Oliver (ENG)",
      weather: "14°C • Light Rain Expected",
      buzzLine: "Saka & Ødegaard host Haaland & Foden in a season-defining Premier League showdown!",
      winProb: { home: 41, draw: 29, away: 30 },
      home: {
        name: "Arsenal",
        code: "ARS",
        color: "#ef4444",
        accent: "#ffffff",
        score: 0,
        htScore: 0,
        xg: 0.0,
        formation: "4-3-3",
        manager: "Mikel Arteta",
        scorers: ["Kickoff Tomorrow 16:30 GMT"],
        form: ["W", "D", "W", "W", "D"]
      },
      away: {
        name: "Manchester City",
        code: "MCI",
        color: "#38bdf8",
        accent: "#ffffff",
        score: 0,
        htScore: 0,
        xg: 0.0,
        formation: "4-1-4-1",
        manager: "Pep Guardiola",
        scorers: ["Haaland 11 League Goals"],
        form: ["W", "W", "D", "W", "W"]
      },
      stats: {
        possession: [49, 51],
        shots: [14, 15],
        shotsOnTarget: [6, 6],
        bigChances: [3, 3],
        corners: [7, 6],
        passes: [480, 540],
        passAccuracy: [89, 92],
        tackles: [18, 15],
        fouls: [11, 9],
        offsides: [2, 1],
        saves: [4, 4],
        ppda: [7.4, 7.1]
      },
      momentum: [10, 20, -15, 25, -20, 30, -25, 15],
      xgTimeline: {
        labels: ["Avg 15'", "Avg 30'", "Avg 45'", "Avg 60'", "Avg 75'", "Avg 90'"],
        home: [0.28, 0.59, 0.92, 1.31, 1.68, 2.04],
        away: [0.31, 0.64, 0.98, 1.42, 1.79, 2.15]
      },
      lineups: {
        home: [
          { num: 22, name: "D. Raya", pos: "GK", x: 7, y: 50, rating: 7.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "32 (85%)", tackles: 0, bio: "Premier League Golden Glove holder." },
          { num: 4, name: "B. White", pos: "RB", x: 22, y: 82, rating: 7.5, goals: 0, assists: 0, shots: 0, xg: 0, passes: "48 (89%)", tackles: 3, bio: "Overlapping & inverted right-back." },
          { num: 2, name: "W. Saliba", pos: "CB", x: 19, y: 62, rating: 8.1, goals: 0, assists: 0, shots: 0, xg: 0, passes: "62 (94%)", tackles: 3, bio: "Rolls-Royce defender going head-to-head with Haaland." },
          { num: 6, name: "Gabriel", pos: "CB", x: 19, y: 38, rating: 8.0, goals: 0, assists: 0, shots: 1, xg: 0.18, passes: "56 (92%)", tackles: 3, bio: "Set-piece header specialist." },
          { num: 12, name: "J. Timber", pos: "LB", x: 22, y: 18, rating: 7.6, goals: 0, assists: 0, shots: 0, xg: 0, passes: "44 (90%)", tackles: 3, bio: "Versatile Dutch full-back." },
          { num: 41, name: "D. Rice", pos: "CDM", x: 32, y: 50, rating: 8.2, goals: 0, assists: 0, shots: 1, xg: 0.11, passes: "64 (92%)", tackles: 4, bio: "Arsenal's midfield powerhouse." },
          { num: 8, name: "M. Ødegaard", pos: "CM", x: 38, y: 68, rating: 8.5, goals: 0, assists: 0, shots: 2, xg: 0.24, passes: "58 (90%)", tackles: 2, bio: "Club captain and chief chance creator." },
          { num: 23, name: "M. Merino", pos: "CM", x: 37, y: 32, rating: 7.4, goals: 0, assists: 0, shots: 1, xg: 0.14, passes: "45 (88%)", tackles: 3, bio: "Duel-winning left-sided 8." },
          { num: 7, name: "B. Saka", pos: "RW", x: 46, y: 80, rating: 8.6, goals: 0, assists: 0, shots: 3, xg: 0.44, passes: "36 (86%)", tackles: 1, bio: "Arsenal's talisman on the right wing." },
          { num: 11, name: "G. Martinelli", pos: "LW", x: 46, y: 20, rating: 7.7, goals: 0, assists: 0, shots: 2, xg: 0.29, passes: "28 (83%)", tackles: 1, bio: "Direct pace in behind." },
          { num: 29, name: "K. Havertz", pos: "ST", x: 49, y: 50, rating: 7.9, goals: 0, assists: 0, shots: 2, xg: 0.38, passes: "26 (82%)", tackles: 1, bio: "Intelligent false-nine focal point." }
        ],
        away: [
          { num: 31, name: "Ederson", pos: "GK", x: 93, y: 50, rating: 7.7, goals: 0, assists: 0, shots: 0, xg: 0, passes: "38 (91%)", tackles: 0, bio: "Pinpoint 70-yard distribution." },
          { num: 82, name: "R. Lewis", pos: "RB", x: 78, y: 20, rating: 7.5, goals: 0, assists: 0, shots: 0, xg: 0, passes: "52 (93%)", tackles: 2, bio: "Inverting into central midfield." },
          { num: 3, name: "Rúben Dias", pos: "CB", x: 81, y: 40, rating: 7.9, goals: 0, assists: 0, shots: 0, xg: 0, passes: "71 (95%)", tackles: 3, bio: "Defensive leader." },
          { num: 25, name: "M. Akanji", pos: "CB", x: 81, y: 60, rating: 7.6, goals: 0, assists: 0, shots: 0, xg: 0, passes: "68 (94%)", tackles: 2, bio: "Fast recovery stopper." },
          { num: 24, name: "J. Gvardiol", pos: "LB", x: 76, y: 80, rating: 8.1, goals: 0, assists: 0, shots: 2, xg: 0.19, passes: "58 (91%)", tackles: 3, bio: "Goalscoring left-back." },
          { num: 8, name: "M. Kovačić", pos: "CDM", x: 69, y: 50, rating: 7.6, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "69 (94%)", tackles: 3, bio: "Press-resistant number 6." },
          { num: 20, name: "Bernardo Silva", pos: "RM", x: 60, y: 24, rating: 8.1, goals: 0, assists: 0, shots: 1, xg: 0.16, passes: "58 (92%)", tackles: 2, bio: "Relentless work-rate and close control." },
          { num: 17, name: "K. De Bruyne", pos: "CAM", x: 59, y: 42, rating: 8.7, goals: 0, assists: 0, shots: 2, xg: 0.31, passes: "44 (87%)", tackles: 1, bio: "Premier League assist king." },
          { num: 47, name: "P. Foden", pos: "CAM", x: 59, y: 58, rating: 8.4, goals: 0, assists: 0, shots: 3, xg: 0.38, passes: "46 (89%)", tackles: 1, bio: "Reigning PFA Player of the Year." },
          { num: 11, name: "J. Doku", pos: "LM", x: 57, y: 78, rating: 7.8, goals: 0, assists: 0, shots: 2, xg: 0.22, passes: "32 (85%)", tackles: 1, bio: "Explosive 1v1 take-on specialist." },
          { num: 9, name: "E. Haaland", pos: "ST", x: 52, y: 50, rating: 8.9, goals: 0, assists: 0, shots: 4, xg: 0.81, passes: "16 (78%)", tackles: 0, bio: "Averaging 1.05 goals per 90 minutes." }
        ]
      },
      commentary: [
        { min: "PRE", type: "tactical", tag: "TACTICAL PREVIEW", title: "Saliba & Gabriel vs Erling Haaland: The Key Battle", text: "Arsenal kept two league clean sheets against Manchester City in 2023/24 by compacting central zones and forcing play wide. Can Pep Guardiola's inverted full-backs unlock the gunners tomorrow?" },
        { min: "PRE", type: "tactical", tag: "TEAM NEWS", title: "Martin Ødegaard & Kevin De Bruyne passed fit to start", text: "Both creative captains trained fully today ahead of Sunday's blockbuster at the Emirates." }
      ],
      h2h: {
        totalPlayed: 211,
        homeWins: 100,
        draws: 46,
        awayWins: 65,
        recent: [
          { date: "Sep 2024", comp: "Premier League", score: "Manchester City 2 - 2 Arsenal" },
          { date: "Mar 2024", comp: "Premier League", score: "Manchester City 0 - 0 Arsenal" },
          { date: "Oct 2023", comp: "Premier League", score: "Arsenal 1 - 0 Manchester City" }
        ]
      }
    },

    {
      id: "m8",
      compId: "SERIEA",
      compName: "Serie A Enilive • Derby d'Italia",
      status: "FT",
      minute: 90,
      addedTime: 5,
      period: "Full Time",
      dateLabel: "Yesterday",
      kickoff: "18:00 CET",
      venue: "San Siro (Stadio Giuseppe Meazza), Milan",
      attendance: "75,552",
      referee: "Marco Guida (ITA)",
      weather: "15°C • Clear Evening",
      buzzLine: "Eight-goal San Siro classic! Kenan Yıldız's late brace rescues a 4-4 draw for Juventus against Inter!",
      winProb: { home: 33, draw: 34, away: 33 },
      home: {
        name: "Inter Milan",
        code: "INT",
        color: "#2563eb",
        accent: "#111827",
        score: 4,
        htScore: 3,
        xg: 3.18,
        formation: "3-5-2",
        manager: "Simone Inzaghi",
        scorers: ["P. Zieliński 15' (P), 37' (P)", "H. Mkhitaryan 35'", "D. Dumfries 53'"],
        form: ["D", "W", "W", "W", "W"]
      },
      away: {
        name: "Juventus",
        code: "JUV",
        color: "#f8fafc",
        accent: "#111827",
        score: 4,
        htScore: 2,
        xg: 2.41,
        formation: "4-2-3-1",
        manager: "Thiago Motta",
        scorers: ["D. Vlahović 20'", "T. Weah 26'", "K. Yıldız 71', 82'"],
        form: ["D", "W", "D", "W", "D"]
      },
      stats: {
        possession: [47, 53],
        shots: [18, 12],
        shotsOnTarget: [9, 6],
        bigChances: [6, 4],
        corners: [8, 5],
        passes: [425, 478],
        passAccuracy: [88, 90],
        tackles: [17, 15],
        fouls: [13, 14],
        offsides: [2, 1],
        saves: [2, 5],
        ppda: [9.1, 8.4]
      },
      momentum: [45, -35, -48, 52, 60, 48, 35, -55, -65, 20],
      xgTimeline: {
        labels: ["0'", "15'", "26'", "37'", "53'", "71'", "82'", "90'"],
        home: [0.0, 0.79, 0.92, 2.15, 2.78, 2.95, 3.08, 3.18],
        away: [0.0, 0.12, 1.05, 1.18, 1.32, 1.84, 2.35, 2.41]
      },
      lineups: {
        home: [
          { num: 1, name: "Y. Sommer", pos: "GK", x: 7, y: 50, rating: 6.4, goals: 0, assists: 0, shots: 0, xg: 0, passes: "26 (86%)", tackles: 0, bio: "Swiss keeper beaten four times in an open classic." },
          { num: 28, name: "B. Pavard", pos: "CB", x: 20, y: 72, rating: 6.7, goals: 0, assists: 0, shots: 0, xg: 0, passes: "44 (90%)", tackles: 2, bio: "Right-sided center-back." },
          { num: 6, name: "S. de Vrij", pos: "CB", x: 18, y: 50, rating: 6.8, goals: 0, assists: 0, shots: 0, xg: 0, passes: "49 (92%)", tackles: 2, bio: "Central stopper." },
          { num: 95, name: "A. Bastoni", pos: "CB", x: 20, y: 28, rating: 7.4, goals: 0, assists: 0, shots: 0, xg: 0, passes: "58 (91%)", tackles: 3, bio: "Left-footed ball-playing defender." },
          { num: 2, name: "D. Dumfries", pos: "RWB", x: 36, y: 84, rating: 8.3, goals: 1, assists: 0, shots: 3, xg: 0.54, passes: "28 (82%)", tackles: 2, bio: "Scored at 53' and won a penalty." },
          { num: 23, name: "N. Barella", pos: "CM", x: 35, y: 64, rating: 7.8, goals: 0, assists: 0, shots: 2, xg: 0.21, passes: "52 (90%)", tackles: 3, bio: "Dynamic Italian midfielder." },
          { num: 7, name: "P. Zieliński", pos: "CDM", x: 31, y: 50, rating: 8.6, goals: 2, assists: 0, shots: 3, xg: 1.62, passes: "54 (93%)", tackles: 2, bio: "Converted two first-half penalties cleanly." },
          { num: 22, name: "H. Mkhitaryan", pos: "CM", x: 35, y: 36, rating: 8.2, goals: 1, assists: 0, shots: 2, xg: 0.32, passes: "46 (89%)", tackles: 2, bio: "Scored a slick one-two goal at 35'." },
          { num: 32, name: "F. Dimarco", pos: "LWB", x: 36, y: 16, rating: 7.6, goals: 0, assists: 0, shots: 2, xg: 0.18, passes: "39 (85%)", tackles: 2, bio: "Dangerous left-footed delivery." },
          { num: 9, name: "M. Thuram", pos: "ST", x: 48, y: 60, rating: 7.9, goals: 0, assists: 1, shots: 2, xg: 0.19, passes: "21 (81%)", tackles: 0, bio: "Won the first penalty and set up Mkhitaryan." },
          { num: 10, name: "L. Martínez", pos: "ST", x: 48, y: 40, rating: 7.2, goals: 0, assists: 0, shots: 2, xg: 0.12, passes: "24 (82%)", tackles: 1, bio: "Inter captain leading the press." }
        ],
        away: [
          { num: 29, name: "M. Di Gregorio", pos: "GK", x: 93, y: 50, rating: 7.1, goals: 0, assists: 0, shots: 0, xg: 0, passes: "29 (84%)", tackles: 0, bio: "Made 5 big second-half saves to keep Juve within reach." },
          { num: 27, name: "A. Cambiaso", pos: "RB", x: 78, y: 20, rating: 7.5, goals: 0, assists: 0, shots: 1, xg: 0.06, passes: "52 (91%)", tackles: 3, bio: "Tactically flexible full-back." },
          { num: 15, name: "P. Kalulu", pos: "CB", x: 81, y: 40, rating: 6.4, goals: 0, assists: 0, shots: 0, xg: 0, passes: "48 (92%)", tackles: 2, bio: "Tested by Thuram's pace." },
          { num: 6, name: "Danilo", pos: "CB", x: 81, y: 60, rating: 6.3, goals: 0, assists: 0, shots: 0, xg: 0, passes: "46 (90%)", tackles: 2, bio: "Experienced Brazilian defender." },
          { num: 32, name: "J. Cabal", pos: "LB", x: 78, y: 80, rating: 7.2, goals: 0, assists: 1, shots: 0, xg: 0, passes: "39 (87%)", tackles: 2, bio: "Delivered the lofted pass for Juve's opener." },
          { num: 5, name: "M. Locatelli", pos: "CDM", x: 69, y: 42, rating: 7.4, goals: 0, assists: 0, shots: 1, xg: 0.08, passes: "62 (91%)", tackles: 3, bio: "Deep-lying distributor." },
          { num: 21, name: "N. Fagioli", pos: "CM", x: 68, y: 58, rating: 7.1, goals: 0, assists: 0, shots: 0, xg: 0, passes: "44 (90%)", tackles: 2, bio: "Neat ball retention." },
          { num: 7, name: "F. Conceição", pos: "RW", x: 56, y: 20, rating: 8.3, goals: 0, assists: 1, shots: 2, xg: 0.24, passes: "31 (85%)", tackles: 1, bio: "Tormented Inter's left side and assisted Weah." },
          { num: 16, name: "W. McKennie", pos: "CAM", x: 59, y: 50, rating: 7.8, goals: 0, assists: 2, shots: 1, xg: 0.14, passes: "28 (84%)", tackles: 1, bio: "Two assists inside the box." },
          { num: 10, name: "K. Yıldız", pos: "LW", x: 56, y: 80, rating: 9.1, goals: 2, assists: 0, shots: 3, xg: 0.72, passes: "22 (88%)", tackles: 0, bio: "19-year-old super-sub who scored at 71' and 82'!" },
          { num: 9, name: "D. Vlahović", pos: "ST", x: 52, y: 50, rating: 7.7, goals: 1, assists: 0, shots: 2, xg: 0.64, passes: "16 (78%)", tackles: 0, bio: "Slotted home Juve's 20' equalizer." }
        ]
      },
      commentary: [
        { min: "82'", type: "goal", tag: "GOAL! 4-4", title: "KENAN YILDIZ COMPLETE THE COMEBACK AT SAN SIRO!", text: "Francisco Conceição's cross reaches Kenan Yıldız at the back post — the Turkish teenager fires past Sommer to make it 4-4 in the Derby d'Italia! (xG: 0.38)" },
        { min: "71'", type: "goal", tag: "GOAL! 4-3", title: "YILDIZ PULLS ONE BACK ON THE COUNTER!", text: "Just minutes after entering the pitch, Kenan Yıldız drills a low left-footed shot across Yann Sommer into the bottom corner! (xG: 0.34)" }
      ],
      h2h: {
        totalPlayed: 252,
        homeWins: 77,
        draws: 63,
        awayWins: 112,
        recent: [
          { date: "Oct 2024", comp: "Serie A", score: "Inter Milan 4 - 4 Juventus" },
          { date: "Feb 2024", comp: "Serie A", score: "Inter Milan 1 - 0 Juventus" }
        ]
      }
    }
  ],

  standings: {
    LALIGA: {
      name: "LaLiga EA Sports 2026/27",
      zoneNote: "Top 4: UEFA Champions League • 5th: Europa League • 18–20th: Relegation",
      rows: [
        { pos: 1, team: "FC Barcelona", p: 11, w: 9, d: 0, l: 2, gf: 34, ga: 12, gd: "+22", xgd: "+18.4", pts: 27, form: ["W", "W", "W", "L", "L"], zone: "ucl", next: "vs ESP" },
        { pos: 2, team: "Real Madrid", p: 11, w: 8, d: 3, l: 0, gf: 25, ga: 8, gd: "+17", xgd: "+16.9", pts: 27, form: ["W", "W", "D", "W", "W"], zone: "ucl", next: "at VAL" },
        { pos: 3, team: "Villarreal CF", p: 11, w: 6, d: 3, l: 2, gf: 20, ga: 18, gd: "+2", xgd: "+3.8", pts: 21, form: ["W", "D", "W", "L", "W"], zone: "ucl", next: "vs RAY" },
        { pos: 4, team: "Atlético Madrid", p: 11, w: 5, d: 5, l: 1, gf: 17, ga: 7, gd: "+10", xgd: "+8.9", pts: 20, form: ["D", "W", "D", "W", "L"], zone: "ucl", next: "vs LUD" },
        { pos: 5, team: "Athletic Club", p: 11, w: 5, d: 3, l: 3, gf: 18, ga: 12, gd: "+6", xgd: "+5.2", pts: 18, form: ["W", "D", "L", "W", "D"], zone: "uel", next: "vs BET" },
        { pos: 6, team: "Real Betis", p: 11, w: 5, d: 3, l: 3, gf: 13, ga: 10, gd: "+3", xgd: "+4.1", pts: 18, form: ["W", "W", "L", "D", "W"], zone: "uecl", next: "at ATH" },
        { pos: 7, team: "Osasuna", p: 11, w: 5, d: 3, l: 3, gf: 16, ga: 16, gd: "0", xgd: "-1.2", pts: 18, form: ["W", "D", "W", "L", "W"], zone: "", next: "vs VLD" },
        { pos: 8, team: "Real Sociedad", p: 11, w: 4, d: 3, l: 4, gf: 10, ga: 10, gd: "0", xgd: "+2.4", pts: 15, form: ["D", "W", "W", "L", "W"], zone: "", next: "at SEV" }
      ]
    },
    BUNDESLIGA: {
      name: "Bundesliga 2026/27",
      zoneNote: "Top 4: UEFA Champions League • 5th: Europa League • 16–18th: Relegation Playoff/Drop",
      rows: [
        { pos: 1, team: "Bayern Munich", p: 9, w: 7, d: 2, l: 0, gf: 32, ga: 8, gd: "+24", xgd: "+19.6", pts: 23, form: ["W", "W", "D", "W", "W"], zone: "ucl", next: "at STP" },
        { pos: 2, team: "RB Leipzig", p: 9, w: 6, d: 2, l: 1, gf: 15, ga: 5, gd: "+10", xgd: "+8.2", pts: 20, form: ["W", "W", "W", "W", "L"], zone: "ucl", next: "vs BMG" },
        { pos: 3, team: "Eintracht Frankfurt", p: 9, w: 5, d: 2, l: 2, gf: 23, ga: 14, gd: "+9", xgd: "+6.4", pts: 17, form: ["W", "D", "L", "D", "W"], zone: "ucl", next: "at STU" },
        { pos: 4, team: "Bayer Leverkusen", p: 9, w: 4, d: 4, l: 1, gf: 20, ga: 15, gd: "+5", xgd: "+9.1", pts: 16, form: ["W", "D", "W", "D", "D"], zone: "ucl", next: "at BOC" },
        { pos: 5, team: "SC Freiburg", p: 9, w: 5, d: 1, l: 3, gf: 13, ga: 11, gd: "+2", xgd: "+3.1", pts: 16, form: ["L", "W", "W", "L", "D"], zone: "uel", next: "at UNB" },
        { pos: 6, team: "Union Berlin", p: 9, w: 4, d: 3, l: 2, gf: 9, ga: 8, gd: "+1", xgd: "+0.8", pts: 15, form: ["W", "W", "D", "L", "L"], zone: "uecl", next: "vs FRE" },
        { pos: 7, team: "Borussia Dortmund", p: 9, w: 4, d: 1, l: 4, gf: 17, ga: 17, gd: "0", xgd: "+2.5", pts: 13, form: ["L", "W", "L", "W", "L"], zone: "", next: "at M05" }
      ]
    },
    EPL: {
      name: "Premier League 2026/27",
      zoneNote: "Top 4: UEFA Champions League • 5th: Europa League • 18–20th: Relegation",
      rows: [
        { pos: 1, team: "Liverpool", p: 10, w: 8, d: 1, l: 1, gf: 21, ga: 6, gd: "+15", xgd: "+14.2", pts: 25, form: ["W", "W", "W", "D", "W"], zone: "ucl", next: "vs AVL" },
        { pos: 2, team: "Manchester City", p: 10, w: 7, d: 2, l: 1, gf: 22, ga: 11, gd: "+11", xgd: "+12.8", pts: 23, form: ["D", "W", "W", "W", "L"], zone: "ucl", next: "at ARS" },
        { pos: 3, team: "Arsenal", p: 10, w: 6, d: 3, l: 1, gf: 18, ga: 10, gd: "+8", xgd: "+9.4", pts: 21, form: ["W", "W", "L", "D", "W"], zone: "ucl", next: "vs MCI" },
        { pos: 4, team: "Chelsea", p: 10, w: 5, d: 3, l: 2, gf: 20, ga: 12, gd: "+8", xgd: "+7.6", pts: 18, form: ["W", "D", "L", "W", "D"], zone: "ucl", next: "vs NEW" },
        { pos: 5, team: "Aston Villa", p: 10, w: 5, d: 3, l: 2, gf: 17, ga: 15, gd: "+2", xgd: "+3.9", pts: 18, form: ["D", "D", "W", "L", "L"], zone: "uel", next: "at LIV" },
        { pos: 6, team: "Tottenham Hotspur", p: 10, w: 5, d: 1, l: 4, gf: 22, ga: 11, gd: "+11", xgd: "+9.1", pts: 16, form: ["W", "L", "W", "L", "W"], zone: "", next: "vs IPS" }
      ]
    },
    UCL: {
      name: "UEFA Champions League • 36-Team League Phase",
      zoneNote: "1st–8th: Direct R16 • 9th–24th: Knockout Play-offs • 25th–36th: Eliminated",
      rows: [
        { pos: 1, team: "Liverpool", p: 4, w: 3, d: 1, l: 0, gf: 9, ga: 2, gd: "+7", xgd: "+6.4", pts: 10, form: ["W", "W", "W", "D"], zone: "ucl", next: "vs RMA" },
        { pos: 2, team: "Sporting CP", p: 4, w: 3, d: 1, l: 0, gf: 9, ga: 2, gd: "+7", xgd: "+5.8", pts: 10, form: ["W", "D", "W", "W"], zone: "ucl", next: "vs ARS" },
        { pos: 3, team: "AS Monaco", p: 4, w: 3, d: 1, l: 0, gf: 10, ga: 4, gd: "+6", xgd: "+4.9", pts: 10, form: ["W", "D", "W", "W"], zone: "ucl", next: "vs BEN" },
        { pos: 4, team: "FC Barcelona", p: 4, w: 3, d: 0, l: 1, gf: 15, ga: 5, gd: "+10", xgd: "+8.2", pts: 9, form: ["L", "W", "W", "W"], zone: "ucl", next: "vs BRE" },
        { pos: 5, team: "Inter Milan", p: 4, w: 3, d: 1, l: 0, gf: 6, ga: 0, gd: "+6", xgd: "+5.1", pts: 10, form: ["D", "W", "W", "W"], zone: "ucl", next: "vs RBL" },
        { pos: 6, team: "Bayer Leverkusen", p: 4, w: 2, d: 2, l: 0, gf: 7, ga: 2, gd: "+5", xgd: "+4.3", pts: 8, form: ["W", "W", "D", "D"], zone: "ucl", next: "vs SAL" },
        { pos: 7, team: "Real Madrid", p: 4, w: 2, d: 1, l: 1, gf: 9, ga: 6, gd: "+3", xgd: "+4.1", pts: 7, form: ["W", "L", "W", "D"], zone: "uel", next: "at LIV" }
      ]
    },
    ISL: {
      name: "Indian Super League 2026/27",
      zoneNote: "1st: League Winners Shield & AFC Spot • Top 6: Championship Playoffs",
      rows: [
        { pos: 1, team: "Mohun Bagan SG", p: 7, w: 5, d: 1, l: 1, gf: 16, ga: 7, gd: "+9", xgd: "+7.8", pts: 16, form: ["W", "W", "W", "D", "W"], zone: "ucl", next: "vs OFC" },
        { pos: 2, team: "Bengaluru FC", p: 7, w: 5, d: 1, l: 1, gf: 13, ga: 4, gd: "+9", xgd: "+6.5", pts: 16, form: ["W", "D", "W", "W", "L"], zone: "uel", next: "at FCG" },
        { pos: 3, team: "NorthEast United", p: 7, w: 4, d: 2, l: 1, gf: 15, ga: 9, gd: "+6", xgd: "+4.9", pts: 14, form: ["D", "W", "W", "L", "W"], zone: "uel", next: "vs BFC" },
        { pos: 4, team: "Mumbai City FC", p: 7, w: 3, d: 3, l: 1, gf: 10, ga: 7, gd: "+3", xgd: "+3.4", pts: 12, form: ["D", "W", "D", "W", "W"], zone: "uel", next: "vs KBFC" },
        { pos: 5, team: "Kerala Blasters", p: 7, w: 3, d: 2, l: 2, gf: 12, ga: 11, gd: "+1", xgd: "+1.8", pts: 11, form: ["W", "D", "W", "L", "L"], zone: "uel", next: "at MCFC" },
        { pos: 6, team: "East Bengal FC", p: 7, w: 2, d: 1, l: 4, gf: 8, ga: 12, gd: "-4", xgd: "-2.1", pts: 7, form: ["L", "D", "W", "L", "L"], zone: "", next: "vs MSC" }
      ]
    }
  },

  bracket: {
    quarterFinals: [
      { id: "qf1", teamA: "Spain 🇪🇸", scoreA: 2, teamB: "Germany 🇩🇪", scoreB: 1, winner: "Spain 🇪🇸" },
      { id: "qf2", teamA: "Argentina 🇦🇷", scoreA: 2, teamB: "France 🇫🇷", scoreB: 2, winner: "Argentina 🇦🇷" },
      { id: "qf3", teamA: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿", scoreA: 2, teamB: "Brazil 🇧🇷", scoreB: 1, winner: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { id: "qf4", teamA: "Portugal 🇵🇹", scoreA: 1, teamB: "Netherlands 🇳🇱", scoreB: 2, winner: "Netherlands 🇳🇱" }
    ]
  },

  playerStats: [
    { id: "p1", name: "Harry Kane", club: "Bayern Munich", comp: "Bundesliga", goals: 14, assists: 6, xg: 11.4, xa: 4.2, minsPerGoal: 58, shotAcc: 74, keyPasses: 22, dribbles: 14, rating: 8.68 },
    { id: "p2", name: "Robert Lewandowski", club: "FC Barcelona", comp: "LaLiga", goals: 14, assists: 2, xg: 12.1, xa: 2.1, minsPerGoal: 64, shotAcc: 69, keyPasses: 15, dribbles: 11, rating: 8.32 },
    { id: "p3", name: "Erling Haaland", club: "Manchester City", comp: "Premier League", goals: 12, assists: 1, xg: 11.8, xa: 1.4, minsPerGoal: 75, shotAcc: 71, keyPasses: 9, dribbles: 8, rating: 8.21 },
    { id: "p4", name: "Kylian Mbappé", club: "Real Madrid", comp: "LaLiga", goals: 10, assists: 3, xg: 9.8, xa: 3.1, minsPerGoal: 84, shotAcc: 66, keyPasses: 24, dribbles: 38, rating: 8.35 },
    { id: "p5", name: "Lamine Yamal", club: "FC Barcelona", comp: "LaLiga", goals: 6, assists: 8, xg: 5.2, xa: 6.9, minsPerGoal: 98, shotAcc: 64, keyPasses: 34, dribbles: 49, rating: 8.59 },
    { id: "p6", name: "Jude Bellingham", club: "Real Madrid", comp: "LaLiga", goals: 6, assists: 5, xg: 5.4, xa: 4.1, minsPerGoal: 105, shotAcc: 68, keyPasses: 27, dribbles: 31, rating: 8.48 },
    { id: "p7", name: "Jamal Musiala", club: "Bayern Munich", comp: "Bundesliga", goals: 8, assists: 5, xg: 6.1, xa: 4.6, minsPerGoal: 81, shotAcc: 70, keyPasses: 29, dribbles: 52, rating: 8.54 },
    { id: "p8", name: "Mohamed Salah", club: "Liverpool", comp: "Premier League", goals: 9, assists: 7, xg: 7.9, xa: 5.8, minsPerGoal: 79, shotAcc: 67, keyPasses: 31, dribbles: 26, rating: 8.51 },
    { id: "p9", name: "Jamie Maclaren", club: "Mohun Bagan SG", comp: "ISL", goals: 6, assists: 1, xg: 5.1, xa: 1.2, minsPerGoal: 82, shotAcc: 72, keyPasses: 10, dribbles: 9, rating: 8.12 }
  ],

  transfers: [
    { id: "t1", player: "Kylian Mbappé", from: "Paris Saint-Germain", to: "Real Madrid", fee: "Free (Signing Bonus €150M)", status: "CONFIRMED", tier: "Tier 1 • Official", impact: "9.8/10", summary: "Blockbuster 5-year deal bringing the World Cup Golden Boot winner to the Santiago Bernabéu." },
    { id: "t2", player: "Florian Wirtz", from: "Bayer Leverkusen", to: "Real Madrid / Bayern Munich", fee: "€130M Valuation", status: "RUMOUR MILL", tier: "Tier 1 • Hot Radar", impact: "9.5/10", summary: "Europe's most coveted playmaker being tracked closely by Bayern Munich, Real Madrid, and Manchester City." },
    { id: "t3", player: "Michael Olise", from: "Crystal Palace", to: "Bayern Munich", fee: "€53M", status: "CONFIRMED", tier: "Tier 1 • Official", impact: "9.4/10", summary: "Instant transformational impact on Bayern's right flank under Vincent Kompany." },
    { id: "t4", player: "Julián Álvarez", from: "Manchester City", to: "Atlético Madrid", fee: "€75M + €20M", status: "CONFIRMED", tier: "Tier 1 • Official", impact: "9.1/10", summary: "World Cup & Copa América champion spearheading Diego Simeone's frontline." },
    { id: "t5", player: "Jamie Maclaren", from: "Melbourne City", to: "Mohun Bagan SG", fee: "Free Transfer", status: "CONFIRMED", tier: "Tier 1 • Official", impact: "9.3/10", summary: "Five-time A-League Golden Boot winner lighting up Kolkata and the Indian Super League." },
    { id: "t6", player: "Alphonso Davies", from: "Bayern Munich", to: "Real Madrid / Extension", fee: "Contract Talks", status: "ADVANCED TALKS", tier: "Tier 2 • Negotiation", impact: "8.9/10", summary: "High-stakes contract talks continuing as Europe's fastest left-back weighs his options." }
  ],

  articles: [
    {
      id: "a1",
      category: "Tactical Lab • El Clásico",
      title: "High Line vs Hyper-Drive: How Flick's Offside Trap Duels with Mbappé & Bellingham",
      readTime: "4 min read",
      image: "assets/stadium-hero.jpg",
      summary: "Hansi Flick's Barcelona defensive line sits at an unprecedented 41.8 meters from goal — here is how Carlo Ancelotti's third-man diagonal runs are engineered to break it.",
      body: "Hansi Flick has transformed FC Barcelona into Europe's most aggressive high-line pressing machine. By stationing Pau Cubarsí and Iñigo Martínez near the center circle, Barcelona compress the pitch to a 28-meter vertical band, suffocating opposition build-up and catching opponents offside over 6.2 times per match.\n\nHowever, tonight's El Clásico highlights the razor-thin margin of that approach. Rather than making first-phase straight runs that trigger Semi-Automated Offside Technology (SAOT), Jude Bellingham and Federico Valverde time second-phase diagonal surges from deep while Kylian Mbappé pins the weak-side full-back. The result is a tactical chess match at 35 km/h."
    },
    {
      id: "a2",
      category: "World Football • Analytics",
      title: "Why xG Threat & PPDA Are Football's Answer to Cricket's Strike Rate & Net Run Rate",
      readTime: "3 min read",
      image: "assets/match-ball.jpg",
      summary: "If you love Cricbuzz's Manhattan graphs, Wagon Wheels, and Win Predictor, here is how Soccerbuzz translates football's deepest metrics into instant intuition.",
      body: "For decades, cricket fans enjoyed rich ball-by-ball context while football scoreboards showed little more than raw possession and shots. Soccerbuzz bridges that gap with the exact same analytical clarity:\n\n• Expected Goals (xG) is football's true Shot Quality Index — measuring the historical probability (0.00 to 1.00) that a shot results in a goal based on distance, angle, body part, and defender density.\n• PPDA (Passes Allowed Per Defensive Action) quantifies pressing intensity in the attacking 60% of the pitch — the lower the PPDA, the more suffocating the press.\n• Cumulative xG Step Charts act like Cricbuzz's Worm Graph, revealing whether a team's lead comes from sustained dominance or a single low-probability screamer."
    },
    {
      id: "a3",
      category: "Indian Football • ISL Spotlight",
      title: "64,850 Strong at Salt Lake: Why the Kolkata Derby Remains Asia's Greatest Football Spectacle",
      readTime: "4 min read",
      image: "assets/stadium-hero.jpg",
      summary: "From tifo banners spanning three tiers at Yuba Bharati Krirangan to Jamie Maclaren and Greg Stewart combining in Green & Maroon, inside tonight's Kolkata Derby.",
      body: "Over 100 years of rivalry between Mohun Bagan Super Giant and East Bengal FC continues to produce one of world football's most electric atmospheres. Under the floodlights of Salt Lake Stadium in Kolkata, José Molina's fluid 4-2-3-1 has paired Apuia's metronomic passing with Greg Stewart's half-space creativity and Jamie Maclaren's penalty-box instincts."
    }
  ],

  glossary: [
    { cricket: "Ball-by-Ball Commentary", cricbuzzUse: "Every delivery tracked with speed, length, & outcome", football: "Minute-by-Minute Live Stream", soccerbuzzUse: "Every pass, press, VAR check, shot xG, & tactical shift logged in real time" },
    { cricket: "Worm / Manhattan Graph", cricbuzzUse: "Cumulative runs & over-by-over scoring bars", football: "xG Step Timeline & Attack Momentum Wave", soccerbuzzUse: "Tracks cumulative Expected Goals (xG) & minute-by-minute territorial pressure" },
    { cricket: "Wagon Wheel & Pitch Map", cricbuzzUse: "360° scoring zones & bowler line/length map", football: "2D Interactive Tactical Pitch & Pass Network", soccerbuzzUse: "Live player coordinates, formation shifts, shot xG bubbles, & pressing heatmaps" },
    { cricket: "Net Run Rate (NRR)", cricbuzzUse: "Tournament tiebreaker measuring scoring efficiency", football: "Goal Difference (GD) & Expected GD (xGD)", soccerbuzzUse: "Measures both actual goal margin and underlying chance-creation dominance" },
    { cricket: "Powerplay (Overs 1–6)", cricbuzzUse: "Fielding restrictions encouraging high-tempo attack", football: "High-Press Opening 15' & Gegenpressing", soccerbuzzUse: "Measured via PPDA (Passes Per Defensive Action) & high turnovers in final third" },
    { cricket: "DRS Third Umpire Review", cricbuzzUse: "UltraEdge, Ball Tracking & Umpire's Call", football: "VAR & Semi-Automated Offside (SAOT)", soccerbuzzUse: "3D limb-tracking offside lines, goal-line technology & on-field monitor checks" }
  ]
};
