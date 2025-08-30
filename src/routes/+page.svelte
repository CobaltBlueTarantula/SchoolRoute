<script>
  import "../app.css";

  import mapImage from "$lib/assets/map.png";
  import mapPinImage from "$lib/assets/ts-map-pin.svg";

  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  let quoteSection;
  let descriptionSection;
  let mapSection;

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

    gsap.to(descriptionSection, {
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: descriptionSection,
        start: "center center",
        end: "+=500",
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
      scale: 2, // animate to visible size
      ease: "back.out(1.7)",
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
    <p class="text-lg sm:text-md md:text-xl w-full">
      Meet <span class="font-bold">SchoolRoute</span>, a web application
      designed to provide students and parents with essential information needed
      to help them decide which route is the best to take.
    </p>
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
        class="w-full h-auto object-contain"
        style="transform: rotateX(30deg) rotateY(-20deg) rotateZ(0deg) scale(1.4); transform-origin: center center; filter: drop-shadow(-10px 30px 10px rgba(0,0,0,0.5));"
      />

      <!-- Pins -->
      <img
        bind:this={mapPinOne}
        src={mapPinImage}
        alt="Pin 1"
        class="absolute w-8 h-8 top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2"
      />
      <img
        bind:this={mapPinTwo}
        src={mapPinImage}
        alt="Pin 2"
        class="absolute w-8 h-8 top-[40%] left-[80%] transform -translate-x-1/2 -translate-y-1/2"
      />
      <img
        bind:this={mapPinThree}
        src={mapPinImage}
        alt="Pin 3"
        class="absolute w-8 h-8 top-[70%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </div>
</div>
