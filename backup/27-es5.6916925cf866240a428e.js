(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{KoXu:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),i=u("NvT6"),o=u("Blfk"),s=u("dWZg"),r=u("Ip0R"),c=u("wFw1"),b=u("+YG4"),p=u("fNGB"),d=u("D2gF"),m=u("j5V/"),g=u("3FdN"),h=u("VXgJ"),v=u("TXfF"),f=u("zKQG"),w=u("uaGE"),y=u("jeoQ"),B=u("jJjB"),k=u("6bMv"),L=u("y+xJ"),x=u("4Jtj"),_=u("Izlp"),I=u("7W/L"),z=u("rX1C"),O=u("kevW"),S=u("lVve"),D=u("DvaB"),j=u("AytR"),F=u("t/Na"),P=function(){function l(l){this.http=l}return l.prototype.getCountData=function(){return this.http.get(j.a.api_url+"/home")},l.prototype.getSurinCoorddinates=function(){return this.http.get("assets/json/surin-polygon.json")},l.prototype.getVillages=function(){return this.http.get(j.a.api_url+"/villages")},l.prototype.getVillage=function(l){return this.http.get(j.a.api_url+"/villages/"+l)},l.prototype.getWeathers=function(){return this.http.get(j.a.api_url+"/info/weather/stations")},l.prototype.getAirQuality=function(){return this.http.get(j.a.api_url+"/info/air/stations")},l.ngInjectableDef=t.Pb({factory:function(){return new l(t.Tb(F.c))},token:l,providedIn:"root"}),l}(),C=u("mrSG"),M=u("cclQ"),$=u("xJfa"),A=u("WlQZ");M.j(A.a);var N=function(){function l(l,n,u,t){this.dialogRef=l,this.homeService=n,this.zone=u,this.data=t,this.village=null}return l.prototype.ngOnInit=function(){return C.b(this,void 0,void 0,function(){var l=this;return C.e(this,function(n){return this.homeService.getVillage(this.data.id).subscribe(function(n){l.village=n,l.createChart(n.population)}),[2]})})},l.prototype.createChart=function(l){var n=this;this.zone.runOutsideAngular(function(){l.forEach(function(l){var u=M.g(l.name_en+"Chart",$.i);u.data=l.data.map(function(l){return{type:l.name_th,population:l.population}});var t=u.series.push(new $.j);t.dataFields.value="population",t.dataFields.category="type",n.chart=u})})},l.prototype.closeModal=function(){this.dialogRef.close()},l}(),W=function(){function l(l,n,u){this.homeService=l,this.matDialog=n,this.router=u,this.googleMapOptions={lat:14.882564,lng:103.494215,zoom:9.6},this.polygonPaths=[],this.villages=[],this.houseIcon={url:"assets/img/house.png",scaledSize:{height:40,width:40}},this.weatherDescriptions={fewclouds:{description:"\u0e21\u0e35\u0e40\u0e21\u0e06\u0e19\u0e49\u0e2d\u0e22",icon:{url:"assets/img/weathers/weather02.png",scaledSize:{height:40,width:40}}},brokenclouds:{description:"\u0e21\u0e35\u0e40\u0e21\u0e06\u0e01\u0e23\u0e30\u0e08\u0e31\u0e14\u0e01\u0e23\u0e30\u0e08\u0e32\u0e22",icon:{url:"assets/img/weathers/weather03.png",scaledSize:{height:40,width:40}}},overcastclouds:{description:"\u0e21\u0e35\u0e40\u0e21\u0e06\u0e1b\u0e01\u0e04\u0e25\u0e38\u0e21\u0e21\u0e32\u0e01",icon:{url:"assets/img/weathers/weather04.png",scaledSize:{height:40,width:40}}},scatteredclouds:{description:"\u0e21\u0e35\u0e40\u0e21\u0e06\u0e1b\u0e01\u0e04\u0e25\u0e38\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e41\u0e2b\u0e48\u0e07\u0e46",icon:{url:"assets/img/weathers/weather03.png",scaledSize:{height:40,width:40}}},lightrain:{description:"\u0e21\u0e35\u0e1d\u0e19\u0e40\u0e25\u0e47\u0e01\u0e19\u0e49\u0e2d\u0e22",icon:{url:"assets/img/weathers/weather05.png",scaledSize:{height:40,width:40}}},moderaterain:{description:"\u0e21\u0e35\u0e1d\u0e19\u0e1b\u0e32\u0e19\u0e01\u0e25\u0e32\u0e07",icon:{url:"assets/img/weathers/weather06.png",scaledSize:{height:40,width:40}}},showerrain:{description:"\u0e21\u0e35\u0e1d\u0e19\u0e15\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e41\u0e2b\u0e48\u0e07\u0e46",icon:{url:"assets/img/weathers/weather06.png",scaledSize:{height:40,width:40}}},heavyintensityrain:{description:"\u0e21\u0e35\u0e1d\u0e19\u0e15\u0e01\u0e2b\u0e19\u0e31\u0e01",icon:{url:"assets/img/weathers/weather07.png",scaledSize:{height:40,width:40}}},veryheavyrain:{description:"\u0e21\u0e35\u0e1d\u0e19\u0e15\u0e01\u0e2b\u0e19\u0e31\u0e01\u0e21\u0e32\u0e01",icon:{url:"assets/img/weathers/weather07.png",scaledSize:{height:40,width:40}}},thunderstorm:{description:"\u0e21\u0e35\u0e1d\u0e19\u0e1f\u0e49\u0e32\u0e04\u0e30\u0e19\u0e2d\u0e07",icon:{url:"assets/img/weathers/weather09.png",scaledSize:{height:40,width:40}}},thunderstormwithrain:{description:"\u0e21\u0e35\u0e1e\u0e32\u0e22\u0e38\u0e1d\u0e19\u0e1f\u0e49\u0e32\u0e04\u0e30\u0e19\u0e2d\u0e07",icon:{url:"assets/img/weathers/weather08.png",scaledSize:{height:40,width:40}}},thunderstormwithheavyrain:{description:"\u0e21\u0e35\u0e1e\u0e32\u0e22\u0e38\u0e1d\u0e19\u0e1f\u0e49\u0e32\u0e04\u0e30\u0e19\u0e2d\u0e07 \u0e01\u0e31\u0e1a\u0e21\u0e35\u0e1d\u0e19\u0e15\u0e01\u0e2b\u0e19\u0e31\u0e01",icon:{url:"assets/img/weathers/weather08.png",scaledSize:{height:40,width:40}}},thunderstormwithlightrain:{description:"\u0e21\u0e35\u0e1e\u0e32\u0e22\u0e38\u0e1d\u0e19\u0e1f\u0e49\u0e32\u0e04\u0e30\u0e19\u0e2d\u0e07 \u0e01\u0e31\u0e1a\u0e21\u0e35\u0e1d\u0e19\u0e15\u0e01\u0e40\u0e25\u0e47\u0e01\u0e19\u0e49\u0e2d\u0e22",icon:{url:"assets/img/weathers/weather08.png",scaledSize:{height:40,width:40}}},clearsky:{description:"\u0e17\u0e49\u0e2d\u0e07\u0e1f\u0e49\u0e32\u0e42\u0e1b\u0e23\u0e48\u0e07\u0e43\u0e2a",icon:{url:"assets/img/weathers/weather01.png",scaledSize:{height:40,width:40}}},fog:{description:"\u0e21\u0e35\u0e2b\u0e21\u0e2d\u0e01\u0e2b\u0e19\u0e32\u0e27\u0e1b\u0e01\u0e04\u0e25\u0e38\u0e21\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48",icon:{url:"assets/img/weathers/weather16.png",scaledSize:{height:40,width:40}}},mist:{description:"\u0e21\u0e35\u0e2b\u0e21\u0e2d\u0e01\u0e1d\u0e19\u0e1b\u0e01\u0e04\u0e25\u0e38\u0e21\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48",icon:{url:"assets/img/weathers/weather16.png",scaledSize:{height:40,width:40}}},haze:{description:"\u0e21\u0e35\u0e1d\u0e38\u0e48\u0e19\u0e1b\u0e01\u0e04\u0e25\u0e38\u0e21\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48",icon:{url:"assets/img/weathers/weather02.png",scaledSize:{height:40,width:40}}}}}return l.prototype.ngOnInit=function(){this.getGeoJson(),this.getVillages(),this.getWeathers(),this.getAirQuality(),this.getCountData()},l.prototype.toggleModal=function(l){this.matDialog.open(N,{width:"50%",data:{id:l.id}})},l.prototype.getGeoJson=function(){var l=this;this.homeService.getSurinCoorddinates().subscribe(function(n){l.geoJsonObject={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Polygon",coordinates:[[[0,90],[180,90],[180,-90],[0,-90],[-180,-90],[-180,0],[-180,90],[0,90]],n.geometry.coordinates[0]]},properties:{}}]}})},l.prototype.getVillages=function(){var l=this;this.homeService.getVillages().subscribe(function(n){l.villages=n.map(function(l){return l.lat=parseFloat(l.lat),l.lng=parseFloat(l.lng),l}),n.forEach(function(n){var u=n.polygon.map(function(l){return{lat:parseFloat(l.lat),lng:parseFloat(l.lng)}});l.polygonPaths.push(u)})})},l.prototype.getWeathers=function(){var l=this;this.homeService.getWeathers().subscribe(function(n){return l.weathers=n})},l.prototype.getAirQuality=function(){var l=this;this.homeService.getAirQuality().subscribe(function(n){return l.air_quality=n})},l.prototype.getCountData=function(){var l=this;this.homeService.getCountData().subscribe(function(n){return l.countData=n})},l.prototype.setGeoJsonStyle=function(l){return{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2}},l.prototype.markerMouseOver=function(l,n){null!=n.lastOpen&&n.lastOpen.close(),n.lastOpen=l,l.open()},l.prototype.navigate=function(l){this.router.navigate([l])},l}(),J=u("o3x0"),Q=u("ZYCi"),q=t.rb({encapsulation:0,styles:[["agm-map[_ngcontent-%COMP%]{height:900px}"]],data:{}});function G(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,4,"div",[["class","my-5 text-center"],["style","height: 100vh;"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,3,"div",[["class","absolute-center"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,1,"mat-spinner",[["class","mx-auto mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,i.b,i.a)),t.sb(3,49152,null,0,o.d,[t.k,s.a,[2,r.d],[2,c.a],o.a],null,null),(l()(),t.Lb(-1,null,[" \u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25. "]))],null,function(l,n){l(n,2,0,t.Db(n,3)._noopAnimations,t.Db(n,3).diameter,t.Db(n,3).diameter)})}function V(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"agm-polygon",[["fillColor","#FF0000"],["fillOpacity","0.35"],["strokeColor","#FF0000"],["strokeOpacity","0.8"],["strokeWeight","2"]],null,null,null,null,null)),t.sb(1,1720320,null,0,b.a,[p.a],{fillColor:[0,"fillColor"],fillOpacity:[1,"fillOpacity"],paths:[2,"paths"],strokeColor:[3,"strokeColor"],strokeOpacity:[4,"strokeOpacity"],strokeWeight:[5,"strokeWeight"]},null)],function(l,n){l(n,1,0,"#FF0000","0.35",n.component.polygonPaths,"#FF0000","0.8","2")},null)}function H(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),t.tb(1,0,null,null,9,"agm-marker",[],null,[[null,"markerClick"],[null,"mouseOver"]],function(l,n,u){var e=!0,a=l.component;return"markerClick"===n&&(e=!1!==a.toggleModal(l.context.$implicit)&&e),"mouseOver"===n&&(e=!1!==a.markerMouseOver(t.Db(l,6),t.Db(l.parent,17))&&e),e},null,null)),t.Ib(6144,null,d.a,null,[m.a]),t.sb(3,1720320,null,1,m.a,[g.a],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},{markerClick:"markerClick",mouseOver:"mouseOver"}),t.Jb(603979776,2,{infoWindow:1}),(l()(),t.tb(5,0,null,null,5,"agm-info-window",[],null,null,null,h.b,h.a)),t.sb(6,770048,[[2,4],["infoWindow",4]],0,v.a,[f.a,t.k],{disableAutoPan:[0,"disableAutoPan"]},null),(l()(),t.tb(7,0,null,0,1,"a",[["href","javascript:void(0);"]],null,null,null,null,null)),(l()(),t.Lb(8,null,["",""])),(l()(),t.tb(9,0,null,0,1,"p",[["class","color-primary"]],null,null,null,null,null)),(l()(),t.Lb(10,null,["\u0e08\u0e33\u0e19\u0e27\u0e19\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e43\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48: ",""]))],function(l,n){l(n,3,0,n.context.$implicit.lat,n.context.$implicit.lng,n.component.houseIcon),l(n,6,0,!1)},function(l,n){l(n,8,0,n.context.$implicit.village.village_name_th+" \u0e15\u0e33\u0e1a\u0e25"+n.context.$implicit.sub_district.sub_district_name_th+" \u0e2d\u0e33\u0e40\u0e20\u0e2d"+n.context.$implicit.district.district_name_th),l(n,10,0,n.context.$implicit.projects_count)})}function U(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,32,null,null,null,null,null,null,null)),(l()(),t.tb(1,0,null,null,31,"agm-marker",[],null,[[null,"mouseOver"]],function(l,n,u){var e=!0;return"mouseOver"===n&&(e=!1!==l.component.markerMouseOver(t.Db(l,6),t.Db(l.parent,17))&&e),e},null,null)),t.Ib(6144,null,d.a,null,[m.a]),t.sb(3,1720320,null,1,m.a,[g.a],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},{mouseOver:"mouseOver"}),t.Jb(603979776,3,{infoWindow:1}),(l()(),t.tb(5,0,null,null,27,"agm-info-window",[],null,null,null,h.b,h.a)),t.sb(6,770048,[[3,4],["weatherInfoWindow",4]],0,v.a,[f.a,t.k],{disableAutoPan:[0,"disableAutoPan"]},null),(l()(),t.tb(7,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(8,null,["\u0e2a\u0e20\u0e32\u0e1e\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e2a\u0e16\u0e32\u0e19\u0e35",""])),(l()(),t.tb(9,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e2a\u0e20\u0e32\u0e1e\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49:"])),(l()(),t.Lb(12,null,[" ",""])),(l()(),t.tb(13,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e2d\u0e38\u0e13\u0e2b\u0e20\u0e39\u0e21\u0e34\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22:"])),(l()(),t.Lb(16,null,[" ","\xb0"])),(l()(),t.tb(17,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e04\u0e27\u0e32\u0e21\u0e01\u0e14\u0e2d\u0e32\u0e01\u0e32\u0e28:"])),(l()(),t.Lb(20,null,[" "," hPa"])),(l()(),t.tb(21,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e04\u0e27\u0e32\u0e21\u0e0a\u0e37\u0e49\u0e19:"])),(l()(),t.Lb(24,null,[" "," %"])),(l()(),t.tb(25,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.tb(26,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e04\u0e27\u0e32\u0e21\u0e40\u0e23\u0e47\u0e27\u0e25\u0e21:"])),(l()(),t.Lb(28,null,[" "," \u0e19\u0e2d\u0e15"])),(l()(),t.tb(29,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.tb(30,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e40\u0e21\u0e06:"])),(l()(),t.Lb(32,null,[" \u0e23\u0e49\u0e2d\u0e22\u0e25\u0e30 ",""]))],function(l,n){var u=n.context.$implicit.lat,t=n.context.$implicit.lon,e=n.component.weatherDescriptions[n.context.$implicit.weather.description.split(" ").join("")].icon;l(n,3,0,u,t,e),l(n,6,0,!1)},function(l,n){var u=n.component;l(n,8,0,n.context.$implicit.station_name_th);var t=u.weatherDescriptions[n.context.$implicit.weather.description.split(" ").join("")].description;l(n,12,0,t),l(n,16,0,n.context.$implicit.weather.temp),l(n,20,0,n.context.$implicit.weather.pressure),l(n,24,0,n.context.$implicit.weather.humidity),l(n,28,0,n.context.$implicit.weather.wind_speed),l(n,32,0,n.context.$implicit.weather.clouds)})}function R(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,15,"agm-marker",[["label","PM 2.5"]],null,[[null,"mouseOver"]],function(l,n,u){var e=!0;return"mouseOver"===n&&(e=!1!==l.component.markerMouseOver(t.Db(l,5),t.Db(l.parent.parent,17))&&e),e},null,null)),t.Ib(6144,null,d.a,null,[m.a]),t.sb(2,1720320,null,1,m.a,[g.a],{latitude:[0,"latitude"],longitude:[1,"longitude"],label:[2,"label"]},{mouseOver:"mouseOver"}),t.Jb(603979776,4,{infoWindow:1}),(l()(),t.tb(4,0,null,null,11,"agm-info-window",[],null,null,null,h.b,h.a)),t.sb(5,770048,[[4,4],["airInfoWindow",4]],0,v.a,[f.a,t.k],{disableAutoPan:[0,"disableAutoPan"]},null),(l()(),t.tb(6,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(7,null,["\u0e1d\u0e38\u0e48\u0e19\u0e25\u0e30\u0e2d\u0e2d\u0e07 \u0e2a\u0e16\u0e32\u0e19\u0e35",""])),(l()(),t.tb(8,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["PM 2.5:"])),(l()(),t.Lb(11,null,[" "," \u03bcg/m3"])),(l()(),t.tb(12,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["AQI:"])),(l()(),t.Lb(15,null,[" ",""]))],function(l,n){l(n,2,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.lat,null==n.parent.context.$implicit?null:n.parent.context.$implicit.lng,"PM 2.5"),l(n,5,0,!1)},function(l,n){l(n,7,0,n.parent.context.$implicit.name),l(n,11,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.air.ugm3),l(n,15,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.air.aqi)})}function T(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,R)),t.sb(2,16384,null,0,r.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.jb(0,null,null,0))],function(l,n){l(n,2,0,n.context.$implicit.air)},null)}function K(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,89,"div",[["class","ms-site-container mt-5"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"div",[["class","ms-hero-page-override ms-hero-img-airplane ms-bg-fixed ms-hero-bg-dark-light"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,1,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,0,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,85,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,84,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,32,"div",[["class","card card-royal card-hero animated fadeInUp animation-delay-7 p-1 col-10"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,31,"div",[["class","card-body p-0 m-0"]],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,30,"agm-map",[["class","h-100"]],[[2,"sebm-google-map-container",null]],null,null,w.b,w.a)),t.Ib(4608,null,p.a,p.a,[y.a,t.B]),t.Ib(4608,null,f.a,f.a,[y.a,t.B,g.a]),t.Ib(4608,null,B.a,B.a,[y.a,t.B]),t.Ib(4608,null,k.a,k.a,[y.a,t.B]),t.Ib(4608,null,L.a,L.a,[y.a,t.B]),t.Ib(4608,null,x.a,x.a,[y.a,t.B]),t.Ib(512,null,y.a,y.a,[_.a,t.B]),t.Ib(512,null,d.b,d.b,[_.a]),t.sb(17,770048,[["gm",4]],0,I.a,[t.k,y.a,d.b],{longitude:[0,"longitude"],latitude:[1,"latitude"],zoom:[2,"zoom"]},null),t.Ib(512,null,z.a,z.a,[y.a,t.B]),t.Ib(512,null,g.a,g.a,[y.a,t.B]),(l()(),t.jb(16777216,null,0,1,null,V)),t.sb(21,16384,null,0,r.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(22,0,null,0,1,"agm-data-layer",[],null,null,null,null,null)),t.sb(23,737280,null,0,O.a,[z.a],{geoJson:[0,"geoJson"],style:[1,"style"]},null),(l()(),t.tb(24,0,null,0,3,"agm-marker",[["iconUrl","assets/img/logo.png"]],null,null,null,null,null)),t.Ib(6144,null,d.a,null,[m.a]),t.sb(26,1720320,null,1,m.a,[g.a],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),t.Jb(603979776,1,{infoWindow:1}),(l()(),t.jb(16777216,null,0,1,null,H)),t.sb(29,278528,null,0,r.m,[t.S,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.jb(16777216,null,0,1,null,U)),t.sb(31,278528,null,0,r.m,[t.S,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(32,0,null,0,6,"agm-marker-cluster",[["imagePath","https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m"]],null,null,null,null,null)),t.Ib(6144,null,g.a,null,[S.a]),t.Ib(4608,null,f.a,f.a,[y.a,t.B,g.a]),t.Ib(512,null,S.a,S.a,[y.a,t.B]),t.sb(36,737280,null,0,D.a,[S.a],{imagePath:[0,"imagePath"]},null),(l()(),t.jb(16777216,null,null,1,null,T)),t.sb(38,278528,null,0,r.m,[t.S,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(39,0,null,null,50,"div",[["class","col-2"]],null,null,null,null,null)),(l()(),t.tb(40,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(41,0,null,null,14,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.tb(42,0,null,null,13,"div",[["class","card card-hero card-info-inverse wow fadeInLeft animation-delay-4"],["style","visibility: visible; animation-name: fadeInLeft;cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigate("/info/population")&&t),t},null,null)),(l()(),t.tb(43,0,null,null,12,"div",[["class","text-center card-body p-1"]],null,null,null,null,null)),(l()(),t.tb(44,0,null,null,1,"span",[["class","ms-icon ms-icon-circle ms-icon-white ms-icon-inverse ms-icon-sm "]],null,null,null,null,null)),(l()(),t.tb(45,0,null,null,0,"i",[["class","fa fa-users"]],null,null,null,null,null)),(l()(),t.tb(46,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23"])),(l()(),t.tb(48,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Lb(49,null,["",""])),t.Hb(50,1),(l()(),t.tb(51,0,null,null,1,"p",[["class","mb-0 mt-1"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22"])),(l()(),t.tb(53,0,null,null,2,"span",[["class",""]],null,null,null,null,null)),(l()(),t.Lb(54,null,["",""])),t.Hb(55,1),(l()(),t.tb(56,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(57,0,null,null,6,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.tb(58,0,null,null,5,"div",[["class","card card-danger-inverse wow fadeInLeft animation-delay-4"],["style","visibility: visible; animation-name: fadeInLeft;cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigate("/otop")&&t),t},null,null)),(l()(),t.tb(59,0,null,null,4,"div",[["class","text-center card-body p-1"]],null,null,null,null,null)),(l()(),t.tb(60,0,null,null,1,"span",[["class","ms-icon ms-icon-circle ms-icon-white ms-icon-inverse ms-icon-sm "]],null,null,null,null,null)),(l()(),t.tb(61,0,null,null,0,"i",[["class","fa fa-shopping-bag"]],null,null,null,null,null)),(l()(),t.tb(62,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Lb(63,null,["\u0e42\u0e2d\u0e17\u0e2d\u0e1b: ",""])),(l()(),t.tb(64,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(65,0,null,null,8,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.tb(66,0,null,null,7,"div",[["class","card card-success-inverse wow fadeInLeft animation-delay-4"],["style","visibility: visible; animation-name: fadeInLeft;cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigate("/bio")&&t),t},null,null)),(l()(),t.tb(67,0,null,null,6,"div",[["class","text-center card-body p-1"]],null,null,null,null,null)),(l()(),t.tb(68,0,null,null,1,"span",[["class","ms-icon ms-icon-circle ms-icon-white ms-icon-inverse ms-icon-sm "]],null,null,null,null,null)),(l()(),t.tb(69,0,null,null,0,"i",[["class","fa fa-leaf"]],null,null,null,null,null)),(l()(),t.tb(70,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Lb(71,null,["\u0e1e\u0e37\u0e0a: ",""])),(l()(),t.tb(72,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Lb(73,null,["\u0e2a\u0e31\u0e15\u0e27\u0e4c: ",""])),(l()(),t.tb(74,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(75,0,null,null,14,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.tb(76,0,null,null,13,"div",[["class","card card-royal-inverse wow fadeInLeft animation-delay-4"],["style","visibility: visible; animation-name: fadeInLeft;cursor: pointer;"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.navigate("/info/env/weather")&&t),t},null,null)),(l()(),t.tb(77,0,null,null,12,"div",[["class","text-center card-body p-1"]],null,null,null,null,null)),(l()(),t.tb(78,0,null,null,1,"span",[["class","ms-icon ms-icon-circle ms-icon-white ms-icon-inverse ms-icon-sm "]],null,null,null,null,null)),(l()(),t.tb(79,0,null,null,0,"i",[["class","fa fa-cloud"]],null,null,null,null,null)),(l()(),t.tb(80,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Lb(81,null,["\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e27\u0e31\u0e14\u0e2d\u0e32\u0e01\u0e32\u0e28: ",""])),(l()(),t.tb(82,0,null,null,2,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Lb(83,null,["\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2d\u0e32\u0e01\u0e32\u0e28: ",""])),t.Hb(84,1),(l()(),t.tb(85,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Lb(86,null,["\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e27\u0e31\u0e14\u0e1d\u0e38\u0e48\u0e19: ",""])),(l()(),t.tb(87,0,null,null,2,"p",[["class",""]],null,null,null,null,null)),(l()(),t.Lb(88,null,["\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1d\u0e38\u0e48\u0e19: ",""])),t.Hb(89,1)],function(l,n){var u=n.component;l(n,17,0,u.googleMapOptions.lng,u.googleMapOptions.lat,u.googleMapOptions.zoom),l(n,21,0,u.polygonPaths.length>0),l(n,23,0,u.geoJsonObject,u.setGeoJsonStyle),l(n,26,0,u.googleMapOptions.lat,u.googleMapOptions.lng,"assets/img/logo.png"),l(n,29,0,u.villages),l(n,31,0,u.weathers),l(n,36,0,"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m"),l(n,38,0,u.air_quality)},function(l,n){var u=n.component;l(n,8,0,!0);var e=t.Mb(n,49,0,l(n,50,0,t.Db(n.parent,0),u.countData.count_families+u.countData.count_family_members));l(n,49,0,e);var a=t.Mb(n,54,0,l(n,55,0,t.Db(n.parent,0),(u.countData.avg_income_60+u.countData.avg_income_61)/2));l(n,54,0,a),l(n,63,0,u.countData.count_otop),l(n,71,0,u.countData.count_plants),l(n,73,0,u.countData.count_animals),l(n,81,0,u.countData.count_weather_stations);var i=t.Mb(n,83,0,l(n,84,0,t.Db(n.parent,0),u.countData.count_weathers));l(n,83,0,i),l(n,86,0,u.countData.count_air_stations);var o=t.Mb(n,88,0,l(n,89,0,t.Db(n.parent,0),u.countData.count_air));l(n,88,0,o)})}function Y(l){return t.Nb(0,[t.Fb(0,r.f,[t.w]),(l()(),t.jb(16777216,null,null,1,null,G)),t.sb(2,16384,null,0,r.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(3,0,null,null,2,"a",[["class","ms-conf-btn ms-configurator-btn btn-circle-lg btn-circle btn-circle-raised btn-circle-warning animated rubberBand"],["href","/landing"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,0,"i",[["class","fa fa-android"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,0,"i",[["class","fa fa-apple"]],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,K)),t.sb(7,16384,null,0,r.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,!(u.villages||u.weathers||u.air_quality||u.countData)),l(n,7,0,u.villages&&u.weathers&&u.air_quality&&u.countData)},null)}function X(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-home",[],null,null,null,Y,q)),t.sb(1,114688,null,0,W,[P,J.e,Q.k],null,null)],function(l,n){l(n,1,0)},null)}var Z=t.pb("app-home",W,X,{},{},[]),E=u("xYTU"),ll=u("t68o"),nl=u("zbXB"),ul=u("NcP4"),tl=t.rb({encapsulation:0,styles:[[""]],data:{}});function el(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"div",[["class","my-5 text-center"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"mat-spinner",[["class","mx-auto my-2 mat-spinner mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"]],null,null,i.b,i.a)),t.sb(2,49152,null,0,o.d,[t.k,s.a,[2,r.d],[2,c.a],o.a],null,null),(l()(),t.Lb(-1,null,[" \u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25.\n"]))],null,function(l,n){l(n,1,0,t.Db(n,2)._noopAnimations,t.Db(n,2).diameter,t.Db(n,2).diameter)})}function al(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),t.Lb(2,null,["",""]))],null,function(l,n){l(n,1,0,t.vb(1,"/web/#/projects/",n.context.$implicit.id,"")),l(n,2,0,n.context.$implicit.project_name)})}function il(l){return t.Nb(0,[(l()(),t.jb(16777216,null,null,1,null,el)),t.sb(1,16384,null,0,r.n,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(2,0,null,null,83,"div",[["class","mat-dialog-content"],["mat-dialog-content",""]],[[4,"display",null]],null,null,null,null)),t.sb(3,16384,null,0,J.i,[],null,null),(l()(),t.tb(4,0,null,null,38,"div",[["class","row animated fadeIn"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,37,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,1,"h2",[["class","color-primary no-mb"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b"])),(l()(),t.tb(9,0,null,null,33,"table",[["class","table table-no-border table-striped"]],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),t.tb(11,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,0,"i",[["class","zmdi zmdi-account mr-1 color-royal"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e0a\u0e37\u0e48\u0e2d\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19"])),(l()(),t.tb(14,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(15,null,["",""])),(l()(),t.tb(16,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,0,"i",[["class","zmdi zmdi-face mr-1 color-warning"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48"])),(l()(),t.tb(20,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(21,null,["\u0e15\u0e33\u0e1a\u0e25 ",""])),(l()(),t.tb(22,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,0,"i",[["class","zmdi zmdi-email mr-1 color-primary"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e01\u0e23"])),(l()(),t.tb(26,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(27,null,[" "," \u0e04\u0e19 "])),(l()(),t.tb(28,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),t.tb(29,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t.tb(30,0,null,null,0,"i",[["class","zmdi zmdi-email mr-1 color-primary"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e2b\u0e25\u0e31\u0e07\u0e04\u0e32\u0e40\u0e23\u0e37\u0e2d\u0e19"])),(l()(),t.tb(32,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(33,null,[" "," \u0e2b\u0e25\u0e31\u0e07\u0e04\u0e32\u0e40\u0e23\u0e37\u0e2d\u0e19 "])),(l()(),t.tb(34,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.tb(35,0,null,null,2,"th",[],null,null,null,null,null)),(l()(),t.tb(36,0,null,null,0,"i",[["class","zmdi zmdi-male-female mr-1 color-success"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" \u0e1e\u0e34\u0e01\u0e31\u0e14\u0e17\u0e32\u0e07\u0e20\u0e39\u0e21\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c"])),(l()(),t.tb(38,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.tb(39,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(40,null,["\u0e25\u0e30\u0e15\u0e34\u0e08\u0e39\u0e14: ",""])),(l()(),t.tb(41,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(42,null,["\u0e25\u0e2d\u0e07\u0e08\u0e34\u0e08\u0e39\u0e14: ",""])),(l()(),t.tb(43,0,null,null,7,"div",[["class","row animated fadeIn"]],null,null,null,null,null)),(l()(),t.tb(44,0,null,null,6,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(45,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(46,0,null,null,1,"h2",[["class","color-primary"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e43\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48"])),(l()(),t.tb(48,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,al)),t.sb(50,278528,null,0,r.m,[t.S,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(51,0,null,null,34,"div",[["class","row animated fadeIn"]],null,null,null,null,null)),(l()(),t.tb(52,0,null,null,33,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(53,0,null,null,32,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.tb(54,0,null,null,1,"h2",[["class","color-primary"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e1c\u0e39\u0e49\u0e23\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23"])),(l()(),t.tb(56,0,null,null,20,"ul",[["class","nav nav-tabs indicator-primary nav-tabs-full nav-tabs-4 mb-5"],["role","tablist"]],null,null,null,null,null)),(l()(),t.tb(57,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.tb(58,0,null,null,3,"a",[["aria-controls","occupation"],["class","nav-link withoutripple px-0 active"],["data-toggle","tab"],["href","#occupation"],["role","tab"]],null,null,null,null,null)),(l()(),t.tb(59,0,null,null,0,"i",[["class","zmdi zmdi-case"]],null,null,null,null,null)),(l()(),t.tb(60,0,null,null,1,"span",[["class","d-none d-sm-inline"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e2d\u0e32\u0e0a\u0e35\u0e1e"])),(l()(),t.tb(62,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.tb(63,0,null,null,3,"a",[["aria-controls","education"],["class","nav-link withoutripple px-0"],["data-toggle","tab"],["href","#education"],["role","tab"]],null,null,null,null,null)),(l()(),t.tb(64,0,null,null,0,"i",[["class","zmdi zmdi-graduation-cap"]],null,null,null,null,null)),(l()(),t.tb(65,0,null,null,1,"span",[["class","d-none d-sm-inline"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32"])),(l()(),t.tb(67,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.tb(68,0,null,null,3,"a",[["aria-controls","gender"],["class","nav-link withoutripple px-0"],["data-toggle","tab"],["href","#gender"],["role","tab"]],null,null,null,null,null)),(l()(),t.tb(69,0,null,null,0,"i",[["class","zmdi zmdi-male-female"]],null,null,null,null,null)),(l()(),t.tb(70,0,null,null,1,"span",[["class","d-none d-sm-inline"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e40\u0e1e\u0e28"])),(l()(),t.tb(72,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.tb(73,0,null,null,3,"a",[["aria-controls","age"],["class","nav-link withoutripple px-0"],["data-toggle","tab"],["href","#age"],["role","tab"]],null,null,null,null,null)),(l()(),t.tb(74,0,null,null,0,"i",[["class","zmdi zmdi-cake"]],null,null,null,null,null)),(l()(),t.tb(75,0,null,null,1,"span",[["class","d-none d-sm-inline"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\u0e2d\u0e32\u0e22\u0e38"])),(l()(),t.tb(77,0,null,null,8,"div",[["class","tab-content"],["style","height: calc(100vh - 200px)"]],null,null,null,null,null)),(l()(),t.tb(78,0,null,null,1,"div",[["class","tab-pane fade active show"],["id","occupation"],["role","tabpanel"]],null,null,null,null,null)),(l()(),t.tb(79,0,null,null,0,"div",[["id","occupationChart"],["style","width: 100%; height: 500px"]],null,null,null,null,null)),(l()(),t.tb(80,0,null,null,1,"div",[["class","tab-pane fade"],["id","education"],["role","tabpanel"]],null,null,null,null,null)),(l()(),t.tb(81,0,null,null,0,"div",[["id","educationChart"],["style","width: 100%; height: 500px"]],null,null,null,null,null)),(l()(),t.tb(82,0,null,null,1,"div",[["class","tab-pane fade"],["id","gender"],["role","tabpanel"]],null,null,null,null,null)),(l()(),t.tb(83,0,null,null,0,"div",[["id","genderChart"],["style","width: 100%; height: 500px"]],null,null,null,null,null)),(l()(),t.tb(84,0,null,null,1,"div",[["class","tab-pane fade"],["id","age"],["role","tabpanel"]],null,null,null,null,null)),(l()(),t.tb(85,0,null,null,0,"div",[["id","ageChart"],["style","width: 100%; height: 500px"]],null,null,null,null,null)),(l()(),t.tb(86,0,null,null,3,"div",[["class","mat-dialog-actions"],["mat-dialog-actions",""]],null,null,null,null,null)),t.sb(87,16384,null,0,J.f,[],null,null),(l()(),t.tb(88,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.closeModal()&&t),t},null,null)),(l()(),t.Lb(-1,null,["\u0e1b\u0e34\u0e14"]))],function(l,n){var u=n.component;l(n,1,0,!u.village),l(n,50,0,null==u.village?null:u.village.projects)},function(l,n){var u=n.component;l(n,2,0,u.village?"block":"none"),l(n,15,0,null==u.village?null:u.village.village.village_name_th),l(n,21,0,(null==u.village?null:u.village.sub_district.sub_district_name_th)+" \u0e2d\u0e33\u0e40\u0e20\u0e2d"+(null==u.village?null:u.village.district.district_name_th)+" \u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14"+(null==u.village?null:u.village.province.province_name_th)),l(n,27,0,null==u.village?null:u.village.houseowner.total_population),l(n,33,0,null==u.village?null:u.village.houseowner.total_houseowner),l(n,40,0,null==u.village?null:u.village.lat),l(n,42,0,null==u.village?null:u.village.lng)})}function ol(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-modal",[],null,null,null,il,tl)),t.sb(1,114688,null,0,N,[J.k,P,t.B,J.a],null,null)],function(l,n){l(n,1,0)},null)}var sl=t.pb("app-modal",N,ol,{},{},[]),rl=u("gIcY"),cl=u("M2Lx"),bl=u("eDkP"),pl=u("Fzqc"),dl=u("uGex"),ml=u("Wf4p"),gl=u("wmQ5"),hl=u("jQLj"),vl=u("OkvK"),fl=u("v9Dh"),wl=u("ZYjt"),yl=u("4epT"),Bl=u("4tE/"),kl=u("TTF2"),Ll=u("kmKP"),xl=u("SaRM"),_l=u("BBZF"),Il=u("Ry/H"),zl=u("/fSM"),Ol=u("18pv"),Sl=function(){return function(){}}(),Dl=u("de3e"),jl=u("UodH"),Fl=u("SMsm"),Pl=u("4c35"),Cl=u("qAlS"),Ml=u("seP3"),$l=u("/VYK"),Al=u("b716"),Nl=u("Lwpp"),Wl=u("vARd"),Jl=u("9It4"),Ql=u("lLAP"),ql=u("y4qS"),Gl=u("BHnd"),Vl=u("u7R8"),Hl=u("La40"),Ul=u("r43C"),Rl=u("FVSy"),Tl=u("LC5p"),Kl=u("0/Q6"),Yl=u("Nsh5"),Xl=u("PCNd");u.d(n,"HomeModuleNgFactory",function(){return Zl});var Zl=t.qb(e,[],function(l){return t.Ab([t.Bb(512,t.j,t.eb,[[8,[a.a,Z,E.a,E.b,ll.a,nl.b,nl.a,ul.a,sl]],[3,t.j],t.z]),t.Bb(4608,r.p,r.o,[t.w,[2,r.C]]),t.Bb(4608,rl.f,rl.f,[]),t.Bb(4608,rl.y,rl.y,[]),t.Bb(4608,cl.c,cl.c,[]),t.Bb(4608,bl.c,bl.c,[bl.i,bl.e,t.j,bl.h,bl.f,t.s,t.B,r.d,pl.b,[2,r.j]]),t.Bb(5120,bl.j,bl.k,[bl.c]),t.Bb(5120,dl.a,dl.b,[bl.c]),t.Bb(4608,ml.d,ml.d,[]),t.Bb(5120,gl.b,gl.a,[[3,gl.b]]),t.Bb(5120,J.c,J.d,[bl.c]),t.Bb(135680,J.e,J.e,[bl.c,t.s,[2,r.j],[2,J.b],J.c,[3,J.e],bl.e]),t.Bb(4608,hl.i,hl.i,[]),t.Bb(5120,hl.a,hl.b,[bl.c]),t.Bb(4608,ml.c,ml.z,[[2,ml.h],s.a]),t.Bb(5120,vl.d,vl.a,[[3,vl.d]]),t.Bb(5120,fl.b,fl.c,[bl.c]),t.Bb(4608,wl.e,ml.e,[[2,ml.i],[2,ml.n]]),t.Bb(5120,yl.c,yl.a,[[3,yl.c]]),t.Bb(5120,Bl.b,Bl.c,[bl.c]),t.Bb(4608,kl.a,kl.a,[F.c]),t.Bb(4608,Ll.a,Ll.a,[F.c]),t.Bb(4608,xl.a,xl.a,[F.c]),t.Bb(4608,_l.c,_l.c,[]),t.Bb(4608,_l.b,_l.b,[]),t.Bb(4608,_.a,Il.b,[[2,Il.a],_l.c,_l.b]),t.Bb(4608,P,P,[F.c]),t.Bb(1073742336,r.c,r.c,[]),t.Bb(1073742336,zl.a,zl.a,[]),t.Bb(1073742336,Ol.a,Ol.a,[]),t.Bb(1073742336,Q.m,Q.m,[[2,Q.r],[2,Q.k]]),t.Bb(1073742336,Sl,Sl,[]),t.Bb(1073742336,rl.x,rl.x,[]),t.Bb(1073742336,rl.u,rl.u,[]),t.Bb(1073742336,rl.l,rl.l,[]),t.Bb(1073742336,pl.a,pl.a,[]),t.Bb(1073742336,ml.n,ml.n,[[2,ml.f],[2,wl.f]]),t.Bb(1073742336,o.c,o.c,[]),t.Bb(1073742336,s.b,s.b,[]),t.Bb(1073742336,ml.y,ml.y,[]),t.Bb(1073742336,cl.d,cl.d,[]),t.Bb(1073742336,Dl.d,Dl.d,[]),t.Bb(1073742336,Dl.c,Dl.c,[]),t.Bb(1073742336,jl.c,jl.c,[]),t.Bb(1073742336,Fl.c,Fl.c,[]),t.Bb(1073742336,Pl.g,Pl.g,[]),t.Bb(1073742336,Cl.c,Cl.c,[]),t.Bb(1073742336,bl.g,bl.g,[]),t.Bb(1073742336,ml.w,ml.w,[]),t.Bb(1073742336,ml.t,ml.t,[]),t.Bb(1073742336,Ml.e,Ml.e,[]),t.Bb(1073742336,dl.d,dl.d,[]),t.Bb(1073742336,$l.c,$l.c,[]),t.Bb(1073742336,Al.c,Al.c,[]),t.Bb(1073742336,Nl.e,Nl.e,[]),t.Bb(1073742336,gl.c,gl.c,[]),t.Bb(1073742336,Wl.e,Wl.e,[]),t.Bb(1073742336,Jl.c,Jl.c,[]),t.Bb(1073742336,J.j,J.j,[]),t.Bb(1073742336,Ql.a,Ql.a,[]),t.Bb(1073742336,hl.j,hl.j,[]),t.Bb(1073742336,ml.A,ml.A,[]),t.Bb(1073742336,ml.q,ml.q,[]),t.Bb(1073742336,ql.p,ql.p,[]),t.Bb(1073742336,Gl.m,Gl.m,[]),t.Bb(1073742336,vl.e,vl.e,[]),t.Bb(1073742336,Vl.a,Vl.a,[]),t.Bb(1073742336,Hl.a,Hl.a,[]),t.Bb(1073742336,ml.p,ml.p,[]),t.Bb(1073742336,Ul.a,Ul.a,[]),t.Bb(1073742336,Rl.c,Rl.c,[]),t.Bb(1073742336,fl.e,fl.e,[]),t.Bb(1073742336,yl.d,yl.d,[]),t.Bb(1073742336,Bl.e,Bl.e,[]),t.Bb(1073742336,Tl.a,Tl.a,[]),t.Bb(1073742336,Kl.d,Kl.d,[]),t.Bb(1073742336,Yl.h,Yl.h,[]),t.Bb(1073742336,Xl.a,Xl.a,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,Q.i,function(){return[[{path:"",component:W}]]},[]),t.Bb(256,ml.g,ml.k,[]),t.Bb(256,rl.z,"never",[]),t.Bb(256,Il.a,{apiKey:"AIzaSyAqiHOgtttCiHMRunb67vOkcSoa5y9kQ14&libraries=visualization"},[])])})}}]);