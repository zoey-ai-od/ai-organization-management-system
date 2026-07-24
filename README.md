   # NEXUS — AI 原生组织协作工具

<div align="center">

<img src="https://img.shields.io/badge/NEXUS-AI%20Native%20Org%20Stack-6366f1?style=for-the-badge&logoColor=white" alt="NEXUS" />

**从群聊到工具：让需求流转、知识沉淀与组织洞察成为可追溯的工作闭环。**

<p>
  <a href="https://zoey-ai-od.github.io/ai-organization-collaboration-tool/" target="_blank"><img src="https://img.shields.io/badge/🚀%20Live%20Demo-在线体验-0ea5e9?style=flat-square" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/status-demo%20ready-blue?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/stack-pure%20static-brightgreen?style=flat-square" alt="Stack" />
  <img src="https://img.shields.io/badge/deploy-GitHub%20Pages-orange?style=flat-square" alt="Deploy" />
  <img src="https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square" alt="License" />
</p>

</div>

---

## 一句话介绍

**NEXUS** 是一套面向早期科技团队的 **AI 原生组织协作原型**，把「需求怎么传、知识怎么留、人怎么看」三个组织日常痛点，转译成一套可体验、可推演的产品界面。

> 不是又一个看板工具，而是把**组织机制**变成**产品能力**的尝试。

---

## ✨ 三大核心能力

| 能力 | 解决什么问题 | 体验亮点 |
|------|-------------|----------|
| 🔄 **需求全链路流转** | 群聊里提出的需求容易丢、状态不清、负责人不明 | 十步主流程 + AI 预评审 + 状态自动交接 |
| 🧠 **Context-First LLM Wiki** | 资料存在个人电脑，新人反复问、决策没依据 | Raw → 整理 → Wiki 三级流转，AI 回答带原文来源 |
| 📊 **组织洞察与人才 Review** | 管理者凭印象评价，过程贡献和风险难呈现 | 汇总目标、项目、协作证据，生成 Review 摘要 |

<details>
<summary><b>🎯 点这里看十步需求流程</b></summary>

| Step | 节点 | 角色 | 输入 → 输出 |
|------|------|------|-------------|
| 1 | 提出需求 | 任何人 | 自然语言 → 结构化需求单 |
| 2 | AI 预评审 | AI Agent | 补全建议 + 风险标注 |
| 3 | 产品评审 | 产品经理 | 通过 / 打回 |
| 4 | PRD 撰写 | 产品经理 | 评审通过 → PRD |
| 5 | 技术评审 | 研发负责人 | 技术方案 + 工时估算 |
| 6 | 任务拆解 | 研发负责人 | 子任务 + 负责人 |
| 7 | 开发实现 | 研发工程师 | 代码 + 自测报告 |
| 8 | 测试验证 | 测试工程师 | 测试通过 / 缺陷 |
| 9 | 发布上线 | 研发 + 运营 | 发布记录 |
| 10 | 项目复盘 | 全团队 | 复盘报告 |

</details>

---

## 🏗️ 五层架构

```
┌─────────────────────────────────────────────────────┐
│  Layer 5 — 组织洞察与决策层  Insight & Decision      │
│  经营节奏 · 组织风险 · 人才 Review · 管理决策界面      │
├─────────────────────────────────────────────────────┤
│  Layer 4 — 功能与 Agent 层  Application              │
│  仪表盘 · 需求管理 · Organization Copilot · Agent    │
├─────────────────────────────────────────────────────┤
│  Layer 3 — 流程与协作层  Workflow                    │
│  十步需求主流程 · 自动交接 · 阻塞异常 · 评审闭环      │
├─────────────────────────────────────────────────────┤
│  Layer 2 — 知识与 Context 层  Knowledge              │
│  Raw 资料区 · AI 整理 · 可靠性分级 · 来源追溯        │
├─────────────────────────────────────────────────────┤
│  Layer 1 — 基础设施层  Infrastructure                │
│  统一身份 · 角色权限 · 事件通知 · 安全审计            │
└─────────────────────────────────────────────────────┘
```

**设计哲学**：底层解决账号、权限与安全；中间层连接知识和流程；上层将过程数据转化为管理决策支持。

---

## 🚀 在线体验

| 入口 | 链接 | 适合看什么 |
|------|------|-----------|
| 🏠 **项目主页** | [index.html](https://zoey-ai-od.github.io/ai-organization-collaboration-tool/) | 项目定位、核心问题、个人角色 |
| 🧪 **交互 Demo** | [demo.html](https://zoey-ai-od.github.io/ai-organization-collaboration-tool/demo.html) | 提需求、Wiki、Copilot、Review 摘要 |
| 🏛️ **架构与流程** | [framework.html](https://zoey-ai-od.github.io/ai-organization-collaboration-tool/framework.html) | 五层架构、十步流程、四级权限 |

> 💡 **推荐路径**：先看 [Demo](https://zoey-ai-od.github.io/ai-organization-collaboration-tool/demo.html) 里「自然语言提需求」和「LLM Wiki」，再读 [架构页](https://zoey-ai-od.github.io/ai-organization-collaboration-tool/framework.html) 理解机制设计。

---

## 🧭 解决的三个核心问题

| # | 问题 | 典型场景 |
|---|------|----------|
| **01** | 需求在群里"失踪" | 有人提出、有人回复，但缺少统一状态、负责人和截止时间 |
| **02** | 知识沉在个人电脑 | 资料、决策与会议背景散落，新人反复追问 |
| **03** | 人才判断缺少证据 | 绩效讨论容易只依赖印象，过程贡献难呈现 |

---

## 🛠️ 技术栈

- **纯静态前端**：HTML5 + CSS3 + Vanilla JavaScript
- **视觉风格**：Light-Tech 浅色科技风格，玻璃拟态 + 蓝青渐变 + 克制动效
- **部署平台**：GitHub Pages（无需服务器、无需数据库）
- **持久化**：浏览器 localStorage
- **零依赖**：无需 npm install，无需构建工具

---

## 📦 项目结构

```
ai-organization-collaboration-tool/
├── index.html              # 项目作品集首页
├── demo.html               # 可交互产品 Demo（7 个功能页面）
├── framework.html          # 五层架构 + 十步流程 + 四级权限
├── 404.html                # 404 页面
├── .nojekyll               # GitHub Pages bypass Jekyll
├── README.md               # 项目介绍（本文件）
└── assets/
    ├── design-tokens.css   # 设计令牌
    ├── shared-components.css # 共享组件
    ├── styles.css          # 首页样式
    ├── light-tech.css      # Light-Tech 视觉主题
    ├── neo-tech.css        # Neo-Tech 增强主题
    ├── demo-theme.css      # Demo 页面主题
    ├── site.js             # 全局交互逻辑
    ├── framework.js        # 架构页交互 + 流程模拟
    ├── demo.js             # Demo 全部交互逻辑
    └── motion.js           # 动效引擎（滚动、粒子、倾斜等）
```

---

## 🧪 Demo 可体验功能

| 功能 | 描述 |
|------|------|
| 自然语言提需求 | 输入需求描述，模拟 AI 生成结构化需求单 |
| 需求筛选与管理 | 按状态/负责人筛选，导出 CSV |
| 十步流程播放 | 查看每步输入、输出和自动化交接逻辑 |
| LLM Wiki | 上传资料 → AI 整理 → 关联 → 人工确认 |
| Organization Copilot | 带来源引用的 AI 组织问答 |
| 人才 Review 摘要 | 生成证据摘要，明确提示管理者校准边界 |
| 本地持久化 | 通过 localStorage 保存新增需求和知识文档 |

---

## 📋 交付状态透明化

| 状态 | 含义 | 示例 |
|------|------|------|
| 🟢 示例 · 已落地 | 已在现有协作工具中运行 | 需求入口、审批、追踪 |
| 🟡 示例 · 试运行 | 正在小范围验证机制 | Context 收集、LLM Wiki 工作方式 |
| 🔵 示例 · 产品蓝图 | 已完成高保真原型设计 | Agent 自动化、组织洞察 |

> 正式上线仍需要后端服务、企业身份认证、权限审计、数据安全、Agent 运行环境和人工审核机制。

---

## 🎨 视觉主题

本次为 **Light-Tech 浅色科技版**，以白、雾蓝和浅紫为主色调：

- 🫧 玻璃拟态与半透明卡片
- 📐 细网格纹理与微妙渐变
- ✨ 轻量霓虹点缀与克制动效
- 🎯 滚动进度、鼠标光晕、卡片 3D 倾斜
- 📱 完整响应式适配
- ♿ 尊重 `prefers-reduced-motion`

---

## 🙋 我的角色

本项目由组织发展负责人独立完成：

- 🧭 **组织问题定义**：识别真实协作断点，完成用户、角色与权限拆解
- 🏗️ **组织机制设计**：设计三根支柱、五层架构与十步需求主流程
- 🎨 **产品原型落地**：建立功能优先级、落地状态与产品边界
- 💻 **Web 开发实现**：独立制作完整可交互原型（Vibe Coding）
- 🔄 **持续迭代**：基于典型用户反馈优化交互与信息架构

**核心价值不是"写了一个网页"，而是把组织机制转译成可被产品化的工具。**

---

## 🚀 本地预览

直接双击 `index.html` 可浏览大部分功能。为获得更一致体验，建议启动本地服务器：

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server -p 8000
```

然后访问 `http://localhost:8000`。

---

## ⚠️ 设计边界

- 页面中所有人物姓名、项目名称、业务数据和风险场景均为**虚构示例**
- 本项目为高保真产品原型与组织机制设计作品集，不代表所有能力已完成企业级工程部署
- 不可直接用于生产环境

---

## License

MIT — 代码可自由使用、修改和分发。项目中的人物、项目和业务数据均为虚构示例。

---

<p align="center">
  <em>Built with ❤️ by an organizational development practitioner, powered by AI-assisted coding.</em>
  <br/>
  <em>由组织发展实践者独立打造，AI 辅助编码实现。</em>
</p>
