<template>
<div >
<div class="row" v-if="peoplelists">
<div v-for="(people, i) in peoplelists" class="col-md-4" :key="i" >
        <div class = "card pb-3 mt-4 mb-4 ml-2 mr-2" >
            <div class = "card-header">
              <h1 class="header">Full Name: <span class="name">{{people.name}}</span></h1>  
            </div>
            <div class="card-body">
                <h5 class="card-title">Birth Year: <span class="birth">{{people.birth_year}}</span></h5>
                <p class="card-text">Gender: <span class="gender">{{people.gender}}</span></p>
            </div>
            <div class="text-center">
                <span class="view pt-2" data-toggle="modal" data-target="#personModal" @click="singlePerson(people.url)">View</span>
            </div>
        </div>
    </div>
    </div>
    <div class="row">
        <!-- Modal -->
        <div class="modal fade" id="personModal" tabindex="-1" role="dialog" aria-labelledby="personModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="header modal-title text-center" id="personModalLabel">Person's Details</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div v-if="loading" class="col-md-12 text-center">
                    <ClipLoader class="loader" color="#6200EE" />
                </div>
                <div class="col-md-12" v-if="eachperson">
                        <div class = "card pb-3 mt-4 mb-4 ml-2 mr-2" >
                            <div class = "card-header">
                            <h1 class="header">Full Name: <span class="name">{{eachperson.name}}</span></h1>  
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Birth Year: <span class="text">{{eachperson.birth_year}}</span></h5>
                                <p class="card-text">Gender: <span class="text">{{eachperson.gender}}</span></p>
                                <p class="card-text">Height: <span class="text">{{eachperson.height}}</span></p>
                                <p class="card-text">Mass: <span class="text">{{eachperson.mass}}</span></p>
                                <p class="card-text">Hair Color: <span class="text">{{eachperson.hair_color}}</span></p>
                                <p class="card-text">Skin Color: <span class="text">{{eachperson.skin_color}}</span></p>
                                <p class="card-text">Eye Color: <span class="text">{{eachperson.eye_color}}</span></p>
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
            background-color: #6200EE;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;

            .header{
                font-size: 16px;
                font-weight: bold;
                color: white
            }
            
            .name{
                font-weight: 400;
                font-size: 14px;
                color: white
            }
        }

        .card-body{
             padding-top: 20px;
             padding-bottom: 20px;
            .birth{
                font-weight: 400;
                font-size: 14px;
                color: black
            }
            .text{
                font-weight: 400;
                font-size: 14px;
                color: black
            }
            .gender{
                font-weight: 400;
                font-size: 14px;
                color: black
            }
            .card-title{
                font-size: 16px;
                font-weight: bold;
                color: #6200EE;
            }
            .card-text{
                font-size: 16px;
                font-weight: bold;
                color: #6200EE;
            }
        }
        .view{
            text-transform: uppercase;
            font-weight: 500;
            color: #6200EE;
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
            color: #6200EE;
            font-weight: bolder;
            text-transform: uppercase;
        }
    }
    .modal-title{
        margin: 0 auto;
    }
    .modal-footer{
        .btn-secondary{
            background-color: #6200EE;
            border: none
        }
    }
</style>



<script>
    import axios from 'axios'
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

    export default {
        name: 'PeopleList',
        components: {
            ClipLoader
        },
        props: {
            peoplelists: Array,

        },
        data(){
            return{
                eachperson: '',
                loading: true,
                errors: [],
            }
        },
        methods: {
            singlePerson (url) {
                axios.get(url)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.eachperson = response.data
                        this.loading = false
                    })
                    .catch(e => {
                        this.errors.push(e)
                })
            }
        },  
    
    }
</script>
