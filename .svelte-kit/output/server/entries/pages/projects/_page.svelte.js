import { c as create_ssr_component, e as each, i as add_styles, d as escape, b as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-1w207u6.svelte-1w207u6{display:flex;flex-direction:column;width:100%}.layout.svelte-1w207u6>.title.svelte-1w207u6{margin-bottom:32px;text-decoration:underline}.layout.svelte-1w207u6 .projects.svelte-1w207u6{display:flex;flex-direction:row;flex-wrap:wrap}.layout.svelte-1w207u6 .projects .project.svelte-1w207u6{display:flex;flex-direction:row;align-items:center;margin-right:16px;margin-bottom:16px}.layout.svelte-1w207u6 .projects .project .card.svelte-1w207u6{display:flex;flex-direction:column;background-color:var(--bg-tone1);box-shadow:0px 4px 16px rgba(0, 0, 0, 0.2);transition:all 100ms ease-in-out;z-index:3;width:300px;height:400px;padding:16px;border-radius:4px}.layout.svelte-1w207u6 .projects .project .card .title.svelte-1w207u6{margin-top:16px;text-decoration:underline;margin-bottom:8px}.layout.svelte-1w207u6 .projects .project .card .preview.svelte-1w207u6{background-image:var(--image);width:100%;min-height:175px;height:100%;background-position:center;background-size:cover;border-radius:4px}.layout.svelte-1w207u6 .projects .project .card .bottom.svelte-1w207u6{display:flex;width:100%;height:100%;flex-direction:column;align-items:flex-end;justify-content:flex-end}.layout.svelte-1w207u6 .projects .project .card .bottom .links.svelte-1w207u6{margin-top:16px;display:flex;align-items:center;justify-content:flex-end}.layout.svelte-1w207u6 .projects .project .card .bottom .links .link.svelte-1w207u6{padding:8px 16px;background-color:var(--bg-tone1);border-radius:4px;box-shadow:0px 4px 16px rgba(0, 0, 0, 0.2);transition:all 100ms ease-in-out;user-select:none;z-index:4}.layout.svelte-1w207u6 .projects .project .card .bottom .links .link.svelte-1w207u6:hover{transform:scale(1.05);box-shadow:0px 4px 16px rgba(0, 0, 0, 0.1)}.layout.svelte-1w207u6 .projects .project .card .bottom .links .link.svelte-1w207u6:not(:last-child){margin-right:8px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projects = [
    {
      title: "Matchify",
      description: "Matchify is a Discord music database for everyone!",
      links: [["Visit!", "https://matchify.org/"]],
      preview: "https://media.discordapp.net/attachments/956946033299038258/993443615101694032/unknown.png"
    },
    {
      title: "JPATH",
      description: "An easy to use, JSON path finder.",
      links: [
        ["Source", "https://github.com/TheArmagan/JPATH"],
        ["Visit!", "https://thearmagan.github.io/JPATH/"]
      ],
      preview: "https://media.discordapp.net/attachments/956946033299038258/993454919082311771/unknown.png"
    },
    {
      title: "SVG to PNG",
      description: "Convert any kind of svg to png with custom scaling.",
      links: [
        ["Source", "https://github.com/TheArmagan/svg-to-png"],
        ["Visit!", "https://thearmagan.github.io/svg-to-png/"]
      ],
      preview: "https://cdn.discordapp.com/attachments/956946033299038258/993455735474233444/unknown.png"
    },
    {
      title: "Small Phone",
      description: "Small phone go brr..",
      links: [
        ["Source", "https://github.com/TheArmagan/smallphone"],
        ["Visit!", "https://thearmagan.github.io/smallphone/"]
      ],
      preview: "https://media.discordapp.net/attachments/956946033299038258/993457961722720346/unknown.png"
    },
    {
      title: "EasyDL",
      description: "Basically download anything..",
      links: [["Visit!", "https://armagan-easydl.herokuapp.com/"]],
      preview: "https://media.discordapp.net/attachments/956946033299038258/993764794119241808/unknown.png"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Projects - TheArmagan&#39;s House</title>`, ""}`, ""}

<div class="${"layout svelte-1w207u6"}"><h1 class="${"title svelte-1w207u6"}">Projects</h1>
	<div class="${"projects svelte-1w207u6"}">${each(projects, (p) => {
    return `<div class="${"project svelte-1w207u6"}"><div class="${"card svelte-1w207u6"}"><div class="${"preview svelte-1w207u6"}"${add_styles({ "--image": `url('${p.preview}')` })}></div>
					<h2 class="${"title svelte-1w207u6"}">${escape(p.title)}</h2>
					<p class="${"description"}">${escape(p.description)}</p>
					<div class="${"bottom svelte-1w207u6"}"><div class="${"links svelte-1w207u6"}">${each(p.links, (link) => {
      return `<a${add_attribute("href", link[1], 0)} class="${"link svelte-1w207u6"}" target="${"_blank"}">${escape(link[0])}</a>`;
    })}</div>
					</div></div>
			</div>`;
  })}</div>
</div>`;
});
export {
  Page as default
};
