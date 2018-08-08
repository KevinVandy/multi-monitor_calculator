<!--
	Created by Kevin Van Cott
-->

<?php
	$maxNumMonitors = 9;

	//default values, they get set for all 9 monitors in a for loop (arrays)
	//NOTICE!!! THESE ARRAYS START AT 1 INSTEAD OF 0 TO AVOID CONFUSION BELOW WHEN REFERENCED... OR TO MAKE MORE CONFUSION... now no [$i-1] is needed, just [$i]
	if(!isset($diagonal)) for($i = 1; $i <= $maxNumMonitors; $i++) $diagonal[$i] = 24;
	if(!isset($unitType)) for($i = 1; $i <= $maxNumMonitors; $i++) $unitType[$i] = "in";
	if(!isset($orientation)) for($i = 1; $i <= $maxNumMonitors; $i++) $orientation[$i] = "landscape";
	if(!isset($customAspectRatio)) for($i = 1; $i <= $maxNumMonitors; $i++) $customAspectRatio[$i] = FALSE;
	if(!isset($aspectRatioType)) for($i = 1; $i <= $maxNumMonitors; $i++) $aspectRatioType[$i] = "16:9";
	if(!isset($customResolution)) for($i = 1; $i <= $maxNumMonitors; $i++) $customResolution[$i] = FALSE;
	if(!isset($resolutionType)) for($i = 1; $i <= $maxNumMonitors; $i++) $resolutionType[$i] = "FHD";
	if(!isset($hdr)) for($i = 1; $i <= $maxNumMonitors; $i++) $hdr[$i] = FALSE;
	if(!isset($curved)) for($i = 1; $i <= $maxNumMonitors; $i++) $curved[$i] = FALSE;
	if(!isset($touch)) for($i = 1; $i <= $maxNumMonitors; $i++) $touch[$i] = FALSE;
	if(!isset($displayType)) for($i = 1; $i <= $maxNumMonitors; $i++) $displayType[$i] = "any";
	if(!isset($syncType)) for($i = 1; $i <= $maxNumMonitors; $i++) $syncType[$i] = "any";
	if(!isset($refreshRate)) for($i = 1; $i <= $maxNumMonitors; $i++) $refreshRate[$i] = "any";
	if(!isset($responseTime)) for($i = 1; $i <= $maxNumMonitors; $i++) $responseTime[$i] = NULL;
	if(!isset($searchEngine)) $searchEngine = "google";
?>

	<!DOCTYPE html>
	<html lang="en">

	<head>
		<title>Multi-Monitor Planning Tool</title>
		<meta name="title" content="Multi-Monitor Planning Tool by Kevin Vandy">
		<meta name="keywords" content="monitor calculator, monitor, monitor planning tool, kevin vandy, multi-monitor, PPI, resolution">
		<meta name="description" content="The Multi-Monitor Planning tool is for planning your multi-monitor setup. Check your aspect ratios, resolutions, width, height, and PPI!">
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="../normalize.css">
		<link rel="stylesheet" type="text/css" href="mmpt.css">
		<!--<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>-->
		<script src=jquery-3.3.1.js></script>
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
			<div id="options">
				<button id="addMonitor">Add Monitor</button>
				<button id="removeMonitor">Remove Monitor</button>
				<button id="zoomIn">Zoom In</button>
				<button id="zoomOut">Zoom Out</button>
				<button id="reset" onClick="location.reload(true);">Reset</button>
				<!--The true parameter forces to reload from server instead of cache, makes it work in firefox-->
				<button id="print" onClick="window.print();">Print</button>
			</div>
			<div id="monitorArea">
				<!-- Start of For Loop to make all monitors divs -->
				<?php for($i = 1; $i <= $maxNumMonitors; $i++){ ?>
				<!--Monitor <?php echo $i ?>-->
				<div class="monitorBox" id="monitorBox<?php echo $i ?>">
					<div class="monitor" id="monitor<?php echo $i ?>"><p><?php echo $i ?></p></div>
					<div class="monitorOptions">
						<h3>Size</h3>
						<table>
							<tr>
								<th>Diagonal:</th>
								<td>
									<input type="number" id="size<?php echo $i ?>" value="<?php echo $diagonal[$i] ?>">
								</td>
							</tr>
							<tr>
								<th>Units:</th>
								<td>
									<input type="radio" name="units<?php echo $i ?>" value="1.0" <?php if($unitType[$i]=="in" ) echo htmlspecialchars( "checked") ?>>in
									<input type="radio" name="units<?php echo $i ?>" value=".3937" <?php if($unitType[$i]=="cm" ) echo htmlspecialchars( "checked") ?>>cm
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
								<td><input type="radio" name="aspectRatioCommonCustom<?php echo $i ?>" id="standardRatio<?php echo $i ?>" <?php if(!$customAspectRatio[$i]) echo htmlspecialchars( "checked") ?>></td>
								<td>
									<select name="aspectRatioType<?php echo $i ?>">
										<option value="custom" <?php if($aspectRatioType[$i] == "custom") echo htmlspecialchars("selected") ?>>Custom</option>
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
								<td><input type="radio" name="aspectRatioCommonCustom<?php echo $i ?>" id="customRatio<?php echo $i ?>" value="custom" <?php if($customAspectRatio[$i]) echo htmlspecialchars( "checked") ?>></td>
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
								<td><input type="radio" name="resolutionCommonCustom<?php echo $i ?>" id="customRes<?php echo $i ?>" value="standard" <?php if(!$customResolution[$i]) echo htmlspecialchars( "checked") ?>></td>
								<td>
									<select name="resolutionType<?php echo $i ?>">
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
								<td><input type="radio" name="resolutionCommonCustom<?php echo $i ?>" id="customRes<?php echo $i ?>" value="custom" <?php if($customResolution[$i]) echo htmlspecialchars( "checked") ?>></td>
								<td>
									<input type="number" id="horRes<?php echo $i ?>" value="1920">x<input type="number" id="verRes<?php echo $i ?>" value="1080">
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
								<td><input type="checkbox" name="curved<?php echo $i ?>" value="Curved" <?php if($curved[$i]) echo htmlspecialchars( "checked") ?>>Curved</td>
								<td><input type="checkbox" name="touch<?php echo $i ?>" value="Touch" <?php if($touch[$i]) echo htmlspecialchars( "checked") ?>>Touch</td>
							</tr>
						</table>
						<table>
							<tr>
								<td class="right">Display Type: </td>
								<td>
									<select name="displayType<?php echo $i ?>">
										<option value="any">Any</option>
										<option value="TN">TN Panel</option>
										<option value="VA">VA Panel</option>
										<option value="LCD">LCD</option>
										<option value="IPS">IPS</option>
										<option value="OLED">OLED</option>
									</select>
								</td>
							</tr>
							<tr>
								<td class="right">Sync Type: </td>
								<td>
									<select name="syncType<?php echo $i ?>">
										<option value="any">Any</option>
										<option value="G-Sync">G-Sync</option>
										<option value="FreeSync">FreeSync</option>
									</select>
								</td>
							</tr>
							<tr>
								<td class="right">Refresh Rate: </td>
								<td>
									<select name="refreshRate<?php echo $i ?>">
									<option value="any">Any</option>
									<option value="30Hz">30Hz</option>
									<option value="45Hz">45Hz</option>
									<option value="60Hz">60Hz</option>
									<option value="75Hz">75Hz</option>
									<option value="90Hz">90Hz</option>
									<option value="100Hz">100Hz</option>
									<option value="120Hz">120Hz</option>
									<option value="144Hz">144Hz</option>
									<option value="240Hz">240Hz</option>
								</select>
								</td>
							</tr>
							<tr>
								<td class="right">Response Time: </td>
								<td><input type="number" name="responseTime<?php echo $i ?>" value="<?php echo $responseTime[$i] ?>">ms</td>
							</tr>
							<tr>
								<td class="right">Brand: </td>
								<td><input type="text" name="brand<?php echo $i ?>"></td>
							</tr>
						</table>
					</div>
					<div class="stats">
						<h3>Stats</h3>
						<table>
							<tr>
								<th class="right">Size: </th>
								<td id="sizeStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Height: </th>
								<td id="heightStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Width: </th>
								<td id="widthStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Area: </th>
								<td id="areaStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Aspect Ratio: </th>
								<td id="aspectRatioStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Resolution: </th>
								<td id="resolutionStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Pixels: </th>
								<td id="pixelsStat<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right" id="ppuStat<?php echo $i ?>">PPI: </th>
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
				</div>
				<?php } ?>
				<!-- End of For Loop to make all monitors divs -->
				<div class="searchEngine">
				<table>
					<tr>
						<th>Select Search Engine: </th>
						<td><select name="searchEngine">
								<option value="google" <?php if($searchEngine == "google") echo htmlspecialchars("selected") ?>>Google</option>
								<option value="bing" <?php if($searchEngine == "bing") echo htmlspecialchars("selected") ?>>Bing</option>
								<option value="duckduckgo" <?php if($searchEngine == "duckduckgo") echo htmlspecialchars("selected") ?>>Duck Duck Go</option>
							</select>
						</td>
					</tr>
				</table>
				</div>
			</div>
			<div id="analysis">
				<h3>Set-up Analysis</h3>
				<table>
					<tr>
						<td class="right">Total Pixels: </td>
						<td class="left" id="totalPixels"></td>
					</tr>
					<tr>
						<td class="right">Total Width: </td>
						<td class="left" id="totalWidth"></td>
					</tr>
					<tr>
						<td class="right">Total Screen Area: </td>
						<td class="left" id="totalArea"></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
					</tr>
				</table>
			</div>
		</main>
		<footer>
			<p>A Kevin Vandy Project <img src="../assets/logos/favicon-small.png" width="15" height="15" alt="logo"></p>
			<p>View on this project on <a href="https://github.com/KevinVandy/multi-monitor_planning_tool" target="_blank">Github</a></p>
		</footer>
	</body>

	</html>
