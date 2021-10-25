<script lang="ts">
  import IconButton from '@smui/icon-button';
  import MenuSurface, { MenuSurfaceComponentDev } from '@smui/menu-surface';
  import TextField from '@smui/textfield';
  import type { IMonitor } from '../../utils/interfaces';
  import { monitors } from '../../stores/SetupStore';

  export let monitor: IMonitor;

  let surface: MenuSurfaceComponentDev;
</script>

<IconButton
  class="material-icons"
  on:click={function () {
    surface.setOpen(true);
    this.blur();
  }}
>
  edit
</IconButton>
<MenuSurface bind:this={surface}>
  <div>
    <TextField
      bind:value={monitor.name}
      label="Monitor Name"
      on:change={() => monitors.set($monitors)}
      style="width:100%;"
      type="text"
      variant="filled"
      on:keydown={(e) => {
        //@ts-ignore
        if (e.key === 'Enter') {
          surface.setOpen(false);
        }
      }}
    />
    <IconButton class="material-icons" on:click={() => surface.setOpen(false)}>
      save
    </IconButton>
  </div>
</MenuSurface>

<style>
  div {
    display: flex;
    padding: 1rem;
    min-width: 20rem;
  }
</style>
