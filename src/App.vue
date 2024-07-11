<script>
import AppHeader from './components/AppHeader.vue'
import AppCardContainer from './components/AppCardContainer.vue'

import {store} from './store'
import axios from 'axios'

export default{
    name: 'App',
    components:{
        AppHeader,
        AppCardContainer,
    },

    data(){
        return{
            titoloSezioneFilm: "Film",
            titoloSezioneSerie: "Serie Tv",
            store,
        }
    },

    methods:{
        getFilmsList(){
            let filmUrl = `${store.apiFilm}${store.apiKey}&query=${store.searchWord}`
            console.log(filmUrl);

            axios.get(filmUrl).then(result => {
                console.log(result.data.results);
            })
        },

        getSeriesList(){
            let serieUrl = `${store.apiSerie}${store.apiKey}&query=${store.searchWord}`
            console.log(serieUrl);

            axios.get(serieUrl).then(result => {
                console.log(result.data.results);
            })
        }
    },

    created(){
        this.getFilmsList();
        this.getSeriesList();
    }
}

</script>

<template>
    <AppHeader/>
    <main>
        <AppCardContainer :title="titoloSezioneFilm"/>
        <AppCardContainer :title="titoloSezioneSerie"/>
    </main>
</template>

<style lang="scss">
    @use './styles/general.scss' as *;
    @use './styles/partials/variables' as *;

    body{
        background-color: $main-bg-color;
    }
</style>