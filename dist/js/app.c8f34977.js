(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("2f62");n["a"].use(r["a"]);var o={strict:!0,state:{testData:"Test"},mutations:{changeTestData:function(t,e){t.testData=e}},getters:{capitalizedTestData:function(t){return t.testData.toUpperCase()}}},i=new r["a"].Store(o),s=a("f309");n["a"].use(s["a"]);var l=new s["a"]({}),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"grey darken-2",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("h2",{staticClass:"roboto-mono"},[t._v("Hello Vue + FormIt")])]),a("v-spacer")],1),a("v-main",[a("HelloVue")],1)],1)},u=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"px-6"},[a("v-row",{staticClass:"my-0 py-0"},[a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12"}},[a("h3",{staticClass:"my-1 py-0"},[t._v("What is this plugin?")])])],1),a("v-row",{staticClass:"my-0 py-0"},[a("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12"}},[a("p",[t._v(" This plugin is a template. It is a proof of concept demonstration how Vue / Vuex / Vuetify / d3 can be combined and used inside of a FormIt plugin. This template recreates the basic Hello World cube creation plugin from the Plugin Playground in FormIt. ")])])],1),a("v-row",{staticClass:"my-0 py-0"},[a("v-col",{staticClass:"my-1 py-0",attrs:{cols:"12"}},[a("p",[t._v(" The advantage to using Vue or other frontend frameworks in developing these plugins is to significantly reduce the time required to style elements and link interface elements to data. The rapid implementation of material design UI elements provided by Vuetify is accompanied by the benefits of the data model provided by Vuex which allows for building multiple graphics and pages that can interact with each other's underlying data. The benifits of d3 include its amazing ability to create virtually any graphic representation of data, and its stylish / engaging aesthetics. ")])])],1),a("v-row",{staticClass:"my-0 py-0"},[a("v-col",{staticClass:"my-1 py-0",attrs:{cols:"12"}},[a("p",[t._v(" Feel free to fork this repo and use it as a basis for building your own plugins! ")])])],1),a("v-row",{staticClass:"my-0 py-0"},[a("v-col",{staticClass:"my-1 py-0",attrs:{cols:"12"}},[a("h3",[t._v("Creating a Cube")])])],1),a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("v-slider",{attrs:{max:"100",min:"1",label:"Width",color:"#035C67","track-color":"grey","thumb-label":"always"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-text-field",{staticClass:"mt-n7 pt-0",staticStyle:{width:"60px"},attrs:{filled:"",shaped:"",dense:"",type:"number"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})]},proxy:!0}]),model:{value:t.width,callback:function(e){t.width=e},expression:"width"}})],1)],1),a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("v-slider",{attrs:{max:"100",min:"1",label:"Length",color:"#0095CB","track-color":"grey","thumb-label":"always"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-text-field",{staticClass:"mt-n7 pt-0",staticStyle:{width:"60px"},attrs:{filled:"",dense:"",shaped:"",type:"number"},model:{value:t.length,callback:function(e){t.length=e},expression:"length"}})]},proxy:!0}]),model:{value:t.length,callback:function(e){t.length=e},expression:"length"}})],1)],1),a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("v-slider",{attrs:{max:"100",min:"1",label:"Height",color:"#A80051","track-color":"grey","thumb-label":"always"},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-text-field",{staticClass:"mt-n7 pt-0",staticStyle:{width:"60px"},attrs:{filled:"",shaped:"",dense:"",type:"number"},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}})]},proxy:!0}]),model:{value:t.height,callback:function(e){t.height=e},expression:"height"}})],1)],1),a("v-row",{staticClass:"text-right"},[a("v-col",{attrs:{cols:"12"}},[a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({directives:[{name:"blur",rawName:"v-blur"}],attrs:{dark:"",fab:"",color:"#988600"},on:{click:function(e){return t.buttonClickedTest(t.width,t.length,t.height)}}},n),[a("v-icon",{attrs:{large:""}},[t._v("mdi-cube-outline")])],1)]}}])},[a("span",[t._v("Add Cube to Model")])])],1)],1)],1)},d=[],f=a("5530"),h=a("1da1"),v=(a("96cf"),window.WSM),m=window.FormIt,y={name:"HelloWorld",methods:{buttonClickedTest:function(t,e,a){console.log("button was clicked"),this.createBlock(t,e,a)},createBlock:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,a,n){var r,o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.Geom.Point3d(e/-2,a/-2,0);case 2:return r=t.sent,t.next=5,v.Geom.Point3d(e/2,a/2,n);case 5:return o=t.sent,t.next=8,m.GroupEdit.GetEditingHistoryID();case 8:return i=t.sent,console.log(i,r,o),t.next=12,v.APICreateBlock(i,r,o);case 12:s=t.sent,console.log(s);case 14:case"end":return t.stop()}}),t)})));function e(e,a,n){return t.apply(this,arguments)}return e}()},computed:Object(f["a"])({},Object(r["b"])(["testData"])),data:function(){return{length:42,width:63,height:29}}},b=y,g=a("2877"),w=a("6544"),x=a.n(w),C=a("8336"),k=a("62ad"),_=a("a523"),V=a("132d"),O=a("0fd9"),S=a("ba0d"),T=a("8654"),j=a("3a2f"),P=Object(g["a"])(b,p,d,!1,null,null,null),I=P.exports;x()(P,{VBtn:C["a"],VCol:k["a"],VContainer:_["a"],VIcon:V["a"],VRow:O["a"],VSlider:S["a"],VTextField:T["a"],VTooltip:j["a"]});var D={name:"App",components:{HelloVue:I},data:function(){return{}}},H=D,M=(a("034f"),a("7496")),A=a("40dc"),B=a("f6c4"),F=a("2fa4"),W=Object(g["a"])(H,c,u,!1,null,null,null),E=W.exports;x()(W,{VApp:M["a"],VAppBar:A["a"],VMain:B["a"],VSpacer:F["a"]}),n["a"].config.productionTip=!1,n["a"].directive("blur",{inserted:function(t){t.onfocus=function(t){return t.target.blur()}}}),new n["a"]({vuetify:l,store:i,render:function(t){return t(E)}}).$mount("#app")},"85ec":function(t,e,a){}});