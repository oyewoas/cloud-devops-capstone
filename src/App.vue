<template>
  <div class="app">

    <NavBar/>
    <CoreView/>
    <CoreFooter/>

  </div>
</template>

<style lang="scss" scoped>
  .app{
    font-family: 'Roboto', sans-serif;

  }
</style>


<script>
import NavBar from '@/components/common/NavBar'
import CoreView from '@/components/common/View'
import CoreFooter from '@/components/common/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    CoreView,
    CoreFooter,
  },
  data () {
    return {
      //
    }
  }
}
</script>
