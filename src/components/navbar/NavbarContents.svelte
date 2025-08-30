<script>
  import { page } from '$app/stores';

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Transport', href: '/transport' },
    { name: 'Dropoff', href: '/dropoff' }
  ];
</script>

<div role="tablist" class="tabs tabs-box">
  {#each tabs as tab}
    <a
      role="tab"
      href={tab.href}
      class="tab"
      class:tab-active={$page.url.pathname === tab.href}
    >
      {tab.name}
    </a>
  {/each}
</div>