!function(){"use strict";var e={762:function(e,t,n){var i=n(154),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px "Courier";\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#food {\n  width: 10px;\n  height: 10px;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  left: 40px;\n  top: 100px;\n}\n#food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#score-panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n',""]),t.Z=o},154:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},574:function(e,t,n){var i,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],d=n[l]||0,c="".concat(l," ").concat(d);n[l]=d+1;var h=r(c),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(s[h].references++,s[h].updater(f)):s.push({identifier:c,updater:b(f,t),references:1}),i.push(c)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var s=n.nc;s&&(i.nonce=s)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,c=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function f(e,t,n){var i=n.css,o=n.media,s=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,p=0;function b(e,t){var n,i,o;if(t.singleton){var s=p++;n=u||(u=l(t)),i=h.bind(null,n,s,!1),o=h.bind(null,n,s,!0)}else n=l(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=r(n[i]);s[o].references--}for(var l=a(e,t),d=0;d<n.length;d++){var c=r(n[d]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}n=l}}}}},t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(574),t=n.n(e),i=n(762);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;new class{constructor(){this.direction="",this.isLive=!0,this.snake=new class{constructor(){this.head=document.querySelector("#snake > div"),this.element=document.getElementById("snake"),this.bodies=this.element.children}get X(){return this.head.offsetLeft}get Y(){return this.head.offsetTop}set X(e){if(this.X!==e){if(e<0||e>290)throw new Error("蛇撞墙了！");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(e=e>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=e+"px",this.isCollision()}}set Y(e){if(this.Y!==e){if(e<0||e>290)throw new Error("蛇撞墙了！");this.bodies[1]&&this.bodies[1].offsetTop===e&&(e=e>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=e+"px",this.isCollision()}}addBody(){this.element.insertAdjacentHTML("beforeend","<div></div>")}moveBody(){for(let e=this.bodies.length-1;e>0;e--){let t=this.bodies[e-1].offsetLeft,n=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=n+"px"}}isCollision(){for(let e=1;e<this.bodies.length;e++){let t=this.bodies[e];if(this.X===t.offsetLeft&&this.Y===t.offsetTop)throw new Error("蛇撞到自己了！")}}},this.panel=new class{constructor(e=10,t=10){this.score=0,this.level=1,this.maxLevel=e,this.upScore=t,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level")}addScore(){this.score++,this.scoreEle.innerHTML=this.score+"",this.score%this.upScore==0&&this.levelUp()}levelUp(){this.level<this.maxLevel&&(this.level++,this.levelEle.innerHTML=this.level+"")}}(10,2),this.food=new class{constructor(){this.element=document.getElementById("food")}get X(){return this.element.offsetLeft}get Y(){return this.element.offsetTop}change(){let e=10*Math.round(29*Math.random()),t=10*Math.round(29*Math.random());this.element.style.left=`${e}px`,this.element.style.top=`${t}px`}},this.init()}init(){document.addEventListener("keydown",this.keydownHandler.bind(this)),this.run()}keydownHandler(e){this.direction=e.key}run(){let e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":t-=10;break;case"ArrowDown":t+=10;break;case"ArrowLeft":e-=10;break;case"ArrowRight":e+=10}this.isEat(e,t);try{this.snake.X=e,this.snake.Y=t}catch(e){alert(e.message),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),300-30*(this.panel.level-1))}isEat(e,t){e===this.food.X&&t===this.food.Y&&(this.food.change(),this.panel.addScore(),this.snake.addBody())}}}()}();