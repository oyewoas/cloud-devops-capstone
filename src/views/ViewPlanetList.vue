<template>
<div class="container">
    <h1 class="header text-center mt-4 mb-5">Planets</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 text-center">
        <div class="search ">
            <input type="text" class="form-control" v-model="search" id="search" placeholder="Search planet by name.."/>
          </div>
      </div>
      <div class="col-md-3"></div>

    </div>
    <div class="pagination">
      <button class="btn btn-prev" @click="loadPlanets(pagination.previous)"
              :disabled="!pagination.previous">
          Previous Page
      </button>
      <!-- <span class="mt-3">Page {{page}} of {{totalPage}}</span> -->
      <button class="btn btn-next" @click="loadPlanets(pagination.next)"
        :disabled="!pagination.next">Next Page
    </button>
  </div>
    <PlanetList :planetlists="planetListFilter"/>

    <div v-if="loading" class="text-center">
      <PulseLoader class="loader" color="#E91E63"/>
    </div>
</div>
</template>

<style lang="scss" scoped>
  .container{
    margin-top: 100px;

      .loader{
      margin-top: 200px;
      margin-bottom: 200px;
    }
    .header{
      color: #E91E63;
      font-weight: bolder;
      text-transform: uppercase
    }
    .form-control{
      border: #E91E63 solid 1px;
      border-radius: 20px;
      padding: 20px;
    }
     .pagination{
      .btn{
        border: none;
        color: #E91E63;
        cursor: pointer;
        margin: 10px;

        &:hover{
        background-color: #E91E63;
        color: white;
      }
      }
      

  }
  }
</style>


<script>
  import PlanetList from '@/components/planetlist/PlanetList'
  import axios from 'axios';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  const url = 'https://swapi.dev/api/planets/'

  export default {
    components: {
      PlanetList,
      PulseLoader
    },
    data() {
      return {
        planetlists: [],
        errors: [],
        loading: true,
        pagination: {},
        page: '',
        pageno: 0,
        totalPage: 8,
        search: ''
      }
    },
    methods: {
      loadPlanets(url){
        let vm = this;
        axios.get(url)
          .then(response => {
            // JSON responses are automatically parsed.
            this.planetlists = response.data.results
            vm.makePagination(response.data)
            this.loading = false;
          })
          .catch(e => {
            this.errors.push(e)
          })
      },

       makePagination(data){
          let pagination = {
            next : data.next,
            previous: data.previous,
          }
          this.pagination = pagination
      },
    },
    computed: {
    planetListFilter() 
    {
        const filter = this.planetlists.filter((planet) =>
        {
          return planet.name.toLowerCase().includes(this.search.toLowerCase());
        });
      
      return filter;
     }
    },
    mounted () {
      this.loadPlanets(url)
  }
  }
</script>