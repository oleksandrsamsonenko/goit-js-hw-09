!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.style.cssText+="\n    padding: 25px 50px;\n    position: absolute;\n    top: 50vh;\n    left: 50vw;\n    transform: translate(-105%, -50%);\n    text-transform: uppercase;\n",n.setAttribute("disabled",""),n.style.cssText+="\n    padding: 25px 50px;\n    position: absolute;\n    top: 50vh;\n    left: 50vw;\n    transform: translate(5%, -50%);\n    text-transform: uppercase;\n",e.addEventListener("click",(function(){console.log("background color change interval settled to 1000ms"),e.setAttribute("disabled",""),n.removeAttribute("disabled"),t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16));var t=new Date;console.log("color changed to -> ".concat(document.body.style.backgroundColor," at ").concat(t.toLocaleTimeString()))}),1e3)})),n.addEventListener("click",(function(){console.log("background color change interval is cleared"),n.setAttribute("disabled",""),e.removeAttribute("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.6ab70efe.js.map
