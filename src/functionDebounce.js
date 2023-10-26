"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(callback, delay) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer); // Limpia el timer para evitar la ejecución del callback
        timer = setTimeout(function () {
            callback.apply(void 0, args); // callback hell en este caso
        }, delay);
    };
}
exports.default = debounce;
