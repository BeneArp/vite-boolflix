<script>
    import {store} from '../store'

    export default {
        name: "AppReserch",

        data(){
            return{
                store,
            }
        }
    }

</script>

<template>


    <div>
        <input type="text" placeholder="Serch" v-model="store.searchWord" @keyup.enter="$emit('search')">
        <button @click="$emit('search')">Cerca</button>
    </div>


</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;


    input{
        padding: 0.6em 1.5em;
        border: none;
        border-radius: 15px 0 0 15px;
    }

    button{
        padding: 0.6em 1.5em;
        background-color: $text-color-red;
        color: white;
        border: none;
        border-radius: 0 15px 15px 0;
    }

    @media screen and (max-width: 500px) {
        input{
            padding: 0.6em 1em;
            width: 100px;
        }

        button{
            padding: 0.6em 1em;
        }
        
    }
    
</style>