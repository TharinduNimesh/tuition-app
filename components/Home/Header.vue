<template>
  <header 
    id="header"
    :class="{
      'header-scrolled': isScrolled
    }"
    >
    <div class="d-flex justify-content-between align-items-center px-2 px-md-5">
      <div id="logo">
        <h1>
          <a href="#" class="scrollto">Classmate</a>
        </h1>
      </div>

      <nav id="nav-menu-container" class="d-none d-xl-flex">
        <ul class="nav-menu">
          <HomeHeaderItem name="Home" path="#intro" :isActive="true" />
          <HomeHeaderItem name="Fearues" path="#featured-services" />
          <HomeHeaderItem name="About Us" path="#about" />
          <HomeHeaderItem name="Services" path="#services" />
          <HomeHeaderItem name="pricing" path="#pricing" />
          <HomeHeaderItem name="Contact" path="#contact" />
        </ul>
      </nav>

      <div class="d-none d-md-flex gap-2">
        <NuxtLink to="/login" class="btn btn-primary">Login</NuxtLink>
        <NuxtLink to="/register" class="btn btn-outline-primary">Register</NuxtLink>
      </div>
      <div class="d-flex d-md-none sidebar">
        <Icon 
          name="heroicons:bars-3-20-solid"
          class="bars"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  inject: ["isScrolled"]
};
</script>

<style scoped>
.sidebar {
  width: 50px;
  height: 50px;
  background-color: #696cff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
}

.sidebar .bars {
  color: #fff;
  width: 25px;
  height: 25px;

}

.sidebar:hover {
  background-color: #0571ff;
  cursor: pointer;
}
</style>