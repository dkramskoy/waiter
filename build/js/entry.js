"use strict";var _Controller=require("./controller/Controller.js"),WTR={};WTR.Controller=_Controller.controller,WTR.index={progressBar:document.getElementById("progressBar"),percentage:document.getElementById("progress-bar__percentage"),wrapper:document.getElementById("wrapper"),textContainer:document.getElementById("textContainer"),width:7.5},setTimeout(function(){WTR.index.textContainer.parentNode.classList.remove("initial")},250),setTimeout(function(){WTR.index.textContainer.parentNode.classList.add("loaded")},500),WTR.index.showProgress=function(e){var t=this;100<=this.width?(this.progressBar.style.width="100%",this.percentage.innerText="100",this.textContainer.parentNode.classList.add("completed"),setTimeout(function(){WTR.Controller.getSignInHTML()},1e3)):(this.progressBar.style.width=this.width+"%",this.percentage.innerText=this.width,this.width+=Math.floor(9*Math.random())+1,setTimeout(function(){t.showProgress(t.width)},Math.floor(50*Math.random())+50))},setTimeout(function(){return WTR.index.showProgress(WTR.index.width)},1500);