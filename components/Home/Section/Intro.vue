<template>
  <section id="intro">
    <div class="intro-container">
      <div
        id="introCarousel"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">
          <HomeCarousel title="We are professional" image="1.jpg">
            <template #content>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt unde corporis eaque praesentium quisquam fuga
                voluptatibus, recusandae ea labore obcaecati nihil at qui sequi
                dignissimos ad culpa nulla exercitationem magnam!
              </p>
            </template>
          </HomeCarousel>
        </div>

        <a
          class="carousel-control-prev"
          href="#introCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon ion-chevron-left"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>

        <a
          class="carousel-control-next"
          href="#introCarousel"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon ion-chevron-right"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("~/assets/css/home/index.css");
</style>