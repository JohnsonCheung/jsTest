var aa = {};
(function a(Vue,aa) {
    'use strict';
    var vueOpt = {
        el : "#body",
        data: {
            a: 1,
            b: 2
        },
        computed: {
            c: function c() {
                return this.a+this.b;
            }
        }
    }

    aa.a = new Vue(vueOpt)
    //debugger;
})(Vue,aa);