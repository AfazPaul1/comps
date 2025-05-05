import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});

// const startingState = store.getState()
// console.log(JSON.stringify(startingState))

// store.dispatch({
//      type:'song/addSong',
//      payload: 'new song'
//  })

// console.log(store)

// const finalState = store.getState()
// console.log(JSON.stringify(finalState))

export { store };
export const { addSong, removeSong } = songSlice.actions;
