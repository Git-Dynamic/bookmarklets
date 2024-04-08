/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      var DYNAMICXXX = prompt("Dynamic Executor V1\nJavaScript code:");
      eval(DYNAMICXXX.substring(DYNAMICXXX.indexOf('javascript:') + 1));
  }
}) //Copy this:*##+js(execute_script.js)
