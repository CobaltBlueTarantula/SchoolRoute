<script>
  import "../app.css";
</script>

<!-- starting quote -->
<div class="relative flex items-center justify-center h-screen px-4">
  <div class="card w-full max-w-6xl relative z-10">
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
  <div class="absolute inset-0 flex justify-center items-center">
    <div class="w-full max-w-6xl h-50 bg-accent/10 rounded-[20px] blur-xl"></div>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-16 mb-60 items-center">
    <!-- short description -->
  <div class="flex justify-start">
    <div class="card w-full max-w-xl bg-base-100">
      <div class="card-body">
        <p class="text-lg sm:text-xl md:text-2xl leading-relaxed">
          Meet <span class="font-bold text-primary">SchoolRoute</span>, 
          a <span class="text-accent">web application</span> designed to provide 
          <span class="text-accent font-medium">students</span> and 
          <span class="text-accent font-medium">parents</span> with essential information 
          needed to help them decide which <span class="font-bold text-primary">route</span> is 
          the best to take.
        </p>
      </div>
    </div>
  </div>

  <!-- image -->
  <div class="flex justify-center">
    <div class="card w-full max-w-xl">
      <div class="card-body text-center">
        <img
          src="https://cdn.creazilla.com/cliparts/3169216/map-clipart-md.png"
          alt="map"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>


<style>
  .mask-image-gradient {
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 70%,
      rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 70%,
      rgba(0, 0, 0, 0) 100%
    );
    mask-repeat: no-repeat;
    mask-size: cover;
  }
</style>
