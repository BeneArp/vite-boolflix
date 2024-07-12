<script>
import FilmCard from './FilmCard.vue';
import {store} from '../store'

    export default {
        name: "AppCardContainer",

        props:['title'],

        components:{
            FilmCard,
        },

        data(){
            return{
                store,
            }
        }
    }

</script>

<template>

    <div class="container">
        <h2 v-show="store.filmList.length >= 1">Film</h2>

        <div class="card-container">

            <FilmCard v-for="card in store.filmList" :info="card"/>

        </div>

    </div>

    <div class="container">
        <h2 v-show="store.serieList.length >= 1">Serie Tv</h2>

        <div class="card-container">

            <FilmCard v-for="card in store.serieList" :info="card"/>

        </div>

    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
 
    .container{
        margin-top: 3em;

        h2{
            color: $category-text-color;
            font-size: 25px;
        }

        .card-container{
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin: 2em 0;
            // debug
        }
    }

</style>