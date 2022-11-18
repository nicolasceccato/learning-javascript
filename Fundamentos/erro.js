function tratarErroELancar(erro){
    throw new Error ("Erro ja identificado")
    throw {
        nome:erro.nome,
        msg: erro.msg
    }
}
function imprimirNomeGritado (obj){
    try{
        console.log(obj.nome.toUpperCase() + "!!!")
    } catch (e){
        tratarErroELancar(e)
    }finally{
        console.log("Final")
    }
    }
    
const obj = { nome: "roberto"}
imprimirNomeGritado(obj)