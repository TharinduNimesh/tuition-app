<template>
  <section id="facts" class="wow fadeIn">
    <div class="container">
      <header class="section-header" data-aos="fade-up">
        <h3>Facts</h3>
        <p>
          People choose our system for its user-friendly features, time-saving
          automation, and data accuracy, making tuition management effortless
          and enhancing the overall educational experience for both teachers and
          students.
        </p>
      </header>

      <div class="row counters" data-aos="fade-up">
        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">
            {{ students }}
          </span>
          <p>STUDENTS</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">{{ teachers }}</span>
          <p>TEACHERS</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">{{ institutions }}</span>
          <p>INSTITUTIONS</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">{{ reviews }}</span>
          <p>REVIEWS</p>
        </div>
      </div>

      <div class="facts-img" data-aos="fade-right">
        <img
          src="/img/tuition-management-system.png"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
  </section>
  <!-- #facts -->
</template>

<script>
export default {
  data() {
    return {
      students: 0,
      teachers: 0,
      institutions: 0,
      reviews: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      const target = document.getElementById("facts");
      if (window.scrollY > target?.offsetTop - 200) {
        this.countUp("students", 2000);
        this.countUp("teachers", 400);
        this.countUp("institutions", 80);
        this.countUp("reviews", 800);
      }
    });
  },
  methods: {
    time(target) {
      return 1 / (target / 5);
    },
    countUp(name, target) {
      const worker = setInterval(() => {
        if (this[name] < target) {
          this[name]++;
        } else {
          clearInterval(worker);
        }
      }, this.time(target));
    },
  },
};
</script>
