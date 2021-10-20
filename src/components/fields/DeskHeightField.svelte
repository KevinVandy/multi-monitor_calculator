<script lang="ts">
  import Slider from '@smui/slider';
  import { deskHeight } from '../../stores/SetupStore';
</script>

<div>
  <label for="deskHeightSlider">Desk Height</label>
  <Slider
    bind:value={$deskHeight}
    min={1}
    max={6}
    step={0.5}
    discrete
    id="deskHeightSlider"
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
