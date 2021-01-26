

let size =0;

function generateSoal(nilaiMatrix){

  size = nilaiMatrix;
  createTable(nilaiMatrix,"matrix1");
  createTable(nilaiMatrix,"matrix2");


}


function createTable(sizeMatrix,namaMatrix){
 let tableHtml = "";
 
 if(namaMatrix ==="matrix2"){
     
     tableHtml +=`Ditambah matrix2<br>`;
     
  
 
 }
   
  tableHtml += "<table>";

 for(let a = 0; a < sizeMatrix;a++){
   tableHtml = tableHtml + "<tr>"
   
    for(let b = 0; b < sizeMatrix;b++){
     
        tableHtml = tableHtml + `<input type="text" id="${namaMatrix+a+b}" />`;
    
    }
   tableHtml = tableHtml +"</tr>" 
   
   
 }
 tableHtml += "</table>";
 
 
 if(namaMatrix ==="matrix2"){    
    tableHtml +=`<Button onclick="calculation()">Tambahkan</Button>`;
 
}
   document.getElementById(namaMatrix).innerHTML= tableHtml;

}

function calculation(){

    let tableHtml = "";
      
     tableHtml += "<table>";
  
    for(let a = 0; a < size;a++){
      tableHtml = tableHtml + "<tr>"
       
       for(let b = 0; b < size;b++){
         let nilaiTambah = parseInt(document.getElementById("matrix1"+a+b).value) +  parseInt(document.getElementById("matrix2"+a+b).value) ;
           tableHtml = tableHtml + `<input type="text" value="${nilaiTambah}" />`;
       
       }
      tableHtml = tableHtml +"</tr>" 
      
      
    }
    tableHtml += "</table>";
    
    document.getElementById("matrixHasil").innerHTML= tableHtml;



}
