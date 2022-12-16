import { ALL_BOOKS,DELETE_BOOK,ADD_BOOK } from "../actions/constant";

const intialState={
    books:[]
}

const BookReducer=(state=(intialState,{payload})=>{
   switch(type){
    case ALL_BOOKS:
        return {...state,books:payload}
    case ADD_BOOK:
        return{...state,books:[payload,...state.books]}
    case DELETE_BOOK:
        return{...state,books:state.books.filter((val)=>val._id!==payload.id)}
    default:
        return state;
   }
   
})

export default BookReducer;

