<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  export let isList = false;

  const tabs = [
    { name: "Home", href: `${base}/` },
    { name: "Schools", href: `${base}/schools` },
    { name: "Transport", href: `${base}/transport` },
  ];
</script>

{#if isList}
  <ul class="menu menu-md bg-base-100 w-56 p-2 rounded-box mt-22">
    {#each tabs as tab}
      <li class:active={$page.url.pathname === tab.href}>
        <a href={tab.href}>{tab.name}</a>
      </li>
    {/each}
  </ul>
{:else}
  <div role="tablist" class="tabs tabs-box">
    {#each tabs as tab}
      <a
        role="tab"
        href={tab.href}
        class="tab"
        class:tab-active={tab.href === "/"
          ? $page.url.pathname === "/"
          : $page.url.pathname.startsWith(tab.href)}
      >
        {tab.name}
      </a>
    {/each}
  </div>
{/if}
