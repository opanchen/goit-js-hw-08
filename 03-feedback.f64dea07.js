function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function x(e){return l=e,u=setTimeout(h,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function h(){var e=v();if(S(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function j(e){return u=void 0,p&&o?b(e):(o=i=void 0,a)}function w(){var e=v(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return x(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:j(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form"),mailInput:document.querySelector('[name="email"]'),textarea:document.querySelector('[name="message"]'),submitBtn:document.querySelector('[type="submit"]')};!function(){if(storageData=localStorage.getItem("feedback-form-state"),storageData){const{email:e,message:t}=JSON.parse(storageData);b.mailInput.value=e,b.textarea.value=t}else S()}(),b.form.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}),500)),b.submitBtn.addEventListener("click",(function(e){if(e.preventDefault(),""===b.mailInput.value||""===b.textarea.value)return void alert("Please fill out the form to continue!");console.log(x),localStorage.clear(),S()}));const x={};function S(){b.mailInput.value="",b.textarea.value=""}
//# sourceMappingURL=03-feedback.f64dea07.js.map
