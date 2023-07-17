export default (state, action) =>{
   switch(action.type){
      case 'GET_DATA':
         return {
            ...state,
            storeList:action.payload
         }
      case 'EDIT_DATA':
         return{
            ...state,
            id:action.payload.id,
            name:action.payload.name,
            email:action.payload.email
         }
      case 'RESET_DATA':
         return {
           ...state,
           name:'',
           email:''
         }
   }
}