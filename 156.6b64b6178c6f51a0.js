"use strict";(self.webpackChunkbookmark_products=self.webpackChunkbookmark_products||[]).push([[156],{156:(_,u,l)=>{l.r(u),l.d(u,{ErrorModule:()=>f});var d=l(9808),n=l(4912),g=l(3138),i=l(1223);const p=[{path:"",component:g.e,children:[{path:"not-found",component:(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=i.Xpm({type:a,selectors:[["notfound-page"]],decls:6,vars:0,consts:[[1,"container"],[1,"fas","fa-times-circle"],["routerLink","/"]],template:function(r,t){1&r&&(i.TgZ(0,"div",0),i.TgZ(1,"h1"),i._UZ(2,"i",1),i._uU(3," P\xe1gina n\xe3o encontrada! "),i.qZA(),i.TgZ(4,"a",2),i._uU(5,"Voltar para a Home"),i.qZA(),i.qZA())},directives:[n.yS],styles:["h1[_ngcontent-%COMP%]{text-align:center}a[_ngcontent-%COMP%]{text-align:center;display:block}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:space-between;justify-content:space-evenly;height:300px}"]}),a})()}]}];let m=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[n.Bz.forChild(p)],n.Bz]}),a})(),f=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[d.ez,m]]}),a})()},3138:(_,u,l)=>{l.d(u,{e:()=>a});var d=l(9808),n=l(1223),g=l(4912),i=l(2382);const h=function(o,r){return{disabled:o,readonly:r}};function p(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"span",3),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return c.readonly||c.disabled?null:c.clickLeftIcon.emit()}),n.qZA()}if(2&o){const t=n.oxw();n.Q6J("innerHTML",t.leftIcon,n.oJD)("ngClass",n.WLB(2,h,t.disabled,t.readonly))}}function m(o,r){if(1&o){const t=n.EpF();n.TgZ(0,"span",4),n.NdJ("click",function(){n.CHM(t);const c=n.oxw();return c.readonly||c.disabled?null:c.clickRightIcon.emit()}),n.qZA()}if(2&o){const t=n.oxw();n.Q6J("innerHTML",t.rightIcon,n.oJD)("ngClass",n.WLB(2,h,t.disabled,t.readonly))}}let f=(()=>{class o{constructor(){this.type="text",this.leftIcon="",this.readonly=!1,this.disabled=!1,this.rightIcon="",this.hasTimeout=!1,this.valueChange=new n.vpe,this.sharedWhenChange=new n.vpe,this.sharedKeyPress=new n.vpe,this.clickLeftIcon=new n.vpe,this.clickRightIcon=new n.vpe,this.timeStamp=`random-id-${(1+Date.now()+Math.random()).toString().replace(".","")}`,this.TIMEOUT_INPUT=800}change(t){"number"===this.type&&(t=parseFloat(t)),this.hasTimeout?(this.value=t,this.timeoutInput=clearTimeout(this.timeoutInput),this.timeoutInput=setTimeout(()=>{this.valueChange.emit(t),this.sharedWhenChange.emit()},this.TIMEOUT_INPUT)):(this.value=t,this.valueChange.emit(t),this.sharedWhenChange.emit())}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["input-component"]],inputs:{nameAttr:"nameAttr",idAttr:"idAttr",value:"value",type:"type",placeholder:"placeholder",leftIcon:"leftIcon",readonly:"readonly",disabled:"disabled",rightIcon:"rightIcon",hasTimeout:"hasTimeout"},outputs:{valueChange:"valueChange",sharedWhenChange:"sharedWhenChange",sharedKeyPress:"sharedKeyPress",clickLeftIcon:"clickLeftIcon",clickRightIcon:"clickRightIcon"},decls:3,vars:10,consts:[["class","icon left-icon",3,"innerHTML","ngClass","click",4,"ngIf"],[3,"name","id","placeholder","value","type","ngModel","disabled","readonly","ngModelChange","keydown"],["class","icon right-icon",3,"innerHTML","ngClass","click",4,"ngIf"],[1,"icon","left-icon",3,"innerHTML","ngClass","click"],[1,"icon","right-icon",3,"innerHTML","ngClass","click"]],template:function(t,e){1&t&&(n.YNc(0,p,1,5,"span",0),n.TgZ(1,"input",1),n.NdJ("ngModelChange",function(s){return e.change(s)})("keydown",function(s){return e.sharedKeyPress.emit(s)}),n.qZA(),n.YNc(2,m,1,5,"span",2)),2&t&&(n.Q6J("ngIf",e.leftIcon),n.xp6(1),n.Q6J("name",e.nameAttr||e.timeStamp)("id",e.nameAttr||e.timeStamp)("placeholder",e.placeholder)("value",e.value)("type",e.type||"text")("ngModel",e.value)("disabled",e.disabled)("readonly",e.readonly),n.xp6(1),n.Q6J("ngIf",e.rightIcon))},directives:[d.O5,i.Fj,i.JJ,i.On,d.mk],styles:["[_nghost-%COMP%]{display:flex;align-items:center;background-color:#fff;border:1px solid var(--gray);width:100%;border-radius:5px;overflow:hidden}input[_ngcontent-%COMP%]{background-color:transparent;padding:.75rem 1rem;width:100%;border:none}input[_ngcontent-%COMP%]:focus{outline:var(--purple)}input[_ngcontent-%COMP%]:disabled{background-color:var(--gray);color:#fff;cursor:not-allowed}input[_ngcontent-%COMP%]:readonly{background-color:var(--silver)}.icon[_ngcontent-%COMP%]{color:var(--black);font-size:1rem;height:40px;display:flex;align-items:center;justify-content:center}.icon.left-icon[_ngcontent-%COMP%]{padding:0 0 0 1rem}.icon.right-icon[_ngcontent-%COMP%]{padding:0 1rem 0 0}.icon.disabled[_ngcontent-%COMP%]{background-color:var(--gray);color:#fff;cursor:not-allowed}.icon.readonly[_ngcontent-%COMP%]{background-color:var(--silver)}"]}),o})(),a=(()=>{class o{constructor(t){this.platformId=t,this.searchText="",this.canSearch=!1,this.isServer=(0,d.PM)(this.platformId)}activate(t){setTimeout(()=>{var e;(null===(e=null==t?void 0:t.products)||void 0===e?void 0:e.length)?(this.component=t,this.canSearch=!0):(this.canSearch=!1,this.searchText="")},1e3)}clear(){var t,e;(null===(t=this.searchText)||void 0===t?void 0:t.length)&&(this.searchText="",null===(e=this.component)||void 0===e||e.search(this.searchText))}onEnter(t){var e;13===t.keyCode&&(null===(e=this.component)||void 0===e||e.search(this.searchText))}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(n.Lbi))},o.\u0275cmp=n.Xpm({type:o,selectors:[["default-layout"]],decls:34,vars:5,consts:[[1,"container"],[1,"brand"],["routerLink","/"],["routerLink","/soon"],[1,"fas","fa-map-marker-alt"],[1,"fas","fa-phone-alt"],["routerLink","/user/wishlist"],[1,"fas","fa-heart"],[1,"wrapper-search"],["rightIcon","<i class='fas fa-arrow-right cursor-pointer' title='Buscar'></i>","nameAttr","search-input","idAttr","search-input","placeholder","Buscar",3,"leftIcon","value","disabled","readonly","hasTimeout","valueChange","sharedKeyPress","clickRightIcon","clickLeftIcon","sharedWhenChange"],[3,"activate"],["href","https://github.com/vinimarcili","target","_blank"],[1,"fab","fa-github"]],template:function(t,e){1&t&&(n.TgZ(0,"header"),n.TgZ(1,"div",0),n.TgZ(2,"div",1),n.TgZ(3,"a",2),n.TgZ(4,"h2"),n._uU(5,"MagaNets"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(6,"nav"),n.TgZ(7,"ul"),n.TgZ(8,"li"),n.TgZ(9,"a",3),n._UZ(10,"i",4),n.TgZ(11,"span"),n._uU(12,"Cidade: S\xe3o Paulo"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"li"),n.TgZ(14,"a",3),n._UZ(15,"i",5),n.TgZ(16,"span"),n._uU(17,"Central de atendimento"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"li"),n.TgZ(19,"a",6),n._UZ(20,"i",7),n.TgZ(21,"span"),n._uU(22,"Lista de desejos"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(23,"div",8),n.TgZ(24,"input-component",9),n.NdJ("valueChange",function(s){return e.searchText=s})("sharedKeyPress",function(s){return e.onEnter(s)})("clickRightIcon",function(){return null==e.component?null:e.component.search(e.searchText)})("clickLeftIcon",function(){return e.clear()})("sharedWhenChange",function(){return null==e.component?null:e.component.search(e.searchText)}),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(25,"main"),n.TgZ(26,"router-outlet",10),n.NdJ("activate",function(s){return e.activate(s)}),n.qZA(),n.qZA(),n.TgZ(27,"footer"),n.TgZ(28,"div",0),n.TgZ(29,"p"),n._uU(30," Develop by "),n.TgZ(31,"a",11),n._uU(32,"Vin\xedcius Marcili "),n._UZ(33,"i",12),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(24),n.s9C("leftIcon",null!=e.searchText&&e.searchText.length?"<i class='fas fa-times cursor-pointer'></i>":"<i class='fas fa-search'></i>"),n.Q6J("value",e.searchText)("disabled",!e.canSearch)("readonly",e.isServer)("hasTimeout",!0))},directives:[g.yS,f,g.lC],styles:["[_nghost-%COMP%]{display:block;height:100%;width:100%;position:relative;background-color:var(--silver)}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}header[_ngcontent-%COMP%]{height:115px;display:flex;width:100%;background-color:var(--purple);color:#fff;position:sticky;top:0;justify-content:space-between;overflow:hidden;z-index:1}@media (max-width: 767px){header[_ngcontent-%COMP%]{height:auto}}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{align-items:flex-start;justify-content:space-between;display:flex;padding-top:1rem;padding-bottom:1rem}@media (max-width: 767px){header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column}}header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;width:165px;padding:0;font-size:1rem;font-weight:700;color:#fff;text-decoration:none;text-align:left}@media (max-width: 767px){header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{width:100%}}header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;text-align:left}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:calc(100% - 165px);display:flex;align-items:center;justify-content:center;flex-direction:column}@media (max-width: 767px){header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:100%}}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;padding:.5rem 0 0;margin:0;display:flex;align-items:center;justify-content:space-between;list-style:none;margin-bottom:1rem}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.5rem}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{text-decoration:underline}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{text-decoration:none}header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .wrapper-search[_ngcontent-%COMP%]{width:100%}main[_ngcontent-%COMP%]{min-height:calc(100vh - 146px)}@media (max-width: 767px){main[_ngcontent-%COMP%]{min-height:calc(100vh - 181px)}}@media (max-width: 500px){main[_ngcontent-%COMP%]{min-height:calc(100vh - 191px)}}footer[_ngcontent-%COMP%]{text-align:center;color:var(--purple);font-weight:700;font-size:.8rem;padding:.5rem 0}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--purple);text-decoration:underline}"]}),o})()}}]);