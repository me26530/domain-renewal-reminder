import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/logo';

const benefitCards = [
  {
    title: '不再靠记忆续费',
    description: '把域名到期时间、提醒邮箱和续费链接集中管理，重要日期不会再散落在邮件和备忘录里。',
    badge: '安心',
  },
  {
    title: '提醒、处理、续费一条线',
    description: '从到期提醒到标记已处理，再到续费后自动进入下一个周期，整个过程保持清晰连续。',
    badge: '闭环',
  },
  {
    title: '简洁、轻量、可长期使用',
    description: '界面克制直接，适合个人和小团队长期维护自己的域名资产，不需要复杂培训。',
    badge: '轻量',
  },
];

const audienceCards = [
  {
    title: '个人站长',
    description: '管理博客、作品集、项目站点，不再担心小站因为忘记续费而失效。',
  },
  {
    title: '小团队',
    description: '把域名责任人、处理状态和备注放在同一个面板里，交接更顺畅。',
  },
  {
    title: '长期自托管项目',
    description: '适合作为稳定的内部工具，也适合对外展示成一个完整的产品项目。',
  },
];

const previewItems = [
  '统一查看即将到期的域名',
  '自动提醒，避免遗漏关键日期',
  '记录负责人、备注和处理时间',
  '续费后自动进入新的提醒周期',
];

export function Home() {
  return (
    <div className="app-shell ink-wash-bg landing-shell">
      <div className="ink-pattern" />
      <div className="landing-orb landing-orb--one" />
      <div className="landing-orb landing-orb--two" />
      <div className="landing-orb landing-orb--three" />

      <header className="app-topbar landing-topbar">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <BrandLogo title="爱自由域名管理" subtitle="Domain Renewal Reminder Service" />
          <nav className="landing-nav" aria-label="Homepage actions">
            <a href="#benefits" className="ghost-button">
              了解产品
            </a>
            <Link to="/login" className="secondary-button">
              登录
            </Link>
            <Link to="/register" className="primary-button">
              免费注册
            </Link>
          </nav>
        </div>
      </header>

      <main className="app-main landing-main">
        <section className="landing-hero">
          <div className="liquid-panel liquid-panel--hero animate-slideUp">
            <div className="liquid-chip">Domain renewal made calm</div>

            <div className="landing-copy">
              <p className="landing-kicker">优雅管理你的域名到期与续费</p>
              <h1 className="landing-title">
                把零散提醒，
                <span className="text-gradient"> 变成一套清晰好用的域名管理体验。</span>
              </h1>
              <p className="landing-description">
                爱自由域名管理帮助你统一记录域名到期时间、续费入口和提醒状态。
                页面简洁，信息明确，让你在真正需要处理的时候，准确知道哪个域名快到期、谁在负责、是否已经续费。
              </p>
            </div>

            <div className="landing-actions">
              <Link to="/register" className="primary-button">
                立即开始
              </Link>
              <Link to="/login" className="secondary-button">
                已有账号登录
              </Link>
            </div>
          </div>

          <div className="liquid-panel liquid-panel--aside animate-slideUp">
            <div className="liquid-preview">
              <div className="liquid-preview__header">
                <div>
                  <div className="liquid-preview__eyebrow">Product preview</div>
                  <h2>打开面板，就知道现在该处理什么</h2>
                </div>
                <div className="liquid-status-pill">
                  <span className="liquid-status-pill__dot" />
                  Simple and focused
                </div>
              </div>

              <div className="liquid-stack">
                {previewItems.map((item) => (
                  <div key={item} className="liquid-stack-card">
                    <div className="liquid-stack-card__title">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="landing-section">
          <div className="landing-section__heading">
            <div className="liquid-chip liquid-chip--soft">Why it feels better</div>
            <h2>它不是一个提醒弹窗，而是一个能长期使用的管理页面</h2>
            <p>
              首页只讲产品价值，不讲实现细节。重点是让访客第一眼理解它的用途、气质和适用场景。
            </p>
          </div>

          <div className="landing-feature-grid">
            {benefitCards.map((item) => (
              <article key={item.title} className="liquid-card">
                <div className="liquid-card__badge">{item.badge}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section">
          <div className="landing-section__heading">
            <div className="liquid-chip liquid-chip--soft">For people who manage domains</div>
            <h2>适合个人，也适合需要一点协作的团队</h2>
            <p>
              你不需要很复杂的系统，只需要一个稳定、顺手、看起来像成品的域名续费管理入口。
            </p>
          </div>

          <div className="workflow-grid">
            {audienceCards.map((item, index) => (
              <article key={item.title} className={`workflow-node ${index === 1 ? 'liquid-card--wide' : ''}`}>
                <div className="workflow-node__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-section">
          <div className="liquid-panel liquid-panel--cta">
            <div>
              <div className="liquid-chip liquid-chip--soft">Ready when you are</div>
              <h2 className="landing-cta__title">先看懂它，再决定登录或开始使用。</h2>
              <p className="landing-cta__text">
                这就是首页应该做的事：展示产品，而不是一打开就把人直接推进注册和登录流程。
              </p>
            </div>

            <div className="landing-actions landing-actions--compact">
              <Link to="/register" className="primary-button">
                创建账号
              </Link>
              <Link to="/login" className="secondary-button">
                进入控制台
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
