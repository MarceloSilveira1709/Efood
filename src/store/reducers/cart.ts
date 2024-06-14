import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import ProdutoCardapio from '../../components/ProdutoCardapio'
import ModalProduto from '../../components/ModalProduto'
import { Cardapio } from '../../pages/Cardapios'

type CartState = {
  items: Cardapio []
}

const initialState : CartState = {
  items: []
}

const cartSlice = createSlice ({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload)
    }
  }
})

cartSlice.actions.add

export const {add} = cartSlice.actions
export default cartSlice.reducer
