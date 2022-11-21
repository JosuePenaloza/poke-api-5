import { configureStore } from '@reduxjs/toolkit'
import numberPageSlice from './slices/numberPage.slice'
import userSlice from './slices/user.slice'

export default configureStore({
    reducer: {
        user: userSlice,
        numberPage: numberPageSlice
	}
})