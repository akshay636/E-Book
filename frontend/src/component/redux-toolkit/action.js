const CAKE_ORDERED='CAKE_ORDERED'

function addBook(){
     return{
        type:CAKE_ORDERED,
        quantity:1
     }
}

const initialState={
    numOfcakes:10,
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
             
                numOfcakes:state.numOfcakes-1
            }
        default:
            return state
    }
}
// (prevState,action)=>newState

