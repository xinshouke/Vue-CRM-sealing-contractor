<template>
  <main id="app" class="col">
<app-nav></app-nav>
 <router-view></router-view>
  </main>
</template>

<script>

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import '/styles/vars';
@import '/styles/reset';
@import '/styles/global';
@import '/styles/framework';
    
    
    #app {
    min-height: 100vh;
    width: 80%;
    min-width: 20em;
    background-color: #FFF;
    margin: 0px auto;
}

</style>
