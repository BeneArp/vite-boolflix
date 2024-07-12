<script>
    import {store} from '../store'

    export default {
        name: "FilmCard",

        props:['info'],

        data(){
            return{
                store,
                cardHover: false,
            }
        },

        methods:{
            changeHoverStatus(){
                this.cardHover = !this.cardHover;
            },

            getImagePath: function(imgPath){
                return new URL(imgPath, import.meta.url).href;
            },

        }
    }

</script>

<template>

    <div class="card" @mouseenter="changeHoverStatus" @mouseleave="changeHoverStatus">
        <!-- contenuti da mostrare in default quando il puntatore non è sulla card -->
        <div  v-show="cardHover === false">
            <img :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" alt="">

            <!-- se la voce poster ha valore null mostra il titolo della pellicola -->
            <h2 v-if="info.poster_path === null">{{ info.title }}</h2>
            <h2 v-if="info.poster_path === null">{{ info.name }}</h2>
        </div>
        
        <!-- contenuti da mostrare quando il puntatore è sulla card -->
        <div v-show="cardHover === true">
            <!-- titolo italiano -->
            <h3>{{ info.title }}</h3>
            <h3>{{ info.name }}</h3>

            <!-- titolo originale -->
            <h4>{{ info.original_title }}</h4>
            <h4>{{ info.original_name }}</h4>

            <!-- linga -->
            <div class="details">
                <!-- se la bandiera è presente nell'array stampa quella -->
                <div class="flag" v-if="store.falgs.includes(info.original_language)">
                    <img :src="getImagePath(`../assets/flags/${info.original_language}.png`)" alt="">
                </div>
                <!-- altrimenti scrivi questo -->
                <span v-else>Lingua Originale:  {{ info.original_language }}</span>

            

                <!-- voto -->
                <div class="stars">Voto: {{ Math.floor(info.vote_average / 2) }}</div>
            </div>

            <!-- sinossi -->
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
        height: 540px;
        overflow-y: auto;
        scrollbar-width: none;
        position: relative;
        // debug

        h2{
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        h3{
            margin: 1em 0;
        }

        img{
            display: block;
        }

        .details{
            text-align: center;
            margin: 1em 0;
        }

        .flag{
            position: relative;
            height: 60px;
            margin-bottom: 0.8em;

            img{
                width: 15%;
                position: absolute;
                left: 50%;
                top: 10px;
                transform: translate(-50%);
            }
        }

    }

</style>