import {reactive} from 'vue'

export const store = reactive({
    filmList:[],
    serieList:[],
    apiKey: "api_key=f960fe04266e9ffe3385b637d92f14f7",
    apiFilm:"https://api.themoviedb.org/3/search/movie?",
    searchWord: '',
});

