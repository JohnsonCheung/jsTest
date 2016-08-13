var aa = {};
(function a(Vue,aa) {
    'use strict';
    var chkBox = [];
    var a = 1;
    var b = 2;
    var options = [
              { text: 'One', value: 'A' },
              { text: 'Two', value: 'B' },
              { text: 'Three', value: 'C' }
    ];
    function c() {
        return this.a+this.b;
    }
    var vueOpt = {
        el : "#body",
        data: {chkBox,a,b,options},
        computed: {c},
        }
    }

    aa.a = new Vue(vueOpt)
    //debugger;
})(Vue,aa);