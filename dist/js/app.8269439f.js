(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)a=o[l],i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},s=[];function a(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d21f0f9":"2cb03663"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=i[t]=[e,r]});e.push(n[2]=r);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=a(t),s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}i[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17c0":function(t,e,n){},2668:function(t,e,n){},"3c51":function(t,e,n){"use strict";var r=n("a142"),i=n.n(r);i.a},"535f":function(t,e,n){"use strict";var r=n("864d"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",["calendar"===t.currentTab?n("Calendar",{attrs:{msg:"Welcome to Your Vue.js App"}}):t._e()],1),n("Footer",{staticClass:"v-footer",attrs:{"current-tab":t.currentTab},on:{click:t.switchTab}})],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"cal-header flex align-center"},[n("span",{staticClass:"flex-1"}),n("span",{staticClass:"current-date flex-2",domProps:{textContent:t._s(t.displayedDate)}}),n("span",{staticClass:"select-today flex-1 t-right pointer",on:{click:t.selectToday}},[t._v("今天")])]),n("div",{ref:"dateBoard",staticClass:"date-header"},[n("div",{staticClass:"weekDay-header flex justify-space-between"},t._l(t.allWeekDays,function(e,r){return n("span",{key:r,staticClass:"flex align-center justify-center"},[t._v(t._s(e))])}),0),t.foldState?n("div",{staticClass:"main-block small-board flex"},t._l(t.subList,function(e,r){return n("span",{key:r,class:"each-day flex align-center justify-center pointer\n                 "+(e.content===t.now.day&&t.currentMonth===t.now.month&&t.currentYear===t.now.year?"currentDay":"")+"\n                 "+(e.content===t.selectedInfo.day&&t.currentMonth===t.selectedInfo.month&&t.currentYear===t.selectedInfo.year?"selectedDay":""),on:{click:function(n){return t.selectDay(e.content)}}},[t._v(t._s(e.content)+"\n      ")])}),0):n("div",{staticClass:"main-block large-board flex flex-wrap"},t._l(t.dayList,function(e,r){return n("span",{key:r,class:"each-day flex align-center justify-center pointer\n                 "+(e.content===t.now.day&&t.currentMonth===t.now.month&&t.currentYear===t.now.year?"currentDay":"")+"\n                 "+(e.content===t.selectedInfo.day&&t.currentMonth===t.selectedInfo.month&&t.currentYear===t.selectedInfo.year?"selectedDay":""),on:{click:function(n){return t.selectDay(e.content)}}},[t._v(t._s(e.content)+"\n      ")])}),0),n("div",{staticClass:"fold-btn relative flex justify-center"},[n("div",{class:"arrow pointer "+(t.foldState?"":"up"),on:{click:t.toggleBoard}},[n("span"),n("span")])]),n("div",{staticClass:"date-options flex justify-space-around"},t._l(t.tabOptions,function(e,r){return n("span",{key:r,class:"date-each-option pointer "+(e.sign===t.currentTab?"active":""),on:{click:function(n){t.currentTab=e.sign}}},[t._v(t._s(e.text))])}),0)]),n("div",{staticClass:"content"},t._l(t.reminder,function(t,e){return n("Reminder",{key:e,attrs:{"reminder-data":t}})}),1)])},o=[],c=(n("96cf"),n("3b8d")),u=(n("20d6"),function(t,e){return new Date(t,e-1,1).getDay()}),l=function(t,e){var n=[31,28,31,30,31,30,31,31,30,31,30,31];return(t%4===0&&t%100!==0||t%400===0)&&(n[1]=29),n[e-1]},h=function(t){return t-0<10?"0"+(t-0):t},f=function(t){var e=t?new Date(t):new Date,n=""+(e.getMonth()+1),r=""+e.getDate(),i=e.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[i,n,r].join("-")},d=n("d225"),p=n("b0b4"),y=function(){function t(e){Object(d["a"])(this,t),this.xDown=null,this.yDown=null,this.element="string"===typeof e?document.querySelector(e):e,this.element.addEventListener("touchstart",function(t){this.xDown=t.touches[0].clientX,this.yDown=t.touches[0].clientY}.bind(this),!1)}return Object(p["a"])(t,[{key:"onLeft",value:function(t){return this.onLeft=t,this}},{key:"onRight",value:function(t){return this.onRight=t,this}},{key:"onUp",value:function(t){return this.onUp=t,this}},{key:"onDown",value:function(t){return this.onDown=t,this}},{key:"handleTouchMove",value:function(t){if(this.xDown&&this.yDown){var e=t.touches[0].clientX,n=t.touches[0].clientY;this.xDiff=this.xDown-e,this.yDiff=this.yDown-n,Math.abs(this.xDiff)>Math.abs(this.yDiff)?this.xDiff>0?this.onLeft():this.onRight():this.yDiff>0?this.onUp():this.onDown(),this.xDown=null,this.yDown=null}}},{key:"run",value:function(){this.element.addEventListener("touchmove",function(t){this.handleTouchMove(t)}.bind(this),!1)}}]),t}(),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap flex justify-space-between"},[n("div",{},[n("h2",{staticClass:"name"},[t._v(t._s(t.reminderData.name))]),n("p",{staticClass:"detail"},[t._v(t._s(t.reminderData.detail))]),n("p",{class:"role "+(t.reminderData.role&&t.reminderData.role.code?"receiver":"middleman")},[t._v(t._s(t.reminderData.role&&t.reminderData.role.name))])]),n("div",{staticClass:"flex flex-column align-end justify-space-between"},[n("p",{staticClass:"time"},[t._v(t._s(t.reminderData.time))]),t._m(0)])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"more"},[n("i",{staticClass:"iconfont icon-more"})])}],b={props:["reminderData"]},g=b,w=(n("8afd"),n("2877")),D=Object(w["a"])(g,m,v,!1,null,"198ce032",null),x=D.exports,L={name:"Calendar",data:function(){return{allWeekDays:["日","一","二","三","四","五","六"],foldState:!0,dayList:[],currentDay:null,currentYear:null,currentMonth:null,subList:null,subListInfo:{subListIndex:null,startPosition:null},selectedInfo:{day:null,month:null,year:null},now:{year:null,month:null,day:null},tabOptions:[{text:"已设置提醒",sign:"reminder"},{text:"创建时间",sign:"createdTime"},{text:"最后发言时间",sign:"lastWord"}],currentTab:null,reminderData:{},timestamp:null}},computed:{displayedDate:function(){var t=this.selectedInfo.day?this.selectedInfo.day:this.currentDay;t=h(t);var e=h(this.currentYear),n=h(this.currentMonth);return"".concat(e,"-").concat(n,"-").concat(t)},reminder:function(){return this.reminderData[this.timestamp]?this.reminderData[this.timestamp].content:[]}},methods:{selectToday:function(){var t=this.now,e=t.day,n=t.year,r=t.month;this.currentDay=e,this.currentYear=n,this.currentMonth=r,this.selectedInfo={day:e,year:n,month:r},this.dayList=this.createDateList(this.currentYear,this.currentMonth),e=h(e),r=h(r),this.timestamp="".concat(n,"-").concat(r,"-").concat(e)},selectDay:function(t){this.selectedInfo.day=t,this.selectedInfo.month=this.currentMonth,this.selectedInfo.year=this.currentYear;var e=this.selectedInfo,n=e.day,r=e.month,i=e.year;n=h(n),r=h(r),this.timestamp="".concat(i,"-").concat(r,"-").concat(n)},createDateList:function(t,e){t="number"===typeof t?t:t-0,e="number"===typeof e?e:e-0;for(var n=u(t,e),r=[],i=0;i<n;i++)r.push({content:"",type:"pre"});for(var s=l(t,e),a=0;a<s;a++)r.push({content:a+1,type:"normal"});return r},init:function(){var t=new Date;this.currentDay=t.getDate(),this.currentMonth=t.getMonth()+1,this.currentYear=t.getFullYear(),this.now.year=this.currentYear,this.now.month=this.currentMonth,this.now.day=this.currentDay;var e=this.createDateList(this.currentYear,this.currentMonth);this.dayList=e,this.initFoldView()},switchBoard:function(t){var e=t.direction,n=t.foldState;n?this.subListOperation(e):("next"===e?(this.currentMonth+=1,this.monthEdgeCaseCheck()):(this.currentMonth-=1,this.monthEdgeCaseCheck()),this.dayList=this.createDateList(this.currentYear,this.currentMonth))},toggleBoard:function(){this.foldState=!this.foldState},subListOperation:function(t){var e=this,n=function(){e.subListInfo.startPosition<0?(e.currentMonth-=1,e.monthEdgeCaseCheck(),e.dayList=e.createDateList(e.currentYear,e.currentMonth),e.subListInfo.startPosition=Math.floor(e.dayList.length/7)):e.subListInfo.startPosition>Math.floor(e.dayList.length/7)&&(e.currentMonth+=1,e.monthEdgeCaseCheck(),e.dayList=e.createDateList(e.currentYear,e.currentMonth),e.subListInfo.startPosition=0)};if("next"===t)return this.subListInfo.startPosition+=1,n(),void(this.subList=this.dayList.slice(7*this.subListInfo.startPosition,7*this.subListInfo.startPosition+7));this.subListInfo.startPosition-=1,n(),this.subList=this.dayList.slice(7*this.subListInfo.startPosition,7*this.subListInfo.startPosition+7)},monthEdgeCaseCheck:function(){this.currentMonth>12?(this.currentYear+=1,this.currentMonth=1):this.currentMonth<1&&(this.currentYear-=1,this.currentMonth=12)},initFoldView:function(){var t=this;this.subListInfo.subListIndex=this.dayList.findIndex(function(e){return e.content==t.currentDay}),this.subListInfo.startPosition=Math.floor(this.subListInfo.subListIndex/7),this.subList=this.dayList.slice(7*this.subListInfo.startPosition,7*this.subListInfo.startPosition+7)},getReminderData:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("chunk-2d21f0f9").then(n.bind(null,"d7e5"));case 2:e=t.sent,this.reminderData=e.default;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.init(),this.currentTab=this.tabOptions[0].sign,this.timestamp=f(),this.getReminderData()},mounted:function(){var t=this;window.onload=function(){var e=new y(".date-header");e.onLeft(function(){t.switchBoard({direction:"next",foldState:t.foldState})}),e.onRight(function(){t.switchBoard({direction:"last",foldState:t.foldState})}),e.run()}},components:{Reminder:x}},_=L,k=(n("535f"),Object(w["a"])(_,a,o,!1,null,"6f6644f5",null)),C=k.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"flex justify-space-around"},t._l(t.icons,function(e,r){return n("span",{key:r,class:"flex flex-column align-center "+(e.sign===t.currentTab?"active":""),on:{click:function(n){return t.$emit("click",e.sign)}}},[n("i",{class:"iconfont "+e.code}),n("span",[t._v(t._s(e.text))])])}),0)},I=[],j={props:["currentTab"],data:function(){return{icons:[{code:"icon-shandian",text:"工作",sign:"work"},{code:"icon-renyuan-shi",text:"角色",sign:"role"},{code:"icon-icon-test",text:"事项圈",sign:"career"},{code:"icon-ai-connection",text:"同事",sign:"colleage"},{code:"icon-weibiaoti--",text:"日历",sign:"calendar"}]}}},P=j,T=(n("3c51"),Object(w["a"])(P,M,I,!1,null,"2d38ec66",null)),Y=T.exports,O={name:"app",components:{Calendar:C,Footer:Y},data:function(){return{currentTab:"calendar"}},methods:{switchTab:function(t){this.currentTab=t}}},S=O,E=(n("5c0b"),Object(w["a"])(S,i,s,!1,null,null,null)),R=E.exports;n("17c0");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(t,e,n){},"864d":function(t,e,n){},"8afd":function(t,e,n){"use strict";var r=n("2668"),i=n.n(r);i.a},a142:function(t,e,n){}});
//# sourceMappingURL=app.8269439f.js.map