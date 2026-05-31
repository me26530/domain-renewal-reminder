import { Link } from 'react-router-dom';
import {
  GithubLogoIcon,
  CloudArrowUpIcon,
  BellIcon,
  SparkleIcon,
  ArrowsClockwiseIcon,
  ArrowRightIcon,
} from '@phosphor-icons/react';
import { BrandLogo } from '../components/logo';
import heroImage from '../assets/home-hero-imagegen.png';

const repoUrl = 'https://github.com/zhikanyeye/domain-renewal-reminder';

const features = [
  {
    icon: CloudArrowUpIcon,
    title: '集中管理',
    description: '域名、到期时间、续费链接统一视图',
    tinted: true,
  },
  {
    icon: BellIcon,
    title: '自动提醒',
    description: '系统计算提醒节奏，降低人工成本',
    tinted: false,
  },
  {
    icon: SparkleIcon,
    title: 'AI 导入',
    description: '批量导入、文字识别、图片识别',
    tinted: false,
  },
  {
    icon: ArrowsClockwiseIcon,
    title: '状态同步',
    description: '续费流程全程可追踪，多人协作',
    tinted: true,
  },
];

export function Home() {
  return (
    <div className="home-landing min-h-[100dvh] bg-[#f6fbfd] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-900 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
      >
        跳到主要内容
      </a>

      <header className="sticky top-0 z-40 w-full border-b border-cyan-950/10 bg-white/82 [-webkit-backdrop-filter:blur(14px)_saturate(180%)] backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/78">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          <BrandLogo compact title="爱自由域名管理" subtitle="Renewal operations" />

          <nav className="flex items-center gap-2 sm:gap-6" aria-label="主导航">
            <a
              href="#features"
              className="hidden text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 sm:inline dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              主要功能
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden text-zinc-600 transition-colors hover:text-zinc-900 sm:inline-flex dark:text-zinc-400 dark:hover:text-zinc-100"
              aria-label="GitHub 仓库"
            >
              <GithubLogoIcon size={20} weight="fill" />
            </a>
            <Link
              to="/login"
              className="rounded-full border border-cyan-950/15 bg-white px-3 py-2 text-sm font-semibold text-zinc-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-cyan-700/30 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.98] sm:px-4 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-cyan-300/30 dark:hover:bg-zinc-800"
            >
              登录
            </Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="relative mx-auto grid w-full max-w-7xl min-w-0 items-center gap-10 overflow-hidden px-6 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] lg:px-8 lg:pb-24" aria-labelledby="hero-title">
          <div className="home-hero-copy w-full min-w-0">
            <p className="hero-eyebrow home-anim text-xs font-bold uppercase tracking-[0.14em] text-cyan-700 sm:tracking-[0.18em] dark:text-cyan-300">
              Domain Renewal Reminder
            </p>

            <h1
              id="hero-title"
              className="hero-title home-anim mt-5 max-w-full text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-zinc-950 min-[390px]:text-[2.45rem] sm:max-w-[11ch] sm:text-6xl sm:leading-[1.03] lg:text-7xl dark:text-zinc-50"
            >
              <span className="block">别让域名</span>
              <span className="block">悄悄过期</span>
            </h1>

            <p className="hero-subtext home-anim mt-5 max-w-[34ch] text-[0.95rem] leading-7 text-zinc-600 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-8 dark:text-zinc-400">
              域名、续费链接、提醒邮件和处理状态在同一张工作台同步，到期前提醒，续费后进入下个周期。
            </p>

            <div className="hero-cta home-anim mt-8 flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                to="/register"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(8,145,178,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-800 hover:shadow-[0_22px_44px_rgba(8,145,178,0.28)] active:translate-y-0 active:scale-[0.98] sm:w-auto"
              >
                立即开始
                <ArrowRightIcon size={17} weight="bold" />
              </Link>
              <Link
                to="/login"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-cyan-950/15 bg-white/90 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-700/30 hover:bg-cyan-50 active:translate-y-0 active:scale-[0.98] sm:w-auto dark:border-white/15 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:border-cyan-300/30 dark:hover:bg-zinc-800"
              >
                进入控制台
              </Link>
            </div>

            <div className="home-anim mt-8 grid w-full max-w-xl min-w-0 grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
              <div className="min-w-0 rounded-2xl border border-cyan-950/10 bg-white/70 p-3 shadow-sm sm:p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-xl font-semibold text-zinc-950 sm:text-2xl dark:text-zinc-50">20</div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">批量扫描</div>
              </div>
              <div className="min-w-0 rounded-2xl border border-cyan-950/10 bg-white/70 p-3 shadow-sm sm:p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-xl font-semibold text-zinc-950 sm:text-2xl dark:text-zinc-50">08:00</div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">定时检查</div>
              </div>
              <div className="min-w-0 rounded-2xl border border-cyan-950/10 bg-white/70 p-3 shadow-sm sm:p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-xl font-semibold text-zinc-950 sm:text-2xl dark:text-zinc-50">AI</div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">智能导入</div>
              </div>
            </div>
          </div>

          <div className="home-hero-visual home-anim w-full min-w-0" aria-label="域名管理工作台预览">
            <div className="home-visual-shell">
              <div className="home-visual-toolbar">
                <span />
                <span />
                <span />
                <strong>Renewal desk</strong>
              </div>
              <img src={heroImage} alt="域名续费提醒产品视觉" className="home-visual-image" />
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          aria-labelledby="features-title"
        >
          <div className="max-w-2xl">
            <h2
              id="features-title"
              className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50"
            >
              续费进度、提醒状态、处理结果，一处跟踪
            </h2>
          </div>

          <div className="home-stagger mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              const surfaceClass = feature.tinted
                ? 'bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/30 dark:to-zinc-900'
                : 'bg-white/86 dark:bg-zinc-900/86';
              return (
                <article
                  key={feature.title}
                  className={`feature-card group rounded-2xl border border-cyan-950/10 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-700/25 hover:shadow-[0_18px_44px_rgba(8,47,73,0.08)] sm:p-6 dark:border-white/10 dark:hover:border-cyan-300/25 dark:hover:shadow-[0_18px_44px_rgba(0,0,0,0.42)] ${surfaceClass}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 transition-transform duration-300 group-hover:scale-105 group-hover:bg-cyan-200 dark:bg-cyan-900/40 dark:group-hover:bg-cyan-800/50">
                    <Icon
                      size={22}
                      weight="duotone"
                      className="text-cyan-700 dark:text-cyan-300"
                    />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-zinc-950 dark:text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <footer className="border-t border-cyan-950/10 bg-white/70 py-6 sm:py-8 dark:border-white/10 dark:bg-zinc-900/70">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <GithubLogoIcon size={16} weight="fill" />
              <span>MIT License</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
