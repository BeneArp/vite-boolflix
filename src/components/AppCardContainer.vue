<script>
import FilmCard from './FilmCard.vue';

    export default {
        name: "AppCardContainer",

        props:['title'],

        components:{
            FilmCard,
        }
    }

</script>

<template>

    <div class="container">
        <h2>{{title}}</h2>

        <div class="card-container">

            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>

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
            background-color: lightslategray;
            height: 600px;
        }
    }

</style>