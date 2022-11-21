import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const numberPageSlice = createSlice({
		name: 'numberPage',
    initialState: 8,
    reducers: {
        
        pageNumber: (state, action) => {
            const number = action.payload;
            return number;
        }
    }
});

export const { pageNumber } = numberPageSlice.actions;

export default numberPageSlice.reducer;