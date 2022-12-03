import {configureStore} from '@reduxjs/toolkit'
import { orderBurgerReducer } from './reducer/orderBurgerReducer'

export const store = configureStore ({
    reducer: {
        orderBurgerReducer
    }
})