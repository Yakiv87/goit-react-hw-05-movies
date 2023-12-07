"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[755],{595:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a,u=t(689),c=t(87),o=t(168),i=t(686),s=i.Z.ul(r||(r=(0,o.Z)(["\n  margin-top: 12px;\n"]))),p=i.Z.li(a||(a=(0,o.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n\n  background-color: #2a2a2a;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n    background-color: #ffc700;\n    color: #111111;\n  }\n\n  a {\n    display: block;\n    padding: 16px 16px;\n  }\n"]))),f=t(184),l=function(n){var e=n.movies,t=(0,u.TH)();return(0,f.jsx)(s,{children:e.map((function(n){var e=n.id,r=n.original_title;return(0,f.jsx)(p,{children:(0,f.jsx)(c.rU,{state:{from:t},to:"/movies/".concat(e),children:r})},e)}))})}},755:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,u=t(861),c=t(439),o=t(687),i=t.n(o),s=t(791),p=t(87),f=t(321),l=t(168),d=t(686),v=d.Z.input(r||(r=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  padding: 15px 16px;\n\n  color: rgba(255, 255, 255, 0.2);\n\n  background: #2b2b2b;\n  border-radius: 10px;\n\n  :active,\n  :focus,\n  :hover {\n    color: white;\n  }\n"]))),h=d.Z.button(a||(a=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  margin-left: 12px;\n  padding: 15px 16px;\n\n  color: rgba(255, 255, 255, 0.2);\n\n  background: #2b2b2b;\n  border-radius: 10px;\n\n  :not(:disabled):active,\n  :focus,\n  :not(:disabled):hover {\n    color: white;\n  }\n"]))),g=t(184),x=function(n){var e=n.setSearchParams,t=(0,s.useState)(""),r=(0,c.Z)(t,2),a=r[0],u=r[1];return(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e({query:a})},children:[(0,g.jsx)(v,{type:"text",placeholder:"Name movie",autoFocus:!0,value:a,onChange:function(n){var e=n.target.value;u(e)}}),(0,g.jsx)(h,{type:"submit",disabled:!a,children:"Search"})]})},b=t(595),m=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,p.lr)(),o=(0,c.Z)(a,2),l=o[0],d=o[1];return(0,s.useEffect)((function(){var n=l.get("query");if(n){var e=function(){var e=(0,u.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Ph)(n);case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{setSearchParams:d}),t.length>0&&(0,g.jsx)(b.Z,{movies:t})]})}},321:function(n,e,t){t.d(e,{Df:function(){return i},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return s}});var r=t(861),a=t(687),u=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="52aed080f92e177ae510784bfb4b51ec",i=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=755.7df5dc16.chunk.js.map