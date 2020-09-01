function GetObject(obj){
    if (document.getElementById) {
        return document.getElementById(obj);
    } else if (document.all) {
        return document.all[obj];
    }
}

function criptografar(){
    
    //var sChar = String.fromCharCode(65);
    //alert("A".charCodeAt(0));
    //alert();

    if(GetObject("texto").value == "" || GetObject("chave").value == ""){
        alert("Texto e Chave são obrigatórios.");
        return false;
    }

    GetObject("texto2").value = "";
    var j = 0;

    for(var i=0; i < GetObject("texto").value.length; i++){
        
        if(GetObject("opcaoC").checked){
            GetObject("texto2").value += String.fromCharCode(
                                GetObject("texto").value.substr(i, 1).charCodeAt(0) + 
                                            GetObject("chave").value.substr(j, 1).charCodeAt(0)
                                 );
        }else{
            GetObject("texto2").value += String.fromCharCode(
                                GetObject("texto").value.substr(i, 1).charCodeAt(0) -
                                            GetObject("chave").value.substr(j, 1).charCodeAt(0)
                                 );
        }
        
        // Incrementa variável para controle da chave
        if((j+1) < GetObject("chave").value.length){
            j++;
        }else{
            j = 0;
        }
    }
    if(GetObject("opcaoC").checked){
        alert("Criptografado com sucesso!");
    }else{
        alert("Descriptografado com sucesso!");
    }
    return false;
}

function copiar(){
    GetObject("texto").value = GetObject("texto2").value;
}