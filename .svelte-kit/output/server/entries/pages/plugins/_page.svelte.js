import { c as create_ssr_component, e as each, d as escape, i as add_styles, b as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-1m75ch6.svelte-1m75ch6{display:flex;flex-direction:column;width:100%}.layout.svelte-1m75ch6 .category .title.svelte-1m75ch6{margin-bottom:32px;text-decoration:underline}.layout.svelte-1m75ch6 .category .items.svelte-1m75ch6{display:flex;flex-direction:row;flex-wrap:wrap;margin-bottom:32px}.layout.svelte-1m75ch6 .category .items .item.svelte-1m75ch6{display:flex;flex-direction:row;align-items:center;margin-right:16px;margin-bottom:16px}.layout.svelte-1m75ch6 .category .items .item .card.svelte-1m75ch6{display:flex;flex-direction:column;background-color:var(--bg-tone1);box-shadow:0px 4px 16px rgba(0, 0, 0, 0.2);transition:all 100ms ease-in-out;z-index:3;width:300px;height:400px;padding:16px;border-radius:4px}.layout.svelte-1m75ch6 .category .items .item .card .title.svelte-1m75ch6{margin-top:16px;text-decoration:underline;margin-bottom:8px}.layout.svelte-1m75ch6 .category .items .item .card .preview.svelte-1m75ch6{background-image:var(--image);width:100%;min-height:175px;height:100%;background-position:center;background-size:cover;background-repeat:no-repeat;border-radius:4px}.layout.svelte-1m75ch6 .category .items .item .card .bottom.svelte-1m75ch6{display:flex;width:100%;height:100%;flex-direction:column;align-items:flex-end;justify-content:flex-end}.layout.svelte-1m75ch6 .category .items .item .card .bottom .links.svelte-1m75ch6{margin-top:16px;display:flex;align-items:center;justify-content:flex-end}.layout.svelte-1m75ch6 .category .items .item .card .bottom .links .link.svelte-1m75ch6{padding:8px 16px;background-color:var(--bg-tone1);border-radius:4px;box-shadow:0px 4px 16px rgba(0, 0, 0, 0.2);transition:all 100ms ease-in-out;user-select:none;z-index:4}.layout.svelte-1m75ch6 .category .items .item .card .bottom .links .link.svelte-1m75ch6:hover{transform:scale(1.05);box-shadow:0px 4px 16px rgba(0, 0, 0, 0.1)}.layout.svelte-1m75ch6 .category .items .item .card .bottom .links .link.svelte-1m75ch6:not(:last-child){margin-right:8px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cats = [
    {
      name: "Cumcord Plugins",
      items: [
        {
          title: "Voice Indicators",
          description: "Easily see users in voice channels on servers and DM calls. (Yes, includes DM calls too.)",
          links: [
            [
              "Install",
              "https://send.cumcord.com/#https://send.cumcord.com/#https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/voice-indicators/dist/"
            ]
          ],
          preview: "https://media.discordapp.net/attachments/956946033299038258/1021116468487782562/unknown.png",
          previewSize: "contain"
        },
        {
          title: "Client Statuses",
          description: "See from which platform users are connecting to Discord.",
          links: [
            [
              "Install",
              "https://send.cumcord.com/#https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/client-statuses/dist/"
            ]
          ],
          preview: "https://media.discordapp.net/attachments/956946033299038258/1021117872661090314/unknown.png",
          previewSize: "contain"
        },
        {
          title: "Top Voices",
          description: "See most active guilds on your Discord.",
          links: [
            [
              "Install",
              "https://send.cumcord.com/#https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/top-voices/dist/"
            ]
          ],
          preview: "https://media.discordapp.net/attachments/956946033299038258/1021120402182909982/unknown.png",
          previewSize: "contain"
        },
        {
          title: "Also Known As",
          description: "See all nicknames of a user. Using /aka command. (Includes guilds you are not in.)",
          links: [
            [
              "Install",
              "https://send.cumcord.com/#https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/also-known-as/dist/"
            ]
          ],
          preview: "https://media.discordapp.net/attachments/956946033299038258/1021120990564061236/unknown.png",
          previewSize: "contain"
        },
        {
          title: "Imagine Being Discord Mod",
          description: "Get moderators perms on any guild. (Client-Sided)",
          links: [
            [
              "Install",
              "https://send.cumcord.com/#https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/imagine-being-discord-mod/dist/"
            ]
          ],
          preview: "https://media.discordapp.net/attachments/956946033299038258/1021132585780400198/unknown.png",
          previewSize: "contain"
        },
        {
          title: "Note Indicators",
          description: "Easily see notes of users.",
          links: [
            [
              "Install",
              "https://send.cumcord.com/#https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/note-indicators/dist/"
            ]
          ],
          preview: "https://media.discordapp.net/attachments/956946033299038258/1021133812710789231/unknown.png",
          previewSize: "contain"
        },
        {
          title: "Voice State Logs",
          description: "See every voice activity in your discord guilds.",
          links: [
            [
              "Install",
              "https://send.cumcord.com/#https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/voice-state-logs/dist/"
            ]
          ],
          preview: "https://media.discordapp.net/attachments/956946033299038258/1021134460223246428/unknown.png",
          previewSize: "contain"
        },
        {
          title: "Hide Channels",
          description: "Easily hide channels or guilds.",
          links: [
            [
              "Install",
              "https://send.cumcord.com/#https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/hide-channels/dist/"
            ]
          ],
          preview: "https://media.discordapp.net/attachments/956946033299038258/1021137576289124452/unknown.png",
          previewSize: "contain"
        }
      ]
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Plugins - TheArmagan&#39;s House</title>`, ""}`, ""}

<div class="${"layout svelte-1m75ch6"}">${each(cats, (cat) => {
    return `<div class="${"category"}"><h1 class="${"title svelte-1m75ch6"}">${escape(cat.name)}</h1>
			<div class="${"items svelte-1m75ch6"}">${each(cat.items, (item) => {
      return `<div class="${"item svelte-1m75ch6"}"><div class="${"card svelte-1m75ch6"}">${item.preview ? `<div class="${"preview svelte-1m75ch6"}"${add_styles({
        "--image": `url('${item.preview}')`,
        "background-size": item.previewSize
      })}></div>` : ``}
							<h2 class="${"title svelte-1m75ch6"}">${escape(item.title)}</h2>
							<p class="${"description"}">${escape(item.description)}</p>
							<div class="${"bottom svelte-1m75ch6"}"><div class="${"links svelte-1m75ch6"}">${each(item.links, (link) => {
        return `<a${add_attribute("href", link[1], 0)} class="${"link svelte-1m75ch6"}" target="${"_blank"}">${escape(link[0])}</a>`;
      })}</div>
							</div></div>
					</div>`;
    })}</div>
		</div>`;
  })}
</div>`;
});
export {
  Page as default
};
