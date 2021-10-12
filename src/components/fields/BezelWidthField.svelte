<script lang="ts">
  import Slider from '@smui/slider';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;
</script>

<div>
  <label for="bezelWidthSlider">Bezel Width</label>
  <Slider
    bind:value={monitor.bezelWidth}
    min={0}
    max={2}
    on:MDCSlider:change={() => monitors.set($monitors)}
    step={0.25}
    discrete
    id="bezelWidthSlider"
  />
</div>

<style>
  div {
    background-color: whitesmoke;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    max-height: 55px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  label {
    text-align: left;
    display: block;
    width: 100%;
    transform: scale(0.75);
    color: rgba(0, 0, 0, 0.6);
  }
</style>
