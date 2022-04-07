let varchartotal = []
let sumavarchar=0;
let chartotal = []
let sumarchar=0;
let resultados=document.getElementById("resultados");
let int=document.getElementById("int");
let float=document.getElementById("float");
let date=document.getElementById("date");
let time=document.getElementById("time");
let char=document.getElementById("char");
let varchar=document.getElementById("varchar");
let bit=document.getElementById("bit");
let agregarvarchar=document.getElementById("agregarvarchar");
let agregarchar=document.getElementById("agregarchar");
let prueba=document.getElementById("prueba");
let Variable_Data_Size=0;
//calculos
let NumRows=document.getElementById("NumRows");
let Num_Cols=document.getElementById("Num_Cols");
let Fixed_Data_Size;
function Calcular(){
    Fixed_Data_Size=(int.value*4)+(float.value*8)+(date.value*3)+(time.value*5)+(bit.value*1)+sumarchar;
let Num_Variable_Cols=varchartotal.length; console.log(Num_Variable_Cols);
let Max_Var_Size=sumavarchar; console.log(Max_Var_Size);
let NULL_Bitmap=Math.trunc(2+(parseInt(Num_Cols.value)+7)/8); console.log(NULL_Bitmap);
if(Num_Variable_Cols>0){
     Variable_Data_Size=(2+(Num_Variable_Cols*2)+Max_Var_Size); console.log(Variable_Data_Size);

}
else{
     Variable_Data_Size=0; console.log(Variable_Data_Size);
}

let Row_Size=Fixed_Data_Size+Variable_Data_Size+NULL_Bitmap+4; console.log(Row_Size)

let Table_Size=Row_Size*NumRows.value; console.log(Table_Size);

let Rows_Per_Page=Math.trunc(8096/(Row_Size+2)); console.log(Rows_Per_Page);

let Num_Pages=Math.ceil(NumRows.value/Rows_Per_Page); console.log(Num_Pages);

let total=8192*Num_Pages;
console.log(total);
console.log(total/1024);
let totalkb=total/1024;
resultados.innerHTML=`
<table class="table">

        <tr>
      
          <td>Fixed_Data_Size</td>
      
          <td> ${Fixed_Data_Size}</td>
      
        </tr>
        <tr>
      
        <td>Num_Var_Cols </td>
    
        <td> ${Num_Variable_Cols}</td>
    
      </tr>

      <tr>
      <td>Max_Var_Size</td>
    
      <td> ${Max_Var_Size}</td>
  
    </tr>

    <tr>
    <td>NULL_Bitmap</td>
    
    <td> ${NULL_Bitmap}</td>

  </tr>

  <tr>
  <td>Variable_Data_Size</td>
  
  <td> ${Variable_Data_Size}</td>

</tr>

<tr>
  <td>Row_Size</td>
  
  <td> ${Row_Size}</td>

</tr>

<tr>
  <td>Table_Size</td>
  
  <td> ${Table_Size}</td>

</tr>

<tr>
  <td>Rows_Per_Page</td>
  
  <td> ${Rows_Per_Page}</td>

</tr>

<tr>
  <td>Num_Pages</td>
  
  <td> ${Num_Pages}</td>

</tr>
<tr>
  <td>Resultado</td>
  
  <td> ${total}</td>
 
 
</tr>

<tr>
  <td>Resultado en kb</td>
 
  <td> ${totalkb}</td>
</tr>

      </table>






`;
 }












function llenarvarchar(){
   
  
    varchartotal.push(varchar.value);  
    swal("Varchar Agregado", "Puedes continuar agregando valores", "success");
 sumavarchar+= parseInt(varchar.value);
}

function llenarchar(){
   
  
  chartotal.push(char.value);  
  swal("char Agregado", "Puedes continuar agregando valores", "success");
sumarchar+= parseInt(char.value);
}






prueba.addEventListener("click",Calcular);
agregarvarchar.addEventListener("click",llenarvarchar);
agregarchar.addEventListener("click",llenarchar);
