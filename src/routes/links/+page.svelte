<script>
	let links = [
		{
      title: "Discord",
      url: "https://discord.com/users/707309693449535599",
      icon: "ri-discord-line",
      description: "My personal Discord user (Armagan#2448)"
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
</script>

<svelte:head>
  <title>Links - TheArmagan's House</title>
</svelte:head>

<div class="layout">
	<h1 class="title">Links</h1>
	<div class="links">
		{#each links as l}
			<a href="{l.url}" class="link">
        <i class="{l.icon}"></i>
        <p>{l.title}</p>
        {#if l.description}
          <span>- {l.description}</span>
        {/if}
      </a>
		{/each}
	</div>
</div>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: column;
		width: 100%;

		& > .title {
			margin-bottom: 32px;
			text-decoration: underline;
		}

    .links {
      display: flex;
      flex-direction: column;

      .link {
        display: flex;
        margin-bottom: 8px;
        align-items: center;
        width: max-content;

        i {
          font-size: 32px;
        }

        p {
          font-size: 20px;
          padding-left: 8px;

          &:hover {
            text-decoration: underline;
          }
        }

        span {
          font-size: 14px;
          padding-left: 8px;
          color: var(--fg-tone2);
          font-style: italic;
        }
      }
    }
		
	}
</style>
