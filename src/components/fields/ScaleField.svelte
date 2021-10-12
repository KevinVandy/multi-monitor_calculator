<script lang="ts">
  import Slider from '@smui/slider';
  import { scale } from '../../stores/SetupStore';
</script>

<div>
  <label for="zoomSlider">Zoom</label>
  <Slider bind:value={$scale} min={4} max={32} step={1} id="zoomSlider" />
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
