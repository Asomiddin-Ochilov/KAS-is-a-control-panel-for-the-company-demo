import axios from 'axios'
import {toast} from "react-toastify";
const api =({dispatch}) => (next) => (action) => {
    if(action.type!=='api/apicalls'){
        next(action)
        return
    }
    next(action)

    const {url,method,data,successtype} = action.payload
    console.log(url)
    console.log(data)
    axios({
        baseURL:"https://store-management-backend-app.herokuapp.com",
        url,
        method,
        data
    }).then(res=>{
        console.log(res.data)
        dispatch({
            type:successtype,
            payload:res.data

        })

    }).catch(err=>{
      toast.error('база данных не работает')
    })
}
export default api

export const Card = ({dispatch})=>(next)=>(action)=>{
    const {data,successtype} = action.payload
    if(action.type ==='api/card'){
        next(action)
        dispatch({
            type:successtype,
            payload:data
        })

        return
    }
    next(action)
}

export const count = ({dispatch})=>(next)=>(action)=>{
    const {successtype,data} = action.payload
    if(action.type === 'api/counter'){
        next(action);
        dispatch({
            type:successtype,
            payload:data
        });

        return
    }
    next(action);
};
export const count1 = ({dispatch})=>(next)=>(action)=>{
    const {successtype,data} = action.payload
    if(action.type === 'api/counter1'){
        next(action);
        dispatch({
            type:successtype,
            payload:data
        });

        return
    }
    next(action);
};

export const SelProduct = ({dispatch})=>(next)=>(action)=>{
    if (action.type === 'api/sotuv'){
        next(action);
        const {url,method,successtype,data} = action.payload
        console.log(data)
        axios({
            baseURL:"https://store-management-backend-app.herokuapp.com",
            url,
            method,
            data
        }).then(res=>{
            console.log(res.data)
            dispatch({
                type:successtype,
                payload:res.data
            })

        }).catch(err=>{
            toast.error('база данных не работает')
        })

    }
    next(action);
};

export const DeleteKar = ({dispatch})=>(next)=>(action)=>{
    const {data,successtype} = action.payload
    if (action.type === 'api/karzina'){
        next(action);

        dispatch({
            type:successtype,
            payload:data
        });
    }
    next(action);
};
export const Pay = ({dispatch})=>(next)=>(action)=>{
    const {data,successtype} = action.payload
    if (action.type === 'api/pay'){
        next(action);
        dispatch({
            type:successtype,
            payload:data
        });
    }
    next(action);
};
export const Product1 = ({dispatch})=>(next)=>(action)=>{
    const {data,successtype} = action.payload
    if (action.type === 'api/product'){
        next(action);
        dispatch({
            type:successtype,
            payload:data
        });
    }
    next(action);
};

export const Cleans = ({dispatch})=>(next)=>(action)=>{
    const {data,successtype} = action.payload
    if (action.type === 'api/clean'){
        next(action);
        dispatch({
            type:successtype,
            payload:data

        });
    }
    next(action);
};