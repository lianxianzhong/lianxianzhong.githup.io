(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)r=c[f],i[r]&&d.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},i={app:0},a=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"029b":function(t,e,n){"use strict";var s=n("29fc"),i=n.n(s);i.a},"0341":function(t,e,n){},"08a5":function(t,e,n){"use strict";var s=n("bffb"),i=n.n(s);i.a},"122a":function(t,e,n){"use strict";var s=n("2f57"),i=n.n(s);i.a},1366:function(t,e,n){},"140e":function(t,e,n){},"179b":function(t,e,n){"use strict";var s=n("9f7c"),i=n.n(s);i.a},"29fc":function(t,e,n){},"2be8":function(t,e,n){},"2cde":function(t,e,n){},"2f57":function(t,e,n){},3236:function(t,e,n){},"361b":function(t,e,n){"use strict";var s=n("45ee"),i=n.n(s);i.a},"399e":function(t,e,n){"use strict";var s=n("1366"),i=n.n(s);i.a},"3bff":function(t,e,n){},"3ee2":function(t,e,n){"use strict";var s=n("dd7f"),i=n.n(s);i.a},"45ee":function(t,e,n){},"48ff":function(t,e,n){"use strict";var s=n("b57b"),i=n.n(s);i.a},"4f63":function(t,e,n){},"4f80":function(t,e,n){"use strict";var s=n("2cde"),i=n.n(s);i.a},"54c3":function(t,e,n){"use strict";var s=n("4f63"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"detail"}},[n("router-view")],1)],1)},a=[],r={components:{}},c=r,o=n("2877"),l=Object(o["a"])(c,i,a,!1,null,null,null),u=l.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"home",staticClass:"home"},[n("div",[n("Header"),n("Swiper",{attrs:{swiperList:t.swiperList}}),n("IconList",{attrs:{iconList:t.iconList}}),n("Recommend",{attrs:{recommendList:t.recommendList}}),n("Weekend",{attrs:{weekendList:t.weekendList}}),n("Copyright")],1)])},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homeHeader"},[t._m(0),t._m(1),n("router-link",{attrs:{to:"/city"}},[n("div",{staticClass:"header-right"},[n("p",{staticClass:"text"},[t._v(t._s(this.$store.state.city))]),n("p",{staticClass:"iconfont xia"},[t._v("")])])])],1)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-left"},[n("span",{staticClass:"iconfont fanhui"},[t._v("")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-input"},[n("span",{staticClass:"iconfont sousuo"},[t._v("")]),t._v("输入城市/景点/游玩主题")])}],v={name:"homeHeader",data:function(){return{}},methods:{}},b=v,g=(n("fc97"),Object(o["a"])(b,h,m,!1,null,"43cd70b4",null)),_=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper"},[n("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperList,function(t,e){return n("swiper-slide",{key:e},[n("img",{attrs:{width:"100%",src:t.imgUrl}})])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},y=[],C={name:"swiper-page",props:{swiperList:{type:Array,default:[]}},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},loop:!0,autoplay:{delay:1500,stopOnLastSlide:!1,disableOnInteraction:!1}}}},methods:{}},k=C,x=(n("4f80"),n("9700"),Object(o["a"])(k,w,y,!1,null,"bfccd422",null)),O=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swiper",{staticClass:"iconlist border-bottom",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return n("swiper-slide",{key:s},[n("div",{staticClass:"wrapper"},t._l(e,function(e,s){return n("div",{key:s,staticClass:"item"},[n("img",{staticClass:"itemImg",attrs:{src:e.imgUrl,alt:""}}),n("p",{staticClass:"p"},[t._v(t._s(e.desc))])])}),0)])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),t._m(0)],1)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},[n("div",{staticClass:"b-left border-right"},[n("span",{staticClass:"iconfont"},[t._v("")]),t._v("附近\n    ")]),n("div",{staticClass:"b-right"},[n("span",{staticClass:"iconfont"},[t._v("")]),t._v("必游榜单\n    ")])])}],L=(n("ac6a"),{name:"iconlist",props:{iconList:{type:Array,default:[]}},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},loop:!0}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,n){var s=Math.floor(n/8);t[s]||(t[s]=[]),t[s].push(e)}),t}},methods:{}}),E=L,I=(n("179b"),n("08a5"),Object(o["a"])(E,j,$,!1,null,"856a16bc",null)),A=I.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("推荐")]),t._l(t.recommendList,function(e,s){return n("router-link",{key:s,staticClass:"info border-bottom",attrs:{to:{name:"detail",params:{id:s+1}}}},[n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{width:"100%",height:"100%",src:e.imgUrl,alt:""}})]),n("div",{staticClass:"content"},[n("p",{staticClass:"name"},[t._v(t._s(e.title))]),n("p",{staticClass:"desc"},[t._v(t._s(e.desc))]),n("button",{staticClass:"btn"},[t._v("查看详情")])])])}),n("div",{staticClass:"seeAll"},[t._v("查看所有产品")])],2)},z=[],N={name:"recommend",props:{recommendList:{type:Array,default:[]}},data:function(){return{}},methods:{}},T=N,B=(n("029b"),Object(o["a"])(T,S,z,!1,null,"7dd4705e",null)),H=B.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._l(t.weekendList,function(e,s){return n("div",{key:s,staticClass:"info"},[n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{width:"100%",src:e.imgUrl,alt:""}})]),n("div",{staticClass:"content"},[n("p",{staticClass:"name"},[t._v(t._s(e.title))]),n("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])])})],2)},Y=[],M={name:"weekend",props:{weekendList:{type:Array,default:[]}},data:function(){return{weekendData:[{name:"京城周末撒欢",src:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",desc:"在帝都过周末，不仅仅是城中游！"},{name:"京城周末撒欢",src:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",desc:"在帝都过周末，不仅仅是城中游！"},{name:"京城周末撒欢",src:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",desc:"在帝都过周末，不仅仅是城中游！"},{name:"京城周末撒欢",src:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",desc:"在帝都过周末，不仅仅是城中游！"},{name:"京城周末撒欢",src:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",desc:"在帝都过周末，不仅仅是城中游！"}]}},methods:{}},q=M,U=(n("6525"),Object(o["a"])(q,P,Y,!1,null,"2d6faf1b",null)),F=U.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright border-top"},[n("p",{staticClass:"mode"},[n("span",{staticClass:"mode-ph"},[t._v("触屏版")]),n("span",{staticClass:"mode-pc"},[t._v("电脑版")])]),n("p",{staticClass:"desc"},[n("span",{staticClass:"banquan"},[t._v("Qunar 京ICP备05021087")]),n("span",{staticClass:"advise"},[t._v("意见反馈")])])])}],W={name:"copyright",data:function(){return{}},methods:{}},D=W,Q=(n("399e"),Object(o["a"])(D,J,R,!1,null,"4fc38a45",null)),G=Q.exports,K=n("bc3a"),V=n.n(K),X=n("1fba"),Z={name:"home",components:{Header:_,Swiper:O,IconList:A,Recommend:H,Weekend:F,Copyright:G},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[]}},mounted:function(){var t=this;V.a.get("http://www.lianxianzhong.top/mock/index.json").then(function(e){if(e.data.ret){var n=e.data.data;t.swiperList=n.swiperList,t.iconList=n.iconList,t.recommendList=n.recommendList,t.weekendList=n.weekendList}t.$nextTick(function(){t.scroll=new X["a"](t.$refs["home"],{click:!0})})})},methods:{}},tt=Z,et=(n("122a"),Object(o["a"])(tt,d,p,!1,null,"e65cdcae",null)),nt=et.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("Search",{attrs:{cities:t.cities}}),n("List",{attrs:{hot:t.hot,cities:t.cities,letter:t.letter}}),n("Alphabet",{attrs:{cities:t.cities},on:{changeAlphabet:t.changeAlphabet}})],1)},it=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("span",{staticClass:"iconfont",on:{click:t.back}},[t._v("")]),n("div",{staticClass:"title"},[t._v("城市选择")])])},rt=[],ct={name:"city-header",data:function(){return{}},methods:{back:function(){this.$router.push("/")}}},ot=ct,lt=(n("361b"),Object(o["a"])(ot,at,rt,!1,null,"05711fbe",null)),ut=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.keywords,expression:"keywords"}],ref:"search",staticClass:"search-content"},[n("ul",[t._l(t.list,function(e,s){return n("li",{key:s,staticClass:"search-item border-bottom",on:{click:function(n){return t.changeCity(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),n("li",{directives:[{name:"show",rawName:"v-show",value:!t.list.length,expression:"!list.length"}],staticClass:"search-item"},[t._v('\n        "没有搜索到匹配对象"\n      ')])],2)])])},dt=[],pt=(n("7f7f"),n("386d"),n("5118")),ht={name:"search",props:{cities:Object},data:function(){return{keywords:"",list:[],timer:null}},mounted:function(){this.scroll=new X["a"](this.$refs.search,{click:!0})},methods:{changeCity:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},watch:{keywords:function(){var t=this;this.timer&&Object(pt["clearTimeout"])(this.timer),this.keywords||(this.list=[]),this.timer=Object(pt["setTimeout"])(function(){var e=[];for(var n in t.cities)t.cities[n].forEach(function(n){(n.name.indexOf(t.keywords)>-1||n.spell.indexOf(t.keywords)>-1)&&e.push(n)});t.list=e},100)}}},mt=ht,vt=(n("c5b6"),Object(o["a"])(mt,ft,dt,!1,null,"e80fbe4c",null)),bt=vt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"list",staticClass:"list"},[n("div",[n("div",{staticClass:"now"},[n("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),n("div",{staticClass:"city-list"},[n("div",{staticClass:"city-wrapper"},[n("div",{staticClass:"city"},[t._v(t._s(this.$store.state.city))])])])]),n("div",{staticClass:"hot border-topbottom"},[n("div",{staticClass:"title"},[t._v("热门城市")]),n("div",{staticClass:"city-list"},t._l(t.hot,function(e){return n("div",{key:e.id,staticClass:"city-wrapper",on:{click:function(n){return t.changeCity(e.name)}}},[n("div",{staticClass:"city"},[t._v(t._s(e.name))])])}),0)]),t._l(t.cities,function(e,s){return n("div",{key:s,ref:s,refInFor:!0,staticClass:"sort"},[n("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._l(e,function(e){return n("div",{key:e.id,staticClass:"sort-city border-bottom",on:{click:function(n){return t.changeCity(e.name)}}},[t._v(t._s(e.name))])})],2)})],2)])},_t=[],wt={name:"list",props:{hot:Array,cities:Object,letter:String},data:function(){return{}},created:function(){var t=this;this.$nextTick(function(){t._initBetterScroll()})},methods:{_initBetterScroll:function(){this.scroll=new X["a"](this.$refs["list"],{click:!0})},changeCity:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},watch:{letter:function(){this.letter&&this.scroll.scrollToElement(this.$refs[this.letter][0])}}},yt=wt,Ct=(n("ca39"),Object(o["a"])(yt,gt,_t,!1,null,"23622bc0",null)),kt=Ct.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alphabet"},t._l(t.letters,function(e){return n("div",{key:e,ref:e,refInFor:!0,staticClass:"sort",on:{click:t.changAlphabet,touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[t._v("\n  "+t._s(e))])}),0)},Ot=[],jt={name:"alphabet",props:{cities:Object},data:function(){return{touchstatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs["A"][0].offsetTop},methods:{changAlphabet:function(t){this.$emit("changeAlphabet",t.target.innerText)},touchstart:function(){this.touchstatus=!0},touchmove:function(t){var e=this;this.timer&&Object(pt["clearTimeout"])(this.timer),this.timer=Object(pt["setTimeout"])(function(){if(e.touchstatus){var n=t.touches[0].clientY-84,s=Math.floor((n-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("changeAlphabet",e.letters[s])}},16)},touchend:function(){this.touchstatus=!1}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}}},$t=jt,Lt=(n("6ae7"),Object(o["a"])($t,xt,Ot,!1,null,"59f91be2",null)),Et=Lt.exports,It={name:"city",components:{Header:ut,Search:bt,List:kt,Alphabet:Et},data:function(){return{hot:[],cities:{},letter:""}},methods:{changeAlphabet:function(t){this.letter=t}},mounted:function(){var t=this;V.a.get("http://www.lianxianzhong.top/mock/city.json").then(function(e){var n=e.data.data;e.data.ret&&(t.hot=n.hotCities,t.cities=n.cities)})}},At=It,St=Object(o["a"])(At,st,it,!1,null,"235cf416",null),zt=St.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{ref:"header"}),n("sideAnimation",[n("Slide",{directives:[{name:"show",rawName:"v-show",value:t.isBanner,expression:"isBanner"}],attrs:{gallaryImgs:t.gallaryImgs},on:{toClose:t.close}})],1),n("div",{ref:"list",staticClass:"list"},[n("div",[n("Banner",{attrs:{gallaryImgs:t.gallaryImgs,sightName:t.sightName,bannerImg:t.bannerImg},on:{toOpen:t.toOpen}}),n("List",{attrs:{list:t.list}})],1)])],1)},Tt=[],Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"img-wrapper"},[n("img",{attrs:{width:"100%",src:t.bannerImg,alt:""},on:{click:t.open}}),n("div",[n("p",{staticClass:"pic"},[n("span",{staticClass:"iconfont pic-icon"},[t._v("")]),n("span",[t._v(t._s(t.gallaryImgs.length))])]),n("p",{staticClass:"name"},[t._v(t._s(t.sightName))])])])])},Ht=[],Pt={name:"banner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},components:{},data:function(){return{isBanner:!1}},methods:{open:function(){this.$emit("toOpen")}}},Yt=Pt,Mt=(n("d469"),Object(o["a"])(Yt,Bt,Ht,!1,null,"7311194b",null)),qt=Mt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.change,expression:"change"}],staticClass:"header-star"},[n("span",{staticClass:"back iconfont",style:t.top,on:{click:t.back}},[t._v("")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.change,expression:"!change"}],staticClass:"header-change",style:t.changeStyle},[n("span",{staticClass:"iconfont",on:{click:t.back}},[t._v("")]),n("div",{staticClass:"title"},[t._v("城市选择")])])])},Ft=[],Jt={name:"home-header",data:function(){return{change:!0,changeStyle:{opacity:0},top:{}}},methods:{back:function(){this.$router.back()},changeHeader:function(t){if(console.log(t),t>60){var e=t/140;e=e>1?1:e,this.changeStyle={opacity:e},this.change=!1}else this.change=!0;t<0&&(this.top={top:5-t+"px"})}}},Rt=Jt,Wt=(n("48ff"),Object(o["a"])(Rt,Ut,Ft,!1,null,"05190929",null)),Dt=Wt.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swiper",{staticClass:"banner",attrs:{options:t.swiperOption},on:{click:t.close}},[t._l(t.gallaryImgs,function(t,e){return n("swiper-slide",{key:e,staticClass:"img-wrapper"},[n("img",{attrs:{width:"100%",src:t,alt:""}})])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},Gt=[],Kt={name:"slide",props:{gallaryImgs:Array},data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"},observer:!0,observeParents:!0}}},methods:{close:function(){this.$emit("toClose")}}},Vt=Kt,Xt=(n("54c3"),Object(o["a"])(Vt,Qt,Gt,!1,null,"8b65f220",null)),Zt=Xt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,function(e,s){return n("div",{key:s,staticClass:"list border-bottom"},[n("div",[n("span",{staticClass:"icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),e.children?n("div",[n("list",{attrs:{list:e.children}})],1):t._e()])}),0)},ee=[],ne={name:"list",props:{list:Array},data:function(){return{}},methods:{}},se=ne,ie=(n("3ee2"),Object(o["a"])(se,te,ee,!1,null,"cc02ac32",null)),ae=ie.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",[t._t("default")],2)],1)},ce=[],oe={name:"name",data:function(){return{}},methods:{}},le=oe,ue=(n("99bf"),Object(o["a"])(le,re,ce,!1,null,"782fd4ae",null)),fe=ue.exports,de={name:"detail",components:{Banner:qt,Header:Dt,Slide:Zt,List:ae,sideAnimation:fe},data:function(){return{isBanner:!1,scrollY:0,sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},mounted:function(){var t=this;V.a.get("http://www.lianxianzhong.top/mock/detail.json",{params:{id:this.$route.params.id}}).then(function(e){e=e.data,e.ret&&(t.sightName=e.data.sightName,t.bannerImg=e.data.bannerImg,t.gallaryImgs=e.data.gallaryImgs,t.list=e.data.categoryList)}),this.scroll=new X["a"](this.$refs["list"],{click:!0,probeType:3}),this.scroll.on("scroll",function(e){t.scrollY=-1*Math.round(e.y)})},methods:{toOpen:function(){this.isBanner=!0},close:function(){this.isBanner=!1}},watch:{scrollY:function(){this.$refs.header.changeHeader(this.scrollY)}}},pe=de,he=(n("609e"),Object(o["a"])(pe,Nt,Tt,!1,null,"31b68e5a",null)),me=he.exports;s["a"].use(f["a"]);var ve=new f["a"]({mode:"hash",base:"/",routes:[{name:"default",path:"/",redirect:"/home"},{name:"home",path:"/home",component:nt},{name:"city",path:"/city",component:zt},{name:"detail",path:"/detail/:id",component:me}]}),be=n("2f62");s["a"].use(be["a"]);var ge=new be["a"].Store({state:{city:"浦城"},mutations:{changeCity:function(t,e){t.city=e}},actions:{}}),_e=n("fe3c"),we=n.n(_e),ye=(n("a41b"),n("0341"),n("7212")),Ce=n.n(ye);n("dfa4");we.a.attach(document.body),s["a"].use(Ce.a),s["a"].config.productionTip=!1,new s["a"]({router:ve,store:ge,render:function(t){return t(u)}}).$mount("#app")},"5bff":function(t,e,n){},"609e":function(t,e,n){"use strict";var s=n("2be8"),i=n.n(s);i.a},6525:function(t,e,n){"use strict";var s=n("5bff"),i=n.n(s);i.a},"660f":function(t,e,n){},"6ae7":function(t,e,n){"use strict";var s=n("d679"),i=n.n(s);i.a},9700:function(t,e,n){"use strict";var s=n("a038"),i=n.n(s);i.a},"99bf":function(t,e,n){"use strict";var s=n("3236"),i=n.n(s);i.a},"9f7c":function(t,e,n){},a038:function(t,e,n){},a41b:function(t,e,n){},b52f:function(t,e,n){},b57b:function(t,e,n){},bffb:function(t,e,n){},c5b6:function(t,e,n){"use strict";var s=n("3bff"),i=n.n(s);i.a},ca39:function(t,e,n){"use strict";var s=n("140e"),i=n.n(s);i.a},d469:function(t,e,n){"use strict";var s=n("660f"),i=n.n(s);i.a},d679:function(t,e,n){},dd7f:function(t,e,n){},fc97:function(t,e,n){"use strict";var s=n("b52f"),i=n.n(s);i.a}});
//# sourceMappingURL=app.d080b980.js.map