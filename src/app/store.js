// Isso cria uma loja Redux e também configura automaticamente a extensão Redux DevTools para que você possa inspecionar a loja durante o desenvolvimento.
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})