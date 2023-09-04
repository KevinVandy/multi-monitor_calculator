import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder } from "../../../chunks/classAdderBuilder.js";
const Paper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { square = false } = $$props;
  let { color = "default" } = $$props;
  let { elevation = 1 } = $$props;
  let { transition = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.elevation === void 0 && $$bindings.elevation && elevation !== void 0)
    $$bindings.elevation(elevation);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "smui-paper": true,
          "smui-paper--raised": variant === "raised",
          "smui-paper--unelevated": variant === "unelevated",
          "smui-paper--outlined": variant === "outlined",
          ["smui-paper--elevation-z" + elevation]: elevation !== 0 && variant === "raised",
          "smui-paper--rounded": !square,
          ["smui-paper--color-" + color]: color !== "default",
          "smui-paper-transition": transition
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Content = classAdderBuilder({
  class: "smui-paper__content",
  tag: "div"
});
classAdderBuilder({
  class: "smui-paper__title",
  tag: "h5"
});
classAdderBuilder({
  class: "smui-paper__subtitle",
  tag: "h6"
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about{display:grid;gap:1rem;margin:2rem auto;max-width:90ch;padding:1.5rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${validate_component(Paper, "Paper").$$render($$result, { class: "about" }, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `Calculate PPI, Preview Custom Desktop Wallpapers, Drag and Rearrange Monitors to Try Out
			Different Layouts, Intelligently search for your dream monitor, and much more.`;
        }
      })} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `A Kevin Vandy Tool - <a target="_blank" rel="no opener" href="https://www.kevinvancott.com" data-svelte-h="svelte-1vu2aze">kevinvancott.com</a>`;
        }
      })} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `View the Source Code on <a target="_blank" rel="no opener" href="https://github.com/KevinVandy/multi-monitor_calculator" data-svelte-h="svelte-v5bns8">Github</a>`;
        }
      })} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `If you find a bug or want to submit a feature request, feel free to submit an issue on the
			github <a target="_blank" rel="no opener" href="https://github.com/KevinVandy/multi-monitor_calculator/issues" data-svelte-h="svelte-1swa4tg">issues</a> tab`;
        }
      })} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `Made with <a target="_blank" rel="no opener" href="https://kit.svelte.dev/" data-svelte-h="svelte-1pif0s0">SvelteKit</a>
			and
			<a target="_blank" rel="no opener" href="https://sveltematerialui.com/" data-svelte-h="svelte-tv3is8">Svelte Material UI (SMUI)</a>`;
        }
      })}`;
    }
  })} </main>`;
});
export {
  Page as default
};
