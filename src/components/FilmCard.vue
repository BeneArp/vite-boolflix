<script>
    export default {
        name: "FilmCard",

        props:['info'],

        data(){
            return{
                cardHover: false,
            }
        },

        methods:{
            changeHoverStatus(){
                this.cardHover = !this.cardHover
            }
        }
    }

</script>

<template>


    <div class="card" @mouseenter="changeHoverStatus" @mouseleave="changeHoverStatus">
        <!-- contenuti da mostrare in default quando il puntatore non è sulla card -->
        <div  v-show="cardHover === false">
            <img :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" alt="">

            <!-- se la voce poster ha valore null mostra il titolo della pellicola -->
            <h2 v-if="info.poster_path === null">{{ info.original_title }}</h2>
            <h2 v-if="info.poster_path === null">{{ info.original_name }}</h2>
        </div>
        
        <!-- contenuti da mostrare quando il puntatore è sulla card -->
        <div v-show="cardHover === true">
            <h4>{{ info.original_title }}</h4>
            <h4>{{ info.original_name }}</h4>
            <p>{{ info.overview }}</p>
        </div>

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
        min-height: 540px;
        position: relative;
        // debug

        h2{
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        h4{
            margin: 1em 0;
        }
    }
</style>