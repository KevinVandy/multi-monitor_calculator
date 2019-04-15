'use strict';

/*
	This is the development file. Index.php actually references the min version of this code for faster loading time
	By Kevin Van Cott

	when you see: function functionName(i){}
	'i' stands for the monitor that the calculations are being done on
	so that it only does the function on 1 monitor
*/


/*global $, alert, document */


// begin global variables from index.php
var SCALE = parseInt($("#SCALE").val());
var numActiveMonitors = parseInt($("#numActiveMonitors").val());
var maxNumMonitors = parseInt($("#maxNumMonitors").val());
// end global variables


// begin functions to get global variables from hidden inputs

function changeSCALE() {
  $("#SCALE").val(SCALE);
}

function changeNumActiveMonitors() {
  $("#numActiveMonitors").val(numActiveMonitors);
}


// begin functions to get data from the html
function getUnit(i) {
  return $("input[name=units" + i + "]:radio:checked").val();
}

function getOrientation(i) {
  return $("input[name=orientation" + i + "]:radio:checked").val();
}

function getMonitor(i) {
  return $("#monitor" + i);
}

function getSize(i) {
  return parseFloat($("#diagonal" + i).val());
}

function getHorRes(i) {
  return (parseInt($("#horRes" + i).val()));
}

function getVerRes(i) {
  return (parseInt($("#verRes" + i).val()));
}

function getRes(i) {
  return (parseInt($("#verRes" + i).val()) + parseInt($("#horRes" + i).val())) / 2;
}

function getAspectRatio(i) {
  return $("select[name=aspectRatioType" + i + "] option:selected").val();
}

function getResolutionType(i) {
  return $("select[name=resolutionType" + i + "] option:selected").val();
}

function getBezelWidth(i) {
  return parseFloat($("input[name=bezelWidth" + i + "]").val());
}

function getHDR(i) {
  var hdr = $("input[name=hdr" + i + "]:checkbox:checked").val();
  if (hdr === undefined || hdr === null || hdr === "") {
    return null;
  } else {
    return hdr;
  }
}

function getSRGB(i) {
  var srgb = $("input[name=srgb" + i + "]:checkbox:checked").val();
  if (srgb === undefined || srgb === null || srgb === "") {
    return null;
  } else {
    return srgb;
  }
}

function getCurved(i) {
  var curved = $("input[name=curved" + i + "]:checkbox:checked").val();
  if (curved === undefined || curved === null || curved === "") {
    return null;
  } else {
    return curved;
  }
}

function getTouch(i) {
  var touch = $("input[name=touch" + i + "]:checkbox:checked").val();
  if (touch === undefined || touch === null || touch === "") {
    return null;
  } else {
    return touch;
  }
}

function getWebcam(i) {
  var webcam = $("input[name=webcam" + i + "]:checkbox:checked").val();
  if (webcam === undefined || webcam === null || webcam === "") {
    return null;
  } else {
    return webcam;
  }
}

function getSpeakers(i) {
  var speakers = $("input[name=speakers" + i + "]:checkbox:checked").val();
  if (speakers === undefined || speakers === null || speakers === "") {
    return null;
  } else {
    return speakers;
  }
}

function getDisplayType(i) {
  return $("select[name=displayType" + i + "] option:selected").val();
}

function getSync(i) {
  return $("select[name=syncType" + i + "] option:selected").val();
}

function getRefreshRate(i) {
  return $("select[name=refreshRate" + i + "] option:selected").val();
}

function getResponseTime(i) {
  return $("input[name=responseTime" + i + "]").val();
}

function getBrand(i) {
  var brand = $("input[name=brand" + i + "]").val();
  if (brand === undefined || brand === null || brand === "") {
    return null;
  } else {
    return brand;
  }
}

function getSearchEngine() {
  return $("select[name=searchEngine] option:selected").val();
}
// end functions to get data from the html



// begin functions to make simple calculations
function calculateUnitValue(i) {
  if (getUnit(i) === "in") return 1;
  else if (getUnit(i) === "cm") return .3937;
  else return 0;
}

function calculateHeight(i) {
  return parseFloat(getSize(i) * Math.sin(calculateTheta(i)));
}

function calculateWidth(i) {
  return parseFloat(getSize(i) * Math.cos(calculateTheta(i)));
}

function calculateTheta(i) {
  return Math.atan(getVerRes(i) / getHorRes(i));
}

function calculateAspectRatio(i) {
  var aspectRatio = getAspectRatio(i);
  if (aspectRatio === "detect") {
    var theta = calculateTheta(i);
    if (theta > 0.784 && theta < 0.787) aspectRatio = "1:1"; //the small ranges give a 3-10 pixel buffer
    else if ((theta > 0.673 && theta < 0.676) || (theta > 0.894 && theta < 0.898)) aspectRatio = "5:4";
    else if ((theta > 0.642 && theta < 0.645) || (theta > 0.925 && theta < 0.929)) aspectRatio = "4:3";
    else if ((theta > 0.587 && theta < 0.590) || (theta > 0.980 && theta < 0.984)) aspectRatio = "3:2";
    else if ((theta > 0.557 && theta < 0.560) || (theta > 1.010 && theta < 1.014)) aspectRatio = "16:10";
    else if ((theta > 0.538 && theta < 0.542) || (theta > 1.028 && theta < 1.032)) aspectRatio = "5:3";
    else if ((theta > 0.511 && theta < 0.514) || (theta > 1.056 && theta < 1.056)) aspectRatio = "16:9";
    else if ((theta > 0.462 && theta < 0.465) || (theta > 1.105 && theta < 1.109)) aspectRatio = "2:1";
    else if ((theta > 0.398 && theta < 0.406) || (theta > 1.164 && theta < 1.173)) aspectRatio = "21:9";
    else if ((theta > 0.300 && theta < 0.304) || (theta > 1.265 && theta < 1.270)) aspectRatio = "32:10";
    else if ((theta > 0.273 && theta < 0.276) || (theta > 1.295 && theta < 1.301)) aspectRatio = "32:9";
    else aspectRatio = "Unknown";
  }
  return aspectRatio;
}

function calculateArea(i) {
  return calculateHeight(i) * calculateWidth(i);
}

function calculateNumPixels(i) {
  return parseInt($("#verRes" + i).val()) * parseInt($("#horRes" + i).val());
}
// end functions to make simple calculations


// begin draw monitor functions
//used to draw the monitors on page load without doing the animation
function drawMonitorPageLoad(i) {
  var unitValue = calculateUnitValue(i);
  var monitor = getMonitor(i);
  var bezelWidth = getBezelWidth(i);
  var pixHeight = SCALE * calculateHeight(i) * unitValue;
  var pixWidth = SCALE * calculateWidth(i) * unitValue;
  var pixBezel = SCALE * bezelWidth * unitValue / Math.sqrt(2);
  if (i != 1) {
    monitor.animate({
      width: pixWidth + "px",
      height: pixHeight + "px",
      borderWidth: pixBezel + "px",
      marginRight: pixBezel + "px",
      marginLeft: pixBezel + "px"
    }, 1);
  } else {
    monitor.animate({
      width: pixWidth + "px",
      height: pixHeight + "px",
      borderWidth: pixBezel + "px",
      marginRight: pixBezel + "px",
    }, 1);
  }
}
// Calculates height in pixels, updates size of monitor, applies it to the css to draw the monitor in its new size with animation
function drawMonitor(i) {
  if (getSize(i) > 3 && getSize(i) < 100 && getHorRes(i) > 100 && getHorRes(i) < 50000 && getVerRes(i) > 100 && getVerRes(i) < 50000) {
    var unitValue = calculateUnitValue(i);
    var monitor = getMonitor(i);
    var bezelWidth = getBezelWidth(i);
    var pixHeight = SCALE * calculateHeight(i) * unitValue;
    var pixWidth = SCALE * calculateWidth(i) * unitValue;
    var pixBezel = SCALE * bezelWidth * unitValue / Math.sqrt(2);
    if (i != 1) {
      monitor.animate({
        width: pixWidth + "px",
        height: pixHeight + "px",
        borderWidth: pixBezel + "px",
        marginRight: pixBezel + "px",
        marginLeft: pixBezel + "px"
      }, 400);
    } else {
      monitor.animate({
        width: pixWidth + "px",
        height: pixHeight + "px",
        borderWidth: pixBezel + "px",
        marginRight: pixBezel + "px"
      }, 400);
    }
  }
  $("#bezelValue" + i).html(bezelWidth.toFixed(2) + "\"");
}
// end draw monitor functions


//functions for buttons
function addMonitor() {
  if (numActiveMonitors >= maxNumMonitors) {
    alert("This tool has a limit of " + maxNumMonitors + " monitors");
  } else {
    $("#monitorBox" + ++numActiveMonitors).fadeIn(400);
    $("#monitorBox" + numActiveMonitors).css("display", "inline-block");
    //updateOutput();
  }
}

function removeMonitor() {
  if (numActiveMonitors > 0) {
    $("#monitorBox" + numActiveMonitors--).fadeOut(200);
    updateOutput();
  }
}

function zoom(x) {
  SCALE += parseInt(x);
  updateOutput();
}
// end functions for buttons



// begin functions for displaying values in the stats output section
function displaySize(i) {
  var size = getSize(i).toFixed(1);
  var unitValue = calculateUnitValue(i);

  if (unitValue === 1) {
    size += "\"";
  } else {
    size += "cm";
  }
  $("#sizeStat" + i).html(size);
  return size;
}

function displayHeight(i) { // Shortens height to two decimals places, update the value in html
  var height = calculateHeight(i).toFixed(1);
  var unitValue = calculateUnitValue(i);
  if (unitValue === 1) {
    height += "\"";
  } else {
    height += "cm";
  }
  $("#heightStat" + i).html(height);
  return height;
}

function displayWidth(i) { // Shortens width to one decimal place, updates the value in stats section
  var width = calculateWidth(i).toFixed(1);
  var unitValue = calculateUnitValue(i);
  if (unitValue === 1) {
    width += "\"";
  } else {
    width += "cm";
  }
  $("#widthStat" + i).html(width);
  return width;
}

function displayArea(i) { //Display Monitor area aka screen real estate
  var area = calculateArea(i).toFixed(1);
  var unitValue = calculateUnitValue(i);
  if (unitValue === 1) {
    area += "\"<sup>2</sup>";
  } else {
    area += "cm<sup>2</sup>";
  }
  $("#areaStat" + i).html(area);
}

function displayAspectRatio(i) { //Detect and display the correct aspect ratio in the stats sections
  var aspectRatio = calculateAspectRatio(i); //not getAspectRatio for detect
  $("#aspectRatioStat" + i).html(aspectRatio);
  return aspectRatio;
}

function displayResolution(i) { //Display the Resolution again in the stats section, input from the custom resolution
  var resolution = parseInt($("#horRes" + i).val()) + " x " + parseInt($("#verRes" + i).val());
  $("#resolutionStat" + i).html(resolution);
  return resolution;
}

function displayPixels(i) { // Displays number of pixels of the monitor in the stats section
  $("#pixelsStat" + i).html(calculateNumPixels(i).toLocaleString());
}

function displayPPI(i) { // Displays pixels per inch and updates values in the stats section
  if (calculateUnitValue(i) === 1) {
    $("#ppuStat" + i).html("PPI: ");
  } else {
    $("#ppuStat" + i).html("PPCM");
  }
  $("#ppiStat" + i).html((getRes(i) / ((calculateHeight(i) + calculateWidth(i)) / 2)).toFixed(1)); //Just uses the average of the vertical and horizontal values
}
// end functions for displaying values in the stats output section


// begin functions for monitor analysis
function displayTotalNumPixels() { //Display culmitive number of pixels of all active monitors at the bottom of the page
  var totalNumPixels = 0;
  for (var i = 1; i <= numActiveMonitors; i++) {
    totalNumPixels += parseInt($("#horRes" + i).val()) * parseInt($("#verRes" + i).val());
  }
  $("#totalPixels").text(totalNumPixels.toLocaleString());
}

function displayTotalWidth() { //Display an estimate of the total width that will be needed for desk space to accomadate all monitors assuming 1 inch bezzels
  var totalWidthSmallUnit = 0;
  var totalWidthLargeUnit = 0;
  var inchesRemainder = 0;
  var unit = 0;
  for (var i = 1; i <= numActiveMonitors; i++) {
    totalWidthSmallUnit += calculateWidth(i) + parseFloat(getBezelWidth(i)) * 2;
    unit = calculateUnitValue(i);
  }
  if (unit === 1) {
    totalWidthLargeUnit = totalWidthSmallUnit / 12;
    inchesRemainder = totalWidthSmallUnit % 12;
    totalWidthSmallUnit = totalWidthSmallUnit.toFixed(0);
    totalWidthLargeUnit = parseInt(totalWidthLargeUnit); //parse instead of fixed to round down
    totalWidthSmallUnit += "\"";
    totalWidthLargeUnit += "\'" + inchesRemainder.toFixed(0) + "\"";
  } else {
    totalWidthLargeUnit = totalWidthSmallUnit / 100;
    totalWidthSmallUnit = totalWidthSmallUnit.toFixed(0);
    totalWidthLargeUnit = totalWidthLargeUnit.toFixed(2);
    totalWidthSmallUnit += "cm";
    totalWidthLargeUnit += "m";
  }
  $("#totalWidth").text(totalWidthSmallUnit + " (" + totalWidthLargeUnit + ")");
}

function displayTotalArea() { //Display the total area (screen real estate) of all of the active monitors
  var totalAreaSmallUnit = 0;
  var totalAreaLargeUnit = 0;
  var unit = 0;
  for (var i = 1; i <= numActiveMonitors; i++) {
    totalAreaSmallUnit += calculateArea(i);
    unit = calculateUnitValue(i);
  }
  if (unit === 1) {
    totalAreaLargeUnit = totalAreaSmallUnit / 144;
    totalAreaSmallUnit = totalAreaSmallUnit.toFixed(0);
    totalAreaLargeUnit = totalAreaLargeUnit.toFixed(2);
    totalAreaSmallUnit += "\"<sup>2</sup>";
    totalAreaLargeUnit += "\'<sup>2</sup>";
  } else {
    totalAreaLargeUnit = totalAreaSmallUnit / 10000;
    totalAreaSmallUnit = totalAreaSmallUnit.toFixed(0);
    totalAreaLargeUnit = totalAreaLargeUnit.toFixed(2);
    totalAreaSmallUnit += "cm<sup>2</sup>";
    totalAreaLargeUnit += "m<sup>2</sup>";
  }
  $("#totalArea").html(totalAreaSmallUnit + " (" + totalAreaLargeUnit + ")");
}
// end functions for monitor analysis



function updateResolution(i) { //updates the values for the resolution based on the aspect ratio and resolution type
  var resolutionType = getResolutionType(i);
  if (resolutionType != "custom") { //skips this function if custom because nothing will be accomplished
    var ratio = calculateAspectRatio(i);
    var x, y;

    if (ratio === "32:9") {
      if (resolutionType === "VGA") {
        x = 2160;
        y = 600;
      } else if (resolutionType === "HD") {
        x = 2560;
        y = 768;
      } else if (resolutionType === "HDplus") {
        x = 3440;
        y = 900;
      } else if (resolutionType === "FHD") {
        x = 3840;
        y = 1080;
      } else if (resolutionType === "FHDplus") {
        x = 4320;
        y = 1200;
      } else if (resolutionType === "QHD") {
        x = 5120;
        y = 1440;
      } else if (resolutionType === "QHDplus") {
        x = 5690;
        y = 1600;
      } else if (resolutionType === "4K") {
        x = 7860;
        y = 2160;
      } else if (resolutionType === "5K") {
        x = 10240;
        y = 2880;
      } else if (resolutionType === "8K") {
        x = 15720;
        y = 4320;
      }
    }
    //if a 21:9 aspect ratio
    else if (ratio === "21:9") {
      if (resolutionType === "VGA") {
        x = 1420;
        y = 600;
      } else if (resolutionType === "HD") {
        x = 1820;
        y = 768;
      } else if (resolutionType === "HDplus") {
        x = 2130;
        y = 900;
      } else if (resolutionType === "FHD") {
        x = 2560;
        y = 1080;
      } else if (resolutionType === "FHDplus") {
        x = 2560;
        y = 1080;
      } else if (resolutionType === "QHD") {
        x = 3440;
        y = 1440;
      } else if (resolutionType === "QHDplus") {
        x = 3840;
        y = 1600;
      } else if (resolutionType === "4K") {
        x = 5120;
        y = 2160;
      } else if (resolutionType === "5K") {
        x = 6720;
        y = 2880;
      } else if (resolutionType === "8K") {
        x = 10240;
        y = 4320;
      }
    } else if (ratio === "16:9") {
      if (resolutionType === "VGA") {
        x = 1024;
        y = 600;
      } else if (resolutionType === "HD") {
        x = 1366;
        y = 768;
      } else if (resolutionType === "HDplus") {
        x = 1600;
        y = 900;
      } else if (resolutionType === "FHD") {
        x = 1920;
        y = 1080;
      } else if (resolutionType === "FHDplus") {
        x = 2130;
        y = 1200;
      } else if (resolutionType === "QHD") {
        x = 2560;
        y = 1440;
      } else if (resolutionType === "QHDplus") {
        x = 2844;
        y = 1600;
      } else if (resolutionType === "4K") {
        x = 3840;
        y = 2160;
      } else if (resolutionType === "5K") {
        x = 5120;
        y = 2880;
      } else if (resolutionType === "8K") {
        x = 7860;
        y = 4320;
      }
    } else if (ratio === "16:10") {
      if (resolutionType === "VGA") {
        x = 1024;
        y = 640;
      } else if (resolutionType === "HD") {
        x = 1230;
        y = 768;
      } else if (resolutionType === "HDplus") {
        x = 1440;
        y = 900;
      } else if (resolutionType === "FHD") {
        x = 1680;
        y = 1050;
      } else if (resolutionType === "FHDplus") {
        x = 1920;
        y = 1200;
      } else if (resolutionType === "QHD") {
        x = 2304;
        y = 1440;
      } else if (resolutionType === "QHDplus") {
        x = 2560;
        y = 1600;
      } else if (resolutionType === "4K") {
        x = 3840;
        y = 2400;
      } else if (resolutionType === "5K") {
        x = 5120;
        y = 3200;
      } else if (resolutionType === "8K") {
        x = 7680;
        y = 4800;
      }
    } else if (ratio === "4:3") {
      if (resolutionType === "VGA") {
        x = 800;
        y = 600;
      } else if (resolutionType === "HD") {
        x = 1024;
        y = 768;
      } else if (resolutionType === "HDplus") {
        x = 1280;
        y = 960;
      } else if (resolutionType === "FHD") {
        x = 1440;
        y = 1080;
      } else if (resolutionType === "FHDplus") {
        x = 1600;
        y = 1200;
      } else if (resolutionType === "QHD") {
        x = 1920;
        y = 1440;
      } else if (resolutionType === "QHDplus") {
        x = 2133;
        y = 1600;
      } else if (resolutionType === "4K") {
        x = 2800;
        y = 2100;
      } else if (resolutionType === "5K") {
        x = 4096;
        y = 3072;
      } else if (resolutionType === "8K") {
        x = 6400;
        y = 4800;
      }
    } else if (ratio === "5:4") {
      if (resolutionType === "VGA") {
        x = 750;
        y = 600;
      } else if (resolutionType === "HD") {
        x = 960;
        y = 768;
      } else if (resolutionType === "HDplus") {
        x = 1280;
        y = 1024;
      } else if (resolutionType === "FHD") {
        x = 1280;
        y = 1024;
      } else if (resolutionType === "FHDplus") {
        x = 1600;
        y = 1280;
      } else if (resolutionType === "QHD") {
        x = 1800;
        y = 1440;
      } else if (resolutionType === "QHDplus") {
        x = 2000;
        y = 1600;
      } else if (resolutionType === "4K") {
        x = 2560;
        y = 2048;
      } else if (resolutionType === "5K") {
        x = 3600;
        y = 2880;
      } else if (resolutionType === "8K") {
        x = 5120;
        y = 4096;
      }
    }
    //flips x and y if the orientation is portrait
    if (getOrientation(i) === "landscape" && x != null && y != null && getResolutionType(i) != "Custom") {
      $("#horRes" + i).val(x);
      $("#verRes" + i).val(y);
    } else if (getOrientation(i) === "portrait" && x != null && y != null && getResolutionType(i) != "Custom") {
      $("#horRes" + i).val(y);
      $("#verRes" + i).val(x);
    }
    return x + "x" + y; //used in search
  }
}
// end updateResolution


function checkIfCustom(i) { //Logic for auto checking custom resolution and aspect ratio stuff
  if ($("#customResolution" + i).is(':checked')) {
    $("#horRes" + i).prop('disabled', false);
    $("#verRes" + i).prop('disabled', false);
    $('#resolutionChoices' + i + ' option[value="custom"]').prop("selected", "selected");
    $('#resolutionChoices' + i).prop("disabled", true);
    $("#customAspectRatio" + i).prop('checked', true);
  } else {
    $("#horRes" + i).prop('disabled', true);
    $("#verRes" + i).prop('disabled', true);
    $('#resolutionChoices' + i).prop("disabled", false);
  }
  if ($("#customAspectRatio" + i).is(":checked")) {
    $('#aspectRatioChoices' + i + ' option[value="detect"]').prop("selected", "selected");
    $('#aspectRatioChoices' + i).prop("disabled", true);
  } else {
    $('#aspectRatioChoices' + i).prop("disabled", false);
  }
}

function search(i) { // updates the search url for each monitor
  var searchEngine = getSearchEngine(); //get the selected search engine
  var searchURL;

  //detect which search engine is selected
  if (searchEngine === "google") searchURL = "https://www.google.com/search?q=";
  if (searchEngine === "bing") searchURL = "https://www.bing.com/search?q=";
  if (searchEngine === "duckduckgo") searchURL = "https://www.duckduckgo.com/?q=";

  searchURL += "Shop+Monitor"; //starting keywords of search

  //add basic specs to search
  if (displayAspectRatio(i) != "Custom") searchURL += "+" + displayAspectRatio(i);
  if (updateResolution(i) != undefined) searchURL += "+" + updateResolution(i);
  if (displaySize(i) != undefined) searchURL += "+" + displaySize(i);

  //add extra specs if present to the search
  if (getHDR(i) != null && getHDR(i) != undefined) searchURL += "+" + getHDR(i);
  if (getSRGB(i) != null && getSRGB(i) != undefined) searchURL += "+" + getSRGB(i);
  if (getCurved(i) != null && getCurved(i) != undefined) searchURL += "+" + getCurved(i);
  if (getTouch(i) != null && getTouch(i) != undefined) searchURL += "+" + getTouch(i);
  if (getWebcam(i) != null && getWebcam(i) != undefined) searchURL += "+" + getWebcam(i);
  if (getSpeakers(i) != null && getSpeakers(i) != undefined) searchURL += "+" + getSpeakers(i);
  if (getSync(i) != "any" && getSync(i) != "none" && getSync(i) != undefined) searchURL += "+" + getSync(i);
  if (getDisplayType(i) != "any" && getDisplayType(i) != undefined) searchURL += "+" + getDisplayType(i);
  if (getRefreshRate(i) != "any" && getRefreshRate(i) != undefined && getRefreshRate != "") searchURL += "+" + getRefreshRate(i);
  if (getResponseTime(i) != null && getResponseTime(i) != undefined && getResponseTime(i) != "") searchURL += "+" + getResponseTime(i) + "ms";
  if (getBrand(i) != null && getBrand(i) != undefined && getBrand != "") searchURL += "+" + getBrand(i);

  //apply the search to the href in the html links for 'Search for a Monitor Like This' buttons
  $("#search" + i).prop("href", searchURL);
  $("#search" + i).prop("target", "_blank");
}


// The most important function
function updateOutput() { //
  for (var i = 1; i <= numActiveMonitors; i++) { //updates all output for only the monitors that are show
    checkIfCustom(i);
    updateResolution(i);
    drawMonitor(i); //with animation
    displaySize(i);
    displayHeight(i);
    displayWidth(i);
    displayArea(i)
    displayAspectRatio(i);
    displayResolution(i);
    displayPixels(i);
    displayPPI(i);
    search(i);
    displayTotalNumPixels();
    displayTotalWidth();
    displayTotalArea();
  }
}
$(document).ready(function () { //page load function

  //sets up everything for the first time (for all monitors, even if they are not shown), slightly different than updateOutput
  for (var i = 1; i <= maxNumMonitors; i++) {
    checkIfCustom(i);
    updateResolution(i);
    drawMonitorPageLoad(i); //no animation on page load.
    displaySize(i);
    displayHeight(i);
    displayWidth(i);
    displayArea(i)
    displayAspectRatio(i);
    displayResolution(i);
    displayPixels(i);
    displayPPI(i);
    search(i);
    displayTotalNumPixels();
    displayTotalWidth();
    displayTotalArea();

    //disable custom resolution boxes so they can't be edited until radio button is selected
    $("#horRes" + i).prop("disabled", true);
    $("#verRes" + i).prop("disabled", true);
  }

  //loads the correct number of monitors to be shown on page load. Remembers a saved setup
  for (var i = 1; i <= numActiveMonitors; i++) {
    numActiveMonitors--;
    $("#monitorBox" + i).fadeIn(400);
    $("#monitorBox" + i).css("display", "inline-block");
    numActiveMonitors++;
  }

  //makes monitors draggable
  $(".monitor").draggable({
    snap: true
  });

  // sets up events to detect changes of the input, and then trigger the updateOutput() function
  $("input[type=radio]").change(function () {
    updateOutput();
  });
  $("input[type=checkbox]").change(function () {
    updateOutput();
  });
  $("input[type=number]").change(function () {
    updateOutput();
  });
  $("input[type=text]").change(function () {
    updateOutput();
  });
  $("input[type=range]").change(function () {
    for (var i = 1; i <= numActiveMonitors; i++) {
      drawMonitor(i);
    }
    displayTotalWidth();
  });
  $("input[type=number]").keyup(function () {
    updateOutput();
  });
  $("input[type=text]").keyup(function () {
    updateOutput();
  });
  $("select").change(function () {
    updateOutput();
  });
  //end set up events triggers


  //begin events for buttons being clicked
  $("#zoomIn").click(function () {
    zoom("1");
    changeSCALE();
  });
  $("#zoomOut").click(function () {
    zoom("-1");
    changeSCALE();
  });
  $("#addMonitor").click(function () {
    addMonitor();
    changeNumActiveMonitors();
  });
  $("#removeMonitor").click(function () {
    removeMonitor();
    changeNumActiveMonitors();
  });

  //special click function to animate the 'More Specs' +/- button that reveals/hides extra options for search
  $(".toggle").click(function () {
    $(".extraSpecs").toggle(500);
    if ($(".toggle").html() === "-") {
      $(".toggle").html("+");
    } else {
      $(".toggle").html("-");
    }
  });
  //end events for buttons being clicked

});
