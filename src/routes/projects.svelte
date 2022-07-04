<script>
	let projects = [
		{
			title: 'Matchify',
			description: 'Matchify is a Discord music database for everyone!',
			links: [['Visit!', 'https://matchify.org/']],
			preview:
				'https://media.discordapp.net/attachments/956946033299038258/993443615101694032/unknown.png'
		},
    {
			title: 'JPATH',
			description: 'An easy to use, JSON path finder.',
			links: [['Source', 'https://github.com/TheArmagan/JPATH'],['Visit!', 'https://thearmagan.github.io/JPATH/']],
			preview:
				'https://media.discordapp.net/attachments/956946033299038258/993454919082311771/unknown.png'
		},
    {
			title: 'SVG to PNG',
			description: 'Convert any kind of svg to png with custom scaling.',
			links: [['Source', 'https://github.com/TheArmagan/svg-to-png'],['Visit!', 'https://thearmagan.github.io/svg-to-png/']],
			preview:
				'https://cdn.discordapp.com/attachments/956946033299038258/993455735474233444/unknown.png'
		},
    {
			title: 'Small Phone',
			description: 'Small phone go brr..',
			links: [['Source', 'https://github.com/TheArmagan/smallphone'],['Visit!', 'https://thearmagan.github.io/smallphone/']],
			preview:
				'https://media.discordapp.net/attachments/956946033299038258/993457961722720346/unknown.png'
		}
	];
</script>

<svelte:head>
  <title>Projects - TheArmagan's House</title>
</svelte:head>

<div class="layout">
	<h1 class="title">Projects</h1>
	<div class="projects">
		{#each projects as p}
			<div class="project">
				<div class="card">
					<div class="preview" style:--image="url('{p.preview}')" />
					<h2 class="title">{p.title}</h2>
					<p class="description">{p.description}</p>
					<div class="bottom">
						<div class="links">
							{#each p.links as link}
								<a href={link[1]} class="link">{link[0]}</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
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

		.projects {
			display: flex;
			flex-direction: row;
      flex-wrap: wrap;

			.project {
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
</style>
