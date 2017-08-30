(function () {
    var Ps = require('perfect-scrollbar');

    var VuePs = {

        install: function (Vue) {
            Vue.prototype.$ps = this;
            Vue.Ps = this;
        },
        initialize: function (container, options) {
            return Ps.initialize(container, options || {})
        },
        update: function (container) {
            return Ps.update(container)
        },
        destroy: function (container) {
            return Ps.destroy(container)
        }
    };

    if (typeof exports == "object") {
        module.exports = VuePs;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return VuePs; })
    } else if (window.Vue) {
        window.VuePs = VuePs;
        Vue.use(VuePs);
    }

})();
