var panel1={
  Type:"", 
  Size:"",
  Spacing:"",
  Direction:"",
  Color:"",
};

function readdata(){
    return"Copy and Paste everything in brackets into the form below to submit a request<br> [ Panel Type: "+ 
      panel1.Type +
      ", " +
      "Sleeper Size: "+
      panel1.Size+
      ", "+
      "Light Spacing:  " +
      panel1.Spacing+
      ", "+
      "Light Direction: "+ 
      panel1.Direction+
      ", " +
      "Light Color: "+ 
      panel1.Color+
      " ]";
  }

function checkOut() {
  panel1.Type=document.getElementById("PanelInput1").value;
  panel1.Size=document.getElementById("PanelInput2").value;
  panel1.Spacing=document.getElementById("PanelInput3").value;
  panel1.Direction=document.getElementById("PanelInput4").value;
  panel1.Color=document.getElementById("PanelInput5").value;
 // alert("Copy and Paste everything in brackets into the form below to submit a request [ Panel Build ="+ panel1.Type + " " + panel1.Size + " " + panel1.Spacing + " " + panel1.Direction + " " + panel1.Color+" ]");
  document.getElementById("panel1out").innerHTML=readdata();
  
} 


function alert1(){
    alert("Error \r\n\r\nA random error has occured \r\n\r\nbvdf78dxf4g4dvf541df \r\n\r\nyou aren't expected to understand this")
}