import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../api/apiSlice'
import authSlice from '../features/auth/authSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    auth: authSlice
  },
  middleware: (getDefaulMiddleware) =>
  getDefaulMiddleware().concat(apiSlice.middleware)

})

export default store