!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(x,t),d?b(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function x(){var e=y();if(h(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,m&&r?b(e):(r=o=void 0,u)}function w(){var e=y(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(x,t),b(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,g(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:O(y())},w}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j={form:document.querySelector(".feedback-form"),mailInput:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]'),submitBtn:document.querySelector('[type="submit"]')};!function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),n=t.email,r=t.message;j.mailInput.value=n,j.textarea.value=r}else x()}(),j.form.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),j.submitBtn.addEventListener("click",(function(e){if(e.preventDefault(),""===j.mailInput.value||""===j.textarea.value)return void alert("Please fill out the form to continue!");console.log(h),localStorage.clear(),x()}));var h={};function x(){j.mailInput.value="",j.textarea.value=""}}();
//# sourceMappingURL=03-feedback.fef9380d.js.map
