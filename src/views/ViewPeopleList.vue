<template>
<div class="container">
    <h1 class="header text-center mt-4 mb-5">People</h1>

     <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 text-center">
        <div class="search ">
            <input type="text" class="form-control" v-model="search" id="search" placeholder="Search people by name and gender.."/>
          </div>
      </div>
      <div class="col-md-3"></div>

    </div>
    
    <div class="row">
      <div class="col-md-4 ">
        <div class="pagination">
              <button class="btn btn-prev" @click="loadPeople(pagination.previous)"
                      :disabled="!pagination.previous">
                  Previous Page
              </button>
              <!-- <span class="mt-3">Page {{page}} of {{totalPage}}</span> -->
              <button class="btn btn-next" @click="loadPeople(pagination.next)"
                :disabled="!pagination.next">Next Page
            </button>
          </div>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
    </div>
   

  
  
  <PeopleList :peoplelists="peopleListFilter"/>

  <div v-if="loading" class=" text-center">
    <PulseLoader class="loader" color="#6200EE" />
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
      color: #6200EE;
      font-weight: bolder;
      text-transform: uppercase
    }
    .form-control{
      border: #6200EE solid 1px;
      border-radius: 20px;
      padding: 20px;
    }
    .pagination{
      .btn{
        border: none;
        color: #6200EE;
        cursor: pointer;
        margin: 10px;

        &:hover{
        background-color: #6200EE;
        color: white;
      }
      }
      
    }
  }
</style>


<script>
  import PeopleList from '@/components/peoplelist/PeopleList'
  import axios from 'axios';
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  const url = 'https://swapi.dev/api/people/';
  export default {
    components: {
      PeopleList,
      PulseLoader,

    },
    data() {
      return {
        peoplelists: [],
        pagination: {},
        loading: true,
        errors: [],
        page: '',
        pageno: 0,
        totalPage: 8,
        search: '',

      }
    },
    
    methods: {
      loadPeople(url){
        let vm = this;
        axios.get(url)
          .then(response => {
            // JSON responses are automatically parsed.
            this.peoplelists = response.data.results
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
    peopleListFilter() 
    {
        const filter = this.peoplelists.filter((people) =>
        {
          return people.name.toLowerCase().includes(this.search.toLowerCase()) ||
          people.gender.toLowerCase().includes(this.search.toLowerCase());
        });
      
      return filter;
     }
    },
        
    
    mounted () {
      this.loadPeople(url)
  },
  
  }
</script>