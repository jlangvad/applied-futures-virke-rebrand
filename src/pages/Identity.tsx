import './Identity.css'

export default function Identity() {
  return (
    <div className="id-doc">
      <div className="topbar">
        <div>
          <span className="dot" />
          Virke · Identity Exploration · v0.1
        </div>
        <div>Formerly Applied Futures · April 2026 · JLN + CO</div>
      </div>

      {/* HERO / THE NAME */}
      <header className="hero">
        <div className="kicker">A Name — Virke · ˈviːɐ̯·kə · Danish</div>
        <h1 className="wm-xl">
          Virke<span className="dot">.</span>
        </h1>
        <p className="sub">
          Danish for <em>to work.</em> Also the noun for <em>the material you work with.</em> Verb
          and noun in one short word — the act of making, and the thing being made. A Copenhagen
          name for a Copenhagen studio.
        </p>
        <div className="etymo">
          <div>
            Origin
            <b>Old Norse <em>virki</em></b>
          </div>
          <div>
            Verb<b>to act, to function</b>
          </div>
          <div>
            Noun<b>timber; work; craft</b>
          </div>
          <div>
            Says<b>what we do + how</b>
          </div>
        </div>
      </header>

      {/* 01 STORY */}
      <section className="sec">
        <div className="runhead">
          <span>01 · The Story</span>
          <span>Why this name, why now</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 01<br />Story
          </div>
          <div>
            <h2 className="sec-title">
              A word that <em>does</em>
              <br />two jobs.
            </h2>
            <p className="sec-intro">
              "Applied Futures" described where we were headed. <em>Virke</em> describes what we
              are: a studio where work is both the method and the material. The name earns itself
              the first time someone asks — and then carries for a decade without updating.
            </p>
          </div>
        </div>

        <div className="grid3">
          <div>
            <div className="subhead">01 — It works in Danish</div>
            <h3
              className="serif"
              style={{
                fontFamily: 'Fraunces',
                fontWeight: 500,
                fontSize: 26,
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                margin: '0 0 10px',
              }}
            >
              <em style={{ fontStyle: 'italic' }}>"At virke"</em> — to function.
            </h3>
            <p>
              Every Dane has used this word today. It's the verb for "something working" — a
              machine, a process, a method. It sounds immediately serious and immediately warm.
            </p>
          </div>
          <div>
            <div className="subhead">02 — It works in English</div>
            <h3
              className="serif"
              style={{
                fontFamily: 'Fraunces',
                fontWeight: 500,
                fontSize: 26,
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                margin: '0 0 10px',
              }}
            >
              Spelled and <em style={{ fontStyle: 'italic' }}>said</em> once.
            </h3>
            <p>
              Two syllables, hard consonants, warm vowel. An English speaker can say it on the
              third try. A Nordic speaker recognises it instantly. Nothing to translate.
            </p>
          </div>
          <div>
            <div className="subhead">03 — It works in time</div>
            <h3
              className="serif"
              style={{
                fontFamily: 'Fraunces',
                fontWeight: 500,
                fontSize: 26,
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
                margin: '0 0 10px',
              }}
            >
              Holds any subject: <em style={{ fontStyle: 'italic' }}>AI, teams, ops.</em>
            </h3>
            <p>
              The word means the work, not the technology. Virke for AI today; Virke for whatever
              comes next. The subject changes; the practice doesn't.
            </p>
          </div>
        </div>

        <div className="callout inverse" style={{ marginTop: 56 }}>
          <div className="subhead" style={{ color: 'rgba(236,233,224,0.6)' }}>Positioning</div>
          <p
            className="lede"
            style={{ color: 'var(--paper)', maxWidth: 860 }}
          >
            <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>Virke</em> is the
            practitioner studio for emerging technology. We turn access into capability, through
            workshops, programmes, and the ambassadors we train to carry the work forward. The
            loop — <em>do · reflect · learn</em> — is our method. The name is our promise:{' '}
            <em>this will work.</em>
          </p>
        </div>
      </section>

      {/* 02 WORDMARK */}
      <section className="sec">
        <div className="runhead">
          <span>02 · Wordmark</span>
          <span>The primary expression</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 02<br />Wordmark
          </div>
          <div>
            <h2 className="sec-title">
              A wordmark in <em>two<br />tempers.</em>
            </h2>
            <p className="sec-intro">
              Two wordmarks, one name. <em>Virke Italic</em> — Fraunces, italic, the editorial and
              pitch-deck register. <em>Virke Block</em> — Inter 900, the workshop and wayfinding
              register. Both resolve to the same mark: five letters, one period.
            </p>
          </div>
        </div>

        {/* Primary wordmarks */}
        <div
          style={{
            border: '1px solid var(--ink)',
            background: 'var(--paper)',
            marginBottom: 40,
          }}
        >
          <div className="app-top">
            <span>02.1 · Primary · Italic</span>
            <span>Editorial register</span>
          </div>
          <div
            style={{
              padding: '88px 48px 72px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: 48,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 500,
                fontStyle: 'italic',
                fontSize: 'clamp(120px, 16vw, 220px)',
                lineHeight: 0.85,
                letterSpacing: '-0.035em',
                fontVariationSettings: '"opsz" 144',
              }}
            >
              Virke<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
            </div>
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                paddingBottom: 16,
              }}
            >
              fraunces · opsz 144 · w500 · italic
              <br />
              tracking −35 · period in rust
            </div>
          </div>
        </div>

        <div
          style={{
            border: '1px solid var(--ink)',
            background: 'var(--ink)',
            color: 'var(--paper)',
            marginBottom: 40,
          }}
        >
          <div
            className="app-top"
            style={{ color: 'rgba(236,233,224,0.6)', borderColor: 'rgba(236,233,224,0.2)' }}
          >
            <span>02.2 · Primary · Block</span>
            <span>Workshop register</span>
          </div>
          <div
            style={{
              padding: '88px 48px 72px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: 48,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 900,
                fontSize: 'clamp(120px, 16vw, 220px)',
                lineHeight: 0.85,
                letterSpacing: '-0.06em',
                textTransform: 'uppercase',
              }}
            >
              VIRKE<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <div
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(236,233,224,0.7)',
                paddingBottom: 16,
              }}
            >
              inter · w900 · uppercase
              <br />
              tracking −60 · period in rust
            </div>
          </div>
        </div>

        {/* Lockups */}
        <div className="subhead">02.3 — Lockups & variants</div>
        <div className="mark-grid">
          <div className="mark-cell" style={{ background: 'var(--paper)' }}>
            <span className="label">Primary / Italic</span>
            <div
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 500,
                fontStyle: 'italic',
                fontSize: 72,
                lineHeight: 0.9,
                letterSpacing: '-0.025em',
              }}
            >
              Virke<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
            </div>
          </div>
          <div className="mark-cell" style={{ background: 'var(--paper)' }}>
            <span className="label">Primary / Block</span>
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 900,
                fontSize: 56,
                lineHeight: 0.85,
                letterSpacing: '-0.055em',
                textTransform: 'uppercase',
              }}
            >
              VIRKE<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
          </div>
          <div className="mark-cell" style={{ background: 'var(--paper)' }}>
            <span className="label">With method</span>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  fontSize: 48,
                  lineHeight: 0.9,
                  letterSpacing: '-0.025em',
                }}
              >
                Virke<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
              </div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 9.5,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginTop: 10,
                }}
              >
                do · reflect · learn
              </div>
            </div>
          </div>
          <div className="mark-cell" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
            <span className="label" style={{ color: 'rgba(236,233,224,0.6)' }}>
              Inverse / Italic
            </span>
            <div
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 500,
                fontStyle: 'italic',
                fontSize: 72,
                lineHeight: 0.9,
                letterSpacing: '-0.025em',
              }}
            >
              Virke<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
            </div>
          </div>
          <div className="mark-cell" style={{ background: 'var(--accent)', color: 'var(--paper)' }}>
            <span className="label" style={{ color: 'rgba(236,233,224,0.8)' }}>
              Accent
            </span>
            <div
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 500,
                fontStyle: 'italic',
                fontSize: 72,
                lineHeight: 0.9,
                letterSpacing: '-0.025em',
              }}
            >
              Virke<span style={{ color: 'var(--paper)', fontStyle: 'normal' }}>.</span>
            </div>
          </div>
          <div className="mark-cell" style={{ background: 'var(--paper)' }}>
            <span className="label">Programme lockup</span>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  fontSize: 44,
                  lineHeight: 0.9,
                  letterSpacing: '-0.025em',
                }}
              >
                Virke<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
              </div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  marginTop: 10,
                  borderTop: '1px solid var(--ink)',
                  paddingTop: 8,
                }}
              >
                Applied AI · Programme 02
              </div>
            </div>
          </div>
        </div>

        <p style={{ marginTop: 20 }}>
          The period is the smallest meaningful mark in the system. It carries the brand's rust. A
          full stop means "done" — the opposite of an ellipsis. <em>Virke</em> declares; it does
          not hint.
        </p>
      </section>

      {/* 03 IDEOGRAM / V-MARK */}
      <section className="sec">
        <div className="runhead">
          <span>03 · Ideogram</span>
          <span>The V that is a loop</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 03<br />Ideogram
          </div>
          <div>
            <h2 className="sec-title">
              A V that <em>runs</em><br />as a loop.
            </h2>
            <p className="sec-intro">
              The letter V is a valley — two strokes meeting, then parting. Close it into a circle
              and it becomes a cycle. That's the Virke ideogram: the V drawn as a broken circle,
              the <em>do · reflect · learn</em> orbit wearing the brand's initial. One mark, two
              readings.
            </p>
          </div>
        </div>

        <div className="grid2">
          <div>
            <div
              style={{
                border: '1px solid var(--ink)',
                background: 'var(--paper)',
                aspectRatio: '1 / 1',
                padding: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg viewBox="0 0 400 400" style={{ width: '100%', height: 'auto', display: 'block' }}>
                <g className="loop-spin">
                  <circle
                    cx={200}
                    cy={200}
                    r={150}
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth={2}
                    strokeDasharray="2 10"
                  />
                  <text
                    x={60}
                    y={200}
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono"
                    fontSize={11}
                    fill="#0A0A0A"
                    letterSpacing={3}
                    transform="rotate(-90 60 200)"
                  >
                    DO
                  </text>
                  <text
                    x={340}
                    y={200}
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono"
                    fontSize={11}
                    fill="#0A0A0A"
                    letterSpacing={3}
                    transform="rotate(90 340 200)"
                  >
                    REFLECT
                  </text>
                  <text
                    x={200}
                    y={370}
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono"
                    fontSize={11}
                    fill="#0A0A0A"
                    letterSpacing={3}
                  >
                    LEARN
                  </text>
                </g>
                <path
                  d="M 130 130 L 200 270 L 270 130"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth={12}
                  strokeLinecap="square"
                />
                <circle cx={292} cy={270} r={8} fill="#B84A2A" />
              </svg>
            </div>
          </div>
          <div>
            <div className="subhead">03.1 — Construction</div>
            <dl className="defs">
              <dt>Letterform</dt>
              <dd>Capital <em>V</em> — two strokes, 60°.</dd>
              <dt>Orbit</dt>
              <dd>Broken ring. 12-stop dash at 10:2 ratio.</dd>
              <dt>Labels</dt>
              <dd>Do · Reflect · Learn, set at poles.</dd>
              <dt>Period</dt>
              <dd>Rust circle at the foot of the right stroke.</dd>
              <dt>Motion</dt>
              <dd>Orbit rotates 24s. V stays still.</dd>
              <dt>Min size</dt>
              <dd>32px digital · 12mm print.</dd>
            </dl>
            <p style={{ marginTop: 18 }}>
              The V does not move. The method around it does. The inverse is also true — the work
              is steady; only the context changes.
            </p>
          </div>
        </div>

        {/* Mark size variants */}
        <div className="subhead" style={{ marginTop: 48 }}>03.2 — Mark variants</div>
        <div className="vkey">
          {/* monogram */}
          <div style={{ background: 'var(--paper)' }}>
            <span className="l">Monogram</span>
            <svg viewBox="0 0 80 80" style={{ width: 72, height: 72 }}>
              <path
                d="M 18 18 L 40 62 L 62 18"
                fill="none"
                stroke="#0A0A0A"
                strokeWidth={4}
                strokeLinecap="square"
              />
              <circle cx={70} cy={62} r={3} fill="#B84A2A" />
            </svg>
          </div>
          {/* V + orbit */}
          <div style={{ background: 'var(--paper)' }}>
            <span className="l">V + orbit</span>
            <svg viewBox="0 0 100 100" style={{ width: 84, height: 84 }}>
              <circle
                cx={50}
                cy={50}
                r={42}
                fill="none"
                stroke="#0A0A0A"
                strokeWidth={1}
                strokeDasharray="1.4 5"
              />
              <path
                d="M 30 28 L 50 72 L 70 28"
                fill="none"
                stroke="#0A0A0A"
                strokeWidth={3.2}
                strokeLinecap="square"
              />
              <circle cx={74} cy={72} r={2.6} fill="#B84A2A" />
            </svg>
          </div>
          {/* Inverse */}
          <div style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
            <span className="l" style={{ color: 'rgba(236,233,224,0.6)' }}>Inverse</span>
            <svg viewBox="0 0 80 80" style={{ width: 72, height: 72 }}>
              <path
                d="M 18 18 L 40 62 L 62 18"
                fill="none"
                stroke="#ECE9E0"
                strokeWidth={4}
                strokeLinecap="square"
              />
              <circle cx={70} cy={62} r={3} fill="#B84A2A" />
            </svg>
          </div>
          {/* Favicon */}
          <div style={{ background: 'var(--paper)' }}>
            <span className="l">Favicon</span>
            <svg viewBox="0 0 48 48" style={{ width: 48, height: 48 }}>
              <rect width={48} height={48} fill="#0A0A0A" />
              <path
                d="M 12 12 L 24 36 L 36 12"
                fill="none"
                stroke="#ECE9E0"
                strokeWidth={3}
                strokeLinecap="square"
              />
              <circle cx={40} cy={36} r={2} fill="#B84A2A" />
            </svg>
          </div>
          {/* stamp */}
          <div style={{ background: 'var(--paper)' }}>
            <span className="l">Stamp</span>
            <svg viewBox="0 0 100 100" style={{ width: 84, height: 84 }}>
              <circle cx={50} cy={50} r={44} fill="none" stroke="#0A0A0A" strokeWidth={1.5} />
              <path
                d="M 32 30 L 50 70 L 68 30"
                fill="none"
                stroke="#0A0A0A"
                strokeWidth={3}
                strokeLinecap="square"
              />
              <text
                x={50}
                y={92}
                textAnchor="middle"
                fontFamily="IBM Plex Mono"
                fontSize={6}
                fill="#0A0A0A"
                letterSpacing={1.5}
              >
                · VIRKE · CPH ·
              </text>
              <circle cx={70} cy={70} r={2.4} fill="#B84A2A" />
            </svg>
          </div>
        </div>
      </section>

      {/* 04 TYPOGRAPHY */}
      <section className="sec">
        <div className="runhead">
          <span>04 · Typography</span>
          <span>Two voices, one register</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 04<br />Type
          </div>
          <div>
            <h2 className="sec-title">
              Fraunces, <em>Inter,</em><br />Plex Mono.
            </h2>
            <p className="sec-intro">
              A serif for thinking, a sans for building, a mono for evidence. The same stack
              carries Virke from a pitch deck to a workshop handout to a README.
            </p>
          </div>
        </div>

        <div className="spec">
          <div className="m">Display · Italic</div>
          <div
            style={{
              fontFamily: 'Fraunces, serif',
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: 72,
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              fontVariationSettings: '"opsz" 144',
            }}
          >
            Work that <em>works.</em>
          </div>
        </div>
        <div className="spec">
          <div className="m">Display · Block</div>
          <div
            style={{
              fontFamily: 'Inter',
              fontWeight: 900,
              fontSize: 72,
              lineHeight: 0.85,
              letterSpacing: '-0.055em',
              textTransform: 'uppercase',
            }}
          >
            Do · Reflect · Learn
          </div>
        </div>
        <div className="spec">
          <div className="m">Editorial</div>
          <div
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 20,
              lineHeight: 1.5,
              maxWidth: 640,
              fontVariationSettings: '"opsz" 36',
            }}
          >
            Virke is a practitioner studio. We pair your teams with AI builders from our network,
            run workshops where real tools are built in the room, and leave internal capability
            behind — not a dependency.
          </div>
        </div>
        <div className="spec">
          <div className="m">Caption / Mono</div>
          <div
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 13,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Virke · Applied AI · Phase 1 · session 04 of 08 · cph
          </div>
        </div>
        <div className="spec">
          <div className="m">Scale</div>
          <div
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 12,
              color: 'var(--muted)',
            }}
          >
            72 · 56 · 40 · 28 · 20 · 17 · 14 · 12 · 11 &nbsp;·&nbsp; ratio 1.25
          </div>
        </div>
      </section>

      {/* 05 COLOR */}
      <section className="sec">
        <div className="runhead">
          <span>05 · Color</span>
          <span>Paper, ink, rust, moss</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 05<br />Color
          </div>
          <div>
            <h2 className="sec-title">
              Four colors.<br />
              <em>One of them</em> rust.
            </h2>
            <p className="sec-intro">
              Warm paper, deep ink, a rust for the period and accent, and a moss green for the
              field register (programme materials, maps, long-form editorial). The rust is the
              signal. Never two signals per page.
            </p>
          </div>
        </div>

        <div className="swatch-row">
          <div className="swatch" style={{ background: '#ECE9E0' }}>
            <div className="tag">Paper</div>
            <div className="hex">#ECE9E0</div>
          </div>
          <div className="swatch" style={{ background: '#E3E0D6' }}>
            <div className="tag">Paper 2</div>
            <div className="hex">#E3E0D6</div>
          </div>
          <div className="swatch" style={{ background: '#6B665C', color: '#ECE9E0' }}>
            <div className="tag">Muted</div>
            <div className="hex" style={{ opacity: 0.85 }}>#6B665C</div>
          </div>
          <div className="swatch" style={{ background: '#0A0A0A', color: '#ECE9E0' }}>
            <div className="tag">Ink</div>
            <div className="hex" style={{ opacity: 0.85 }}>#0A0A0A</div>
          </div>
          <div className="swatch" style={{ background: '#B84A2A', color: '#ECE9E0' }}>
            <div className="tag">Rust</div>
            <div className="hex" style={{ opacity: 0.9 }}>#B84A2A</div>
          </div>
          <div className="swatch" style={{ background: '#3D5A3B', color: '#ECE9E0' }}>
            <div className="tag">Moss</div>
            <div className="hex" style={{ opacity: 0.9 }}>#3D5A3B</div>
          </div>
        </div>
        <p style={{ marginTop: 16 }}>
          Paper is never pure white. Ink is never pure black. Rust is the <em>period</em> of the
          mark — a forged spark, not a fill. Moss is reserved: used only for long-form editorial
          and programme maps.
        </p>
      </section>

      {/* 06 APPLICATIONS */}
      <section className="sec">
        <div className="runhead">
          <span>06 · Applications</span>
          <span>Living with the mark</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 06<br />In Use
          </div>
          <div>
            <h2 className="sec-title">
              Living <em>with</em><br />the mark.
            </h2>
            <p className="sec-intro">
              Six applications, from business card to website. Each uses the same ingredients —
              italic wordmark, V ideogram, rust period — in a different proportion.
            </p>
          </div>
        </div>

        {/* Business cards */}
        <div className="subhead">06.1 — Business cards</div>
        <div className="grid2" style={{ marginBottom: 48 }}>
          <div className="app">
            <div className="app-top">
              <span>Front · Jacob</span>
              <span>85 × 55 mm</span>
            </div>
            <div className="bizcard">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <svg viewBox="0 0 80 80" style={{ width: 42, height: 42 }}>
                  <path
                    d="M 18 18 L 40 62 L 62 18"
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth={4}
                    strokeLinecap="square"
                  />
                  <circle cx={70} cy={62} r={3} fill="#B84A2A" />
                </svg>
                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    textAlign: 'right',
                  }}
                >
                  Copenhagen<br />&amp; distributed
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    fontSize: 28,
                    lineHeight: 0.95,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Jacob Langvad<br />Nilsson.
                </div>
                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-2)',
                    marginTop: 8,
                  }}
                >
                  Co-founder · Practitioner
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  borderTop: '1px solid var(--ink)',
                  paddingTop: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 9,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  jacob@virke.co
                </span>
                <span
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontStyle: 'italic',
                    fontSize: 18,
                  }}
                >
                  Virke<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
                </span>
              </div>
            </div>
          </div>

          <div className="app">
            <div className="app-top">
              <span>Back · Inverse</span>
              <span>Method side</span>
            </div>
            <div
              className="bizcard back"
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(236,233,224,0.6)',
                  textAlign: 'center',
                }}
              >
                The method
              </div>
              <div
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 900,
                  fontSize: 22,
                  lineHeight: 1,
                  letterSpacing: '-0.045em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Do · Reflect<br />· Learn<span style={{ color: 'var(--accent)' }}>.</span>
              </div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(236,233,224,0.6)',
                  textAlign: 'center',
                }}
              >
                virke.co
              </div>
            </div>
          </div>
        </div>

        {/* Letterhead + Email sig */}
        <div className="grid2" style={{ marginBottom: 48 }}>
          <div className="app">
            <div className="app-top">
              <span>06.2 · Letterhead</span>
              <span>A4</span>
            </div>
            <div className="letter">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    fontSize: 32,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Virke<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
                </div>
                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  19 April 2026 · CPH
                </div>
              </div>
              <hr style={{ border: 0, borderTop: '1px solid var(--ink)', margin: '4px 0' }} />
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                Re · SimCorp · Applied AI · Phase 1
              </div>
              <div
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: 'var(--ink-2)',
                }}
              >
                <p style={{ margin: '0 0 10px' }}>Dear Bjørn,</p>
                <p style={{ margin: '0 0 10px' }}>
                  Following our conversation last Tuesday, this letter confirms the shape of Phase
                  1 — eight workshops across the PM organisation, stakeholder interviews in
                  parallel, and the decision point we agreed on before any Phase 2 commitment.
                </p>
                <p style={{ margin: '0 0 10px' }}>
                  We'll share the draft Applied AI Readiness Report on{' '}
                  <em style={{ fontStyle: 'italic' }}>11 June</em>.
                </p>
                <p style={{ margin: 0 }}>
                  Warmly,<br />
                  <em style={{ fontStyle: 'italic', fontSize: 18 }}>Jacob + Camilla</em>
                </p>
              </div>
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 14,
                  borderTop: '1px solid var(--ink)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                <span>Virke ApS · CVR 45 812 003</span>
                <span>virke.co</span>
              </div>
            </div>
          </div>

          <div>
            <div className="subhead">06.3 — Email signature</div>
            <div className="sig">
              <b>Jacob Langvad Nilsson</b>
              <br />
              Co-founder, Virke. —{' '}
              <em style={{ fontStyle: 'italic', fontFamily: 'Fraunces' }}>work that works</em>
              <br />
              <span style={{ color: 'var(--accent)' }}>·</span> jacob@virke.co &nbsp;/&nbsp;
              virke.co
              <br />
              <span style={{ color: 'var(--muted)' }}>Do · Reflect · Learn</span>
            </div>
            <p style={{ marginTop: 16, maxWidth: '46ch' }}>
              The signature is the identity at its smallest: italic wordmark, rust period as a
              bullet, mono for the method line. Readable in any mail client.
            </p>
          </div>
        </div>

        {/* Deck covers */}
        <div className="subhead">06.4 — Pitch deck covers</div>
        <div className="grid3" style={{ marginBottom: 48 }}>
          <div className="app">
            <div className="app-top">
              <span>Deck · Paper</span>
              <span>16:10</span>
            </div>
            <div className="deck">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <svg viewBox="0 0 80 80" style={{ width: 32, height: 32 }}>
                  <path
                    d="M 18 18 L 40 62 L 62 18"
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth={5}
                    strokeLinecap="square"
                  />
                  <circle cx={70} cy={62} r={3.5} fill="#B84A2A" />
                </svg>
                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}
                >
                  April 2026
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 10,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: 10,
                  }}
                >
                  · Applied AI ·
                </div>
                <div
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    fontSize: 42,
                    lineHeight: 0.95,
                    letterSpacing: '-0.025em',
                  }}
                >
                  You have<br />the tools.<br />
                  <em style={{ fontFamily: 'Fraunces', fontStyle: 'italic' }}>Now the</em>
                  <br />
                  capability<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
                </div>
              </div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--ink)',
                  paddingTop: 8,
                }}
              >
                <span>Virke · SimCorp</span>
                <span>01 · 10</span>
              </div>
            </div>
          </div>

          <div className="app">
            <div className="app-top">
              <span>Deck · Ink</span>
              <span>16:10</span>
            </div>
            <div className="deck dark">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <svg viewBox="0 0 80 80" style={{ width: 32, height: 32 }}>
                  <path
                    d="M 18 18 L 40 62 L 62 18"
                    fill="none"
                    stroke="#ECE9E0"
                    strokeWidth={5}
                    strokeLinecap="square"
                  />
                  <circle cx={70} cy={62} r={3.5} fill="#B84A2A" />
                </svg>
                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(236,233,224,0.6)',
                  }}
                >
                  Virke · CPH
                </div>
              </div>
              <div
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 900,
                  fontSize: 42,
                  lineHeight: 0.85,
                  letterSpacing: '-0.055em',
                  textTransform: 'uppercase',
                }}
              >
                Do ·<br />Reflect ·<br />Learn<span style={{ color: 'var(--accent)' }}>.</span>
              </div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(236,233,224,0.6)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(236,233,224,0.2)',
                  paddingTop: 8,
                }}
              >
                <span>A method, in practice</span>
                <span>virke.co</span>
              </div>
            </div>
          </div>

          <div className="app">
            <div className="app-top">
              <span>Deck · Rust</span>
              <span>16:10</span>
            </div>
            <div className="deck rust">
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 9,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(236,233,224,0.8)',
                }}
              >
                · Phase 2 ·
              </div>
              <div
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  fontSize: 48,
                  lineHeight: 0.95,
                  letterSpacing: '-0.025em',
                  color: 'var(--paper)',
                }}
              >
                Company-<br />wide<br />
                <em style={{ fontFamily: 'Fraunces', fontStyle: 'italic' }}>adoption.</em>
              </div>
              <div
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(236,233,224,0.8)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(236,233,224,0.2)',
                  paddingTop: 8,
                }}
              >
                <span>Virke · Applied AI</span>
                <span>04 · 10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Website strip */}
        <div className="subhead">06.5 — virke.co</div>
        <div className="app">
          <div className="app-top">
            <span>Homepage hero</span>
            <span>1440w</span>
          </div>
          <div className="site">
            <div className="site-nav">
              <div
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  fontSize: 24,
                  letterSpacing: '-0.02em',
                }}
              >
                Virke<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
              </div>
              <ul>
                <li>Practice</li>
                <li>Programmes</li>
                <li>Method</li>
                <li>Meetup</li>
                <li style={{ color: 'var(--accent)' }}>· Contact</li>
              </ul>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr',
                gap: 40,
                alignItems: 'end',
                padding: '40px 0',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: 16,
                  }}
                >
                  A practitioner studio · Copenhagen
                </div>
                <h1
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    fontSize: 'clamp(56px, 8vw, 112px)',
                    lineHeight: 0.92,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    fontVariationSettings: '"opsz" 144',
                  }}
                >
                  Work that{' '}
                  <em style={{ fontFamily: 'Fraunces', fontStyle: 'italic' }}>
                    works<span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>.</span>
                  </em>
                </h1>
                <p
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: 20,
                    lineHeight: 1.45,
                    margin: '20px 0 0',
                    maxWidth: '50ch',
                    color: 'var(--ink-2)',
                  }}
                >
                  Virke turns emerging technology into practical capability. Applied AI workshops,
                  programmes, and ambassadors — built with your teams, not for them.
                </p>
              </div>
              <svg
                viewBox="0 0 300 300"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              >
                <g className="loop-spin">
                  <circle
                    cx={150}
                    cy={150}
                    r={120}
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth={1.4}
                    strokeDasharray="1.8 9"
                  />
                  <text
                    x={40}
                    y={156}
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono"
                    fontSize={10}
                    fill="#0A0A0A"
                    letterSpacing={3}
                    transform="rotate(-90 40 156)"
                  >
                    DO
                  </text>
                  <text
                    x={260}
                    y={156}
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono"
                    fontSize={10}
                    fill="#0A0A0A"
                    letterSpacing={3}
                    transform="rotate(90 260 156)"
                  >
                    REFLECT
                  </text>
                  <text
                    x={150}
                    y={290}
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono"
                    fontSize={10}
                    fill="#0A0A0A"
                    letterSpacing={3}
                  >
                    LEARN
                  </text>
                </g>
                <path
                  d="M 95 100 L 150 206 L 205 100"
                  fill="none"
                  stroke="#0A0A0A"
                  strokeWidth={8}
                  strokeLinecap="square"
                />
                <circle cx={216} cy={206} r={6} fill="#B84A2A" />
              </svg>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 16,
                paddingTop: 20,
                borderTop: '1px solid var(--ink)',
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              <div>
                Applied AI<br />
                <span
                  style={{
                    color: 'var(--ink)',
                    fontFamily: 'Fraunces',
                    fontStyle: 'italic',
                    textTransform: 'none',
                    letterSpacing: 0,
                    fontSize: 16,
                  }}
                >
                  The programme →
                </span>
              </div>
              <div>
                Claude Meetup<br />
                <span
                  style={{
                    color: 'var(--ink)',
                    fontFamily: 'Fraunces',
                    fontStyle: 'italic',
                    textTransform: 'none',
                    letterSpacing: 0,
                    fontSize: 16,
                  }}
                >
                  Next · 08 May →
                </span>
              </div>
              <div>
                Ambassadors<br />
                <span
                  style={{
                    color: 'var(--ink)',
                    fontFamily: 'Fraunces',
                    fontStyle: 'italic',
                    textTransform: 'none',
                    letterSpacing: 0,
                    fontSize: 16,
                  }}
                >
                  Train internals →
                </span>
              </div>
              <div>
                Reading<br />
                <span
                  style={{
                    color: 'var(--ink)',
                    fontFamily: 'Fraunces',
                    fontStyle: 'italic',
                    textTransform: 'none',
                    letterSpacing: 0,
                    fontSize: 16,
                  }}
                >
                  Access ≠ adoption →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 VOICE */}
      <section className="sec">
        <div className="runhead">
          <span>07 · Voice</span>
          <span>How Virke sounds</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 07<br />Voice
          </div>
          <div>
            <h2 className="sec-title">
              Plain, <em>short,</em><br />past the verb.
            </h2>
            <p className="sec-intro">
              Virke speaks like a practitioner who has used the tool this morning. Short
              declarative sentences. Evidence over adjectives. No future-of-everything bluster.
            </p>
          </div>
        </div>

        <div className="grid2">
          <div>
            <div className="subhead">Do</div>
            <ul className="check do">
              <li><em>"We ran this last Tuesday."</em> Dates and evidence.</li>
              <li>Write past tense when possible. It means it happened.</li>
              <li>Name the thing: Claude, Cursor, Figma, Notion. Don't abstract.</li>
              <li>Short sentences. One idea per line.</li>
              <li>Use the full stop. It is the brand's punctuation.</li>
            </ul>
          </div>
          <div>
            <div className="subhead">Don't</div>
            <ul className="check dont">
              <li>"Unlock." "Leverage." "Transform." "Revolutionise."</li>
              <li>The word "journey" outside a literal trip.</li>
              <li>Future tense when past will do. ("We will enable…")</li>
              <li>Neural-net, brain-with-glowing-lines, or any AI cliché.</li>
              <li>Emojis. The period is our only emoticon.</li>
            </ul>
          </div>
        </div>

        <div className="callout" style={{ marginTop: 40 }}>
          <div className="subhead">One-liner · in three tempers</div>
          <p
            style={{
              fontFamily: 'Fraunces, serif',
              fontStyle: 'italic',
              fontSize: 28,
              lineHeight: 1.2,
              margin: '0 0 10px',
              fontVariationSettings: '"opsz" 72',
            }}
          >
            Virke <span style={{ color: 'var(--accent)', fontStyle: 'normal' }}>·</span>{' '}
            <em>work that works.</em>
          </p>
          <p
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 20,
              lineHeight: 1.35,
              margin: '0 0 10px',
              color: 'var(--ink)',
            }}
          >
            Virke is a practitioner studio that turns emerging technology into practical
            capability.
          </p>
          <p
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: 13,
              letterSpacing: '0.04em',
              color: 'var(--muted)',
              margin: 0,
            }}
          >
            Virke · applied ai · workshops · ambassadors · copenhagen
          </p>
        </div>
      </section>

      {/* 08 NAMING ARCHITECTURE */}
      <section className="sec">
        <div className="runhead">
          <span>08 · Architecture</span>
          <span>Sub-brands and programmes</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 08<br />Architecture
          </div>
          <div>
            <h2 className="sec-title">
              Virke, <em>then</em><br />the subject.
            </h2>
            <p className="sec-intro">
              Virke is the house. Subjects are pinned to it with simple, denotative words —
              nothing invented, nothing cute. The brand grows without splintering.
            </p>
          </div>
        </div>

        <dl className="defs">
          <dt>House</dt>
          <dd><em>Virke.</em> The studio.</dd>
          <dt>Programme</dt>
          <dd><em>Virke · Applied AI.</em> Our flagship capability programme.</dd>
          <dt>Sessions</dt>
          <dd><em>Virke · Workshop.</em> The 10-20 person hands-on unit.</dd>
          <dt>Community</dt>
          <dd><em>Virke · Meetup.</em> Public Claude Code evenings in CPH.</dd>
          <dt>Research</dt>
          <dd><em>Virke · Field Notes.</em> Long-form editorial from the practice.</dd>
          <dt>Network</dt>
          <dd><em>Virke · Bench.</em> Our roster of practitioner experts.</dd>
          <dt>Alumni</dt>
          <dd>
            <em>Virke · Ambassadors.</em> Internal facilitators we train to carry it forward.
          </dd>
        </dl>

        <p style={{ marginTop: 24, maxWidth: '60ch' }}>
          The word after the centred dot is always plain — <em>Workshop, Meetup, Bench.</em> Never
          a neologism, never a suffix like "-ify" or "-ly." If a new programme can't be named in a
          plain English word, it isn't ready yet.
        </p>
      </section>

      {/* 09 RECOMMENDATION */}
      <section className="sec" style={{ borderBottom: 0 }}>
        <div className="runhead">
          <span>09 · Recommendation</span>
          <span>Next steps</span>
        </div>
        <div className="sec-head">
          <div className="sec-num">
            § 09<br />Next
          </div>
          <div>
            <h2 className="sec-title">
              Live with it <em>for</em><br />a week.
            </h2>
            <p className="sec-intro">
              If Virke is still the name on the following Monday — the one you've said ten times
              without flinching — it's the name. Here's a short plan to test it.
            </p>
          </div>
        </div>

        <div className="rec-grid">
          <div>
            <div className="subhead">Week 1</div>
            <h4>Say it <em>out loud.</em></h4>
            <p>
              Use "Virke" in three client conversations. Note who asks about the etymology, who
              doesn't. Silence is a good sign.
            </p>
          </div>
          <div>
            <div className="subhead">Week 2</div>
            <h4>Build <em>one thing.</em></h4>
            <p>
              Move the SimCorp deck to the Virke wordmark. Live the identity on a real pitch
              before committing to the re-brand.
            </p>
          </div>
          <div>
            <div className="subhead">Week 3</div>
            <h4>Commit <em>or walk.</em></h4>
            <p>
              Buy <strong>virke.co</strong>. Move the CVR. Redirect appliedfutures.io. If it still
              feels right — ship it.
            </p>
          </div>
        </div>

        <div className="callout inverse" style={{ marginTop: 56 }}>
          <p className="lede" style={{ color: 'var(--paper)', maxWidth: 900, margin: 0 }}>
            The best argument for{' '}
            <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>Virke</em> is not
            what it means — it's what it lets you stop saying. No more "Applied Futures" on a
            second slide to explain you're not a forecaster. No more "AI consultancy" to position
            next to thirty others. A one-word mark, a loop, a rust period
            <span style={{ color: 'var(--accent)' }}>.</span>
          </p>
        </div>

        <footer className="foot">
          <div>
            Document<b>Virke · Identity v0.1</b>
          </div>
          <div>
            Compiled<b>April 2026 · JLN + CO</b>
          </div>
          <div>
            Next<b>Live with it for a week → ship</b>
          </div>
        </footer>
      </section>
    </div>
  )
}
