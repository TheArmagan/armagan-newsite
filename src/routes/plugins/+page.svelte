<script>
	import { installPlugin } from "$lib/cumcordConnection";


	let cats = [
		{
			name: 'Cumcord Plugins',
			items: [
				{
					title: 'Voice Indicators',
					description: 'Easily see users in voice channels on servers and DM calls. (Yes, includes DM calls too.)',
					links: [['Install', ()=>{ installPlugin("https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/voice-indicators/dist/"); }]],
          preview: 'https://media.discordapp.net/attachments/956946033299038258/1021116468487782562/unknown.png',
          previewSize: "contain"
				},
				{
					title: 'Client Statuses',
					description: 'See from which platform users are connecting to Discord.',
					links: [
						['Install', ()=>{ installPlugin("https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/client-statuses/dist"); }]
					],
					preview:
						'https://media.discordapp.net/attachments/956946033299038258/1021117872661090314/unknown.png',
          previewSize: "contain"
				},
				{
					title: 'Top Voices',
					description: 'See most active guilds on your Discord.',
					links: [
						['Install', ()=>{ installPlugin("https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/top-voices/dist"); }]
					],
					preview:
						'https://media.discordapp.net/attachments/956946033299038258/1021120402182909982/unknown.png',
          previewSize: "contain"
				},
        {
					title: 'Also Known As',
					description: 'See all nicknames of a user. Using /aka command. (Includes guilds you are not in.)',
					links: [
						['Install', ()=>{ installPlugin("https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/also-known-as/dist"); }]
					],
					preview:
						'https://media.discordapp.net/attachments/956946033299038258/1021120990564061236/unknown.png',
          previewSize: "contain"
				},
        {
					title: 'Imagine Being Discord Mod',
					description: 'Get moderators perms on any guild. (Client-Sided)',
					links: [
						['Install', ()=>{ installPlugin("https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/imagine-being-discord-mod/dist"); }]
					],
					preview:
						'https://media.discordapp.net/attachments/956946033299038258/1021132585780400198/unknown.png',
          previewSize: "contain"
				},
        {
					title: 'Note Indicators',
					description: 'Easily see notes of users.',
					links: [
						['Install', ()=>{ installPlugin("https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/note-indicators/dist"); }]
					],
					preview:
						'https://media.discordapp.net/attachments/956946033299038258/1021133812710789231/unknown.png',
          previewSize: "contain"
				},
        {
					title: 'Voice State Logs',
					description: 'See every voice activity in your discord guilds.',
					links: [
						['Install', ()=>{ installPlugin("https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/voice-state-logs/dist"); }]
					],
					preview:
						'https://media.discordapp.net/attachments/956946033299038258/1021134460223246428/unknown.png',
          previewSize: "contain"
				},
        {
					title: 'Hide Channels',
					description: 'Easily hide channels or categories.',
					links: [
						['Install', ()=>{ installPlugin("https://raw.githubusercontent.com/TheArmagan/cumcord-plugins/main/hide-channels/dist"); }]
					],
					preview:
						'https://media.discordapp.net/attachments/956946033299038258/1021137576289124452/unknown.png',
          previewSize: "contain"
				},
			]
		},
	];
</script>

<svelte:head>
	<title>Plugins - TheArmagan's House</title>
</svelte:head>

<div class="layout">
	{#each cats as cat}
		<div class="category">
			<h1 class="title">{cat.name}</h1>
			<div class="items">
				{#each cat.items as item}
					<div class="item">
						<div class="card">
              {#if item.preview}
							  <div class="preview" style:--image="url('{item.preview}')" style:background-size="{item.previewSize}"/> 
              {/if}
							<h2 class="title">{item.title}</h2>
							<p class="description">{item.description}</p>
							<div class="bottom">
								<div class="links">
									{#each item.links as link}
										<a href={typeof link[1] == "string" ? link[1] : "#"} class="link" target="{typeof link[1] == "string" ? "_blank" : ""}" on:click="{typeof link[1] == "function" ? link[1] : ()=>{}}">{link[0]}</a>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: column;
		width: 100%;

		.category {
			.title {
				margin-bottom: 32px;
				text-decoration: underline;
			}

			.items {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
        margin-bottom: 32px;

				.item {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-right: 16px;
					margin-bottom: 16px;

					.card {
						display: flex;
						flex-direction: column;
						background-color: var(--bg-tone1);
						box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
						transition: all 100ms ease-in-out;
						z-index: 3;
						width: 300px;
						height: 400px;
						padding: 16px;
						border-radius: 4px;

						.title {
							margin-top: 16px;
							text-decoration: underline;
							margin-bottom: 8px;
						}

						.preview {
							background-image: var(--image);

							width: 100%;
							min-height: 175px;
							height: 100%;
							background-position: center;
							background-size: cover;
              background-repeat: no-repeat;

							border-radius: 4px;
						}

						.bottom {
							display: flex;
							width: 100%;
							height: 100%;
							flex-direction: column;
							align-items: flex-end;
							justify-content: flex-end;

							.links {
								margin-top: 16px;
								display: flex;
								align-items: center;
								justify-content: flex-end;

								.link {
									padding: 8px 16px;
									background-color: var(--bg-tone1);
									border-radius: 4px;
									box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
									transition: all 100ms ease-in-out;
									user-select: none;

									z-index: 4;

									&:hover {
										transform: scale(1.05);
										box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
									}

									&:not(:last-child) {
										margin-right: 8px;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
