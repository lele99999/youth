<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>
</div>
</template>

<script>
import appFooter from './components/appFooter'
import appHeader from './components/appHeader'

export default {
  name: 'app',
  components: {
    appFooter,
    appHeader
  }
}
</script>

<style>
 
</style>
