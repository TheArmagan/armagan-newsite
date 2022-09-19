import { c as create_ssr_component, i as add_styles } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-1xnt8ue.svelte-1xnt8ue{display:flex;flex-direction:column;width:100%}.layout.svelte-1xnt8ue .about-me.svelte-1xnt8ue{width:100%;display:flex;margin-bottom:32px}.layout.svelte-1xnt8ue .about-me .left.svelte-1xnt8ue{margin-right:32px}.layout.svelte-1xnt8ue .about-me .left .avatar.svelte-1xnt8ue{width:150px;height:150px;min-width:150px;min-height:150px;background-position:center;background-size:contain;background-repeat:no-repeat;transition:all 100ms ease-in-out;border-radius:4px;box-shadow:0px 4px 16px rgba(0, 0, 0, 0.1)}.layout.svelte-1xnt8ue .about-me .left .avatar.svelte-1xnt8ue:hover{transform:scale(1.025);box-shadow:0px 8px 16px rgba(0, 0, 0, 0.05)}.layout.svelte-1xnt8ue .about-me .right.svelte-1xnt8ue{display:flex;flex-direction:column;width:100%}.layout.svelte-1xnt8ue .about-me .right h1.svelte-1xnt8ue{font-weight:300}.layout.svelte-1xnt8ue .about-me .right p.svelte-1xnt8ue{font-weight:200;font-size:18px;margin-top:16px;font-style:italic}.layout.svelte-1xnt8ue h2.svelte-1xnt8ue{font-size:26px;text-decoration:underline}.layout.svelte-1xnt8ue p.svelte-1xnt8ue{max-width:750px}.layout.svelte-1xnt8ue .pad-bottom-32.svelte-1xnt8ue{padding-bottom:32px}.layout.svelte-1xnt8ue .pad-bottom-16.svelte-1xnt8ue{padding-bottom:16px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"layout svelte-1xnt8ue"}"><div class="${"about-me svelte-1xnt8ue"}"><div class="${"left svelte-1xnt8ue"}"><div class="${"avatar svelte-1xnt8ue"}"${add_styles({
    "background-image": `url('${"https://media.discordapp.net/attachments/956946033299038258/993390157413748827/static.png"}')`
  })}></div></div>
		<div class="${"right svelte-1xnt8ue"}"><h1 class="${"svelte-1xnt8ue"}">About Me</h1>
			<p class="${"svelte-1xnt8ue"}">A random and <u>unique</u> guy on world wide web.</p></div></div>

	<p class="${"pad-bottom-32 svelte-1xnt8ue"}">Hi I&#39;m Armagan, 18 years old self-tought programmer from Turkey. Also yes, I&#39;am a nerd I spend an average of 16 hours a day in front of the computer.</p>

  <h2 class="${"pad-bottom-16 svelte-1xnt8ue"}">Programming</h2>

  <p class="${"pad-bottom-32 svelte-1xnt8ue"}">I am experienced with JavaScript, HTML, CSS over 5 years. Also I work with C# too.</p>

  <h2 class="${"pad-bottom-16 svelte-1xnt8ue"}">Gaming</h2>

  <p class="${"pad-bottom-32 svelte-1xnt8ue"}">I generally don&#39;t like playing games. But there is a exeption for Minecraft and BeatSaber.</p></div>

${$$result.head += `${$$result.title = `<title>Home - TheArmagan&#39;s House</title>`, ""}`, ""}`;
});
export {
  Page as default
};
