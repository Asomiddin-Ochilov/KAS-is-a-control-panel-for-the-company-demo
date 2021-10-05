
import {configureStore} from '@reduxjs/toolkit'
import Reducer from './reducer/reducer'
import api,{Card,count,
    SelProduct,count1,
    DeleteKar,Pay,
    Product1,Cleans} from "./Middleware/ApiCalls";
export default configureStore({
  reducer:{
      Reducer
  },
  middleware:[api,Card,count,SelProduct,count1,DeleteKar,Pay,Product1,Cleans]
})