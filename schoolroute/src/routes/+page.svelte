<script>
  import "../app.css";

  import mapImage from "$lib/assets/map.png";
  import mapPinImage from "$lib/assets/marker-icon.png";

  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let quoteSection;
  let descriptionSection;
  let mapSection;
  let progressBar;
  let progressBar2;

  let mapPinOne;
  let mapPinTwo;
  let mapPinThree;

  onMount(() => {
    gsap.to(quoteSection, {
      rotationX: 240,
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: quoteSection,
        start: "top middle-=100",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(descriptionSection, {
      opacity: 1,
      scale: 1.5,
      scrollTrigger: {
        trigger: descriptionSection,
        start: "center bottom",
        end: "center center",
        scrub: true,
      },
    });

    gsap.to([progressBar, progressBar2], {
      attr: { value: 100 }, // fill to 100%
      ease: "none",
      scrollTrigger: {
        trigger: descriptionSection,
        start: "top bottom", // when description enters viewport
        end: "bottom top", // until it leaves viewport
        scrub: true, // tie animation to scroll
      },
    });

    gsap.to(descriptionSection, {
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: descriptionSection,
        start: "center center",
        end: "+=400",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap.to(mapSection, {
      opacity: 1,
      scrollTrigger: {
        trigger: mapSection,
        start: "center center",
        end: "+=400",
        scrub: true,
      },
    });

    gsap.to(mapSection, {
      scrollTrigger: {
        trigger: mapSection,
        start: "center center",
        end: "+=1200",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    // Set initial scale
    gsap.set([mapPinOne, mapPinTwo, mapPinThree], { scale: 0 });
    // Animate pins
    gsap.to([mapPinOne, mapPinTwo, mapPinThree], {
      scale: 2.5, // animate to visible size
      ease: "back.out(1)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: mapSection,
        start: "top center-=80",
        end: "+=500",
        scrub: true,
      },
    });
  });
</script>

<div class="w-full overflow-hidden">
  <!-- starting quote -->
  <div
    bind:this={quoteSection}
    class="relative flex items-center justify-center h-screen px-4"
  >
    <div class="card w-full max-w-6xl relative z-10 -mt-15">
      <div class="card-body text-center">
        <p class="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content">
          “How can we leverage
          <span class="text-accent">graph analytics</span>,
          <span class="text-accent">generative AI</span>
          and <span class="text-accent">other data approaches</span>
          to optimise public school transport networks?”
        </p>
      </div>
    </div>

    <!-- soft glow -->
    <div class="absolute inset-0 flex justify-center items-center -mt-11">
      <div
        class="w-full max-w-7xl h-50 bg-accent/10 rounded-[50%] blur-xl"
      ></div>
    </div>
  </div>

  <!-- description below -->
  <div
    bind:this={descriptionSection}
    class="px-4 max-w-2xl mx-auto text-center opacity-0"
  >
    <progress
      class="progress progress-accent w-full mb-5"
      value="0"
      max="100"
      bind:this={progressBar}
    ></progress>
    <p class="text-lg sm:text-md md:text-xl w-full">
      Meet <span class="font-bold">SchoolRoute</span>, a web application
      designed to provide students and parents with essential information needed
      to help them decide which route is the best to take.
    </p>
    <progress
      class="progress progress-accent w-full mt-5 scale-x-[-1]"
      value="0"
      max="100"
      bind:this={progressBar2}
    ></progress>
  </div>

  <div
    bind:this={mapSection}
    class="px-4 max-w-full mx-auto text-center opacity-0 flex flex-row items-center"
  >
    <p class="text-lg sm:text-xl md:text-2xl w-full ml-20">
      Simple map stuff blah blah etc
    </p>

    <div
      class="w-[50%] opacity-100 ml-10 mr-40 perspective-[1000px] relative flex justify-center items-center"
    >
      <img
        src={mapImage}
        alt="Map"
        class="w-full h-auto object-contain border-1 border-accent"
        style="transform: rotateX(30deg) rotateY(-20deg) rotateZ(0deg) scale(1.4); transform-origin: center center; filter: drop-shadow(-10px 30px 10px rgba(0,0,0,0.5));"
      />

      <!-- Pins -->
      <img
        bind:this={mapPinOne}
        src={mapPinImage}
        alt="Pin 1"
        class="absolute w-8 h-auto top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 drop-shadow-filter"
      />
      <img
        bind:this={mapPinTwo}
        src={mapPinImage}
        alt="Pin 2"
        class="absolute w-8 h-auto top-[40%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 drop-shadow-filter"
      />
      <img
        bind:this={mapPinThree}
        src={mapPinImage}
        alt="Pin 3"
        class="absolute w-8 h-auto top-[70%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 drop-shadow-filter"
      />
    </div>
  </div>

  <div class="h-80"></div>

  <div class="w-full h-25 flex justify-center mb-20">
    <button class="btn btn-xl mt-5.5"><a href="/transport">Take me to the Transport Planner</a></button>
  </div>

  <footer
    class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"
  >
    <aside>
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        class="fill-current"
      >
        <path
          d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
        ></path>
      </svg>
      <p>
        SchoolRoute Team
        <br />
        GovHack 2025
      </p>
    </aside>
    <nav>
      <h6 class="footer-title">Social</h6>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <!-- svelte-ignore a11y_missing_attribute -->
      <div class="grid grid-flow-col gap-4">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <!-- svelte-ignore a11y_missing_attribute -->
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            ></path>
          </svg>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <!-- svelte-ignore a11y_consider_explicit_label -->
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            ></path>
          </svg>
        </a>
      </div>
    </nav>
  </footer>
</div>

<style>
  .drop-shadow-filter {
    filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.6));
  }
</style>
