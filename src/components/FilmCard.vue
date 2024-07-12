<script>
    import {store} from '../store'

    export default {
        name: "FilmCard",

        props:['info'],

        data(){
            return{
                store,
                cardHover: false,
                star: "fa-regular",
                fullStar: "fa-solid",
            }
        },

        methods:{
            changeHoverStatus(){
                setTimeout(() => {
                    this.cardHover = !this.cardHover;
                }, "455");
            },

            getImagePath: function(imgPath){
                return new URL(imgPath, import.meta.url).href;
            },

        },

    }

</script>

<template>

    <div class="card" @mouseenter.stop="changeHoverStatus" @mouseleave.stop="changeHoverStatus">
        <!-- contenuti da mostrare in default quando il puntatore non è sulla card -->
        <div  v-show="cardHover === false" class="cover">
            <img class="film-cover" :src="'https://image.tmdb.org/t/p/w342/' + info.poster_path" alt="">

            <!-- se la voce poster ha valore null mostra il titolo della pellicola -->
            <h2 v-if="info.poster_path === null">{{ info.title }}</h2>
            <h2 v-if="info.poster_path === null">{{ info.name }}</h2>
        </div>
        
        <!-- contenuti da mostrare quando il puntatore è sulla card -->
        <div v-show="cardHover === true" class="info">
            <!-- titolo italiano -->
            <h3>{{ info.title }}</h3>
            <h3>{{ info.name }}</h3>

            <!-- titolo originale -->
            <h4>{{ info.original_title }}</h4>
            <h4>{{ info.original_name }}</h4>

            <div class="details">

                <!-- se la bandiera è presente nell'array stampa quella -->
                <div class="flag" v-if="store.falgs.includes(info.original_language)">
                    <div>Lingua Originale:</div>
                    <img :src="getImagePath(`../assets/flags/${info.original_language}.png`)" alt="">
                </div>
                <!-- altrimenti scrivi questo -->
                <span v-else>Lingua Originale:  {{ info.original_language }}</span>

            

                <!-- voto -->
                <div class="voto">
                    <div>Voto:</div>
                    <!-- stampo in pagina in numero di stelle colorate che corrisponde al voto -->
                    <i v-for="colorStar in parseInt(Math.floor(info.vote_average / 2))" class="fa-star" :class="this.fullStar"></i>
                    <!-- sottraggo dalle cinque stelle non colorate il numero del voto asseganto alla pellicola, saranno sostituite dalle stelle colorate -->
                    <i v-for="star in (5 - (parseInt(Math.floor(info.vote_average / 2))))" class="fa-star" :class="this.star"></i>
                </div>
            </div>

            <!-- sinossi -->
            <p>{{ info.overview }}</p>
        </div>

    </div>


</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
    // font awesome
    @use "@fortawesome/fontawesome-free/css/all.min.css";

    .card{
        color: white;
        margin: 0 1em 1em 1em;
        width: calc(100% / 3 - 2em);
        height: 540px;
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

        .film-cover{
            display: block;
            transition: all 0.6s;
        }

        .details{
            text-align: center;
            margin: 1em 0;
        }

        .flag{
            position: relative;
            height: 75px;
            margin-bottom: 0.8em;

            img{
                width: 15%;
                position: absolute;
                left: 50%;
                top: 25px;
                transform: translate(-50%);
            }

        }

        .voto{
            margin: 1em 0;

            i{
                margin-top: 0.4em;
            }
        }

        .info{
            background-color: black;
            padding: 1em;
            height: 100%;
            overflow-y: auto;
            scrollbar-width: none;
        }

        .cover{
            background-color: black;
            height: 100%;
            width: 100%;
            padding: 1em;
            transition: all 1s;
        }

        &:hover .cover{
            transform: rotateY(180deg);
        }

        &:hover .film-cover{
            opacity: 0;
        }

    }

</style>