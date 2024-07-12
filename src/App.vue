<script>
import AppHeader from './components/AppHeader.vue'
import AppCardContainer from './components/AppCardContainer.vue'


export default{
    name: 'App',
    components:{
        AppHeader,
        AppCardContainer,
    },

}

</script>

<template>
    <AppHeader/>
    <main>
        <AppCardContainer/>
    </main>
</template>

<style lang="scss">
    @use './styles/general.scss' as *;
    @use './styles/partials/variables' as *;

    body{
        background-color: $main-bg-color;
    }
</style>