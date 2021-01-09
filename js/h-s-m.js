(function (d) {
    var c = d.createElement('link')
    c.rel = 'stylesheet'
    c.href = 'https://widget.heweather.net/simple/static/css/he-simple.css?v=1.4.0'
    var s = d.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/gh/gemhermit/file/weather/h-s.js'
    var sn = d.getElementsByTagName('script')[0]
    sn.parentNode.insertBefore(c, sn)
    sn.parentNode.insertBefore(s, sn)
    $("head").append(css);
    $("head").append(js);
    var target = "#weather-component";
    $(target).append("<div id='he-plugin-simple'></div>")
  })(document)