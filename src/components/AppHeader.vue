<script>
import AppReserch from './AppReserch.vue';

import {store} from '../store'
import axios from 'axios'


    export default {
        name: "AppHeader",
        components:{
            AppReserch,
        },

        data(){
            return{
                store,
            }
        },

    methods:{
        getFilmsList(){
            if(store.searchWord !== ''){
                
                let filmUrl = `${store.apiFilm}${store.apiKey}&query=${store.searchWord}`
                console.log(filmUrl);

                axios.get(filmUrl).then(result => {
                    // console.log(result.data.results);
                    store.filmList = result.data.results;
                    console.log(store.filmList);
                })
            }
        },

        getSeriesList(){
            if(store.searchWord !== ''){

                let serieUrl = `${store.apiSerie}${store.apiKey}&query=${store.searchWord}`
                console.log(serieUrl);

                axios.get(serieUrl).then(result => {
                    // console.log(result.data.results);
                    store.serieList = result.data.results;
                    console.log(store.serieList);
                })
            }
        },

        
        getGenresList(){
            let genresUrl = `${store.genresApi}${store.apiKey}`

            axios.get(genresUrl).then(result => {
                // console.log(result.data.genres);
                store.genresList = result.data.genres;
                console.log(store.genresList);
            })
        }

    },

    // created(){
    //     this.getFilmsList();
    //     this.getSeriesList();
    // }
    }

</script>

<template>

    <header>
        <div class="container">
            <div>
                <h1>BOOLFLIX</h1>
            </div>

            <AppReserch @search="getFilmsList(),getSeriesList(),getGenresList()"/>

        </div>
    </header>    

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    header{
        background-color: $header-bg-color
    }

    .container{
        @include flex;
        padding: 2em 1em;

        h1{
            color: $text-color-red;
            font-size: 35px;
        }
    }
</style>