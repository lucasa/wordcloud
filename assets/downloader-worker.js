/*! wordcloud-app  2018-10-21 */

"use strict";self.callback=function(){var a=Array.prototype.slice.call(arguments);self.postMessage(a)},self.onmessage=function(a){var b=a.data;b+=-1===b.indexOf("?")?"?":"&",b+="callback=callback",self.importScripts(b)};