(this.webpackJsonppototoro=this.webpackJsonppototoro||[]).push([[0],[,,,,function(e,t,n){e.exports={clock:"styles_clock__2_xsk","clock--running":"styles_clock--running__22COI",clock__label:"styles_clock__label__3jvFx","clock__label--bottom":"styles_clock__label--bottom__2mhOE",clock__circle:"styles_clock__circle__3bClP",clock__path:"styles_clock__path__1xyVs","clock__path--shadow":"styles_clock__path--shadow__3jviO","clock__path--thin":"styles_clock__path--thin__2vvf6","clock__path-remaining":"styles_clock__path-remaining__K7WQA","clock__path-remaining--thin":"styles_clock__path-remaining--thin__3SIZl"}},function(e,t,n){e.exports={"timer-setup":"styles_timer-setup__3lu0a","timer-setup--disappearing":"styles_timer-setup--disappearing__28aP7","timer-setup__label":"styles_timer-setup__label__2g8Ze"}},function(e,t,n){e.exports={totoro:"styles_totoro__3zYs8","totoro--work":"styles_totoro--work__1_oEt","totoro--long-break":"styles_totoro--long-break__1gX5q","totoro--break":"styles_totoro--break__2Rd0g","totoro--hidden":"styles_totoro--hidden__FJBts","totoro--changing":"styles_totoro--changing__e6rm8",change:"styles_change__27ayD"}},function(e,t,n){e.exports={timer:"styles_timer__3thNU",timer__button:"styles_timer__button__2yzvJ"}},,,function(e,t,n){e.exports={button:"styles_button__12U2K"}},function(e,t,n){e.exports=n.p+"static/media/info.f3e1419d.mp3"},function(e,t,n){e.exports={input:"styles_input__39iTu"}},function(e,t,n){e.exports=n.p+"static/media/work.bf866514.gif"},function(e,t,n){e.exports=n.p+"static/media/break.48ee6419.gif"},function(e,t,n){e.exports=n.p+"static/media/long-break.3ee51c7a.gif"},function(e,t,n){e.exports={app:"styles_app__1jJpR"}},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),c=n(1),l=n.n(c),s=n(10),u=n.n(s),_=function(e){var t=e.children,n=e.onClick,o=e.className,r=a.useRef(null);return a.createElement("button",{onClick:function(e){var t;n(e),null===(t=r.current)||void 0===t||t.blur()},className:l()(u.a.button,o),ref:r},t)},m=n(2),f=n(4),k=n.n(f),h=function(e){var t=e.timeLeft,n=e.initialTime,o=e.isRunning,r=e.children,i=n&&t?283*function(e,t){return(e-t)/e}(n,t):0;return a.createElement("div",{className:l()(k.a.clock,Object(m.a)({},k.a["clock--running"],o))},a.createElement("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{className:k.a.clock__circle},a.createElement("filter",{id:"dropshadow",x:"-2",y:"-2",width:"200",height:"200"},a.createElement("feOffset",{result:"offOut",in:"SourceGraphic",dx:"0",dy:"2"}),a.createElement("feGaussianBlur",{result:"blurOut",in:"offOut",stdDeviation:"1"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"blurOut",mode:"normal"})),a.createElement("circle",{className:l()(k.a.clock__path,k.a["clock__path--shadow"],Object(m.a)({},k.a["clock__path--thin"],o)),cx:"50",cy:"50",r:"40"}),a.createElement("circle",{className:l()(k.a.clock__path,Object(m.a)({},k.a["clock__path--thin"],o)),cx:"50",cy:"50",r:"40"}),a.createElement("path",{strokeDasharray:"".concat(i.toFixed(0)," ").concat(283),className:l()(k.a["clock__path-remaining"],Object(m.a)({},k.a["clock__path-remaining--thin"],o)),"data-testid":"clock-remaining-time",d:" M 50, 50 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0 "}))),r,a.createElement("span",{className:l()(k.a.clock__label,Object(m.a)({},k.a["clock__label--bottom"],o)),"data-testid":"clock-label"},t?function(e){var t=Math.floor(e/3600);return[t,Math.floor(e/60)-60*t,Math.floor(e%60)].filter((function(e,t){return!(0===t&&0===e)})).map((function(e){return e>9?e.toString():"0".concat(e)})).join(":")}(t):"-"))},g=n(3),p=function(e){var t=o.a.useState(e),n=Object(g.a)(t,2),a=n[0],r=n[1],i=o.a.useState(!1),c=Object(g.a)(i,2),l=c[0],s=c[1],u=o.a.useState(!1),_=Object(g.a)(u,2),m=_[0],f=_[1];o.a.useEffect((function(){r(e)}),[e,r]),o.a.useEffect((function(){var e;return l&&(e=setInterval((function(){r((function(e){return e-1}))}),1e3)),function(){clearInterval(e)}}),[l,r]),o.a.useEffect((function(){0===a&&(s(!1),f(!0))}),[a,s,f]);var k=o.a.useCallback((function(){m&&f(!1),s((function(e){return!e}))}),[m]),h=o.a.useCallback((function(){r(e),s(!1),f(!1)}),[s,f,r,e]);return{isFinished:m,reset:h,toggle:k,currentTime:a,isOn:l}},d=function(e,t){switch(t.type){case"SET_WORK_TIME":return Object.assign({},e,{workTime:t.time});case"SET_SHORT_BREAK_TIME":return Object.assign({},e,{shortBreakTime:t.time});case"SET_LONG_BREAK_TIME":return Object.assign({},e,{longBreakTime:t.time});default:return e}},b={workTime:3e3,longBreakTime:1800,shortBreakTime:600},v=function(){var e=a.useReducer(d,b),t=Object(g.a)(e,2),n=t[0],o=t[1];return{timerConfiguration:n,onWorkTimeChange:a.useCallback((function(e){o({type:"SET_WORK_TIME",time:60*e})}),[]),onShortBreakTimeChange:a.useCallback((function(e){o({type:"SET_SHORT_BREAK_TIME",time:60*e})}),[]),onLongBreakTimeChange:a.useCallback((function(e){o({type:"SET_LONG_BREAK_TIME",time:60*e})}),[])}},T=n(7),E=n.n(T),w=n(11),y=new Audio(n.n(w).a),B=function(){return o.a.useCallback((function(){return y.play()}),[])};var C,O=function(e){var t=B(),n=a.useState(0),o=Object(g.a)(n,2),r=o[0],i=o[1],c=a.useCallback((function(){var n=0;r+1>e.length-1?i(n):i(n=r+1),t()}),[r,i,e,t]),l=a.useCallback((function(){i(0)}),[i]);return{current:e[r],next:c,restart:l}},S=n(12),j=n.n(S),N=function(e){var t=e.initialValue,n=void 0===t?1:t,o=e.onChange,r=e.className,i=e["data-testid"],c=a.useState(n),s=Object(g.a)(c,2),u=s[0],_=s[1],m=a.useCallback((function(e){var t=""!==e.currentTarget.value?Number(e.currentTarget.value):1;_(t),o(t)}),[_,o]);return a.createElement("input",{"data-testid":i,className:l()(j.a.input,r),type:"number",min:"1",max:"60",value:u.toString(),onChange:m})},x=n(5),W=n.n(x),R=function(e){var t=e.timerConfiguration,n=e.onWorkTimeChange,o=e.onShortBreakTimeChange,r=e.onLongBreakTimeChange,i=e.visible,c=void 0===i||i;return a.createElement("div",{className:l()(W.a["timer-setup"],Object(m.a)({},W.a["timer-setup--disappearing"],!c))},a.createElement("label",{className:W.a["timer-setup__label"]},"Work [min]",a.createElement(N,{"data-testid":"work-time-input",className:W.a.timer__input,initialValue:t.workTime/60,onChange:n})),a.createElement("label",{className:W.a["timer-setup__label"]},"Short break [min]",a.createElement(N,{"data-testid":"short-break-time-input",className:W.a.timer__input,initialValue:t.shortBreakTime/60,onChange:o})),a.createElement("label",{className:W.a["timer-setup__label"]},"Long break [min]",a.createElement(N,{"data-testid":"long-break-time-input",className:W.a.timer__input,initialValue:t.longBreakTime/60,onChange:r})))},L=n(13),I=n.n(L),A=n(14),M=n.n(A),K=n(15),F=n.n(K),G=n(6),J=n.n(G);!function(e){e[e.Work=0]="Work",e[e.Break=1]="Break",e[e.LongBreak=2]="LongBreak"}(C||(C={}));var U=function(e){switch(e){case C.Break:return M.a;case C.LongBreak:return F.a;case C.Work:return I.a}},V=function(e){var t,n=e.hidden,o=e.state,r=a.useState(!1),i=Object(g.a)(r,2),c=i[0],s=i[1],u=a.useState(o),_=Object(g.a)(u,2),f=_[0],k=_[1];return a.useEffect((function(){s(!0);var e=setTimeout((function(){k(o)}),300),t=setTimeout((function(){s(!1)}),1e3);return function(){clearInterval(e),clearInterval(t)}}),[o]),a.createElement("img",{className:l()(J.a.totoro,(t={},Object(m.a)(t,J.a["totoro--hidden"],n),Object(m.a)(t,J.a["totoro--changing"],c),Object(m.a)(t,J.a["totoro--work"],f===C.Work),Object(m.a)(t,J.a["totoro--break"],f===C.Break),Object(m.a)(t,J.a["totoro--long-break"],f===C.LongBreak),t)),src:U(f)})},D=function(){var e=v(),t=e.timerConfiguration,n=e.onWorkTimeChange,o=e.onShortBreakTimeChange,r=e.onLongBreakTimeChange,i=O([t.workTime,t.shortBreakTime,t.workTime,t.longBreakTime]),c=i.current,l=i.next,s=i.restart,u=p(c),m=u.currentTime,f=u.toggle,k=u.reset,g=u.isFinished,d=u.isOn;a.useEffect((function(){g&&(l(),f())}),[g,l,f]);var b=a.useCallback((function(e){e.preventDefault(),d?(k(),s()):f()}),[f,k,s,d]),T=a.useCallback((function(e){switch(e){case t.workTime:return C.Work;case t.shortBreakTime:return C.Break;case t.longBreakTime:return C.LongBreak;default:throw new Error("Initial time is not equal any of 3 stages")}}),[t.longBreakTime,t.shortBreakTime,t.workTime]);return a.createElement("div",{className:E.a.timer},a.createElement(h,{timeLeft:m,initialTime:c,isRunning:d},a.createElement(V,{hidden:!d,state:T(c)})),a.createElement(R,{timerConfiguration:t,onWorkTimeChange:n,onShortBreakTimeChange:o,onLongBreakTimeChange:r,visible:!d}),a.createElement(_,{className:E.a.timer__button,onClick:b},d?"RESET":"START"))},P=n(16),q=n.n(P);var z=function(){return o.a.createElement("div",{className:q.a.app},o.a.createElement(D,null))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(22);i.a.render(o.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pototoro",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pototoro","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(t,e)}))}}()}],[[17,1,2]]]);
//# sourceMappingURL=main.c6645bc1.chunk.js.map