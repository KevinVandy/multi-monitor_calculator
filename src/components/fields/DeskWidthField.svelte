<script lang="ts">
  import Slider from '@smui/slider';
  import { deskWidth } from '../../stores/SetupStore';
</script>

<div>
  <label for="deskWidthSlider">Desk Width</label>
  <Slider
    bind:value={$deskWidth}
    min={2}
    max={12}
    step={0.5}
    discrete
    id="deskWidthSlider"
  />
</div>

<style>
  div {
    background-color: var(--input-background-color);
    border-bottom: 1px solid var(--input-label-color);
    max-height: 75px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  label {
    text-align: left;
    display: block;
    width: 100%;
    transform: scale(0.75);
    color: var(--input-label-color);
  }
</style>
