const axios = require(`axios`)

axios.get("https://viacep.com.br/ws/12440470/json/")
.then(function(res){
    const viacep = res.data;

    if(viacep.logradouro){

        console.log("-----------------")
        console.log(`Cep: ${viacep.cep}`);
        console.log("-----------------")
        console.log(`Logradouro: ${viacep.logradouro}`);
        console.log("-----------------")
        console.log(`Bairro: ${viacep.bairro}`);
        console.log("-----------------")
        console.log(`Localidade: ${viacep.localidade}`);
        console.log("-----------------")
        console.log(`Uf: ${viacep.uf}`);
        console.log("-----------------")
        console.log(`Ibge: ${viacep.ibge}`);
        console.log("-----------------")
        console.log(`Gia: ${viacep.gia}`);
        
    
    }

    else {
        console.log("-----------------")
        console.log(`Cep: ${viacep.cep}`);
        console.log("-----------------")
        console.log(`Localidade: ${viacep.localidade}`);
        console.log("-----------------")
        console.log(`Ibge: ${viacep.ibge}`);
        console.log("-----------------")
        console.log(`Gia: ${viacep.gia}`);
    }
    

})