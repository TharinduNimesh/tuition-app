<template>
  <header id="header">
    <div class="container-fluid">
      <div id="logo" class="pull-left">
        <h1><a href="#intro" class="scrollto">BizPage</a></h1>
      </div>

      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <HomeHeaderItem name="Home" path="#intro" isActive="true" />
          <HomeHeaderItem name="About Us" path="#about" />
          <HomeHeaderItem name="Services" path="#services" />
          <HomeHeaderItem name="Portfolio" path="#portfolio" />
          <HomeHeaderItem name="Team" path="#team" />
          <HomeHeaderItem name="Contact" path="#contact" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("~/assets/css/home/index.css");
</style>
