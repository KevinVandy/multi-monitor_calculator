<!--Created by Kevin Van Cott-->

<?php

$maxNumMonitors = 9;
$numActiveMonitors = 2;

//load values from get request (bookmark url) if this was a saved setup, else set default value
//NOTICE!!! THESE ARRAYS START AT 1 INSTEAD OF 0 TO AVOID CONFUSION BELOW WHEN REFERENCED... OR TO MAKE MORE CONFUSION... now no [$i-1] is needed, just [$i]
for($i = 1; $i <= $maxNumMonitors; $i++)
{
	$temp = filter_input(INPUT_GET, 'diagonal' . $i);
	if($temp != NULL) $diagonal[$i] = $temp;
	else $diagonal[$i] = 24;

	$temp = filter_input(INPUT_GET, 'units' . $i);
	if($temp != NULL) $unitType[$i] = $temp;
	else $unitType[$i] = "in";

	$temp = filter_input(INPUT_GET, 'bezelWidth' . $i);
	if($temp != NULL) $bezelWidth[$i] = $temp;
	else $bezelWidth[$i] = 0.50;

	$temp = filter_input(INPUT_GET, 'orientation' . $i);
	if($temp != NULL) $orientation[$i] = $temp;
	else $orientation[$i] = "landscape";

	$temp = filter_input(INPUT_GET, 'aspectRatioCommonCustom' . $i);
	if($temp != NULL && $temp === "custom") $customAspectRatio[$i] = TRUE;
	else $customAspectRatio[$i] = FALSE;

	$temp = filter_input(INPUT_GET, 'aspectRatioType' . $i);
	if($temp != NULL) $aspectRatioType[$i] = $temp;
	else $aspectRatioType[$i] = "16:9";

	$temp = filter_input(INPUT_GET, 'resolutionCommonCustom' . $i);
	if($temp != NULL && $temp === "custom") $customResolution[$i] = TRUE;
	else $customResolution[$i] = FALSE;

	$temp = filter_input(INPUT_GET, 'resolutionType' . $i);
	if($temp != NULL) $resolutionType[$i] = $temp;
	else $resolutionType[$i] = "FHD";

	$temp = filter_input(INPUT_GET, 'horRes' . $i);
	if($temp != NULL) $horizontalResolution[$i] = $temp;
	else $horizontalResolution[$i] = 1920;

	$temp = filter_input(INPUT_GET, 'verRes' . $i);
	if($temp != NULL) $verticalResolution[$i] = $temp;
	else $verticalResolution[$i] = 1080;

	$temp = filter_input(INPUT_GET, 'hdr' . $i);
	if($temp != null) $hdr[$i] = $temp;
	else $hdr[$i] = FALSE;

	$temp = filter_input(INPUT_GET, 'srgb' . $i);
	if($temp != null) $srgb[$i] = $temp;
	else $srgb[$i] = FALSE;

	$temp = filter_input(INPUT_GET, 'curved' . $i);
	if($temp != null) $curved[$i] = $temp;
	else $curved[$i] = FALSE;

	$temp = filter_input(INPUT_GET, 'touch' . $i);
	if($temp != null) $touch[$i] = $temp;
	else $touch[$i] = FALSE;

	$temp = filter_input(INPUT_GET, 'webcam' . $i);
	if($temp != null) $webcam[$i] = $temp;
	else $webcam[$i] = FALSE;

	$temp = filter_input(INPUT_GET, 'speakers' . $i);
	if($temp != null) $speakers[$i] = $temp;
	else $speakers[$i] = FALSE;

	$temp = filter_input(INPUT_GET, 'displayType' . $i);
	if($temp != null) $displayType[$i] = $temp;
	else $displayType[$i] = "any";

	$temp = filter_input(INPUT_GET, 'syncType' . $i);
	if($temp != null) $syncType[$i] = $temp;
	else $syncType[$i] = "any";

	$temp = filter_input(INPUT_GET, 'refreshRate' . $i);
	if($temp != null) $refreshRate[$i] = $temp;
	else $refreshRate[$i] = "any";

	$temp = filter_input(INPUT_GET, 'responseTime' . $i);
	if($temp != null) $responseTime[$i] = $temp;
	else $responseTime[$i] = NULL;

	$temp = filter_input(INPUT_GET, 'brand' . $i);
	if($temp != null) $brand[$i] = $temp;
	else $brand[$i] = "";
}

$temp = filter_input(INPUT_GET, 'searchEngine');
if($temp != null) $searchEngine = $temp;
else $searchEngine = "google";

?>

	<!DOCTYPE html>
	<html lang="en">

	<head>
		<title>Multi-Monitor Planning Tool</title>
		<meta name="title" content="Multi-Monitor Planning Tool by Kevin Vandy">
		<meta name="keywords" content="monitor calculator, monitor, calculator, monitor planning tool, kevin vandy, multi-monitor, PPI, resolution">
		<meta name="description" content="The Multi-Monitor Planning tool is for planning your multi-monitor setup. Check your aspect ratios, resolutions, width, height, and PPI! You can even drag monitors around to see how they fit together">
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="../normalize.css">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		<link rel="stylesheet" type="text/css" href="mmpt.css">
		<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script src="mmpt.js"></script>
		<link rel="shortcut icon" href="../favicon.ico">
	</head>

	<body>
		<header>
			<h1>Multi-Monitor Planning Tool</h1>
			<h2>A tool for planning your multi-monitor setup.</h2>
		</header>
		<noscript>
			<style type="text/css">
				main {display:none;} /* Stops the main part of page that runs on javascript from showing if javascript is disabled */
			</style>
			<div class="noscriptmsg">
				This tool runs on javascript.<br>Please enable scripting in your browser settings<br>or consider trying another web browser.<br><br>
				Need to see the source code? <a href="https://github.com/KevinVandy/multi-monitor_planning_tool.git">View it on Github</a>.
			</div>
		</noscript>
		<main>
			<section id="buttons">
				<button id="addMonitor">Add Monitor</button>
				<button id="removeMonitor">Remove Monitor</button>
				<button id="zoomIn">Zoom In</button>
				<button id="zoomOut">Zoom Out</button>
				<button id="reset" onClick="location.reload(true);">Reset</button>
				<!--The true parameter forces to reload from server instead of cache, makes it work in firefox-->
				<button id="print" onClick="window.print();">Print</button><br>
				<p id="areaTip" title="May not work in Edge">Drag Down for more Area</p>
			</section>
			<form action="index.php" method="get" id="monitorOptionsArea">
				<!-- Start of For Loop to make all monitors divs -->
				<?php for($i = 1; $i <= $maxNumMonitors; $i++){ ?>
				<!--Monitor <?php echo $i ?>-->
				<section class="monitorBox" id="monitorBox<?php echo $i ?>">
					<div class="monitor" id="monitor<?php echo $i ?>" class="ui-widget-content">
						<p>
							<?php echo $i ?>
						</p>
					</div>
					<div class="monitorOptions">
						<h3>Size</h3>
						<table>
							<tr>
								<th>Diagonal:</th>
								<td>
									<input type="number" name="diagonal<?php echo $i ?>" id="diagonal<?php echo $i ?>" value="<?php echo $diagonal[$i] ?>">
								</td>
							</tr>
							<tr>
								<th>Units:</th>
								<td>
									<input type="radio" name="units<?php echo $i ?>" value="in" <?php if($unitType[$i]=="in" ) echo htmlspecialchars( "checked") ?>>in
									<input type="radio" name="units<?php echo $i ?>" value="cm" <?php if($unitType[$i]=="cm" ) echo htmlspecialchars( "checked") ?>>cm
								</td>
							</tr>
							<tr>
								<th>Bezel Width: </th>
								<td>
									<input type="range" min="0.0" max="1.5" value="<?php echo $bezelWidth[$i] ?>" step="0.25" data-show-value="true" name="bezelWidth<?php echo $i ?>">
									<span id="bezelValue<?php echo $i ?>"><?php echo $bezelWidth[$i] ?>"</span>
								</td>

							</tr>
						</table>
					</div>
					<!-- Toggle for landscape or portrait orientation -->
					<div class="monitorOptions">
						<h3>Orientation</h3>
						<table>
							<tr>
								<td><input type="radio" name="orientation<?php echo $i ?>" value="landscape" <?php if($orientation[$i]=="landscape" ) echo htmlspecialchars( "checked") ?>>Landscape</td>
								<td><input type="radio" name="orientation<?php echo $i ?>" value="portrait" <?php if($orientation[$i]=="portrait" ) echo htmlspecialchars( "checked") ?>>Portrait</td>
							</tr>
						</table>
					</div>
					<!-- Toggle for different aspect ratios.-->
					<div class="monitorOptions">
						<h3>Aspect Ratio</h3>
						<table>
							<tr>
								<th>Common: </th>
								<td><input type="radio" name="aspectRatioCommonCustom<?php echo $i ?>" id="commonAspectRatio<?php echo $i ?>" value="common" <?php if(!$customAspectRatio[$i]) echo htmlspecialchars( "checked") ?>></td>
								<td>
									<select name="aspectRatioType<?php echo $i ?>" id="aspectRatioChoices<?php echo $i ?>">
										<option value="detect" <?php if($aspectRatioType[$i] == "detect") echo htmlspecialchars("selected") ?>>Detect</option>
										<optgroup label="Tall">
											<option value="5:4" <?php if($aspectRatioType[$i] == "5:4") echo htmlspecialchars("selected") ?>>5:4</option>
											<option value="4:3" <?php if($aspectRatioType[$i] == "4:3") echo htmlspecialchars("selected") ?>>4:3</option>
										</optgroup>
										<optgroup label="Wide">
											<option value="16:9" <?php if($aspectRatioType[$i] == "16:9") echo htmlspecialchars("selected") ?>>16:9</option>
											<option value="16:10" <?php if($aspectRatioType[$i] == "16:10") echo htmlspecialchars("selected") ?>>16:10</option>
										</optgroup>
										<optgroup label="Ultrawide">
											<option value="21:9" <?php if($aspectRatioType[$i] == "21:9") echo htmlspecialchars("selected") ?>>21:9</option>
											<option value="32:9" <?php if($aspectRatioType[$i] == "32:9") echo htmlspecialchars("selected") ?>>32:9</option>
										</optgroup>
									</select>
								</td>
							</tr>
							<tr>
								<th>Custom:</th>
								<td><input type="radio" name="aspectRatioCommonCustom<?php echo $i ?>" id="customAspectRatio<?php echo $i ?>" value="custom" <?php if($customAspectRatio[$i]) echo htmlspecialchars( "checked") ?>></td>
								<td>Detect Ratio</td>
							</tr>
						</table>
					</div>
					<!-- Resolution fields -->
					<div class="monitorOptions">
						<h3>Resolution</h3>
						<table>
							<tr>
								<th>Common: </th>
								<td><input type="radio" name="resolutionCommonCustom<?php echo $i ?>" id="commonResolution<?php echo $i ?>" value="common" <?php if(!$customResolution[$i]) echo htmlspecialchars( "checked") ?>></td>
								<td>
									<select name="resolutionType<?php echo $i ?>" id="resolutionChoices<?php echo $i ?>">
										<option value="custom" <?php if($resolutionType[$i] == "custom") echo htmlspecialchars("selected") ?> id="customResolutionChoice">Custom</option>
										<option value="VGA" <?php if($resolutionType[$i] == "VGA") echo htmlspecialchars("selected") ?>>SVGA ~600i</option>
										<option value="HD" <?php if($resolutionType[$i] == "HD") echo htmlspecialchars("selected") ?>>HD ~768p</option>
										<option value="HDplus" <?php if($resolutionType[$i] == "HDplus") echo htmlspecialchars("selected") ?>>HD+ ~900p</option>
										<option value="FHD" <?php if($resolutionType[$i] == "FHD") echo htmlspecialchars("selected") ?>>FHD ~1080p</option>
										<option value="FHDplus" <?php if($resolutionType[$i] == "FHDplus") echo htmlspecialchars("selected") ?>>FHD+ ~1200p</option>
										<option value="QHD" <?php if($resolutionType[$i] == "QHD") echo htmlspecialchars("selected") ?>>QHD ~1440p</option>
										<option value="QHDplus" <?php if($resolutionType[$i] == "QHDplus") echo htmlspecialchars("selected") ?>>QHD+ ~1600p</option>
										<option value="4K" <?php if($resolutionType[$i] == "4K") echo htmlspecialchars("selected") ?>>4K ~2160p</option>
										<option value="5K" <?php if($resolutionType[$i] == "5K") echo htmlspecialchars("selected") ?>>5K ~2880p</option>
										<option value="8K" <?php if($resolutionType[$i] == "8K") echo htmlspecialchars("selected") ?>>8K ~4320p</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>Custom: </th>
								<td><input type="radio" name="resolutionCommonCustom<?php echo $i ?>" id="customResolution<?php echo $i ?>" value="custom" <?php if($customResolution[$i]) echo htmlspecialchars( "checked") ?>></td>
								<td>
									<input type="number" id="horRes<?php echo $i ?>" value="<?php echo $horizontalResolution[$i] ?>">x<input type="number" id="verRes<?php echo $i ?>" value="<?php echo $verticalResolution[$i] ?>">
								</td>
							</tr>
						</table>
					</div>
					<!-- Toggle to Show more specs -->
					<h3>More Specs <span class="toggle">+</span></h3>
					<!-- More specs to be choses -->
					<div class="extraSpecs">
						<table>
							<tr>
								<td><input type="checkbox" name="hdr<?php echo $i ?>" value="HDR" <?php if($hdr[$i]) echo htmlspecialchars( "checked") ?>>HDR</td>
								<td><input type="checkbox" name="srgb<?php echo $i ?>" value="sRGB" <?php if($srgb[$i]) echo htmlspecialchars( "checked") ?>>sRGB</td>
								<td><input type="checkbox" name="curved<?php echo $i ?>" value="Curved" <?php if($curved[$i]) echo htmlspecialchars( "checked") ?>>Curved</td>

							</tr>
							<tr>
								<td><input type="checkbox" name="touch<?php echo $i ?>" value="Touch" <?php if($touch[$i]) echo htmlspecialchars( "checked") ?>>Touch</td>
								<td><input type="checkbox" name="webcam<?php echo $i ?>" value="Webcam" <?php if($webcam[$i]) echo htmlspecialchars( "checked") ?>>Webcam</td>
								<td><input type="checkbox" name="speakers<?php echo $i ?>" value="Speakers" <?php if($speakers[$i]) echo htmlspecialchars( "checked") ?>>Speakers</td>
							</tr>
						</table>
						<table>
							<tr>
								<th>Display Type: </th>
								<td>
									<select name="displayType<?php echo $i ?>">
										<option value="any" <?php if($displayType[$i] == "any") echo htmlspecialchars("selected") ?>>Any</option>
										<option value="TN" <?php if($displayType[$i] == "TN") echo htmlspecialchars("selected") ?>>TN Panel</option>
										<option value="VA" <?php if($displayType[$i] == "VA") echo htmlspecialchars("selected") ?>>VA Panel</option>
										<option value="LCD" <?php if($displayType[$i] == "LCD") echo htmlspecialchars("selected") ?>>LCD</option>
										<option value="IPS" <?php if($displayType[$i] == "IPS") echo htmlspecialchars("selected") ?>>IPS</option>
										<option value="OLED" <?php if($displayType[$i] == "OLED") echo htmlspecialchars("selected") ?>>OLED</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>Sync Type: </th>
								<td>
									<select name="syncType<?php echo $i ?>">
										<option value="any" <?php if($syncType[$i] == "any") echo htmlspecialchars("selected") ?>>Any</option>
										<option value="G-Sync" <?php if($syncType[$i] == "G-Sync") echo htmlspecialchars("selected") ?>>G-Sync</option>
										<option value="FreeSync" <?php if($syncType[$i] == "FreeSync") echo htmlspecialchars("selected") ?>>FreeSync</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>Refresh Rate: </th>
								<td>
									<select name="refreshRate<?php echo $i ?>">
									<option value="any" <?php if($refreshRate[$i] == "any") echo htmlspecialchars("selected") ?>>Any</option>
									<option value="30Hz" <?php if($refreshRate[$i] == "30Hz") echo htmlspecialchars("selected") ?>>30Hz</option>
									<option value="45Hz" <?php if($refreshRate[$i] == "45Hz") echo htmlspecialchars("selected") ?>>45Hz</option>
									<option value="60Hz" <?php if($refreshRate[$i] == "60Hz") echo htmlspecialchars("selected") ?>>60Hz</option>
									<option value="75Hz" <?php if($refreshRate[$i] == "75Hz") echo htmlspecialchars("selected") ?>>75Hz</option>
									<option value="90Hz" <?php if($refreshRate[$i] == "90Hz") echo htmlspecialchars("selected") ?>>90Hz</option>
									<option value="100Hz" <?php if($refreshRate[$i] == "100Hz") echo htmlspecialchars("selected") ?>>100Hz</option>
									<option value="120Hz" <?php if($refreshRate[$i] == "120Hz") echo htmlspecialchars("selected") ?>>120Hz</option>
									<option value="144Hz" <?php if($refreshRate[$i] == "144Hz") echo htmlspecialchars("selected") ?>>144Hz</option>
									<option value="240Hz" <?php if($refreshRate[$i] == "240Hz") echo htmlspecialchars("selected") ?>>240Hz</option>
								</select>
								</td>
							</tr>
							<tr>
								<th>Response Time: </th>
								<td><input type="number" name="responseTime<?php echo $i ?>" value="<?php echo $responseTime[$i] ?>">ms</td>
							</tr>
							<tr>
								<th>Brand: </th>
								<td><input type="text" name="brand<?php echo $i ?>" value="<?php echo $brand[$i] ?>"></td>
							</tr>
						</table>
					</div>
					<div class="stats">
						<h3>Stats</h3>
						<table>
							<tr>
								<th>Size: </th>
								<td id="sizeStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th>Height: </th>
								<td id="heightStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th>Width: </th>
								<td id="widthStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th>Area: </th>
								<td id="areaStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th>Aspect Ratio: </th>
								<td id="aspectRatioStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th>Resolution: </th>
								<td id="resolutionStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th>Pixels: </th>
								<td id="pixelsStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th id="ppuStat<?php echo $i ?>">PPI: </th>
								<td id="ppiStat<?php echo $i ?>"></td>
							</tr>
						</table>
					</div>
					<div class="search">
						<table>
							<tr>
								<td colspan="3"><a id="search<?php echo $i ?>">Search for This Monitor</a></td>
							</tr>
						</table>
					</div>
				</section>
				<?php } ?>
				<!-- End of For Loop to make all monitors divs -->
				<section class="searchEngine">
					<table>
						<tr>
							<th>Change Search Engine: </th>
							<td><select name="searchEngine">
								<option value="google" <?php if($searchEngine == "google") echo htmlspecialchars("selected") ?>>Google</option>
								<option value="bing" <?php if($searchEngine == "bing") echo htmlspecialchars("selected") ?>>Bing</option>
								<option value="duckduckgo" <?php if($searchEngine == "duckduckgo") echo htmlspecialchars("selected") ?>>Duck Duck Go</option>
							</select>
							</td>
						</tr>
					</table>
				</section>
				<section id="analysis">
					<h2>Set-up Analysis</h2>
					<table>
						<tr>
							<th>Total Pixels: </th>
							<td id="totalPixels"></td>
						</tr>
						<tr title="This includes bezels">
							<th>Total Width: </th>
							<td id="totalWidth"></td>
						</tr>
						<tr title="Total Screen Area">
							<th>Screen Real Estate: </th>
							<td id="totalArea"></td>
						</tr>
					</table>
				</section>
				<section id="save">
					<p>Want to save this setup for later or share your setup with a friend? Click the 'Save This Setup' Button, and then bookmark or share the URL. (It's a very long URL! Also, it may not fully work in older verions of Internet Explorer or Edge)</p>
				</section>
				<input type="submit" value="Save This Setup">
			</form>
		</main>
		<footer>
			<p>A Kevin Vandy Project <img src="../assets/logos/favicon-small.png" width="16" height="16" alt="logo"></p>
			<p>View on this project on <a href="https://github.com/KevinVandy/multi-monitor_planning_tool" target="_blank">GitHub</a> or <a href="https://gitlab.com/KevinVandy/multi-monitor_planning_tool" target="_blank"> GitLab</a></p>
			<p>Submit bug reports or feature requests on the <a href="https://github.com/KevinVandy/multi-monitor_planning_tool/issues" target="_blank">GitHub Issues Tab</a></p>
		</footer>
	</body>

	</html>
