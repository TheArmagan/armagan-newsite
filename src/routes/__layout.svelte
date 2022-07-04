<script>
  import { browser } from "$app/env";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import gsap from "gsap";
  
  let lightTheme = null;
  let themeLoaded = true;

  $: {
    if (browser && lightTheme != null) {
      localStorage.setItem("theme", lightTheme ? "light" : "dark");
      updateTheme();
    }
  }

  function updateTheme() {
    if (lightTheme) {
      gsap.to("#__layout", {
        "--bg-tone1": "#fafafa",
        "--bg-tone2": "#f1f3f5",
        "--fg-tone1": "#181818",
        "--fg-tone2": "#1818186a",
        duration: themeLoaded ? 0.15 : 0,
        transition: "ease"
      });
      themeLoaded = true;
    } else {
      gsap.to("#__layout", {
        "--bg-tone1": "#181818",
        "--bg-tone2": "#222222",
        "--fg-tone1": "#dedede",
        "--fg-tone2": "#dedede6a",
        duration: themeLoaded ? 0.15 : 0,
        transition: "ease"
      });
      themeLoaded = true;
    }
  }

  let sectionItems = [
    { icon: "ri-home-2-line", href: "/", title: "Home" },
    { icon: "ri-list-unordered", href: "/projects", title: "Projects"},
    { icon: "ri-share-forward-line", href: "/links", title: "Links"},
  ].map((d,i)=>({id: i, active: false, ...d}));
  page.subscribe((p)=>{
    sectionItems = sectionItems.map(i=>{
      return {...i, active: p.url.pathname.toLowerCase() == i.href }
    });
  });

  onMount(()=>{
    lightTheme = localStorage.getItem("theme") != "dark";
  })
</script>

<svelte:head>
  <title>TheArmagan's House</title>
</svelte:head>

<div class="layout" id="__layout">
	<div class="nav">
		<div class="top">
			<div class="container">
        <i class="ri-moon-fill moon"></i>
				<button
        class="theme-button"
					class:active={lightTheme}
					on:click={() => (lightTheme = !lightTheme)}
          >
					<div class="dot" />
				</button>
        <i class="ri-sun-fill sun"></i>
			</div>
		</div>
    <div class="bottom">
      <h1>TheArmagan's House</h1>
      <div class="sections-container">
        <h2>Sections:</h2>
        <div class="sections">
          {#each sectionItems as item}
            <a class="section" class:active={item.active} href="{item.href}" title="{item.title}">
              <i class={item.icon}></i>
              <p>{item.title}</p>
            </a>
          {/each}
        </div>
      </div>
    </div>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.layout {

		display: flex;

		background-color: var(--bg-tone2);

		.nav {
			display: flex;
			max-width: 600px;
			min-width: 350px;
			width: 90%;
			height: 100vh;
      flex-direction: column;

			background-color: var(--bg-tone1);
			color: var(--fg-tone1);
			box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.05);
			z-index: 2;

			padding: 32px;

			.top {
				display: flex;
				width: 100%;
        height: max-content;
        flex-direction: row;
				justify-content: center;

				.container {
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 1.25rem;
          }

					.theme-button {
						cursor: pointer;
						border: none;
						padding: 0;
						width: 3rem;
						height: 1.5rem;
						border-radius: 9999px;
						margin: 0 0.5rem;
						display: flex;
						align-items: center;
						background: var(--fg-tone1);

						&.active {
							.dot {
								margin-left: 1.75rem;
							}
						}

						.dot {
							width: 1rem;
							height: 1rem;
							border-radius: 9999px;
							background: var(--bg-tone1);
							margin: 0 0.25rem;
							transition: margin-left 100ms linear;
						}
					}
				}
			}

      .bottom {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;

        h1 {
          font-weight: 200;
          text-align: center;
          padding: 32px 0px;
        }

        .sections-container {
          padding: 0px 32px;

          h2 {
            font-weight: 400;
          }

          .sections {
            margin-top: 16px;
            margin-left: 16px;

            .section {
              display: flex;
              align-items: center;
              margin-bottom: 16px;
              width: 175px;
              transition: all 100ms ease;
              border-bottom: 2px solid var(--fg-tone2);
              padding-bottom: 2px;

              &.active {
                i {
                  padding-left: 16px;
                }
                border-bottom: 2px solid var(--fg-tone1);
              }
              
              i {
                transition: all 100ms ease;
                font-size: 24px;
              }

              p {
                transition: all 100ms ease;
                font-size: 20px;
                padding-left: 8px;
              }
            }
          }
        }
      }
		}

		.content {
			display: flex;
			width: 100%;
			height: 100vh;
			padding: 32px;
      overflow: auto;
      contain: content;

			background-color: var(--bg-tone2);
			color: var(--fg-tone1);
			z-index: 1;
		}
	}

	@media screen and (max-width: 860px) {
		.layout {
			flex-direction: column;

			.nav {
				height: max-content;
				max-width: 100vw;
				width: 100%;
			}
		}
	}
</style>
