var $_GET = {};

let setup = {};
setup.monitors = [];

let numMonitors = 3;

//load GET variables
if (document.location.toString().indexOf("?") !== -1) {
  let query = document.location
    .toString()
    .replace(/^.*?\?/, "")
    .replace(/#.*$/, "")
    .split("&");

  for (let i = 0, l = query.length; i < l; i++) {
    let aux = decodeURIComponent(query[i]).split("=");
    $_GET[aux[0]] = aux[1];
  }
}

//load tooltips from JSON
let tooltips = new Array();

let loadTooltips = function() {
  $.getJSON("tooltips.json", function(data) {
    $.each(data, function() {
      $.each(this, function(key, value) {
        tooltips[key] = value.text;
      });
    });
  });
};

loadTooltips();

(function() {})();
