import { c as create_ssr_component, e as each, b as add_attribute, d as escape, f as null_to_empty } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-13bwkk9.svelte-13bwkk9{display:flex;flex-direction:column;width:100%}.layout.svelte-13bwkk9>.title.svelte-13bwkk9{margin-bottom:32px;text-decoration:underline}.layout.svelte-13bwkk9 .links.svelte-13bwkk9{display:flex;flex-direction:column}.layout.svelte-13bwkk9 .links .link.svelte-13bwkk9{display:flex;margin-bottom:8px;align-items:center;width:max-content}.layout.svelte-13bwkk9 .links .link i.svelte-13bwkk9{font-size:32px}.layout.svelte-13bwkk9 .links .link p.svelte-13bwkk9{font-size:20px;padding-left:8px}.layout.svelte-13bwkk9 .links .link p.svelte-13bwkk9:hover{text-decoration:underline}.layout.svelte-13bwkk9 .links .link span.svelte-13bwkk9{font-size:14px;padding-left:8px;color:var(--fg-tone2);font-style:italic}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = [
    {
      title: "Discord",
      url: "https://discord.com/users/707309693449535599",
      icon: "ri-discord-line",
      description: "My personal Discord user (Armagan#4869)"
    },
    {
      title: "Instagram",
      url: "https://instagram.com/armaganboi",
      icon: "ri-instagram-line",
      description: "My personal Instagram account"
    },
    {
      title: "Github",
      url: "https://github.com/TheArmagan",
      icon: "ri-github-line",
      description: "My personal Github account"
    },
    {
      title: "Youtube",
      url: "https://www.youtube.com/channel/UCJXcISKEpmVnS7G6Nx0CMDA",
      icon: "ri-youtube-line",
      description: "My personal Youtube account"
    },
    {
      title: "Twitch",
      url: "https://www.twitch.tv/thearmagan_",
      icon: "ri-twitch-line",
      description: "My personal Twitch account"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Links - TheArmagan&#39;s House</title>`, ""}`, ""}

<div class="${"layout svelte-13bwkk9"}"><h1 class="${"title svelte-13bwkk9"}">Links</h1>
	<div class="${"links svelte-13bwkk9"}">${each(links, (l) => {
    return `<a${add_attribute("href", l.url, 0)} class="${"link svelte-13bwkk9"}"><i class="${escape(null_to_empty(l.icon), true) + " svelte-13bwkk9"}"></i>
        <p class="${"svelte-13bwkk9"}">${escape(l.title)}</p>
        ${l.description ? `<span class="${"svelte-13bwkk9"}">- ${escape(l.description)}</span>` : ``}
      </a>`;
  })}</div>
</div>`;
});
export {
  Page as default
};
