import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        quantity: 0,
        total:0,
    },
    reducers: {
        addProduct: (state, action) => {
            const itemInCart = state.products.find((item) => item._id === action.payload._id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.quantity +=1;
              state.products.push(action.payload);
              state.total += action.payload.price * action.payload.quantity;  
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find((item) => item._id === action.payload);
            item.quantity++;
            state.total += item.price;// 2*10-10 = 
        },
        decrementQuantity: (state, action) => {
            const item = state.products.find((item) => item._id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1;
              
            } else {
              item.quantity--;
                state.total -= item.price;
            }
          },
          removeItem: (state, action) => {
            const itemToRemove = state.products.find(item=> action.payload._id === item._id)
            const removeItem = state.products.filter((item) =>action.payload._id !== item._id);
            let newtotal = state.total-(itemToRemove.price * itemToRemove.quantity);
            state.products = removeItem;
            state.total = newtotal;
            let newQnt = state.quantity -1;
            state.quantity = newQnt;
          },
        
    },
});

export const {addProduct, incrementQuantity,decrementQuantity,removeItem} = cartSlice.actions;
export default cartSlice.reducer;


// addProduct: (state, action)=>{
//     state.quantity += 1; //cart quantity
//     state.products.push(action.payload)
//     state.total += action.payload.price * action.payload.quantity;// product quantity
// },
// removeFromCart: (state, action)=>{
//     const nextcartItems =  state.products.filter(cartItem=> cartItem.id !== action.payload.id) 
//     state.products = nextcartItems;
// },
