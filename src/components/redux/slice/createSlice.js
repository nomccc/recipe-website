import { createSlice } from "@reduxjs/toolkit"

// inisialisasi isi awal dari list product
const initialState = []

// bikin slice disini. slice tuh kumpulan fungsi
const recipeSlice = createSlice({
  name: 'recipes',
  reducers: {
    addRecipe: {
      reducer(state, action){
        state.push(action.payload);
      }
    },
    deleteRecipe: {
      reducer(state, action){
        const recipeId = action.payload
        state = state.filter((d)=> d.id != productId)
      }
    }
  }
}
  
)

export const {addPRecipe, deleteRecipe} = recipeSlice.actions;

export default recipeSlice.reducer;