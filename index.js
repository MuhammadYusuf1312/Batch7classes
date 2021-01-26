
let nilai = 0 ;
function generateSoal(x){
   nilai = x;
   createMatrix(nilai,"matrix1");
   createMatrix(nilai,"matrix2");
   document.getElementById("matrixHasil").innerHTML= "";

}

function calculate(){

    let text = `<table>`
    for(let a = 0; a < nilai;a++){
    text = text +"<tr>";
        for(let b = 0; b < nilai;b++){
          let nameField1 = "matrix1"+a+b;
          let nameField2 = "matrix2"+a+b;
          console.log(document.getElementById(nameField1).text);
          let hasil =  parseInt(document.getElementById(nameField1).value) +  parseInt(document.getElementById(nameField2).value);
            text = text +`<th><input type="text" value = "${hasil}" />`;
        
        }
        text = text +"</tr>"
    }
    text = text +"</table>"
  
    document.getElementById("matrixHasil").innerHTML= text;


}


function createMatrix(nilai,nama){
  
  let text = `<p>Masukan nilai ${nama} </p> <table>`
    for(let a = 0; a < nilai;a++){
    text = text +"<tr>";
        for(let b = 0; b < nilai;b++){
          
        text = text +`<th><input type="text" id="${nama+a+b}" />`;
        
        }text = text +"</tr>"

    }
    text = text +"</table>"
    if(nama==="matrix2"){
      text= text+ `<p> Hitung tambah <button onclick="calculate()">Tambah</button></p>`;
    }
    document.getElementById(nama).innerHTML= text;

}
