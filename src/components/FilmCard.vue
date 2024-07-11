<script>
    export default {
        name: "FilmCard",
    }

</script>

<template>


    <div class="card">
        
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
        // debug
        height: 300px;
    }
</style>