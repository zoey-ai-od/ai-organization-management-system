document.addEventListener('DOMContentLoaded', () => {
  const state = {
    currentView: 'overview',
    currentReqStatus: 'all',
    currentReqPriority: 'all',
    currentFolder: '全部资料',
    currentFlowStep: 4,
    requirements: [
      { id:'req-1', title:'智能设备异常事件回溯', priority:'P0', dept:'硬件产品部', ownerName:'苏晴', owner:'苏', status:'待评审', deadline:'07-22', requester:'产品经理A', desc:'围绕产品异常事件建立回溯链路，支持问题定位与后续复盘。', actions:['完成需求评审','确认埋点与日志方案','安排开发排期'], linkedOKR:'产品可靠性提升', linkedTask:'嵌入式验证方案' },
      { id:'req-2', title:'北极星 Demo 状态可视化', priority:'P0', dept:'研发部门', ownerName:'郑昊', owner:'郑', status:'进行中', deadline:'07-25', requester:'CEO', desc:'为北极星 Demo 增加状态可视化能力，帮助管理层实时掌握推进情况。', actions:['拆分开发任务','确认前置依赖','同步测试计划'], linkedOKR:'北极星 Demo 交付', linkedTask:'Dashboard 开发' },
      { id:'req-3', title:'海外用户研究第 4 轮', priority:'P1', dept:'内容营销部', ownerName:'唐悦', owner:'唐', status:'进行中', deadline:'07-28', requester:'内容营销部', desc:'围绕海外用户体验与购买动机开展新一轮研究，沉淀结构化结论。', actions:['完成访谈纪要','同步用户洞察','沉淀知识库'], linkedOKR:'用户洞察体系建设', linkedTask:'用户研究执行' },
      { id:'req-4', title:'发布页面产品价值结构优化', priority:'P1', dept:'GTM 部', ownerName:'何嘉', owner:'何', status:'待评审', deadline:'07-23', requester:'GTM 部', desc:'优化产品价值表达结构，支持发布节奏与市场转化。', actions:['对齐品牌表达','同步产品能力边界','进入评审'], linkedOKR:'GTM 发布准备', linkedTask:'产品页改版' },
      { id:'req-5', title:'嵌入式日志自动归档', priority:'P1', dept:'研发部门', ownerName:'郑昊', owner:'郑', status:'有阻塞', deadline:'07-26', requester:'研发部门', desc:'将嵌入式日志沉淀进统一目录，并自动建立版本与上下文关联。', actions:['确认日志格式','补充权限策略','排查当前阻塞项'], linkedOKR:'数据资产管理', linkedTask:'日志归档自动化' },
      { id:'req-6', title:'新员工 Context Onboarding', priority:'P2', dept:'组织发展部', ownerName:'组织发展', owner:'OD', status:'已完成', deadline:'07-18', requester:'组织发展部', desc:'将入职资料、组织信息与上下文材料整合到统一 onboarding 流程。', actions:['沉淀标准资料','完善欢迎流程','组织复盘'], linkedOKR:'组织能力建设', linkedTask:'入职流程优化' },
      { id:'req-7', title:'竞品 Mapping 数据库更新', priority:'P2', dept:'GTM 部', ownerName:'沈墨', owner:'沈', status:'已完成', deadline:'07-17', requester:'GTM 部', desc:'更新竞品数据库与标签体系，支持销售与产品决策。', actions:['完善标签','同步结论','沉淀知识库'], linkedOKR:'市场情报系统', linkedTask:'竞品库维护' },
      { id:'req-8', title:'需求评审记录模板统一', priority:'P2', dept:'组织发展部', ownerName:'组织发展', owner:'OD', status:'进行中', deadline:'07-24', requester:'组织发展部', desc:'统一评审记录模板，提升需求过程留痕质量。', actions:['统一模板字段','培训相关负责人','追踪执行效果'], linkedOKR:'流程标准化', linkedTask:'模板统一化' }
    ],
    processSteps: [
      { id:'step-1', title:'提出需求', role:'任何人', desc:'通过统一入口收集需求背景、目标与关键时间。', actions:['补齐背景信息','指定发起人','进入评审队列'] },
      { id:'step-2', title:'需求评审', role:'硬件产品负责人', desc:'确认需求价值、范围与优先级。', actions:['明确优先级','确认收益','记录评审结论'] },
      { id:'step-3', title:'PRD 生成', role:'产品负责人', desc:'输出结构化 PRD，并建立关联文档。', actions:['生成 PRD','关联上游材料','锁定版本'] },
      { id:'step-4', title:'任务拆分', role:'研发负责人', desc:'AI 基于已锁定 PRD 拆解任务，并根据角色能力与项目分工生成建议负责人。', actions:['拆分软件 / 硬件 / 接口任务','识别前置依赖','建议负责人和预计周期'] },
      { id:'step-5', title:'测试用例', role:'研发 / 测试', desc:'围绕任务设计用例与验证路径。', actions:['整理测试场景','补齐边界用例','同步质量门槛'] },
      { id:'step-6', title:'研发执行', role:'研发部门', desc:'按照任务清单推进开发，过程自动留痕。', actions:['每日更新进展','同步风险','记录关键决策'] },
      { id:'step-7', title:'测试执行', role:'研发 / 测试', desc:'开展联调和回归测试，追踪问题闭环。', actions:['回归测试','输出报告','修复问题'] },
      { id:'step-8', title:'交付评审', role:'跨部门评审组', desc:'确认交付结果、上线边界与风险。', actions:['完成交付评审','确认上线条件','记录结论'] },
      { id:'step-9', title:'上线发布', role:'GTM 部', desc:'协调发布节奏与内外部沟通。', actions:['准备物料','协调发布窗口','跟踪反馈'] },
      { id:'step-10', title:'复盘与 Review', role:'系统 + 管理层', desc:'沉淀证据，辅助复盘与人才 Review。', actions:['产出复盘记录','补齐证据链','形成洞察摘要'] }
    ],
    folderGroups: {
      primary: ['全部资料', 'Raw 原始区', 'AI 整理区', '正式 Wiki', '已过期'],
      secondary: ['产品文档', '用户研究', '技术方案', '会议纪要']
    },
    docs: {
      '全部资料': [
        { id:'doc-1', title:'智能硬件产业全景分析.md', meta:'市场研究 · 组织发展 · 2 天前 · 12 个来源', status:'已确认', statusClass:'status-confirmed', group:'正式 Wiki', desc:'梳理产业链、关键玩家与市场判断，保留来源与版本信息。', actions:['继续维护版本','补充新增来源','同步 GTM'] },
        { id:'doc-2', title:'北极星 Demo 产品上下文.md', meta:'产品文档 · 硬件产品部 · 今天 · 8 条关联', status:'已确认', statusClass:'status-confirmed', group:'产品文档', desc:'沉淀北极星 Demo 目标、结构、关键依赖与范围边界。', actions:['同步最新依赖','更新负责人','关联需求中心'] },
        { id:'doc-3', title:'海外用户访谈_第3轮.md', meta:'用户研究 · 内容营销部 · 3 天前 · 4 份访谈', status:'AI 已整理', statusClass:'status-organized', group:'用户研究', desc:'自动整理访谈结论与关键用户洞察。', actions:['人工复核要点','补充标签','沉淀正式知识'] },
        { id:'doc-4', title:'嵌入式日志规范_v0.6.md', meta:'技术方案 · 研发部门 · 5 天前 · Git v0.6', status:'已确认', statusClass:'status-confirmed', group:'技术方案', desc:'说明嵌入式日志规范、写入方式与回溯策略。', actions:['继续版本演进','同步测试','补充示例'] },
        { id:'doc-5', title:'GTM 发布节奏 Context.md', meta:'部门 Context · GTM 部 · 17 天前 · 需更新', status:'已过期', statusClass:'status-expired', group:'会议纪要', desc:'记录 GTM 发布节奏、时间窗口与依赖事项，当前已过期。', actions:['发起更新提醒','与 GTM 对齐','更新到正式 Wiki'] },
        { id:'doc-6', title:'2026 Q2 人和组织会议纪要.md', meta:'会议纪要 · 组织发展部 · 刚刚 · 原始资料', status:'Raw 原始资料', statusClass:'status-raw', group:'会议纪要', desc:'保留会议纪要、决策项与后续行动，支持组织洞察。', actions:['整理摘要','提炼行动项','确认最终版本'] }
      ]
    },
    roadmap: [
      {
        key:'已在真实流程使用', count:4, tagClass:'tag-live', tagText:['已上线','已上线','已配置','已运行'],
        items:[
          { id:'rm-1', title:'统一需求入口', desc:'需求结构化、负责人、优先级与截止时间。', tag:'已上线', kind:'live' },
          { id:'rm-2', title:'审批与状态追踪', desc:'通过现有协作工具形成可视链路。', tag:'已上线', kind:'live' },
          { id:'rm-3', title:'信息共享规则', desc:'按全员、部门和管理层区分可见范围。', tag:'已配置', kind:'live' },
          { id:'rm-4', title:'Context 更新节奏', desc:'部门定期更新，HR 汇总与版本留痕。', tag:'已运行', kind:'live' }
        ]
      },
      {
        key:'试跑与验证中', count:3, tagClass:'tag-pilot', tagText:['小范围试跑','原型验证','规则试跑'],
        items:[
          { id:'rm-5', title:'LLM Wiki', desc:'验证 Markdown、Git、AI 工具的来源可追溯方式。', tag:'小范围试跑', kind:'pilot' },
          { id:'rm-6', title:'AI 问答', desc:'基于已确认文档回答并附来源。', tag:'原型验证', kind:'pilot' },
          { id:'rm-7', title:'知识可靠性分级', desc:'原始、已整理、已确认、有争议与过期。', tag:'规则试跑', kind:'pilot' }
        ]
      },
      {
        key:'产品蓝图', count:5, tagClass:'tag-blueprint', tagText:['待工程开发','待技术支持','设计阶段','方案阶段','上线前必需'],
        items:[
          { id:'rm-8', title:'项目看板与自动交接', desc:'需要正式后端、事件系统与权限模型。', tag:'待工程开发', kind:'blueprint' },
          { id:'rm-9', title:'Agent 自动整理 Wiki', desc:'需要文档解析、审核队列和版本回滚。', tag:'待技术支持', kind:'blueprint' },
          { id:'rm-10', title:'组织洞察引擎', desc:'先建立数据口径，再逐步增加提示与诊断。', tag:'设计阶段', kind:'blueprint' },
          { id:'rm-11', title:'飞书数据迁移', desc:'规划字段映射与历史记录导入，避免断层。', tag:'方案阶段', kind:'blueprint' },
          { id:'rm-12', title:'企业级安全与审计', desc:'正式系统需完善 SSO、日志、备份与权限审计。', tag:'上线前必需', kind:'blueprint' }
        ]
      }
    ],
    chatIntro: [
      { role:'ai', text:'你好，我可以基于当前 Demo 中的需求、项目流程和知识文档回答问题。我的回答会显示来源，并提示信息的新鲜度。', sources:['系统说明 v1.4','权限规则 · 已确认'] },
      { role:'user', text:'北极星 Demo 当前有哪些前置依赖和风险？' },
      { role:'ai', text:'当前有 2 项前置依赖需优先确认：一是「嵌入式日志自动归档」的数据口径仍在对齐；二是「需求评审记录模板统一」尚未完成，影响上下文沉淀。当前风险主要集中在 GTM 上下文更新滞后，以及单点负责人依赖。', sources:['智能设备异常事件回溯 · 需求详情','组织风险提醒 · 本周'] }
    ]
  };

  const views = {
    overview: ['组织总览', '查看本周需求、项目、知识与组织风险', '全局运行视图'],
    requirements: ['需求中心', '所有需求持续留在台面，并保留负责人、状态和评审记录', '需求治理视图'],
    projects: ['项目进度', '查看任务看板与十步推进流程', '项目推进视图'],
    knowledge: ['LLM Wiki', '来源、版本与可靠性状态可追溯', '知识可信视图'],
    assistant: ['AI 助手', '基于确认知识与上下文，回答可追溯', '组织 Copilot'],
    report: ['组织洞察', '用过程证据辅助人才 Review 与管理决策', '人才 Review 视图'],
    okr: ['产品路线图', '真实呈现已落地、试跑与产品蓝图', '能力演进视图']
  };

  const overlay = document.getElementById('overlay');
  const sidebar = document.getElementById('sidebar');
  const drawer = document.getElementById('detailDrawer');
  const requestModal = document.getElementById('requestModal');
  const palette = document.getElementById('commandPalette');
  const noticePanel = document.getElementById('noticePanel');

  const elements = {
    pageTitle: document.getElementById('pageTitle'),
    pageSubtitle: document.getElementById('pageSubtitle'),
    requirementTableBody: document.getElementById('requirementTableBody'),
    reqPriorityFilter: document.getElementById('reqPriorityFilter'),
    kanbanBoard: document.getElementById('kanbanBoard'),
    okrList: document.getElementById('okrList'),
    folderRaw: document.getElementById('folderRaw'),
    folderDocs: document.getElementById('folderDocs'),
    docsTitle: document.getElementById('docsTitle'),
    docsList: document.getElementById('docsList'),
    chatMessages: document.getElementById('chatMessages'),
    chatInput: document.getElementById('chatInput'),
    paletteList: document.getElementById('paletteList'),
    paletteInput: document.getElementById('paletteInput'),
    drawerTitle: document.getElementById('drawerTitle'),
    drawerSub: document.getElementById('drawerSub'),
    drawerMeta: document.getElementById('drawerMeta'),
    drawerDesc: document.getElementById('drawerDesc'),
    drawerActions: document.getElementById('drawerActions'),
    flowProgressBar: document.getElementById('flowProgressBar'),
    pageScope: document.getElementById('pageScope')
  };

  function updateHeader() {
    const [title, sub, scope] = views[state.currentView];
    elements.pageTitle.textContent = title;
    elements.pageSubtitle.textContent = sub;
    if (elements.pageScope) elements.pageScope.textContent = scope;
  }

  function switchView(view) {
    state.currentView = view;
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
    document.querySelectorAll('.view').forEach(sec => sec.classList.toggle('active', sec.id === `view-${view}`));
    updateHeader();
    updateBreadcrumb(view);
    closeSidebar();
    closePanel();
    closePalette();
    history.replaceState(null, '', `#${view}`);
    animateViewEntrance();
    bindPremiumMotion();
    animateMetricNumbers();
  }

  function updateBreadcrumb(view) {
    const breadcrumb = document.getElementById('topbarBreadcrumb');
    if (!breadcrumb) return;
    const viewMap = {
      overview: '组织总览',
      requirements: '需求中心',
      projects: '项目进度',
      knowledge: 'LLM Wiki',
      assistant: 'AI 助手',
      report: '组织洞察',
      okr: '产品路线图'
    };
    breadcrumb.innerHTML = `<span>组织操作系统</span><svg viewBox="0 0 16 16"><path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg><span class="active">${viewMap[view] || '组织总览'}</span>`;
  }

  function priorityClass(priority) { return (priority || '').toLowerCase(); }
  function statusClass(status) {
    if (status === '待评审') return 'review';
    if (status === '进行中') return 'doing';
    if (status === '有阻塞') return 'testing';
    return 'done';
  }

  function renderRequirements() {
    let list = [...state.requirements];
    if (state.currentReqStatus !== 'all') list = list.filter(item => item.status === state.currentReqStatus);
    if (state.currentReqPriority !== 'all') list = list.filter(item => item.priority === state.currentReqPriority);
    elements.requirementTableBody.innerHTML = list.map(item => `
      <tr data-kind="requirement" data-id="${item.id}">
        <td class="title-cell">${item.title}</td>
        <td><span class="pill ${priorityClass(item.priority)}">${item.priority}</span></td>
        <td>${item.dept}</td>
        <td><span class="owner-tag owner-blue">${item.owner}</span></td>
        <td><span class="state ${statusClass(item.status)}">${item.status}</span></td>
        <td>${item.deadline}</td>
        <td>
          <span class="trace-badge" title="关联 OKR: ${item.linkedOKR} · 关联任务: ${item.linkedTask}">
            <svg viewBox="0 0 16 16"><path d="M4 8h8M8 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${item.linkedOKR}
          </span>
        </td>
      </tr>`).join('');
  }

  function renderProjectFlow() {
    const total = state.processSteps.length;
    const pct = Math.round((state.currentFlowStep / total) * 100);
    if (elements.flowProgressBar) elements.flowProgressBar.style.width = `${pct}%`;
    const current = state.processSteps[state.currentFlowStep - 1];
    elements.kanbanBoard.innerHTML = state.processSteps.map((step, index) => {
      const stepNo = index + 1;
      const cls = stepNo < state.currentFlowStep ? 'done' : stepNo === state.currentFlowStep ? 'active' : 'future';
      return `<button class="step-card ${cls}" data-kind="process-step" data-id="${step.id}"><span class="step-no">${stepNo < state.currentFlowStep ? '✓' : stepNo}</span><h4>${step.title}</h4><p>${step.role}</p></button>`;
    }).join('');
    const desc = document.querySelector('#view-projects .detail-desc');
    const boxes = document.querySelectorAll('#view-projects .info-box strong');
    const title = document.querySelector('#view-projects .card .card-head h3');
    if (title) title.textContent = current.title;
    if (desc) desc.textContent = current.desc;
    if (boxes.length >= 4) {
      boxes[0].textContent = current.role;
      boxes[1].textContent = state.currentFlowStep <= 3 ? '需求背景 / 评审结论' : state.currentFlowStep <= 5 ? '已评审 PRD' : '任务清单 / 测试反馈';
      boxes[2].textContent = state.currentFlowStep <= 4 ? '任务清单与负责人' : state.currentFlowStep <= 8 ? '阶段成果与验证结果' : '版本结论与复盘记录';
      boxes[3].textContent = state.currentFlowStep <= 4 ? '负责人全部确认' : state.currentFlowStep <= 8 ? '完成阶段目标' : '完成总结沉淀';
    }
    const progressCopy = document.querySelector('.flow-progress-copy span');
    if (progressCopy) progressCopy.textContent = `当前演示进度 · 步骤 ${state.currentFlowStep} / 10 · ${current.title}`;
  }

  function renderFolders() {
    elements.folderRaw.innerHTML = state.folderGroups.primary.map(key => folderButton(key)).join('');
    elements.folderDocs.innerHTML = state.folderGroups.secondary.map(key => folderButton(key)).join('');
  }
  function folderButton(key) {
    return `<button class="folder-btn ${state.currentFolder === key ? 'active' : ''}" data-folder="${key}"><span>•</span><span>${key}</span></button>`;
  }

  function resolveDocs() {
    const all = state.docs['全部资料'];
    if (state.currentFolder === '全部资料') return all;
    if (state.currentFolder === 'Raw 原始区') return all.filter(item => item.status === 'Raw 原始资料');
    if (state.currentFolder === 'AI 整理区') return all.filter(item => item.status === 'AI 已整理');
    if (state.currentFolder === '正式 Wiki') return all.filter(item => item.status === '已确认');
    if (state.currentFolder === '已过期') return all.filter(item => item.status === '已过期');
    return all.filter(item => item.group === state.currentFolder);
  }

  function renderDocs() {
    const docs = resolveDocs();
    elements.docsTitle.textContent = `${state.currentFolder} · ${docs.length} 条记录`;
    elements.docsList.innerHTML = docs.map(doc => `
      <article class="doc-card" data-kind="doc" data-id="${doc.id}">
        <div class="doc-icon">📄</div>
        <div><h4>${doc.title}</h4><div class="doc-meta">${doc.meta}</div></div>
        <div class="doc-status ${doc.statusClass}">${doc.status}</div>
      </article>`).join('');
  }

  function renderRoadmap() {
    elements.okrList.innerHTML = state.roadmap.map(col => `
      <article class="roadmap-col premium-hover">
        <div class="roadmap-col-head"><h3>${col.key}</h3><span>${col.count}</span></div>
        <div class="roadmap-stack">
          ${col.items.map(item => `
            <div class="roadmap-card" data-kind="roadmap" data-id="${item.id}">
              <strong>${item.title}</strong>
              <p>${item.desc}</p>
              <span class="roadmap-tag ${item.kind === 'live' ? 'tag-live' : item.kind === 'pilot' ? 'tag-pilot' : 'tag-blueprint'}">${item.tag}</span>
            </div>`).join('')}
        </div>
      </article>`).join('');
  }

  function renderChat(messages = state.chatIntro) {
    elements.chatMessages.innerHTML = messages.map(msg => {
      if (msg.role === 'user') {
        return `<div class="chat-row user"><div class="chat-avatar"></div><div><div class="chat-role" style="text-align:right;">我</div><div class="chat-bubble">${msg.text.replace(/\n/g, '<br/>')}</div></div><div class="chat-avatar">HR</div></div>`;
      }
      return `<div class="chat-row"><div class="chat-avatar">AI</div><div><div class="chat-role">AI 组织助手</div><div class="chat-bubble">${msg.text.replace(/\n/g, '<br/>')}${msg.sources ? `<div class="source-tags">${msg.sources.map(s => `<span>${s}</span>`).join('')}</div>` : ''}</div></div><div class="chat-avatar"></div></div>`;
    }).join('');
  }

  function findRequirement(id) { return state.requirements.find(item => item.id === id); }
  function findDoc(id) { return state.docs['全部资料'].find(item => item.id === id); }
  function findRoadmap(id) {
    return state.roadmap.flatMap(col => col.items).find(item => item.id === id);
  }
  function findStep(id) { return state.processSteps.find(item => item.id === id); }

  function openDrawer(title, sub, metaRows, desc, actions) {
    elements.drawerTitle.textContent = title;
    elements.drawerSub.textContent = sub;
    elements.drawerMeta.innerHTML = metaRows.map(([label, value]) => `<div class="meta-row"><span>${label}</span><strong>${value}</strong></div>`).join('');
    elements.drawerDesc.textContent = desc;
    elements.drawerActions.innerHTML = actions.map(item => `<li>${item}</li>`).join('');
    overlay.classList.add('show');
    drawer.classList.add('open');
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    if (!requestModal.classList.contains('open') && !palette.classList.contains('open')) overlay.classList.remove('show');
  }

  function openRequestModal(prefill = {}) {
    document.getElementById('newReqTitle').value = prefill.title || '';
    document.getElementById('newReqRequester').value = prefill.requester || '产品经理A';
    document.getElementById('newReqOwner').value = prefill.owner || '组织发展部';
    document.getElementById('newReqPriority').value = prefill.priority || 'P1';
    document.getElementById('newReqState').value = prefill.status || '待评审';
    document.getElementById('newReqDesc').value = prefill.desc || '';
    requestModal.classList.add('open');
    overlay.classList.add('show');
  }
  function closeRequestModal() {
    requestModal.classList.remove('open');
    if (!drawer.classList.contains('open') && !palette.classList.contains('open')) overlay.classList.remove('show');
  }

  function openPalette() {
    palette.classList.add('open');
    overlay.classList.add('show');
    renderPalette();
    elements.paletteInput.value = '';
    elements.paletteInput.focus();
  }
  function closePalette() {
    palette.classList.remove('open');
    if (!drawer.classList.contains('open') && !requestModal.classList.contains('open')) overlay.classList.remove('show');
  }
  function renderPalette(filter = '') {
    const actions = [
      { label:'组织总览', sub:'查看需求、项目、Wiki 与风险信号', view:'overview' },
      { label:'需求中心', sub:'查看需求台账与评审状态', view:'requirements' },
      { label:'项目进度', sub:'查看任务看板与十步推进流程', view:'projects' },
      { label:'LLM Wiki', sub:'浏览知识与来源追溯', view:'knowledge' },
      { label:'AI 助手', sub:'进入基于知识库的问答页', view:'assistant' },
      { label:'组织洞察', sub:'查看人才 Review 证据摘要', view:'report' },
      { label:'产品路线图', sub:'查看已落地能力与蓝图', view:'okr' },
      { label:'提交需求', sub:'打开需求提交弹窗', action:'newReq' }
    ];
    const list = actions.filter(item => `${item.label}${item.sub}`.toLowerCase().includes(filter.toLowerCase()));
    elements.paletteList.innerHTML = list.map(item => `
      <button class="palette-item" data-action="${item.action || ''}" data-view="${item.view || ''}">
        <div><strong>${item.label}</strong><span>${item.sub}</span></div><span>${item.view ? '页面' : '动作'}</span>
      </button>`).join('');
  }

  function openPanel() { noticePanel.classList.add('open'); }
  function closePanel() { noticePanel.classList.remove('open'); }
  function togglePanel() { noticePanel.classList.toggle('open'); }

  function closeSidebar() { sidebar.classList.remove('open'); }
  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show', sidebar.classList.contains('open'));
  }

  function submitRequirement() {
    const title = document.getElementById('newReqTitle').value.trim();
    const requester = document.getElementById('newReqRequester').value.trim();
    const owner = document.getElementById('newReqOwner').value.trim();
    const priority = document.getElementById('newReqPriority').value;
    const status = document.getElementById('newReqState').value;
    const desc = document.getElementById('newReqDesc').value.trim();
    if (!title || !requester || !owner) {
      window.AppUI?.showToast('请完善必填信息', '至少需要填写需求标题、提出人与负责人。', 'error');
      return;
    }
    state.requirements.unshift({
      id: `req-${Date.now()}`,
      title,
      priority,
      dept: owner,
      ownerName: owner,
      owner: owner === '组织发展部' ? 'OD' : owner.slice(0,2),
      status,
      deadline: '待定',
      requester,
      desc: desc || '新增需求，待进一步补充详细说明。',
      actions: ['安排评审','确认负责人','进入流程']
    });
    renderRequirements();
    closeRequestModal();
    switchView('requirements');
    window.AppUI?.showToast('需求已提交', '新需求已同步到需求中心。');
  }

  function bindEvents() {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
    document.querySelectorAll('[data-jump]').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.jump)));

    elements.reqPriorityFilter.addEventListener('change', e => {
      state.currentReqPriority = e.target.value;
      renderRequirements();
    });
    document.querySelectorAll('.req-tabs [data-status]').forEach(btn => btn.addEventListener('click', () => {
      document.querySelectorAll('.req-tabs .tab-btn').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      state.currentReqStatus = btn.dataset.status;
      renderRequirements();
    }));

    document.getElementById('sortReqBtn').addEventListener('click', () => {
      window.AppUI?.showToast('导出成功', '已按当前视图导出需求列表。');
    });

    document.getElementById('notifyBtn').addEventListener('click', () => {
      togglePanel();
      if (noticePanel.classList.contains('open')) {
        if (!palette.classList.contains('open') && !requestModal.classList.contains('open') && !drawer.classList.contains('open')) overlay.classList.remove('show');
      }
    });

    document.getElementById('commandOpen').addEventListener('click', openPalette);
    document.getElementById('mobileMenu').addEventListener('click', toggleSidebar);
    document.getElementById('newReqBtn').addEventListener('click', () => openRequestModal());
    document.getElementById('newReqBtn2').addEventListener('click', () => openRequestModal());
    document.getElementById('uploadDocBtn').addEventListener('click', () => window.AppUI?.showToast('上传资料', 'Demo 中展示上传反馈，实际文件未写入。', 'info'));

    document.getElementById('resetFlowBtn').addEventListener('click', () => {
      state.currentFlowStep = 1;
      renderProjectFlow();
      window.AppUI?.showToast('流程已重置');
    });
    document.getElementById('advanceFlowBtn').addEventListener('click', () => {
      state.currentFlowStep = state.currentFlowStep >= 10 ? 10 : state.currentFlowStep + 1;
      renderProjectFlow();
    });

    document.getElementById('drawerClose').addEventListener('click', closeDrawer);
    document.getElementById('modalClose').addEventListener('click', closeRequestModal);
    document.getElementById('cancelNewReq').addEventListener('click', closeRequestModal);
    document.getElementById('submitNewReq').addEventListener('click', submitRequirement);

    overlay.addEventListener('click', () => {
      closeDrawer();
      closeRequestModal();
      closePalette();
      closeSidebar();
      overlay.classList.remove('show');
    });

    document.addEventListener('click', (e) => {
      const row = e.target.closest('[data-kind="requirement"]');
      if (row) {
        const item = findRequirement(row.dataset.id);
        openDrawer(item.title, '需求详情', [['提出人', item.requester], ['优先级', item.priority], ['当前状态', item.status], ['主责部门', item.dept], ['负责人', item.ownerName], ['截止时间', item.deadline]], item.desc, item.actions);
        return;
      }
      const doc = e.target.closest('[data-kind="doc"]');
      if (doc) {
        const item = findDoc(doc.dataset.id);
        openDrawer(item.title, '知识库文档详情', [['文档状态', item.status], ['信息标签', item.group], ['摘要', item.meta]], item.desc, item.actions);
        return;
      }
      const step = e.target.closest('[data-kind="process-step"]');
      if (step) {
        const item = findStep(step.dataset.id);
        openDrawer(item.title, '流程步骤详情', [['主责角色', item.role], ['当前序号', step.querySelector('.step-no').textContent]], item.desc, item.actions);
        return;
      }
      const roadmap = e.target.closest('[data-kind="roadmap"]');
      if (roadmap) {
        const item = findRoadmap(roadmap.dataset.id);
        openDrawer(item.title, '产品路线图详情', [['当前阶段', item.tag]], item.desc, ['继续完善规则与流程', '确认资源与工程优先级', '作为对外展示的蓝图说明']);
        return;
      }
      const folder = e.target.closest('[data-folder]');
      if (folder) {
        state.currentFolder = folder.dataset.folder;
        renderFolders();
        renderDocs();
        return;
      }
      const paletteBtn = e.target.closest('.palette-item');
      if (paletteBtn) {
        if (paletteBtn.dataset.action === 'newReq') {
          closePalette();
          openRequestModal();
        } else if (paletteBtn.dataset.view) {
          switchView(paletteBtn.dataset.view);
        }
      }
      const suggest = e.target.closest('[data-prompt]');
      if (suggest && suggest.classList.contains('suggest-btn')) {
        sendMessage(suggest.dataset.prompt);
      }
    });

    elements.paletteInput.addEventListener('input', e => renderPalette(e.target.value));
    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openPalette();
      }
      if (e.key === 'Escape') {
        closeDrawer(); closeRequestModal(); closePalette(); closePanel(); closeSidebar(); overlay.classList.remove('show');
      }
    });

    document.getElementById('chatSend').addEventListener('click', () => sendMessage(elements.chatInput.value.trim()));
    elements.chatInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage(elements.chatInput.value.trim());
      }
    });
  }

  function sendMessage(text) {
    if (!text) return;
    const messages = [...state.chatIntro, { role:'user', text }];
    const response = buildAIResponse(text);
    messages.push(response);
    renderChat(messages);
    elements.chatInput.value = '';
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
  }

  function buildAIResponse(text) {
    const q = text.toLowerCase();
    if (q.includes('北极星') || q.includes('前置依赖') || q.includes('风险')) {
      return { role:'ai', text:'根据当前 Demo 中的项目流程与知识文档，北极星 Demo 目前主要有 3 个前置依赖和 2 个风险：\n\n1. 研发负责人尚未确认全部任务负责人\n2. GTM 发布节奏 Context 已 17 天未更新\n3. 嵌入式日志自动归档需求仍处于有阻塞状态\n\n建议优先补齐负责人确认与上下文更新。', sources:['北极星 Demo 产品上下文.md','项目流程 · 任务拆分','GTM 发布节奏 Context.md'] };
    }
    if (q.includes('用户研究') || q.includes('总结最近两周')) {
      return { role:'ai', text:'最近两周的用户研究结论主要集中在 3 点：\n\n1. 海外用户对 Demo 可视化能力的关注度上升\n2. 用户更需要明确产品价值表达与使用边界\n3. 对场景化解释与 onboarding 材料有较强需求\n\n这些结论已关联到需求中心与 LLM Wiki。', sources:['海外用户访谈_第3轮.md','智能硬件产业全景分析.md'] };
    }
    if (q.includes('通过评审') || q.includes('没有进入研发')) {
      return { role:'ai', text:'当前通过评审但尚未进入研发的事项主要包括：\n\n- 发布页面产品价值结构优化（P1，待评审收尾）\n- 智能设备异常事件回溯（P0，等待技术评审）\n\n建议在下一轮需求评审会上确认排期与负责人。', sources:['需求中心 · 当前列表'] };
    }
    if (q.includes('gtm') && q.includes('context')) {
      return { role:'ai', text:'GTM 部门的 Context 最近更新时间为 17 天前，当前状态为“需更新 / 已过期”。这会影响 AI 助手回答的新鲜度与完整性。', sources:['GTM 发布节奏 Context.md'] };
    }
    return { role:'ai', text:'我已收到你的问题。当前 Demo 支持查询需求、项目流程、Wiki 文档与组织洞察。你也可以直接问我：北极星 Demo 当前有哪些前置依赖和风险？或总结最近两周的用户研究结论。' };
  }


  function animateMetricNumbers() {
    const activeView = document.querySelector('.view.active');
    if (!activeView) return;
    activeView.querySelectorAll('.metric-value').forEach(node => {
      const raw = node.textContent.trim();
      if (!/^\d+$/.test(raw)) return;
      const target = Number(raw);
      const duration = 620;
      const start = performance.now();
      const easeOut = t => 1 - Math.pow(1 - t, 3);
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        node.textContent = String(Math.round(target * easeOut(progress)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      node.textContent = '0';
      requestAnimationFrame(tick);
    });
  }

  function bindActionRipples() {
    document.querySelectorAll('.primary-btn, .ghost-btn, .notify-btn, .search-btn, .tab-btn, .nav-btn').forEach(button => {
      if (button.dataset.rippleBound) return;
      button.dataset.rippleBound = '1';
      button.addEventListener('pointerdown', event => {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'action-ripple';
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        button.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
      });
    });
  }

  function bindPremiumMotion() {
    const nodes = document.querySelectorAll('.card, .metric-card, .quick-link, .task-card, .doc-card, .signal-card, .summary-chip, .leaderboard-item, .nav-btn, .ghost-btn, .primary-btn, .chip-btn, .step-card, .roadmap-card, .suggest-btn, .review-item');
    nodes.forEach(node => {
      if (node.dataset.motionBound) return;
      node.dataset.motionBound = '1';
      node.addEventListener('mousemove', (e) => {
        const rect = node.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        node.style.setProperty('--mx', `${px}%`);
        node.style.setProperty('--my', `${py}%`);
        if (window.innerWidth > 900 && rect.width > 120 && rect.height > 60 && !node.matches('.nav-btn, .ghost-btn, .primary-btn, .chip-btn, .suggest-btn')) {
          const rx = ((y / rect.height) - 0.5) * -4;
          const ry = ((x / rect.width) - 0.5) * 5;
          node.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
        }
      });
      node.addEventListener('mouseleave', () => {
        node.style.removeProperty('transform');
      });
    });
  }

  function animateViewEntrance() {
    const activeView = document.querySelector('.view.active');
    if (!activeView) return;
    const cards = activeView.querySelectorAll('.card, .task-card, .doc-card, .quick-link, .signal-card, .summary-chip, .leaderboard-item, .step-card, .roadmap-card, .review-item');
    cards.forEach((card, index) => {
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = `spotlightIn .42s cubic-bezier(.2,.65,.18,1) both`;
      card.style.animationDelay = `${Math.min(index * 32, 260)}ms`;
    });
  }

  function init() {
    const hashView = location.hash.replace('#', '');
    if (views[hashView]) state.currentView = hashView;
    updateHeader();
    renderRequirements();
    renderProjectFlow();
    renderFolders();
    renderDocs();
    renderRoadmap();
    renderChat();
    renderPalette();
    bindEvents();
    switchView(state.currentView);
    bindPremiumMotion();
    bindActionRipples();
    animateViewEntrance();
    window.AppUI?.hydrateIcons?.();
  }

  init();
});
