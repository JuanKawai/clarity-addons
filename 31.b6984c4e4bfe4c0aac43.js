(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{FqkS:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),b=function(){return function(){}}(),e=u("zl1X"),o=u("pMnS"),c=u("8KBR"),i=u("xLE1"),a=u("Ip0R"),r=u("6/Z3"),y=u("mN7P"),p=u("2HPr"),f=function(){function l(l){this.router=l,this.withCommandBar=!1,this.withContentPanel=!1}return l.prototype.ngOnInit=function(){this.withCommandBar=this.collectRouteData("withCommand")[0],this.withContentPanel=this.collectRouteData("withPanel")[0],this.id=this.collectRouteData("id")[0]},l.prototype.toggleLeftPanel=function(){this.leftContentPanel.toggle()},l.prototype.toggleRightPanel=function(){this.rightContentPanel.toggle()},l.prototype.collectRouteData=function(l){for(var n=this.router.routerState.snapshot.root,u=[];n;)n.data&&n.data[l]&&u.push(n.data[l]),n=n.firstChild;return u},l}(),g=u("ZYCi"),d=t.ob({encapsulation:2,styles:[],data:{}});function h(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Base Pagelayout"]))],null,null)}function s(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Command bar"]))],null,null)}function m(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Content Panel"]))],null,null)}function C(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,3,"clr-button",[],null,null,null,e.G,e.j)),t.Fb(6144,null,i.tc,null,[i.g]),t.pb(2,4243456,[[3,4]],0,i.g,[[3,i.Jd]],null,null),(l()(),t.Ib(-1,0,["Command1"]))],null,null)}function I(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,3,"clr-button",[],null,null,null,e.G,e.j)),t.Fb(6144,null,i.tc,null,[i.g]),t.pb(2,4243456,[[3,4]],0,i.g,[[3,i.Jd]],null,null),(l()(),t.Ib(-1,0,["Command2"]))],null,null)}function q(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,3,"clr-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleRightPanel()&&t),t},e.G,e.j)),t.Fb(6144,null,i.tc,null,[i.g]),t.pb(2,4243456,[[3,4]],0,i.g,[[3,i.Jd]],null,{_click:"click"}),(l()(),t.Ib(-1,0,["Show/Hide Right"]))],null,null)}function P(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,3,"clr-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toggleLeftPanel()&&t),t},e.G,e.j)),t.Fb(6144,null,i.tc,null,[i.g]),t.pb(2,4243456,[[3,4]],0,i.g,[[3,i.Jd]],{inMenu:[0,"inMenu"]},{_click:"click"}),(l()(),t.Ib(-1,0,["Show/Hide Left "]))],function(l,n){l(n,2,0,!0)},null)}function w(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,15,"clr-button-group",[["class","command-bar"]],[[2,"btn-group",null]],[["document","click"]],function(l,n,u){var b=!0;return"document:click"===n&&(b=!1!==t.Ab(l,2).onMouseClick(u.target)&&b),b},e.F,e.k)),t.Fb(512,null,i.Jd,i.Jd,[]),t.pb(2,1097728,null,1,i.h,[i.Jd,t.k,i.s],{menuPosition:[0,"menuPosition"]},null),t.Gb(603979776,3,{buttons:1}),(l()(),t.ib(16777216,null,null,1,null,C)),t.pb(5,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,I)),t.pb(7,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,q)),t.pb(9,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,P)),t.pb(11,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(12,0,null,null,3,"clr-button",[],null,null,null,e.G,e.j)),t.Fb(6144,null,i.tc,null,[i.g]),t.pb(14,4243456,[[3,4]],0,i.g,[[3,i.Jd]],{inMenu:[0,"inMenu"]},null),(l()(),t.Ib(-1,0,["Command3"]))],function(l,n){var u=n.component;l(n,2,0,"bottom-right"),l(n,5,0,!u.withContentPanel),l(n,7,0,!u.withContentPanel),l(n,9,0,u.withContentPanel),l(n,11,0,u.withContentPanel),l(n,14,0,!0)},function(l,n){l(n,0,0,!0)})}function k(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ib(1,null,[" for submenu ",""]))],null,function(l,n){l(n,1,0,n.component.id)})}function K(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,4,"div",[["class","content-container"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,3,"div",[["class","content-area"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,[" This is the page content"])),(l()(),t.ib(16777216,null,null,1,null,k)),t.pb(4,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,4,0,n.component.id)},null)}function j(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,15,"clr-content-panel-container",[],[[2,"content-container",null],[2,"content-panel-container",null]],null,null,c.E,c.g)),t.pb(1,49152,null,0,r.l,[],null,null),(l()(),t.qb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Content Area"])),(l()(),t.qb(4,0,null,2,5,"clr-content-panel",[["clrDirection","left"]],[[2,"content-panel",null],[2,"left",null]],null,null,c.F,c.f)),t.pb(5,114688,[[1,4],["leftContentPanel",4]],0,r.k,[],{direction:[0,"direction"]},null),(l()(),t.qb(6,0,null,0,1,null,null,null,null,null,null,null)),(l()(),t.Ib(-1,null,["Left Content Panel"])),(l()(),t.qb(8,0,null,1,1,null,null,null,null,null,null,null)),(l()(),t.Ib(-1,null,["Content"])),(l()(),t.qb(10,0,null,2,5,"clr-content-panel",[],[[2,"content-panel",null],[2,"left",null]],null,null,c.F,c.f)),t.pb(11,114688,[[2,4],["rightContentPanel",4]],0,r.k,[],null,null),(l()(),t.qb(12,0,null,0,1,null,null,null,null,null,null,null)),(l()(),t.Ib(-1,null,["Right Content Panel"])),(l()(),t.qb(14,0,null,1,1,null,null,null,null,null,null,null)),(l()(),t.Ib(-1,null,["Content"]))],function(l,n){l(n,5,0,"left"),l(n,11,0)},function(l,n){l(n,0,0,!0,!0),l(n,4,0,!0,"left"===t.Ab(n,5).direction),l(n,10,0,!0,"left"===t.Ab(n,11).direction)})}function v(l){return t.Kb(0,[t.Gb(671088640,1,{leftContentPanel:0}),t.Gb(671088640,2,{rightContentPanel:0}),(l()(),t.qb(2,0,null,null,20,"clr-main-container",[],[[2,"main-container",null]],null,null,null,null)),t.pb(3,212992,null,0,i.pb,[t.k,i.Kd],null,null),t.pb(4,8404992,null,0,i.uc,[],null,null),(l()(),t.qb(5,0,null,null,1,"clr-demo-menu",[],null,null,null,y.b,y.a)),t.pb(6,49152,null,0,p.a,[a.e,t.B],null,null),(l()(),t.qb(7,0,null,null,11,"div",[["class","content-header"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"clr-back-button",[],null,null,null,c.y,c.b)),t.pb(9,49152,null,0,r.b,[a.l],null,null),(l()(),t.qb(10,0,null,null,6,"h2",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,h)),t.pb(12,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,s)),t.pb(14,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,m)),t.pb(16,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,w)),t.pb(18,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,K)),t.pb(20,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,j)),t.pb(22,16384,null,0,a.p,[t.Q,t.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0),l(n,12,0,!u.withCommandBar&&!u.withContentPanel),l(n,14,0,u.withCommandBar&&!u.withContentPanel),l(n,16,0,u.withCommandBar&&u.withContentPanel),l(n,18,0,u.withCommandBar),l(n,20,0,!u.withContentPanel),l(n,22,0,u.withContentPanel)},function(l,n){l(n,2,0,!0)})}function B(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"clr-basepage-layout-demo",[],null,null,null,v,d)),t.pb(1,114688,null,0,f,[g.l],null,null)],function(l,n){l(n,1,0)},null)}var G=t.mb("clr-basepage-layout-demo",f,B,{},{},[]),N=u("gIcY"),Q=u("fTK2");u.d(n,"BasepageLayoutDemoModuleNgFactory",function(){return J});var J=t.nb(b,[],function(l){return t.xb([t.yb(512,t.j,t.db,[[8,[e.eb,e.a,e.b,e.d,e.e,e.f,e.g,e.h,e.c,e.ab,e.bb,e.cb,e.db,o.a,c.a,G]],[3,t.j],t.x]),t.yb(4608,a.r,a.q,[t.u,[2,a.H]]),t.yb(4608,N.C,N.C,[]),t.yb(4608,r.f,r.f,[]),t.yb(1073742336,a.c,a.c,[]),t.yb(1073742336,i.db,i.db,[]),t.yb(1073742336,i.zc,i.zc,[]),t.yb(1073742336,i.de,i.de,[]),t.yb(1073742336,i.V,i.V,[]),t.yb(1073742336,i.d,i.d,[]),t.yb(1073742336,i.X,i.X,[]),t.yb(1073742336,i.r,i.r,[]),t.yb(1073742336,i.pe,i.pe,[]),t.yb(1073742336,i.p,i.p,[]),t.yb(1073742336,i.Bc,i.Bc,[]),t.yb(1073742336,i.L,i.L,[]),t.yb(1073742336,N.z,N.z,[]),t.yb(1073742336,N.j,N.j,[]),t.yb(1073742336,i.ib,i.ib,[]),t.yb(1073742336,i.yb,i.yb,[]),t.yb(1073742336,i.Cb,i.Cb,[]),t.yb(1073742336,i.Gb,i.Gb,[]),t.yb(1073742336,i.Yb,i.Yb,[]),t.yb(1073742336,i.ab,i.ab,[]),t.yb(1073742336,i.ob,i.ob,[]),t.yb(1073742336,i.Lc,i.Lc,[]),t.yb(1073742336,i.P,i.P,[]),t.yb(1073742336,i.Ed,i.Ed,[]),t.yb(1073742336,i.E,i.E,[]),t.yb(1073742336,i.Qb,i.Qb,[]),t.yb(1073742336,i.ec,i.ec,[]),t.yb(1073742336,i.v,i.v,[]),t.yb(1073742336,i.sb,i.sb,[]),t.yb(1073742336,i.nb,i.nb,[]),t.yb(1073742336,i.i,i.i,[]),t.yb(1073742336,i.j,i.j,[]),t.yb(1073742336,i.qb,i.qb,[]),t.yb(1073742336,i.vb,i.vb,[]),t.yb(1073742336,i.Ld,i.Ld,[]),t.yb(1073742336,i.Vb,i.Vb,[]),t.yb(1073742336,i.jc,i.jc,[]),t.yb(1073742336,i.lb,i.lb,[]),t.yb(1073742336,i.Jb,i.Jb,[]),t.yb(1073742336,i.bc,i.bc,[]),t.yb(1073742336,i.zb,i.zb,[]),t.yb(1073742336,i.nc,i.nc,[]),t.yb(1073742336,i.a,i.a,[]),t.yb(1073742336,g.o,g.o,[[2,g.u],[2,g.l]]),t.yb(1073742336,r.X,r.X,[]),t.yb(1073742336,r.I,r.I,[]),t.yb(1073742336,r.s,r.s,[]),t.yb(1073742336,r.G,r.G,[]),t.yb(1073742336,r.h,r.h,[]),t.yb(1073742336,r.e,r.e,[]),t.yb(1073742336,r.w,r.w,[]),t.yb(1073742336,r.o,r.o,[]),t.yb(1073742336,r.y,r.y,[]),t.yb(1073742336,r.u,r.u,[]),t.yb(1073742336,r.c,r.c,[]),t.yb(1073742336,r.B,r.B,[]),t.yb(1073742336,r.O,r.O,[]),t.yb(1073742336,r.T,r.T,[]),t.yb(1073742336,r.K,r.K,[]),t.yb(1073742336,r.j,r.j,[]),t.yb(1073742336,r.q,r.q,[]),t.yb(1073742336,r.M,r.M,[]),t.yb(1073742336,r.a,r.a,[]),t.yb(1073742336,Q.a,Q.a,[]),t.yb(1073742336,b,b,[]),t.yb(1024,g.j,function(){return[[{path:"",component:f,outlet:"fullpage"}]]},[])])})}}]);