import { createSlice } from '@reduxjs/toolkit';

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRated:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload;
        },
   
    }

});

export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRated } = movieSlice.actions;
export default movieSlice.reducer;