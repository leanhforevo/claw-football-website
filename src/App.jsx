import { useEffect, useState } from 'react'

const trending = [
  ['Mbappé', 'Tương lai vẫn là chủ đề nóng nhất tuần'],
  ['El Clásico', 'Lượt xem dự báo tăng mạnh trước giờ bóng lăn'],
  ['Champions League', 'Các cặp đấu knock-out hút lượng tìm kiếm lớn']
]

const leagues = [
  ['Premier League', '12 bài mới', 'premier'],
  ['La Liga', '9 bài mới', 'laliga'],
  ['Bundesliga', '7 bài mới', 'bundes'],
  ['Champions League', '6 bài mới', 'ucl']
]

const news = [
  ['Premier League', 'Vì sao pressing tầm cao trở lại mạnh mẽ ở các đội top đầu?', 'Khả năng đoạt bóng sớm giúp tăng chất lượng cơ hội và bóp nghẹt đối thủ từ tuyến đầu.', 'gradient-one'],
  ['La Liga', 'Real Madrid đang tái cấu trúc lối chơi quanh tốc độ và không gian', 'Một bộ khung trẻ trung giúp đội bóng hoàng gia chuyển mình linh hoạt hơn.', 'gradient-two'],
  ['Serie A', 'Serie A đang hồi sinh nhờ chiến thuật hiện đại và nhịp độ nhanh hơn', 'Giải đấu trở nên hấp dẫn hơn khi các đội dần rũ bỏ hình ảnh quá thực dụng.', 'gradient-three'],
  ['Bundesliga', 'Bayern và Dortmund lại tạo ra một màn rượt đuổi kinh điển', 'Tốc độ, khoảng trống và những pha chuyển trạng thái khiến trận đấu cực kỳ bùng nổ.', 'gradient-four']
]

const fixtures = [
  ['Barcelona vs Atlético Madrid', 'La Liga • 20:00 • Camp Nou', 'Đỉnh cao'],
  ['Liverpool vs Tottenham', 'Premier League • 22:30 • Anfield', 'Top 4 battle'],
  ['Inter vs Juventus', 'Serie A • 01:45 • San Siro', 'Derby']
]

const standings = [
  ['1', 'Manchester City', '28', '+36', '65'],
  ['2', 'Arsenal', '28', '+32', '64'],
  ['3', 'Liverpool', '28', '+30', '63'],
  ['4', 'Aston Villa', '28', '+18', '55'],
  ['5', 'Tottenham', '28', '+15', '53']
]

const metrics = [
  ['Top Scorer', 'Haaland', '23 bàn thắng'],
  ['Top Assist', 'De Bruyne', '14 kiến tạo'],
  ['Clean Sheets', 'Alisson', '12 trận sạch lưới'],
  ['Form tốt nhất', 'W-W-W-D-W', 'Arsenal']
]

export default function App() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('claw-football-theme')
    if (saved === 'light') setLight(true)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light', light)
    localStorage.setItem('claw-football-theme', light ? 'light' : 'dark')
  }, [light])

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
              <input type="text" placeholder="Tìm tin tức, đội bóng, giải đấu..." />
            </label>
            <button className="lang-chip">VI / EN</button>
            <button className="theme-btn" onClick={() => setLight(v => !v)} aria-label="Đổi giao diện">{light ? '☀' : '☾'}</button>
          </div>
        </div>
        <nav className="navbar container">
          <a href="#hero">Trang chủ</a>
          <a href="#headline">Tin nóng</a>
          <a href="#news-grid">Chuyên mục</a>
          <a href="#data-board">Data board</a>
          <a href="#fixtures">Lịch đấu</a>
          <a href="#standings">BXH</a>
        </nav>
      </header>

      <main className="container main-layout">
        <section className="content-column">
          <section className="hero-panel" id="hero">
            <div className="hero-copy">
              <span className="section-pill live-pill">● Live football portal</span>
              <h1>Web bóng đá của bạn giờ mang dáng dấp một cổng tin thể thao thật sự.</h1>
              <p>Giao diện tối hiện đại, bố cục kiểu news portal, nổi bật tin nóng, lịch thi đấu, bảng xếp hạng và khu vực dữ liệu trực quan như một web bóng đá chuyên nghiệp.</p>
              <div className="hero-actions">
                <a href="#headline" className="primary-btn">Xem tin nổi bật</a>
                <a href="#data-board" className="ghost-btn">Mở data board</a>
              </div>
            </div>
            <div className="hero-score card-glass">
              <div className="score-header">
                <span className="league-tag">Premier League</span>
                <span className="match-status">LIVE 82'</span>
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
                <div><span>Shots</span><strong>14 - 8</strong></div>
                <div><span>Possession</span><strong>61% - 39%</strong></div>
                <div><span>xG</span><strong>2.46 - 0.93</strong></div>
              </div>
            </div>
          </section>

          <section className="headline-grid" id="headline">
            <article className="headline-card featured-news card-glass">
              <span className="section-pill">Tin nổi bật</span>
              <h2>Cuộc đua vô địch châu Âu nóng rực khi các ông lớn đồng loạt tăng tốc</h2>
              <p>Từ Premier League đến La Liga, các đội top đầu đang bước vào giai đoạn bản lề, nơi một chiến thắng có thể thay đổi toàn bộ cục diện mùa giải.</p>
              <div className="headline-meta">
                <span>Phân tích chiến thuật</span>
                <span>7 phút đọc</span>
              </div>
            </article>
            <article className="mini-news card-glass">
              <span className="section-pill amber">Chuyển nhượng</span>
              <h3>3 tiền đạo đang được săn đón mạnh nhất mùa hè</h3>
              <p>Các CLB lớn bắt đầu vào cuộc sớm để giành lợi thế trên thị trường.</p>
            </article>
            <article className="mini-news card-glass">
              <span className="section-pill violet">Champions League</span>
              <h3>Những cặp đấu có thể tạo địa chấn ở vòng knock-out</h3>
              <p>Không chỉ phong độ, chiều sâu đội hình đang trở thành yếu tố quyết định.</p>
            </article>
          </section>

          <section className="news-section" id="news-grid">
            <div className="section-heading">
              <div>
                <span className="section-pill">Chuyên mục</span>
                <h2>Tin tức & phân tích</h2>
              </div>
              <a href="#" className="text-link">Xem tất cả →</a>
            </div>
            <div className="news-grid portal-grid">
              {news.map(([category, title, desc, gradient]) => (
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
                <span className="section-pill green">Data board</span>
                <h2>Góc dữ liệu trực quan</h2>
              </div>
            </div>
            <div className="data-grid">
              {metrics.map(([label, value, sub]) => (
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
                <span className="section-pill blue">Lịch thi đấu</span>
                <h2>Trận cầu đáng xem</h2>
              </div>
            </div>
            <div className="fixture-list">
              {fixtures.map(([title, meta, tag]) => (
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
                <span className="section-pill red">Bảng xếp hạng</span>
                <h2>Top đầu hiện tại</h2>
              </div>
            </div>
            <div className="table-shell card-glass">
              <table>
                <thead>
                  <tr><th>#</th><th>Đội</th><th>Trận</th><th>HS</th><th>Điểm</th></tr>
                </thead>
                <tbody>
                  {standings.map((row) => (
                    <tr key={row[1]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <aside className="sidebar-column">
          <div className="sidebar-card card-glass">
            <div className="sidebar-title-row">
              <h3>Trending</h3>
              <span className="dot-live">●</span>
            </div>
            <ul className="trending-list">
              {trending.map(([title, sub]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-card card-glass">
            <h3>Giải đấu nổi bật</h3>
            <div className="league-stack">
              {leagues.map(([name, count, cls]) => (
                <div className={`league-row ${cls}`} key={name}><span>{name}</span><strong>{count}</strong></div>
              ))}
            </div>
          </div>

          <div className="sidebar-card card-glass sticky-card">
            <h3>Quick stats</h3>
            <div className="quick-stats">
              <div><span>Tin hôm nay</span><strong>24</strong></div>
              <div><span>Trận trực tiếp</span><strong>08</strong></div>
              <div><span>Đội theo dõi</span><strong>32</strong></div>
            </div>
            <a href="mailto:hello@clawfootball.site" className="primary-btn full-btn">Liên hệ hợp tác</a>
          </div>
        </aside>
      </main>
    </div>
  )
}
