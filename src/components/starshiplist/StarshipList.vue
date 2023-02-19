<template>
<div>
<div class="row" v-if="starshiplists">
<div v-for="(starship, i) in starshiplists" class="col-md-4" :key="i">
        <div class = "card mt-4 pb-3 mb-4 ml-2 mr-2" >
            <div class = "card-header">
               <h1 class="header">Name: <span class="name">{{starship.name}}</span></h1> 
            </div>
            <div class="card-body">
                <h5 class="card-title">Model: <span class="model">{{starship.model}}</span></h5>
                <p class="card-text">Cargo Capacity: <span class="cargo">{{starship.cargo_capacity}}</span></p>
            </div>
            <div class="text-center">
                <span class="view pt-2" data-toggle="modal" data-target="#starshipModal" @click="singleStarship(starship.url)">View</span>
            </div>
        </div>
    </div>
    </div>


    <div class="row">
    
    <!-- Modal -->
        <div class="modal fade" id="starshipModal" tabindex="-1" role="dialog" aria-labelledby="starshipModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="header modal-title text-center" id="starshipModalLabel">Starship Details</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div v-if="loading" class="col-md-12 text-center">
                    <ClipLoader class="loader" color="#E65100" />
                </div>
                <div class="col-md-12" v-if="eachstarship">
                     <div class = "card pb-3 mt-4 mb-4 ml-2 mr-2" >
                        <div class = "card-header">
                        <h1 class="header">Name: <span class="name">{{eachstarship.name}}</span></h1>  
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Model: <span class="text">{{eachstarship.model}}</span></h5>
                            <p class="card-text">Cargo Capacity: <span class="text">{{eachstarship.cargo_capacity}}</span></p>
                            <p class="card-text">Manufacturer: <span class="text">{{eachstarship.manufacturer}}</span></p>
                            <p class="card-text">Cost in Credits: <span class="text">{{eachstarship.cost_in_credits}}</span></p>
                            <p class="card-text">Lenght: <span class="text">{{eachstarship.length}}</span></p>
                            <p class="card-text">Max Atm Speed: <span class="text">{{eachstarship.max_atmosphering_speed}}</span></p>
                            <p class="card-text">Crew: <span class="text">{{eachstarship.crew}}</span></p>
                            <p class="card-text">Passengers: <span class="text">{{eachstarship.passengers}}</span></p>
                            <p class="card-text">Consumables: <span class="text">{{eachstarship.consumables}}</span></p>
                            <p class="card-text">Hyperdrive Rating: <span class="text">{{eachstarship.hyperdrive_rating}}</span></p>
                            <p class="card-text">MGLT: <span class="text">{{eachstarship.MGLT}}</span></p>
                            <p class="card-text">Starship Class: <span class="text">{{eachstarship.starship_class}}</span></p>


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
            background-color: #E65100;
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
            .model{
                font-weight: 400;
                font-size: 16px;
                color: black
            }
            .text{
                font-weight: 400;
                font-size: 14px;
                color: black
            }
            .cargo{
                font-weight: 400;
                font-size: 16px;
                color: black
            }
            .card-title{
                font-size: 16px;
                font-weight: bold;
                color: #E65100;
            }
            .card-text{
                font-size: 16px;
                font-weight: bold;
                color: #E65100;
            }
        }

        .view{
            text-transform: uppercase;
            font-weight: 500;
            color: #E65100;
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
            color: #E65100;
            font-weight: bolder;
            text-transform: uppercase;
        }
    }
    .modal-title{
        margin: 0 auto;
    }
    .modal-footer{
        .btn-secondary{
            background-color: #E65100;
            border: none
        }
    }
</style>



<script>
    import axios from 'axios'
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
    export default {
        name: 'StarshipList',
        components: {
            ClipLoader
        },
        props: {
            starshiplists: Array
        },
        data(){
            return{
                eachstarship: '',
                loading: true
            }
        },
        methods: {
            singleStarship (url) {
                axios.get(url)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                this.eachstarship = response.data
                                this.loading = false
                            })
                            .catch(e => {
                                this.errors.push(e)
                        })
            }
  }
    }
</script>
