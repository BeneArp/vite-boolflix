<script>
import AppReserch from './AppReserch.vue';

    export default {
        name: "AppHeader",
        components:{
            AppReserch,
        }
    }

</script>

<template>

    <header>
        <div class="container">
            <div>
                <h1>BOOLFLIX</h1>
            </div>

            <AppReserch/>

        </div>
    </header>    

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    header{
        background-color: $header-bg-color
    }

    .container{
        @include flex;
        padding: 2em 1em;

        h1{
            color: $text-color-red;
            font-size: 35px;
        }
    }
</style>