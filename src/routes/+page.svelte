<script>
	let animateAvatar = false;
</script>

<div class="layout">
	<div class="about-me">
		<div class="left">
			<div
				class="avatar"
				on:mouseenter={() => (animateAvatar = true)}
				on:mouseleave={() => (animateAvatar = false)}
				style:background-image="url('{animateAvatar
					? 'https://media.discordapp.net/attachments/956946033299038258/993390253119381554/animated.gif'
					: 'https://media.discordapp.net/attachments/956946033299038258/993390157413748827/static.png'}')"
			/>
		</div>
		<div class="right">
			<h1>About Me</h1>
			<p>A random and <u>unique</u> guy on world wide web.</p>
		</div>
	</div>

	<p class="pad-bottom-32">Hi I'm Armagan, 18 years old self-tought programmer from Turkey. Also yes, I'am a nerd I spend an average of 16 hours a day in front of the computer.</p>

  <h2 class="pad-bottom-16">Programming</h2>

  <p class="pad-bottom-32">I am experienced with JavaScript, HTML, CSS over 5 years. Also I work with C# too.</p>

  <h2 class="pad-bottom-16">Gaming</h2>

  <p class="pad-bottom-32">I generally don't like playing games. But there is a exeption for Minecraft and BeatSaber.</p>
</div>

<svelte:head>
  <title>Home - TheArmagan's House</title>
</svelte:head>

<style lang="scss">
	.layout {
    display: flex;
    flex-direction: column;
    width: 100%;

		.about-me {
			width: 100%;
			display: flex;
      margin-bottom: 32px;

			.left {
				margin-right: 32px;
				.avatar {
					width: 150px;
					height: 150px;
					min-width: 150px;
					min-height: 150px;

					background-position: center;
					background-size: contain;
					background-repeat: no-repeat;

					transition: all 100ms ease-in-out;
					border-radius: 4px;

          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

					&:hover {
						transform: scale(1.025);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
					}
				}
			}

			.right {
				display: flex;
				flex-direction: column;
				width: 100%;
				h1 {
					font-weight: 300;
				}
				p {
					font-weight: 200;
					font-size: 18px;
					margin-top: 16px;
					font-style: italic;
				}
			}
		}

    h2 {
      font-size: 26px;
      text-decoration: underline;
    }

    p {
      max-width: 750px;
    }
    
    .pad-bottom-32 {
      padding-bottom: 32px;
    }

    .pad-bottom-16 {
      padding-bottom: 16px;
    }

	}
</style>
