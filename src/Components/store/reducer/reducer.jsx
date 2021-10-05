import { createSlice} from '@reduxjs/toolkit'
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {apicalls, card, counter, sotuv, counter1, karzina, pay, product1, cleanss} from "../Action/Action";

let delet = ''

const Reducer  = createSlice({
    name:'product',
    initialState:{
        Product:[],
        Product1:[],
        selectProduct:[],
        card:[],
        counter:null,
        loader:true,
        sellModal:false
    },
    reducers:{
        GetFromResponse:(state,action)=>{

        },
        ProductSaved: (state,action)=>{
            console.log(action.payload)
            state.Product1.unshift(action.payload)
            toast.info('товар сохранен')
            Product1()
        },
        SelectProducts:(state,action)=>{
            state.Product = action.payload
        },

        Counter1:(state,action)=>{

            state.card.map((item,index)=>{
                if(item.productId===action.payload.productId){

                    state.card.splice(index,1)
                }

            })
        },

        SaveCard: (state,action)=>{

            state.counter += parseFloat(action.payload.price)
                    const app = {
                                productName:action.payload.productName,
                                imageId:action.payload.imageId,
                                productId: action.payload.id,
                                amount: 1,
                                price: action.payload.price,
                                suma:action.payload.price,
                                description:action.payload.description
                            }
                        state.card.push(app)
         },

        Sotish:(state,action)=> {
            state.sellModal = true
            state.card = []
            state.counter = 0

        },

        EditProduct:(state,action)=>{
            toast.info('товар изменился')
        },

        DeleteProduct:(state,action)=>{
            state.Product = state.Product.filter((item => item.id !== delet))
            toast.info("удалено")
            Product1()
        },
        DeleteKarz:(state,action)=>{
            state.card.map((item,index)=>{
                if(item.productId===action.payload.id){
                    state.counter -= parseFloat(action.payload.price)
                    state.card.splice(index,1)
                }
            })
        },
        Pays:(state,action)=>{
            console.log(action.payload)
            state.card.map((item,index) => {

                if(item.productId===action.payload.productId){
                    state.card[index].amount = parseInt(action.payload.sum)
                    state.card[index].suma = state.card[index].suma  * parseFloat(action.payload.sum)
                }

                if(item.amount === 0){
                    state.card.splice(index,1)
                }
            })


        },
        product1:(state,action)=>{
            state.loader = false
            const  prod = action.payload.sort((a,b)=>{
                if(a.id < b.id) return -1
                if(a.id > b.id) return 1

                return 0

            })
            state.Product1 = prod
            state.loader = true
        },
        CleanCards:(state,action)=>{
            state.card = []
        }
    },
})

export const GetProduct =()=> apicalls({
    url:'/api/v1/product',
    method:'get',
    successtype:'product/GetFromResponse'
})

export const SaveProduct =(data)=> apicalls({
    url:'/api/v1/product',
    method:'POST',
    data,
    successtype:'product/ProductSaved'
})

export const EditProducts =(data)=> apicalls({
    url:'/api/v1/product/' +data.id,
    method:'put',
    data,
    successtype:'product/EditProduct'
})

export const SaveCard =(data)=> card({
    data,
    successtype:'product/SaveCard'
})

export const DeleteProduct =(data)=> {
    console.log(data)
    delet = data
    return   apicalls({
        url:'/api/v1/product/' +data,
        method:'delete',
        successtype:'product/DeleteProduct',
        data
    })
}

export const Counter=(data)=>counter({
    successtype:'product/Counter',
    data
})

export const Counter1=(data)=>counter1({
    successtype:'product/Counter1',
    data
})

export const Sotuv=(data)=>sotuv({
    url:'/api/v1/sale/sold',
    method:'POST',
    data,
    successtype:'product/Sotish'
})

export const DeleteKar=(data)=>karzina({
    successtype:'product/DeleteKarz',
    data
})

export const Pays=(data)=>pay({
    successtype:'product/Pays',
    data
})

export const Product1=(data)=>product1({
    successtype:'product/product1',
    data
})

export const CleansCard=(data)=>cleanss({
    successtype:'product/CleanCards',
    data

})

export default Reducer.reducer
