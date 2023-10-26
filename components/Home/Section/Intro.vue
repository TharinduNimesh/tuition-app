<template>
  <section id="intro">
    <div class="intro-container">
      <div id="introCarousel" class="carousel slide carousel-fade" data-ride="carousel">
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

        <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
          <Icon class="icon" name="quill:inline-left" />
        </a>

        <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
          <Icon class="icon" name="quill:inline-right" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("~/assets/css/home/index.css");

.icon {
  font-size: 4rem;
}
</style>