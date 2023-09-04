import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, s as setContext, o as onDestroy, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, v as validate_component, m as missing_component, h as subscribe, i as getContext, j as escape, k as each } from "../../chunks/ssr.js";
import { f as forwardEventsBuilder, c as classMap, a as classAdderBuilder, S as SmuiElement } from "../../chunks/classAdderBuilder.js";
import { d as dispatch, t as theme, s as setups, D as Dialog, T as Title, a as DialogContent, b as DialogActions, B as Button, S as SetupNameField, c as SetupDescriptionField, i as id, I as IconButton, L as List, e as Item, G as Graphic, f as Text, W as Wrapper, g as Tooltip, h as Textfield, p as preferredSearchEngine, j as Select, O as Option, k as exclude, l as prefixFilter, m as expandAdvancedOptionsByDefault, n as expandStatsByDefault, o as monitors, q as inputUnits, r as statUnits, C as CommonLabel } from "../../chunks/Option.js";
import { MDCTopAppBarBaseFoundation, MDCShortTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCTopAppBarFoundation } from "@material/top-app-bar";
import { r as readable } from "../../chunks/index.js";
import { MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation } from "@material/drawer";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = void 0 } = $$props;
  let { open = false } = $$props;
  let { fixed = true } = $$props;
  let element;
  let instance = void 0;
  let internalClasses = {};
  let previousFocus = null;
  let focusTrap;
  let scrim = false;
  setContext("SMUI:list:nav", true);
  setContext("SMUI:list:item:nav", true);
  setContext("SMUI:list:wrapFocus", true);
  let oldVariant = variant;
  onDestroy(() => {
    instance && instance.destroy();
    scrim && scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
  });
  function getInstance() {
    var _a, _b;
    if (scrim) {
      scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
    }
    if (variant === "modal") {
      scrim = (_b = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".mdc-drawer-scrim")) !== null && _b !== void 0 ? _b : false;
      if (scrim) {
        scrim.addEventListener("SMUIDrawerScrim:click", handleScrimClick);
      }
    }
    const Foundation = variant === "dismissible" ? MDCDismissibleDrawerFoundation : variant === "modal" ? MDCModalDrawerFoundation : void 0;
    return Foundation ? new Foundation({
      addClass,
      removeClass,
      hasClass,
      elementHasClass: (element2, className2) => element2.classList.contains(className2),
      saveFocus: () => previousFocus = document.activeElement,
      restoreFocus: () => {
        if (previousFocus && "focus" in previousFocus && element.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = element.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        open = false;
        dispatch(element, "SMUIDrawer:closed", void 0, void 0, true);
      },
      notifyOpen: () => {
        open = true;
        dispatch(element, "SMUIDrawer:opened", void 0, void 0, true);
      },
      trapFocus: () => focusTrap.trapFocus(),
      releaseFocus: () => focusTrap.releaseFocus()
    }) : void 0;
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
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
  function handleScrimClick() {
    instance && "handleScrimClick" in instance && instance.handleScrimClick();
  }
  function setOpen(value) {
    open = value;
  }
  function isOpen() {
    return open;
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
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldVariant !== variant) {
      oldVariant = variant;
      instance && instance.destroy();
      internalClasses = {};
      instance = getInstance();
      instance && instance.init();
    }
  }
  {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close();
      }
    }
  }
  return `<aside${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-drawer": true,
          "mdc-drawer--dismissible": variant === "dismissible",
          "mdc-drawer--modal": variant === "modal",
          "smui-drawer__absolute": variant === "modal" && !fixed,
          ...internalClasses
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </aside>`;
});
const AppContent = classAdderBuilder({
  class: "mdc-drawer-app-content",
  tag: "div"
});
const Content = classAdderBuilder({
  class: "mdc-drawer__content",
  tag: "div"
});
const Header = classAdderBuilder({
  class: "mdc-drawer__header",
  tag: "div"
});
const DrawerTitle = classAdderBuilder({
  class: "mdc-drawer__title",
  tag: "h1"
});
classAdderBuilder({
  class: "mdc-drawer__subtitle",
  tag: "h2"
});
const Scrim = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "fixed", "component", "tag", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fixed = true } = $$props;
  let element;
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? "div" : void 0 } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
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
            "mdc-drawer-scrim": true,
            "smui-drawer-scrim__absolute": !fixed
          })
        },
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
const DarkModeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let { appearance = "toggle" } = $$props;
  if ($$props.appearance === void 0 && $$bindings.appearance && appearance !== void 0)
    $$bindings.appearance(appearance);
  $$unsubscribe_theme();
  return `<dark-mode-toggle dark="Dark" light="Light"${add_attribute("mode", $theme ?? "dark", 0)}${add_attribute("appearance", appearance, 0)}></dark-mode-toggle>`;
});
const TopAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { variant = "standard" } = $$props;
  let { color = "primary" } = $$props;
  let { collapsed = uninitializedValue } = $$props;
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  let { prominent = false } = $$props;
  let { dense = false } = $$props;
  let { scrollTarget = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  let oldScrollTarget = void 0;
  let oldVariant = variant;
  function getInstance() {
    const Foundation = {
      static: MDCTopAppBarBaseFoundation,
      short: MDCShortTopAppBarFoundation,
      fixed: MDCFixedTopAppBarFoundation,
      standard: MDCTopAppBarFoundation
    }[variant] || MDCTopAppBarFoundation;
    return new Foundation({
      hasClass,
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () => dispatch(element, "SMUITopAppBar:nav", void 0, void 0, true),
      getViewportScrollY: () => scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () => element.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
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
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === "short") {
        collapsed = "isCollapsed" in instance && instance.isCollapsed;
      }
    }
  }
  function getPropStore() {
    return propStore;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.prominent === void 0 && $$bindings.prominent && prominent !== void 0)
    $$bindings.prominent(prominent);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.scrollTarget === void 0 && $$bindings.scrollTarget && scrollTarget !== void 0)
    $$bindings.scrollTarget(scrollTarget);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0)
    $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (propStoreSet) {
      propStoreSet({ variant, prominent, dense });
    }
  }
  {
    if (oldVariant !== variant && instance) {
      oldVariant = variant;
      instance.destroy();
      internalClasses = {};
      internalStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (instance && variant === "short" && "setAlwaysCollapsed" in instance) {
      instance.setAlwaysCollapsed(alwaysCollapsed);
    }
  }
  {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener("scroll", handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  }
  return ` <header${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-top-app-bar": true,
          "mdc-top-app-bar--short": variant === "short",
          "mdc-top-app-bar--short-collapsed": collapsed,
          "mdc-top-app-bar--fixed": variant === "fixed",
          "smui-top-app-bar--static": variant === "static",
          "smui-top-app-bar--color-secondary": color === "secondary",
          "mdc-top-app-bar--prominent": prominent,
          "mdc-top-app-bar--dense": dense,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </header>`;
});
const Row = classAdderBuilder({
  class: "mdc-top-app-bar__row",
  tag: "div"
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "toolbar", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { toolbar = false } = $$props;
  let element;
  setContext("SMUI:icon-button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  setContext("SMUI:button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.toolbar === void 0 && $$bindings.toolbar && toolbar !== void 0)
    $$bindings.toolbar(toolbar);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<section${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-top-app-bar__section": true,
          "mdc-top-app-bar__section--align-start": align === "start",
          "mdc-top-app-bar__section--align-end": align === "end"
        }))
      },
      escape_object(toolbar ? { role: "toolbar" } : {}),
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} </section>`;
});
const TopAppBarTitle = classAdderBuilder({
  class: "mdc-top-app-bar__title",
  tag: "span"
});
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "padded",
    "inset",
    "insetLeading",
    "insetTrailing",
    "insetPadding",
    "component",
    "tag",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { padded = false } = $$props;
  let { inset = false } = $$props;
  let { insetLeading = false } = $$props;
  let { insetTrailing = false } = $$props;
  let { insetPadding = false } = $$props;
  let element;
  let nav = getContext("SMUI:list:item:nav");
  let context = getContext("SMUI:separator:context");
  let { component = SmuiElement } = $$props;
  let { tag = component === SmuiElement ? nav || context !== "list" ? "hr" : "li" : void 0 } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0)
    $$bindings.inset(inset);
  if ($$props.insetLeading === void 0 && $$bindings.insetLeading && insetLeading !== void 0)
    $$bindings.insetLeading(insetLeading);
  if ($$props.insetTrailing === void 0 && $$bindings.insetTrailing && insetTrailing !== void 0)
    $$bindings.insetTrailing(insetTrailing);
  if ($$props.insetPadding === void 0 && $$bindings.insetPadding && insetPadding !== void 0)
    $$bindings.insetPadding(insetPadding);
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
            "mdc-deprecated-list-divider": true,
            "mdc-deprecated-list-divider--padded": padded,
            "mdc-deprecated-list-divider--inset": inset,
            "mdc-deprecated-list-divider--inset-leading": insetLeading,
            "mdc-deprecated-list-divider--inset-trailing": insetTrailing,
            "mdc-deprecated-list-divider--inset-padding": insetPadding
          })
        },
        { role: "separator" },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const ConfirmDeleteSetupDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_setups;
  $$unsubscribe_setups = subscribe(setups, (value) => value);
  let { setup = null } = $$props;
  let { confirmDeleteSetupDialogOpen = false } = $$props;
  if ($$props.setup === void 0 && $$bindings.setup && setup !== void 0)
    $$bindings.setup(setup);
  if ($$props.confirmDeleteSetupDialogOpen === void 0 && $$bindings.confirmDeleteSetupDialogOpen && confirmDeleteSetupDialogOpen !== void 0)
    $$bindings.confirmDeleteSetupDialogOpen(confirmDeleteSetupDialogOpen);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Dialog, "Dialog").$$render(
      $$result,
      { open: confirmDeleteSetupDialogOpen },
      {
        open: ($$value) => {
          confirmDeleteSetupDialogOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, { style: "text-align: left;" }, {}, {
            default: () => {
              return `Are you sure?`;
            }
          })} ${validate_component(DialogContent, "DialogContent").$$render($$result, {}, {}, {
            default: () => {
              return `<p>Are you sure you want to delete setup <i>${escape(setup?.name ?? "")}</i> ?</p>`;
            }
          })} ${validate_component(DialogActions, "DialogActions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `No, Cancel`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Yes, Delete`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_setups();
  return $$rendered;
});
const SetupEditDialog_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "div.svelte-xnq0ge{display:grid;min-width:300px;gap:1rem}",
  map: null
};
const SetupEditDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { setupEditDialogOpen = false } = $$props;
  if ($$props.setupEditDialogOpen === void 0 && $$bindings.setupEditDialogOpen && setupEditDialogOpen !== void 0)
    $$bindings.setupEditDialogOpen(setupEditDialogOpen);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Dialog, "Dialog").$$render(
      $$result,
      { open: setupEditDialogOpen },
      {
        open: ($$value) => {
          setupEditDialogOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
            default: () => {
              return `Edit Setup`;
            }
          })} ${validate_component(DialogContent, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="svelte-xnq0ge">${validate_component(SetupNameField, "SetupNameField").$$render($$result, {}, {}, {})} ${validate_component(SetupDescriptionField, "SetupDescriptionField").$$render($$result, {}, {}, {})}</div>`;
            }
          })} ${validate_component(DialogActions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, { type: "button" }, {}, {
                default: () => {
                  return `Close`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const SetupsDrawer_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".setup-item{padding:1rem 0.5rem !important}.setup-name.svelte-1j1wsd{width:10rem;display:flex;flex-direction:column;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
  map: null
};
const SetupsDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $setups, $$unsubscribe_setups;
  let $id, $$unsubscribe_id;
  $$unsubscribe_setups = subscribe(setups, (value) => $setups = value);
  $$unsubscribe_id = subscribe(id, (value) => $id = value);
  let { drawerOpen = false } = $$props;
  let { onCreateNewSetup } = $$props;
  let setupToDelete = null;
  let confirmDeleteSetupDialogOpen = false;
  let setupEditDialogOpen = false;
  if ($$props.drawerOpen === void 0 && $$bindings.drawerOpen && drawerOpen !== void 0)
    $$bindings.drawerOpen(drawerOpen);
  if ($$props.onCreateNewSetup === void 0 && $$bindings.onCreateNewSetup && onCreateNewSetup !== void 0)
    $$bindings.onCreateNewSetup(onCreateNewSetup);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        style: "width:300px;",
        variant: "modal",
        fixed: true,
        open: drawerOpen
      },
      {
        open: ($$value) => {
          drawerOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Header, "Header").$$render(
            $$result,
            {
              style: "display: flex;align-items:flex-start;"
            },
            {},
            {
              default: () => {
                return `${validate_component(DrawerTitle, "DrawerTitle").$$render($$result, { style: "text-align:left;margin:0;" }, {}, {
                  default: () => {
                    return `Manage Setups`;
                  }
                })} ${validate_component(IconButton, "IconButton").$$render(
                  $$result,
                  {
                    style: "position:absolute;top:4px;right:4px;",
                    class: "material-icons"
                  },
                  {},
                  {
                    default: () => {
                      return `close`;
                    }
                  }
                )}`;
              }
            }
          )} ${validate_component(Content, "Content").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(List, "List").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `edit`;
                        }
                      })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `Edit Current Setup`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Item, "Item").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                        default: () => {
                          return `add`;
                        }
                      })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                        default: () => {
                          return `Create New Setup`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} ${each(Object.values($setups), (setup) => {
                    return `${validate_component(Item, "Item").$$render(
                      $$result,
                      {
                        activated: setup.id === $id,
                        class: "setup-item"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(Graphic, "Graphic").$$render($$result, { class: "material-icons" }, {}, {
                            default: () => {
                              return `monitor`;
                            }
                          })} <div class="setup-name svelte-1j1wsd">${validate_component(Text, "Text").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(setup.name)} `;
                            }
                          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(setup.monitors.length)} monitors`;
                            }
                          })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
                            default: () => {
                              return `${escape(new Date(setup?.lastOpened ?? "")?.toDateString())}`;
                            }
                          })}</div> ${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
                            default: () => {
                              return `${validate_component(IconButton, "IconButton").$$render(
                                $$result,
                                {
                                  disabled: Object.keys($setups).length <= 1,
                                  class: "material-icons"
                                },
                                {},
                                {
                                  default: () => {
                                    return `delete
            `;
                                  }
                                }
                              )} ${validate_component(Tooltip, "Tooltip").$$render($$result, {}, {}, {
                                default: () => {
                                  return `Delete this setup`;
                                }
                              })} `;
                            }
                          })} `;
                        }
                      }
                    )}`;
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${validate_component(Scrim, "Scrim").$$render($$result, { fixed: true }, {}, {})} ${validate_component(ConfirmDeleteSetupDialog, "ConfirmDeleteSetupDialog").$$render(
      $$result,
      {
        confirmDeleteSetupDialogOpen,
        setup: setupToDelete
      },
      {
        confirmDeleteSetupDialogOpen: ($$value) => {
          confirmDeleteSetupDialogOpen = $$value;
          $$settled = false;
        },
        setup: ($$value) => {
          setupToDelete = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SetupEditDialog, "SetupEditDialog").$$render(
      $$result,
      { setupEditDialogOpen },
      {
        setupEditDialogOpen: ($$value) => {
          setupEditDialogOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_setups();
  $$unsubscribe_id();
  return $$rendered;
});
const CreateSetupDialog_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-xnq0ge{display:grid;min-width:300px;gap:1rem}",
  map: null
};
const CreateSetupDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_setups;
  $$unsubscribe_setups = subscribe(setups, (value) => value);
  let { createSetupDialogOpen = false } = $$props;
  let { drawerOpen = false } = $$props;
  let newSetupName = "Untitled Setup";
  let newDescription = ``;
  if ($$props.createSetupDialogOpen === void 0 && $$bindings.createSetupDialogOpen && createSetupDialogOpen !== void 0)
    $$bindings.createSetupDialogOpen(createSetupDialogOpen);
  if ($$props.drawerOpen === void 0 && $$bindings.drawerOpen && drawerOpen !== void 0)
    $$bindings.drawerOpen(drawerOpen);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Dialog, "Dialog").$$render(
      $$result,
      { open: createSetupDialogOpen },
      {
        open: ($$value) => {
          createSetupDialogOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, { style: "text-align: left;" }, {}, {
            default: () => {
              return `Create a new setup`;
            }
          })} ${validate_component(DialogContent, "DialogContent").$$render($$result, {}, {}, {
            default: () => {
              return `<p data-svelte-h="svelte-1aywj1g">Your previously opened setup will be saved in the sidebar for later</p> <p data-svelte-h="svelte-yhhr5x">Give this new setup a unique name</p> <div class="svelte-xnq0ge">${validate_component(Textfield, "TextField").$$render(
                $$result,
                {
                  label: "Setup Name",
                  input$name: "newSetupName",
                  required: true,
                  style: "width:100%;",
                  variant: "filled",
                  value: newSetupName
                },
                {
                  value: ($$value) => {
                    newSetupName = $$value;
                    $$settled = false;
                  }
                },
                {}
              )} ${validate_component(Textfield, "TextField").$$render(
                $$result,
                {
                  label: "Setup Description (optional)",
                  input$name: "newSetupDescription",
                  textarea: true,
                  style: "width:100%;max-height:200px;",
                  variant: "filled",
                  value: newDescription
                },
                {
                  value: ($$value) => {
                    newDescription = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div>`;
            }
          })} ${validate_component(DialogActions, "DialogActions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Cancel`;
                }
              })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Create Setup`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_setups();
  return $$rendered;
});
const AmazonPng = "data:image/png;base64,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";
const BestBuyPng = "/_app/immutable/assets/bestbuy.6f394a63.png";
const BingPng = "data:image/png;base64,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";
const DuckDuckGoPng = "/_app/immutable/assets/duckduckgo.9eff5bc2.png";
const GooglePng = "/_app/immutable/assets/google.ed39ebb3.png";
const NeweggPng = "/_app/immutable/assets/newegg.17bcafdb.png";
const AmazonWebp = "data:image/webp;base64,UklGRjAMAABXRUJQVlA4WAoAAAAQAAAA4AAA4AAAQUxQSBICAAABDzD/ERFCbmxbkSQ9AgGR9gBPGs8GTMMUxgNEJoLgCcnyf1XPrkT0fwLwv3Ehg8IgacUKSQax/qDYXFihzKUXqqso1FdJaKwoxK0VyTsnUnZepO6CSNPpuygydun15o4ifBUjkF/GCpQXMFWqkkzIGgGYJJ1AI+mBoeCArmB1DNCEuh6AStK/QXqXplPJqICmgxpUlr8TnRqDGpUqVGk6UyVTpekMnamSqVJ0qk7XGTpThy/gi1B+JFSh8vBi9WFUEsQayagT5DpJr+PkBkmrY95kksRXRLX0lbWvJm+6XniTIUcAk2S8w2uQZBIyWvlBIYui4dAWRsajL+zdJBkxF06G36my9TrhbrxRfx1/146c3A+S9q5uOkmIpUYmgbKKlYwCeRUqGQSwcoX0EnNhM+kkxsKANBL9kYBJSNZHBEYSKQ8P9CiChwVakOlkAlC9TCE9gGJl0Dy2gydldVhId2JvGulP3M24CDc8y/EiX4A605zBoB8NdwG0ox5UWlKpvPlo7qTQXnyeZYaznM7AdFZTs0eT5qinfjbojma86AwnmaGbo0qeNPpxVkh3MOkGjjMZd4W0F5ik2XTSfLsYZFhlMuGmkzSLTkZ8XlSS8VFIeoSLQpIRyCTprvDYm+xvxhGyu+knETA39cTjPp9YAcwDSPZdFCk7L4KdkemrCNmyckKYC0jXhxdDJyMUi8f/5FZQOCD4CQAA8D4AnQEq4QDhAD6RRJ1LpaOioaMTGoCwEgllbvx8mTfrCi/4bzJ6q/Z/xLtqhp69nqF/Mn+u9SnpE+YD+T/5H9uvfM9Cv/S9QD/XdQB6AHlw+yR+5Xph6ox4u/vf4n9/X95/KnkTf2k6BkgrtLxb70drvdbdD8wLuh/wfDZ1ApKP+08DegB/FP8F/1PT0/0/Kb+d/5X2CP5N/U/129mL2F/t17Bv6xESZw26ub84bdXN9llj10awJfO35w26uT20onx2Sx8JZMbSnNd8qJmQQ0MVmG3VzcX2xPR2Zi1MN/2WMIjn44bH9EKlEkSQcRNRjUJBB8JN26/2Ck+m+rNww0yJUlKN+cNujFaxFzuviGaTND8eqHFRqaYbdWRp6ROY50iaMvp1iS0jrTvOrm+1F/IOZHwVWwu6H7e8AebCtgcHx1CzOHdMRXSfSqwcKp0R75PgbTx8un2iyNA29m1QzEVwsXD+UR16cEsprjW7ufBQfFvELUTad28kFC5joKgng7skZTNeHv3NKgFTeq3JVBIBMMGbp8b35hu7YT/GICpD4zJ76S0UjHl6WDByJEINuQFrUtwGU1nvzP976kD7DRNdXvPMkN4okRWR6Awbvnaa/B7dk4aoWBBqBniINf80AgnT3G6kJD5MVbLw4FlMiSDjdXN+cNurm/OG3VzfmEAA/v9W0CKijrcVYMwOyBrw/54JnURqrEtHhxkm7pgpCujhG+VqMWHrMviRvL6aBykr46FfLvZzKtEzNES/vJm7xai5uuNEa+Lw4aUY1tVcCbFCqZSn0Lk8gLPO8m49okIIyvkl3mArnftxMcNU1jDXVBAV/Xi/a5NAKrQT0A38Xd8pJP6QpVBQc7w8p4B/7H8yS84Xg62z36bxzNiTtHFLMccGzTQUb8ONR3G9Hpad1HSYdx6x+84O0MPzQtKY5Dvhdq7sXTdaqRgu5ttDFGLO61dfWTtuLgggYiwJf1dOGe9lo6akJ9d2MBXB0ei3EeLkvno+08OXrXaBA7jfyvwmRcIGGAVEk1CTFcdO+T7GL5RkLWbkM3XVcj2tLyxtO01XGzc94T6Lw+2So9+aOfTz66dRsgGbHxSSuIe76DKGb42nhLtw07upoEs6C0LauPKjwAKP7M6cLp1AryIXW3PUc3sd7MM2Fv8zpNwwiDzSfMbhFBgo83Yt8Ev0FCW+VD4OHtriF53FCjEymxp0SIaNVQg+ZDlPa/IHd1Aqy6EhAPV1jW3h1MgPDYEQog3KGDdhVnoYzK5JRIbleg7YpIXfaxH4w48l2u24kTJr72jgNVdxR+cfMxn5Ht+kSG0Y9AutxL5BAvdRqOsT+IM+CcBHt8Su1UbruKEw6moHniSLnXt0RC6ugzKyf1+H2qxuAOAX2jX+lQssKqmFqh8Y7I6/91g6KVMKxPa21UrsGlDhpXmThhdeb5F5lHCOYLzxvMwrSKimUmiNh5ybsftQ2c7Vlp+HF+UmZ6XaNa7wdWF0a4kbM7Yq8SDiAnJt4BcF0By3joiZvDVz9swpan6ZTi/XXB7Wh8bxqHmKPWiNuL11Q1pZLtho/sb39jHPWIuxKDPFC4Z6Tdlr2ZSo0Shtg1bCGstOeydabStkfmAStMCDVYf8Ub4S/yufYw2BruVM9hVFic0cnRMj0kQBwH1K8i93aCaqXUNktHq+0MO9mBKxMGrDZHQ7NpYlMYnv3l/s8rJDllBqLWjP0Phv8PdM0iiJjg79UVmcfUB9/xpCWh0OWyV/Gyj1DX+ciHuhDUETfKUvF4kwj4Xe8dXLdt9W+F8n0vw+u3XSpfy1dz1obD3ePRrfIcisdq6Nv8MC/OLin+YHdkqqYzRgc1EUtJuTS32/uSJKrjPpFH8OVnDEweKzTVTRwctzApBbOK9RGLh+sUsHdN0QjkaE4wM00V9VwbDFvHZm/1AeYhhg0Re+YMoVyAUERSH9TgQiOUdYEnWPNVh+OfJc3gE1SKvPffsppL4l9x9FnnXSc6UAeZAbok3s5zq/prlGaL4WPDR6DN3taysxNKXYZvyKg0/wrHINAFEulwv/ENx9ggSbnZ794iDocS0Jc/sDrEtiXmFR+eD+DdSv8bCMubWwTxOM8nMwvjhv+vO7QJRh6YNdCzkD1B7OEH8M1YufYC2Lq536eyr0FwUupgcfrMPfhQuHmtUT0aOC6lB2yqPtMrHCurGpKzoWTCO/TtZdUAKEIdCFyfpDksgd8gT76C5xwZZeLcNzGKt0xaa0pJF0W7zvQrIZTmFTd3JP6xQLrixwLZW+vAeXZvSFiJDppL/BJF3ia+CC0f1f4NLSpl5j/WaEeBEei+tHqbLDgAXYWxQq6uLE9nSm1dP9Gj5zshYLxNL13kUKPg+4jIsDmQ7GmesGhAzAZdYjukA4fb5wtMt5GemwO6Tlkew76YANZC3qxrWZuiiasiVQsqWuZf0CgRTKp9bcw5T/pqPBXP36NfoAyI6lWNBAuA30S3csgsYL59un9aHR0Aw47hs4yy0Kg6t1qr1cioKLvq/7fMw+ejnUNCaMjx4P0WTcUv7/uAUVPOUu8SsWrorlu8cFe4HpwnSb52oolfzBNJtUpTyna8BXRg1CeprFhRusuQxLJxfst+b7AuOcND7B7lwWoTcOwIW5Qe5FtIJtrEta7wYJvlAsJA5DjfTLMWMikyoX1G+2JUTd/CUNsGcDIjty36W6irf+rfdg7Qx5/8RZ4Kav6WmzpNx4su9reFRRE6kxqieDjCCyXr2EgrQy7B2fGUyUC17nGmmU1CYskgFZKHT1lq/+PRG3K+GlnueyifT4AiNkTE1zcifOXS+9Z57DwhwsIagC+0ZMu637sFpUhESQo/5FizFxEIRde3X8KIzmDElsWaLyTOZiAoPi8z395XCfvJatWCm41HDz2ruBHesbMFu5YdvLTCJd2hSXzZee95j2nk5rr/obmdl11mnOqnhwv295aVhfPP/JS6bXHKsTOjrKp4q7UFygUTBzWFBxBNX4l8tg+bi/vTV4J/muReT1pNbwyAzhHYQEVcK4KOqpgmj6nxzkbjRFMfEqBdSjj2UEl56pzUFxAsU8LK+E4FArBuXVGdEMeHV6x3zEPcdzwLDBq93yByYGJ5Y8K73v0N+ls1nClxRbE/EglQIr8QPCYtFksTnu3lCVBtvxlyPLAh7xGYtG+0md7g3Xar2D+fTCadtGIoq6uYmq+2TGO7Hu8+viYc0TAPP5yC31d4i6h6EBS4PJL7Q3X3LxlJoQxP+EB1g+Y7MRh7jeiBWWVqcWFHRKrrZPHKy2vNPyclCOiwc6jVRj+wom8MU7LQRkOLqUsiJ6rKPYd/9paeN8WAZmhTrnPrjbLX0OSOiPhVJnIISIxcwK8X1Gx0GriaiX0Ted5ZCYEpKIZE0bvQAAAAAAAAA=";
const BestBuyWebp = "/_app/immutable/assets/bestbuy.1e2c5650.webp";
const BingWebp = "data:image/webp;base64,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";
const DuckDuckGoWebp = "/_app/immutable/assets/duckduckgo.1e69b39a.webp";
const GoogleWebp = "/_app/immutable/assets/google.a60c7a7d.webp";
const NeweggWebp = "/_app/immutable/assets/newegg.d99a818f.webp";
const searchOptions = {
  searchEngine: [
    {
      name: "Google",
      logoPng: GooglePng,
      logoWebp: GoogleWebp
    },
    {
      name: "Bing",
      logoPng: BingPng,
      logoWebp: BingWebp
    },
    {
      name: "DuckDuckGo",
      logoPng: DuckDuckGoPng,
      logoWebp: DuckDuckGoWebp
    }
  ],
  store: [
    {
      name: "Amazon",
      logoPng: AmazonPng,
      logoWebp: AmazonWebp
    },
    {
      name: "Best Buy",
      logoPng: BestBuyPng,
      logoWebp: BestBuyWebp
    },
    {
      name: "Newegg",
      logoPng: NeweggPng,
      logoWebp: NeweggWebp
    }
  ]
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["srcWebp", "srcPng", "lazy", "alt"]);
  let { srcWebp = void 0 } = $$props;
  let { srcPng = void 0 } = $$props;
  let { lazy = false } = $$props;
  let { alt = "" } = $$props;
  if ($$props.srcWebp === void 0 && $$bindings.srcWebp && srcWebp !== void 0)
    $$bindings.srcWebp(srcWebp);
  if ($$props.srcPng === void 0 && $$bindings.srcPng && srcPng !== void 0)
    $$bindings.srcPng(srcPng);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0)
    $$bindings.lazy(lazy);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<picture>${srcWebp ? `<source${add_attribute("srcset", srcWebp, 0)} type="image/webp">` : ``} ${srcPng ? `<source${add_attribute("srcset", srcPng, 0)} type="image/png">` : ``} <img${spread(
    [
      { alt: escape_attribute_value(alt) },
      {
        loading: escape_attribute_value(lazy ? "lazy" : "eager")
      },
      { src: escape_attribute_value(srcPng) },
      escape_object($$restProps)
    ],
    {}
  )}></picture>`;
});
const PreferredSearchEngineField_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".se-img{padding-right:1rem;width:1.5rem}",
  map: null
};
const PreferredSearchEngineField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $preferredSearchEngine, $$unsubscribe_preferredSearchEngine;
  $$unsubscribe_preferredSearchEngine = subscribe(preferredSearchEngine, (value) => $preferredSearchEngine = value);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Select, "Select").$$render(
      $$result,
      {
        label: "Preferred Search Engine",
        input$name: "preferredSearchEngine",
        variant: "filled",
        value: $preferredSearchEngine
      },
      {
        value: ($$value) => {
          $preferredSearchEngine = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(
            [
              ...Object.values(searchOptions.searchEngine),
              ...Object.values(searchOptions.store)
            ],
            (searchEngine) => {
              return `${validate_component(Option, "Option").$$render($$result, { value: searchEngine.name }, {}, {
                default: () => {
                  return `${validate_component(Image, "Image").$$render(
                    $$result,
                    {
                      alt: searchEngine.name + " logo",
                      class: "se-img",
                      lazy: true,
                      srcPng: searchEngine.logoPng,
                      srcWebp: searchEngine.logoWebp
                    },
                    {},
                    {}
                  )} ${escape(searchEngine.name)} `;
                }
              })}`;
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_preferredSearchEngine();
  return $$rendered;
});
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "disabled",
    "focusRing",
    "color",
    "group",
    "checked",
    "value",
    "processing",
    "icons",
    "icons$use",
    "icons$class",
    "getId",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { disabled = false } = $$props;
  let { focusRing = false } = $$props;
  let { color = "primary" } = $$props;
  let { group = uninitializedValue } = $$props;
  let { checked = uninitializedValue } = $$props;
  let { value = null } = $$props;
  let { processing = false } = $$props;
  let { icons = true } = $$props;
  let { icons$use = [] } = $$props;
  let { icons$class = "" } = $$props;
  let element;
  let internalClasses = {};
  let rippleElement;
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  let selected = isUninitializedValue(group) ? isUninitializedValue(checked) ? false : checked : group.indexOf(value) !== -1;
  let state = {
    get disabled() {
      return disabled;
    },
    set disabled(value2) {
      disabled = value2;
    },
    get processing() {
      return processing;
    },
    set processing(value2) {
      processing = value2;
    },
    get selected() {
      return selected;
    },
    set selected(value2) {
      selected = value2;
    }
  };
  let previousChecked = checked;
  let previousGroup = isUninitializedValue(group) ? [] : [...group];
  let previousSelected = selected;
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.focusRing === void 0 && $$bindings.focusRing && focusRing !== void 0)
    $$bindings.focusRing(focusRing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.processing === void 0 && $$bindings.processing && processing !== void 0)
    $$bindings.processing(processing);
  if ($$props.icons === void 0 && $$bindings.icons && icons !== void 0)
    $$bindings.icons(icons);
  if ($$props.icons$use === void 0 && $$bindings.icons$use && icons$use !== void 0)
    $$bindings.icons$use(icons$use);
  if ($$props.icons$class === void 0 && $$bindings.icons$class && icons$class !== void 0)
    $$bindings.icons$class(icons$class);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0)
    $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    {
      let notifyChange = false;
      if (!isUninitializedValue(group)) {
        if (previousSelected !== selected) {
          const idx = group.indexOf(value);
          if (selected && idx === -1) {
            group.push(value);
            group = group;
          } else if (!selected && idx !== -1) {
            group.splice(idx, 1);
            group = group;
          }
          notifyChange = true;
        } else {
          const idxPrev = previousGroup.indexOf(value);
          const idx = group.indexOf(value);
          if (idxPrev > -1 && idx === -1) {
            state.selected = false;
          } else if (idx > -1 && idxPrev === -1) {
            state.selected = true;
          }
        }
      }
      if (isUninitializedValue(checked)) {
        if (previousSelected !== selected) {
          notifyChange = true;
        }
      } else if (checked !== selected) {
        if (checked === previousChecked) {
          checked = selected;
          notifyChange = true;
        } else {
          state.selected = checked;
        }
      }
      previousChecked = checked;
      previousGroup = isUninitializedValue(group) ? [] : [...group];
      previousSelected = selected;
      if (notifyChange && element) {
        dispatch(element, "SMUISwitch:change", { selected, value });
      }
    }
  }
  return `<button${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-switch": true,
          "mdc-switch--unselected": !selected,
          "mdc-switch--selected": selected,
          "mdc-switch--processing": processing,
          "smui-switch--color-secondary": color === "secondary",
          ...internalClasses
        }))
      },
      { type: "button" },
      { role: "switch" },
      {
        "aria-checked": escape_attribute_value(selected ? "true" : "false")
      },
      { disabled: disabled || null },
      escape_object(inputProps),
      escape_object(exclude($$restProps, ["icons$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><div class="mdc-switch__track"></div> <div class="mdc-switch__handle-track"><div class="mdc-switch__handle"><div class="mdc-switch__shadow" data-svelte-h="svelte-fnhar4"><div class="mdc-elevation-overlay"></div></div> <div class="mdc-switch__ripple"${add_attribute("this", rippleElement, 0)}></div> ${icons ? `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [icons$class]: true,
          "mdc-switch__icons": true
        }))
      },
      escape_object(prefixFilter($$restProps, "icons$"))
    ],
    {}
  )}><svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24"><path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path></svg> <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24"><path d="M20 13H4v-2h16v2z"></path></svg></div>` : ``}</div></div> ${focusRing ? `<div class="mdc-switch__focus-ring-wrapper" data-svelte-h="svelte-1dop874"><div class="mdc-switch__focus-ring"></div></div>` : ``} </button>`;
});
let counter = 0;
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { noWrap = false } = $$props;
  let { inputId = "SMUI-form-field-" + counter++ } = $$props;
  let { label$use = [] } = $$props;
  let element;
  let label;
  setContext("SMUI:generic:input:props", { id: inputId });
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.noWrap === void 0 && $$bindings.noWrap && noWrap !== void 0)
    $$bindings.noWrap(noWrap);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.label$use === void 0 && $$bindings.label$use && label$use !== void 0)
    $$bindings.label$use(label$use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-form-field": true,
          "mdc-form-field--align-end": align === "end",
          "mdc-form-field--nowrap": noWrap
        }))
      },
      escape_object(exclude($$restProps, ["label$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``} <label${spread(
    [
      { for: escape_attribute_value(inputId) },
      escape_object(prefixFilter($$restProps, "label$"))
    ],
    {}
  )}${add_attribute("this", label, 0)}>${slots.label ? slots.label({}) : ``}</label> </div>`;
});
const ExpandedByDefaultFields = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $expandAdvancedOptionsByDefault, $$unsubscribe_expandAdvancedOptionsByDefault;
  let $expandStatsByDefault, $$unsubscribe_expandStatsByDefault;
  $$unsubscribe_expandAdvancedOptionsByDefault = subscribe(expandAdvancedOptionsByDefault, (value) => $expandAdvancedOptionsByDefault = value);
  $$unsubscribe_expandStatsByDefault = subscribe(expandStatsByDefault, (value) => $expandStatsByDefault = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(FormField, "FormField").$$render(
      $$result,
      {
        align: "end",
        style: "justify-content:space-between;"
      },
      {},
      {
        label: () => {
          return `<span slot="label" data-svelte-h="svelte-gdz3i1">Expand Advanced Options By Default</span>`;
        },
        default: () => {
          return `${validate_component(Switch, "Switch").$$render(
            $$result,
            {
              color: "primary",
              checked: $expandAdvancedOptionsByDefault
            },
            {
              checked: ($$value) => {
                $expandAdvancedOptionsByDefault = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} ${validate_component(FormField, "FormField").$$render(
      $$result,
      {
        align: "end",
        style: "justify-content:space-between;"
      },
      {},
      {
        label: () => {
          return `<span slot="label" data-svelte-h="svelte-1pmlru8">Expand Stats By Default</span>`;
        },
        default: () => {
          return `${validate_component(Switch, "Switch").$$render(
            $$result,
            {
              color: "primary",
              checked: $expandStatsByDefault
            },
            {
              checked: ($$value) => {
                $expandStatsByDefault = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_expandAdvancedOptionsByDefault();
  $$unsubscribe_expandStatsByDefault();
  return $$rendered;
});
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "group",
    "value",
    "valueKey",
    "input$use",
    "input$class",
    "getId",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { disabled = false } = $$props;
  let { touch = false } = $$props;
  let { group = void 0 } = $$props;
  let { value = null } = $$props;
  let { valueKey = uninitializedValue } = $$props;
  let { input$use = [] } = $$props;
  let { input$class = "" } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueKey === void 0 && $$bindings.valueKey && valueKey !== void 0)
    $$bindings.valueKey(valueKey);
  if ($$props.input$use === void 0 && $$bindings.input$use && input$use !== void 0)
    $$bindings.input$use(input$use);
  if ($$props.input$class === void 0 && $$bindings.input$class && input$class !== void 0)
    $$bindings.input$class(input$class);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0)
    $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-radio": true,
          "mdc-radio--disabled": disabled,
          "mdc-radio--touch": touch,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
      },
      escape_object(exclude($$restProps, ["input$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><input${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [input$class]: true,
          "mdc-radio__native-control": true
        }))
      },
      { type: "radio" },
      escape_object(inputProps),
      { disabled: disabled || null },
      {
        value: escape_attribute_value(isUninitializedValue(valueKey) ? value : valueKey)
      },
      escape_object(prefixFilter($$restProps, "input$"))
    ],
    {}
  )}${(isUninitializedValue(valueKey) ? value : valueKey) === group ? add_attribute("checked", true, 1) : ""}> <div class="mdc-radio__background" data-svelte-h="svelte-14iudo4"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div> </div>`;
});
const UnitsField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_monitors;
  let $inputUnits, $$unsubscribe_inputUnits;
  let $statUnits, $$unsubscribe_statUnits;
  $$unsubscribe_monitors = subscribe(monitors, (value) => value);
  $$unsubscribe_inputUnits = subscribe(inputUnits, (value) => $inputUnits = value);
  $$unsubscribe_statUnits = subscribe(statUnits, (value) => $statUnits = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div>${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Input Units`;
      }
    })} ${each(["Imperial", "Metric"], (option) => {
      return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
        label: () => {
          return `<span slot="label">${escape(option)}</span>`;
        },
        default: () => {
          return `${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              value: option,
              touch: true,
              group: $inputUnits
            },
            {
              group: ($$value) => {
                $inputUnits = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        }
      })}`;
    })}</div> <div>${validate_component(CommonLabel, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Stat Units`;
      }
    })} ${each(["Imperial", "Metric"], (option) => {
      return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
        label: () => {
          return `<span slot="label">${escape(option)}</span>`;
        },
        default: () => {
          return `${validate_component(Radio, "Radio").$$render(
            $$result,
            {
              value: option,
              touch: true,
              group: $statUnits
            },
            {
              group: ($$value) => {
                $statUnits = $$value;
                $$settled = false;
              }
            },
            {}
          )} `;
        }
      })}`;
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_monitors();
  $$unsubscribe_inputUnits();
  $$unsubscribe_statUnits();
  return $$rendered;
});
const SettingsDialog_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".settings-grid.svelte-llbcdx{display:grid;gap:2rem;overflow:visible;min-width:320px}",
  map: null
};
const SettingsDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { settingsDialogOpen = false } = $$props;
  if ($$props.settingsDialogOpen === void 0 && $$bindings.settingsDialogOpen && settingsDialogOpen !== void 0)
    $$bindings.settingsDialogOpen(settingsDialogOpen);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Dialog, "Dialog").$$render(
      $$result,
      { open: settingsDialogOpen },
      {
        open: ($$value) => {
          settingsDialogOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Title, "Title").$$render($$result, {}, {}, {
            default: () => {
              return `Settings`;
            }
          })} ${validate_component(DialogContent, "Content").$$render($$result, { style: "min-height:350px" }, {}, {
            default: () => {
              return `<div class="settings-grid svelte-llbcdx">${validate_component(PreferredSearchEngineField, "PreferredSearchEngineField").$$render($$result, {}, {}, {})} ${validate_component(ExpandedByDefaultFields, "ExpandedByDefaultFields").$$render($$result, {}, {}, {})} ${validate_component(UnitsField, "UnitsField").$$render($$result, {}, {}, {})} ${validate_component(DarkModeToggle, "DarkModeToggle").$$render($$result, { appearance: "switch" }, {}, {})}</div>`;
            }
          })} ${validate_component(DialogActions, "Actions").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                default: () => {
                  return `Close`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".toolbar-link{text-decoration:none;margin:0 0.75rem}.nav-logo{margin:0 -0.4rem}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topAppBar;
  let drawerOpen = false;
  let createSetupDialogOpen = false;
  let settingsDialogOpen = false;
  const handleCreateSetup = () => {
    createSetupDialogOpen = true;
  };
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(TopAppBar, "TopAppBar").$$render(
      $$result,
      {
        color: "secondary",
        dense: true,
        style: "min-width:9.5rem;",
        variant: "short",
        this: topAppBar
      },
      {
        this: ($$value) => {
          topAppBar = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Section, "Section").$$render($$result, { align: "start" }, {}, {
                default: () => {
                  return `${validate_component(IconButton, "IconButton").$$render(
                    $$result,
                    {
                      title: "Manage Setups",
                      class: "material-icons"
                    },
                    {},
                    {
                      default: () => {
                        return `menu`;
                      }
                    }
                  )} ${validate_component(IconButton, "IconButton").$$render(
                    $$result,
                    {
                      title: "Settings",
                      class: "material-icons"
                    },
                    {},
                    {
                      default: () => {
                        return `settings`;
                      }
                    }
                  )} ${validate_component(IconButton, "IconButton").$$render(
                    $$result,
                    {
                      title: "Create New Setup",
                      class: "material-icons"
                    },
                    {},
                    {
                      default: () => {
                        return `add`;
                      }
                    }
                  )}`;
                }
              })} ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
                default: () => {
                  return `${validate_component(TopAppBarTitle, "TopAppBarTitle").$$render($$result, { style: "dispay:flex;" }, {}, {
                    default: () => {
                      return `<a style="color:white;" class="toolbar-link" href="/" data-svelte-h="svelte-1807xkg">Home</a> <a style="color:white;" class="toolbar-link" href="/about" data-svelte-h="svelte-ygk37l">About</a>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${validate_component(SetupsDrawer, "SetupsDrawer").$$render(
      $$result,
      {
        onCreateNewSetup: handleCreateSetup,
        drawerOpen
      },
      {
        drawerOpen: ($$value) => {
          drawerOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(CreateSetupDialog, "CreateSetupDialog").$$render(
      $$result,
      { createSetupDialogOpen, drawerOpen },
      {
        createSetupDialogOpen: ($$value) => {
          createSetupDialogOpen = $$value;
          $$settled = false;
        },
        drawerOpen: ($$value) => {
          drawerOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SettingsDialog, "SettingsDialog").$$render(
      $$result,
      { settingsDialogOpen },
      {
        settingsDialogOpen: ($$value) => {
          settingsDialogOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-tj3bmc{padding-top:3rem}span.svelte-tj3bmc{right:0.5rem;top:3.5rem;position:absolute}.app-content{min-height:120vh}@media(max-width: 600px){header.svelte-tj3bmc{padding-top:5rem}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(AppContent, "AppContent").$$render($$result, { class: "app-content" }, {}, {
    default: () => {
      return `<header class="svelte-tj3bmc" data-svelte-h="svelte-1mwm6g9"><h1>Multi-Monitor Calculator</h1> <h2>A Tool For Planning Your Multi-Monitor Setup!</h2></header> <span class="svelte-tj3bmc">${validate_component(DarkModeToggle, "DarkModeToggle").$$render($$result, {}, {}, {})}</span> ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
