(this["webpackJsonpmy-react-google-login"]=this["webpackJsonpmy-react-google-login"]||[]).push([[0],[,,,,,function(e,o,n){e.exports=n(12)},,,,,function(e,o,n){},function(e,o,n){},function(e,o,n){"use strict";n.r(o);var t=n(0),a=n.n(t),c=n(3),r=n.n(c),l=(n(10),n(11),n(1)),i=n(4);var s=function(){return a.a.createElement("div",{className:"container"},a.a.createElement(l.a,{onSuccess:function(e){console.log("\ud83d\ude80 ~ Login ~ credentialResponse 2:",e);var o=Object(i.a)(e.credential);if(console.log("\ud83d\ude80 ~ Login ~ decoded:",o),["gslab.com","gmail.com"].includes(o.hd))return console.log("User authenticated with GSLab or Gmail"),window.location.href;var n=new URLSearchParams(e).toString();window.location.replace("http://172.25.12.211:8080/ruleeditor-0.0.1-SNAPSHOT?".concat(n))},onError:function(e){console.log("\ud83d\ude80 ~ Login ~ err:",e),console.log("Login Failed")}}),";")};var g=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.b,{clientId:"648085406021-vej5d1alfbq2l6eam25crr1tg6eh5h9r.apps.googleusercontent.com"},a.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a2b8455b.chunk.js.map