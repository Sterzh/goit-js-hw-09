const t=document.querySelector("button[data-start]");document.querySelector("button[data-stop]");let e=null;t.addEventListener("click",(function(){e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(){window.clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.4f265abb.js.map
