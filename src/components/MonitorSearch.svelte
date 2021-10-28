<script lang="ts">
  import Button, { Label, Icon, Group, GroupItem } from '@smui/button';
  import Menu, { MenuComponentDev } from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import HelperText from '@smui/textfield/helper-text/index';
  import type { IMonitor, SearchEngine } from '../utils/interfaces';
  import AmazonPng from '../images/amazon.png';
  import BestBuyPng from '../images/bestbuy.png';
  import BingPng from '../images/bing.png';
  import DuckDuckGoPng from '../images/duckduckgo.png';
  import GooglePng from '../images/google.png';
  import NeweggPng from '../images/newegg.png';
  import AmazonWebp from '../images/amazon.webp';
  import BestBuyWebp from '../images/bestbuy.webp';
  import BingWebp from '../images/bing.webp';
  import DuckDuckGoWebp from '../images/duckduckgo.webp';
  import GoogleWebp from '../images/google.webp';
  import NeweggWebp from '../images/newegg.webp';
  import { preferredSearchEngine } from '../stores/SetupStore';

  export let monitor: IMonitor;

  let menu: MenuComponentDev;

  const handleSearch = (searchEngine: SearchEngine) => {
    preferredSearchEngine.set(searchEngine);
    let searchUrl = '';

    //url based on search engine chosen
    if (searchEngine === 'google')
      searchUrl = 'https://www.google.com/search?q=';
    if (searchEngine === 'bing') searchUrl = 'https://www.bing.com/search?q=';
    if (searchEngine === 'duckduckgo')
      searchUrl = 'https://www.duckduckgo.com/?q=';
    if (searchEngine === 'amazon') searchUrl = 'https://www.amazon.com/s?k=';
    if (searchEngine === 'newegg') searchUrl = 'https://www.newegg.com/p/pl?d=';
    if (searchEngine === 'bestbuy')
      searchUrl = 'https://www.bestbuy.com/site/searchpage.jsp?st=';

    //base search string
    searchUrl += 'monitor';

    //other search params
    if (monitor.diagonal)
      searchUrl += '+' + encodeURIComponent(`${monitor.diagonal}"`);
    if (monitor.aspectRatio !== 'Custom')
      searchUrl += '+' + encodeURIComponent(monitor.aspectRatio);
    if (monitor.resolution.standard !== 'Custom')
      searchUrl += '+' + encodeURIComponent(monitor.resolution.standard);
    if (monitor.resolution.horizontal && monitor.resolution.vertical)
      searchUrl +=
        '+' +
        encodeURIComponent(
          `${monitor.resolution.horizontal}x${monitor.resolution.vertical}`
        );
    if (monitor.refreshRate !== 60)
      searchUrl += '+' + encodeURIComponent(`${monitor.refreshRate}HZ`);
    if (monitor.responseTime)
      searchUrl += '+' + encodeURIComponent(`${monitor.responseTime}ms`);
    if (monitor.displayType !== 'any')
      searchUrl += '+' + encodeURIComponent(monitor.displayType);
    if (monitor.syncType !== 'any' && monitor.displayType !== 'none')
      searchUrl += '+' + encodeURIComponent(monitor.syncType);
    if (monitor.features.curved)
      searchUrl += '+' + encodeURIComponent('curved');
    if (monitor.features.hdr) searchUrl += '+' + encodeURIComponent('HDR');

    //open search in new tab
    window.open(searchUrl, '_blank', 'noopener');
  };
</script>

<div class="container">
  <Group variant="raised">
    <Button
      on:click={() => handleSearch($preferredSearchEngine)}
      variant="raised"
    >
      <Icon class="material-icons">search</Icon>
      <Label>Search This Monitor</Label>
    </Button>
    <div use:GroupItem>
      <Button
        on:click={() => menu.setOpen(true)}
        variant="raised"
        style="padding: 0; min-width: 36px;"
      >
        <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
      </Button>
      <Menu bind:this={menu} anchorCorner="TOP_LEFT">
        <List>
          <Item on:SMUI:action={() => handleSearch('google')}>
            <picture>
              <source srcSet={GoogleWebp} type="image/webp" />
              <source srcSet={GooglePng} type="image/png" />
              <img alt="google logo" src={GooglePng} />
            </picture>
            <Text>Search Google</Text>
          </Item>
          <Item on:SMUI:action={() => handleSearch('bing')}>
            <picture>
              <source srcSet={BingWebp} type="image/webp" />
              <source srcSet={BingPng} type="image/png" />
              <img alt="bing logo" src={BingPng} />
            </picture>
            <Text>Search Bing</Text>
          </Item>
          <Item on:SMUI:action={() => handleSearch('duckduckgo')}>
            <picture>
              <source srcSet={DuckDuckGoWebp} type="image/webp" />
              <source srcSet={DuckDuckGoPng} type="image/png" />
              <img alt="duckduckgo logo" src={DuckDuckGoPng} />
            </picture>
            <Text>Search DuckDuckGo</Text>
          </Item>
          <Separator />
          <Item on:SMUI:action={() => handleSearch('amazon')}>
            <picture>
              <source srcSet={AmazonWebp} type="image/webp" />
              <source srcSet={AmazonPng} type="image/png" />
              <img alt="amazon logo" src={AmazonPng} />
            </picture>
            <Text>Search Amazon</Text>
          </Item>
          <Item on:SMUI:action={() => handleSearch('newegg')}>
            <picture>
              <source srcSet={NeweggWebp} type="image/webp" />
              <source srcSet={NeweggPng} type="image/png" />
              <img alt="newegg logo" src={NeweggPng} />
            </picture>
            <Text>Search Newegg</Text>
          </Item>
          <Item on:SMUI:action={() => handleSearch('bestbuy')}>
            <picture>
              <source srcSet={BestBuyWebp} type="image/webp" />
              <source srcSet={BestBuyPng} type="image/png" />
              <img alt="best buy logo" src={BestBuyPng} />
            </picture>
            <Text>Search Best Buy</Text>
          </Item>
        </List>
      </Menu>
    </div>
  </Group>
  <HelperText persistent style="margin-top: 0.25rem;">
    (Search where to buy a monitor like this)
  </HelperText>
</div>

<style>
  .container {
    margin: 2rem auto;
    display: grid;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  img {
    width: 1.5rem;
    padding-right: 1rem;
  }
</style>
