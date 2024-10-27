import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    productData:[],
    userInfo: null,
};

export const ShoopingSlice = createSlice({
    name:"shooping",
    initialState,

           reducers:   {

            addToCart: (state, action) => {
                const item = state.productData.find(
                    (item) => item._id === action.payload._id 
                );
    
                if(item){
                    item.quantity += action.payload.quantity
                }else{
                    state.productData.push(action.payload)
                }
            },
      
    

    deletItem:(state,action)=>{
        state.productData = state.productData.filter(
            (item)=> item._id !== action.payload
        );
    },

    reserCart:(state)=>{
        state.productData =[];
    },
    increamentQuantity:(state,action)=>{
        const item = state.productData.find(
            (item)=> item._id === action.payload._id
        );
        if(item){
            item.quantity++;
        }
    },
    decreamentQuantity:(state,action)=>{
        const item = state.productData.find(
            (item)=> item._id === action.payload._id
        );
        if(item.quantity === 1){
            item.quantity = 1;
        }else{
            item.quantity--;
        }
    },

    addUser: (state, action) => {
        state.userInfo = action.payload
    },

    removeUser: (state) => {
        state.userInfo = null
    }
},
});

export const 
{addToCart,
    deletItem,
    reserCart
    ,increamentQuantity
    ,decreamentQuantity
    ,addUser
    ,removeUser} =
     ShoopingSlice.actions;
export default ShoopingSlice.reducer;
