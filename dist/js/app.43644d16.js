(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]);var o={strict:!0,state:{testData:"Test"},mutations:{changeTestData:function(t,e){t.testData=e}},getters:{capitalizedTestData:function(t){return t.testData.toUpperCase()}}},s=new a["a"].Store(o),i=n("f309");r["a"].use(i["a"]);var c=new i["a"]({}),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Latest Release")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-main",[n("HelloWorld")],1)],1)},l=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{on:{click:function(e){return t.buttonClickedTest(10,10,10)}}},[t._v("Create Block Update Test "+t._s(t.testData))])],1)],1)],1)},p=[],d=n("5530"),h=n("1da1"),v=(n("96cf"),window.WSM),m=window.FormIt,y={name:"HelloWorld",methods:{buttonClickedTest:function(t,e,n){console.log("button was clicked"),this.createBlock(t,e,n)},createBlock:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,n,r){var a,o,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.Geom.Point3d(0,0,0);case 2:return a=t.sent,t.next=5,v.Geom.Point3d(e,n,r);case 5:return o=t.sent,t.next=8,m.GroupEdit.GetEditingHistoryID();case 8:return s=t.sent,console.log(s,a,o),t.next=12,v.APICreateBlock(s,a,o);case 12:i=t.sent,console.log(i);case 14:case"end":return t.stop()}}),t)})));function e(e,n,r){return t.apply(this,arguments)}return e}()},computed:Object(d["a"])({},Object(a["b"])(["testData"])),data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},g=y,b=n("2877"),w=n("6544"),x=n.n(w),j=n("8336"),k=n("62ad"),O=n("a523"),_=n("0fd9"),V=Object(b["a"])(g,f,p,!1,null,null,null),C=V.exports;x()(V,{VBtn:j["a"],VCol:k["a"],VContainer:O["a"],VRow:_["a"]});var P={name:"App",components:{HelloWorld:C},data:function(){return{}}},T=P,D=n("7496"),S=n("40dc"),B=n("132d"),M=n("adda"),A=n("f6c4"),E=n("2fa4"),I=Object(b["a"])(T,u,l,!1,null,null,null),G=I.exports;x()(I,{VApp:D["a"],VAppBar:S["a"],VBtn:j["a"],VIcon:B["a"],VImg:M["a"],VMain:A["a"],VSpacer:E["a"]}),r["a"].config.productionTip=!1,new r["a"]({vuetify:c,store:s,render:function(t){return t(G)}}).$mount("#app")}});