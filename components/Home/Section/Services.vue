<template>
  <section id="featured-services">
    <div class="container">
      <div class="row">
        <HomeServiceCard
          v-for="service in services"
          :key="service"
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
        />
      </div>
    </div>
  </section>
</template>

<script>
const services = [
  {
    title: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    icon: "ion-ios-bookmarks-outline",
  },
  {
    title: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    icon: "ion-ios-bookmarks-outline",
  },
  {
    title: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    icon: "ion-ios-bookmarks-outline",
  },
];
export default {
  data() {
    return {
      services: services,
    };
  },
};
</script>

<style scoped>
@import url("~/assets/css/home/index.css");
</style>