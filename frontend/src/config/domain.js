/* Copyright 2026 上海如静知华信息科技有限公司 */
export const domain={
 code:'FPA',systemName:'财务规划与分析平台',englishName:'FINANCIAL PLANNING & ANALYSIS',theme:{primary:'#1f5b83',dark:'#17364d',accent:'#c47a36'},
 workspace:'集团财务 / 经营计划中心',fieldWorkspace:'消费事业群',period:'2026-08-01 · 预测滚动月',liveText:'合并模型已于 10:24 更新',fieldContextLabel:'当前责任中心',fieldContext:'FY2026 · Rolling 12M',fieldUser:'林悦',fieldRole:'业务财务 BP',adminUser:'沈宁',adminRole:'集团预算经理',
 adminTitle:'经营计划与预测驾驶舱',adminBreadcrumb:'集团财务 / 计划总览',adminSubtitle:'统一查看预算版本、滚动预测、经营差异与责任中心行动。',exportAction:'导出经营分析包',createAction:'发起预测轮次',
 chartTitle:'收入与利润滚动预测',chartSubtitle:'预算基线、实际与最新预测 / 百万元',chartLabels:['1月','2月','3月','4月','5月','6月','7月','8月','9月'],loadTitle:'责任中心预算消耗',loadSubtitle:'实际发生占年度可用预算',recordsTitle:'关键计划项目',recordsSubtitle:'按差异金额与关闭期限排序',issueTitle:'经营差异预警',issueSubtitle:'需要财务 BP 协同解释与行动的事项',
 recordName:'计划项目',itemName:'预算科目',unitName:'责任中心',batchName:'预测版本',planName:'预算',doneName:'最新预测',exceptionName:'差异',unitLabel:'万元',
 listBreadcrumb:'计划管理 / 预测台账',listSubtitle:'管理预算编制、预测调整、差异解释、行动跟踪和版本归档。',listSummary:[['本轮预测项目','42'],['待业务确认','11'],['待财务复核','6'],['重大差异','3',true]],tabs:['全部','待填报','业务确认中','财务复核中','已锁定'],
 fieldBreadcrumb:'经营预测 / 我的工作台',fieldTitle:'事业群预测工作台',fieldSubtitle:'当前 6 项待更新 · 2 个差异说明待补充 · 业务财务 BP 林悦',fieldSecondary:'查看填报口径',reportAction:'提交预测',fieldNoticeTitle:'预算版本与汇率已锁定',fieldNotice:'当前使用 FY26-BUD-V3 与 7 月集团汇率表',
 steps:['预算基线','业务预测','差异解释','财务复核','版本锁定'],documentAction:'查看测算底稿',printAction:'下载预算模板',resourceCardTitle:'预测模型状态',resourceValueLabel:'模型覆盖率',resourceHealthLabel:'数据新鲜度',quickSubtitle:'预算与经营分析常用入口',quickActions:[['预测填报','/shopfloor/report','收入、成本与费用驱动'],['差异解释','/shopfloor/material','金额、原因与责任行动'],['模型参数','/shopfloor/resources','汇率、价格与销量假设'],['风险上报','/shopfloor/andon','利润、现金与预算风险']],
 reportDefaults:[320,15],reportTitle:'滚动预测填报',reportSubtitle:'记录最新预测值、风险金额和业务判断依据。',reportSuccess:'预测已保存并进入财务复核队列',reportPlaceholder:'填写销量变化、价格影响、成本假设或行动计划',reportFootnote:'提交后保留原始版本并生成差异审计记录',ruleTitle:'本轮计划口径',ruleSubtitle:'FY26-FC08 · V3.2',rules:[['基准汇率','集团 7 月表'],['预测跨度','12 个月'],['重大差异阈值','±5%'],['版本状态','填报中',true]],fieldTotals:[['12','已完成预测项'],['3','重大差异'],['6','待财务复核'],['96.4%','模型数据完整率']],
 adminMenus:[['/admin','home','计划驾驶舱'],['/admin/work-orders','order','预算与预测'],['/admin/samples','box','经营假设'],['/admin/schedule','calendar','计划日历'],['/admin/methods','process','填报口径'],['/admin/reviews','quality','差异复核'],['/admin/resources','machine','模型中心'],['/admin/report','chart','经营分析']],
 fieldMenus:[['/shopfloor','home','我的预测'],['/shopfloor/report','report','预测填报'],['/shopfloor/tasks','order','待办项目'],['/shopfloor/material','box','差异解释'],['/shopfloor/resources','machine','模型参数'],['/shopfloor/andon','risk','风险上报',2]],
 moduleTitles:{tasks:['待办项目','查看填报优先级、责任人与关闭期限'],material:['差异解释','管理差异金额、驱动因素与业务行动'],resources:['模型参数','维护汇率、单价、销量和成本驱动'],andon:['风险上报','登记利润、现金流与预算执行风险'],samples:['经营假设','统一管理业务驱动及其版本'],schedule:['计划日历','协调预算、预测和经营复盘节奏'],methods:['填报口径','维护科目规则、阈值和计算逻辑'],reviews:['差异复核','执行财务校验、管理层确认和锁版'],report:['经营分析','分析收入、利润、现金和预算偏差']},
 tagline:'让预算、预测与经营行动使用同一套数字',storyTitle:'从年度预算到滚动预测，<br/>每个差异都有业务解释。',storyText:'连接战略目标、经营驱动、责任中心与财务结果的企业计划底座。',pattern:[1,5,6,7,11,12,13,17,18,19,23,24,25,29],loginStats:[['96.4%','模型数据完整率'],['42','本轮预测项目'],['3.2 天','平均复核周期']],loginTitle:'集团经营计划中心',adminDemo:'预算 / 预测 / 分析',fieldDemo:'填报 / 差异 / 行动'
}
export const records=[
 {no:'FC-2608-018',name:'华东渠道收入滚动预测',code:'REV-EAST',unit:'消费事业群',group:'经营计划中心',plan:2680,done:2520,exception:160,due:'08-03',batch:'FC08-V3',status:'业务确认中',progress:78,priority:'关注'},
 {no:'FC-2608-021',name:'云服务毛利改善计划',code:'GP-CLOUD',unit:'数字业务群',group:'经营计划中心',plan:920,done:875,exception:45,due:'08-04',batch:'FC08-V2',status:'财务复核中',progress:86,priority:'正常'},
 {no:'BUD-2610-006',name:'研发费用年度预算',code:'OPEX-RD',unit:'研发中心',group:'集团财务',plan:1860,done:1735,exception:125,due:'08-06',batch:'BUD27-D1',status:'待填报',progress:42,priority:'正常'},
 {no:'FC-2607-015',name:'海外现金流预测',code:'CF-OVERSEA',unit:'国际事业群',group:'资金管理部',plan:740,done:752,exception:12,due:'08-01',batch:'FC07-LK',status:'已锁定',progress:100,priority:'正常'},
 {no:'FC-2608-024',name:'供应链降本行动预测',code:'COST-SCM',unit:'供应链中心',group:'经营计划中心',plan:380,done:298,exception:82,due:'08-05',batch:'FC08-V1',status:'差异解释中',progress:61,priority:'加急'}]
export const resources=[{code:'MODEL-REV-03',name:'收入驱动模型',unit:'消费事业群',status:'运行',health:94,value:'96.4',valueUnit:'%',note:'36 个业务驱动已完成映射'},{code:'MODEL-CF-05',name:'现金流预测模型',unit:'国际事业群',status:'运行',health:89,value:'12',valueUnit:'月',note:'滚动预测窗口已更新'},{code:'MODEL-OPEX-08',name:'费用分摊模型',unit:'集团财务',status:'报警',health:67,value:'3',valueUnit:'项',note:'三个成本中心映射待确认'}]
export const reviews=[{no:'REV-260801-032',title:'华东渠道收入差异复核',type:'差异复核',detail:'160 万元 · 沈宁',result:'待确认'},{no:'REV-260801-011',title:'云服务毛利假设校验',type:'模型复核',detail:'8 个驱动参数 · 林悦',result:'通过'},{no:'REV-260728-018',title:'供应链降本行动复盘',type:'行动评审',detail:'ACT-2607-09',result:'异常'}]
export const adminMetrics=[['年度收入预测','12.86 亿','较预算低 1.8%','blue'],['预测准确率','94.7%','较上轮提升 1.2%','green'],['待复核项目','6','其中 2 项加急','orange'],['重大差异','3','影响利润 287 万','red']]
export const fieldMetrics=[['我的待办','6','18 个预测明细','blue'],['已提交','12','本轮完成率 67%','green'],['待复核','6','数据已完整提交','orange'],['模型状态','正常','收入驱动模型','slate']]
export const chartActual=[12,24,35,45,52,64,73,81,88],chartTarget=[14,26,38,49,57,68,78,88,96]
export const loads=[['消费事业群',91,'预算使用 68%'],['数字业务群',82,'预算使用 61%'],['国际事业群',76,'预算使用 72%'],['供应链中心',58,'预算使用 49%']]
export const issues=[{type:'收入',title:'华东渠道收入预测低于预算',detail:'差异 -160 万元 · 等待业务说明',status:'解释中'},{type:'毛利',title:'云服务毛利率连续两轮下调',detail:'较预算低 2.1 个百分点',status:'复核中'},{type:'现金',title:'海外回款周期可能延长',detail:'预计影响经营现金 82 万元',status:'跟踪中'}]
