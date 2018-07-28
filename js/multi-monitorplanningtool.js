'use strict';
/*  By Kevin Van Cott
    theta values calculated from arctan(aspect ratio)
    32:9 theta = .2742 rad
    21:9 theta = .3992 rad  -- 21:9 is actually 64:27
    16:9 theta = .5123 rad
    16:10 theta = .5586 rad
    4:3 theta = .6435 rad
    5:4 theta = .6747 rad
    height = size * sin (theta)
    width = size * cos (theta)
    14px = 1" (default, changed by ZoomIn & ZoomOut) */
/*global $, alert, document */
var SCALE = 14; //scale
var monitorCount = 2;
// end global variables
// functions to get data from the html
function getUnit(i) {
	return parseFloat($("input[name=units" + i + "]:radio:checked").val());
}

function getOrientation(i) {
	return $("input[name=orientation" + i + "]:radio:checked").val();
}

function getMonitor(i) {
	return $("#monitor" + i);
}

function getSizeBox(i) {
	return $("#sizeBox" + i);
}

function getSize(i) {
	return parseFloat(getSizeBox(i).val());
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

function getRatio(i) {
	return parseFloat($("input[name=aspect" + i + "]:radio:checked").val());
}

function getResolutionType(i) {
	return $("input[name=resolution" + i + "]:radio:checked").val();
}

function getTheta(i) {
	var theta = parseFloat($("input[name=aspect" + i + "]:radio:checked").val());
	if (theta === 0) { //if custom aspect ratio (denoted by 0) then recalculate theta
		theta = Math.atan(getVerRes(i) / getHorRes(i));
	}
	return theta;
}

function getHDR(i) {
	var HDR = $("input[name=HDR" + i + "]:checkbox:checked").val();
	if (HDR === undefined || HDR === null || HDR === "") {
		return null;
	} else {
		return HDR;
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

function getSync(i) {
	var sync = $("input[name=sync" + i + "]:radio:checked").val();
	if (sync === undefined || sync === null || sync === "") {
		return null;
	} else {
		return sync;
	}
}

function getDisplayType(i) {
	return $("select[name=displayType" + i + "] option:selected").val();
}

function getRefreshRate(i) {
	return $("select[name=refreshRate" + i + "] option:selected").val();
}

function getResponseTime(i) {
	return $("select[name=responseTime" + i + "] option:selected").val();
}

function getBrand(i) {
	var brand = $("input[name=brand" + i + "]").val();
	if (brand === undefined || brand === null || brand === "") {
		return null;
	} else {
		return brand;
	}
}

function getSearchEngine(i) {
	var searchEngine = $("input[name=searchEngine" + i + "]:radio:checked").val();
	return searchEngine; //TODO change all radio buttons for all monitors to prefered search engine on change of 1.
}
// end functions to get data from the html
//functions to make simple calculations
function calculateHeight(i) {
	if (getOrientation(i) === "landscape") {
		return parseFloat(getSize(i) * Math.sin(getTheta(i)));
	} else if (getOrientation(i) === "portrait") {
		return parseFloat(getSize(i) * Math.cos(getTheta(i)));
	} else {
		return 0;
	}
}

function calculateWidth(i) {
	if (getOrientation(i) === "landscape") {
		return parseFloat(getSize(i) * Math.cos(getTheta(i)));
	} else if (getOrientation(i) === "portrait") {
		return parseFloat(getSize(i) * Math.sin(getTheta(i)));
	} else {
		return 0;
	}
}

function getHeight(i) {
	return calculateHeight(i);
}

function getWidth(i) {
	return calculateWidth(i);
}

function calculateArea(i) {
	return getHeight(i) * getWidth(i);
}

function calculateNumPixels(i) {
	return parseInt($("#verRes" + i).val()) * parseInt($("#horRes" + i).val());
}
//used to draw the monitors on page load without doing the animation
function drawMonitorPageLoad(i) {
	var monitor = getMonitor(i);
	var pixHeight = SCALE * getHeight(i) * getUnit(i);
	var pixWidth = SCALE * getWidth(i) * getUnit(i);
	monitor.animate({
		width: pixWidth + "px",
		height: pixHeight + "px"
	}, 1);
}
// Calculates height in pixels, updates size of monitor, applies it to the css to draw the monitor in its new size with animation
function drawMonitor(i) {
	if (getHeight(i) > 3 && getHeight(i) < 500 && getWidth(i) > 3 && getWidth(i) < 500 && getHorRes(i) > 200 && getHorRes(i) < 20000 && getVerRes(i) > 200 && getVerRes(i) < 20000) {
		var monitor = getMonitor(i);
		var pixHeight = SCALE * getHeight(i) * getUnit(i);
		var pixWidth = SCALE * getWidth(i) * getUnit(i);
		monitor.finish().animate({
			width: pixWidth + "px",
			height: pixHeight + "px"
		}, 400);
	}
}
// end functions to make simple calculations
//functions for buttons
function addMonitor() {
	if (monitorCount >= 6) {
		alert("This tool has a limit of 6 monitors");
	} else {
		$("#monitorBox" + ++monitorCount).fadeIn(400);
		$("#monitorBox" + monitorCount).css("display", "inline-block");
		updateOutput();
	}
}

function removeMonitor() {
	if (monitorCount > 0) {
		$("#monitorBox" + monitorCount--).fadeOut(200);
		updateOutput();
	}
}

function zoom(x) {
	SCALE += parseInt(x);
	updateOutput();
}
// end functions for buttons
//functions for displaying values in the stats output section
function displaySize(i) {
	var size = getSize(i).toFixed(1);
	if (getUnit(i) > 0.5) {
		size += "\"";
	} else {
		size += "cm";
	}
	$("#size" + i).html(size);
	return size;
}
// Shortens height to two decimals places, update the value in html
function displayHeight(i) {
	var height = getHeight(i).toFixed(1);
	if (getUnit(i) > 0.5) {
		height += "\"";
	} else {
		height += "cm";
	}
	$("#height" + i).html(height);
	return height;
}
// Shortens width to one decimal place, updates the value in stats section
function displayWidth(i) {
	var width = getWidth(i).toFixed(1);
	if (getUnit(i) > 0.5) {
		width += "\"";
	} else {
		width += "cm";
	}
	$("#width" + i).html(width);
	return width;
}
//Display Monitor area aka screen real estate
function displayArea(i) {
	var area = calculateArea(i).toFixed(1);
	if (getUnit(i) > 0.5) {
		area += "\"<sup>2</sup>";
	} else {
		area += "cm<sup>2</sup>";
	}
	$("#area" + i).html(area);
}
//Display the Aspect Ratio in the stats section. The extra arctan calculations see if a custom resolution is close enough to a default aspect ratio
function displayAspectRatio(i) {
	var aspectRatio;
	if (getTheta(i) === 0.2742 || ((Math.atan(getVerRes(i) / getHorRes(i)) >= 0.27) && (Math.atan(getVerRes(i) / getHorRes(i)) <= 0.28)) || ((Math.atan(getHorRes(i) / getVerRes(i)) >= 0.27) && (Math.atan(getHorRes(i) / getVerRes(i)) <= 0.28))) {
		aspectRatio = "32:9";
	} else if (getTheta(i) === 0.3992 || ((Math.atan(getVerRes(i) / getHorRes(i)) >= 0.39) && (Math.atan(getVerRes(i) / getHorRes(i)) <= 0.4)) || ((Math.atan(getHorRes(i) / getVerRes(i)) >= 0.38) && (Math.atan(getHorRes(i) / getVerRes(i)) <= 0.42))) {
		aspectRatio = "21:9";
	} else if (getTheta(i) === 0.5123 || ((Math.atan(getVerRes(i) / getHorRes(i)) >= 0.51) && (Math.atan(getVerRes(i) / getHorRes(i)) <= 0.52)) || ((Math.atan(getHorRes(i) / getVerRes(i)) >= 0.51) && (Math.atan(getHorRes(i) / getVerRes(i)) <= 0.52))) {
		aspectRatio = "16:9";
	} else if (getTheta(i) === 0.5586 || ((Math.atan(getVerRes(i) / getHorRes(i)) >= 0.55) && (Math.atan(getVerRes(i) / getHorRes(i)) <= 0.56)) || ((Math.atan(getHorRes(i) / getVerRes(i)) >= 0.55) && (Math.atan(getHorRes(i) / getVerRes(i)) <= 0.56))) {
		aspectRatio = "16:10";
	} else if (getTheta(i) === 0.6435 || ((Math.atan(getVerRes(i) / getHorRes(i)) >= 0.64) && (Math.atan(getVerRes(i) / getHorRes(i)) <= 0.65)) || ((Math.atan(getHorRes(i) / getVerRes(i)) >= 0.64) && (Math.atan(getHorRes(i) / getVerRes(i)) <= 0.65))) {
		aspectRatio = "4:3";
	} else if (getTheta(i) === 0.6747 || ((Math.atan(getVerRes(i) / getHorRes(i)) >= 0.67) && (Math.atan(getVerRes(i) / getHorRes(i)) <= 0.68)) || ((Math.atan(getHorRes(i) / getVerRes(i)) >= 0.67) && (Math.atan(getHorRes(i) / getVerRes(i)) <= 0.68))) {
		aspectRatio = "5:4";
	} else if (getTheta(i) === 0 || getResolutionType(i) === "Custom") {
		aspectRatio = "Custom"; //This only occurs if the user has entered their own resolution that does not match a default aspect ratio
	} else {
		aspectRatio = "Unknown"; //This only occurs if the user has entered their own resolution that does not match a default aspect ratio
	}
	$("#ratio" + i).html(aspectRatio);
	return aspectRatio;
}
//Display the Resolution again in the stats section, input from the custom resolution
function displayResolution(i) {
	var resolution = parseInt($("#horRes" + i).val()) + "x" + parseInt($("#verRes" + i).val());
	$("#res" + i).html(resolution);
	return resolution; //used in google search function
}
// Displays number of pixels of the monitor in the stats section
function displayPixels(i) {
	$("#pixels" + i).html(calculateNumPixels(i).toLocaleString());
}
// Displays pixels per inch and updates values in the stats section
function displayPPI(i) {
	if (getUnit(i) === 1) {
		$("#ppu" + i).html("PPI: ");
	} else {
		$("#ppu" + i).html("PPCM");
	}
	$("#ppi" + i).html((getRes(i) / ((getHeight(i) + getWidth(i)) / 2)).toFixed(1)); //Just uses the average of the vertical and horizontal values
}
// end functions for displaying values in the stats output section
//Display culmitive number of pixels of all active monitors at the bottom of the page
function displayTotalNumPixels() {
	var totalNumPixels = 0;
	for (var i = 1; i <= monitorCount; i++) {
		totalNumPixels += parseInt($("#horRes" + i).val()) * parseInt($("#verRes" + i).val());
	}
	$("#totalPixels").text(totalNumPixels.toLocaleString());
}
//Display an estimate of the total width that will be needed for desk space to accomadate all monitors assuming 1 inch bezzels
function displayTotalWidth() {
	var totalWidthSmallUnit = 0;
	var totalWidthLargeUnit = 0;
	var inchesRemainder = 0;
	var unit = 0;
	for (var i = 1; i <= monitorCount; i++) {
		totalWidthSmallUnit += getWidth(i);
		unit = getUnit(i);
	}
	totalWidthSmallUnit += monitorCount * 2; //adds bezzels that are 1 inch/cm wide on each side of the monitor
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
//Display the total area (screen real estate) of all of the active monitors
function displayTotalArea() {
	var totalAreaSmallUnit = 0;
	var totalAreaLargeUnit = 0;
	var unit = 0;
	for (var i = 0; i <= monitorCount; i++) {
		totalAreaSmallUnit += calculateArea(i);
		unit = getUnit(i);
	}
	if (unit === 1) {
		totalAreaLargeUnit = totalAreaSmallUnit / 144;
		totalAreaSmallUnit = totalAreaSmallUnit.toFixed(0);
		totalAreaLargeUnit = totalAreaLargeUnit.toFixed(2);
		totalAreaSmallUnit += "in<sup>2</sup>";
		totalAreaLargeUnit += "ft<sup>2</sup>";
	} else {
		totalAreaLargeUnit = totalAreaSmallUnit / 10000;
		totalAreaSmallUnit = totalAreaSmallUnit.toFixed(0);
		totalAreaLargeUnit = totalAreaLargeUnit.toFixed(2);
		totalAreaSmallUnit += "cm<sup>2</sup>";
		totalAreaLargeUnit += "m<sup>2</sup>";
	}
	$("#totalArea").html(totalAreaSmallUnit + " (" + totalAreaLargeUnit + ")");
}
//updates the values for the resolution based on the aspect ratio and resolution
function updateResolution(i) {
	var x, y;
	var ratio = getRatio(i);
	var resolutionType = getResolutionType(i);
	//if a 32:9 aspect ratio
	if (ratio === .2742) {
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
	else if (ratio === .3992) {
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
	}
	//if a 16:9 aspect ratio
	else if (ratio === .5123) {
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
	}
	//if a 16:10 aspect ratio
	else if (ratio === .5586) {
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
	}
	//if a 4:3 aspect ratio
	else if (ratio === .6435) {
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
	}
	//if a 5:4 aspect ratio
	else if (ratio === .6747) {
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
	return x + "x" + y;
}

function checkIfCustom(i) {
	$("input[name=resolution" + i + "]").change(function () {
		if ($("#customRes" + i).is(':checked')) {
			$("#horRes" + i).prop('disabled', false);
			$("#verRes" + i).prop('disabled', false);
			$("#customRatio" + i).prop("checked", true); //check custom ratio automatically too
		} else {
			$("#horRes" + i).prop('disabled', true);
			$("#verRes" + i).prop('disabled', true);
		}
	});
	$("input[name=aspect" + i + "]").change(function () {
		if ($("#customRatio" + i).is(':checked')) {
			$("#horRes" + i).prop('disabled', false);
			$("#verRes" + i).prop('disabled', false);
			$("#customRes" + i).prop("checked", true); //check custom resolution automatically too
		}
	});
}

function search(i) {
	var searchEngine = getSearchEngine(i);
	var searchURL;
	if (searchEngine === "google") searchURL = "https://www.google.com/search?q=";
	if (searchEngine === "bing") searchURL = "https://www.bing.com/search?q=";
	if (searchEngine === "duckduckgo") searchURL = "https://www.duckduckgo.com/?q=";
	searchURL += "Shop+Monitor"
	if (displayAspectRatio(i) != "Custom") searchURL += "+" + displayAspectRatio(i);
	searchURL += "+" + updateResolution(i); //add resolution to the search
	searchURL += "+" + displaySize(i); //add size to the search
	//add extra specs if present to the search
	if(getHDR(i) != null) searchURL += "+" + getHDR(i);
	if(getCurved(i) != null) searchURL += "+" + getCurved(i);
	if(getTouch(i) != null) searchURL += "+" + getTouch(i);
	if(getSync(i) != null) searchURL += "+" + getSync(i);
	if(getDisplayType(i) != "any") searchURL += "+" + getDisplayType(i);
	if(getRefreshRate(i) != "any") searchURL += "+" + getRefreshRate(i);
	if(getResponseTime(i) != "any") searchURL += "+" + getResponseTime(i);
	if(getBrand(i) != null) searchURL += "+" + getBrand(i);
	//apply the search href
	$("#search" + i).attr("href", searchURL);
	$("#search" + i).attr("target", "_blank");
}

function updateOutput() {
	for (var i = 1; i <= monitorCount; i++) {
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
$(document).ready(function () {
	//draws monitors for the first time. Disables custom resolution input boxes at first until the radio button is selected
	//sets up everything for the first time
	for (var i = 1; i <= 6; i++) {
		checkIfCustom(i);
		updateResolution(i);
		drawMonitorPageLoad(i); //no animation on page load. This is why its not just a call to updateOutput()
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
		$("#horRes" + i).prop('disabled', true);
		$("#verRes" + i).prop('disabled', true);
	}
	// setup click listeners and set the monitors to their initial sizes (set from values in the html)"
	//functions for setting up events
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
	$("input[type=number]").keyup(function () {
		updateOutput();
	});
	$("input[type=text]").keyup(function () {
		updateOutput();
	});
	$("select").change(function () {
		updateOutput();
	});
	$("#zoomIn").click(function () {
		zoom("1");
	});
	$("#zoomOut").click(function () {
		zoom("-1");
	});
	$("#addMonitor").click(function () {
		addMonitor();
	});
	$("#removeMonitor").click(function () {
		removeMonitor();
	});
	$("input[name=resolution" + i + "]").change(function () {
		updateOutput();
	});
	$(".toggle").click(function () {
		$(".extraSpecs").toggle(500);
		if ($(".toggle").html() === "-") {
			$(".toggle").html("+");
		} else {
			$(".toggle").html("-");
		}
	});
});
