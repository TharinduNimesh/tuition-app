<template>
  <div>
    <Maintainance />
    <NuxtPage />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      url(subdomain, path) {
        let domain = subdomain === "/" ? "" : `${subdomain}.`;
        let app_domain = process.env.APP_DOMAIN || "localhost:3000";
        return `http://${domain}${app_domain}${path}`;
      },
    };
  },
};
</script>

<style>
::-moz-selection {
  background: #696cff9d;
  color: #000;
}

::selection {
  background: #696cff9d;
  color: #000;
}
</style>
