(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1243:function(e,n,t){"use strict";t.r(n);var a=t(27),i=t.n(a),s=t(0),o=t.n(s),c=t(1211),r=t.n(c),l=t(304),m=t.n(l),u=t(613),p=t.n(u),g=function(e){var n=e.suggestions,t=e.suggestionSelected;return o.a.createElement("ul",null,n.map(function(e){return o.a.createElement("li",{key:e.id,className:"autoComplete-item",onClick:function(){return t(e.companyName)}},o.a.createElement("div",{className:"pa3"},e.companyName))}))};n.default=function(e){var n=e.open,t=e.anchorEl,a=e.suggestions,s=e.suggestionSelected;return o.a.createElement(r.a,{id:"simple-popper",open:n,anchorEl:t,transition:!0},function(e){var n=e.TransitionProps;return o.a.createElement(p.a,i()({},n,{timeout:350}),o.a.createElement(m.a,{className:"mt1 f-mini",style:{width:t?t.clientWidth:void 0}},0===a.length?o.a.createElement("p",{className:"f-mini pa3"},"일치하는 검색결과가 없습니다."):o.a.createElement(g,{suggestions:a,suggestionSelected:s})))})}}}]);