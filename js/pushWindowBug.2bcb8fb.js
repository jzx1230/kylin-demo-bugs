webpackJsonp([1],{0:function(e,t,n){n(21),e.exports=n(84)},23:function(e,t,n){var o;!function(e){!function(e){var t=!1,n=e.Promise;if(n){var o=null,r=null;try{r=(o=n.resolve()).then}catch(e){}o instanceof n&&"function"==typeof r&&!n.cast&&(t=!0)}}(e)}(self),function(r){"use strict";function a(){return(V=V||r[z])&&V.call}function i(e,t){setTimeout(function(){e(t)},1)}function u(e,t){var n=!1;return t=t||"data",_(e,"_")?(e[t]=e._,delete e._):(P(e,function(e){e!==t&&(n=!0)}),n&&(n=e,(e={})[t]=n)),e}function c(e,t,n){var o,r=!1;return S(e)||($.EVENTS||($.EVENTS={}),$.EVENTS[e]||($.EVENTS[e]={callbacks:[]}),$.EVENTS[e].callbacks||($.EVENTS[e].callbacks=[]),$.EVENTS[e].callbacks.forEach(function(e,n){e.cb===t&&(r=e,o=n)}),n&&x(o)&&$.EVENTS[e].callbacks.splice(o,1)),r}function s(e,t,n,o){c(e,t)||$.EVENTS[e].callbacks.push({cb:t,_cb:n,_cbSFC:o})}function l(e,t){var n=c(e,t,!0);T(t)?n&&G.off(e,n._cb):($.EVENTS[e].callbacks.forEach(function(t){G.off(e,t._cb)}),$.EVENTS[e].callbacks=[])}function d(e,t){var n=Q[t],o=!1,r="off"===e?/^off([A-Z])(\w+)/:/^on([A-Z])(\w+)/;return n&&r.test(t)&&(t=t.match(r),!(o=n.m)&&t[1]&&t[2]&&(o=function(e){return E(e)&&(e=e.toLowerCase()),e}(t[1])+t[2])),o}function f(e,t){var n=Q[e]||{};return(n.e||n.extra||{})[t]}function p(e,t){return _(t,"error")&&(t.error=U(t.error,10)),!1!==f(e,"handleResultSuccess")&&h(t),0===t.error&&(delete t.error,delete t.errorMessage),t.error>0&&t.error<10&&J.error(e,t),t}function h(e,t,n){return n=!S(n)&&n,_(e,"error")||e.success!==n||(e.error=x(t)?t:2),delete e.success,e}function m(e,t){return"%s"===e&&(t=function(e){var t=e;if(D(e)||I(e))try{t=JSON.stringify(e)}catch(e){}else t=e+"";return t}(t)),"%c"===e&&(t=function(e){var t=""+e;return 0===t.indexOf("#")&&(t=t.substr(1)),3===t.length&&(t=t.replace(/(.)/g,"$1$1")),A(t=U(t,16))&&J.error(e+" is invalid hex color."),t}(t)),"%b"===e&&(t=function(e){return E(e)&&(e=e.replace(/^data:(\/|\w|\-|\.)+;base64,/i,"")),e}(t)),"%d"===e&&(t=U(t,10)),"%f"===e&&(t=parseFloat(t)),t}function v(e,t,n){var o;return n=n||{},P(t,function(r,a){var i,u,c;i=t[r],u=(i||"").match(/(\w+)(%\w)$/i),c={k:i},u&&(c.k=u[1],c.t=u[2]),!S(a=(o=c).k)&&(_(e,r)||_(n,r))&&S(e[a])&&(e[a]=m(o.t,S(n[r])?e[r]:n[r]),a!==r&&delete e[r])}),e}function b(){var e,t,n,o,r,a,i=L(arguments);G.debug&&(e=i[0],t=i[1],n=i[2],o=i[3],r=i[4],a=[i.length>3?"RETURN>":"INVOKE>",e,_(t,"_")?t._:t,n],i.length>3&&a.push(o),i.length>4&&a.push(r),J.info(a))}function g(e){return e.test(W)}function w(){if(void 0===N){var e=!1,t=r.Promise;if(t){var n=null,o=null;try{o=(n=t.resolve()).then}catch(e){}n instanceof t&&T(o)&&!t.cast&&(e=!0)}e||J.warn("try callback since no Promise detected"),N=e}return N}function y(e,t){var n,o=t;return D(t)&&(n=[],P(t,function(e,t){n.push(e+"="+encodeURIComponent(S(t)?"":t))}),o=n=n.join("&")),/\?/.test(e)?/&$/.test(e)||/\?$/.test(e)||(o="&"+o):o="?"+o,e+o}function _(e,t){return!(!D(e)&&!I(e))&&e.hasOwnProperty(t)}function P(e,t,n){var o,r;if(!n&&function(e){return!!e&&!T(e)&&(I(e)||x(e.length))}(e)){for(o=0;o<e.length;o++)if(!1===t(o,e[o]))return e}else for(r in e)if(!1===t(r,e[r]))return e;return e}function B(e){try{e=JSON.parse(e)}catch(t){J.warn(t,e)}return e}function C(){return g(/android/i)}function k(){return g(/iPad|iPod|iPhone|iOS/i)}function S(e){return"[object Undefined]"===M(e)}function A(e){return"NaN"===U(e,10).toString()}function T(e){return"[object Function]"===M(e)}function E(e){return"string"==typeof e}function D(e){return"[object Object]"===M(e)}function x(e){return"[object Number]"===M(e)}function I(e){return"[object Array]"===M(e)}function M(e){return Object.prototype.toString.call(e)}function O(e){for(var t in e)return!1;return!0}function L(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.length-t,o=new Array(n),r=0;r<n;r++)o[r]=e[r+t];return o}function R(e){var t,n,o=L(arguments,1);if(!D(e))return e;for(var r=0,a=o.length;r<a;r++)for(n in t=o[r])hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}var N,F,z="AlipayJSBridge",V=r[z],W=navigator.userAgent||navigator.swuserAgent,j=r.window,H=r.document,J=r.console,U=r.parseInt,q=[],$={getBAPSI:{isListening:!1,lastState:2,on:function(){$.getBAPSI.isListening||(V.call("startMonitorBackgroundAudio"),$.getBAPSI.isListening=!0,G.on("getBackgroundAudioPlayedStateInfo",$.getBAPSI.listener))},off:function(){G.off("getBackgroundAudioPlayedStateInfo",$.getBAPSI.listener),V.call("stopMonitorBackgroundAudio"),$.getBAPSI.isListening=!1},listener:function(e){var t=(e.data||{}).status,n=["backgroundAudioPause","backgroundAudioPlay","backgroundAudioStop"][t];n&&t!==$.getBAPSI.lastState&&(G.trigger(n),$.getBAPSI.lastState=t)}}},Q={openBluetoothAdapter:{},closeBluetoothAdapter:{},getBluetoothAdapterState:{},startBluetoothDevicesDiscovery:{b:function(e){return E(e._)&&(e._=[e._]),v(e,{_:"services"}),e}},stopBluetoothDevicesDiscovery:{},getBluetoothDevices:{b:function(e){return E(e._)&&(e._=[e._]),v(e,{_:"services"}),e},a:function(e){return I(e.devices)&&P(e.devices,function(e,t){v(t,{manufacturerData:"advertisData"})}),e}},getConnectedBluetoothDevices:{a:function(e){return I(e.devices)&&P(e.devices,function(e,t){v(t,{manufacturerData:"advertisData"})}),e}},connectBLEDevice:{b:function(e){return v(e,{_:"deviceId"}),e}},disconnectBLEDevice:{},writeBLECharacteristicValue:{},readBLECharacteristicValue:{},notifyBLECharacteristicValueChange:{},getBLEDeviceServices:{b:function(e){return v(e,{_:"deviceId"}),e}},getBLEDeviceCharacteristics:{},onBLECharacteristicValueChange:{m:"BLECharacteristicValueChange"},offBLECharacteristicValueChange:{m:"BLECharacteristicValueChange"},onBluetoothAdapterStateChange:{},offBluetoothAdapterStateChange:{},onBLEConnectionStateChanged:{m:"BLEConnectionStateChanged"},offBLEConnectionStateChanged:{m:"BLEConnectionStateChanged"},onBluetoothDeviceFound:{a:function(e){return v(e,{manufacturerData:"advertisData"})}},offBluetoothDeviceFound:{},pushBizWindow:{},compressImage:{b:function(e){return e.level=S(e.level)?4:e.level,v(e,{_:"apFilePaths",level:"compressLevel%d"})},d:function(e,t){C()?V.call("compressImage",e,t):i(t,{apFilePaths:e.apFilePaths||[]})}},getLaunchParams:{d:function(e,t){G.launchParams=j.ALIPAYH5STARTUPPARAMS||V.startupParams||{},T(t)&&t(G.launchParams)}},onTabClick:{},offTabClick:{},onShare:{m:"onShare"},offShare:{m:"onShare"},connectSocket:{b:function(e){return v(e,{headers:"header"})}},sendSocketMessage:{b:function(e){return v(e,{_:"data"})}},closeSocket:{},onSocketOpen:{},offSocketOpen:{},onSocketMessage:{},offSocketMessage:{},onSocketError:{},offSocketError:{},onSocketClose:{},offSocketClose:{},alert:{b:function(e){return S((e=v(e,{_:"content",content:"message%s",buttonText:"button%s"})).title)||(e.title=m("%s",e.title)),e}},confirm:{b:function(e){return S((e=v(e,{_:"content%s",content:"message%s",confirmButtonText:"okButton%s",cancelButtonText:"cancelButton%s"})).title)||(e.title=m("%s",e.title)),e},a:function(e){return v(e,{ok:"confirm"})}},showToast:{m:"toast",b:function(e){return v(e,{_:"content%s"}),E(e.content)||(e.content=m("%s",e.content)),e}},hideToast:{},showLoading:{b:function(e){return v(e,{_:"content",content:"text%s"})}},hideLoading:{},showNavigationBarLoading:{m:"showTitleLoading"},hideNavigationBarLoading:{m:"hideTitleLoading"},setNavigationBar:{b:function(e){var t="setTitle",n="setTitleColor",o="setBarBottomLineColor",r={setTitle:{},setTitleColor:{},setBarBottomLineColor:{}};return r[t]=v(r[t],{_:"title",title:"title%s",image:"image%b"},e),r[n]=v(r[n],{backgroundColor:"color%c",reset:"reset"},e),r[o]=v(r[o],{borderBottomColor:"color%c"},e),r},d:function(e,t){var n="setTitle",o="setTitleColor",r="setBarBottomLineColor",a={};O(e[n])||V.call(n,e[n]),O(e[r])||(V.call(r,e[r]),A(e[r].color)&&(a.error=2,a.errorMessage="颜色值不合法")),O(e[o])?i(t,a):V.call(o,e[o],function(e){a=R(e,a),t(a)})}},showTabBar:{b:function(e){if(e.action="create",e.activeIndex=e.activeIndex||0,v(e,{color:"textColor%c",activeColor:"selectedColor%c",activeIndex:"selectedIndex%d"}),I(e.items)){var t=e.items;e.items=[],t.forEach(function(t,n){(t=v(R({},t),{title:"name%s",tag:"tag%s",icon:"icon%b",activeIcon:"activeIcon%b",badge:"redDot%s"},{tag:n,badge:S(t.badge)?"-1":t.badge})).icon=m("%b",t.icon),t.activeIcon=m("%b",t.activeIcon),e.items.push(t)})}return e},d:function(e,t,n){S($.showTabBar)?$.showTabBar={opt:n}:J.error("showTabBar must be called at most once"),G.on("tabClick",function(e){var n={};v(n,{tag:"index%d"},{tag:D(e.data)&&e.data.tag?e.data.tag:"0"}),t(n)}),V.call("tabBar",e,function(e){p("showTabBar",e)})}},setTabBarBadge:{m:"tabBar",b:function(e){return e.action="redDot",v(e,{index:"tag%s",badge:"redDot%s"},{index:e.index}),e}},showActionSheet:{m:"actionSheet",b:function(e){if(v(e,{items:"btns",cancelButtonText:"cancelBtn%s"}),I(e.btns)){var t=e.btns;e.btns=[],t.forEach(function(t){return e.btns.push(t+"")})}return S(e.cancelBtn)&&(e.cancelBtn="取消"),e},a:function(e,t){return I(t.btns)&&e.index===t.btns.length&&(e.index=-1),e}},redirectTo:{b:function(e){return v(e,{_:"url"}),D(e.data)&&(e.url=y(e.url,e.data)),e},d:function(e){e.url&&j.location.replace(e.url)}},pushWindow:{b:function(e){return v(e,{_:"url",params:"param"}),e.url.indexOf("?")>-1&&J.warn("try opt.data instead of querystring"),e.url.indexOf("__webview_options__")>-1&&J.warn("try opt.params instead of __webview_options__"),D(e.data)&&(e.url=y(e.url,e.data),delete e.data),e}},popWindow:{b:function(e){return D((e=u(e)).data)||(e.data={___forResume___:e.data}),e}},popTo:{b:function(e){var t;return v(e,{_:(t=void 0,x(e._)&&(t="index"),E(e._)&&(t="urlPattern"),t)}),D(e.data)||(e.data={___forResume___:e.data}),e}},allowPullDownRefresh:{d:function(e){var t="onPullDownRefresh";v(e,{_:"allow"}),e.allow=!!S(e.allow)||!!e.allow,D($[t])?$[t].allow=e.allow:($[t]={allow:e.allow},G.onPullDownRefresh()),$[t].allow?V.call("restorePullToRefresh"):$[t].event&&$[t].event.preventDefault()}},choosePhoneContact:{m:"contact"},chooseAlipayContact:{m:"chooseContact",b:function(e){return v(e,{_:"count"}),S(e.count)&&(e.count=1),1===e.count?e.type="single":(e.type="multi",e.count<=0||e.count>10?e.multiMax=10:e.multiMax=e.count),delete e.count,e},a:function(e){return I(e.contacts)&&e.contacts.forEach(function(e){v(e,{headImageUrl:"avatar",name:"realName"}),delete e.from}),e}},share:{b:function(e){var t={},n={};return t.onlySelectChannel=["ALPContact","ALPTimeLine","ALPCommunity","Weibo","DingTalkSession","SMS","Weixin","WeixinTimeLine","QQ","QQZone"],_(e,"bizType")&&(t.bizType=e.bizType),delete(n=R({},e)).bizType,delete n.onlySelectChannel,v(n,{image:"imageUrl"}),$.share={startShare:t,shareToChannel:n},e},d:function(e,t){!1===e.showToolBar&&V.call("setToolbarMenu",{menus:[],override:!0}),V.call("startShare",$.share.startShare,function(e){var n=$.share.shareToChannel;e.channelName?V.call("shareToChannel",{name:e.channelName,param:n},t):t(e)})}},datePicker:{b:function(e){switch(v(e,{_:"formate",formate:"mode",currentDate:"beginDate",startDate:"minDate",endDate:"maxDate"}),e.mode){case"HH:mm:ss":e.mode=0;break;case"yyyy-MM-dd":e.mode=1;break;case"yyyy-MM-dd HH:mm:ss":e.mode=2;break;default:e.mode=1}return e},a:function(e){return E(e.date)&&(e.date=e.date.replace(/\//g,"-").trim()),e}},chooseCity:{m:"getCities",b:function(e){function t(e){var t;return I(e)&&(t=[],e.forEach(function(e){t.push(v({},{city:"name",adCode:"adcode%s",spell:"pinyin"},e))}),e=t),e}var n,o;return v(e,{showHotCities:"needHotCity",cities:"customCities",hotCities:"customHotCities"}),!0===e.showLocatedCity?(e.currentCity="",e.adcode=""):(delete e.currentCity,delete e.adcode),delete e.showLocatedCity,n=e.customCities,S(e.customCities)||(e.customCities=t(n)),o=e.customHotCities,S(e.customHotCities)||(e.customHotCities=t(o)),e},a:function(e){return v(e,{adcode:"adCode"}),e}},onBack:{a:function(e){var t={};return D($.onBack)?$.onBack.event=e:$.onBack={event:e,allowButton:!0},!1===$.onBack.allowButton&&e.preventDefault(),t.backAvailable=$.onBack.allowButton,t},e:{handleEventData:!1}},offBack:{},onResume:{a:function(e){var t={};return S(e.data)||(t.data=e.data),_(e.data,"___forResume___")&&(t.data=e.data.___forResume___),t},e:{handleEventData:!1}},offResume:{},onPause:{},offPause:{},onPageResume:{a:function(e){var t={};return S(e.data)||(t.data=e.data),_(e.data,"___forResume___")&&(t.data=e.data.___forResume___),t},e:{handleEventData:!1}},offPageResume:{},onPagePause:{},offPagePause:{},onTitleClick:{},offTitleClick:{},onPullDownRefresh:{m:"firePullToRefresh",a:function(e){var t={},n="onPullDownRefresh";return D($[n])?$[n].event=e:$[n]={event:e,allow:!0},!1===$[n].allow&&$[n].event.preventDefault(),t.refreshAvailable=$[n].allow,t},e:{handleEventData:!1}},offPullDownRefresh:{m:"firePullToRefresh"},onNetworkChange:{d:function(e,t,n,o){var r=function(){return G.getNetworkType(t)};s("h5NetworkChange",o,r),G.on("h5NetworkChange",r)}},offNetworkChange:{d:function(e,t,n,o){l("h5NetworkChange",o)}},onAccelerometerChange:{b:function(){V.call("watchShake",{monitorAccelerometer:!0})},a:function(e){var t={};return v(t,{x:"x",y:"y",z:"z"},D(e.data)?e.data:e),t},e:{handleEventData:!1}},offAccelerometerChange:{b:function(){V.call("watchShake",{monitorAccelerometer:!1})}},onCompassChange:{b:function(){V.call("watchShake",{monitorCompass:!0})},a:function(e){var t={};return v(t,{direction:"direction"},D(e.data)?e.data:e),t},e:{handleEventData:!1}},offCompassChange:{b:function(){V.call("watchShake",{monitorCompass:!1})}},onBackgroundAudioPlay:{b:function(e){return $.getBAPSI.on(),e}},offBackgroundAudioPlay:{},onBackgroundAudioPause:{b:function(e){return $.getBAPSI.on(),e}},offBackgroundAudioPause:{},onBackgroundAudioStop:{b:function(e){return $.getBAPSI.on(),e}},offBackgroundAudioStop:{},onAppResume:{},offAppResume:{},onAppPause:{},offAppPause:{},getNetworkType:{a:function(e){return S(e.networkInfo)||(e.networkType=function(e){return E(e)&&(e=e.toUpperCase()),e}(e.networkInfo)),delete e.err_msg,delete e.networkInfo,e}},scan:{b:function(e){return v(e,{_:"type"}),e.type=e.type||"qr",e},a:function(e){return(e.qrCode||e.barCode)&&(e.code=e.qrCode||e.barCode,delete e.qrCode,delete e.barCode),e}},watchShake:{b:function(e){return O(e)&&(e=null),e}},getLocation:{b:function(e){return v(e,{accuracy:"horizontalAccuracy",type:"requestType%d"}),S(e.requestType)&&(e.requestType=2),C()&&(S(e.isHighAccuracy)&&(e.isHighAccuracy=!0),S(e.isNeedSpeed)&&(e.isNeedSpeed=!0)),e},a:function(e){return v(e,{citycode:"cityCode",adcode:"adCode"}),S(e.city)&&e.province&&(e.city=e.province),e.latitude&&(e.latitude=m("%s",e.latitude)),e.longitude&&(e.longitude=m("%s",e.longitude)),e.accuracy&&(e.accuracy=m("%f",e.accuracy)),e.speed&&(e.speed=m("%f",e.speed)),e}},getSystemInfo:{a:function(e){if(!_(e,"error")){e.pixelRatio=m("%f",e.pixelRatio),e.windowWidth=m("%d",e.windowWidth),e.language=(e.language||"").replace(/\s?\w+\/((?:\w|-)+)$/,"$1"),e.windowHeight=m("%d",e.windowHeight);try{k()&&G.compareVersion("10.0.12")<0&&(e.windowHeight=j.screen.height-64)}catch(e){}}return e}},vibrate:{},getServerTime:{},previewImage:{m:"imageViewer",b:function(e){return v(e,{_:"urls",current:"init%d"}),S(e.init)&&(e.init=0),e.images=[],(e.urls||[]).forEach(function(t){e.images.push({u:t})}),delete e.urls,e}},chooseImage:{b:function(e){return v(e,{_:"count%d"}),S(e.count)&&(e.count=1),E(e.sourceType)&&(e.sourceType=[e.sourceType]),e},a:function(e){return v(e,{errorCode:"error",errorDesc:"errorMessage",localIds:"apFilePaths",tempFilePaths:"apFilePaths"}),delete e.scene,delete e.localIds,delete e.tempFilePaths,E(e.apFilePaths)&&(e.apFilePaths=B(e.apFilePaths)),e}},chooseVideo:{b:function(e){return v(e,{_:"maxDuration%d"}),E(e.sourceType)&&(e.sourceType=[e.sourceType]),E(e.camera)&&(e.camera=[e.camera]),e},a:function(e){switch(v(e,{errorCode:"error",errorDesc:"errorMessage",msg:"errorMessage",localId:"apFilePath",tempFilePath:"apFilePath",tempFile:"apFilePath"}),delete e.localId,delete e.tempFilePath,delete e.tempFile,e.error){case 0:delete e.error;break;case 1:e.error=2;break;case 2:e.error=10;break;case 3:e.error=11;break;case 4:e.error=12}return e}},uploadFile:{b:function(e){var t;return v(e,{headers:"header",fileName:"name",fileType:"type"}),t=e.filePath,/^[a-z0-9|]+$/i.test(t)&&(e.localId=e.filePath,delete e.filePath),e},a:function(e){return 2===e.error&&(e.error=11),e}},saveImage:{b:function(e,t){return v(e,{_:"url",url:"src"}),T(t)&&(e.cusHandleResult=!0),e}},downloadFile:{b:function(e){return v(e,{headers:"header"}),e},a:function(e){return v(e,{tempFilePath:"apFilePath",errorCode:"error"}),delete e.tempFilePath,e}},setSessionData:{b:function(e){return D((e=u(e)).data)||(e.data={data:e.data}),P(e.data,function(t,n){e.data[t]=JSON.stringify(n)}),e}},getSessionData:{b:function(e){return E(e._)&&(e.keys=[e._]),I(e._)&&(e.keys=e._),delete e._,e},a:function(e){return P(e.data,function(t,n){e.data[t]=B(n)}),e}},startBizService:{b:function(e){return v(e,{_:"name",params:"param%s"}),e}},tradePay:{b:function(e){return v(e,{_:"orderStr"}),e}},getAuthCode:{b:function(e){return v(e,{_:"scopes"}),E(e.scopes)?e.scopeNicks=[e.scopes]:I(e.scopes)?e.scopeNicks=e.scopes:e.scopeNicks=["auth_base"],delete e.scopes,e},a:function(e){return v(e,{authcode:"authCode"}),e}},getAuthUserInfo:{a:function(e){return v(e,{nick:"nickName",userAvatar:"avatar"}),e}},openInBrowser:{b:function(e){return v(e,{_:"url"})}},openLocation:{b:function(e){return S(e.scale)&&(e.scale=15),e}},showPopMenu:{b:function(e){if(v(e,{_:"items",items:"menus"}),D($.showPopMenu)?$.showPopMenu.menus={}:$.showPopMenu={menus:{}},I(e.menus)){var t=e.menus;e.menus=[],t.forEach(function(t,n){E(t)&&(t={title:t}),S((t=v(R({},t),{title:"name%s",tag:"tag%s",badge:"redDot%s"},{tag:n,title:t.title,badge:S(t.badge)?"-1":t.badge})).icon)||(t.icon=m("%b",t.icon)),e.menus.push(t),$.showPopMenu.menus[t.name]=n})}return e},d:function(e,t){!0!==$.showPopMenu.onEvent&&($.showPopMenu.onEvent=!0,G.on("popMenuClick",function(e){var n={};v(n,{title:"index%d"},{title:D(e.data)&&e.data.title?$.showPopMenu.menus[e.data.title]:"-1"}),t(n)})),V.call("showPopMenu",e,function(e){p("showPopMenu",e)})}},setOptionButton:{m:"setOptionMenu",b:function(e){if(E(e._)&&(e.title=e._,delete e._),I(e._)&&(e.items=e._,delete e._),v(e,{items:"menus",type:"iconType",badge:"redDot%s"}),S(e.icon)||(e.icon=m("%b",e.icon)),D($.setOptionButton)?$.setOptionButton.menus=[]:$.setOptionButton={menus:[]},I(e.menus)){var t=e.menus;e.menus=[],t.forEach(function(n,o){S((n=v(R({},n),{type:"icontype",badge:"redDot%s"},{badge:S(n.badge)?"-1":n.badge})).icon)||(n.icon=m("%b",n.icon)),e.menus.unshift(n),$.setOptionButton.menus[t.length-1-o]=o}),e.menus.length>0&&S(e.override)&&(e.override=!0)}if(T($.setOptionButton.onEvent)&&G.off("optionMenu",$.setOptionButton.onEvent),T(e.onClick)){var n=e.onClick,o=function(e){var t=0,o={};D(e.data)&&x(e.data.index)&&$.setOptionButton.menus.length>0&&(t=$.setOptionButton.menus[e.data.index]),o.index=m("%d",t),n(o)};$.setOptionButton.onEvent=o,!0!==e.reset&&G.on("optionMenu",o),delete e.onClick}return e},d:function(e,t){V.call("setOptionMenu",e,t),k()&&i(t,{}),G.showOptionButton()}},showOptionButton:{m:"showOptionMenu"},hideOptionButton:{m:"hideOptionMenu"},showBackButton:{},hideBackButton:{},allowBack:{d:function(e){v(e,{_:"allowButton"}),e.allowButton=!!S(e.allowButton)||!!e.allowButton,"boolean"==typeof e.allowGesture&&V.call("setGestureBack",{val:e.allowGesture}),D($.onBack)?$.onBack.allowButton=e.allowButton:($.onBack={allowButton:e.allowButton},G.onBack()),!1===e.allowButton&&$.onBack.event&&$.onBack.event.preventDefault()}},startRecord:{m:"startAudioRecord",b:function(e){return v(e,{maxDuration:"maxRecordTime%f",minDuration:"minRecordTime%f",bizType:"business"},{maxDuration:e.maxDuration||60,minDuration:e.minDuration||1}),S(e.business)&&(e.business="apm-h5"),e},a:function(e){return v(e,{tempFilePath:"apFilePath",identifier:"apFilePath"}),e}},stopRecord:{m:"stopAudioRecord"},cancelRecord:{m:"cancelAudioRecord"},playVoice:{m:"startPlayAudio",b:function(e){return v(e,{_:"filePath",filePath:"identifier",bizType:"business"}),S(e.business)&&(e.business="apm-h5"),e},a:function(e){return v(e,{identifier:"filePath"}),e}},pauseVoice:{m:"pauseAudioPlay"},resumeVoice:{m:"resumeAudioPlay"},stopVoice:{m:"stopAudioPlay"},makePhoneCall:{d:function(e,t){var n="tel:";v(e,{_:"number"}),n+=e.number,V.call("openInBrowser",{url:n},t)}},playBackgroundAudio:{b:function(e){return v(e,{_:"url",url:"audioDataUrl%s",title:"audioName%s",singer:"singerName%s",describe:"audioDescribe%s",logo:"audioLogoUrl%s",cover:"coverImgUrl%s",bizType:"business"},{bizType:e.bizType||"apm-h5"}),e},a:function(e){return v(e,{describe:"errorMessage"}),h(e,12,0),e}},pauseBackgroundAudio:{a:function(e){return v(e,{describe:"errorMessage"}),h(e,12,0),e}},stopBackgroundAudio:{a:function(e){return v(e,{describe:"errorMessage"}),h(e,12,0),e}},seekBackgroundAudio:{b:function(e){return v(e,{_:"position",bizType:"business"},{bizType:e.bizType||"apm-h5"}),e.position=m("%f",e.position),e},a:function(e){return v(e,{describe:"errorMessage"}),h(e,12,0),e}},getBackgroundAudioPlayerState:{a:function(e){return v(e,{audioDataUrl:"url",describe:"errorMessage"}),h(e,12,0),e}}},G={version:"3.1.0",ua:W,isAlipay:g(/AlipayClient/),alipayVersion:(F=W.match(/AlipayClient[a-zA-Z]*\/(\d+(?:\.\d+)+)/),F&&F.length?F[1]:""),compareVersion:function(e){var t=G.alipayVersion.split(".");e=e.split(".");for(var n,o,r=0;r<t.length;r++){if((n=U(e[r],10)||0)>(o=U(t[r],10)||0))return-1;if(n<o)return 1}return 0},parseQueryString:function(e){var t,n={},o=e||j.location.search,r={true:!0,false:!1};o=(o=0===o.indexOf("?")?o.substr(1):o)?o.split("&"):"";for(var a=0;a<o.length;a++)(t=o[a].split("="))[1]=decodeURIComponent(t[1]),t[1]=S(r[t[1]])?t[1]:r[t[1]],n[t[0]]=t[1];return Z("parseQueryString"),n},enableDebug:function(){G.debug=!0},on:function(e,t){var n="ready"===e;n||"back"===e?H.addEventListener(n?z+"Ready":e,t,!1):(e=e.replace(/ready/,z+"Ready")).split(/\s+/g).forEach(function(e){H.addEventListener(e,t,!1)})},off:function(e,t){H.removeEventListener(e,t,!1)},trigger:function(e,t){var n=H.createEvent("Events");return n.initEvent(e,!1,!0),n.data=t||{},H.dispatchEvent(n),n},ready:function(e){function t(t){a()?(T(e)&&e(),T(t)&&t()):G.on("ready",function(){a(),T(e)&&e(),T(t)&&t()})}return w()?new Promise(t):void t()},call:function(){function e(e,n){var o,r,a,i,u,c,h,m,v,g;o=t[0]+"",r=t[1],S(a=t[2])&&T(r)&&(a=r,r={}),!D(r)&&t.length>=2&&(r={_:r}),S(r)&&(r={}),i=function(e,t,n){var o=Q[e],r=o&&o.b?o.b(R({},t),n):t,a=f(e,"optionModifier");if(T(a)){var i=a(r,n);D(i)&&(r=i)}return r}(o,r,a),u=function(e,t){var n={};return T((t=t||{}).success)&&(n.success=t.success,delete t.success),T(t.fail)&&(n.fail=t.fail,delete t.fail),T(t.complete)&&(n.complete=t.complete,delete t.complete),n}(0,i),S(i)&&J.error("please confirm "+o+".before() returns the options."),v=function(e){var t=Q[e];return!(!t||!t.d)&&t.d}(o),g=_(r,"_")?r._:r,b(o,g,i),h=function(e){return d("on",e)}(o),m=function(e){return d("off",e)}(o),c=function(t){var c=void 0;t=t||{},h&&!1!==f(o,"handleEventData")&&(c=function(e){var t={};return S(e.data)||(t=D(t=e.data)?t:{data:t}),t}(t)),S(c=function(e,t,n,o,r){var a,i=Q[e],u=i&&i.a?i.a((a=t,"[object Event]"===M(a)?t:R({},t)),n,o,r):R({},t),c=f(e,"resultModifier");if(T(c)){var s=c(u,n,o,r);D(s)&&(u=s)}return u}(o,c||t,i,r,a))&&J.error("please confirm "+o+".after() returns the result."),c=p(o,c),b(o,g,i,t,c),_(c,"error")||_(c,"errorMessage")?(T(n)&&n(c),T(u.fail)&&u.fail(c)):(T(e)&&e(c),T(u.success)&&u.success(c)),T(u.complete)&&u.complete(c),T(a)&&a(c)},T(v)?v(i,c,r,a):h?(s(h,a,c,u),G.on(h,c)):m?l(m,a):V.call(function(e){var t=Q[e];return t&&t.m?t.m:e}(o),i,c),Z(o)}var t=L(arguments);return w()?G.ready().then(function(){return new Promise(e)}):void(a()?e():q.push(t))},extendJSAPI:function(e,t){!t&&E(e)&&(e=[e]),P(e,function(n){var o=n;if(!0!==t){var r=e[o];T(r)&&(r={doing:r}),E(r)&&(o=r,(r={})[o]={}),Q[o]=v(Q[o]||{},{mapping:"m",before:"b",doing:"d",after:"a"},r),D(r.extra)&&(Q[o].e=Q[o].e||{},Q[o].e=R(Q[o].e,r.extra))}G[o]=G.call.bind(null,o)},!0)}};G.extendJSAPI.mapping=v,G.extendJSAPI.toType=m,G.isAlipay||J.warn("Run alipayjsapi.js in Alipay please!"),G.extendJSAPI(Q,!0),G.on("ready",function(){q.length&&function e(){Y(function(){var t=q.shift();G.call.apply(null,t),q.length&&e()})}()});var Z=function(){function e(){setTimeout(function(){if(t.length>0){var e=t.join("|");G.ready(function(){V.call("remoteLog",{type:"monitor",bizType:"ALIPAYJSAPI",logLevel:1,actionId:"MonitorReport",seedId:"ALIPAYJSAPI_INVOKE_COUNTER",param1:e})}),G.debug&&J.info("REMOTE_LOG_QUEUE>",t),t=[]}!S(n)&&clearTimeout(n),o=!1},0)}var t=[],n=void 0,o=!1;return G.on("back",function(){e()}),function(r){t.push(r),t.length>=6?e():o||(o=!0,n=setTimeout(function(){e()},5e3))}}(),Y=j.requestAnimationFrame||j.webkitRequestAnimationFrame||j.mozRequestAnimationFrame||j.msRequestAnimationFrame||function(e,t){j.setTimeout(function(){e(+new Date,t)},1e3/60)};r._AP=G,"undefined"!=typeof e&&e.exports?e.exports=G:(o=function(){return G}.call(t,n,t,e),!(void 0!==o&&(e.exports=o)))}(self)},64:function(e,t,n){var o;n(122);var r=n(8)(n(74),n(65),null,null,o);t.__esModule=!0,t.default=r.exports},65:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("期望pushWindow传递的数据前后一致")]),e._v(" "),n("h2",[e._v("实际 阿里提供的android是能用的，ios在一些\\r \\n 之类的会多次转义出现问题")]),e._v(" "),n("h2",[e._v("样例代码，见mounted和methods")]),e._v(" "),n("button",{on:{click:function(t){e.pushData({})}}},[e._v("{}")]),e._v(" "),n("button",{on:{click:function(t){e.pushData({text:1})}}},[e._v("{text:1}")]),e._v(" "),n("button",{on:{click:function(t){e.pushData({text:"\r"})}}},[e._v("{text:'\\r'}")]),e._v(" "),n("button",{on:{click:function(t){e.pushData({text:"\n"})}}},[e._v("{text:'\\n'}")]),e._v(" "),n("button",{on:{click:function(t){e.pushData({text:"\r\n"})}}},[e._v("{text:'\\r\\n'}")])])},staticRenderFns:[]}},74:function(e,t,n){"use strict";function o(e,t,n,o){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(o):void 0})}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t,n,o,r){var a={};return Object.keys(o).forEach(function(e){a[e]=o[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=n.slice().reverse().reduce(function(n,o){return o(e,t,n)||n},a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u,c,s,l,d,f,p,h,m=n(3),v=n(78),b=(i=(0,m.Component)({}),u=m.Component.Property,c=m.Component.Property,s=m.Component.Property,i((d=function(){function e(){r(this,e),o(this,"name",f,this),o(this,"data",p,this),o(this,"methods",h,this)}return e.prototype.mounted=function(){try{var e=(0,v.getPassData)();e&&(window.alert(JSON.stringify(e)),(0,v.popWindow)())}catch(e){window.alert("error"),window.alert(e)}},e}(),f=a(d.prototype,"name",[u],{enumerable:!0,initializer:function(){return"IndexView"}}),p=a(d.prototype,"data",[c],{enumerable:!0,initializer:function(){return{name:"pushWindowBug"}}}),h=a(d.prototype,"methods",[s],{enumerable:!0,initializer:function(){return{pushData:function(e){(0,v.pushWindow)("pushWindowBug.html",!1,e)}}}}),l=d))||l);t.default=b},76:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){c.default.call(e,t,n)}function a(e,t,n){r("pushWindow",{url:e,param:{closeCurrentWindow:t,canPullDown:!1,readTitle:!1,showOptionMenu:!1,params:n}})}function i(){var e=window.AlipayJSBridge.startupParams.params;if(e)return JSON.parse(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushWindow=a,t.getPassData=i;var u=n(23),c=o(u)},77:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){if(e)return e.toLowerCase();if(window)return window.navigator.userAgent.toLowerCase();throw new Error("userAgent is not defined！")}function a(e){var t=e.indexOf("android")>-1||e.indexOf("adr")>-1,n=!!e.match(/\(i[^;]+;( u;)? cpu.+mac os x/),o=e.indexOf("Windows Phone".toLowerCase())>-1;return t?"Android":n?"IOS":o?"Windows Phone":""}function i(e){var t=!0;return e.match(/(iPhone|iPod|android|ios|iPad|windows phone|tablet)/i)&&"IOS"!==a(e)&&(t=!1),t}Object.defineProperty(t,"__esModule",{value:!0}),t.client=void 0;var u=n(79),c=o(u),s=n(76),l=o(s);t.client=i(r())?c:l},78:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){l.default.call(e,t,n)}function a(e){r("popWindow",{data:e})}function i(){return c.client.pushWindow.apply(c.client,arguments)}function u(){return c.client.getPassData()}Object.defineProperty(t,"__esModule",{value:!0}),t.popWindow=a,t.pushWindow=i,t.getPassData=u;var c=n(77),s=n(23),l=o(s)},79:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){c.default.call(e,t,n)}function a(e,t,n){r("pushWindow",{url:e,param:{closeCurrentWindow:t,canPullDown:!1,readTitle:!1,showOptionMenu:!1},passData:n})}function i(){var e=window.AlipayJSBridge.startupParams.passData;if(e)return JSON.parse(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pushWindow=a,t.getPassData=i;var u=n(23),c=o(u)},84:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(c.default?(0,c.default)(e,t):e.__proto__=t)}var u=n(20),c=o(u),s=n(3),l=n(64),d=o(l),f=n(85),p=o(f),h=n(32),m=o(h);m.default.attach(document.body);var v=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.initOptions=function(){return{store:p.default}},t.prototype.render=function(){var e=arguments[0];return e(d.default)},t}(s.Page);new v("#app")},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3);t.default=new o.Store({state:{},mutations:{},actions:{}})},122:function(e,t){}});