import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, i as getContext, v as validate_component, m as missing_component, b as spread, d as escape_object, f as add_attribute, s as setContext, e as escape_attribute_value, h as subscribe, k as each, j as escape } from "../../chunks/ssr.js";
import { f as forwardEventsBuilder, c as classMap, S as SmuiElement, g as globals, a as classAdderBuilder } from "../../chunks/classAdderBuilder.js";
import { R as Ripple, k as exclude, l as prefixFilter, i as id, u as name, v as deskWidth, w as deskHeight, x as scale, o as monitors, D as Dialog, T as Title, a as DialogContent, S as SetupNameField, c as SetupDescriptionField, b as DialogActions, B as Button, C as CommonLabel, I as IconButton, W as Wrapper, g as Tooltip, q as inputUnits, j as Select, O as Option, s as setups, y as description, t as theme, r as statUnits, n as expandStatsByDefault, m as expandAdvancedOptionsByDefault, p as preferredSearchEngine, z as currentSetupId } from "../../chunks/Option.js";
import "query-string";
const CommonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "on", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "i" : void 0 } = $$props;
  const svg = component === Svg;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.on === void 0 && $$bindings.on && on !== void 0)
    $$bindings.on(on);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        { tag },
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-button__icon": context === "button",
            "mdc-fab__icon": context === "fab",
            "mdc-icon-button__icon": context === "icon-button",
            "mdc-icon-button__icon--on": context === "icon-button" && on,
            "mdc-tab__icon": context === "tab",
            "mdc-banner__icon": context === "banner",
            "mdc-segmented-button__icon": context === "segmented-button"
          })
        },
        { "aria-hidden": "true" },
        svg ? { focusable: "false", tabindex: "-1" } : {},
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  if (console && console.warn) {
    console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  }
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<svg${spread([escape_object($$restProps)], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const { Object: Object_1 } = globals;
const Fab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "focusRing",
    "color",
    "mini",
    "exited",
    "extended",
    "touch",
    "href",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { focusRing = false } = $$props;
  let { color = "secondary" } = $$props;
  let { mini = false } = $$props;
  let { exited = false } = $$props;
  let { extended = false } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? href == null ? "button" : "a" : void 0 } = $$props;
  setContext("SMUI:label:context", "fab");
  setContext("SMUI:icon:context", "fab");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name2, value) {
    if (internalStyles[name2] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name2];
        internalStyles = internalStyles;
      } else {
        internalStyles[name2] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.focusRing === void 0 && $$bindings.focusRing && focusRing !== void 0)
    $$bindings.focusRing(focusRing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0)
    $$bindings.mini(mini);
  if ($$props.exited === void 0 && $$bindings.exited && exited !== void 0)
    $$bindings.exited(exited);
  if ($$props.extended === void 0 && $$bindings.extended && extended !== void 0)
    $$bindings.extended(extended);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(
        {},
        { tag },
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: false,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-fab": true,
            "mdc-fab--mini": mini,
            "mdc-fab--exited": exited,
            "mdc-fab--extended": extended,
            "smui-fab--color-primary": color === "primary",
            "mdc-fab--touch": touch,
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name2, value]) => `${name2}: ${value};`).concat([style]).join(" ")
        },
        { href },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="mdc-fab__ripple"></div> ${focusRing ? `<div class="mdc-fab__focus-ring"></div>` : ``} ${slots.default ? slots.default({}) : ``}${touch ? `<div class="mdc-fab__touch"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
let waiting = Promise.resolve();
const Snackbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "variant",
    "leading",
    "timeoutMs",
    "closeOnEscape",
    "labelText",
    "actionButtonText",
    "surface$class",
    "surface$use",
    "open",
    "forceOpen",
    "close",
    "isOpen",
    "getLabelElement",
    "getActionButtonElement",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "" } = $$props;
  let { leading = false } = $$props;
  let { timeoutMs = 5e3 } = $$props;
  let { closeOnEscape = true } = $$props;
  let { labelText = uninitializedValue } = $$props;
  let { actionButtonText = uninitializedValue } = $$props;
  let { surface$class = "" } = $$props;
  let { surface$use = [] } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let closePromise = new Promise((resolve) => resolve);
  setContext("SMUI:label:context", "snackbar");
  function open() {
    waiting = waiting.then(() => {
      instance.open();
      return closePromise;
    });
  }
  function forceOpen() {
    return instance.open();
  }
  function close(reason) {
    return instance.close(reason);
  }
  function isOpen() {
    return instance.isOpen();
  }
  function getLabelElement() {
    var _a;
    return (_a = getElement().querySelector(".mdc-snackbar__label")) !== null && _a !== void 0 ? _a : document.createElement("div");
  }
  function getActionButtonElement() {
    var _a;
    return (_a = getElement().querySelector(".mdc-snackbar__action")) !== null && _a !== void 0 ? _a : document.createElement("button");
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.leading === void 0 && $$bindings.leading && leading !== void 0)
    $$bindings.leading(leading);
  if ($$props.timeoutMs === void 0 && $$bindings.timeoutMs && timeoutMs !== void 0)
    $$bindings.timeoutMs(timeoutMs);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.actionButtonText === void 0 && $$bindings.actionButtonText && actionButtonText !== void 0)
    $$bindings.actionButtonText(actionButtonText);
  if ($$props.surface$class === void 0 && $$bindings.surface$class && surface$class !== void 0)
    $$bindings.surface$class(surface$class);
  if ($$props.surface$use === void 0 && $$bindings.surface$use && surface$use !== void 0)
    $$bindings.surface$use(surface$use);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.forceOpen === void 0 && $$bindings.forceOpen && forceOpen !== void 0)
    $$bindings.forceOpen(forceOpen);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getLabelElement === void 0 && $$bindings.getLabelElement && getLabelElement !== void 0)
    $$bindings.getLabelElement(getLabelElement);
  if ($$props.getActionButtonElement === void 0 && $$bindings.getActionButtonElement && getActionButtonElement !== void 0)
    $$bindings.getActionButtonElement(getActionButtonElement);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<aside${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-snackbar": true,
          "mdc-snackbar--stacked": variant === "stacked",
          "mdc-snackbar--leading": leading,
          ...internalClasses
        }))
      },
      escape_object(exclude($$restProps, ["surface$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [surface$class]: true,
          "mdc-snackbar__surface": true
        }))
      },
      { role: "status" },
      { "aria-relevant": "additions" },
      escape_object(prefixFilter($$restProps, "surface$"))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> </aside>`;
});
const SnackbarActions = classAdderBuilder({
  class: "mdc-snackbar__actions",
  tag: "div",
  props: { "aria-atomic": "true" },
  contexts: {
    "SMUI:button:context": "snackbar:actions",
    "SMUI:icon-button:context": "snackbar:actions",
    "SMUI:label:context": void 0
  }
});
var ShortCode = /* @__PURE__ */ ((ShortCode2) => {
  ShortCode2["ASPECT_RATIO"] = "a";
  ShortCode2["BEZEL_COLOR"] = "c";
  ShortCode2["BEZEL_WIDTH"] = "b";
  ShortCode2["CURVED"] = "u";
  ShortCode2["DESK_HEIGHT"] = "g";
  ShortCode2["DESK_WIDTH"] = "w";
  ShortCode2["DIAGONAL"] = "d";
  ShortCode2["DISPLAY_TYPE"] = "p";
  ShortCode2["HDR"] = "l";
  ShortCode2["HORIZONTAL_RESOLUTION"] = "h";
  ShortCode2["NAME"] = "m";
  ShortCode2["OFFSET_X"] = "x";
  ShortCode2["OFFSET_Y"] = "y";
  ShortCode2["OFFSET_Z"] = "q";
  ShortCode2["ORIENTATION"] = "o";
  ShortCode2["REFRESH_RATE"] = "r";
  ShortCode2["RESOLUTION_STANDARD"] = "s";
  ShortCode2["RESPONSE_TIME"] = "t";
  ShortCode2["ROTATE_X"] = "j";
  ShortCode2["ROTATE_Y"] = "k";
  ShortCode2["SCALE"] = "z";
  ShortCode2["SETUP_ID"] = "i";
  ShortCode2["SETUP_NAME"] = "f";
  ShortCode2["SYNC_TYPE"] = "n";
  ShortCode2["VERTICAL_RESOLUTION"] = "v";
  return ShortCode2;
})(ShortCode || {});
const SetupSubmissionDialog_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.svelte-xnq0ge{display:grid;min-width:300px;gap:1rem}",
  map: null
};
const SetupSubmissionDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_id;
  let $$unsubscribe_name;
  let $$unsubscribe_deskWidth;
  let $$unsubscribe_deskHeight;
  let $$unsubscribe_scale;
  let $$unsubscribe_monitors;
  $$unsubscribe_id = subscribe(id, (value) => value);
  $$unsubscribe_name = subscribe(name, (value) => value);
  $$unsubscribe_deskWidth = subscribe(deskWidth, (value) => value);
  $$unsubscribe_deskHeight = subscribe(deskHeight, (value) => value);
  $$unsubscribe_scale = subscribe(scale, (value) => value);
  $$unsubscribe_monitors = subscribe(monitors, (value) => value);
  let { setupSubmissionDialogOpen = false } = $$props;
  let submissionReceivedSnackbar;
  let submissionLink = "";
  if ($$props.setupSubmissionDialogOpen === void 0 && $$bindings.setupSubmissionDialogOpen && setupSubmissionDialogOpen !== void 0)
    $$bindings.setupSubmissionDialogOpen(setupSubmissionDialogOpen);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form data-netlify="true" id="setup-submission" name="setup-submission" netlify-honeypot="bot-field">${validate_component(Dialog, "Dialog").$$render(
      $$result,
      { open: setupSubmissionDialogOpen },
      {
        open: ($$value) => {
          setupSubmissionDialogOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
            default: () => {
              return `Submit Your Setup`;
            }
          })} ${validate_component(DialogContent, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<input type="hidden" name="form-name" value="setup-submission"> <input type="hidden" name="submissionLink"${add_attribute("value", submissionLink, 0)}> <div class="svelte-xnq0ge">${validate_component(SetupNameField, "SetupNameField").$$render($$result, {}, {}, {})} ${validate_component(SetupDescriptionField, "SetupDescriptionField").$$render($$result, {}, {}, {})}</div>`;
            }
          })} ${validate_component(DialogActions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { type: "button" }, {}, {
                default: () => {
                  return `Cancel`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
                default: () => {
                  return `Submit Setup`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}</form> ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { this: submissionReceivedSnackbar },
      {
        this: ($$value) => {
          submissionReceivedSnackbar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Your Monitor Setup Submission Was Received`;
            }
          })} ${validate_component(SnackbarActions, "SnackbarActions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  title: "Dismiss"
                },
                {},
                {
                  default: () => {
                    return `close`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_id();
  $$unsubscribe_name();
  $$unsubscribe_deskWidth();
  $$unsubscribe_deskHeight();
  $$unsubscribe_scale();
  $$unsubscribe_monitors();
  return $$rendered;
});
const ShareLinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_id;
  let $$unsubscribe_name;
  let $$unsubscribe_deskWidth;
  let $$unsubscribe_deskHeight;
  let $$unsubscribe_scale;
  let $$unsubscribe_monitors;
  $$unsubscribe_id = subscribe(id, (value) => value);
  $$unsubscribe_name = subscribe(name, (value) => value);
  $$unsubscribe_deskWidth = subscribe(deskWidth, (value) => value);
  $$unsubscribe_deskHeight = subscribe(deskHeight, (value) => value);
  $$unsubscribe_scale = subscribe(scale, (value) => value);
  $$unsubscribe_monitors = subscribe(monitors, (value) => value);
  let copiedToClipboardSnackbar;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            class: "fab-button",
            color: "primary",
            extended: true
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `share`;
                }
              })}Share Link`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Generate a link to this setup that you can use to send to your friends or other devices`;
          }
        })}`;
      }
    })} ${validate_component(Snackbar, "Snackbar").$$render(
      $$result,
      { this: copiedToClipboardSnackbar },
      {
        this: ($$value) => {
          copiedToClipboardSnackbar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `URL Copied to Clipboard!`;
            }
          })} ${validate_component(SnackbarActions, "SnackbarActions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(IconButton, "IconButton").$$render(
                $$result,
                {
                  class: "material-icons",
                  title: "Dismiss"
                },
                {},
                {
                  default: () => {
                    return `close`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_id();
  $$unsubscribe_name();
  $$unsubscribe_deskWidth();
  $$unsubscribe_deskHeight();
  $$unsubscribe_scale();
  $$unsubscribe_monitors();
  return $$rendered;
});
const SetupSubmission_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-16eanwr{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;margin:2rem auto;max-width:720px;padding:10rem 0.5rem}",
  map: null
};
const SetupSubmission = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let setupSubmissionDialogOpen = false;
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="svelte-16eanwr"><h3 data-svelte-h="svelte-h4kq6">Want To Share Your Carefully Crafted Monitor Setup With Others?</h3> <p data-svelte-h="svelte-1e28o7q">You can generate and share a link with your friends and other devices. A sharable link will be
		copied to your clipboard.</p> ${validate_component(ShareLinkButton, "ShareLinkButton").$$render($$result, {}, {}, {})} <p data-svelte-h="svelte-y6ndae">Or you can submit your monitor setup as a community submission, and it might get featured as a
		pre-buillt setup on this site for others to see.</p> ${validate_component(Fab, "Fab").$$render($$result, { extended: true, color: "primary" }, {}, {
      default: () => {
        return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
          default: () => {
            return `send`;
          }
        })}Submit Setup`;
      }
    })}</section> ${validate_component(SetupSubmissionDialog, "SetupSubmissionDialog").$$render(
      $$result,
      { setupSubmissionDialogOpen },
      {
        setupSubmissionDialogOpen: ($$value) => {
          setupSubmissionDialogOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const CircularProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "indeterminate", "closed", "progress", "fourColor", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { indeterminate = false } = $$props;
  let { closed = false } = $$props;
  let { progress = 0 } = $$props;
  let { fourColor = false } = $$props;
  let element;
  let internalClasses = {};
  let internalAttrs = {};
  let determinateCircleAttrs = {};
  let determinateCircle;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.closed === void 0 && $$bindings.closed && closed !== void 0)
    $$bindings.closed(closed);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.fourColor === void 0 && $$bindings.fourColor && fourColor !== void 0)
    $$bindings.fourColor(fourColor);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-circular-progress": true,
          "mdc-circular-progress--indeterminate": indeterminate,
          "mdc-circular-progress--closed": closed,
          ...internalClasses
        }))
      },
      { role: "progressbar" },
      {
        "aria-valuemin": escape_attribute_value(0)
      },
      {
        "aria-valuemax": escape_attribute_value(1)
      },
      {
        "aria-valuenow": escape_attribute_value(indeterminate ? void 0 : progress)
      },
      escape_object(internalAttrs),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-circular-progress__determinate-container"><svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle class="mdc-circular-progress__determinate-track" cx="24" cy="24" r="18" stroke-width="4"></circle><circle${spread(
    [
      {
        class: "mdc-circular-progress__determinate-circle"
      },
      { cx: "24" },
      { cy: "24" },
      { r: "18" },
      { "stroke-dasharray": "113.097" },
      { "stroke-dashoffset": "113.097" },
      { "stroke-width": "4" },
      escape_object(determinateCircleAttrs)
    ],
    {}
  )}${add_attribute("this", determinateCircle, 0)}></circle></svg></div> <div class="mdc-circular-progress__indeterminate-container">${each(fourColor ? [1, 2, 3, 4] : [1], (color) => {
    return `<div${add_attribute(
      "class",
      classMap({
        [className]: true,
        "mdc-circular-progress__spinner-layer": true,
        ["mdc-circular-progress__color-" + color]: fourColor
      }),
      0
    )}><div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left" data-svelte-h="svelte-1d4f91x"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"></circle></svg></div> <div class="mdc-circular-progress__gap-patch" data-svelte-h="svelte-qvm4qv"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="3.2"></circle></svg></div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right" data-svelte-h="svelte-c3k2p4"><svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke-dasharray="113.097" stroke-dashoffset="56.549" stroke-width="4"></circle></svg></div> </div>`;
  })}</div> </div>`;
});
const ConfirmResetSetupDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scale;
  $$unsubscribe_scale = subscribe(scale, (value) => value);
  let { confirmResetDialogOpen = false } = $$props;
  if ($$props.confirmResetDialogOpen === void 0 && $$bindings.confirmResetDialogOpen && confirmResetDialogOpen !== void 0)
    $$bindings.confirmResetDialogOpen(confirmResetDialogOpen);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Dialog, "Dialog").$$render(
      $$result,
      { open: confirmResetDialogOpen },
      {
        open: ($$value) => {
          confirmResetDialogOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, { style: "text-align: left;" }, {}, {
            default: () => {
              return `Are you sure?`;
            }
          })} ${validate_component(DialogContent, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<p data-svelte-h="svelte-1unfznj">Are you sure you want to reset back to the default setup?</p> <p data-svelte-h="svelte-sx1vt6">All progress will be lost!</p> <p data-svelte-h="svelte-15v10u9">You can create a new setup instead by clicking the + button in the top nav bar</p>`;
            }
          })} ${validate_component(DialogActions, "DialogActions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `No, Cancel`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Yes, Reset`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_scale();
  return $$rendered;
});
const CommandButtons_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".fab-grid.svelte-i8iap1{display:flex;gap:1rem;justify-content:center;padding:1rem;flex-wrap:wrap}.fab-button{min-width:7rem}.zoom-button-container.svelte-i8iap1{display:flex;justify-content:center;margin:auto;width:100%;gap:1rem}@media(max-width: 600px){.fab-grid.svelte-i8iap1{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem}.zoom-button-container.svelte-i8iap1{gap:0.5rem}}",
  map: null
};
const CommandButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_inputUnits;
  let $monitors, $$unsubscribe_monitors;
  let $$unsubscribe_scale;
  let $$unsubscribe_deskWidth;
  let $$unsubscribe_deskHeight;
  $$unsubscribe_inputUnits = subscribe(inputUnits, (value) => value);
  $$unsubscribe_monitors = subscribe(monitors, (value) => $monitors = value);
  $$unsubscribe_scale = subscribe(scale, (value) => value);
  $$unsubscribe_deskWidth = subscribe(deskWidth, (value) => value);
  $$unsubscribe_deskHeight = subscribe(deskHeight, (value) => value);
  let confirmResetDialogOpen = false;
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="fab-grid svelte-i8iap1">${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            class: "fab-button",
            extended: true,
            color: "primary"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `undo`;
                }
              })}Reset`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Reset Back To Default Setup`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            class: "fab-button",
            color: "primary",
            disabled: $monitors.length >= 10,
            extended: true
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `add_to_queue`;
                }
              })}Add`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Add Another Monitor`;
          }
        })}`;
      }
    })} ${validate_component(ShareLinkButton, "ShareLinkButton").$$render($$result, {}, {}, {})}</div> <div class="zoom-button-container svelte-i8iap1">${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            "aria-label": "Zoom Out",
            color: "secondary"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `zoom_out`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Zoom Out`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            "aria-label": "Zoom In",
            color: "secondary"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `zoom_in`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Zoom In`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            "aria-label": "Decrease Available Desk Width",
            color: "secondary"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render(
                $$result,
                {
                  class: "material-icons",
                  style: "transform:rotate(90deg);"
                },
                {},
                {
                  default: () => {
                    return `unfold_less`;
                  }
                }
              )}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Decrease Available Desk Width`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            "aria-label": "Increase Available Desk Width",
            color: "secondary"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render(
                $$result,
                {
                  class: "material-icons",
                  style: "transform:rotate(90deg);"
                },
                {},
                {
                  default: () => {
                    return `unfold_more`;
                  }
                }
              )}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Increase Available Desk Width`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            "aria-label": "Decrease Available Desk Height",
            color: "secondary"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `unfold_less`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Decrease Available Desk Height`;
          }
        })}`;
      }
    })} ${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Fab, "Fab").$$render(
          $$result,
          {
            "aria-label": "Increase Available Desk Height",
            color: "secondary"
          },
          {},
          {
            default: () => {
              return `${validate_component(CommonIcon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                default: () => {
                  return `unfold_more`;
                }
              })}`;
            }
          }
        )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
          default: () => {
            return `Increase Available Desk Height`;
          }
        })}`;
      }
    })}</div> ${validate_component(ConfirmResetSetupDialog, "ConfirmResetSetupDialog").$$render(
      $$result,
      { confirmResetDialogOpen },
      {
        confirmResetDialogOpen: ($$value) => {
          confirmResetDialogOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_inputUnits();
  $$unsubscribe_monitors();
  $$unsubscribe_scale();
  $$unsubscribe_deskWidth();
  $$unsubscribe_deskHeight();
  return $$rendered;
});
classAdderBuilder({
  class: "smui-card__content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__media-content",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-buttons",
  tag: "div"
});
classAdderBuilder({
  class: "mdc-card__action-icons",
  tag: "div"
});
const MovieWebp1 = "/_app/immutable/assets/movie1.68f05767.webp";
const MovieWebp2 = "/_app/immutable/assets/movie2.e9e86b8f.webp";
const MovieWebp3 = "/_app/immutable/assets/movie3.5d8f28d8.webp";
const MovieWebp4 = "/_app/immutable/assets/movie4.9e272235.webp";
const MovieWebp5 = "/_app/immutable/assets/movie5.4eab6d50.webp";
const VideoWebp1 = "/_app/immutable/assets/video1.aec80e91.webp";
const VideoWebp2 = "/_app/immutable/assets/video2.83a97170.webp";
const VideoWebp3 = "/_app/immutable/assets/video3.71a25cb9.webp";
const MsWordWebp = "/_app/immutable/assets/msword.beb997ab.webp";
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};
shuffleArray([
  MovieWebp1,
  MovieWebp2,
  MovieWebp3,
  MovieWebp4,
  MovieWebp5
]);
shuffleArray([VideoWebp1, VideoWebp2, VideoWebp3]);
shuffleArray([MsWordWebp]);
const MonitorSwivelButtons_svelte_svelte_type_style_lang = "";
const Monitor_svelte_svelte_type_style_lang = "";
const Desk_svelte_svelte_type_style_lang = "";
const BezelWidthField_svelte_svelte_type_style_lang = "";
const PortFields_svelte_svelte_type_style_lang = "";
const FeatureFields_svelte_svelte_type_style_lang = "";
const MonitorPreviewField_svelte_svelte_type_style_lang = "";
const MonitorNameField_svelte_svelte_type_style_lang = "";
const MonitorSearch_svelte_svelte_type_style_lang = "";
const MonitorSwapButtons_svelte_svelte_type_style_lang = "";
const MonitorOptions_svelte_svelte_type_style_lang = "";
const MonitorOptionsArea_svelte_svelte_type_style_lang = "";
const communitySubmissions = {
  "Kevin Vandy's Setup": "a0=21%3A9&d0=34&d1=32&d2=24&f=Kevin%20Vandy%27s%20Setup&h0=3440&h1=2560&i=mmce4bd1-10bf-463c-a2a8-149b9c63018c&k0=30&k2=-25&l0=true&m0=LG%20Ultrawide&m1=LG%20High%20FPS&m2=LG%20Veritical&n0=FreeSync&n1=FreeSync&n2=FreeSync&num=3&o2=p&p0=IPS&p1=VA&p2=TN&q1=-54&r1=144&r2=75&s0=QHD&s1=QHD&u0=true&v0=1440&v1=1440&w=6&x0=2.99&x1=-79.96&x2=-112.41&y0=3&y1=13.99&y2=14.05",
  "Dev Command Center": "a1=21%3A9&a2=21%3A9&b1=0.5&b2=0.5&d1=29&d2=29&f=Dev%20Command%20Center&g=2.5&h0=2560&h1=2560&h2=2560&h3=2560&i=mmc6cb1d-2cca-482f-8d9e-fc65f2566380&j1=-3&j2=3&k0=5&k3=-5&m0=Left%20Monitor&m1=Top%20ultrawide&m2=Bottom%20ultrawide&m3=Right%20monitor&num=4&o0=p&o3=p&s0=QHD&s3=QHD&v0=1440&v3=1440&x0=-20&x1=-22&x2=-461&x3=-464&y0=-14&y1=-4&y2=185&y3=-9",
  "Dev Command Center (Bigger)": "a0=21%3A9&a1=21%3A9&d0=34&d1=34&d2=32&d3=32&f=Dev%20Command%20Center%20%28Bigger%29&g=2.75&h0=3440&h1=3440&h2=2560&h3=2560&i=0ecc36fb-2b1a-42de-86d5-2a9502ac7dde&j1=3&k2=-10&k3=10&m0=MSI%20Optix%20MAG341CQ%2034%22&m1=MSI%20Optix%20MAG341CQ%2034%22&m2=BenQ%20PD3200Q%2032%22&m3=BenQ%20PD3200Q&num=4&o2=p&o3=p&q2=18&q3=18&r0=100&r1=100&s0=QHD&s1=QHD&s2=QHD&s3=QHD&v0=1440&v1=1440&v2=1440&v3=1440&w=6&x0=237.1&x1=-248.1&x2=-247.1&x3=-1236.6&y0=-22.1&y1=194&y2=-25.1&y3=-27.1&z=15",
  "Video Editor's Dream": "a0=32%3A9&d0=49&f=Video%20Editor%27s%20Dream&h0=5120&h1=3840&i=mmce7a69-8b8c-44d1-a4e8-6aca5a1bfd3a&k0=20&k1=-10&m0=Video%20Editing&m1=Preview&num=2&p1=IPS&q0=54&q1=-54&r0=120&s0=QHD&s1=4K&u0=true&v0=1440&v1=2160&w=6.5&x0=55&x1=-19&y0=16&y1=20",
  "Photo Editor's Sidekick": "a0=16%3A10&a1=16%3A10&a2=16%3A10&b2=0.25&d0=30&d1=24&d2=16&f=Photo%20Editor%27s%20Sidekick&g=2.75&h0=2560&h2=2560&i=e4a8c72b-72b9-4d54-8ff7-4f46d1c41f6b&j2=6&k0=10&m0=Left%2030%20Vertical&m1=Bottom%2016%3A10&m2=Macbook&num=3&o0=p&p0=IPS&p1=IPS&q0=18&s0=QHD%2B&s1=FHD%2B&s2=QHD%2B&v0=1600&v1=1200&v2=1600&w=4&x0=12&x1=11&x2=-286&y0=-4&y1=2&y2=242",
  "Ultimate Racing Sim": "a1=32%3A9&d1=49&f=Ultimate%20Racing%20Sim&g=2&h1=3840&i=mmc3a220-1842-4ed3-808b-340bc09b429c&k0=15&k2=-15&m0=Left%20Window&m1=Ultrawide&m2=Right%20Window&num=3&q0=36&q2=36&r0=144&r1=144&r2=144&u1=true&w=8.5&x0=19&x1=16&x2=13&y0=22&y1=21&y2=24",
  "Stock Trader": "d0=24&d1=24&d2=24&d3=24&d4=24&d5=24&f=Stock%20Trader&g=2.75&i=b9828158-f4a1-4e74-8765-023c652f5bbc&j0=-6&j1=-6&j2=-6&k0=5&k2=-5&k3=5&k5=-5&num=6&w=6&x0=-10&x1=-12&x2=-14&x3=-1060&x4=-1065&x5=-1068&y0=-24&y1=-23&y2=-24&y3=184&y4=181&y5=182",
  "Pretentious IT Guy": "d0=32&d1=32&d2=15&f=Pretentious%20IT%20Guy&g=3.5&h0=2560&h2=2560&i=8b4a2eb2-d07c-496b-af21-adb189b77a84&j2=12&k0=25&m0=Vert%201&m1=Vert%202&m2=Laptop&num=3&o0=p&o1=p&q0=54&s0=QHD&s2=QHD&v0=1440&v2=1440&x0=-57&x1=-47.3&x2=-44.2&y0=-0.8&y1=0.9&y2=329.7",
  "Poor College Student": "a0=5%3A4&d0=19&d1=15&f=Poor%20College%20Student&g=1.5&h0=1280&i=49c0646d-5ed3-4856-91da-c1fe41516fbd&j1=6&k0=15&m0=Ancient%20Monitor&m1=10%20Year%20Old%20Laptop&num=2&v0=1024&w=3.5&x0=34&x1=27&y0=4&y1=102&z=18",
  "6K Ultrawide": "b0=0.5&b1=0.5&b2=0.5&d0=24&d1=43&d2=24&f=6K%20Ultrawide%20-%20Black%20Sands&g=2.5&h1=3840&i=mmca72d6-f8ee-4a83-8238-981ddb491113&k0=10&k2=-10&m0=Left%20Side&m1=FV43U%20or%20XG43UQ&m2=Right%20Side&num=3&o0=p&o2=p&p0=VA&p1=VA&p2=VA&q0=18&q2=18&r0=144&r1=144&r2=144&s1=4K&v1=2160&w=6&x0=2&x1=3&x2=5&y0=-3&y1=-3&y2=-3&z=13",
  "4 Monitor Productivity Toys": "a2=21%3A9&c2=%23000000&d0=24&d1=24&d2=29&d3=32&f=4%20Monitor%20Productivity%20Toys&g=2.75&h2=2560&h3=2560&i=96e22e1b-4a99-4b0c-95a3-9f276f30dc33&j2=-9&k0=15&k1=-20&m0=HP%2024%20%282%29&m1=HP%2024%20%281%29&m2=LG%2029&m3=LG%2032&num=4&o0=p&o1=p&s3=QHD&v3=1440&x0=-4.2&x1=388.3&x2=-183.3&x3=-577&y0=65.2&y1=66.2&y2=-38&y3=133&z=14",
  "6 Monitor Engineering Workstation": "a0=16%3A10&a1=16%3A10&a2=32%3A9&a3=21%3A9&a4=16%3A10&a5=16%3A10&d0=30&d1=30&d2=49&d3=40&d4=30&d5=30&f=6%20Monitor%20Engineering%20Workstation&g=4.25&h0=2560&h1=2560&h2=5120&h3=5120&h4=2560&h5=2560&i=mmc5b36-a299-4f00-8a08-5a65806687db&j0=-9&j1=-6&j3=3&k0=10&k1=-10&k4=-35&k5=30&num=6&o4=p&o5=p&s0=QHD%2B&s1=QHD%2B&s2=QHD&s3=4K&s4=QHD%2B&s5=QHD%2B&v0=1600&v1=1600&v2=1440&v3=2160&v4=1600&v5=1600&w=7.5&x0=192&x1=174.5&x2=-622.4&x3=-1324.3&x4=-1223.9&x5=-2555.7&y0=-58&y1=-60.7&y2=216.6&y3=445.3&y4=125&y5=100.6",
  "Laptop With Friends": "d0=15&d1=21&d2=24&d3=21&f=Laptop%20With%20Friends&i=8f82c416-2583-4dc9-83e1-07e6f24ef813&j0=9&k1=5&k3=-5&m0=Laptop&num=4&o1=p&o3=p&w=4&x0=241&x1=-249&x2=-250&x3=-252&y0=204&y1=-12&y2=-10&y3=-12&z=17"
};
const PrebuiltSetupsField_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-7z8z0t{margin:1rem auto;display:flex;justify-content:center}",
  map: null
};
const PrebuiltSetupsField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $id, $$unsubscribe_id;
  $$unsubscribe_id = subscribe(id, (value) => $id = value);
  const parseIdFromSearch = (searchString) => new URLSearchParams(searchString).get(ShortCode.SETUP_ID);
  const idToSubmissionMap = Object.values(communitySubmissions).reduce(
    (acc, submission) => {
      acc[parseIdFromSearch(submission) ?? ""] = submission;
      return acc;
    },
    {}
  );
  $$result.css.add(css$2);
  $$unsubscribe_id();
  return `<div class="svelte-7z8z0t">${validate_component(Select, "Select").$$render(
    $$result,
    {
      label: "Browse a Prebuilt Community Submission",
      style: "width:clamp(300px, 400px, 100vw);",
      value: idToSubmissionMap[$id],
      variant: "outlined"
    },
    {},
    {
      default: () => {
        return `${each(Object.entries(communitySubmissions), (cSubmission) => {
          return `${validate_component(Option, "Option").$$render($$result, { value: cSubmission[1] }, {}, {
            default: () => {
              return `${escape(cSubmission[0])}`;
            }
          })}`;
        })}`;
      }
    }
  )} </div>`;
});
const Setup_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-apk8we{width:100vw;display:flex;justify-content:center;padding-top:3rem}",
  map: null
};
const Setup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_id;
  let $$unsubscribe_setups;
  let $$unsubscribe_scale;
  let $$unsubscribe_name;
  let $$unsubscribe_monitors;
  let $$unsubscribe_deskWidth;
  let $$unsubscribe_deskHeight;
  let $$unsubscribe_description;
  let $$unsubscribe_theme;
  let $$unsubscribe_inputUnits;
  let $$unsubscribe_statUnits;
  let $$unsubscribe_expandStatsByDefault;
  let $$unsubscribe_expandAdvancedOptionsByDefault;
  let $$unsubscribe_preferredSearchEngine;
  let $$unsubscribe_currentSetupId;
  $$unsubscribe_id = subscribe(id, (value) => value);
  $$unsubscribe_setups = subscribe(setups, (value) => value);
  $$unsubscribe_scale = subscribe(scale, (value) => value);
  $$unsubscribe_name = subscribe(name, (value) => value);
  $$unsubscribe_monitors = subscribe(monitors, (value) => value);
  $$unsubscribe_deskWidth = subscribe(deskWidth, (value) => value);
  $$unsubscribe_deskHeight = subscribe(deskHeight, (value) => value);
  $$unsubscribe_description = subscribe(description, (value) => value);
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  $$unsubscribe_inputUnits = subscribe(inputUnits, (value) => value);
  $$unsubscribe_statUnits = subscribe(statUnits, (value) => value);
  $$unsubscribe_expandStatsByDefault = subscribe(expandStatsByDefault, (value) => value);
  $$unsubscribe_expandAdvancedOptionsByDefault = subscribe(expandAdvancedOptionsByDefault, (value) => value);
  $$unsubscribe_preferredSearchEngine = subscribe(preferredSearchEngine, (value) => value);
  $$unsubscribe_currentSetupId = subscribe(currentSetupId, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_id();
  $$unsubscribe_setups();
  $$unsubscribe_scale();
  $$unsubscribe_name();
  $$unsubscribe_monitors();
  $$unsubscribe_deskWidth();
  $$unsubscribe_deskHeight();
  $$unsubscribe_description();
  $$unsubscribe_theme();
  $$unsubscribe_inputUnits();
  $$unsubscribe_statUnits();
  $$unsubscribe_expandStatsByDefault();
  $$unsubscribe_expandAdvancedOptionsByDefault();
  $$unsubscribe_preferredSearchEngine();
  $$unsubscribe_currentSetupId();
  return `${validate_component(PrebuiltSetupsField, "PrebuiltSetupsField").$$render($$result, {}, {}, {})} ${validate_component(CommandButtons, "CommandButtons").$$render($$result, {}, {}, {})} ${`<div class="svelte-apk8we">${validate_component(CircularProgress, "CircularProgress").$$render(
    $$result,
    {
      style: "height: 64px; width: 64px;",
      indeterminate: true
    },
    {},
    {}
  )}</div>`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-qlr056{padding-bottom:20rem}",
  map: null
};
const prerender = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-qlr056">${validate_component(Setup, "Setup").$$render($$result, {}, {}, {})} ${validate_component(SetupSubmission, "SetupSubmission").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default,
  prerender
};
