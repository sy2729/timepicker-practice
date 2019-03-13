<template>
  <div id="app">
    <keep-alive>
      <Calendar v-if="currentTab === 'calendar'" msg="Welcome to Your Vue.js App"/>
    </keep-alive>
    <Footer class="v-footer" @click="switchTab" :current-tab="currentTab"/>
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Calendar,
    Footer
  },
  data() {
    return {
      currentTab: 'calendar' //default to calendar
    }
  },
  methods: {
    switchTab(sign) {
      this.currentTab = sign;
    }
  }
}
</script>

<style lang="scss">
$textColorGray: #C6C6C6;
#app {
  width: 320px;

  .v-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid $textColorGray;
    box-shadow: 0px -2px 2px 0px rgba(238,238,238,1); 
  }
}
</style>
