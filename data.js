/* ══════════════════════════════════════════════════════════
   내용 파일 — 이 파일만 교체하면 사이트 내용이 바뀝니다.

   관리자에서 편집한 뒤 PUBLISH를 누르면 새 data.js 파일이
   내려받아집니다. 깃허브 저장소의 data.js를 그 파일로
   덮어쓰고 커밋하면 방문자에게 반영됩니다.
   ══════════════════════════════════════════════════════════ */
const SEED = {
  site: {
    /* ── 대문 ── */
    gateImg: "",
    gateTag: "LAST VISUAL CONTACT",
    gateTitle: "우리의 빛바랜 낙원",
    gateSub: "REC 18:47:02  //  CH.34.12  //  SIGNAL LOST",
    enterLabel: "OPEN CHANNEL",
    enterNote: "채널을 열면 하강이 시작됩니다",
    sideL: "LAT 34.12° N",
    sideR: "LON 129.44° E",
    ticker: [
      "ARCHIVE CH.34.12 — 수신 전용 · 발신 불가",
      "마지막 교신 이후 경과 시간 측정 불가",
      "황혼이 잠기는 심해 · 우리의 빛바랜 낙원"
    ],

    /* ── BGM ── */
    bgmUrl: "", bgmVol: 35, bgmAuto: 0,

    /* ── 인트로 ── */
    callsign: "CH. 34.12 — 수신 전용 · 발신 불가",
    introTitle: '우리는 서로의 <span class="amber">황혼</span>이자<br>서로의 <span class="blue">심해</span>였다',
    lede: '우리의 빛바랜 낙원, 황혼이 잠기는 심해.<br>아래는 <em>끝내 닿지 못한 교신의 기록</em>입니다.<br>깊이 내려갈수록 신호는 잦아들고, 말은 짧아집니다.',

    /* 인트로 두 사람 — 좌: 황혼 / 우: 심해 */
    pairA: { img: "", name: "형", label: "DUSK · 황혼", line: "먼저 가라앉은 쪽" },
    pairB: { img: "", name: "동생", label: "ABYSS · 심해", line: "끝까지 내려간 쪽" },
    pairBond: "우리의 빛바랜 낙원",

    /* 인트로 색인 */
    indexLabel: "ARCHIVE INDEX",

    /* ── 중간 인용 ── */
    quoteMark: "— INTERCEPTED —",
    quote: "낙원은 이미 색이 바랬지만,<br>그 색을 기억하는 건 서로뿐이었다.",

    /* ── 마지막 ── */
    terminus: "여기서부터는 아무 신호도 돌아오지 않는다.<br>그래도 우리는 계속 부른다.",
    endMark: "— END OF TRANSMISSION —",

    silence: [
      "· · · · · · ·  NO SIGNAL  · · · · · · ·",
      "· · ·  STATIC — 판독 불가  · · ·",
      "· · · · ·  캐리어만 남음  · · · · ·"
    ],

    /* 수층 — img 를 넣으면 그 수심의 풍경 띠가 깔립니다 */
    strata: [
      { name: "EPIPELAGIC · 표층", desc: "빛이 닿는다. 아직은 아무 말이나 해도 되는 깊이.", img: "" },
      { name: "MESOPELAGIC · 박광층", desc: "황혼이 시작되는 층. 색이 하나씩 사라진다.", img: "" },
      { name: "BATHYPELAGIC · 무광층", desc: "빛이 완전히 끊긴다. 남는 건 압력과 목소리뿐.", img: "" }
    ],

    /* ── 방명록 (giscus) ── */
    gsRepo: "", gsRepoId: "", gsCategory: "", gsCategoryId: "",
    gsTitle: "응답 송신",
    gsNote: "닿을지 모르지만, 여기에 남겨두면 언젠가 수신됩니다."
  },

  /* side: "amber"(황혼/형) · "tide"(심해/동생) · "both"(공통) */
  logs: [
    {
      id: 1, type: "list", side: "both", depth: "-120M", time: "18:47:02",
      title: "트위터 성향표",
      preview: "수면 가까이. 아직 빛이 닿는 곳에서 하는 이야기.",
      lead: "교류 전에 한 번 읽어주시면 좋겠습니다.",
      list: [
        { k: "지뢰", v: "여기에 지뢰를 적어주세요." },
        { k: "취향", v: "여기에 취향을 적어주세요." },
        { k: "교류", v: "맞팔 · 리트윗 · 멘션 규칙 등." }
      ]
    },
    {
      id: 2, type: "profile", side: "amber", depth: "-880M", time: "19:22:14",
      title: "형 — 황혼",
      preview: "먼저 가라앉은 쪽. 빛을 붙잡고 있던 사람.",
      portrait: "", caption: "ELDER — 황혼",
      fields: [
        { k: "이름", v: "" }, { k: "나이", v: "" },
        { k: "관계", v: "동생의 황혼" }, { k: "한 마디", v: "" }
      ]
    },
    {
      id: 3, type: "profile", side: "tide", depth: "-1,450M", time: "20:13:58",
      title: "동생 — 심해",
      preview: "끝까지 내려간 쪽. 어둠을 껴안은 사람.",
      portrait: "", caption: "YOUNGER — 심해",
      fields: [
        { k: "이름", v: "" }, { k: "나이", v: "" },
        { k: "관계", v: "형의 심해" }, { k: "한 마디", v: "" }
      ]
    },
    {
      id: 4, type: "dialogue", side: "both", depth: "-2,100M", time: "01:07:33",
      title: "마지막 교신",
      preview: "신호 대부분이 유실됨. 판독 불가 구간 다수.",
      lead: "수신 강도 미약. 이하 복원된 부분.",
      dialogue: [
        { who: "형", say: "아직 거기 있어?" },
        { who: "동생", say: "응. 여기 있어." },
        { who: "형", say: "그럼 됐어." }
      ]
    },
    {
      id: 5, type: "friends", side: "both", depth: "-2,400M", time: "02:55:10",
      title: "동행 신호",
      preview: "같은 바다를 항해 중인 사람들.",
      lead: "배너를 누르면 그쪽 채널로 이동합니다.",
      friends: [
        { name: "친구 이름", url: "https://x.com/", banner: "", note: "한 줄 소개" }
      ]
    },
    {
      id: 6, type: "links", side: "both", depth: "-2,800M", time: "03:41:—",
      title: "바깥으로",
      preview: "수면 위로 이어지는 통로.",
      links: [{ k: "트위터", v: "https://x.com/" }]
    }
  ]
};
