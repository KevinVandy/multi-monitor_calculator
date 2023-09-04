<script lang="ts">
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import IconButton from '@smui/icon-button';
	import { monitors } from '$lib/stores/SetupStore';
	import type { IMonitor } from '$lib/utils/interfaces';

	export let monitor: IMonitor;

	$: disableResetButton = monitor.rotateX === 0 && monitor.rotateY === 0 && monitor.offsetZ === 0;

	$: disableOffsetZ =
		!monitor.offsetZ &&
		($monitors.length <= 1 ||
			($monitors.every((monitor) => monitor.rotateX === 0) &&
				$monitors.every((monitor) => monitor.rotateY === 0)));
</script>

<div>
	<Wrapper>
		<IconButton
			aria-label="Reset Rotation and Tilt"
			class="material-icons rotate-button reset-rotation-button"
			disabled={disableResetButton}
			on:click={() => {
				monitor.rotateX = 0;
				monitor.rotateY = 0;
				monitor.offsetZ = 0;
				monitors.set($monitors);
			}}
		>
			reset_tv
		</IconButton>
		<Tooltip>Reset Rotation and Tilt</Tooltip>
	</Wrapper>
	<Wrapper>
		<IconButton
			aria-label="Rotate Monitor Up"
			class="material-icons rotate-button rotate-up-button"
			on:click={() => {
				if (monitor.rotateX < 30) {
					monitor.rotateX += 3;
					monitors.set($monitors);
				}
			}}
		>
			rotate_left
		</IconButton>
		<Tooltip>Rotate Monitor Up</Tooltip>
	</Wrapper>
	<Wrapper>
		<IconButton
			aria-label="Rotate Monitor Down"
			class="material-icons rotate-button rotate-down-button"
			on:click={() => {
				if (monitor.rotateX > -30) {
					monitor.rotateX -= 3;
					monitors.set($monitors);
				}
			}}
		>
			rotate_right
		</IconButton>
		<Tooltip>Rotate Monitor Down</Tooltip>
	</Wrapper>
	<Wrapper>
		<IconButton
			aria-label="Rotate Monitor Left"
			class="material-icons rotate-button rotate-left-button"
			on:click={() => {
				if (monitor.rotateY > -60) {
					monitor.rotateY -= 5;
					monitors.set($monitors);
				}
			}}
		>
			rotate_left
		</IconButton>
		<Tooltip>Rotate Monitor Left</Tooltip>
	</Wrapper>
	<Wrapper>
		<IconButton
			aria-label="Rotate Monitor Right"
			class="material-icons rotate-button rotate-right-button"
			on:click={() => {
				if (monitor.rotateY < 60) {
					monitor.rotateY += 5;
					monitors.set($monitors);
				}
			}}
		>
			rotate_right
		</IconButton>
		<Tooltip>Rotate Monitor Right</Tooltip>
	</Wrapper>
	<Wrapper>
		<IconButton
			aria-label="Move Monitor Forward"
			class="material-icons rotate-button move-forward-button"
			disabled={disableOffsetZ}
			on:click={() => {
				if (monitor.offsetZ < 50) {
					monitor.offsetZ += 18;
					monitors.set($monitors);
				}
			}}
		>
			arrow_upward
		</IconButton>
		<Tooltip>
			Move Monitor Forward. WARNING, Moving Monitor forward makes the monitor appear bigger than it
			is!</Tooltip
		>
	</Wrapper>
	<Wrapper>
		<IconButton
			aria-label="Move Monitor Backward"
			class="material-icons rotate-button move-backward-button"
			disabled={disableOffsetZ}
			on:click={() => {
				if (monitor.offsetZ > -50) {
					monitor.offsetZ -= 18;
					monitors.set($monitors);
				}
			}}
		>
			arrow_downward
		</IconButton>
		<Tooltip>
			Move Monitor Backward. WARNING, Moving Monitor backward makes the monitor appear smaller than
			it is!</Tooltip
		>
	</Wrapper>
</div>

<style>
	:global(.rotate-button) {
		color: #999;
		font-size: 1rem;
		position: absolute;
	}

	:global(.reset-rotation-button) {
		left: 0;
		top: 0;
	}

	:global(.rotate-up-button) {
		top: 0;
		left: calc(50% - 1.5rem);
		transform: rotate(90deg);
	}

	:global(.rotate-down-button) {
		left: calc(50% - 1.5rem);
		bottom: 0;
		transform: rotate(90deg);
	}

	:global(.rotate-right-button) {
		top: calc(50% - 1.5rem);
		right: 0;
	}

	:global(.rotate-left-button) {
		left: 0;
		top: calc(50% - 1.5rem);
	}

	:global(.move-forward-button) {
		left: calc(50% - 4rem);
		bottom: 0;
	}
	:global(.move-backward-button) {
		left: calc(50% + 1rem);
		bottom: 0;
	}
</style>
