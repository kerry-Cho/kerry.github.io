"use strict";(self.webpackChunkblogkerry=self.webpackChunkblogkerry||[]).push([[660],{8269:function(t){t.exports=function(t,e){e=e||JSON.stringify;for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],l=e(o);r[l]||(n.push(o),r[l]=!0)}return n}},8466:function(t,e,n){n.d(e,{Z:function(){return d}});n(7294);var r=n(6125),i=n(3257),o=n(468),l=(n(7327),n(7628)),a=n(7399),s=function(t){return.35*t+"rem"},u={wrapper:{position:"relative",zIndex:2,textAlign:"center",mb:s(3)},pattern:{backgroundSize:"8rem",opacity:.15},circle:function(t){var e=t.width;return{width:[s(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",transform:"translate(-50%)  scale(0.98)",left:"50%",top:s(3),bg:"alpha"}},arc:function(t){var e=t.width;return{width:[s(30),"full"],height:"full",maxWidth:e,borderRadius:"full",position:"absolute",zIndex:2,left:"50%",transform:"translate(-50%)",mt:s(-1),ml:s(-2),boxShadow:function(t){return"\n\t\t\t"+s(2)+"\n\t\t\t"+s(4)+"\n\t\t\t"+t.colors.omegaLight+"\n\t\t"}}},imageWrapper:{mx:"auto",img:{borderRadius:"0 0 9999px 9999px"}}},c=function(t){var e=t.avatar,n=(t.withPattern,t.patternStyles,t.size),s=t.width,c=t.loading,d=t.alt,f=e&&(0,l.Z)(e,n);return f?(s=s||f.width,(0,a.tZ)(i.xu,{sx:u.wrapper},(0,a.tZ)(i.xu,null,(0,a.tZ)(r.G,{image:f,alt:d,loading:c,css:(0,o.i)(u.imageWrapper)})))):null},d=c;c.defaultProps={size:"regular",withPattern:!1}},4413:function(t,e,n){n.d(e,{Z:function(){return j}});var r=n(7462),i=n(3366),o=n(7294),l=n(3257),a=n(6907),s=n(795),u=n(8269),c=n.n(u),d=n(2826),f=n(4942),p=n(5917),Z=n(468),g=n(3201),x={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},v=n(156),b=n(7399);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){(0,f.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=(0,v.ZP)((function(){return n.e(636).then(n.bind(n,8538))})),w=o.forwardRef((function(t,e){var n=t.columns,i=t.slidesToScroll,o=t.smoothAutoScroll,a=t.autoPlay,s=t.autoplaySpeed,u=t.fade,c=t.dots,d=t.arrows,f=t.centerMode,v=t.centerPadding,h=t.controlPosition,w=t.beforeChange,y=t.children,P=(0,p.B7)(),O={slidesToScroll:1,autoplay:!0,cssEase:"linear"},S={centerMode:!u,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!c||!u)},j=P.theme.breakpoints.map((function(t,e){var r=n[e>=n.length?n.length-1:e],o=i[e>=i.length?i.length-1:e];return{breakpoint:parseInt(t),settings:m({slidesToShow:r,slidesToScroll:o},0===e?S:{})}})),C={ref:e,beforeChange:w,slidesToShow:n[n.length-1],slidesToScroll:i[i.length-1],speed:800,dots:c,arrows:d,centerMode:f,centerPadding:v,infinite:!0,cssEase:u?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:u,responsive:j,css:(0,Z.i)(m(m(m(m({},u?x.fade:x.slide),"bottom"===h&&x.controlBottom),"center"===h&&x.controlCenter),"over"===h&&x.controlOver)),prevArrow:(0,b.tZ)(l.hU,{sx:x.arrowPrev},(0,b.tZ)(g.bUI,null)),nextArrow:(0,b.tZ)(l.hU,{sx:x.arrowNext},(0,b.tZ)(g.Dli,null))};o&&(C=m(m(m({},C),O),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!o&&a&&(C=m(m(m({},C),O),{},{speed:300,autoplaySpeed:s}));var D=y.slice(0,n[n.length-1]);return(0,b.tZ)(k,(0,r.Z)({},C,{fallback:D}),y)})),y=w;w.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var P=n(3339),O=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],S=o.forwardRef((function(t,e){var n=t.nodes,o=t.variant,u=t.title,f=t.withTitleLink,p=t.limit,Z=t.skip,g=t.distinct,x=t.slider,v=t.aside,h=t.asNavFor,m=t.loading,k=(0,i.Z)(t,O),w=function(t,e){var n=e.limit,r=e.skip,i=e.distinct;if(!t)return null;if(!n&&!r&&!i)return t;var o=t;return i&&(o=c()(o,(function(t){return t.id}))),r&&(o=o.slice(r)),n&&(o=o.slice(0,n)),o}(n,{distinct:g,limit:p,skip:Z});if(!w||!w.length)return null;var S=f?w[0].category&&w[0].category.slug:"",j=u&&""+(0,s.Z)(w.map((function(t){return t.id})).join()),C=(0,a.Z)(x?"lists.cards.slider":"lists.cards.fixed",o),D=function(t){h&&h.current&&(h.current.slickPause(),h.current.slickGoTo(t))},z=w.map((function(e,n){return(0,b.tZ)(P.Z,(0,r.Z)({key:e.id,variant:o,onMouseOver:function(){return D(n)},onFocus:function(){return D(n)},loading:t.fade?0===n?m:void 0:m},e,k))})),A=function(){return(0,b.tZ)(l.xu,{sx:{variant:C}},x?(0,b.tZ)(y,(0,r.Z)({ref:e},k),z):z)};return u?(0,b.tZ)(d.Z,{title:u,titleLink:S,key:j,aside:v},(0,b.tZ)(A,null)):(0,b.tZ)(A,null)})),j=S;S.defaultProps={variant:"vertical",columns:[1],aside:!1}},4493:function(t,e,n){n.d(e,{Z:function(){return l}});n(7294);var r=n(3257),i=n(7399),o={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},l=function(t){var e=t.header,n=t.subheader,l=t.running,a=t.totalCount;return(0,i.tZ)("div",null,(0,i.tZ)(r.X6,{variant:"h1",as:"h1"},e," ",a&&(0,i.tZ)(r.Ct,{variant:"tag-white",sx:o.count}," ",a)),n&&(0,i.tZ)(r.xv,{variant:"h3",sx:o.subheader},n),l&&(0,i.tZ)(r.xv,{variant:"h4",sx:o.runninghead},l))}},4158:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(4942),i=(n(7294),n(5444)),o=n(3257),l=n(3201),a=function(t){return t.replace(/\/*$/,"/")},s=n(7399);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},f=function(t){var e=t.currentPage,n=t.pageCount,r=t.hasPreviousPage,u=t.hasNextPage,f=t.basePath,p=void 0===f?"":f,Z=t.slug;if(!u&&!r)return"";var g=a(p+(void 0===Z?"":Z)),x=a(g+"page"),v=e>=3?""+x+(e-1):g,b=""+x+(e+1);return(0,s.tZ)(o.kC,{sx:d.wrapper},(0,s.tZ)(o.xu,{sx:d.item},r&&(0,s.tZ)(o.zx,{variant:"mute",as:i.Link,to:v,sx:d.button},(0,s.tZ)(l.bUI,null),"Previous")),(0,s.tZ)(o.xu,{sx:c(c({},d.item),d.number)},"Page ",(0,s.tZ)("strong",null,e)," of ",(0,s.tZ)("strong",null,n)),(0,s.tZ)(o.xu,{sx:d.item},u&&(0,s.tZ)(o.zx,{variant:"dark",as:i.Link,to:b,sx:d.button},"Next",(0,s.tZ)(l.Dli,null))))}},9134:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(7462),i=n(3366),o=(n(7294),n(2952)),l=n(4493),a=n(4158),s=n(4413),u=n(5393),c=n(8320),d=n(6887),f=n(7399),p=["data"],Z=function(t){var e=t.data,n=e.posts,Z=e.collectionInfo,g=(0,i.Z)(t,p);return(0,f.tZ)(o.Ar,g,(0,f.tZ)(c.Z,{title:Z.name}),(0,f.tZ)(u.Z,null),(0,f.tZ)(o.Kq,{effectProps:{effect:"fadeInDown"}},(0,f.tZ)(l.Z,{header:"Published by Author",totalCount:n.totalCount})),(0,f.tZ)(u.Z,null),(0,f.tZ)(o.Kq,null,(0,f.tZ)(o.or,null,(0,f.tZ)(d.Z,{author:Z}),(0,f.tZ)(u.Z,null),n.nodes&&(0,f.tZ)(s.Z,{nodes:n.nodes,variant:["horizontal-md","vertical"],columns:[1,2,3,3]}))),(0,f.tZ)(u.Z,null),(0,f.tZ)(o.jS,null,(0,f.tZ)(a.Z,(0,r.Z)({},n.pageInfo,Z))))}},6887:function(t,e,n){n.d(e,{Z:function(){return v}});n(7294);var r=n(5444),i=n(3257),o=n(7327),l=n(8466),a=n(4436),s=n(6190),u=n(7399),c={card:{position:"relative"},wrapper:{flexDirection:["column","row"],position:"relative",zIndex:3},avatarColumn:{flexBasis:"1/3"},infoColumn:{flexBasis:"2/3"},innerBox:{flexBasis:"1/2",flexGrow:1,px:[0,3],mt:[3,0]},subheader:{color:"omegaDark"},name:{textAlign:["center","left"],mt:[3,0],px:3},bio:{textAlign:["center","left"]},socialList:{a:{m:0}},link:{position:"absolute",top:10,right:10,zIndex:3},pattern:{borderRadius:"lg"},gradient:{size:"full",borderRadius:"lg",position:"absolute",left:0,top:0,zIndex:2,background:[function(t){return"linear-gradient(0deg, "+t.colors.contentBg+" 20%, rgba(255, 255, 255, 0) 80%)"},function(t){return"linear-gradient(270deg, "+t.colors.contentBg+" 20%, rgba(255, 255, 255, 0) 100%)"}]}},d=function(t){var e=t.children;return(0,u.tZ)(i.X6,{variant:"h4",sx:c.subheader},e)},f=function(t){var e=t.name,n=t.thumbnail,o=t.slug;return n?(0,u.tZ)(i.xu,null,(0,u.tZ)(i.rU,{as:r.Link,to:o,"aria-label":e},(0,u.tZ)(l.Z,{avatar:n,alt:e}))):null},p=function(t){var e=t.name,n=t.slug;return(0,u.tZ)(i.xu,{sx:c.name},(0,u.tZ)(i.X6,{variant:"h3"},(0,u.tZ)(i.rU,{as:r.Link,to:n},e)))},Z=function(t){var e=t.title,n=t.description;return(0,u.tZ)(i.xu,{sx:c.bio},(0,u.tZ)(d,null,e),(0,u.tZ)(i.xv,null,n))},g=function(t){var e=t.skills;return e?(0,u.tZ)(i.xu,{sx:c.innerBox},(0,u.tZ)(d,null,"Expertise"),e.map((function(t){return(0,u.tZ)(i.xv,{key:"skill-"+t},t)}))):null},x=function(t){var e=t.social;return e?(0,u.tZ)(i.xu,{sx:c.innerBox},(0,u.tZ)(d,null,"Social Media"),(0,u.tZ)(a.Z,{variant:"vertical",items:(0,s.Z)(e),wrapperStyle:c.socialList})):null},v=function(t){var e=t.author,n=t.withLink;if(!e)return null;var l=e.skills,a=e.social;return(0,u.tZ)(i.Zb,{variant:"paper",sx:c.card},(0,u.tZ)(i.kC,{sx:c.wrapper},(0,u.tZ)(i.xu,{sx:c.avatarColumn},(0,u.tZ)(f,e)),(0,u.tZ)(i.xu,{sx:c.infoColumn},(0,u.tZ)(p,e),(0,u.tZ)(i.kC,{sx:c.wrapper},(0,u.tZ)(i.xu,{sx:c.innerBox},(0,u.tZ)(Z,e)),(a||l)&&(0,u.tZ)(i.xu,{sx:c.innerBox},(0,u.tZ)(i.kC,null,(0,u.tZ)(g,e),(0,u.tZ)(x,e)))))),n&&(0,u.tZ)(i.Ct,{variant:"tag",as:r.Link,to:e.slug,sx:c.link},"View Posts"),(0,u.tZ)(i.xu,{sx:c.gradient}),(0,u.tZ)(o.Z,{sx:c.pattern}))}}}]);
//# sourceMappingURL=component---src-templates-collection-author-js-0950de73419cd393e508.js.map