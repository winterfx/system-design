import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          基于 16 次真实架构经历，从数据持久化到微服务，从缓存设计到开发运维，系统化掌握架构设计能力
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/data-persistence/cold-hot-separation">
            开始学习
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <div className="stat-item">
              <div className="stat-number">16</div>
              <div className="stat-label">架构实战经历</div>
            </div>
          </div>
          <div className="col col--3">
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">核心模块</div>
            </div>
          </div>
          <div className="col col--3">
            <div className="stat-item">
              <div className="stat-number">18</div>
              <div className="stat-label">章节内容</div>
            </div>
          </div>
          <div className="col col--3">
            <div className="stat-item">
              <div className="stat-number">90</div>
              <div className="stat-label">架构图解</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type PartItem = {
  title: string;
  part: string;
  icon: string;
  description: string;
  chapters: string[];
  link: string;
};

const PartList: PartItem[] = [
  {
    title: '数据持久化层',
    part: '第1部分',
    icon: '💾',
    description: '存储数据量太大影响读写性能时，如何在存储层采取措施解决性能问题',
    chapters: ['冷热分离', '查询分离', '分表分库'],
    link: '/docs/data-persistence/cold-hot-separation',
  },
  {
    title: '缓存层场景',
    part: '第2部分',
    icon: '⚡',
    description: '大流量时如何避免流量直接压垮数据库层，掌握缓存架构设计',
    chapters: ['读缓存', '写缓存', '数据收集', '秒杀架构'],
    link: '/docs/caching/read-cache',
  },
  {
    title: '微服务场景',
    part: '第3部分',
    icon: '🔗',
    description: '业务逻辑分布在不同服务时，如何使用常见组件解决各种问题',
    chapters: ['注册发现', '链路追踪', '熔断', '限流'],
    link: '/docs/microservices/service-discovery',
  },
  {
    title: '微服务进阶',
    part: '第4部分',
    icon: '🚀',
    description: '在大公司使用微服务时会面临的问题及无常见组件可用时的解决方案',
    chapters: ['微服务的痛', '数据一致性', '数据同步', 'BFF模式'],
    link: '/docs/microservices-advanced/microservices-pain',
  },
  {
    title: '开发运维场景',
    part: '第5部分',
    icon: '🛠️',
    description: '通过架构设计提高开发效率和测试微服务的效率',
    chapters: ['接口Mock', '一人一套测试环境'],
    link: '/docs/devops/interface-mock',
  },
  {
    title: '结束语',
    part: '第6部分',
    icon: '🎯',
    description: '通过真实经历分享如何成为领导眼中不可或缺的人',
    chapters: ['如何成为不可或缺的人'],
    link: '/docs/conclusion/indispensable',
  },
];

function PartCard({title, part, icon, description, chapters, link}: PartItem) {
  return (
    <div className="col col--4" style={{marginBottom: '1.5rem'}}>
      <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className="part-card">
          <div className="part-icon">{icon}</div>
          <span className="part-number">{part}</span>
          <Heading as="h3" style={{marginBottom: '0.5rem', fontSize: '1.25rem'}}>
            {title}
          </Heading>
          <p style={{color: 'var(--ifm-color-emphasis-700)', fontSize: '0.9rem', marginBottom: '0.75rem'}}>
            {description}
          </p>
          <ul className="chapter-list">
            {chapters.map((chapter, idx) => (
              <li key={idx}>{chapter}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

function PartsSection() {
  return (
    <section className={styles.partsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          内容架构
        </Heading>
        <p className={styles.sectionSubtitle}>
          从实际场景出发，系统化掌握架构设计的核心能力
        </p>
        <div className="row">
          {PartList.map((props, idx) => (
            <PartCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Heading as="h2" style={{marginBottom: '1rem'}}>
          准备好成为架构师了吗？
        </Heading>
        <p style={{fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--ifm-color-emphasis-700)'}}>
          只有先懂场景才能学好架构，从第一章开始你的架构之旅
        </p>
        <Link
          className="button button--primary button--lg"
          to="/docs/data-persistence/cold-hot-separation">
          从冷热分离开始
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="架构实战指南"
      description="从程序员到架构师：大数据量、缓存、高并发、微服务、多团队协同等核心场景实战">
      <HomepageHeader />
      <main>
        <StatsSection />
        <PartsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
