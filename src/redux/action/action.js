export const addItem=(payload)=>{
    return{
        type:'ADD',
        payload
    }
}

export const deleteItem=(payload)=>{
    return{
        type:'DELETE',
        payload
    }
}
export const editItem=(payload)=>{
    return{
        type:'EDIT',
        payload
    }
}