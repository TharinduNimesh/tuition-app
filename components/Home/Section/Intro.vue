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
          <HomeCarousel
            v-for="(content, index) in contents"
            v-show="activePage === index"
            :key="content.title"
            :title="content.title"
            :image="content.image"
          >
            <template #content>
              <p>
                {{ content.content }}
              </p>
            </template>
          </HomeCarousel>
        </div>

        <button
          class="carousel-control-prev"
          role="button"
          data-slide="prev"
          @click="prev"
        >
          <Icon class="icon" name="quill:inline-left" />
        </button>

        <button
          class="carousel-control-next"
          role="button"
          data-slide="next"
          @click="next"
        >
          <Icon class="icon" name="quill:inline-right" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
const contents = [
  {
    title: "Simplify Success with GuruGo!",
    image: "1.jpg",
    content:
      "GuruGo Tuition Management System streamlines administrative tasks, empowers teachers, and boosts student success in individual and institutional settings.",
  },
  {
    title: "Empower Educators, Elevate Excellence!",
    image: "2.jpg",
    content:
      "Elevate educational excellence with GuruGo Tuition Management System. Empower educators to focus on teaching, while we manage tuition and administrative tasks efficiently.",
  },
  {
    title: "Unlock Your School's Potential!",
    image: "3.jpg",
    content:
      "Unlock the full potential of your education institution with GuruGo Tuition Management System. Manage tuition, classes, and student data effortlessly for educational success.",
  },
];
export default {
  data() {
    return {
      contents,
      activePage: 0,
      carouselWorker: null,
    };
  },
  mounted() {
    this.carouselWorker = setInterval(() => {
      this.next();
    }, 5000);
  },
  methods: {
    next() {
      this.activePage =
        this.activePage === this.contents.length - 1 ? 0 : this.activePage + 1;
      clearInterval(this.carouselWorker);
      this.carouselWorker = setInterval(() => {
        this.next();
      }, 5000);
    },
    prev() {
      this.activePage =
        this.activePage === 0 ? this.contents.length - 1 : this.activePage - 1;
      clearInterval(this.carouselWorker);
      this.carouselWorker = setInterval(() => {
        this.next();
      }, 5000);
    },
  },
};
</script>

<style scoped>
@import url("~/assets/css/home/index.css");

.icon {
  font-size: 4rem;
}
</style>
