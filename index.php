<!--
Created by Kevin Van Cott
    Notes:
32:9 theta = .2742, 21:9 theta = .3992,
16:9 theta = .5123 rad, 16:10 theta = .5586 rad,
4:3 theta = .6435 rad, 5:4 theta = .6747
where theta is the angle the hypotenuse makes with the bottom of the monitor
-->

<?php
	$maxNumMonitors = 9;
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
		<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
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
					<div class="monitor" id="monitor<?php echo $i ?>"></div>
					<div class="monitorOptions">
						<h3>Size</h3>
						<table>
							<tr>
								<td>
									Diagonal: <input type="number" id="sizeBox<?php echo $i ?>" value="24">
									<input type="radio" name="units<?php echo $i ?>" value="1.0" checked>in
									<input type="radio" name="units<?php echo $i ?>" value=".3937">cm
								</td>
							</tr>
						</table>
					</div>
					<!-- Toggle for landscape or portrait orientation -->
					<div class="monitorOptions">
						<h3>Orientation</h3>
						<table>
							<tr>
								<td><input type="radio" name="orientation<?php echo $i ?>" value="landscape" checked>Landscape</td>
								<td><input type="radio" name="orientation<?php echo $i ?>" value="portrait">Portrait</td>
							</tr>
						</table>
					</div>
					<!-- Toggle for different aspect ratios.-->
					<div class="monitorOptions">
						<h3>Aspect Ratio</h3>
						<table>
							<tr>
								<th>Ultrawide:</th>
								<td class="rare"><input type="radio" name="aspect<?php echo $i ?>" value=".2742">32:9</td>
								<td class="standard"><input type="radio" name="aspect<?php echo $i ?>" value=".3992">21:9</td>
							</tr>
							<tr>
								<th>Wide:</th>
								<td class="standard"><input type="radio" name="aspect<?php echo $i ?>" value=".5123" checked>16:9</td>
								<td class="standard"><input type="radio" name="aspect<?php echo $i ?>" value=".5586">16:10</td>
							</tr>
							<tr>
								<th>Tall:</th>
								<td class="rare"><input type="radio" name="aspect<?php echo $i ?>" value=".6435">4:3</td>
								<td class="standard"><input type="radio" name="aspect<?php echo $i ?>" value=".6747">5:4</td>
							</tr>
							<tr>
								<td colspan="3"><input type="radio" name="aspect<?php echo $i ?>" id="customRatio<?php echo $i ?>" value="0">Detect from Custom Resolution</td>
							</tr>
						</table>
					</div>
					<!-- Resolution fields -->
					<div class="monitorOptions">
						<h3>Resolution</h3>
						<table>
							<tr>
								<td class="rare"><input type="radio" name="resolution<?php echo $i ?>" value="VGA">SVGA ~600i</td>
								<td class="standard"><input type="radio" name="resolution<?php echo $i ?>" value="HD">HD ~768p</td>
							</tr>
							<tr>
								<td class="rare"><input type="radio" name="resolution<?php echo $i ?>" value="HDplus">HD+ ~900p</td>
								<td class="standard"><input type="radio" name="resolution<?php echo $i ?>" value="FHD" checked>FHD ~1080p</td>
							</tr>
							<tr>
								<td class="rare"><input type="radio" name="resolution<?php echo $i ?>" value="FHDplus">FHD+ ~1200p</td>
								<td class="standard"><input type="radio" name="resolution<?php echo $i ?>" value="QHD">QHD ~1440p</td>
							</tr>
							<tr>
								<td class="rare"><input type="radio" name="resolution<?php echo $i ?>" value="QHDplus">QHD+ ~1600p</td>
								<td class="standard"><input type="radio" name="resolution<?php echo $i ?>" value="4K">4K ~2160p</td>
							</tr>
							<tr>
								<td class="rare"><input type="radio" name="resolution<?php echo $i ?>" value="5K">5K ~2880p</td>
								<td class="rare"><input type="radio" name="resolution<?php echo $i ?>" value="8K">8K ~4320p</td>
							</tr>
							<tr>
								<td colspan="2">Custom: <input type="radio" name="resolution<?php echo $i ?>" id="customRes<?php echo $i ?>" value="Custom"><input type="number" id="horRes<?php echo $i ?>" value="1920">X<input type="number" id="verRes<?php echo $i ?>" value="1080"></td>
							</tr>
						</table>
					</div>
					<!-- Toggle to Show more specs -->
					<h3>More Specs <span class="toggle">+</span></h3>
					<!-- More specs to be choses -->
					<div class="extraSpecs">
						<table>
							<tr>
								<td><input type="checkbox" name="HDR<?php echo $i ?>" value="HDR">HDR</td>
								<td><input type="checkbox" name="curved<?php echo $i ?>" value="Curved">Curved</td>
								<td><input type="checkbox" name="touch<?php echo $i ?>" value="Touch">Touch</td>
							</tr>
							<tr>
								<td><input type="radio" name="sync<?php echo $i ?>" value="any">Any Sync</td>
								<td><input type="radio" name="sync<?php echo $i ?>" value="G-Sync">G-Sync</td>
								<td><input type="radio" name="sync<?php echo $i ?>" value="FreeSync">FreeSync</td>

							</tr>
						</table>
						<table>
							<tr>
								<td class="right">Display Type: </td>
								<td>
									<select name="displayType<?php echo $i ?>">
								<option value="any">Any</option>
								<option value="TN">TN Panel</option>
								<option value="LCD">LCD</option>
								<option value="IPS">IPS</option>
								<option value="OLED">OLED</option>
								</select>
								</td>
							</tr>
							<tr>
								<td class="right">Refresh Rate: </td>
								<td>
									<select name="refreshRate<?php echo $i ?>">
								<option value="any">Any</option>
								<option value="30Hz">30Hz</option>
								<option value="60Hz">60Hz</option>
								<option value="90Hz">90Hz</option>
								<option value="120Hz">120Hz</option>
								<option value="144Hz">144Hz</option>
								<option value="240Hz">240Hz</option>
							</select>
								</td>
							</tr>
							<tr>
								<td class="right">Response Time:</td>
								<td>
									<select name="responseTime<?php echo $i ?>">
								<option value="any">Any</option>
								<option value="1ms">1ms</option>
								<option value="2ms">2ms</option>
								<option value="3ms">3ms</option>
								<option value="4ms">4ms</option>
								<option value="5ms">5ms</option>
								<option value="6ms">6ms</option>
                                <option value="7ms">7ms</option>
								<option value="8ms">8ms</option>
							</select>
								</td>
							</tr>
						</table>
						<table>
							<tr>
								<td>Brand: </td>
								<td><input type="text" name="brand<?php echo $i ?>"></td>
							</tr>
						</table>
					</div>
					<div class="stats">
						<h3>Stats</h3>
						<table>
							<tr>
								<th class="right">Size: </th>
								<td id="size<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Height: </th>
								<td id="height<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Width: </th>
								<td id="width<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Area: </th>
								<td id="area<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Aspect Ratio: </th>
								<td id="ratio<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Resolution: </th>
								<td id="res<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right">Pixels: </th>
								<td id="pixels<?php echo $i ?>"></td>
							</tr>
							<tr>
								<th class="right" id="ppu<?php echo $i ?>">PPI: </th>
								<td id="ppi<?php echo $i ?>"></td>
							</tr>
						</table>
					</div>
					<div class="search">
						<table>
							<tr>
								<td colspan="3"><a id="search<?php echo $i ?>">Search for a Monitor Like This</a></td>
							</tr>
							<tr>
								<td><input type="radio" name="searchEngine<?php echo $i ?>" value="google" checked>Google</td>
								<td><input type="radio" name="searchEngine<?php echo $i ?>" value="bing">Bing</td>
								<td><input type="radio" name="searchEngine<?php echo $i ?>" value="duckduckgo">Duck Duck Go</td>
							</tr>
						</table>
					</div>
				</div>
				<?php } ?>
				<!-- End of For Loop to make all monitors divs -->
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
