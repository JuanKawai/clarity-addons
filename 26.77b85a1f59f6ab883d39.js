(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Pk6i:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),b=u("zl1X"),s=u("pMnS"),d=u("8KBR"),i=u("+Xo0"),a=u("0G9f"),c=u("6/Z3"),o=u("QkwE"),r=u("vAyd"),p=u("mrSG"),h=u("N+3j"),q='\n<clr-quick-list class="clr-col-4"\n                [clrAllValues]="possibleOptions" \n                [(clrValues)]="selectedOptions"\n                [clrAddLabel]="ADD OPTIONS"\n                [clrBlankOption]="BLANK_OPTION" \n                [clrMandatory]="true">\n</clr-quick-list>\n',y=function(l){function n(){var n=l.call(this,"quick-list")||this;return n.htmlExample=q,n.BLANK_OPTION={id:"-BLANK-",label:"- Select an option -",value:null},n.selectedOptions=[],n.possibleOptions=[],n.options=["First option","Second option","Third Option","Fourth option","Fifth option"],n}return Object(p.c)(n,l),n.prototype.ngOnInit=function(){var l=this;this.selectedOptions=[this.BLANK_OPTION],this.possibleOptions=this.options.map(function(n){return l.map(n)})},n.prototype.map=function(l){return new function(){this.id=l.substr(0,2),this.label=l,this.value=l}},n.prototype.getAddLabel=function(){return"ADD OPTION"},n}(h.a),f=e.ob({encapsulation:2,styles:[],data:{}});function I(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,179,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,i.b,i.a)),e.pb(1,49152,null,0,a.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.qb(2,0,null,0,177,"article",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The quick list of Clarity Addons extends the default select component by an Angular Component which allows the developer use a multi selection list."])),(l()(),e.qb(5,0,null,null,167,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,1,"h3",[["id","usage"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Usage"])),(l()(),e.qb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Use the Quick List whenever you want to allow the user to select multiple option from a suggestion list. The user is able to select option by scrolling over the list. By clicking the Add button below the list he is able to make additional selection."])),(l()(),e.qb(10,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The component uses a predefined type "])),(l()(),e.qb(12,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ClrQuickListValue\u227aT\u227b "])),(l()(),e.Ib(-1,null,[" that encapsulates the real data (values), the developer should previously warp his list inside ClrQuickListValue. So the component uses generics "])),(l()(),e.qb(15,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["T"])),(l()(),e.Ib(-1,null,[" for the type of the contained values."])),(l()(),e.qb(18,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Currently this component is not usable inside forms."])),(l()(),e.qb(20,0,null,null,40,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.qb(21,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),e.qb(22,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["attribute"])),(l()(),e.qb(25,0,null,null,1,"th",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Values"])),(l()(),e.qb(27,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Effect"])),(l()(),e.qb(29,0,null,null,31,"tbody",[],null,null,null,null,null)),(l()(),e.qb(30,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.qb(31,0,null,null,4,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(32,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["label"])),(l()(),e.qb(34,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: string"])),(l()(),e.qb(36,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["string"])),(l()(),e.qb(38,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["the label that will be displayed for each option"])),(l()(),e.qb(40,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e.qb(41,0,null,null,4,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(42,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["value"])),(l()(),e.qb(44,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: string"])),(l()(),e.qb(46,0,null,null,2,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.qb(47,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["T"])),(l()(),e.qb(49,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["the value behind each option"])),(l()(),e.qb(51,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),e.qb(52,0,null,null,4,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(53,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["id"])),(l()(),e.qb(55,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: string"])),(l()(),e.qb(57,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["string"])),(l()(),e.qb(59,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["the ids over the list should be unique"])),(l()(),e.qb(61,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Summary of Options"])),(l()(),e.qb(63,0,null,null,109,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.qb(64,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.qb(65,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.qb(66,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Input/Output"])),(l()(),e.qb(68,0,null,null,1,"th",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Values"])),(l()(),e.qb(70,0,null,null,1,"th",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default"])),(l()(),e.qb(72,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Effect"])),(l()(),e.qb(74,0,null,null,98,"tbody",[],null,null,null,null,null)),(l()(),e.qb(75,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(76,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(77,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrBlankOption]"])),(l()(),e.qb(79,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: ClrQuickListValue"])),(l()(),e.qb(81,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: default"])),(l()(),e.qb(83,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ClrQuickListValue"])),(l()(),e.qb(85,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["default"])),(l()(),e.qb(87,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The object that should refer to the no-option selected"])),(l()(),e.qb(89,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(90,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(91,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrAllValues]"])),(l()(),e.qb(93,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: List of ClrQuickListValue"])),(l()(),e.qb(95,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: false"])),(l()(),e.qb(97,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["List of ClrQuickListValue"])),(l()(),e.qb(99,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["empty"])),(l()(),e.qb(101,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Contains all the options list"])),(l()(),e.qb(103,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(104,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(105,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrValues]"])),(l()(),e.qb(107,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: List of ClrQuickListValue"])),(l()(),e.qb(109,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: undefined"])),(l()(),e.qb(111,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["List of ClrQuickListValue"])),(l()(),e.qb(113,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["empty List"])),(l()(),e.qb(115,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The value of the preselected option"])),(l()(),e.qb(117,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(118,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(119,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrAddLabel]"])),(l()(),e.qb(121,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: string"])),(l()(),e.qb(123,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: ADD OPTION"])),(l()(),e.qb(125,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["string"])),(l()(),e.qb(127,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ADD OPTION"])),(l()(),e.qb(129,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Label for the add button"])),(l()(),e.qb(131,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(132,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(133,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["[clrMandatory]"])),(l()(),e.qb(135,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: boolean"])),(l()(),e.qb(137,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: false"])),(l()(),e.qb(139,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["boolean"])),(l()(),e.qb(141,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["false"])),(l()(),e.qb(143,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Decides whether at least one option should be selected"])),(l()(),e.qb(145,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(146,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(147,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["(clrValuesChanged)"])),(l()(),e.qb(149,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: String"])),(l()(),e.qb(151,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: undefined"])),(l()(),e.qb(153,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["List of ClrQuickListValue"])),(l()(),e.qb(155,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["undefined"])),(l()(),e.qb(157,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Event which returns the user's selected options whenever the list changes"])),(l()(),e.qb(159,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.qb(160,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.qb(161,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["(clrEmptyOptionAdded)"])),(l()(),e.qb(163,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Type: void"])),(l()(),e.qb(165,0,null,null,1,"div",[["class","hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Default: undefined"])),(l()(),e.qb(167,0,null,null,1,"td",[["class","left hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["void"])),(l()(),e.qb(169,0,null,null,1,"td",[["class","hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["undefined"])),(l()(),e.qb(171,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Event which triggers on the add button clicked"])),(l()(),e.qb(173,0,null,null,6,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.qb(174,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Code & Examples"])),(l()(),e.qb(176,0,null,null,1,"clr-quick-list",[["class","clr-col-4"]],[[2,"quick-list",null]],[[null,"clrValuesChange"]],function(l,n,u){var e=!0;return"clrValuesChange"===n&&(e=!1!==(l.component.selectedOptions=u)&&e),e},d.P,d.s)),e.pb(177,49152,null,0,c.L,[],{blankOption:[0,"blankOption"],allValues:[1,"allValues"],values:[2,"values"],addLabel:[3,"addLabel"],mandatory:[4,"mandatory"]},null),(l()(),e.qb(178,0,null,null,1,"clr-code-snippet",[],null,null,null,o.b,o.a)),e.pb(179,4243456,null,0,r.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,177,0,u.BLANK_OPTION,u.possibleOptions,u.selectedOptions,u.getAddLabel(),!0),l(n,179,0,u.htmlExample)},function(l,n){l(n,0,0,!0),l(n,176,0,!0)})}function m(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-quick-list",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,I,f)),e.pb(1,114688,null,0,y,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,!0,!0)})}var v=e.mb("app-quick-list",y,m,{},{},[]),w=u("Ip0R"),L=u("gIcY"),O=u("xLE1"),g=u("XPsC"),x=u("ZYCi"),k=u("JsA7");u.d(n,"QuickListDemoModuleNgFactory",function(){return T});var T=e.nb(t,[],function(l){return e.xb([e.yb(512,e.j,e.db,[[8,[b.eb,b.a,b.b,b.d,b.e,b.f,b.g,b.h,b.c,b.ab,b.bb,b.cb,b.db,s.a,d.a,v]],[3,e.j],e.x]),e.yb(4608,w.r,w.q,[e.u,[2,w.H]]),e.yb(4608,L.C,L.C,[]),e.yb(4608,c.f,c.f,[]),e.yb(1073742336,w.c,w.c,[]),e.yb(1073742336,L.z,L.z,[]),e.yb(1073742336,L.j,L.j,[]),e.yb(1073742336,O.db,O.db,[]),e.yb(1073742336,O.zc,O.zc,[]),e.yb(1073742336,O.de,O.de,[]),e.yb(1073742336,O.V,O.V,[]),e.yb(1073742336,O.d,O.d,[]),e.yb(1073742336,O.X,O.X,[]),e.yb(1073742336,O.r,O.r,[]),e.yb(1073742336,O.pe,O.pe,[]),e.yb(1073742336,O.p,O.p,[]),e.yb(1073742336,O.Bc,O.Bc,[]),e.yb(1073742336,O.L,O.L,[]),e.yb(1073742336,O.ib,O.ib,[]),e.yb(1073742336,O.yb,O.yb,[]),e.yb(1073742336,O.Cb,O.Cb,[]),e.yb(1073742336,O.Gb,O.Gb,[]),e.yb(1073742336,O.Yb,O.Yb,[]),e.yb(1073742336,O.ab,O.ab,[]),e.yb(1073742336,O.ob,O.ob,[]),e.yb(1073742336,O.Lc,O.Lc,[]),e.yb(1073742336,O.P,O.P,[]),e.yb(1073742336,O.Ed,O.Ed,[]),e.yb(1073742336,O.E,O.E,[]),e.yb(1073742336,O.Qb,O.Qb,[]),e.yb(1073742336,O.ec,O.ec,[]),e.yb(1073742336,O.v,O.v,[]),e.yb(1073742336,O.sb,O.sb,[]),e.yb(1073742336,O.nb,O.nb,[]),e.yb(1073742336,O.i,O.i,[]),e.yb(1073742336,O.j,O.j,[]),e.yb(1073742336,O.qb,O.qb,[]),e.yb(1073742336,O.vb,O.vb,[]),e.yb(1073742336,O.Ld,O.Ld,[]),e.yb(1073742336,O.Vb,O.Vb,[]),e.yb(1073742336,O.jc,O.jc,[]),e.yb(1073742336,O.lb,O.lb,[]),e.yb(1073742336,O.Jb,O.Jb,[]),e.yb(1073742336,O.bc,O.bc,[]),e.yb(1073742336,O.zb,O.zb,[]),e.yb(1073742336,O.nc,O.nc,[]),e.yb(1073742336,O.a,O.a,[]),e.yb(1073742336,g.a,g.a,[]),e.yb(1073742336,x.o,x.o,[[2,x.u],[2,x.l]]),e.yb(1073742336,k.a,k.a,[]),e.yb(1073742336,c.X,c.X,[]),e.yb(1073742336,c.I,c.I,[]),e.yb(1073742336,c.s,c.s,[]),e.yb(1073742336,c.G,c.G,[]),e.yb(1073742336,c.h,c.h,[]),e.yb(1073742336,c.e,c.e,[]),e.yb(1073742336,c.w,c.w,[]),e.yb(1073742336,c.o,c.o,[]),e.yb(1073742336,c.y,c.y,[]),e.yb(1073742336,c.u,c.u,[]),e.yb(1073742336,c.c,c.c,[]),e.yb(1073742336,c.B,c.B,[]),e.yb(1073742336,c.O,c.O,[]),e.yb(1073742336,c.T,c.T,[]),e.yb(1073742336,c.K,c.K,[]),e.yb(1073742336,c.j,c.j,[]),e.yb(1073742336,c.q,c.q,[]),e.yb(1073742336,c.M,c.M,[]),e.yb(1073742336,c.a,c.a,[]),e.yb(1073742336,t,t,[]),e.yb(1024,x.j,function(){return[[{path:"",component:y}]]},[])])})}}]);