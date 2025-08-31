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

<div class="drawer sticky top-0 left-0 z-9999">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="w-full h-20 absolute top-0 left-0 z-50 bg-base-100/70 backdrop-blur-xl shadow-[0_0_2px_0_rgba(0,0,0,0.35)]"></div>
    <div class="navbar w-full h-20 z-501">
      <div class="flex-none sm:hidden">
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
      <div class="hidden flex-none sm:block">
        <ul class="menu menu-horizontal">
          <NavbarContents isList={false}/>
        </ul>
      </div>
      <ThemeSwitcher />
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-70 p-4">
      <NavbarContents isList={true}/>
    </ul>
  </div>
</div>

{@render children?.()}