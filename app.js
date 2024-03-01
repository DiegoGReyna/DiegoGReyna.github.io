/* /([^a-zñ\d\s])g/ */

let TexAreaEbcrypted= document.querySelector(".TextArea-encryptedText");
let BoxTexAreaEbcrypted= document.querySelector(".box-TextArea");
let MessageEbcrypted= document.querySelector(".box-Messages");
let CopyButton= document.querySelector(".boxOne-button");
let ButtonAndLabel=  document.querySelector(".box-OneButtonAndLabel");
let textArea=document.getElementById("IdTextToEncrypt");


function getTextEncrypt(){
    let pattern = /([^a-zñ!¡?¿\d\s])/g;
    let textArea=document.getElementById("IdTextToEncrypt").value;
    let valid=pattern.test(textArea);
    if(valid===false){
        if(textArea!=''){
            setDisplayMode(true)
            let encryptedText = encryptText(textArea);
            Swal.fire({
            
                title: '¡Encriptación exitosa!',
                text: 'El texto digitado se a encriptado correctamente!',
                icon: 'success',
                confirmButtonText: 'Continuar',
                heightAuto: false,
                customClass: 'swal-alert',
              });

            TexAreaEbcrypted.value=encryptedText;

           

        }else{
            
            console.log("Error")
            setDisplayMode(false);
            Swal.fire({
            
                title: '¡Error!',
                text: 'Por favor,ingrese texto antes',
                icon: 'error',
                confirmButtonText: 'Continuar',
                heightAuto: false,
                customClass: 'swal-alert',
              });
        }
    }else{
        setDisplayMode(false);
        console.log("Error")
        setDisplayMode(false);
        Swal.fire({
            
            title: '¡Error!',
            text: 'Porfavor evite, acentos y caracteres especiales.',
            icon: 'error',
            confirmButtonText: 'Continuar',
            heightAuto: false,
            customClass: 'swal-alert',
          });
    }
}
function encryptText(data){
    let result = data.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return result
}
function getdecryptText(){
    let pattern = /([^a-zñ!¡?¿\d\s])/g;
    let textArea=document.getElementById("IdTextToEncrypt").value;
    let valid=pattern.test(textArea);
    if(valid===false){
        if(textArea!=''){
            setDisplayMode(true)
            let dencryptedText = decryptText(textArea);
            Swal.fire({
            
                title: '¡Desencriptación exitosa!',
                text: 'El texto se ha desencriptado correctamente',
                icon: 'success',
                confirmButtonText: 'Continuar',
                heightAuto: false,
                customClass: 'swal-alert',
              });
            TexAreaEbcrypted.value=dencryptedText;
        }else{
            Swal.fire({
            
                title: '¡Error!',
                text: 'Ingrese texto antes de encriptar',
                icon: 'error',
                confirmButtonText: 'Continuar',
                heightAuto: false,
                customClass: 'swal-alert',
              });
            console.log("Error")
            setDisplayMode(false);
        }
    }else{

          Swal.fire({
            
            title: '¡Error!',
            text: 'Porfavor no uses letras mayusculas, acentos o caracteres especiales.',
            icon: 'error',
            confirmButtonText: 'Continuar',
            heightAuto: false,
            customClass: 'swal-alert',
          });

        setDisplayMode(false);
    }
}
function decryptText(data){
    let result = data.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return result
}
function setDisplayMode(mode){
    if(mode){
        TexAreaEbcrypted.style.display="block";
        BoxTexAreaEbcrypted.style.display="flex";
        CopyButton.style.visibility = 'visible'
        ButtonAndLabel.style.visibility = 'visible'
        ButtonAndLabel.style.display='flex'
        MessageEbcrypted.style.display="none";    
    }else{
        CopyButton.style.visibility = 'hidden';
        ButtonAndLabel.style.visibility = 'hidden'
        ButtonAndLabel.style.display='none'
        console.log("Debe de inresar texto antes de incriptar");
        TexAreaEbcrypted.style.display="none";
        MessageEbcrypted.style.display="flex";
        BoxTexAreaEbcrypted.style.display="none";
    }
}
function copyText(){
 navigator.clipboard.writeText(TexAreaEbcrypted.value);
 Swal.fire({
            
    title: '¡Texto copiado!',
    text: 'El texto ha sido copiado correctamente',
    icon: 'success',
    confirmButtonText: 'Continuar',
    heightAuto: false,
    customClass: 'swal-alert',
  });
    // alert("Copied the text: " + TexAreaEbcrypted.value)
}


