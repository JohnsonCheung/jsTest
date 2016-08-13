var aa = {};
(function a(Vue,aa) {
    'use strict';
    var el = '#body';
    var vueOpt = {
        el,
        data: {
            chkBox: [],
            a: 1,
            b: 2,
            options: [
              { text: 'One', value: 'A' },
              { text: 'Two', value: 'B' },
              { text: 'Three', value: 'C' }
            ]
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