// Generated by CoffeeScript 1.6.1
window.addEventListener ('load', function(){
  document.querySelector('#btnsumar').addEventListener('click', function(){
pluginName = "djs";
    defaults = {
      width: 370,
      height: 110,
      start: 1,
      navigation: {
        active: true,
        effect: "slide"
      },
      pagination: {
        active: true,
        effect: "slide"
      },
      play: {
        active: false,
        effect: "slide",
        interval: 500,
        auto: false,
        swap: true,
        pauseOnHover: false,
        restartDelay: 250
      },
      effect: {
        slide: {
          speed: 500
        },
        fade: {
          speed: 300,
          crossfade: true
        }
      },
      callback: {
        loaded: function() {},
        start: function() {},
        complete: function() {}
      }
    };
    Plugin = (function() {

      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend(true, {}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }

      return Plugin;

    })
    