<template>
  <header 
    id="header"
    :class="{
      'header-scrolled': isScrolled
    }"
    >
    <div class="container-fluid">
      <div id="logo" class="pull-left">
        <h1><a href="#intro" class="scrollto">Classmate</a></h1>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <HomeHeaderItem name="Home" path="#intro" :isActive="true" />
          <HomeHeaderItem name="Fearues" path="#featured-services" />
          <HomeHeaderItem name="About Us" path="#about" />
          <HomeHeaderItem name="Services" path="#services" />
          <HomeHeaderItem name="pricing" path="#pricing" />
          <HomeHeaderItem name="Contact" path="#contact" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  inject: ["isScrolled"]
};
</script>
