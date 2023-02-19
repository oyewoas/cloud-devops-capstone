<template>
<div class="container">
    <h1 class="header text-center mt-4 mb-5">Starships</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 text-center">
        <div class="search ">
            <input type="text" class="form-control" v-model="search" id="search" placeholder="Search starship by name.."/>
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
    <StarshipList  :starshiplists="starshipListFilter"/>
  
    <div v-if="loading" class=" text-center">
        <PulseLoader class="loader" color="#E65100"/>
    </div>
</div>
  
  
</template>

<style lang="scss" scoped>
  .container {
    margin-top: 100px;

      .loader{
      margin-top: 200px;
      margin-bottom: 200px;
    }

    .header{
      color: #E65100;
      font-weight: bolder;
      text-transform: uppercase
    }
    .form-control{
      border: #E65100 solid 1px;
      border-radius: 20px;
      padding: 20px;
    }
    .pagination{
      .btn{
        border: none;
        color: #E65100;
        cursor: pointer;
        margin: 10px;

        &:hover{
        background-color: #E65100;
        color: white;
      }
      }
      

  }
  }
</style>

<script>
  import StarshipList from '@/components/starshiplist/StarshipList'
  import axios from 'axios';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  const url = 'https://swapi.dev/api/starships/'


  export default {
    components: {
      StarshipList,
      PulseLoader
    },
    data() {
      return {
        starshiplists: [],
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
            this.starshiplists = response.data.results
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
    starshipListFilter() 
    {
        const filter = this.starshiplists.filter((starship) =>
        {
          return starship.name.toLowerCase().includes(this.search.toLowerCase());
        });
      
      return filter;
     }
    },
    mounted () {
      this.loadPlanets(url)
  }
  }
</script>