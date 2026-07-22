# NEXUS Organization OS — AI 原生组织协作工具

> 从群聊到系统：让需求流转、知识沉淀与组织洞察成为可追溯的工作闭环。

<p align="center">
  <img src="https://img.shields.io/badge/status-demo%20ready-blue?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/stack-pure%20static-brightgreen?style=flat-square" alt="Stack" />
  <img src="https://img.shields.io/badge/deploy-GitHub%20Pages-orange?style=flat-square" alt="Deploy" />
  <img src="https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square" alt="License" />
</p>

---

## 项目概述 ｜ Overview

**NEXUS Organization OS** 是一套面向早期科技团队的 AI 原生组织协作工具。项目从真实组织管理问题出发，将**需求流转**、**知识沉淀**与**组织洞察**连接为可追溯的工作闭环，而非简单地堆砌功能清单。

整个项目由组织发展负责人独立完成——从组织问题定义、机制设计到产品原型落地，将组织管理思维转化为可被工程化的产品系统。

**NEXUS Organization OS** is an AI-native organization collaboration tool designed for early-stage tech teams. Starting from real organizational pain points, it connects **requirement workflows**, **knowledge accumulation**, and **organizational insights** into a traceable closed loop — rather than simply piling up feature lists.

The entire project was independently completed by an organizational development lead — from problem definition and mechanism design to product prototyping, translating organizational management thinking into an engineerable product system.

---

## 解决的三个核心问题 ｜ Three Core Problems

| # | 问题 Problem | 描述 Description |
|---|-------------|-----------------|
| **01** | 需求在群里"失踪" | 有人提出、有人回复，但缺少统一状态、负责人和截止时间，卡在哪一步无法快速定位 |
| **02** | 知识沉在个人电脑 | 资料、决策与会议背景散落在本地，新人反复追问，团队每次都从头理解上下文 |
| **03** | 人才判断缺少证据 | 管理者掌握的信息不完整，绩效讨论容易只依赖印象，过程贡献和协作风险难以呈现 |

---

## 三大产品支柱 ｜ Three Pillars

### 1. 需求全链路流转 ｜ Full-Chain Requirement Workflow

将需求从提出、评审、拆解到交付的关键节点结构化，让未完成事项持续留在台面。

- 每一步都有状态、负责人和交接条件
- 早期项目可从 1–4 步轻量启动
- 过程数据反向进入复盘与组织洞察

### 2. Context-First LLM Wiki

知识不仅能被 AI 回答，还保留原始来源、版本与可靠性状态，避免答案成为不可解释的黑盒。

- **Raw → 整理区 → 正式 Wiki** 三级流转
- **原始 / 已确认 / 有争议 / 已过期** 四级可靠性分级
- AI 回答附来源，可回看原文上下文

### 3. 组织洞察与人才 Review

系统汇总目标、项目、质量与协作证据，为人才 Review 提供依据，但不替代管理者判断。

- 看目标完成，也看交付质量与难度
- 识别阻塞、风险和数据缺口
- 生成 Review 摘要与校准建议

---

## 五层系统架构 ｜ Five-Layer Architecture

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

## 十步需求主流程 ｜ 10-Step Requirement Workflow

| Step | 节点 Node | 角色 Role | 输入 → 输出 |
|------|-----------|-----------|-------------|
| 1 | 提出需求 | 任何人 | 自然语言描述 → 结构化需求单 |
| 2 | AI 预评审 | AI Agent | 需求单 → 补全建议 + 风险标注 |
| 3 | 产品评审 | 产品经理 | AI 预审结果 → 评审通过/打回 |
| 4 | PRD 撰写 | 产品经理 | 评审通过 → PRD 文档 |
| 5 | 技术评审 | 研发负责人 | PRD → 技术方案 + 工时估算 |
| 6 | 任务拆解 | 研发负责人 | 技术方案 → 子任务 + 负责人 |
| 7 | 开发实现 | 研发工程师 | 子任务 → 代码 + 自测报告 |
| 8 | 测试验证 | 测试工程师 | 自测报告 → 测试通过/缺陷 |
| 9 | 发布上线 | 研发 + 运营 | 测试通过 → 发布记录 |
| 10 | 项目复盘 | 全团队 | 全流程数据 → 复盘报告 |

---

## 四级权限模型 ｜ Four-Level Permission Model

| 级别 | 角色 | 可见范围 |
|------|------|----------|
| **L1** | CEO / 合伙人 | 全公司关键数据、审批、资源配置、人才决策 |
| **L2** | 组织发展 / 系统管理员 | 权限配置、组织数据、管理层汇总视图 |
| **L3** | 部门负责人 | 本部门全部数据 + 授权跨部门共享内容 |
| **L4** | 普通员工 | 个人任务、参与项目、全员公开知识 |

> 透明不等于无边界。权限按照角色职责、部门范围与项目参与关系控制可见内容和可执行操作。

---

## 项目文件结构 ｜ File Structure

```
ai-organization-os/
├── index.html              # 项目作品集首页（问题、方案、落地状态、个人角色）
├── demo.html               # 可交互产品 Demo（7 个功能页面）
├── framework.html          # 五层系统架构 + 十步流程 + 四级权限
├── 404.html                # 404 页面
├── .nojekyll               # GitHub Pages bypass Jekyll
├── README.md               # 项目介绍（本文件）
└── assets/
    ├── design-tokens.css   # 设计令牌系统
    ├── shared-components.css # 共享组件
    ├── styles.css          # 首页样式
    ├── light-tech.css      # Light-Tech 视觉主题
    ├── neo-tech.css        # Neo-Tech 增强主题
    ├── demo-theme.css      # Demo 页面主题
    ├── site.js             # 全局交互逻辑
    ├── framework.js        # 架构页交互 + 流程模拟
    ├── demo.js             # Demo 全部交互逻辑
    └── motion.js           # 动效系统（滚动、粒子、倾斜等）
```

---

## Demo 中可体验的功能 ｜ What You Can Try

| 功能 Feature | 描述 Description |
|-------------|-----------------|
| 自然语言提需求 | 输入需求描述，模拟 AI 生成结构化需求单 |
| 需求筛选与管理 | 按状态/负责人筛选，导出 CSV |
| 十步流程播放 | 查看每步输入、输出和自动化交接逻辑 |
| LLM Wiki | 上传资料 → AI 整理 → 关联 → 人工确认 |
| Organization Copilot | 带来源引用的 AI 组织问答 |
| 人才 Review 摘要 | 生成证据摘要，明确提示管理者校准边界 |
| 本地持久化 | 通过 localStorage 保存新增需求和知识文档 |

---

## 交付状态透明化 ｜ Transparent Delivery Status

本项目明确区分能力所处的真实阶段：

| 状态 | 含义 | 示例 |
|------|------|------|
| 🟢 示例 · 已落地 | 已在现有协作工具中运行 | 需求入口、审批、追踪 |
| 🟡 示例 · 试运行 | 正在小范围验证机制 | Context 收集、LLM Wiki 工作方式 |
| 🔵 示例 · 产品蓝图 | 已完成高保真原型设计 | Agent 自动化、组织洞察 |

> 正式上线仍需要后端服务、企业身份认证、权限审计、数据安全、Agent 运行环境和人工审核机制。

---

## 技术栈 ｜ Tech Stack

- **纯静态前端**：HTML5 + CSS3 + Vanilla JavaScript
- **视觉系统**：Light-Tech 浅色科技风格，玻璃拟态 + 蓝青渐变 + 克制动效
- **部署平台**：GitHub Pages（无需服务器、无需数据库）
- **持久化**：浏览器 localStorage
- **零依赖**：无需 npm install，无需构建工具

---

## 本地预览 ｜ Local Preview

直接双击 `index.html` 可浏览大部分功能。为获得更一致体验，建议启动本地服务器：

```bash
# Python 3
python3 -m http.server 8000

# Node.js (with npx)
npx http-server -p 8000

# Or any static server you prefer
```

然后访问 `http://localhost:8000`。

---

## GitHub Pages 部署 ｜ Deploy

1. 将本项目所有文件上传至你的 GitHub 仓库
2. 进入仓库 **Settings → Pages**
3. **Source** 选择 `Deploy from a branch`
4. **Branch** 选择 `main`（或 `master`），目录选择 `/ (root)`
5. 点击 **Save**，等待 1-2 分钟部署完成
6. 访问 `https://你的用户名.github.io/仓库名/`

---

## 设计边界 ｜ Design Boundaries

- 页面中所有人物姓名、项目名称、业务数据和风险场景均为**虚构示例**
- 本项目为高保真系统原型与组织机制设计作品集，不代表所有能力已完成企业级工程部署
- 不可直接用于生产环境，正式上线需补充后端服务、身份认证、数据安全和人工审核机制

---

## 个人角色 ｜ My Role

本项目由组织发展负责人独立完成：

- 🧭 **组织问题定义**：识别真实协作断点，完成用户、角色与权限拆解
- 🏗️ **系统机制设计**：设计三根支柱、五层架构与十步需求主流程
- 🎨 **产品原型落地**：建立功能优先级、落地状态与产品边界
- 💻 **Web 开发实现**：独立制作完整可交互原型（Vibe Coding）
- 🔄 **持续迭代**：基于典型用户反馈优化交互与信息架构

核心价值不是"写了一个网页"，而是把**组织机制转译成可被产品化的系统**。

---

## 视觉主题 ｜ Visual Theme

本次为 **Light-Tech 浅色科技版**，以白、雾蓝和浅紫为主色调，融合以下设计语言：

- 🫧 玻璃拟态（Glassmorphism）与半透明卡片
- 📐 细网格纹理与微妙渐变
- ✨ 轻量霓虹点缀与克制动效
- 🎯 滚动进度、鼠标光晕、卡片 3D 倾斜
- 📱 完整响应式适配（Desktop / Tablet / Mobile）
- ♿ 尊重 `prefers-reduced-motion` 用户偏好

---

## License

MIT — 代码可自由使用、修改和分发。项目中的人物、项目和业务数据均为虚构示例。

---

<p align="center">
  <em>Built with ❤️ by an organizational development practitioner, powered by AI-assisted coding.</em>
  <br/>
  <em>由组织发展实践者独立打造，AI 辅助编码实现。</em>
</p>
