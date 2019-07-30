var LUX=LUX||{};LUX.samplerate=4;var LUX_t_start=Date.now();LUX=(function(){ay("lux.js evaluation start.");var J="189";var a4=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.label)?LUX.label:document.title);var X="https://lux.speedcurve.com/error/";var aD="";var g=0;var aq=5;function ae(i){g++;if(i&&"undefined"!==typeof(i.filename)&&"undefined"!==typeof(i.message)){if((-1!==i.filename.indexOf("/lux.js?")||-1!==i.message.indexOf("LUX"))||(g<=aq&&"function"===typeof(c)&&c())){a4=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.label)?LUX.label:document.title);new Image().src=X+"?v="+J+"&id="+A()+"&fn="+encodeURIComponent(i.filename)+"&ln="+i.lineno+"&cn="+i.colno+"&msg="+encodeURIComponent(i.message)+"&l="+encodeURIComponent(a4)+(ap()?"&ct="+ap():"")+""}}}window.addEventListener("error",ae);var am=("object"===typeof(LUX_al)?LUX_al.slice():[]);if("function"===typeof(PerformanceObserver)&&"function"===typeof(PerformanceLongTaskTiming)){var n=new PerformanceObserver(function(bd){var bc=bd.getEntries();for(var e=0;e<bc.length;e++){var be=bc[e];am.push(be)}});try{n.observe({entryTypes:["longtask"],buffered:true})}catch(ag){ay("Long Tasks error.")}}else{ay("Long Tasks not supported.")}var O=0;var aZ=1;var M=2;var p=4;var q=8;var G=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMarks)?LUX.gaMarks:[]);var aG=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMeasures)?LUX.gaMeasures:[]);var a5={};var aO={};var ax=0;var aj=0;var aP=0;var Y=0;var L=1;var d="LUX_start";var a8="LUX_end";var aM=30*60;var w=D();var ad=aR(w);var a3;var aB=window.performance;var ba=2000;var au=("undefined"!==typeof(LUX)&&LUX.beaconUrl?LUX.beaconUrl:"https://lux.speedcurve.com/lux/");var l=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.samplerate)?LUX.samplerate:100);ay("Sample rate = "+l+"%. "+(c()?"This session IS being sampled. The data WILL show up in your LUX dashboards.":"This session is NOT being sampled. The data will NOT show up in your LUX dashboards. Call LUX.forceSample() and try again."));var al=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.auto)?LUX.auto:true);var o=("undefined"!==typeof(LUX)&&LUX.ns?LUX.ns:(Date.now?Date.now():+(new Date())));var aa=0;if(aB&&aB.timing&&aB.timing.navigationStart){o=aB.timing.navigationStart;aa=("undefined"!==typeof(LUX)&&LUX.ns?LUX.ns-o:0)}else{ay("Nav Timing is not supported.");O=O|M}var B;var u=["click","mousedown","keydown","touchstart","pointerdown"];var a={passive:true,capture:true};function a6(i,e){if(!B){B=Math.round(i);u.forEach(function(bc){removeEventListener(bc,P,a)})}}function f(bc,e){function be(){a6(bc,e);i()}function bd(){i()}function i(){removeEventListener("pointerup",be,a);removeEventListener("pointercancel",bd,a)}addEventListener("pointerup",be,a);addEventListener("pointercancel",bd,a)}function P(i){var be=false;try{be=i.cancelable}catch(bg){ay("Permission error accessing input event.");return}if(be){var bd=T();var bf=i.timeStamp;if(bf>1520000000){bd=Number(new Date())}if(bf>bd){return}var bc=bd-bf;if("pointerdown"==i.type){f(bc,i)}else{a6(bc,i)}}}u.forEach(function(e){addEventListener(e,P,a)});function T(){if(aB&&aB.now){return aB.now()}var e=Date.now?Date.now():+(new Date());return e-o}function aJ(e){ay("Enter LUX.mark(), name = "+e);if(aB){if(aB.mark){return aB.mark(e)}else{if(aB.webkitMark){return aB.webkitMark(e)}}}O=O|p;G.push({name:e,entryType:"mark",startTime:T(),duration:0});return}function az(bc,bg,e){ay("Enter LUX.measure(), name = "+bc);if("undefined"===typeof(bg)&&aA(d)){bg=d}if(aB){if(aB.measure){if(bg){if(e){return aB.measure(bc,bg,e)}else{return aB.measure(bc,bg)}}else{return aB.measure(bc)}}else{if(aB.webkitMeasure){return aB.webkitMeasure(bc,bg,e)}}}var be=0,i=T();if(bg){var bf=aA(bg);if(bf){be=bf.startTime}else{if(aB&&aB.timing&&aB.timing[bg]){be=aB.timing[bg]-aB.timing.navigationStart}else{return}}}if(e){var bd=aA(e);if(bd){i=bd.startTime}else{if(aB&&aB.timing&&aB.timing[e]){i=aB.timing[e]-aB.timing.navigationStart}else{return}}}aG.push({name:bc,entryType:"measure",startTime:be,duration:(i-be)});return}function aA(e){return R(e,x())}function ah(e){return R(e,bb())}function R(bc,i){if(i){for(Z=i.length-1;Z>=0;Z--){var e=i[Z];if(bc===e.name){return e}}}return undefined}function x(){if(aB){if(aB.getEntriesByType){return aB.getEntriesByType("mark")}else{if(aB.webkitGetEntriesByType){return aB.webkitGetEntriesByType("mark")}}}return G}function bb(){if(aB){if(aB.getEntriesByType){return aB.getEntriesByType("measure")}else{if(aB.webkitGetEntriesByType){return aB.webkitGetEntriesByType("measure")}}}return aG}function ak(e){if(aB&&aB.clearMarks){return aB.clearMarks(e)}if(e){for(Z=G.length-1;Z>=0;Z--){if(e===G[Z].name){G.splice(Z,1)}}}else{G=[]}return}function ac(e){if(aB&&aB.clearMeasures){return aB.clearMeasures(e)}if(e){for(Z=aG.length-1;Z>=0;Z--){if(e===aG[Z].name){aG.splice(Z,1)}}}else{aG=[]}return}function y(){var bf={};var bc=x();if(bc){for(var bg=0,bh=bc.length;bg<bh;bg++){var be=bc[bg],e=be.name,bj=Math.round(be.startTime);if("undefined"===typeof(bf[e])){bf[e]=bj}else{bf[e]=Math.max(bj,bf[e])}}}bc=bb();if(bc){for(var bg=0,bh=bc.length;bg<bh;bg++){var be=bc[bg],e=be.name,bj=Math.round(be.duration);if("undefined"===typeof(bf[e])){bf[e]=bj}else{bf[e]=Math.max(bj,bf[e])}}}var bi=[];var bd=Object.keys(bf);if(bd){for(var bg=0,bh=bd.length;bg<bh;bg++){var e=bd[bg];bi.push(e+"|"+bf[e])}}return bi.join(",")}function a0(){if("function"!==typeof(PerformanceLongTaskTiming)){return""}var e="";var bm={};var bg={};if(am.length){var bl=(aA(d)?aA(d).startTime:0);var be=(aA(d)?aA(a8).startTime:aB.timing.loadEventEnd-aB.timing.navigationStart);for(var bh=0;bh<am.length;bh++){var bd=am[bh];var bc=Math.round(bd.duration);if(bd.startTime<bl){bc-=bl-bd.startTime}else{if(bd.startTime>=be){continue}}var bk=bd.attribution[0].name;if(!bm[bk]){bm[bk]=0;bg[bk]=""}bm[bk]+=bc;bg[bk]+=","+Math.round(bd.startTime)+"|"+bc}}var bj=("undefined"!==typeof(bm.script)?"script":"unknown");if("undefined"===typeof(bm[bj])){bm[bj]=0;bg[bj]=""}var bf=Q(bg[bj]);var bi=",n|"+bf.count+",d|"+bf.median+",x|"+bf.max+(0===bf.fci?"":",i|"+bf.fci);e+="s|"+bm[bj]+bi+bg[bj];return e}function Q(bm){var bj=0;var bd=z();var bh=(0===bd?true:false);var bk=[];var bf=bm.split(",");for(var bg=0;bg<bf.length;bg++){var be=bf[bg].split("|");if(be.length===2){var bc=parseInt(be[0]);var e=parseInt(be[1]);bk.push(e);bj=(e>bj?e:bj);if(!bh&&bc>bd){if(bc-bd>5000){bh=true}else{bd=bc+e}}}}var bi=bk.length;var bl=aw(bk);return{count:bi,median:bl,max:bj,fci:bd}}function aw(e){if(0===e.length){return 0}var i=Math.floor(e.length/2);e.sort(function(bd,bc){return bd-bc});if(e.length%2){return e[i]}else{return Math.round((e[i-1]+e[i])/2)}}function W(){var bd="";if(aB&&aB.getEntriesByName){var bg=aI("/js/lux.js");if(bg){var i=aB.getEntriesByName(bg.src);if(i&&i.length){var e=i[0];var be=Math.round(e.domainLookupEnd-e.domainLookupStart);var bj=Math.round(e.connectEnd-e.connectStart);var bc=Math.round(e.responseStart-e.requestStart);var bf=Math.round(e.responseEnd-e.responseStart);var bi=be+bj+bc+bf;var bh=LUX_t_end-LUX_t_start;bd="d"+be+"t"+bj+"f"+bc+"c"+bf+"n"+bi+"e"+bh+"r"+l+(aa?"l"+aa:"")+"s"+(LUX_t_start-o)+""}}}return bd}function a7(){a5={}}function a2(){var e=[];for(var i in a5){e.push(i+"|"+a5[i])}return e.join(",")}function v(i,bc){ay("Enter LUX.addData(), name = "+i+", value = "+bc);var bd=typeof(i);var e=typeof(bc);if("string"===bd&&("string"===e||"number"===e||"boolean"===e)){aO[i]=bc}if(ax){if(a3){clearTimeout(a3)}a3=setTimeout(aV,100)}}function c(){if("undefined"===typeof(ad)||"undefined"===typeof(l)){return false}var e=(""+ad).substr(-2);return(parseInt(e)<l)}function k(){var e=[];for(var i in aO){var bc=""+aO[i];i=i.replace(/,/g,"").replace(/\|/g,"");bc=bc.replace(/,/g,"").replace(/\|/g,"");e.push(i+"|"+bc)}return encodeURIComponent(e.join(","))}function aE(){ay("Enter LUX.init().");ak();ac();a7();ai();av();a4=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.label)?LUX.label:document.title);aj=0;ax=0;aP=0;L=0;w=D();ad=aR(w);am.splice(0);O=0;O=O|aZ;aJ(d)}function aU(){var bh=ab();if(!bh){return h()}var bd=document.getElementsByTagName("script");var be=0;for(var bf=0,bc=bd.length;bf<bc;bf++){var bg=bd[bf];if(bg.src&&!bg.async&&!bg.defer&&0!==(bg.compareDocumentPosition(bh)&4)){be++}}return be}function t(){var bd=0;var be=document.getElementsByTagName("link");for(var bf=0,bc=be.length;bf<bc;bf++){var bg=be[bf];if(bg.href&&"stylesheet"===bg.rel&&0!==bg.href.indexOf("data:")){if(bg.onloadcssdefined||"print"===bg.media||"style"===bg.as){}else{bd++}}}return bd}function h(){var bd=document.getElementsByTagName("script");var be=0;for(var bf=0,bc=bd.length;bf<bc;bf++){var bg=bd[bf];if(bg.src&&!bg.async&&!bg.defer){be++}}return be}function aL(){var bd=document.getElementsByTagName("script");var be=0;for(var bf=0,bc=bd.length;bf<bc;bf++){var bg=bd[bf];if(bg.src){be++}}return be}function an(){var bd=document.getElementsByTagName("link");var be=0;for(var bf=0,bc=bd.length;bf<bc;bf++){var bg=bd[bf];if(bg.href&&"stylesheet"==bg.rel){be++}}return be}function aW(bg){var bd=document.getElementsByTagName(bg);var bf=0;for(var be=0,bc=bd.length;be<bc;be++){var bh=bd[be];try{bf+=bh.innerHTML.length}catch(bh){ay("Error accessing inline element innerHTML.");return -1}}return bf}function j(){var bd="";var bc=o;if(aA(d)&&aA(a8)){var bg=Math.round(aA(d).startTime);bc+=bg;var e=Math.round(aA(a8).startTime)-bg;bd=bc+"fs"+0+"ls"+e+"le"+e+""}else{if(aB&&aB.timing){var i=aB.timing;var bf=aY();var be=z();bd=bc+(i.redirectStart?"rs"+(i.redirectStart-bc):"")+(i.redirectEnd?"re"+(i.redirectEnd-bc):"")+(i.fetchStart?"fs"+(i.fetchStart-bc):"")+(i.domainLookupStart?"ds"+(i.domainLookupStart-bc):"")+(i.domainLookupEnd?"de"+(i.domainLookupEnd-bc):"")+(i.connectStart?"cs"+(i.connectStart-bc):"")+(i.secureConnectionStart?"sc"+(i.secureConnectionStart-bc):"")+(i.connectEnd?"ce"+(i.connectEnd-bc):"")+(i.requestStart?"qs"+(i.requestStart-bc):"")+(i.responseStart?"bs"+(i.responseStart-bc):"")+(i.responseEnd?"be"+(i.responseEnd-bc):"")+(i.domLoading?"ol"+(i.domLoading-bc):"")+(i.domInteractive?"oi"+(i.domInteractive-bc):"")+(i.domContentLoadedEventStart?"os"+(i.domContentLoadedEventStart-bc):"")+(i.domContentLoadedEventEnd?"oe"+(i.domContentLoadedEventEnd-bc):"")+(i.domComplete?"oc"+(i.domComplete-bc):"")+(i.loadEventStart?"ls"+(i.loadEventStart-bc):"")+(i.loadEventEnd?"le"+(i.loadEventEnd-bc):"")+(bf?"sr"+bf:"")+(be?"fc"+be:"")+""}else{if(aA(a8)){var e=Math.round(aA(a8).startTime);bd=bc+"fs"+0+"ls"+e+"le"+e+""}}}return bd}function z(){if(aB&&aB.getEntriesByType&&aB.getEntriesByType("paint")){for(var bc=aB.getEntriesByType("paint"),bd=0;bd<bc.length;bd++){var e=bc[bd];if("first-contentful-paint"===e.name){return Math.round(e.startTime)}}}return 0}function aY(){if(aB&&aB.timing){var be=aB.timing;var bf=be.navigationStart;var bg;if(bf){if(aB&&aB.getEntriesByType&&aB.getEntriesByType("paint")&&aB.getEntriesByType("paint").length){for(var bc=aB.getEntriesByType("paint"),bd=0;bd<bc.length;bd++){var e=bc[bd];if("first-paint"===e.name){bg=Math.round(e.startTime);break}}}else{if(window.chrome&&"function"===typeof(window.chrome.loadTimes)){var bi=window.chrome.loadTimes();if(bi){bg=Math.round((bi.firstPaintTime*1000)-bf)}}else{if(be.msFirstPaint){bg=Math.round(be.msFirstPaint-bf)}}}var bh=(be.loadEventStart-bf);if(bg&&bg<bh){return bg}}}ay("Paint Timing not supported.");return null}function A(){if("undefined"!==typeof(LUX)&&LUX.customerid){return LUX.customerid}var e=aI("/js/lux.js");if(e){LUX.customerid=V(e.src,"id");return LUX.customerid}return""}function aI(be){var bf=document.getElementsByTagName("script");for(var bd=0,e=bf.length;bd<e;bd++){var bc=bf[bd];if(bc.src&&-1!==bc.src.indexOf(be)){return bc}}return null}function V(e,bc){var bh=e.split("?")[1];var be=bh.split("&");for(var bf=0,bg=be.length;bf<bg;bf++){var bi=be[bf];var bd=bi.split("=");var bj=bd[0];if(bc===bj){return bd[1]}}return undefined}function aT(){var e=document.getElementsByTagName("*");var bc=e.length;var be=0;while(bc--){be+=a9(e[bc])}var bd=Math.round(be/e.length);return bd}function a9(e){var i=0;if(e.parentNode){while(e=e.parentNode){i++}}return i}function I(bd){var i=bd.body,bc=bd.documentElement;var e=Math.max((i?i.scrollHeight:0),(i?i.offsetHeight:0),(bc?bc.clientHeight:0),(bc?bc.scrollHeight:0),(bc?bc.offsetHeight:0));return e}function s(bd){var e=bd.body,i=bd.documentElement;var bc=Math.max((e?e.scrollWidth:0),(e?e.offsetWidth:0),(i?i.clientWidth:0),(i?i.scrollWidth:0),(i?i.offsetWidth:0));return bc}function S(){if(aB&&aB.getEntriesByType){var e=performance.getEntriesByType("navigation");if(e&&e.length>0&&e[0]["transferSize"]){return e[0]["transferSize"]}}return 0}function aS(){if(aB&&aB.navigation&&"undefined"!=typeof(aB.navigation.type)){return aB.navigation.type}return""}function ap(){var i=navigator.connection;var e="";if(i&&i.effectiveType){e=i.effectiveType;if("slow-2g"===e){e="Slow 2G"}else{if("2g"===e||"3g"===e||"4g"===e||"5g"===e){e=e.toUpperCase()}else{e=e.charAt(0).toUpperCase()+e.slice(1)}}}return e}function aF(){var bf=document.getElementsByTagName("img");var bd=[];if(bf){for(var bc=0,e=bf.length;bc<e;bc++){var be=bf[bc];if(r(be)){bd.push(be)}}}return bd}function ab(be){if(!be){be=document.body}var bc;if(be){var bf=be.children;if(bf){for(var bd=0,e=bf.length;bd<e;bd++){var bg=bf[bd];if(r(bg)){bc=bg}}}}if(bc){return ab(bc)}else{return be}}function r(bd){var be=document.documentElement.clientHeight;var bc=document.documentElement.clientWidth;var i=a1(bd);return(i[0]>=0&&i[1]>=0&&i[0]<bc&&i[1]<be&&bd.offsetWidth>0&&bd.offsetHeight>0)}function a1(i){var bc=curtop=0;while(i){bc+=i.offsetLeft;curtop+=i.offsetTop;i=i.offsetParent}return[bc,curtop]}function U(){ay("Enter LUX.send().");var bk=A();if(!bk||!w||!ao()||!c()||ax){return}aJ(a8);var bj=y();var bp=k();var bf="";if(!aP){bf=a2()}var e=a0();var be=W();if(document.visibilityState&&"visible"!==document.visibilityState){O=O|q}a4=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.label)?LUX.label:document.title);var bh=au+"?v="+J+"&id="+bk+"&sid="+w+"&uid="+ad+(bp?"&CD="+bp:"")+"&l="+encodeURIComponent(a4);var bg=aW("script");var bd=aW("style");var bl=(aj?"":"&NT="+j())+(L?"&LJS="+be:"")+"&PS=ns"+aL()+"bs"+aU()+(bg>-1?"is"+bg:"")+"ss"+an()+"bc"+t()+(bd>-1?"ic"+bd:"")+"ia"+aF().length+"it"+document.getElementsByTagName("img").length+"dd"+aT()+"nd"+document.getElementsByTagName("*").length+"vh"+document.documentElement.clientHeight+"vw"+document.documentElement.clientWidth+"dh"+I(document)+"dw"+s(document)+(S()?"ds"+S():"")+(ap()?"ct"+ap()+"_":"")+"er"+g+"nt"+aS()+(navigator.deviceMemory?"dm"+Math.round(navigator.deviceMemory):"")+(bf?"&IX="+bf:"")+(e?"&CPU="+e:"")+(O?"&fl="+O:"")+"";var bo="";if(bj){var i=bh.length+bl.length;if(i+bj.length<=ba){bl+="&UT="+bj}else{var bi=ba-i;var bn=bj.lastIndexOf(",",bi);bl+="&UT="+bj.substring(0,bn);bo=bj.substring(bn+1)}}var bm=bh+bl;ay("Sending main LUX beacon: "+bm);F(bm);ax=1;aj=1;aP=bf;var bi=ba-bh.length;while(bo){var bc="";if(bo.length<=bi){bc=bo;bo=""}else{var bn=bo.lastIndexOf(",",bi);if(-1===bn){bn=bo.indexOf(",")}if(-1===bn){bc=bo;bo=""}else{bc=bo.substring(0,bn);bo=bo.substring(bn+1)}}var bm=bh+"&UT="+bc;ay("Sending extra User Timing beacon: "+bm);F(bm)}}function C(){var bc=A();if(!bc||!w||!ao()||!c()||aP||!ax){return}var i=a2();if(i){var bd=k();var e="?v="+J+"&id="+bc+"&sid="+w+"&uid="+ad+(bd?"&CD="+bd:"")+"&l="+encodeURIComponent(a4)+"&IX="+i+(B?"&FID="+B:"")+"";var be=au+e;ay("Sending Interaction Metrics beacon: "+be);F(be);aP=1}}function aV(){var i=A();if(!i||!w||!ao()||!c()||!ax){return}var bc=k();if(bc){var e="?v="+J+"&id="+i+"&sid="+w+"&uid="+ad+"&CD="+bc+"&l="+encodeURIComponent(a4)+"";var bd=au+e;ay("Sending late Customer Data beacon: "+bd);F(bd)}}function F(e){var i=document.createElement("script");i.async=true;i.src=e;var bc=document.getElementsByTagName("script")[0];bc.parentNode.insertBefore(i,bc)}function K(bc,i,e){if(!bc||!bc.hasAttribute){return i}if(bc.hasAttribute("data-sctrack")){e=true;if(bc.id){i=bc.id}}if(!i&&bc.id){i=bc.id}if(e&&i){return i}return K(bc.parentNode,i,e)}function aX(){if("undefined"===typeof(a5.s)){a5.s=Math.round(T())}}function at(bc){ai();if("undefined"===typeof(a5.k)){a5.k=Math.round(T());if(bc&&bc.target){var i=K(bc.target);if(i){a5.ki=i}}C()}}function H(bd){ai();if("undefined"===typeof(a5.c)){a5.c=Math.round(T());var bc=null;try{if(bd&&bd.target){bc=bd.target}}catch(bd){ay("Error accessing event target.");bc=null}if(bc){if(bd.clientX){a5.cx=bd.clientX;a5.cy=bd.clientY}var i=K(bd.target);if(i){a5.ci=i}}C()}}function aC(bd,i){if(bd&&J<bd&&document.body&&!Y){ay("Updating cached version of lux.js from "+J+" to "+bd+".");Y=1;var e=aI("/js/lux.js");if(e){if("function"===typeof(fetch)){fetch(e.src,{cache:"reload"})}else{var bc=document.createElement("iframe");bc.style.display="none";bc.id="LUX_update_iframe";bc.src="//cdn.speedcurve.com/luxupdate.php?src="+encodeURIComponent(e.src)+(i?"&tw="+i:"");document.body.appendChild(bc)}}}}function b(e,i){if(window.addEventListener){window.addEventListener(e,i,false)}else{if(window.attachEvent){window.attachEvent("on"+e,i)}}}function E(e,i){if(window.removeEventListener){window.removeEventListener(e,i,false)}else{if(window.detachEvent){window.detachEvent("on"+e,i)}}}function av(){b("scroll",aX);b("keypress",at);b("mousedown",H)}function ai(){E("scroll",aX);E("keypress",at);E("mousedown",H)}function D(e){var i=(e?Number(new Date())+"00000":Number(new Date())+""+N(parseInt(100000*Math.random()),"00000"));return i}function aR(bd){var i=af("lux_uid");if(!i||i.length<11){i=bd}else{var bc=parseInt(i.substring(0,10));var e=Number(new Date())/1000;if(e-bc>(24*60*60)){i=bd}}aN(i);return i}function aN(e){m("lux_uid",e,aM);return e}function aH(){return ad}function ao(){return true}function af(bd){try{var bc=document.cookie.split(";");for(var be=0;be<bc.length;be++){var bg=bc[be].split("=");if(bd===bg[0].trim()){return unescape(bg[1])}}}catch(bf){ay("Error accessing document.cookie.")}return undefined}function m(i,bc,be){try{document.cookie=i+"="+escape(bc)+(be?"; max-age="+be:"")+"; path=/"}catch(bd){ay("Error setting document.cookie.")}}function N(i,e){return(e+i).slice(-e.length)}function ay(e){if("undefined"===typeof(gaLog)){gaLog=[]}gaLog.push(e);if("undefined"!==typeof(LUX)&&LUX.debug){console.log("LUX: "+e)}}if(al){if("complete"==document.readyState){U()}else{b("load",function(){setTimeout(U,200)})}b("beforeunload",U);b("unload",U);b("beforeunload",C);b("unload",C)}av();var aK={mark:aJ,measure:az,init:aE,send:U,addData:v,getSessionId:aH,getDebug:function(){return gaLog},forceSample:function(){aN(D(true));console.log("Sampling has been turned on for this session.")},doUpdate:aC,beaconUrl:au,samplerate:l,auto:al,label:a4,version:J,ae:[],al:[],debug:("undefined"!==typeof(LUX)&&LUX.debug?true:false)};if(window.LUX&&LUX.ac&&LUX.ac.length){for(var Z=0;Z<LUX.ac.length;Z++){var ar=LUX.ac[Z];var aQ=ar.shift();if("function"===typeof(aK[aQ])){aK[aQ].apply(aK,ar)}}}for(var Z=0;"object"===typeof(LUX_ae)&&Z<LUX_ae.length;Z++){ae(LUX_ae[Z])}ay("lux.js evaluation end.");return aK})();var LUX_t_end=Date.now();