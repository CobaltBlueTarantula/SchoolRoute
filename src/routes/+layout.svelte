<script>
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  import ThemeSwitcher from "../components/navbar/ThemeSwitcher.svelte";
  import NavbarContents from "../components/navbar/NavbarContents.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="navbar bg-base-300/80 w-full backdrop-blur-md shadow-[0_1px_1px_0_rgba(0,0,0,0.25)]">
      <div class="flex-none lg:hidden">
        <label
          for="my-drawer-3"
          aria-label="open sidebar"
          class="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="mx-2 flex-1 px-2 font-semibold text-2xl">SchoolRoute</div>
      <div class="hidden flex-none lg:block">
        <ul class="menu menu-horizontal">
          <NavbarContents />
        </ul>
      </div>
      <ThemeSwitcher />
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <NavbarContents />
    </ul>
  </div>
</div>

{@render children?.()}
