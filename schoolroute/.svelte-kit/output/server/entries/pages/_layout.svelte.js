import { D as attr, B as pop, z as push, E as getContext, F as ensure_array_like, G as attr_class, I as escape_html, J as store_get, K as unsubscribe_stores, M as bind_props, N as fallback, O as head } from "../../chunks/index2.js";
/* empty css               */
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "clsx";
import "../../chunks/state.svelte.js";
import { b as base } from "../../chunks/paths.js";
const favicon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
function ThemeSwitcher($$payload, $$props) {
  push();
  let isDark = false;
  $$payload.out.push(`<label class="toggle text-base-content swap-rotate ml-10 mr-10"><input type="checkbox"${attr("checked", isDark, true)} class="theme-controller"/> <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg> <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg></label>`);
  pop();
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function NavbarContents($$payload, $$props) {
  push();
  var $$store_subs;
  let isList = fallback($$props["isList"], false);
  const tabs = [
    { name: "Home", href: `${base}/` },
    { name: "Schools", href: `${base}/schools` },
    { name: "Transport", href: `${base}/transport` }
  ];
  if (isList) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(tabs);
    $$payload.out.push(`<ul class="menu menu-md bg-base-100 w-56 p-2 rounded-box mt-22"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tab = each_array[$$index];
      $$payload.out.push(`<li${attr_class("", void 0, {
        "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === tab.href
      })}><a${attr("href", tab.href)}>${escape_html(tab.name)}</a></li>`);
    }
    $$payload.out.push(`<!--]--></ul>`);
  } else {
    $$payload.out.push("<!--[!-->");
    const each_array_1 = ensure_array_like(tabs);
    $$payload.out.push(`<div role="tablist" class="tabs tabs-box"><!--[-->`);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tab = each_array_1[$$index_1];
      $$payload.out.push(`<a role="tab"${attr("href", tab.href)}${attr_class("tab", void 0, {
        "tab-active": store_get($$store_subs ??= {}, "$page", page).url.pathname === tab.href
      })}>${escape_html(tab.name)}</a>`);
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { isList });
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="icon"${attr("href", favicon)}/>`);
  });
  $$payload.out.push(`<div class="drawer sticky top-0 left-0 z-9999"><input id="my-drawer-3" type="checkbox" class="drawer-toggle"/> <div class="drawer-content flex flex-col"><div class="w-full h-20 absolute top-0 left-0 z-50 bg-base-100/70 backdrop-blur-xl shadow-[0_0_2px_0_rgba(0,0,0,0.35)]"></div> <div class="navbar w-full h-20 z-501"><div class="flex-none sm:hidden"><label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="mx-2 flex-1 px-2 font-semibold text-2xl">SchoolRoute</div> <div class="hidden flex-none sm:block"><ul class="menu menu-horizontal">`);
  NavbarContents($$payload, { isList: false });
  $$payload.out.push(`<!----></ul></div> `);
  ThemeSwitcher($$payload);
  $$payload.out.push(`<!----></div></div> <div class="drawer-side"><label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu bg-base-200 min-h-full w-70 p-4">`);
  NavbarContents($$payload, { isList: true });
  $$payload.out.push(`<!----></ul></div></div> `);
  children?.($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _layout as default
};
