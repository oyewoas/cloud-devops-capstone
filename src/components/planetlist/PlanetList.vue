<template>
<div>
<div class="row" v-if="planetlists">
<div v-for="(planet, i) in planetlists" class="col-md-4" :key="i">
        <div class = "card mt-4 pb-3 mb-4 ml-2 mr-2" >
            <div class = "card-header">
               <h1  class="header">Name: <span class="name">{{planet.name}}</span></h1> 
            </div>
            <div class="card-body">
                <h5 class="card-title">Temperature: <span class="temp">{{planet.climate}}</span></h5>
                <p class="card-text">Population: <span class="population">{{planet.population}}</span></p>
            </div>
            <div class="text-center">
                <span class="view pt-2" data-toggle="modal" data-target="#planetModal" @click="singlePlanet(planet.url)">View</span>
            </div>
        </div>
    </div>
    </div>

     <div class="row">
        <!-- Modal -->
        <div class="modal fade" id="planetModal" tabindex="-1" role="dialog" aria-labelledby="planetModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="header modal-title text-center" id="planetModalLabel">Planet Details</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div v-if="loading" class="col-md-12 text-center">
                    <ClipLoader class="loader" color="#E91E63" />
                </div>
                <div class="col-md-12" v-if="eachplanet">
                        <div class = "card pb-3 mt-4 mb-4 ml-2 mr-2" >
                            <div class = "card-header">
                            <h1 class="header">Name: <span class="name">{{eachplanet.name}}</span></h1>  
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rotation Period: <span class="text">{{eachplanet.rotation_period}}</span></h5>
                                <p class="card-text">Temperature: <span class="text">{{eachplanet.climate}}</span></p>
                                <p class="card-text">Population: <span class="text">{{eachplanet.population}}</span></p>
                                <p class="card-text">Orbital Period: <span class="text">{{eachplanet.orbital_period}}</span></p>
                                <p class="card-text">Gravity: <span class="text">{{eachplanet.gravity}}</span></p>
                                <p class="card-text">Terrain: <span class="text">{{eachplanet.terrain}}</span></p>
                                <p class="card-text">Surface Water: <span class="text">{{eachplanet.surface_water}}</span></p>
                            </div>
                        </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Exit</button>
            </div>
            </div>
        </div>
        </div>
     </div>
    </div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .card{
        -webkit-box-shadow: 0px 0px 3px 1px rgba(158,153,158,1);
        -moz-box-shadow: 0px 0px 3px 1px rgba(158,153,158,1);
        box-shadow: 0px 0px 3px 1px rgba(158,153,158,1);
        border-radius: 5px;
        border: none;
        .card-header{
             padding-top: 20px;
            padding-bottom: 20px;
            background-color: #E91E63;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            .header{
                font-size: 16px;
                font-weight: bold;
                color: white;
            }
            
            .name{
                font-weight: 400;
                font-size: 16px;
                color: white
            }
        }
        .card-body{
            padding-top: 20px;
             padding-bottom: 20px;
            .temp {
                font-weight: 400;
                font-size: 16px;
                color: black
            }
            .text{
                font-weight: 400;
                font-size: 14px;
                color: black
            }
            .population{
                font-weight: 400;
                font-size: 16px;
                color: black
            }
            .card-title{
                font-size: 16px;
                font-weight: bold;
                color: #E91E63;
            }
            .card-text{
                font-size: 16px;
                font-weight: bold;
                color: #E91E63;
            }
        }
        .view{
            text-transform: uppercase;
            font-weight: 500;
            color: #E91E63;
            cursor: pointer;
        }
        .view:hover{
            -webkit-box-shadow: 0px 0px 3px 1px rgba(158,153,158,1);
            -moz-box-shadow: 0px 0px 3px 1px rgba(158,153,158,1);
            box-shadow: 0px 0px 3px 1px rgba(158,153,158,1);
            padding: 5px 10px;
            border: none;
        }
    }
     .modal-body {
        
        .loader{
        margin-top: 200px;
        margin-bottom: 200px;
        }
    }
    .modal-header{
        .header{
            color: #E91E63;
            font-weight: bolder;
            text-transform: uppercase;
        }
    }
    .modal-title{
        margin: 0 auto;
    }
    .modal-footer{
        .btn-secondary{
            background-color: #E91E63;
            border: none
        }
    }
</style>



<script>
    import axios from 'axios'
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    export default {
        name: 'PlanetList',
        components: {
            ClipLoader
        },
        props: {
            planetlists: Array
        },
        data(){
            return{
                eachplanet: '',
                loading: true,
                errors: [],

            }
        },
         methods: {
            singlePlanet (url) {
                axios.get(url)
                        .then(response => {
                            // JSON responses are automatically parsed.
                            this.eachplanet = response.data
                            this.loading = false
                        })
                        .catch(e => {
                            this.errors.push(e)
                    })
            }
  }
    }
</script>
