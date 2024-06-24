import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Menu } from '../../pages/Menus'

type CartState = {
  items: Menu[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice ({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const cardapio = state.items.find((item) => item.id === action.payload.id);
    if (!cardapio) {
      state.items.push(action.payload)
    } else {
        alert ( 'O Prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<Number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload )
    },
    open: (state) => {
      state.isOpen  = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

cartSlice.actions.add

export const {add, open, close, remove} = cartSlice.actions

export default cartSlice.reducer
