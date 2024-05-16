
import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import userSlice from "./user/User.reducer"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'



const persistConfig = {
    key: 'root',
    storage,
}




const persistedReducerUser = persistReducer(persistConfig, userSlice)


const store = configureStore({
    reducer: {
        userState: persistedReducerUser,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})


export default store;
export const persistor = persistStore(store)