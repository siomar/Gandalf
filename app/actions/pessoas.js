export function addPessoa(nome){
    return {
        type: "ASYNC_ADD_PESSOA",
        nome,
    }
}

export function removePessoa(){
    return {
        type: "REMOVE_PESSOA"
    }
}