<script setup>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import { useObsConnectionStore } from './store/obsConnectionStore';

</script>

<template>
  <div class="wrapper">
    <Header />
    <div id="section-main">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style>
  @import './assets/styles/reset.css';
  @import './assets/styles/main.css';
</style>