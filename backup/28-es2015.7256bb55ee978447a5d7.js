(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{LjcL:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),s=u("SVse"),o=u("AytR"),a=u("IheW");const r=(()=>{class l{constructor(l){this.http=l}srru_strategies(l=2018){return this.http.get(`${o.a.api_url}/ref/srru_strategies?strategy_year=${l}`)}srru_strategies_chart(l=2018){return this.http.get(`${o.a.api_url}/kpi/srru?strategy_year=${l}`)}rajabhat_strategies_chart(l=2018){return this.http.get(`${o.a.api_url}/kpi/rajabhat?strategy_year=${l}`)}national_strategies_chart(l=2018){return this.http.get(`${o.a.api_url}/kpi/national?strategy_year=${l}`)}project_schemes_chart(){return this.http.get(`${o.a.api_url}/kpi/schemes`)}project_benefits_chart(){return this.http.get(`${o.a.api_url}/kpi/benefits`)}project_summary(){return this.http.get(`${o.a.api_url}/old_projects/summary`)}}return l.ngInjectableDef=t.Mb({factory:function(){return new l(t.Qb(a.c))},token:l,providedIn:"root"}),l})();var c=u("cclQ"),d=u("xJfa");class b{constructor(l,n){this.zone=l,this.kpi=n,this.kpi_year=2018}ngOnInit(){this.loadData()}loadData(){this.kpi.srru_strategies(this.kpi_year).subscribe(l=>{this.srru_kpis=l}),this.kpi.srru_strategies_chart(this.kpi_year).subscribe(l=>{this.createChart(l,"srruStrategyChart","name","projects","info")}),this.kpi.rajabhat_strategies_chart(this.kpi_year).subscribe(l=>{this.createChart(l,"rajabhatStrategyChart","name","projects","info")}),this.kpi.national_strategies_chart(this.kpi_year).subscribe(l=>{this.createChart(l,"nationalStrategyChart","name","projects","info")}),this.kpi.project_schemes_chart().subscribe(l=>{this.createChart(l,"projectSchemesChart","name","projects","info")}),this.kpi.project_benefits_chart().subscribe(l=>{this.createChart(l,"projectBenefitsChart","name","projects","info")}),this.kpi.project_summary().subscribe(l=>{console.log(l),this.project_summary=l})}createChart(l,n,u,t,e){this.zone.runOutsideAngular(()=>{let e=c.g(n,d.l),i=e.xAxes.push(new d.b),s=e.yAxes.push(new d.k),o=e.series.push(new d.d);e.data=l,e.scrollbarX=new c.d,i.dataFields.category=u,i.renderer.grid.template.location=0,i.renderer.minGridDistance=30,i.renderer.labels.template.horizontalCenter="right",i.renderer.labels.template.verticalCenter="middle",i.renderer.labels.template.rotation=270,i.tooltip.disabled=!0,i.renderer.minHeight=110,s.renderer.minWidth=50,o.sequencedInterpolation=!0,o.dataFields.valueY=t,o.dataFields.categoryX=u,o.tooltipText="[{categoryX}: bold]{info}[/]",o.columns.template.strokeWidth=0,o.tooltip.pointerOrientation="vertical",o.columns.template.column.cornerRadiusTopLeft=10,o.columns.template.column.cornerRadiusTopRight=10,o.columns.template.column.fillOpacity=.8;let a=o.columns.template.column.states.create("hover");a.properties.cornerRadiusTopLeft=0,a.properties.cornerRadiusTopRight=0,a.properties.fillOpacity=1,o.columns.template.adapter.add("fill",function(l,n){return e.colors.getIndex(n.dataItem.index)}),e.cursor=new d.n})}}var p=t.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"td",[["style","width: 15%;"]],null,null,null,null,null)),(l()(),t.Ib(2,null,["",""])),(l()(),t.qb(3,0,null,null,1,"td",[["style","width: 40%;"]],null,null,null,null,null)),(l()(),t.Ib(4,null,["",""])),(l()(),t.qb(5,0,null,null,1,"td",[["style","width: 45%; white-space: pre-line;"]],null,null,null,null,null)),(l()(),t.Ib(6,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.name),l(n,4,0,n.context.$implicit.group),l(n,6,0,n.context.$implicit.details)})}function m(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"B",[["class","color-danger"]],null,null,null,null,null)),(l()(),t.Ib(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_projects)})}function v(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[["class"," text-center"]],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e17\u0e23\u0e07\u0e04\u0e38\u0e13\u0e27\u0e38\u0e12\u0e34 \u0e15\u0e32\u0e21\u0e27\u0e31\u0e15\u0e16\u0e38\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c \u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 \u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e17\u0e4c\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 \u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 \u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f\u0e2a\u0e38\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e17\u0e23\u0e07\u0e04\u0e38\u0e13\u0e27\u0e38\u0e12\u0e34\u0e08\u0e33\u0e19\u0e27\u0e19 "," \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e32\u0e21\u0e15\u0e31\u0e27\u0e1a\u0e48\u0e07\u0e0a\u0e35\u0e49\u0e15\u0e48\u0e32\u0e07 \u0e46 \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e23\u0e38\u0e1b\u0e44\u0e14\u0e49\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_suggestion)})}function y(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_objectives.achieve)})}function f(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e44\u0e21\u0e48\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_objectives.not_achieve)})}function g(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_activities.achieve)})}function q(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e44\u0e21\u0e48\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_activities.not_achieve)})}function x(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_outputs.achieve)})}function _(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e44\u0e21\u0e48\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_outputs.not_achieve)})}function w(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_kpi.achieve)})}function I(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(1,null,["\u0e44\u0e21\u0e48\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_kpi.not_achieve)})}function j(l){return t.Kb(0,[t.Gb(671088640,1,{sort:0}),(l()(),t.qb(1,0,null,null,11,"div",[["class","ms-hero-page-override ms-hero-img-city ms-hero-bg-primary"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,9,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,1,"span",[["class","ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-3"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,0,"img",[["alt",""],["src","https://surin.srru.ac.th/images/srru-2.png"],["width","100%"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"h1",[["class","no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-3"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 "])),(l()(),t.qb(8,0,null,null,4,"p",[["class","mx-auto color-white mt-2 mw-800 text-uppercase  fw-300 animated fadeInUp animation-delay-3"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f "])),(l()(),t.qb(10,0,null,null,1,"span",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19"])),(l()(),t.Ib(-1,null,[" \u0e23\u0e30\u0e22\u0e30 20 \u0e1b\u0e35 (\u0e1e.\u0e28.2560-2579) "])),(l()(),t.qb(13,0,null,null,142,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(14,0,null,null,17,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,16,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(17,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.qb(18,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Ib(19,null,[" \u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 (\u0e1e.\u0e28. ",")"])),(l()(),t.qb(20,0,null,null,11,"table",[["class","table table-no-border table-striped"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),t.qb(22,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.qb(23,0,null,null,1,"th",[["style","width: 15%;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e22\u0e38\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c"])),(l()(),t.qb(25,0,null,null,1,"th",[["style","width: 40%;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e01\u0e25\u0e38\u0e48\u0e21\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14"])),(l()(),t.qb(27,0,null,null,1,"th",[["style","width: 45%;"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14"])),(l()(),t.qb(29,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,h)),t.pb(31,278528,null,0,s.m,[t.P,t.M,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(32,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.qb(33,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(35,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.qb(36,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19"])),(l()(),t.qb(38,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(39,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.qb(40,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(41,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.qb(42,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(43,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.qb(44,0,null,null,0,"div",[["id","srruStrategyChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.qb(45,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(46,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.qb(47,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.qb(48,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(49,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.qb(50,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f \u0e23\u0e30\u0e22\u0e30 20 \u0e1b\u0e35 (\u0e1e.\u0e28. 2560-2579)"])),(l()(),t.qb(52,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(53,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.qb(54,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(55,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.qb(56,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(57,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.qb(58,0,null,null,0,"div",[["id","rajabhatStrategyChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.qb(59,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(60,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.qb(61,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.qb(62,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(63,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.qb(64,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e0a\u0e32\u0e15\u0e34 \u0e23\u0e30\u0e22\u0e30 20 \u0e1b\u0e35 (\u0e1e.\u0e28. 2560-2579)"])),(l()(),t.qb(66,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(67,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.qb(68,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(69,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.qb(70,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(71,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.qb(72,0,null,null,0,"div",[["id","nationalStrategyChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.qb(73,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(74,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.qb(75,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.qb(76,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(77,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.qb(78,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.qb(80,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(81,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.qb(82,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(83,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.qb(84,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(85,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.qb(86,0,null,null,0,"div",[["id","projectSchemesChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.qb(87,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(88,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.qb(89,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.qb(90,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(91,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.qb(92,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e17\u0e35\u0e48\u0e04\u0e32\u0e14\u0e27\u0e48\u0e32\u0e08\u0e30\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a"])),(l()(),t.qb(94,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(95,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.qb(96,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(97,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.qb(98,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.qb(99,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.qb(100,0,null,null,0,"div",[["id","projectBenefitsChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.qb(101,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.qb(102,0,null,null,53,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.qb(103,0,null,null,52,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.qb(104,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.qb(105,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.qb(106,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \u0e1c\u0e25\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.qb(108,0,null,null,44,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(109,0,null,null,4,"h2",[["class","section-title text-center"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e23\u0e27\u0e21 "])),(l()(),t.gb(16777216,null,null,1,null,m)),t.pb(112,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.Ib(-1,null,[" \u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.gb(16777216,null,null,1,null,v)),t.pb(115,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(116,0,null,null,36,"div",[["class","row mt-4"]],null,null,null,null,null)),(l()(),t.qb(117,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.qb(118,0,null,null,7,"div",[["class","card card-warning"]],null,null,null,null,null)),(l()(),t.qb(119,0,null,null,6,"div",[["class","card-body overflow-hidden text-center"]],null,null,null,null,null)),(l()(),t.qb(120,0,null,null,1,"h4",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e27\u0e31\u0e15\u0e16\u0e38\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.gb(16777216,null,null,1,null,y)),t.pb(123,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,f)),t.pb(125,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(126,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.qb(127,0,null,null,7,"div",[["class","card card-warning"]],null,null,null,null,null)),(l()(),t.qb(128,0,null,null,6,"div",[["class","card-body overflow-hidden text-center"]],null,null,null,null,null)),(l()(),t.qb(129,0,null,null,1,"h4",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21"])),(l()(),t.gb(16777216,null,null,1,null,g)),t.pb(132,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,q)),t.pb(134,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(135,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.qb(136,0,null,null,7,"div",[["class","card card-warning"]],null,null,null,null,null)),(l()(),t.qb(137,0,null,null,6,"div",[["class","card-body overflow-hidden text-center"]],null,null,null,null,null)),(l()(),t.qb(138,0,null,null,1,"h4",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.gb(16777216,null,null,1,null,x)),t.pb(141,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,_)),t.pb(143,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(144,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.qb(145,0,null,null,7,"div",[["class","card card-warning"]],null,null,null,null,null)),(l()(),t.qb(146,0,null,null,6,"div",[["class","card-body overflow-hidden text-center"]],null,null,null,null,null)),(l()(),t.qb(147,0,null,null,1,"h4",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e15\u0e32\u0e21\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14"])),(l()(),t.gb(16777216,null,null,1,null,w)),t.pb(150,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,I)),t.pb(152,16384,null,0,s.n,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(153,0,null,null,1,"p",[["class","h6"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e38\u0e1b\u0e08\u0e32\u0e01\u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e19\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e08\u0e30\u0e40\u0e2b\u0e47\u0e19\u0e44\u0e14\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e1c\u0e39\u0e49\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e41\u0e25\u0e30\u0e1c\u0e39\u0e49\u0e17\u0e23\u0e07\u0e04\u0e38\u0e13\u0e27\u0e38\u0e12\u0e34 "])),(l()(),t.qb(155,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,31,0,u.srru_kpis),l(n,112,0,null!=u.project_summary),l(n,115,0,null!=u.project_summary),l(n,123,0,u.project_summary),l(n,125,0,u.project_summary),l(n,132,0,u.project_summary),l(n,134,0,u.project_summary),l(n,141,0,u.project_summary),l(n,143,0,u.project_summary),l(n,150,0,u.project_summary),l(n,152,0,u.project_summary)},function(l,n){l(n,19,0,n.component.kpi_year+543)})}function z(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-kpi",[],null,null,null,j,p)),t.pb(1,114688,null,0,b,[t.y,r],null,null)],function(l,n){l(n,1,0)},null)}var k=t.mb("app-kpi",b,z,{},{},[]),C=u("iInd");class K{}u.d(n,"KpiModuleNgFactory",function(){return M});var M=t.nb(e,[],function(l){return t.xb([t.yb(512,t.j,t.bb,[[8,[i.a,k]],[3,t.j],t.w]),t.yb(4608,s.p,s.o,[t.t,[2,s.C]]),t.yb(1073742336,s.c,s.c,[]),t.yb(1073742336,C.m,C.m,[[2,C.r],[2,C.k]]),t.yb(1073742336,K,K,[]),t.yb(1073742336,e,e,[]),t.yb(1024,C.i,function(){return[[{path:"",component:b}]]},[])])})}}]);