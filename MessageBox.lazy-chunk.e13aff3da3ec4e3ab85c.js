(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1042:function(e,a,n){"use strict";n.r(a),n.d(a,"addFlashMessage",function(){return c}),n.d(a,"removeFlashMessage",function(){return l});var r=n(17),t=n.n(r),s=n(30),i=n.n(s),o=n(7),c=function(e,a){return n=i()(t.a.mark(function n(r){return t.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r({type:o.ADD_FLASH_MESSAGE,variant:e,message:a});case 2:case"end":return n.stop()}},n,void 0)})),function(e){return n.apply(this,arguments)};var n},l=function(){return{type:o.DELETE_FLASH_MESSAGE}}},1084:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),s=n(29),i=n(1037),o=n.n(i),c=n(525),l=n.n(c),u=n(48),m=n(249),g=n(113),f={success:"#43A047",warning:"#FFA000",error:"#ed4337",info:"#2196F3"},h=Object(u.withStyles)(function(e){return{success:{backgroundColor:e.palette.success.main},error:{backgroundColor:e.palette.error.main},info:{backgroundColor:e.palette.info.main},warning:{backgroundColor:e.palette.warning.main},container:{margin:e.spacing.unit,borderRadius:"5px"},messageBox:{display:"flex",alignItems:"center"},icon:{opacity:.8,marginRight:"10px",marginTop:".5px"}}})(function(e){var a=e.classes,n=e.message,r=e.variant,s=e.onClose,i=f[r];return t.a.createElement(l.a,{className:a[r]+" "+a.container,"aria-describedby":"client-msg",message:t.a.createElement("span",{id:"client-msg",className:a.messageBox},t.a.createElement("div",{className:a.icon},t.a.createElement(m.a,{name:r,width:"20",height:"20",viewBox:"0 0 20 20",fillOuter:"#ffffff",fillInner:i})),n),action:[t.a.createElement(g.a,{name:"close",width:"20",height:"20",viewBox:"0 0 20 20",color:"white",handleClick:s})]})}),p=function(e){var a=e.show,n=e.variant,r=e.message,s=e.removeFlashMessage,i=function(e,a){"clickaway"!==a&&s()};return t.a.createElement(o.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:a,autoHideDuration:4e3,onClose:i},t.a.createElement(h,{onClose:i,variant:n,message:r}))},v=n(1042);a.default=Object(s.c)(function(e){return{show:e.message.show,variant:e.message.variant,message:e.message.message}},function(e){return{removeFlashMessage:function(){return e(Object(v.removeFlashMessage)())}}})(function(e){var a=e.show,n=e.variant,r=e.message,s=e.removeFlashMessage;return t.a.createElement(t.a.Fragment,null,a&&t.a.createElement(p,{show:a,variant:n,message:r,removeFlashMessage:s}))})}}]);