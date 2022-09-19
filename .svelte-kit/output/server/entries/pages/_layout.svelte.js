import { c as create_ssr_component, e as each, b as add_attribute, d as escape, f as null_to_empty } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-1xg2z9m.svelte-1xg2z9m{display:flex;background-color:var(--bg-tone2)}.layout.svelte-1xg2z9m .nav.svelte-1xg2z9m{display:flex;max-width:600px;min-width:350px;width:90%;height:100vh;flex-direction:column;background-color:var(--bg-tone1);color:var(--fg-tone1);box-shadow:0px 0px 16px rgba(0, 0, 0, 0.05);z-index:2;padding:32px}.layout.svelte-1xg2z9m .nav .top.svelte-1xg2z9m{display:flex;width:100%;height:max-content;flex-direction:row;justify-content:center}.layout.svelte-1xg2z9m .nav .top .container.svelte-1xg2z9m{display:flex;align-items:center;justify-content:center}.layout.svelte-1xg2z9m .nav .top .container i.svelte-1xg2z9m{font-size:1.25rem}.layout.svelte-1xg2z9m .nav .top .container .theme-button.svelte-1xg2z9m{cursor:pointer;border:none;padding:0;width:3rem;height:1.5rem;border-radius:9999px;margin:0 0.5rem;display:flex;align-items:center;background:var(--fg-tone1)}.layout.svelte-1xg2z9m .nav .top .container .theme-button.active .dot.svelte-1xg2z9m{margin-left:1.75rem}.layout.svelte-1xg2z9m .nav .top .container .theme-button .dot.svelte-1xg2z9m{width:1rem;height:1rem;border-radius:9999px;background:var(--bg-tone1);margin:0 0.25rem;transition:margin-left 100ms linear}.layout.svelte-1xg2z9m .nav .bottom.svelte-1xg2z9m{display:flex;width:100%;height:100%;flex-direction:column}.layout.svelte-1xg2z9m .nav .bottom h1.svelte-1xg2z9m{font-weight:200;text-align:center;padding:32px 0px}.layout.svelte-1xg2z9m .nav .bottom .sections-container.svelte-1xg2z9m{padding:0px 32px}.layout.svelte-1xg2z9m .nav .bottom .sections-container h2.svelte-1xg2z9m{font-weight:400}.layout.svelte-1xg2z9m .nav .bottom .sections-container .sections.svelte-1xg2z9m{margin-top:16px;margin-left:16px}.layout.svelte-1xg2z9m .nav .bottom .sections-container .sections .section.svelte-1xg2z9m{display:flex;align-items:center;margin-bottom:16px;width:175px;transition:all 100ms ease;border-bottom:2px solid var(--fg-tone2);padding-bottom:2px}.layout.svelte-1xg2z9m .nav .bottom .sections-container .sections .section.active.svelte-1xg2z9m{border-bottom:2px solid var(--fg-tone1)}.layout.svelte-1xg2z9m .nav .bottom .sections-container .sections .section.active i.svelte-1xg2z9m{padding-left:16px}.layout.svelte-1xg2z9m .nav .bottom .sections-container .sections .section i.svelte-1xg2z9m{transition:all 100ms ease;font-size:24px}.layout.svelte-1xg2z9m .nav .bottom .sections-container .sections .section p.svelte-1xg2z9m{transition:all 100ms ease;font-size:20px;padding-left:8px}.layout.svelte-1xg2z9m .content.svelte-1xg2z9m{display:flex;width:100%;height:100vh;padding:32px;overflow:auto;contain:content;background-color:var(--bg-tone2);color:var(--fg-tone1);z-index:1}@media screen and (max-width: 860px){.layout.svelte-1xg2z9m.svelte-1xg2z9m{flex-direction:column}.layout.svelte-1xg2z9m .nav.svelte-1xg2z9m{height:max-content;max-width:100vw;width:100%}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sectionItems = [
    {
      icon: "ri-home-2-line",
      href: "/",
      title: "Home"
    },
    {
      icon: "ri-list-unordered",
      href: "/projects",
      title: "Projects"
    },
    {
      icon: "ri-bar-chart-line",
      href: "/plugins",
      title: "Plugins"
    },
    {
      icon: "ri-share-forward-line",
      href: "/links",
      title: "Links"
    }
  ].map((d, i) => ({ id: i, active: false, ...d }));
  page.subscribe((p) => {
    sectionItems = sectionItems.map((i) => {
      return {
        ...i,
        active: p.url.pathname.toLowerCase() == i.href
      };
    });
  });
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>TheArmagan&#39;s House</title>`, ""}`, ""}

<div class="${"layout svelte-1xg2z9m"}" id="${"__layout"}"><div class="${"nav svelte-1xg2z9m"}"><div class="${"top svelte-1xg2z9m"}"><div class="${"container svelte-1xg2z9m"}"><i class="${"ri-moon-fill moon svelte-1xg2z9m"}"></i>
				<button class="${["theme-button svelte-1xg2z9m", ""].join(" ").trim()}"><div class="${"dot svelte-1xg2z9m"}"></div></button>
        <i class="${"ri-sun-fill sun svelte-1xg2z9m"}"></i></div></div>
    <div class="${"bottom svelte-1xg2z9m"}"><h1 class="${"svelte-1xg2z9m"}">TheArmagan&#39;s House</h1>
      <div class="${"sections-container svelte-1xg2z9m"}"><h2 class="${"svelte-1xg2z9m"}">Sections:</h2>
        <div class="${"sections svelte-1xg2z9m"}">${each(sectionItems, (item) => {
    return `<a class="${["section svelte-1xg2z9m", item.active ? "active" : ""].join(" ").trim()}"${add_attribute("href", item.href, 0)}${add_attribute("title", item.title, 0)}><i class="${escape(null_to_empty(item.icon), true) + " svelte-1xg2z9m"}"></i>
              <p class="${"svelte-1xg2z9m"}">${escape(item.title)}</p>
            </a>`;
  })}</div></div></div></div>
	<div class="${"content svelte-1xg2z9m"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Layout as default
};
