<script>
    export default {
        name: "FilmCard",

        props:['info']
    }

</script>

<template>


    <div class="card">
        <img :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" alt="">

        <!-- se la voce poster ha valore null mostra il titolo della pellicola -->
        <h2 v-if="info.poster_path === null">{{ info.original_title }}</h2>
        <h2 v-if="info.poster_path === null">{{ info.original_name }}</h2>
        
        <h4>{{ info.original_title }}</h4>
        <h4>{{ info.original_name }}</h4>
        <p>{{ info.overview }}</p>
    </div>


</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .card{
        background-color: black;
        color: white;
        padding: 1em;
        margin: 0 1em 1em 1em;
        width: calc(100% / 3 - 2em);
        min-height: 400px;
        // debug

        h2{
            text-align: center;
        }
    }
</style>