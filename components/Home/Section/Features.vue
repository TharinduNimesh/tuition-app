<template>
  <section id="featured-services">
    <div class="container">
      <div class="row">
        <HomeFeatureCard
          v-for="feature in features"
          :key="feature"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
const features = [
  {
    title: "Student Management",
    description:
      "Organize enrollment, attendance, and communication for efficient, personalized support to benefit every student.",
    icon: "heroicons:academic-cap",
  },
  {
    title: "Class Scheduling",
    description:
      "Effortlessly create, update, and share class schedules, ensuring a smooth learning experience for both teachers and students.",
    icon: "ph:clipboard-text-light",
  },
  {
    title: "Fee Management",
    description:
      "Easily manage student fees, automate payments, and generate financial reports for a hassle-free financial process.",
    icon: "ph:money-light",
  },
];
export default {
  data() {
    return {
      features,
    };
  },
};
</script>