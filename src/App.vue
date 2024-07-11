<script>
import AppHeader from './components/AppHeader.vue'
import AppCardContainer from './components/AppCardContainer.vue'

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

            }
        },

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