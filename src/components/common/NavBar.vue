<template>

  <header class="container-fluid">
    <nav class="navbar fixed-top navbar-expand-lg px-3 py-4" >
       <router-link tag="a" class="col" class-active="active" to="/" exact>
        <h4 class="hero">StarWars Directory</h4>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle='collapse' data-target='#myNav'>
        <span class="navbar-icon">
          <i class="material-icons">menu</i>
        </span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="myNav">
        <ul class="navbar-nav">
          <li
              v-for="(link, i) in links"
              :key="i"
              class="mr-3 ml-3"
            >
              <router-link tag="a" class="nav-item" class-active="active" :to="link.to" exact>{{ link.text }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>

</template>

<style lang="scss" scope>
    .navbar{
        background-color: white;
        -webkit-box-shadow: 0px 4px 6px -4px rgba(122,120,122,1);
        -moz-box-shadow: 0px 4px 6px -4px rgba(122,120,122,1);
        box-shadow: 0px 4px 6px -4px rgba(122,120,122,1);
        
        .nav-item{
            font-size: 16px;
            background-image: linear-gradient(to right, #6200EE, #E91E63, #E65100);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 500;
            text-decoration: none;
        }
        .material-icons{
          background-image: linear-gradient(to right, #6200EE, #E91E63, #E65100);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .nav-item:hover{
          opacity: 0.7;
        }
        .hero{
            text-transform: uppercase;
            font-weight: bold;
            font-size: 30px;
            text-decoration: none;
            background-image: linear-gradient(to right, #6200EE, #E91E63, #E65100);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    @media only screen and (max-width: 420px){
      .navbar{
        .hero{
          font-size: 20px;
        }
      }
    }
</style>

<script>
  // Utilities
  import {
    mapGetters,
  } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
      }
    }
  }
</script>