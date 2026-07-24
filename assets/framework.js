(() => {
  const { svgIcon, hydrateIcons, showToast } = window.AppUI;
  const steps = [
    { title:'提出需求', owner:'任何人', desc:'自然语言描述问题与目标，AI 转换为结构化需求单。', input:'自然语言描述', output:'需求草稿', rule:'字段完整后进入评审', ai:['提取标题、背景和目标','识别缺失信息并追问','建议优先级与相关部门'] },
    { title:'需求评审', owner:'产品与体验部', desc:'确认价值、可行性、范围和优先级，形成可追溯记录。', input:'结构化需求', output:'锁定范围', rule:'负责人评审通过', ai:['关联历史相似需求','生成评审检查项','记录范围变更'] },
    { title:'PRD 生成', owner:'产品负责人', desc:'基于已锁定需求与知识上下文生成 PRD 草稿。', input:'已评审需求', output:'PRD 草稿', rule:'关键角色确认', ai:['生成用户故事','标记 P0/P1/P2','引用相关 Wiki 来源'] },
    { title:'任务拆分', owner:'研发负责人', desc:'把 PRD 拆解为软件、设备端、接口和验证任务。', input:'PRD', output:'任务与负责人', rule:'责任人全部确认', ai:['识别前置依赖','生成任务清单','建议负责人和周期'] },
    { title:'测试用例', owner:'研发 / 测试', desc:'从验收标准生成测试用例，补充设备验证条件。', input:'任务与验收标准', output:'测试用例', rule:'用例确认', ai:['生成正常与异常场景','关联历史 Bug','提示边界条件'] },
    { title:'研发执行', owner:'研发部门', desc:'执行任务、同步接口与文档，完成后自动通知测试。', input:'已确认任务', output:'可验证交付物', rule:'任务完成', ai:['提醒依赖与截止风险','同步状态变化','完成后触发交接'] },
    { title:'测试执行', owner:'研发 / 测试', desc:'执行用例并记录结果，失败时自动返回研发。', input:'交付物与用例', output:'测试结果 / Bug', rule:'测试通过', ai:['Bug 自动归类','按影响分级','关联责任模块'] },
    { title:'交付评审', owner:'跨部门', desc:'产品、研发与商业化共同确认质量、发布准备和已知风险。', input:'测试通过版本', output:'交付结论', rule:'评审通过', ai:['汇总质量证据','生成评审摘要','输出待决策事项'] },
    { title:'上线发布', owner:'增长与商业化部', desc:'关联版本、内容、渠道、发布时间和发布事故。', input:'交付结论', output:'发布记录', rule:'发布完成', ai:['生成发布清单','记录发布时间线','事故关联原始需求'] },
    { title:'复盘 Review', owner:'工具 + 管理者', desc:'汇总过程数据，形成项目复盘和人才 Review 证据。', input:'全链路数据', output:'复盘与建议', rule:'管理者校准', ai:['识别流程异常','生成贡献证据摘要','提示数据缺口'] }
  ];
  let current = 1;
  let selected = 1;
  let timer = null;

  function renderFlow() {
    const nodes = document.getElementById('flowNodes');
    nodes.innerHTML = steps.map((s,i) => `<button class="flow-node ${i+1<current?'done':''} ${i+1===current?'current':''}" data-step="${i+1}"><span class="node-circle">${i+1<current ? svgIcon('check') : i+1}</span><strong>${s.title}</strong><span>${s.owner}</span></button>`).join('');
    const percent = current === 1 ? 0 : ((current-1)/9)*100;
    document.getElementById('flowRailFill').style.width = `${percent}%`;
    document.getElementById('flowConsoleStatus').textContent = `当前：步骤 ${current} · ${steps[current-1].title}`;
    nodes.querySelectorAll('.flow-node').forEach(btn => btn.addEventListener('click', () => { selected=Number(btn.dataset.step); renderDetail(); }));
    renderDetail();
  }

  function renderDetail() {
    const s = steps[selected-1];
    document.getElementById('frameworkFlowDetail').innerHTML = `<article class="card flow-detail-card"><div class="eyebrow" style="font-size:9px;padding:5px 8px">STEP ${String(selected).padStart(2,'0')}</div><h3>${s.title}</h3><p>${s.desc}</p><div class="flow-mini-grid"><div class="flow-mini"><span>主责角色</span><strong>${s.owner}</strong></div><div class="flow-mini"><span>输入</span><strong>${s.input}</strong></div><div class="flow-mini"><span>输出</span><strong>${s.output}</strong></div><div class="flow-mini"><span>交接条件</span><strong>${s.rule}</strong></div></div></article><article class="card flow-detail-card"><div class="eyebrow" style="font-size:9px;padding:5px 8px">AI & AUTOMATION</div><h3 style="font-size:16px">自动化逻辑</h3><div class="logic-list">${s.ai.map(x=>`<div class="logic-item">${svgIcon('sparkles')}<span>${x}，关键结果由业务角色确认。</span></div>`).join('')}</div></article>`;
  }

  function advance() {
    current = current >= 10 ? 1 : current + 1;
    selected = current;
    renderFlow();
    if (current === 1 && timer) showToast('流程演示已循环', '重新从步骤 1 开始。', 'info');
  }

  function togglePlay() {
    const btn = document.getElementById('flowConsolePlay');
    const text = document.getElementById('flowPlayText');
    if (timer) {
      clearInterval(timer); timer=null; text.textContent='自动播放'; btn.querySelector('[data-icon]')?.setAttribute('data-icon','play');
      btn.innerHTML = `${svgIcon('play')}<span id="flowPlayText">自动播放</span>`;
    } else {
      advance();
      timer=setInterval(advance,1700);
      btn.innerHTML = `${svgIcon('pause')}<span id="flowPlayText">暂停播放</span>`;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.layer-summary').forEach(summary => summary.addEventListener('click', () => {
      const card = summary.closest('.layer-card');
      const wasActive = card.classList.contains('active');
      document.querySelectorAll('.layer-card').forEach(c=>c.classList.remove('active'));
      if (!wasActive) card.classList.add('active');
    }));
    document.getElementById('flowConsolePlay').addEventListener('click', togglePlay);
    document.getElementById('flowConsoleReset').addEventListener('click', () => { if(timer){clearInterval(timer);timer=null;} current=1; selected=1; document.getElementById('flowConsolePlay').innerHTML=`${svgIcon('play')}<span id="flowPlayText">自动播放</span>`; renderFlow(); showToast('流程已重置','回到步骤 1：提出需求。','info'); });
    renderFlow();
    hydrateIcons();
  });
})();
