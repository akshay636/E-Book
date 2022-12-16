import { ADD_BOOK, DELETE_BOOK,ALL_BOOKS } from "./constant"
export const AddBook=(data)=>(dispatch)=>{
   dispatch({
    type:ADD_BOOK,
    payload:data
   })
}

export const GetBooks=(data)=>(dispatch)=>{
    dispatch({
        type:ALL_BOOKS,
        payload:data
    })
}

export const DeleteBook=(data)=>(dispatch)=>{
    dispatch({
        type:DELETE_BOOK,
        payload:data
    })
}
