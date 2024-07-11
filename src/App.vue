<script>
import AppHeader from './components/AppHeader.vue'

export default{
    name: 'App',
    components:{
        AppHeader,
    }
}

</script>

<template>
    <AppHeader/>
</template>

<style lang="scss">
    @use './styles/general.scss' as *;
    @use './styles/partials/variables' as *;

    body{
        background-color: $main-bg-color;
    }
</style>