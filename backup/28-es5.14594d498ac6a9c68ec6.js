(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{LjcL:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),o=u("Ip0R"),s=u("AytR"),r=u("t/Na"),a=function(){function l(l){this.http=l}return l.prototype.srru_strategies=function(l){return void 0===l&&(l=2018),this.http.get(s.a.api_url+"/ref/srru_strategies?strategy_year="+l)},l.prototype.srru_strategies_chart=function(l){return void 0===l&&(l=2018),this.http.get(s.a.api_url+"/kpi/srru?strategy_year="+l)},l.prototype.rajabhat_strategies_chart=function(l){return void 0===l&&(l=2018),this.http.get(s.a.api_url+"/kpi/rajabhat?strategy_year="+l)},l.prototype.national_strategies_chart=function(l){return void 0===l&&(l=2018),this.http.get(s.a.api_url+"/kpi/national?strategy_year="+l)},l.prototype.project_schemes_chart=function(){return this.http.get(s.a.api_url+"/kpi/schemes")},l.prototype.project_benefits_chart=function(){return this.http.get(s.a.api_url+"/kpi/benefits")},l.prototype.project_summary=function(){return this.http.get(s.a.api_url+"/old_projects/summary")},l.ngInjectableDef=t.Pb({factory:function(){return new l(t.Tb(r.c))},token:l,providedIn:"root"}),l}(),c=u("cclQ"),d=u("xJfa"),b=function(){function l(l,n){this.zone=l,this.kpi=n,this.kpi_year=2018}return l.prototype.ngOnInit=function(){this.loadData()},l.prototype.loadData=function(){var l=this;this.kpi.srru_strategies(this.kpi_year).subscribe(function(n){l.srru_kpis=n}),this.kpi.srru_strategies_chart(this.kpi_year).subscribe(function(n){l.createChart(n,"srruStrategyChart","name","projects","info")}),this.kpi.rajabhat_strategies_chart(this.kpi_year).subscribe(function(n){l.createChart(n,"rajabhatStrategyChart","name","projects","info")}),this.kpi.national_strategies_chart(this.kpi_year).subscribe(function(n){l.createChart(n,"nationalStrategyChart","name","projects","info")}),this.kpi.project_schemes_chart().subscribe(function(n){l.createChart(n,"projectSchemesChart","name","projects","info")}),this.kpi.project_benefits_chart().subscribe(function(n){l.createChart(n,"projectBenefitsChart","name","projects","info")}),this.kpi.project_summary().subscribe(function(n){console.log(n),l.project_summary=n})},l.prototype.createChart=function(l,n,u,t,e){this.zone.runOutsideAngular(function(){var e=c.g(n,d.l),i=e.xAxes.push(new d.b),o=e.yAxes.push(new d.k),s=e.series.push(new d.d);e.data=l,e.scrollbarX=new c.d,i.dataFields.category=u,i.renderer.grid.template.location=0,i.renderer.minGridDistance=30,i.renderer.labels.template.horizontalCenter="right",i.renderer.labels.template.verticalCenter="middle",i.renderer.labels.template.rotation=270,i.tooltip.disabled=!0,i.renderer.minHeight=110,o.renderer.minWidth=50,s.sequencedInterpolation=!0,s.dataFields.valueY=t,s.dataFields.categoryX=u,s.tooltipText="[{categoryX}: bold]{info}[/]",s.columns.template.strokeWidth=0,s.tooltip.pointerOrientation="vertical",s.columns.template.column.cornerRadiusTopLeft=10,s.columns.template.column.cornerRadiusTopRight=10,s.columns.template.column.fillOpacity=.8;var r=s.columns.template.column.states.create("hover");r.properties.cornerRadiusTopLeft=0,r.properties.cornerRadiusTopRight=0,r.properties.fillOpacity=1,s.columns.template.adapter.add("fill",function(l,n){return e.colors.getIndex(n.dataItem.index)}),e.cursor=new d.n})},l}(),p=t.rb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"td",[["style","width: 15%;"]],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.tb(3,0,null,null,1,"td",[["style","width: 40%;"]],null,null,null,null,null)),(l()(),t.Lb(4,null,["",""])),(l()(),t.tb(5,0,null,null,1,"td",[["style","width: 45%; white-space: pre-line;"]],null,null,null,null,null)),(l()(),t.Lb(6,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.name),l(n,4,0,n.context.$implicit.group),l(n,6,0,n.context.$implicit.details)})}function m(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"B",[["class","color-danger"]],null,null,null,null,null)),(l()(),t.Lb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_projects)})}function f(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["class"," text-center"]],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e17\u0e23\u0e07\u0e04\u0e38\u0e13\u0e27\u0e38\u0e12\u0e34 \u0e15\u0e32\u0e21\u0e27\u0e31\u0e15\u0e16\u0e38\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c \u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 \u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e17\u0e4c\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 \u0e41\u0e25\u0e30\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 \u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f\u0e2a\u0e38\u0e23\u0e34\u0e19\u0e17\u0e23\u0e4c \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e17\u0e23\u0e07\u0e04\u0e38\u0e13\u0e27\u0e38\u0e12\u0e34\u0e08\u0e33\u0e19\u0e27\u0e19 "," \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e32\u0e21\u0e15\u0e31\u0e27\u0e1a\u0e48\u0e07\u0e0a\u0e35\u0e49\u0e15\u0e48\u0e32\u0e07 \u0e46 \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e23\u0e38\u0e1b\u0e44\u0e14\u0e49\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_suggestion)})}function v(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_objectives.achieve)})}function y(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e44\u0e21\u0e48\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_objectives.not_achieve)})}function g(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_activities.achieve)})}function x(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e44\u0e21\u0e48\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_activities.not_achieve)})}function _(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_outputs.achieve)})}function j(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e44\u0e21\u0e48\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_outputs.not_achieve)})}function w(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_kpi.achieve)})}function z(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(1,null,["\u0e44\u0e21\u0e48\u0e1a\u0e23\u0e23\u0e25\u0e38 "," \u0e02\u0e49\u0e2d"]))],null,function(l,n){l(n,1,0,n.component.project_summary.total_kpi.not_achieve)})}function k(l){return t.Nb(0,[t.Jb(671088640,1,{sort:0}),(l()(),t.tb(1,0,null,null,11,"div",[["class","ms-hero-page-override ms-hero-img-city ms-hero-bg-primary"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,9,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,1,"span",[["class","ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-3"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,0,"img",[["alt",""],["src","https://surin.srru.ac.th/images/srru-2.png"],["width","100%"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,1,"h1",[["class","no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-3"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 "])),(l()(),t.tb(8,0,null,null,4,"p",[["class","mx-auto color-white mt-2 mw-800 text-uppercase  fw-300 animated fadeInUp animation-delay-3"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f "])),(l()(),t.tb(10,0,null,null,1,"span",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19"])),(l()(),t.Lb(-1,null,[" \u0e23\u0e30\u0e22\u0e30 20 \u0e1b\u0e35 (\u0e1e.\u0e28.2560-2579) "])),(l()(),t.tb(13,0,null,null,142,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,17,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.tb(15,0,null,null,16,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Lb(19,null,[" \u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 (\u0e1e.\u0e28. ",")"])),(l()(),t.tb(20,0,null,null,11,"table",[["class","table table-no-border table-striped"]],null,null,null,null,null)),(l()(),t.tb(21,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,1,"th",[["style","width: 15%;"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e22\u0e38\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c"])),(l()(),t.tb(25,0,null,null,1,"th",[["style","width: 40%;"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e01\u0e25\u0e38\u0e48\u0e21\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14"])),(l()(),t.tb(27,0,null,null,1,"th",[["style","width: 45%;"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14"])),(l()(),t.tb(29,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,h)),t.sb(31,278528,null,0,o.m,[t.S,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(32,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.tb(34,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.tb(35,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.tb(36,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19"])),(l()(),t.tb(38,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(39,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.tb(40,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(41,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.tb(42,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(43,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.tb(44,0,null,null,0,"div",[["id","srruStrategyChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.tb(45,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.tb(46,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.tb(47,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.tb(48,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.tb(49,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.tb(50,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22\u0e23\u0e32\u0e0a\u0e20\u0e31\u0e0f \u0e23\u0e30\u0e22\u0e30 20 \u0e1b\u0e35 (\u0e1e.\u0e28. 2560-2579)"])),(l()(),t.tb(52,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(53,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.tb(54,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(55,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.tb(56,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(57,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.tb(58,0,null,null,0,"div",[["id","rajabhatStrategyChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.tb(59,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.tb(60,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.tb(61,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.tb(62,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.tb(63,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.tb(64,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e20\u0e32\u0e22\u0e43\u0e15\u0e49\u0e22\u0e38\u0e17\u0e18\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e0a\u0e32\u0e15\u0e34 \u0e23\u0e30\u0e22\u0e30 20 \u0e1b\u0e35 (\u0e1e.\u0e28. 2560-2579)"])),(l()(),t.tb(66,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(67,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.tb(68,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(69,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.tb(70,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(71,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.tb(72,0,null,null,0,"div",[["id","nationalStrategyChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.tb(73,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.tb(74,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.tb(75,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.tb(76,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.tb(77,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.tb(78,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.tb(80,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(81,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.tb(82,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(83,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.tb(84,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(85,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.tb(86,0,null,null,0,"div",[["id","projectSchemesChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.tb(87,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.tb(88,0,null,null,13,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.tb(89,0,null,null,12,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.tb(90,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.tb(91,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.tb(92,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e17\u0e35\u0e48\u0e04\u0e32\u0e14\u0e27\u0e48\u0e32\u0e08\u0e30\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a"])),(l()(),t.tb(94,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(95,0,null,null,4,"div",[["class","chartjs-size-monitor"],["style","position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"]],null,null,null,null,null)),(l()(),t.tb(96,0,null,null,1,"div",[["class","chartjs-size-monitor-expand"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(97,0,null,null,0,"div",[["style","position:absolute;width:1000000px;height:1000000px;left:0;top:0"]],null,null,null,null,null)),(l()(),t.tb(98,0,null,null,1,"div",[["class","chartjs-size-monitor-shrink"],["style","position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"]],null,null,null,null,null)),(l()(),t.tb(99,0,null,null,0,"div",[["style","position:absolute;width:200%;height:200%;left:0; top:0"]],null,null,null,null,null)),(l()(),t.tb(100,0,null,null,0,"div",[["id","projectBenefitsChart"],["style","width: 100%; height: 450px"]],null,null,null,null,null)),(l()(),t.tb(101,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),t.tb(102,0,null,null,53,"div",[["class","d-flex flex-column"]],null,null,null,null,null)),(l()(),t.tb(103,0,null,null,52,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 my-5"]],null,null,null,null,null)),(l()(),t.tb(104,0,null,null,3,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.tb(105,0,null,null,2,"h3",[["class","card-title"]],null,null,null,null,null)),(l()(),t.tb(106,0,null,null,0,"i",[["class","zmdi zmdi-check-all"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e1c\u0e25\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.tb(108,0,null,null,44,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(109,0,null,null,4,"h2",[["class","section-title text-center"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e23\u0e27\u0e21 "])),(l()(),t.jb(16777216,null,null,1,null,m)),t.sb(112,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.Lb(-1,null,[" \u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.jb(16777216,null,null,1,null,f)),t.sb(115,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(116,0,null,null,36,"div",[["class","row mt-4"]],null,null,null,null,null)),(l()(),t.tb(117,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.tb(118,0,null,null,7,"div",[["class","card card-warning"]],null,null,null,null,null)),(l()(),t.tb(119,0,null,null,6,"div",[["class","card-body overflow-hidden text-center"]],null,null,null,null,null)),(l()(),t.tb(120,0,null,null,1,"h4",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e27\u0e31\u0e15\u0e16\u0e38\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.jb(16777216,null,null,1,null,v)),t.sb(123,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,y)),t.sb(125,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(126,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.tb(127,0,null,null,7,"div",[["class","card card-warning"]],null,null,null,null,null)),(l()(),t.tb(128,0,null,null,6,"div",[["class","card-body overflow-hidden text-center"]],null,null,null,null,null)),(l()(),t.tb(129,0,null,null,1,"h4",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21"])),(l()(),t.jb(16777216,null,null,1,null,g)),t.sb(132,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,x)),t.sb(134,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(135,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.tb(136,0,null,null,7,"div",[["class","card card-warning"]],null,null,null,null,null)),(l()(),t.tb(137,0,null,null,6,"div",[["class","card-body overflow-hidden text-center"]],null,null,null,null,null)),(l()(),t.tb(138,0,null,null,1,"h4",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23"])),(l()(),t.jb(16777216,null,null,1,null,_)),t.sb(141,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,j)),t.sb(143,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(144,0,null,null,8,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.tb(145,0,null,null,7,"div",[["class","card card-warning"]],null,null,null,null,null)),(l()(),t.tb(146,0,null,null,6,"div",[["class","card-body overflow-hidden text-center"]],null,null,null,null,null)),(l()(),t.tb(147,0,null,null,1,"h4",[["class","color-warning"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e15\u0e32\u0e21\u0e15\u0e31\u0e27\u0e0a\u0e35\u0e49\u0e27\u0e31\u0e14"])),(l()(),t.jb(16777216,null,null,1,null,w)),t.sb(150,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(16777216,null,null,1,null,z)),t.sb(152,16384,null,0,o.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(153,0,null,null,1,"p",[["class","h6"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e38\u0e1b\u0e08\u0e32\u0e01\u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23 \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e19\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e08\u0e30\u0e40\u0e2b\u0e47\u0e19\u0e44\u0e14\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e1c\u0e39\u0e49\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e41\u0e25\u0e30\u0e1c\u0e39\u0e49\u0e17\u0e23\u0e07\u0e04\u0e38\u0e13\u0e27\u0e38\u0e12\u0e34 "])),(l()(),t.tb(155,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,31,0,u.srru_kpis),l(n,112,0,null!=u.project_summary),l(n,115,0,null!=u.project_summary),l(n,123,0,u.project_summary),l(n,125,0,u.project_summary),l(n,132,0,u.project_summary),l(n,134,0,u.project_summary),l(n,141,0,u.project_summary),l(n,143,0,u.project_summary),l(n,150,0,u.project_summary),l(n,152,0,u.project_summary)},function(l,n){l(n,19,0,n.component.kpi_year+543)})}function L(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-kpi",[],null,null,null,k,p)),t.sb(1,114688,null,0,b,[t.B,a],null,null)],function(l,n){l(n,1,0)},null)}var I=t.pb("app-kpi",b,L,{},{},[]),C=u("ZYCi"),S=function(){return function(){}}();u.d(n,"KpiModuleNgFactory",function(){return N});var N=t.qb(e,[],function(l){return t.Ab([t.Bb(512,t.j,t.eb,[[8,[i.a,I]],[3,t.j],t.z]),t.Bb(4608,o.p,o.o,[t.w,[2,o.C]]),t.Bb(1073742336,o.c,o.c,[]),t.Bb(1073742336,C.m,C.m,[[2,C.r],[2,C.k]]),t.Bb(1073742336,S,S,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,C.i,function(){return[[{path:"",component:b}]]},[])])})}}]);