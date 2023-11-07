<script setup>
useHead({
  title: "Pricing | Classmate - Tuition Management System",
});
</script>
<template>
  <NuxtLayout name="home">
    <HomeIntro image="pricing.webp" />
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 py-5">
            <header class="section-header mb-3" data-aos="fade-up">
              <h3 class="fw">Pricing</h3>
            </header>
            <div class="row">
              <div class="col-md-6">
                <img
                  src="/img/classmate-pricing.webp"
                  alt="Classmate Pricing"
                  class="img-fluid rounded mb-5 mb-lg-0"
                  data-aos="fade-right"
                />
              </div>
              <div 
                class="col-md-6 lead text-center d-flex align-items-center"
                data-aos="fade-left"
              >
                We offer flexible pricing packages tailored to cater to the
                diverse needs of educators and educational institutions. Our
                goal is to provide a comprehensive tuition management solution
                that suits various scales of teaching environments. The
                following packages are designed to accommodate the requirements
                of individual teachers, education centers, and multi-branch
                organizations.
              </div>
            </div>
            <header class="section-header py-5" data-aos="fade-up">
              <h3 class="fw">Packages</h3>
            </header>
            <div class="d-flex justify-content-center pb-4" data-aos="fade-up">
              <div
                class="btn-group item-center text-center pb-3"
                role="group"
                aria-label="Basic example"
              >
                <button
                  class="toggle-button btn btn-primary"
                  @click="togglePrices('annually')"
                  :disabled="isAnnual"
                >
                  Annually
                </button>
                <button
                  class="toggle-button btn btn-primary"
                  @click="togglePrices('monthly')"
                  :disabled="!isAnnual"
                >
                  Monthly
                </button>
              </div>
            </div>
            <div class="row justify-content-center gap-4" data-aos="fade-up">
              <HomePriceCard
                v-for="card in cards"
                :key="card.title"
                :name="card.title"
                :price="card.price[category]"
                :features="card.features"
                :is-active="card.isActive"
                :content="card.content"
              />
            </div>
            <header class="section-header py-5" data-aos="fade-up">
              <h3 class="fw">Additional Charges</h3>
            </header>
            <div class="row">
              <div class="col-12 d-flex justify-content-center" data-aos="fade-up">
                <img
                  src="/img/additional-pricing.webp"
                  alt="Additional Pricing"
                  class="img-fluid rounded additional-img mb-3"
                />
              </div>
              <div class="col-12">
                <div class="row details" data-aos="fade-up">
                  <div class="col-md-6 px-4">
                    <ul>
                      <li>
                        <strong>Extra Students:</strong>
                        Beyond the initial 250 students, LKR 50 per additional
                        student per month / LKR 500 per additional student
                        annually.
                      </li>
                      <li>
                        <strong>Extra Classes:</strong>
                        LKR 1000 per extra class per month / LKR 8000 per extra
                        class annually.
                      </li>
                      <li>
                        <strong>Customization for Personal Website:</strong>
                        LKR 10000 one-time setup fee / LKR 3000 per month for
                        ongoing maintenance and updates.
                      </li>
                      <li>
                        <strong>Extra Video Storage Charge:</strong>
                        LKR 100 for each extra 1GB beyond the package limit.
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6 px-4">
                    <ul>
                      <li>
                        <strong>Additional Assistant Teachers:</strong>
                        LKR 1500 per assistant per month / LKR 12000 per
                        assistant annually.
                      </li>
                      <li>
                        <strong>Additional Branches:</strong>
                        LKR 10000 per additional branch per month / LKR 90000
                        per additional branch annually.
                      </li>

                      <li>
                        <strong>Full LMS Access Upgrade:</strong>
                        LKR 5000 per month / LKR 45000 annually.
                      </li>
                    </ul>
                  </div>
                  <hr class="my-3" />
                  <div class="col-12 note" data-aos="fade-right">
                    <strong>Note:</strong>
                    <ul>
                      <li>
                        All packages include regular support and software
                        updates.
                      </li>
                      <li>All prices are in Sri Lankan Rupees (LKR).</li>
                      <li>
                        All additional services are subject to the terms and
                        conditions of the primary subscription.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <header class="section-header py-5" data-aos="fade-up">
              <h3 class="fw">Summary</h3>
            </header>
            <div class="row">
              <div class="col-md-6 summary order-2 order-md-1" data-aos="fade-right">
                <p>
                  For a demonstration of our tuition management application and
                  to explore how it can cater to your specific needs, 
                  <NuxtLink to="/contact">
                    Request a Demo here.
                  </NuxtLink>
                </p>
                <p>
                  Our pricing structure is crafted to provide flexibility and
                  scalability, ensuring that educators and institutions receive
                  a tailored solution that meets their unique requirements.
                  Should you need further customization or have specific
                  demands, feel free to reach out to our support team.
                </p>
                <p>
                  Thank you for considering our tuition management application.
                </p>
              </div>
              <div class="col-md-6 order-1 order-md-2" data-aos="fade-left">
                <img
                  src="/img/pricing-summary.webp"
                  alt="Pricing Summary"
                  class="img-fluid rounded additional-img mb-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
import cards from "~/assets/data/pricing-packages.js";

export default {
  data() {
    return {
      category: "monthly",
      cards,
    };
  },
  methods: {
    togglePrices(category) {
      this.category = category;
    },
  },
  computed: {
    isAnnual() {
      return this.category === "annually";
    },
  },
};
</script>

<style scoped>
.additional-img {
  width: 100%;
  max-width: 800px;
  height: auto;
}

.details {
  margin-top: 2rem;
}

.details ul {
  font-size: 1.1rem;
}

.details ul li {
  margin-bottom: 1rem;
}

.note {
  font-size: 1.2rem;
}

.note ul li {
  margin-left: 2rem;
  margin-bottom: 0;
}

.summary {
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
