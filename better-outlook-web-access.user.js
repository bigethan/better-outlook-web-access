// ==UserScript==
// @name           Outlook Web Enhancer
// @namespace      http://github.com/bigethan
// @description    Enhances the Outlook Web Interface
// @include        https://path.to.your.owa/Interface/*
// ==/UserScript==

//only run on the pages with messages:
if ( window.location.search.search(/Cmd=(contents|open|new|navbar)/) == -1 ) {

	return;

}

//MooTools, My Object Oriented Javascript Tools. Copyright (c) 2006-2007 Valerio Proietti, <http://mad4milk.net>, MIT Style License.

var MooTools={version:"1.11"};function $defined(A){return(A!=undefined);}function $type(B){if(!$defined(B)){return false;}if(B.htmlElement){return"element";
}var A=typeof B;if(A=="object"&&B.nodeName){switch(B.nodeType){case 1:return"element";case 3:return(/\S/).test(B.nodeValue)?"textnode":"whitespace";}}if(A=="object"||A=="function"){switch(B.constructor){case Array:return"array";
case RegExp:return"regexp";case Class:return"class";}if(typeof B.length=="number"){if(B.item){return"collection";}if(B.callee){return"arguments";}}}return A;
}function $merge(){var C={};for(var B=0;B<arguments.length;B++){for(var E in arguments[B]){var A=arguments[B][E];var D=C[E];if(D&&$type(A)=="object"&&$type(D)=="object"){C[E]=$merge(D,A);
}else{C[E]=A;}}}return C;}var $extend=function(){var A=arguments;if(!A[1]){A=[this,A[0]];}for(var B in A[1]){A[0][B]=A[1][B];}return A[0];};var $native=function(){for(var B=0,A=arguments.length;
B<A;B++){arguments[B].extend=function(C){for(var D in C){if(!this.prototype[D]){this.prototype[D]=C[D];}if(!this[D]){this[D]=$native.generic(D);}}};}};
$native.generic=function(A){return function(B){return this.prototype[A].apply(B,Array.prototype.slice.call(arguments,1));};};$native(Function,Array,String,Number);
function $chk(A){return !!(A||A===0);}function $pick(B,A){return $defined(B)?B:A;}function $random(B,A){return Math.floor(Math.random()*(A-B+1)+B);}function $time(){return new Date().getTime();
}function $clear(A){clearTimeout(A);clearInterval(A);return null;}var Abstract=function(A){A=A||{};A.extend=$extend;return A;};var Window=new Abstract(window);
var Document=new Abstract(document);document.head=document.getElementsByTagName("head")[0];window.xpath=!!(document.evaluate);if(window.ActiveXObject){window.ie=window[window.XMLHttpRequest?"ie7":"ie6"]=true;
}else{if(document.childNodes&&!document.all&&!navigator.taintEnabled){window.webkit=window[window.xpath?"webkit420":"webkit419"]=true;}else{if(document.getBoxObjectFor!=null){window.gecko=true;
}}}window.khtml=window.webkit;Object.extend=$extend;if(typeof HTMLElement=="undefined"){var HTMLElement=function(){};if(window.webkit){document.createElement("iframe");
}HTMLElement.prototype=(window.webkit)?window["[[DOMElement.prototype]]"]:{};}HTMLElement.prototype.htmlElement=function(){};if(window.ie6){try{document.execCommand("BackgroundImageCache",false,true);
}catch(e){}}var Class=function(B){var A=function(){return(arguments[0]!==null&&this.initialize&&$type(this.initialize)=="function")?this.initialize.apply(this,arguments):this;
};$extend(A,this);A.prototype=B;A.constructor=Class;return A;};Class.empty=function(){};Class.prototype={extend:function(B){var C=new this(null);for(var D in B){var A=C[D];
C[D]=Class.Merge(A,B[D]);}return new Class(C);},implement:function(){for(var B=0,A=arguments.length;B<A;B++){$extend(this.prototype,arguments[B]);}}};Class.Merge=function(C,D){if(C&&C!=D){var B=$type(D);
if(B!=$type(C)){return D;}switch(B){case"function":var A=function(){this.parent=arguments.callee.parent;return D.apply(this,arguments);};A.parent=C;return A;
case"object":return $merge(C,D);}}return D;};var Chain=new Class({chain:function(A){this.chains=this.chains||[];this.chains.push(A);return this;},callChain:function(){if(this.chains&&this.chains.length){this.chains.shift().delay(10,this);
}},clearChain:function(){this.chains=[];}});var Events=new Class({addEvent:function(B,A){if(A!=Class.empty){this.$events=this.$events||{};this.$events[B]=this.$events[B]||[];
this.$events[B].include(A);}return this;},fireEvent:function(C,B,A){if(this.$events&&this.$events[C]){this.$events[C].each(function(D){D.create({"bind":this,"delay":A,"arguments":B})();
},this);}return this;},removeEvent:function(B,A){if(this.$events&&this.$events[B]){this.$events[B].remove(A);}return this;}});var Options=new Class({setOptions:function(){this.options=$merge.apply(null,[this.options].extend(arguments));
if(this.addEvent){for(var A in this.options){if($type(this.options[A]=="function")&&(/^on[A-Z]/).test(A)){this.addEvent(A,this.options[A]);}}}return this;
}});Array.extend({forEach:function(C,D){for(var B=0,A=this.length;B<A;B++){C.call(D,this[B],B,this);}},filter:function(D,E){var C=[];for(var B=0,A=this.length;
B<A;B++){if(D.call(E,this[B],B,this)){C.push(this[B]);}}return C;},map:function(D,E){var C=[];for(var B=0,A=this.length;B<A;B++){C[B]=D.call(E,this[B],B,this);
}return C;},every:function(C,D){for(var B=0,A=this.length;B<A;B++){if(!C.call(D,this[B],B,this)){return false;}}return true;},some:function(C,D){for(var B=0,A=this.length;
B<A;B++){if(C.call(D,this[B],B,this)){return true;}}return false;},indexOf:function(C,D){var A=this.length;for(var B=(D<0)?Math.max(0,A+D):D||0;B<A;B++){if(this[B]===C){return B;
}}return -1;},copy:function(D,C){D=D||0;if(D<0){D=this.length+D;}C=C||(this.length-D);var A=[];for(var B=0;B<C;B++){A[B]=this[D++];}return A;},remove:function(C){var B=0;
var A=this.length;while(B<A){if(this[B]===C){this.splice(B,1);A--;}else{B++;}}return this;},contains:function(A,B){return this.indexOf(A,B)!=-1;},associate:function(C){var D={},B=Math.min(this.length,C.length);
for(var A=0;A<B;A++){D[C[A]]=this[A];}return D;},extend:function(C){for(var B=0,A=C.length;B<A;B++){this.push(C[B]);}return this;},merge:function(C){for(var B=0,A=C.length;
B<A;B++){this.include(C[B]);}return this;},include:function(A){if(!this.contains(A)){this.push(A);}return this;},getRandom:function(){return this[$random(0,this.length-1)]||null;
},getLast:function(){return this[this.length-1]||null;}});Array.prototype.each=Array.prototype.forEach;Array.each=Array.forEach;function $A(A){return Array.copy(A);
}function $each(C,B,D){if(C&&typeof C.length=="number"&&$type(C)!="object"){Array.forEach(C,B,D);}else{for(var A in C){B.call(D||C,C[A],A);}}}Array.prototype.test=Array.prototype.contains;
String.extend({test:function(A,B){return(($type(A)=="string")?new RegExp(A,B):A).test(this);},toInt:function(){return parseInt(this,10);},toFloat:function(){return parseFloat(this);
},camelCase:function(){return this.replace(/-\D/g,function(A){return A.charAt(1).toUpperCase();});},hyphenate:function(){return this.replace(/\w[A-Z]/g,function(A){return(A.charAt(0)+"-"+A.charAt(1).toLowerCase());
});},capitalize:function(){return this.replace(/\b[a-z]/g,function(A){return A.toUpperCase();});},trim:function(){return this.replace(/^\s+|\s+$/g,"");
},clean:function(){return this.replace(/\s{2,}/g," ").trim();},rgbToHex:function(B){var A=this.match(/\d{1,3}/g);return(A)?A.rgbToHex(B):false;},hexToRgb:function(B){var A=this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
return(A)?A.slice(1).hexToRgb(B):false;},contains:function(A,B){return(B)?(B+this+B).indexOf(B+A+B)>-1:this.indexOf(A)>-1;},escapeRegExp:function(){return this.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1");
}});Array.extend({rgbToHex:function(D){if(this.length<3){return false;}if(this.length==4&&this[3]==0&&!D){return"transparent";}var B=[];for(var A=0;A<3;
A++){var C=(this[A]-0).toString(16);B.push((C.length==1)?"0"+C:C);}return D?B:"#"+B.join("");},hexToRgb:function(C){if(this.length!=3){return false;}var A=[];
for(var B=0;B<3;B++){A.push(parseInt((this[B].length==1)?this[B]+this[B]:this[B],16));}return C?A:"rgb("+A.join(",")+")";}});Function.extend({create:function(A){var B=this;
A=$merge({"bind":B,"event":false,"arguments":null,"delay":false,"periodical":false,"attempt":false},A);if($chk(A.arguments)&&$type(A.arguments)!="array"){A.arguments=[A.arguments];
}return function(E){var C;if(A.event){E=E||window.event;C=[(A.event===true)?E:new A.event(E)];if(A.arguments){C.extend(A.arguments);}}else{C=A.arguments||arguments;
}var F=function(){return B.apply($pick(A.bind,B),C);};if(A.delay){return setTimeout(F,A.delay);}if(A.periodical){return setInterval(F,A.periodical);}if(A.attempt){try{return F();
}catch(D){return false;}}return F();};},pass:function(A,B){return this.create({"arguments":A,"bind":B});},attempt:function(A,B){return this.create({"arguments":A,"bind":B,"attempt":true})();
},bind:function(B,A){return this.create({"bind":B,"arguments":A});},bindAsEventListener:function(B,A){return this.create({"bind":B,"event":true,"arguments":A});
},delay:function(B,C,A){return this.create({"delay":B,"bind":C,"arguments":A})();},periodical:function(A,C,B){return this.create({"periodical":A,"bind":C,"arguments":B})();
}});Number.extend({toInt:function(){return parseInt(this);},toFloat:function(){return parseFloat(this);},limit:function(B,A){return Math.min(A,Math.max(B,this));
},round:function(A){A=Math.pow(10,A||0);return Math.round(this*A)/A;},times:function(B){for(var A=0;A<this;A++){B(A);}}});var Element=new Class({initialize:function(D,C){if($type(D)=="string"){if(window.ie&&C&&(C.name||C.type)){var A=(C.name)?' name="'+C.name+'"':"";
var B=(C.type)?' type="'+C.type+'"':"";delete C.name;delete C.type;D="<"+D+A+B+">";}D=document.createElement(D);}D=$(D);return(!C||!D)?D:D.set(C);}});var Elements=new Class({initialize:function(A){return(A)?$extend(A,this):this;
}});Elements.extend=function(A){for(var B in A){this.prototype[B]=A[B];this[B]=$native.generic(B);}};function $(B){if(!B){return null;}if(B.htmlElement){return Garbage.collect(B);
}if([window,document].contains(B)){return B;}var A=$type(B);if(A=="string"){B=document.getElementById(B);A=(B)?"element":false;}if(A!="element"){return null;
}if(B.htmlElement){return Garbage.collect(B);}if(["object","embed"].contains(B.tagName.toLowerCase())){return B;}$extend(B,Element.prototype);B.htmlElement=function(){};
return Garbage.collect(B);}document.getElementsBySelector=document.getElementsByTagName;function $$(){var D=[];for(var C=0,B=arguments.length;C<B;C++){var A=arguments[C];
switch($type(A)){case"element":D.push(A);case"boolean":break;case false:break;case"string":A=document.getElementsBySelector(A,true);default:D.extend(A);
}}return $$.unique(D);}$$.unique=function(G){var D=[];for(var C=0,A=G.length;C<A;C++){if(G[C].$included){continue;}var B=$(G[C]);if(B&&!B.$included){B.$included=true;
D.push(B);}}for(var F=0,E=D.length;F<E;F++){D[F].$included=null;}return new Elements(D);};Elements.Multi=function(A){return function(){var D=arguments;
var B=[];var G=true;for(var E=0,C=this.length,F;E<C;E++){F=this[E][A].apply(this[E],D);if($type(F)!="element"){G=false;}B.push(F);}return(G)?$$.unique(B):B;
};};Element.extend=function(A){for(var B in A){HTMLElement.prototype[B]=A[B];Element.prototype[B]=A[B];Element[B]=$native.generic(B);var C=(Array.prototype[B])?B+"Elements":B;
Elements.prototype[C]=Elements.Multi(B);}};Element.extend({set:function(A){for(var C in A){var B=A[C];switch(C){case"styles":this.setStyles(B);break;case"events":if(this.addEvents){this.addEvents(B);
}break;case"properties":this.setProperties(B);break;default:this.setProperty(C,B);}}return this;},inject:function(C,A){C=$(C);switch(A){case"before":C.parentNode.insertBefore(this,C);
break;case"after":var B=C.getNext();if(!B){C.parentNode.appendChild(this);}else{C.parentNode.insertBefore(this,B);}break;case"top":var D=C.firstChild;if(D){C.insertBefore(this,D);
break;}default:C.appendChild(this);}return this;},injectBefore:function(A){return this.inject(A,"before");},injectAfter:function(A){return this.inject(A,"after");
},injectInside:function(A){return this.inject(A,"bottom");},injectTop:function(A){return this.inject(A,"top");},adopt:function(){var A=[];$each(arguments,function(B){A=A.concat(B);
});$$(A).inject(this);return this;},remove:function(){return this.parentNode.removeChild(this);},clone:function(C){var B=$(this.cloneNode(C!==false));if(!B.$events){return B;
}B.$events={};for(var A in this.$events){B.$events[A]={"keys":$A(this.$events[A].keys),"values":$A(this.$events[A].values)};}return B.removeEvents();},replaceWith:function(A){A=$(A);
this.parentNode.replaceChild(A,this);return A;},appendText:function(A){this.appendChild(document.createTextNode(A));return this;},hasClass:function(A){return this.className.contains(A," ");
},addClass:function(A){if(!this.hasClass(A)){this.className=(this.className+" "+A).clean();}return this;},removeClass:function(A){this.className=this.className.replace(new RegExp("(^|\\s)"+A+"(?:\\s|$)"),"$1").clean();
return this;},toggleClass:function(A){return this.hasClass(A)?this.removeClass(A):this.addClass(A);},setStyle:function(B,A){switch(B){case"opacity":return this.setOpacity(parseFloat(A));
case"float":B=(window.ie)?"styleFloat":"cssFloat";}B=B.camelCase();switch($type(A)){case"number":if(!["zIndex","zoom"].contains(B)){A+="px";}break;case"array":A="rgb("+A.join(",")+")";
}this.style[B]=A;return this;},setStyles:function(A){switch($type(A)){case"object":Element.setMany(this,"setStyle",A);break;case"string":this.style.cssText=A;
}return this;},setOpacity:function(A){if(A==0){if(this.style.visibility!="hidden"){this.style.visibility="hidden";}}else{if(this.style.visibility!="visible"){this.style.visibility="visible";
}}if(!this.currentStyle||!this.currentStyle.hasLayout){this.style.zoom=1;}if(window.ie){this.style.filter=(A==1)?"":"alpha(opacity="+A*100+")";}this.style.opacity=this.$tmp.opacity=A;
return this;},getStyle:function(C){C=C.camelCase();var A=this.style[C];if(!$chk(A)){if(C=="opacity"){return this.$tmp.opacity;}A=[];for(var B in Element.Styles){if(C==B){Element.Styles[B].each(function(F){var E=this.getStyle(F);
A.push(parseInt(E)?E:"0px");},this);if(C=="border"){var D=A.every(function(E){return(E==A[0]);});return(D)?A[0]:false;}return A.join(" ");}}if(C.contains("border")){if(Element.Styles.border.contains(C)){return["Width","Style","Color"].map(function(E){return this.getStyle(C+E);
},this).join(" ");}else{if(Element.borderShort.contains(C)){return["Top","Right","Bottom","Left"].map(function(E){return this.getStyle("border"+E+C.replace("border",""));
},this).join(" ");}}}if(document.defaultView){A=document.defaultView.getComputedStyle(this,null).getPropertyValue(C.hyphenate());}else{if(this.currentStyle){A=this.currentStyle[C];
}}}if(window.ie){A=Element.fixStyle(C,A,this);}if(A&&C.test(/color/i)&&A.contains("rgb")){return A.split("rgb").splice(1,4).map(function(E){return E.rgbToHex();
}).join(" ");}return A;},getStyles:function(){return Element.getMany(this,"getStyle",arguments);},walk:function(A,C){A+="Sibling";var B=(C)?this[C]:this[A];
while(B&&$type(B)!="element"){B=B[A];}return $(B);},getPrevious:function(){return this.walk("previous");},getNext:function(){return this.walk("next");},getFirst:function(){return this.walk("next","firstChild");
},getLast:function(){return this.walk("previous","lastChild");},getParent:function(){return $(this.parentNode);},getChildren:function(){return $$(this.childNodes);
},hasChild:function(A){return !!$A(this.getElementsByTagName("*")).contains(A);},getProperty:function(D){var B=Element.Properties[D];if(B){return this[B];
}var A=Element.PropertiesIFlag[D]||0;if(!window.ie||A){return this.getAttribute(D,A);}var C=this.attributes[D];return(C)?C.nodeValue:null;},removeProperty:function(B){var A=Element.Properties[B];
if(A){this[A]="";}else{this.removeAttribute(B);}return this;},getProperties:function(){return Element.getMany(this,"getProperty",arguments);},setProperty:function(C,B){var A=Element.Properties[C];
if(A){this[A]=B;}else{this.setAttribute(C,B);}return this;},setProperties:function(A){return Element.setMany(this,"setProperty",A);},setHTML:function(){this.innerHTML=$A(arguments).join("");
return this;},setText:function(B){var A=this.getTag();if(["style","script"].contains(A)){if(window.ie){if(A=="style"){this.styleSheet.cssText=B;}else{if(A=="script"){this.setProperty("text",B);
}}return this;}else{this.removeChild(this.firstChild);return this.appendText(B);}}this[$defined(this.innerText)?"innerText":"textContent"]=B;return this;
},getText:function(){var A=this.getTag();if(["style","script"].contains(A)){if(window.ie){if(A=="style"){return this.styleSheet.cssText;}else{if(A=="script"){return this.getProperty("text");
}}}else{return this.innerHTML;}}return($pick(this.innerText,this.textContent));},getTag:function(){return this.tagName.toLowerCase();},empty:function(){Garbage.trash(this.getElementsByTagName("*"));
return this.setHTML("");}});Element.fixStyle=function(E,A,D){if($chk(parseInt(A))){return A;}if(["height","width"].contains(E)){var B=(E=="width")?["left","right"]:["top","bottom"];
var C=0;B.each(function(F){C+=D.getStyle("border-"+F+"-width").toInt()+D.getStyle("padding-"+F).toInt();});return D["offset"+E.capitalize()]-C+"px";}else{if(E.test(/border(.+)Width|margin|padding/)){return"0px";
}}return A;};Element.Styles={"border":[],"padding":[],"margin":[]};["Top","Right","Bottom","Left"].each(function(B){for(var A in Element.Styles){Element.Styles[A].push(A+B);
}});Element.borderShort=["borderWidth","borderStyle","borderColor"];Element.getMany=function(B,D,C){var A={};$each(C,function(E){A[E]=B[D](E);});return A;
};Element.setMany=function(B,D,C){for(var A in C){B[D](A,C[A]);}return B;};Element.Properties=new Abstract({"class":"className","for":"htmlFor","colspan":"colSpan","rowspan":"rowSpan","accesskey":"accessKey","tabindex":"tabIndex","maxlength":"maxLength","readonly":"readOnly","frameborder":"frameBorder","value":"value","disabled":"disabled","checked":"checked","multiple":"multiple","selected":"selected"});
Element.PropertiesIFlag={"href":2,"src":2};Element.Methods={Listeners:{addListener:function(B,A){if(this.addEventListener){this.addEventListener(B,A,false);
}else{this.attachEvent("on"+B,A);}return this;},removeListener:function(B,A){if(this.removeEventListener){this.removeEventListener(B,A,false);}else{this.detachEvent("on"+B,A);
}return this;}}};window.extend(Element.Methods.Listeners);document.extend(Element.Methods.Listeners);Element.extend(Element.Methods.Listeners);var Garbage={elements:[],collect:function(A){if(!A.$tmp){Garbage.elements.push(A);
A.$tmp={"opacity":1};}return A;},trash:function(D){for(var B=0,A=D.length,C;B<A;B++){if(!(C=D[B])||!C.$tmp){continue;}if(C.$events){C.fireEvent("trash").removeEvents();
}for(var E in C.$tmp){C.$tmp[E]=null;}for(var F in Element.prototype){C[F]=null;}Garbage.elements[Garbage.elements.indexOf(C)]=null;C.htmlElement=C.$tmp=C=null;
}Garbage.elements.remove(null);},empty:function(){Garbage.collect(window);Garbage.collect(document);Garbage.trash(Garbage.elements);}};window.addListener("beforeunload",function(){window.addListener("unload",Garbage.empty);
if(window.ie){window.addListener("unload",CollectGarbage);}});var Event=new Class({initialize:function(C){if(C&&C.$extended){return C;}this.$extended=true;
C=C||window.event;this.event=C;this.type=C.type;this.target=C.target||C.srcElement;if(this.target.nodeType==3){this.target=this.target.parentNode;}this.shift=C.shiftKey;
this.control=C.ctrlKey;this.alt=C.altKey;this.meta=C.metaKey;if(["DOMMouseScroll","mousewheel"].contains(this.type)){this.wheel=(C.wheelDelta)?C.wheelDelta/120:-(C.detail||0)/3;
}else{if(this.type.contains("key")){this.code=C.which||C.keyCode;for(var B in Event.keys){if(Event.keys[B]==this.code){this.key=B;break;}}if(this.type=="keydown"){var A=this.code-111;
if(A>0&&A<13){this.key="f"+A;}}this.key=this.key||String.fromCharCode(this.code).toLowerCase();}else{if(this.type.test(/(click|mouse|menu)/)){this.page={"x":C.pageX||C.clientX+document.documentElement.scrollLeft,"y":C.pageY||C.clientY+document.documentElement.scrollTop};
this.client={"x":C.pageX?C.pageX-window.pageXOffset:C.clientX,"y":C.pageY?C.pageY-window.pageYOffset:C.clientY};this.rightClick=(C.which==3)||(C.button==2);
switch(this.type){case"mouseover":this.relatedTarget=C.relatedTarget||C.fromElement;break;case"mouseout":this.relatedTarget=C.relatedTarget||C.toElement;
}this.fixRelatedTarget();}}}return this;},stop:function(){return this.stopPropagation().preventDefault();},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation();
}else{this.event.cancelBubble=true;}return this;},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault();}else{this.event.returnValue=false;
}return this;}});Event.fix={relatedTarget:function(){if(this.relatedTarget&&this.relatedTarget.nodeType==3){this.relatedTarget=this.relatedTarget.parentNode;
}},relatedTargetGecko:function(){try{Event.fix.relatedTarget.call(this);}catch(A){this.relatedTarget=this.target;}}};Event.prototype.fixRelatedTarget=(window.gecko)?Event.fix.relatedTargetGecko:Event.fix.relatedTarget;
Event.keys=new Abstract({"enter":13,"up":38,"down":40,"left":37,"right":39,"esc":27,"space":32,"backspace":8,"tab":9,"delete":46});Element.Methods.Events={addEvent:function(C,B){this.$events=this.$events||{};
this.$events[C]=this.$events[C]||{"keys":[],"values":[]};if(this.$events[C].keys.contains(B)){return this;}this.$events[C].keys.push(B);var A=C;var D=Element.Events[C];
if(D){if(D.add){D.add.call(this,B);}if(D.map){B=D.map;}if(D.type){A=D.type;}}if(!this.addEventListener){B=B.create({"bind":this,"event":true});}this.$events[C].values.push(B);
return(Element.NativeEvents.contains(A))?this.addListener(A,B):this;},removeEvent:function(C,B){if(!this.$events||!this.$events[C]){return this;}var F=this.$events[C].keys.indexOf(B);
if(F==-1){return this;}var A=this.$events[C].keys.splice(F,1)[0];var E=this.$events[C].values.splice(F,1)[0];var D=Element.Events[C];if(D){if(D.remove){D.remove.call(this,B);
}if(D.type){C=D.type;}}return(Element.NativeEvents.contains(C))?this.removeListener(C,E):this;},addEvents:function(A){return Element.setMany(this,"addEvent",A);
},removeEvents:function(A){if(!this.$events){return this;}if(!A){for(var B in this.$events){this.removeEvents(B);}this.$events=null;}else{if(this.$events[A]){this.$events[A].keys.each(function(C){this.removeEvent(A,C);
},this);this.$events[A]=null;}}return this;},fireEvent:function(C,B,A){if(this.$events&&this.$events[C]){this.$events[C].keys.each(function(D){D.create({"bind":this,"delay":A,"arguments":B})();
},this);}return this;},cloneEvents:function(C,A){if(!C.$events){return this;}if(!A){for(var B in C.$events){this.cloneEvents(C,B);}}else{if(C.$events[A]){C.$events[A].keys.each(function(D){this.addEvent(A,D);
},this);}}return this;}};window.extend(Element.Methods.Events);document.extend(Element.Methods.Events);Element.extend(Element.Methods.Events);Element.Events=new Abstract({"mouseenter":{type:"mouseover",map:function(A){A=new Event(A);
if(A.relatedTarget!=this&&!this.hasChild(A.relatedTarget)){this.fireEvent("mouseenter",A);}}},"mouseleave":{type:"mouseout",map:function(A){A=new Event(A);
if(A.relatedTarget!=this&&!this.hasChild(A.relatedTarget)){this.fireEvent("mouseleave",A);}}},"mousewheel":{type:(window.gecko)?"DOMMouseScroll":"mousewheel"}});
Element.NativeEvents=["click","dblclick","mouseup","mousedown","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","keydown","keypress","keyup","load","unload","beforeunload","resize","move","focus","blur","change","submit","reset","select","error","abort","contextmenu","scroll"];
Function.extend({bindWithEvent:function(B,A){return this.create({"bind":B,"arguments":A,"event":Event});}});Elements.extend({filterByTag:function(A){return new Elements(this.filter(function(B){return(Element.getTag(B)==A);
}));},filterByClass:function(A,C){var B=this.filter(function(D){return(D.className&&D.className.contains(A," "));});return(C)?B:new Elements(B);},filterById:function(C,B){var A=this.filter(function(D){return(D.id==C);
});return(B)?A:new Elements(A);},filterByAttribute:function(B,A,D,E){var C=this.filter(function(F){var G=Element.getProperty(F,B);if(!G){return false;}if(!A){return true;
}switch(A){case"=":return(G==D);case"*=":return(G.contains(D));case"^=":return(G.substr(0,D.length)==D);case"$=":return(G.substr(G.length-D.length)==D);
case"!=":return(G!=D);case"~=":return G.contains(D," ");}return false;});return(E)?C:new Elements(C);}});function $E(A,B){return($(B)||document).getElement(A);
}function $ES(A,B){return($(B)||document).getElementsBySelector(A);}$$.shared={"regexp":/^(\w*|\*)(?:#([\w-]+)|\.([\w-]+))?(?:\[(\w+)(?:([!*^$]?=)["']?([^"'\]]*)["']?)?])?$/,"xpath":{getParam:function(B,D,E,C){var A=[D.namespaceURI?"xhtml:":"",E[1]];
if(E[2]){A.push('[@id="',E[2],'"]');}if(E[3]){A.push('[contains(concat(" ", @class, " "), " ',E[3],' ")]');}if(E[4]){if(E[5]&&E[6]){switch(E[5]){case"*=":A.push("[contains(@",E[4],', "',E[6],'")]');
break;case"^=":A.push("[starts-with(@",E[4],', "',E[6],'")]');break;case"$=":A.push("[substring(@",E[4],", string-length(@",E[4],") - ",E[6].length,' + 1) = "',E[6],'"]');
break;case"=":A.push("[@",E[4],'="',E[6],'"]');break;case"!=":A.push("[@",E[4],'!="',E[6],'"]');}}else{A.push("[@",E[4],"]");}}B.push(A.join(""));return B;
},getItems:function(B,E,G){var F=[];var A=document.evaluate(".//"+B.join("//"),E,$$.shared.resolver,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);for(var D=0,C=A.snapshotLength;
D<C;D++){F.push(A.snapshotItem(D));}return(G)?F:new Elements(F.map($));}},"normal":{getParam:function(A,C,E,B){if(B==0){if(E[2]){var D=C.getElementById(E[2]);
if(!D||((E[1]!="*")&&(Element.getTag(D)!=E[1]))){return false;}A=[D];}else{A=$A(C.getElementsByTagName(E[1]));}}else{A=$$.shared.getElementsByTagName(A,E[1]);
if(E[2]){A=Elements.filterById(A,E[2],true);}}if(E[3]){A=Elements.filterByClass(A,E[3],true);}if(E[4]){A=Elements.filterByAttribute(A,E[4],E[5],E[6],true);
}return A;},getItems:function(A,B,C){return(C)?A:$$.unique(A);}},resolver:function(A){return(A=="xhtml")?"http://www.w3.org/1999/xhtml":false;},getElementsByTagName:function(D,C){var E=[];
for(var B=0,A=D.length;B<A;B++){E.extend(D[B].getElementsByTagName(C));}return E;}};$$.shared.method=(window.xpath)?"xpath":"normal";Element.Methods.Dom={getElements:function(A,H){var C=[];
A=A.trim().split(" ");for(var E=0,D=A.length;E<D;E++){var F=A[E];var G=F.match($$.shared.regexp);if(!G){break;}G[1]=G[1]||"*";var B=$$.shared[$$.shared.method].getParam(C,this,G,E);
if(!B){break;}C=B;}return $$.shared[$$.shared.method].getItems(C,this,H);},getElement:function(A){return $(this.getElements(A,true)[0]||false);},getElementsBySelector:function(A,E){var D=[];
A=A.split(",");for(var C=0,B=A.length;C<B;C++){D=D.concat(this.getElements(A[C],true));}return(E)?D:$$.unique(D);}};Element.extend({getElementById:function(C){var B=document.getElementById(C);
if(!B){return false;}for(var A=B.parentNode;A!=this;A=A.parentNode){if(!A){return false;}}return B;},getElementsByClassName:function(A){return this.getElements("."+A);
}});document.extend(Element.Methods.Dom);Element.extend(Element.Methods.Dom);Element.extend({getValue:function(){switch(this.getTag()){case"select":var A=[];
$each(this.options,function(B){if(B.selected){A.push($pick(B.value,B.text));}});return(this.multiple)?A:A[0];case"input":if(!(this.checked&&["checkbox","radio"].contains(this.type))&&!["hidden","text","password"].contains(this.type)){break;
}case"textarea":return this.value;}return false;},getFormElements:function(){return $$(this.getElementsByTagName("input"),this.getElementsByTagName("select"),this.getElementsByTagName("textarea"));
},toQueryString:function(){var A=[];this.getFormElements().each(function(D){var C=D.name;var E=D.getValue();if(E===false||!C||D.disabled){return ;}var B=function(F){A.push(C+"="+encodeURIComponent(F));
};if($type(E)=="array"){E.each(B);}else{B(E);}});return A.join("&");}});Element.extend({scrollTo:function(A,B){this.scrollLeft=A;this.scrollTop=B;},getSize:function(){return{"scroll":{"x":this.scrollLeft,"y":this.scrollTop},"size":{"x":this.offsetWidth,"y":this.offsetHeight},"scrollSize":{"x":this.scrollWidth,"y":this.scrollHeight}};
},getPosition:function(A){A=A||[];var B=this,D=0,C=0;do{D+=B.offsetLeft||0;C+=B.offsetTop||0;B=B.offsetParent;}while(B);A.each(function(E){D-=E.scrollLeft||0;
C-=E.scrollTop||0;});return{"x":D,"y":C};},getTop:function(A){return this.getPosition(A).y;},getLeft:function(A){return this.getPosition(A).x;},getCoordinates:function(B){var A=this.getPosition(B);
var C={"width":this.offsetWidth,"height":this.offsetHeight,"left":A.x,"top":A.y};C.right=C.left+C.width;C.bottom=C.top+C.height;return C;}});var XHR=new Class({options:{method:"post",async:true,onRequest:Class.empty,onSuccess:Class.empty,onFailure:Class.empty,urlEncoded:true,encoding:"utf-8",autoCancel:false,headers:{}},setTransport:function(){this.transport=(window.XMLHttpRequest)?new XMLHttpRequest():(window.ie?new ActiveXObject("Microsoft.XMLHTTP"):false);
return this;},initialize:function(A){this.setTransport().setOptions(A);this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.headers={};if(this.options.urlEncoded&&this.options.method=="post"){var B=(this.options.encoding)?"; charset="+this.options.encoding:"";
this.setHeader("Content-type","application/x-www-form-urlencoded"+B);}if(this.options.initialize){this.options.initialize.call(this);}},onStateChange:function(){if(this.transport.readyState!=4||!this.running){return ;
}this.running=false;var A=0;try{A=this.transport.status;}catch(B){}if(this.options.isSuccess.call(this,A)){this.onSuccess();}else{this.onFailure();}this.transport.onreadystatechange=Class.empty;
},isSuccess:function(A){return((A>=200)&&(A<300));},onSuccess:function(){this.response={"text":this.transport.responseText,"xml":this.transport.responseXML};
this.fireEvent("onSuccess",[this.response.text,this.response.xml]);this.callChain();},onFailure:function(){this.fireEvent("onFailure",this.transport);},setHeader:function(A,B){this.headers[A]=B;
return this;},send:function(A,C){if(this.options.autoCancel){this.cancel();}else{if(this.running){return this;}}this.running=true;if(C&&this.options.method=="get"){A=A+(A.contains("?")?"&":"?")+C;
C=null;}this.transport.open(this.options.method.toUpperCase(),A,this.options.async);this.transport.onreadystatechange=this.onStateChange.bind(this);if((this.options.method=="post")&&this.transport.overrideMimeType){this.setHeader("Connection","close");
}$extend(this.headers,this.options.headers);for(var B in this.headers){try{this.transport.setRequestHeader(B,this.headers[B]);}catch(D){}}this.fireEvent("onRequest");
this.transport.send($pick(C,null));return this;},cancel:function(){if(!this.running){return this;}this.running=false;this.transport.abort();this.transport.onreadystatechange=Class.empty;
this.setTransport();this.fireEvent("onCancel");return this;}});XHR.implement(new Chain,new Events,new Options);var Ajax=XHR.extend({options:{data:null,update:null,onComplete:Class.empty,evalScripts:false,evalResponse:false},initialize:function(B,A){this.addEvent("onSuccess",this.onComplete);
this.setOptions(A);this.options.data=this.options.data||this.options.postBody;if(!["post","get"].contains(this.options.method)){this._method="_method="+this.options.method;
this.options.method="post";}this.parent();this.setHeader("X-Requested-With","XMLHttpRequest");this.setHeader("Accept","text/javascript, text/html, application/xml, text/xml, */*");
this.url=B;},onComplete:function(){if(this.options.update){$(this.options.update).empty().setHTML(this.response.text);}if(this.options.evalScripts||this.options.evalResponse){this.evalScripts();
}this.fireEvent("onComplete",[this.response.text,this.response.xml],20);},request:function(A){A=A||this.options.data;switch($type(A)){case"element":A=$(A).toQueryString();
break;case"object":A=Object.toQueryString(A);}if(this._method){A=(A)?[this._method,A].join("&"):this._method;}return this.send(this.url,A);},evalScripts:function(){var B,A;
if(this.options.evalResponse||(/(ecma|java)script/).test(this.getHeader("Content-type"))){A=this.response.text;}else{A=[];var C=/<script[^>]*>([\s\S]*?)<\/script>/gi;
while((B=C.exec(this.response.text))){A.push(B[1]);}A=A.join("\n");}if(A){(window.execScript)?window.execScript(A):window.setTimeout(A,0);}},getHeader:function(A){try{return this.transport.getResponseHeader(A);
}catch(B){}return null;}});Object.toQueryString=function(B){var C=[];for(var A in B){C.push(encodeURIComponent(A)+"="+encodeURIComponent(B[A]));}return C.join("&");
};Element.extend({send:function(A){return new Ajax(this.getProperty("action"),$merge({data:this.toQueryString()},A,{method:"post"})).request();}});


/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}



console.time('page generated in');

var base_style = {
					'font-family' : 'Lucida Grande',
					'font-size' : '12px'};


//message display

if ( window.location.search.search(/Cmd=contents/) != -1 && window.location.href.search(/\/(Calendar|Journal|Contacts|Notes)/) == -1 ) {

	//vars
	var topic_list = false
	var sender_list = false
	var formatted_topic = {};
	var table_ref = new Object();
	var topic_index = 0;
	var message_index = 0;
	var tid = '';
	var hide = true;
	var unread_message_count = 0;

					
	var filter_topic_reg = /^-\sConversation\s:\s/;
	
	var check_for_subject = /[\w]/;

	if ( $E('select[name=ViewName]').getValue().search(/Conversation%20Topic/) != -1) {

		topic_list = true;

	} else if ( $E('select[name=ViewName]').getValue().search(/By%20Sender/) != -1 ) {

		topic_list = true;
		
		sender_list = true;
		
		var filter_topic_reg = /^-\sFrom\s:\s/;

	} else if ( $E('select[name=ViewName]').getValue().search(/By%20Subject/) != -1) {

		topic_list = true;
		
		sender_list = true;
		
		var filter_topic_reg = /^-\sSubject\s:\s/;

	}
	
	
	
	
	//////////// GLOBALS //////////////////
	window.toggle_topic_messages = function(t) {
	
		var t = t.substring(5);
	
		show_hide = (table_ref[t]['children'][0].getElement('td').getStyle('display') == 'none' ) ? 'table-cell' : 'none';
	
		table_ref[t]['children'].each( function( tr ) {
											tr.getElements('td').each( function(mess_td) {
																		mess_td.setStyle('display', show_hide); 
																		});
												//moved these here because they were slowing down the main processing
												if( formatted_topic[t] != 1 ) {
												
													tr.getElements('font').each( function(f) { f.setProperty('size',''); });
													tr.getElements('a').each( function(a) { 
																					a.setProperty('target', '_blank'); 
																					a.setProperty('href', a.getProperty('href') + '&reverse_arrows=1');
																				});
													
												}
												
										});
		formatted_topic[t] = 1;
	}
	
	window.toggle_message_checkboxes = function(t) {
			var t = t.id.substring(3);
	
			table_ref[t]['children'].each( function( tr ) {
											tr.getElements('input[type=checkbox]').each( function(mess_ck) {
																		mess_ck.checked = ( mess_ck.checked ) ? false: true; 
																		});
															});
	}
	

	
	///////////LOCALS///////////
	function process_topic() {

		//if it doesn't have children, kill it.
		if( table_ref[tid]['children'].length == 0 ) {
			
			table_ref[tid]['tr'].remove();
	
		
		} else if( table_ref[tid]['children'].length == 1 && !sender_list ) {
			
			table_ref[tid]['tr'].remove();
			
			table_ref[tid]['children'][0].getElements('td').each( function(td) { td.setStyles({'display':'table-cell', 'background-color': 'transparent'}) });
			table_ref[tid]['children'][0].getElements('font').each( function(f) { f.setProperty('size',''); });
			table_ref[tid]['children'][0].getElements('a').each( function(f) { f.setProperty('target', '_blank'); });
		
		} else {
	
		var plural = (table_ref[tid]['children'].length > 1 ) ? 's' : '';
				
		var unread = ( unread_message_count > 0 ) ? ', ' + unread_message_count + ' unread' : '';
		
		//create message count div
		var message_count = new Element('div', {
							'styles': {
								'float': 'right',
								'height' : '1.3em',
								'vertical-align' : 'middle',
								'margin-right' : '.5em'
							}
						
						});
		message_count.appendText(' [' + table_ref[tid]['children'].length + unread + ']');
					
		message_count.injectBefore(table_ref[tid]['link']);
		
					
		table_ref[tid]['link'].appendText(' - ' + table_ref[tid]['most_recent_from']);
		
		if( unread != '' ) {
		
			toggle_topic_messages( 'link_' + tid );
		
		}
		
	}

	}
	
	
	
	//get the message table
	$table = $E('table[class=tblView]').getElements('table').getLast();
	
	//make that motherflipp checkbox image work
	$E('img[src$=view-mark.gif]').addEvent('click' ,function(event){
			
			//get every checkbox on the page and toggle it.
			$table.getElements('input[type=checkbox]').each( function(all_ck) {
												all_ck.checked = ( all_ck.checked ) ? false: true; 
												});
			
		});
	
	$table.setProperty('cellpadding','0');
	
	$table.setStyles( base_style );
	
	//spool it up, yo
	$table.getElements('tr').each( function(tr) {

		if( ( tr.getElement('td[colspan=11]') || tr.getElement('td[colspan=9]') )  && topic_list  ) {
		
			//before we carry on, let's process the previous topic
			if( tid != '' ) {
			
				process_topic();
				
			
			}
			unread_message_count = 0;
			
			if( sender_list ) {
			
				ele = tr.getElement('td[colspan=9]');
			
			} else {
			
				ele = tr.getElement('td[colspan=11]');
			
			}
			
			title = ele.getText().replace(filter_topic_reg,'');
	
			if( title.search(check_for_subject) == -1 ) {
			
				title = '- No Subject -';
			
			}
	
	
			//the table ref object
			tid = b64_md5( title );
			
			
			//create the item to click upons
			var link = new Element('a', {
									'styles': {
										'display': 'block',
										'border-top': '1px solid #fff',
										'height' : '1.5em',
										'vertical-align' : 'middle',
										'background-color' : '#cddcf3'
									},
									'events': {
										'click': function(ce){
											ce = new Event(ce);
											toggle_topic_messages( this.id );
											ce.preventDefault();
										},
											
									},
									
									'href' : '#',
									'id' : 'link_' + tid
								
								});
			link.setText(title);
			
			//create the topic checkbox
			var checkbox = new Element('input', {
									'styles': {
										'display' : 'block',
										'float': 'left',
										'vertical-align' : 'middle',
										'margin-right' : '1em',
										'padding-right' : '.5em'
	
									},
									'events': {
										'click': function(){
											toggle_message_checkboxes( this );
	
										},
	
									},
									
									'type' : 'checkbox',
									'id' : 'cb_' + tid
								
								});
		
			
			ele.empty(); //disown?
			ele.adopt(checkbox);
			ele.adopt(link);
			ele.id = tid;
	
			//ele.setStyles( base_style );
			table_ref[tid] = new Object();
			table_ref[tid]['title'] = title;
			table_ref[tid]['link'] = link;
			table_ref[tid]['ele'] = ele;
			table_ref[tid]['tr'] = tr;
			table_ref[tid]['children'] = new Array();
			//magic up the topic ids
			//pull in image data, make an id out of the md5sum of the content
			
			//use this id to create an object that represents the table so that sections of it can 
			//be manipulated
			//add onclick processing that shows the messages, and saves the state for this id
			//add checkbox that will select all child messages
		
		} else if (tr.getProperty('bgcolor') == null) {
			
			if( topic_list && table_ref[tid] ) {

				//add to table obj
				table_ref[tid]['children'].extend([tr]);
				
				//an unread message?
				if( tr.innerHTML.search('<b>') != -1) { 
					table_ref[tid]['link'].setStyle('font-weight', 'bold');
					// it would be nice to be able to update the boldness of the messages
					//and the headers in real time
					/*tr.addEvent('click', function(link) {
						tr.setStyle('font-weight', '');
					});*/
					unread_message_count++;
				};
				
				
				
				//hide and style the row
				tr.getElements('td').each( function(mtd, i) { 
												var message_style = {};
												message_style['display'] = topic_list ? 'none' : 'table-cell';
												var bgcolor = ( i == 1 ) ? '#cddcf3' : '#e9effa'; //darken the 2nd td in
												message_style['background-color'] = bgcolor;
												//mtd.setStyles( base_style );
												mtd.setStyles( message_style );
												
												} );
												
	
				//get who the last message was from
				table_ref[tid]['most_recent_from'] = tr.getElements('td')[6].getText();
				
				//reverse the row sorting so that more recent messages are on the top
				tr.injectAfter(table_ref[tid]['tr']);
				
			} else { //not in a topic list / message with it's topic name on a previous page
			
				tr.getElements('font').each( function(f) { f.setProperty('size',''); });
				tr.getElements('a').each( function(f) { 
													f.setProperty('target', '_blank'); 
													});
			
			}
			
		} else if ( tr.getProperty('bgcolor') != null ) {
		
			//something else?
	
		}
		
	} );
	
	//get the last topic
	if( topic_list ) { process_topic(); };
	
	

//single message display
} else if ( window.location.search.search(/Cmd=open/) != -1 ) {

	$ES('table').each(function(t) { t.setStyles(base_style) });

	//fix the goddamned broken links in messages
	$ES('a').each( function( a ) {
						var href =  a.getProperty('href');
						if( href.search(/redir\.asp\?URL=/) != -1 ) {
							var new_href = href.substring(href.indexOf('=') + 1);
							a.setProperty('href', new_href );
						}
					});
					
	//swap the images in the pull down if we're looking at a nested message, as
	//the order has been changed. There is an issue when you browse out of the nested messages
	//as the arrrows don't unswap / you'r enot wheree you think you are. but it's better then having to rememer
	//that things are swapped.
	if ( window.location.search.search(/reverse_arrows=1/) != -1 ) {
		$next = $E('img[src$=next.gif]');
		$next.setProperty('src', $next.getProperty('src').replace(/next/,'prev'));
		$next.getParent().setProperty('href', $next.getParent().getProperty('href') + '&reverse_arrows=1');
		
		$prev = $E('img[src$=prev.gif]');
		$prev.setProperty('src', $prev.getProperty('src').replace(/prev/,'next'));
		$prev.getParent().setProperty('href', $prev.getParent().getProperty('href') + '&reverse_arrows=1');
	}
	

	
//compose a message
}  else if ( window.location.search.search(/Cmd=new/) != -1 ) { 

	var to_field = $E('input[name=MsgTo]');
	
	to_field.addEvent('keydown', function(event){
								var event = new Event(event);
								if (event.key == 's' && event.control  && event.alt) { button.fireEvent('click'); };
							});

	//create a new button
	var button = new Element('button', {
						'styles': {
							'display': 'block',
							'border-top': '1px solid #dddddd',
							'height' : '1.5em',
							'vertical-align' : 'middle',
							'background-color' : '#cddcf3',
							'position' : 'absolute',
							'top' : '45px',
							'left' : '50px'
						},
						'events': {
							'click': function(ce){
								window.open('?Cmd=galfind&US=M&DN=' + to_field.getValue(), 'searchpop', 'width=600,height=500,resizable=1,scrollbars=1');
								$E('input[name=MsgTo]').value = '';

							},
							
							
						},
					});

	button.setText('?')

	$E('body').adopt( button );

}  else if ( window.location.search.search(/Cmd=navbar/) != -1 ) { 

	//ajax get the folders from this page:
	// ?Cmd=contents&ShowFolders=1
	
/*	GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://owa.cnet.com/Exchange/Ethan.Schlenker/?Cmd=contents&ShowFolders=1',
    headers: {},
    onload: function(responseDetails) {
        console.log(responseDetails.responseText);
    }
});*/

$ES('table').each(function(t) { t.setStyles(base_style) });
	
	$ES('a').each( function(a) { a.setStyles({'display' : 'block'}) });


	var xmlNodeText = function(text, tag){
		var m = text.match(new RegExp("<(" + tag + ")(?:\\s?[^>]*)>((?:\\s|\\S)*)<\/\\1>"));
		if (m && m[2]) return m[2];
		else return null;
	}
	
	var url = 'https://owa.cnet.com/Exchange/Ethan.Schlenker/?Cmd=contents&ShowFolders=1'
	var myAjax = new Ajax(url, {
							method: 'get',
							onComplete: function(data) {
								
								//create a new div
								var folder_holder = new Element('div', {
									'styles': {
										'display': 'none',
										
									},
									'id' : 'folder_holder_div'
									
								});
								
								//insert data into div
								folder_holder.injectInside($E('body'));
								$('folder_holder_div').setHTML(xmlNodeText(data,'FORM'));

								//flter daata in div
								var table = $('folder_holder_div').getElement('table[class=tblHierarchy]');
								
								table.getElements('input[type=checkbox]').each(function(cb) { cb.remove(); });
								
								table.getElements('a').each(function(a) { 
																a.setProperty('target', 'viewer' ); 
																a.setStyles({'display' : 'block', 'clear' : 'none'});
																
																});
								
								table.getElements('i').each( function(i) {
									var dupe = i;
									var dupeParent = i.getParent();
									i.remove();
									dupe.setStyles({ 'float' : 'right'});
									dupe.setStyles(base_style);
									dupe.injectTop(dupeParent);
								});
								
								//remove calendar, contacts, inbox, journal, tasks
								table.getElements('a').each( function(i) {

									if(i.getText().search(/inbox|calendar|contacts|journal|tasks|notes/i) != -1 ) {
									
										var img_tr = i.getParent().getParent();
									
										//inbox? grab the unread and append that number to the main inbox
										if (i.getText().search(/inbox/i) != -1 ) {
											
											var inbox_count = img_tr.getText().match(/\d+/);

											if( inbox_count != null ) {

												$E('a[href^=./Inbox/]').appendText('(' + inbox_count[0] + ')');
											
											}
										
										}
										
										img_tr.remove()
									}
									});
								
								
								
								table.injectAfter($E('img[src$=folder-lg.gif]').getParent());
								
							
							}

									}).request();


	//set a timer to refresh 

}
console.timeEnd('page generated in');