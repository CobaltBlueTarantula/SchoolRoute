<script>
  import { onMount } from "svelte";

  let defaultToLight = true;
  let isDark = false;

  function setTheme(dark) {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
    isDark = dark;
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme === "dark");
    else {
      if (defaultToLight) setTheme(false);
      {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark);
      }
    }

    const listener = (e) => setTheme(e.matches);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
    };
  });
</script>

<label class="toggle text-base-content swap-rotate ml-4 mr-2">
  <input
    type="checkbox"
    bind:checked={isDark}
    on:change={() => setTheme(isDark)}
    class="theme-controller"
  />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    ><g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      fill="none"
      stroke="currentColor"
      ><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path
        d="M12 20v2"
      ></path><path d="m4.93 4.93 1.41 1.41"></path><path
        d="m17.66 17.66 1.41 1.41"
      ></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path
        d="m6.34 17.66-1.41 1.41"
      ></path><path d="m19.07 4.93-1.41 1.41"></path></g
    ></svg
  >
  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    ><g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      fill="none"
      stroke="currentColor"
      ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g
    ></svg
  >
</label>
