import React, { useEffect, useMemo, useState } from 'react'

const content = {
  vi: {
    htmlLang: 'vi',
    metaDescription:
      'Claw Football - Cổng tin bóng đá hiện đại với tin nóng, lịch đấu, bảng xếp hạng và phân tích chuyên sâu.',
    pageTitle: 'Claw Football | Tin tức bóng đá hiện đại',
    searchPlaceholder: 'Tìm tin tức, đội bóng, giải đấu...',
    nav: {
      home: 'Trang chủ',
      headline: 'Tin nóng',
      categories: 'Chuyên mục',
      dataBoard: 'Data board',
      fixtures: 'Lịch đấu',
      standings: 'BXH'
    },
    hero: {
      livePill: '● Live football portal',
      title: 'Web bóng đá của bạn giờ mang dáng dấp một cổng tin thể thao thật sự.',
      desc:
        'Giao diện tối hiện đại, bố cục kiểu news portal, nổi bật tin nóng, lịch thi đấu, bảng xếp hạng và khu vực dữ liệu trực quan như một web bóng đá chuyên nghiệp.',
      primaryBtn: 'Xem tin nổi bật',
      ghostBtn: 'Mở data board',
      leagueTag: 'Premier League',
      matchStatus: "LIVE 82'",
      scoreStats: [
        ['Shots', '14 - 8'],
        ['Possession', '61% - 39%'],
        ['xG', '2.46 - 0.93']
      ]
    },
    headline: {
      featuredPill: 'Tin nổi bật',
      featuredTitle: 'Cuộc đua vô địch châu Âu nóng rực khi các ông lớn đồng loạt tăng tốc',
      featuredDesc:
        'Từ Premier League đến La Liga, các đội top đầu đang bước vào giai đoạn bản lề, nơi một chiến thắng có thể thay đổi toàn bộ cục diện mùa giải.',
      meta: ['Phân tích chiến thuật', '7 phút đọc'],
      minis: [
        {
          pill: 'Chuyển nhượng',
          pillClass: 'amber',
          title: '3 tiền đạo đang được săn đón mạnh nhất mùa hè',
          desc: 'Các CLB lớn bắt đầu vào cuộc sớm để giành lợi thế trên thị trường.'
        },
        {
          pill: 'Champions League',
          pillClass: 'violet',
          title: 'Những cặp đấu có thể tạo địa chấn ở vòng knock-out',
          desc: 'Không chỉ phong độ, chiều sâu đội hình đang trở thành yếu tố quyết định.'
        }
      ]
    },
    sections: {
      categoriesPill: 'Chuyên mục',
      newsTitle: 'Tin tức & phân tích',
      viewAll: 'Xem tất cả →',
      dataPill: 'Data board',
      dataTitle: 'Góc dữ liệu trực quan',
      fixturesPill: 'Lịch thi đấu',
      fixturesTitle: 'Trận cầu đáng xem',
      standingsPill: 'Bảng xếp hạng',
      standingsTitle: 'Top đầu hiện tại'
    },
    sidebar: {
      trending: 'Trending',
      leagues: 'Giải đấu nổi bật',
      quickStats: 'Quick stats',
      quickItems: [
        ['Tin hôm nay', '24'],
        ['Trận trực tiếp', '08'],
        ['Đội theo dõi', '32']
      ],
      contact: 'Liên hệ hợp tác'
    },
    table: ['#', 'Đội', 'Trận', 'HS', 'Điểm'],
    trending: [
      ['Mbappé', 'Tương lai vẫn là chủ đề nóng nhất tuần'],
      ['El Clásico', 'Lượt xem dự báo tăng mạnh trước giờ bóng lăn'],
      ['Champions League', 'Các cặp đấu knock-out hút lượng tìm kiếm lớn']
    ],
    leagues: [
      ['Premier League', '12 bài mới', 'premier'],
      ['La Liga', '9 bài mới', 'laliga'],
      ['Bundesliga', '7 bài mới', 'bundes'],
      ['Champions League', '6 bài mới', 'ucl']
    ],
    news: [
      ['Premier League', 'Vì sao pressing tầm cao trở lại mạnh mẽ ở các đội top đầu?', 'Khả năng đoạt bóng sớm giúp tăng chất lượng cơ hội và bóp nghẹt đối thủ từ tuyến đầu.', 'gradient-one'],
      ['La Liga', 'Real Madrid đang tái cấu trúc lối chơi quanh tốc độ và không gian', 'Một bộ khung trẻ trung giúp đội bóng hoàng gia chuyển mình linh hoạt hơn.', 'gradient-two'],
      ['Serie A', 'Serie A đang hồi sinh nhờ chiến thuật hiện đại và nhịp độ nhanh hơn', 'Giải đấu trở nên hấp dẫn hơn khi các đội dần rũ bỏ hình ảnh quá thực dụng.', 'gradient-three'],
      ['Bundesliga', 'Bayern và Dortmund lại tạo ra một màn rượt đuổi kinh điển', 'Tốc độ, khoảng trống và những pha chuyển trạng thái khiến trận đấu cực kỳ bùng nổ.', 'gradient-four']
    ],
    fixtures: [
      ['Barcelona vs Atlético Madrid', 'La Liga • 20:00 • Camp Nou', 'Đỉnh cao'],
      ['Liverpool vs Tottenham', 'Premier League • 22:30 • Anfield', 'Top 4 battle'],
      ['Inter vs Juventus', 'Serie A • 01:45 • San Siro', 'Derby']
    ],
    standings: [
      ['1', 'Manchester City', '28', '+36', '65'],
      ['2', 'Arsenal', '28', '+32', '64'],
      ['3', 'Liverpool', '28', '+30', '63'],
      ['4', 'Aston Villa', '28', '+18', '55'],
      ['5', 'Tottenham', '28', '+15', '53']
    ],
    metrics: [
      ['Top Scorer', 'Haaland', '23 bàn thắng'],
      ['Top Assist', 'De Bruyne', '14 kiến tạo'],
      ['Clean Sheets', 'Alisson', '12 trận sạch lưới'],
      ['Form tốt nhất', 'W-W-W-D-W', 'Arsenal']
    ]
  },
  en: {
    htmlLang: 'en',
    metaDescription:
      'Claw Football - A modern football portal with breaking news, fixtures, standings, and in-depth analysis.',
    pageTitle: 'Claw Football | Modern football news portal',
    searchPlaceholder: 'Search news, clubs, competitions...',
    nav: {
      home: 'Home',
      headline: 'Top stories',
      categories: 'Categories',
      dataBoard: 'Data board',
      fixtures: 'Fixtures',
      standings: 'Standings'
    },
    hero: {
      livePill: '● Live football portal',
      title: 'Your football website now feels like a real modern sports newsroom.',
      desc:
        'A sleek dark interface, portal-style layout, featured headlines, fixtures, standings, and visual data blocks that make the site feel truly professional.',
      primaryBtn: 'View top stories',
      ghostBtn: 'Open data board',
      leagueTag: 'Premier League',
      matchStatus: "LIVE 82'",
      scoreStats: [
        ['Shots', '14 - 8'],
        ['Possession', '61% - 39%'],
        ['xG', '2.46 - 0.93']
      ]
    },
    headline: {
      featuredPill: 'Featured story',
      featuredTitle: 'The European title race is heating up as every giant hits top gear',
      featuredDesc:
        'From the Premier League to La Liga, top teams are entering the decisive stretch where a single win can reshape the entire season.',
      meta: ['Tactical analysis', '7 min read'],
      minis: [
        {
          pill: 'Transfers',
          pillClass: 'amber',
          title: '3 strikers attracting the strongest attention this summer',
          desc: 'Major clubs are moving early to gain leverage in the market.'
        },
        {
          pill: 'Champions League',
          pillClass: 'violet',
          title: 'Knockout ties that could deliver a real shock',
          desc: 'Beyond form, squad depth is quickly becoming the deciding factor.'
        }
      ]
    },
    sections: {
      categoriesPill: 'Categories',
      newsTitle: 'News & analysis',
      viewAll: 'View all →',
      dataPill: 'Data board',
      dataTitle: 'Visual data corner',
      fixturesPill: 'Fixtures',
      fixturesTitle: 'Matches worth watching',
      standingsPill: 'Standings',
      standingsTitle: 'Current top five'
    },
    sidebar: {
      trending: 'Trending',
      leagues: 'Featured leagues',
      quickStats: 'Quick stats',
      quickItems: [
        ['News today', '24'],
        ['Live matches', '08'],
        ['Tracked teams', '32']
      ],
      contact: 'Contact for partnerships'
    },
    table: ['#', 'Team', 'Played', 'GD', 'Pts'],
    trending: [
      ['Mbappé', 'His future remains the hottest story of the week'],
      ['El Clásico', 'Viewership is expected to surge before kickoff'],
      ['Champions League', 'Knockout pairings are driving major search traffic']
    ],
    leagues: [
      ['Premier League', '12 new stories', 'premier'],
      ['La Liga', '9 new stories', 'laliga'],
      ['Bundesliga', '7 new stories', 'bundes'],
      ['Champions League', '6 new stories', 'ucl']
    ],
    news: [
      ['Premier League', 'Why high pressing is returning so strongly among top sides', 'Winning the ball earlier improves chance quality and suffocates opponents from the front.', 'gradient-one'],
      ['La Liga', 'Real Madrid are rebuilding their style around speed and space', 'A younger core is helping Los Blancos become more flexible and dynamic.', 'gradient-two'],
      ['Serie A', 'Serie A is reviving through modern tactics and faster tempo', 'The league is becoming more entertaining as clubs move away from an overly pragmatic image.', 'gradient-three'],
      ['Bundesliga', 'Bayern and Dortmund have produced another classic end-to-end battle', 'Pace, open space, and relentless transitions made the match explode with energy.', 'gradient-four']
    ],
    fixtures: [
      ['Barcelona vs Atlético Madrid', 'La Liga • 20:00 • Camp Nou', 'Must-watch'],
      ['Liverpool vs Tottenham', 'Premier League • 22:30 • Anfield', 'Top-four battle'],
      ['Inter vs Juventus', 'Serie A • 01:45 • San Siro', 'Derby']
    ],
    standings: [
      ['1', 'Manchester City', '28', '+36', '65'],
      ['2', 'Arsenal', '28', '+32', '64'],
      ['3', 'Liverpool', '28', '+30', '63'],
      ['4', 'Aston Villa', '28', '+18', '55'],
      ['5', 'Tottenham', '28', '+15', '53']
    ],
    metrics: [
      ['Top Scorer', 'Haaland', '23 goals'],
      ['Top Assist', 'De Bruyne', '14 assists'],
      ['Clean Sheets', 'Alisson', '12 clean sheets'],
      ['Best form', 'W-W-W-D-W', 'Arsenal']
    ]
  }
}

export default function App() {
  const [light, setLight] = useState(false)
  const [lang, setLang] = useState('vi')

  useEffect(() => {
    const savedTheme = localStorage.getItem('claw-football-theme')
    const savedLang = localStorage.getItem('claw-football-lang')

    if (savedTheme === 'light') setLight(true)
    if (savedLang === 'vi' || savedLang === 'en') setLang(savedLang)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light', light)
    localStorage.setItem('claw-football-theme', light ? 'light' : 'dark')
  }, [light])

  const t = useMemo(() => content[lang], [lang])

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.pageTitle

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.metaDescription)

    localStorage.setItem('claw-football-lang', lang)
  }, [lang, t])

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="topbar container">
          <a className="brand" href="#">
            <span className="brand-mark">⚽</span>
            <span className="brand-text">Claw<span>Football</span></span>
          </a>
          <div className="header-actions">
            <label className="search-box">
              <span>⌕</span>
              <input type="text" placeholder={t.searchPlaceholder} />
            </label>
            <button
              className="lang-chip"
              onClick={() => setLang((current) => (current === 'vi' ? 'en' : 'vi'))}
              aria-label={lang === 'vi' ? 'Switch language to English' : 'Chuyển ngôn ngữ sang tiếng Việt'}
              title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt'}
            >
              {lang === 'vi' ? 'VI → EN' : 'EN → VI'}
            </button>
            <button className="theme-btn" onClick={() => setLight(v => !v)} aria-label="Đổi giao diện">{light ? '☀' : '☾'}</button>
          </div>
        </div>
        <nav className="navbar container">
          <a href="#hero">{t.nav.home}</a>
          <a href="#headline">{t.nav.headline}</a>
          <a href="#news-grid">{t.nav.categories}</a>
          <a href="#data-board">{t.nav.dataBoard}</a>
          <a href="#fixtures">{t.nav.fixtures}</a>
          <a href="#standings">{t.nav.standings}</a>
        </nav>
      </header>

      <main className="container main-layout">
        <section className="content-column">
          <section className="hero-panel" id="hero">
            <div className="hero-copy">
              <span className="section-pill live-pill">{t.hero.livePill}</span>
              <h1>{t.hero.title}</h1>
              <p>{t.hero.desc}</p>
              <div className="hero-actions">
                <a href="#headline" className="primary-btn">{t.hero.primaryBtn}</a>
                <a href="#data-board" className="ghost-btn">{t.hero.ghostBtn}</a>
              </div>
            </div>
            <div className="hero-score card-glass">
              <div className="score-header">
                <span className="league-tag">{t.hero.leagueTag}</span>
                <span className="match-status">{t.hero.matchStatus}</span>
              </div>
              <div className="score-main">
                <div className="club-box">
                  <div className="club-badge blue">MCI</div>
                  <strong>Manchester City</strong>
                </div>
                <div className="score-value">3<span>:</span>1</div>
                <div className="club-box right">
                  <div className="club-badge red">ARS</div>
                  <strong>Arsenal</strong>
                </div>
              </div>
              <div className="score-stats">
                {t.hero.scoreStats.map(([label, value]) => (
                  <div key={label}><span>{label}</span><strong>{value}</strong></div>
                ))}
              </div>
            </div>
          </section>

          <section className="headline-grid" id="headline">
            <article className="headline-card featured-news card-glass">
              <span className="section-pill">{t.headline.featuredPill}</span>
              <h2>{t.headline.featuredTitle}</h2>
              <p>{t.headline.featuredDesc}</p>
              <div className="headline-meta">
                {t.headline.meta.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
            {t.headline.minis.map((item) => (
              <article className="mini-news card-glass" key={item.title}>
                <span className={`section-pill ${item.pillClass}`}>{item.pill}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </section>

          <section className="news-section" id="news-grid">
            <div className="section-heading">
              <div>
                <span className="section-pill">{t.sections.categoriesPill}</span>
                <h2>{t.sections.newsTitle}</h2>
              </div>
              <a href="#" className="text-link">{t.sections.viewAll}</a>
            </div>
            <div className="news-grid portal-grid">
              {t.news.map(([category, title, desc, gradient]) => (
                <article className="news-card card-glass" key={title}>
                  <div className={`news-thumb ${gradient}`}></div>
                  <span className="category-chip">{category}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="data-board" id="data-board">
            <div className="section-heading">
              <div>
                <span className="section-pill green">{t.sections.dataPill}</span>
                <h2>{t.sections.dataTitle}</h2>
              </div>
            </div>
            <div className="data-grid">
              {t.metrics.map(([label, value, sub]) => (
                <div className="metric-card card-glass" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>{sub}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="fixtures-section" id="fixtures">
            <div className="section-heading">
              <div>
                <span className="section-pill blue">{t.sections.fixturesPill}</span>
                <h2>{t.sections.fixturesTitle}</h2>
              </div>
            </div>
            <div className="fixture-list">
              {t.fixtures.map(([title, meta, tag]) => (
                <div className="fixture-row card-glass" key={title}>
                  <div>
                    <strong>{title}</strong>
                    <p>{meta}</p>
                  </div>
                  <span className="match-chip">{tag}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="standings-section" id="standings">
            <div className="section-heading">
              <div>
                <span className="section-pill red">{t.sections.standingsPill}</span>
                <h2>{t.sections.standingsTitle}</h2>
              </div>
            </div>
            <div className="table-shell card-glass">
              <table>
                <thead>
                  <tr>{t.table.map((heading) => <th key={heading}>{heading}</th>)}</tr>
                </thead>
                <tbody>
                  {t.standings.map((row) => (
                    <tr key={row[1]}>{row.map((cell) => <td key={`${row[1]}-${cell}`}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <aside className="sidebar-column">
          <div className="sidebar-card card-glass">
            <div className="sidebar-title-row">
              <h3>{t.sidebar.trending}</h3>
              <span className="dot-live">●</span>
            </div>
            <ul className="trending-list">
              {t.trending.map(([title, sub]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-card card-glass">
            <h3>{t.sidebar.leagues}</h3>
            <div className="league-stack">
              {t.leagues.map(([name, count, cls]) => (
                <div className={`league-row ${cls}`} key={name}><span>{name}</span><strong>{count}</strong></div>
              ))}
            </div>
          </div>

          <div className="sidebar-card card-glass sticky-card">
            <h3>{t.sidebar.quickStats}</h3>
            <div className="quick-stats">
              {t.sidebar.quickItems.map(([label, value]) => (
                <div key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
            <a href="mailto:hello@clawfootball.site" className="primary-btn full-btn">{t.sidebar.contact}</a>
          </div>
        </aside>
      </main>
    </div>
  )
}
