

var express = require('express')
var body_parser = require('body-parser');
var http = require('http')
var app = express()
app.use(body_parser.urlencoded({ extended: true }));

var arreglo = [1, 2, 3, [1, 2, 3], 4, 5];   ////si deseas probar con otra matriz debes cambiar el valor a esta variable 
                                            //siguiendo esta estructura 
var head = ` <head>
<script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js" type="text/javascript"></script>'

  <style type="text/css">

   html,
  body,
   #container {
     width: 100%;
     height: 100%;
    margin: 0;
    padding: 0;
   }  
   .container2 {
    margin: 0 0 1rem;
    
    display: flex;
     align-items: start;
  }  
  .center-h {
    justify-content: center;
  }     
  
   .cuadro_izquierda
   
   {width: 30%;
    justify-content: center;
    background-color:transparent;
        text-align:center;
       margin: 20px
   }
   .cuadro_centro
   {
     width: 30%;
     justify-content: center;
     background-color:transparent;
        text-align:center;
       margin: 20px
   }
   .cuadro_derecha
   {
     width: 30%;
     justify-content: center;
     background-color:transparent;
        text-align:center;
       margin: 20px

   }
</style>
</head>`;

var container2 = `  <div class="container2">
<div class="cuadro_izquierda">
<label for="categoria">Categoria: </label>
<select  class="cuadro_izquierda" id="selectC" onclick="repintar()">
     <option value = "A" selected> A</option>
     <option value = "B">B</option>
   </select>
   </div>
<div class="cuadro_centro">
<label for="producto">Producto: </label>
 <select class="cuadro_centro" id="selectP" onclick="repintar()">
 <option value = "A" selected> A</option>
 <option value = "B">B</option>
   </select>
   </div>
<div class="cuadro_derecha">
<label for="marca">Marca: </label>
 <select class="cuadro_derecha" id="selectM" onclick="repintar()">
 <option value = "A" selected> A</option>
 <option value = "B">B</option>
   </select>     
  </div></div>
  <br>`;
var funcionesScripts = ` <script>
  var data=
  [["Enero", "20"],
  ["Febrero", "30"],
  ["Marzo", "50"],
 ["Abril", "40"],
  ["Mayo", "10"],
  ["Junio", "200"],
  ["Julio", "43"],
  ["Agosto", "88"],
  ["Septiembre", "789"],
  ["Octubre", "5"],
  ["Noviembre", "0"],
  ["Diciembre", "77"]];
  var chart = anychart.column();
  chart.animation(true);

        chart.title("Sales By Month for:");
  
        var series = chart.column(data);
  
        series.tooltip().titleFormat("{%X}");
  
       series
          .tooltip()
        .position("center-top")
          .anchor("center-bottom")
         .offsetX(0)
         .offsetY(5);
  
       chart.yScale().minimum(0);
  
       

        chart.tooltip().positionMode("point");
        chart.interactivity().hoverMode("by-x");
  
        chart.xAxis().title("Ventas");
        chart.yAxis().title("Ventas");
  
        chart.container("container");
  anychart.onDocumentReady(function () { 
  
        chart.draw();
      });
    
      function repintar() {

          var selectC=document.getElementById("selectC");
          var cat = selectC.options[selectC.selectedIndex].value;
          var selectP=document.getElementById("selectP");
          var prod = selectP.options[selectP.selectedIndex].value;
          var selectM=document.getElementById("selectM");
          var marca = selectM.options[selectM.selectedIndex].value;
      
      
         if(cat=="A"&& prod=="A"&& marca=="A"){
          data=
              [["Enero", "20"],
              ["Febrero", "30"],
              ["Marzo", "50"],
              ["Abril", "40"],
              ["Mayo", "10"],
              ["Junio", "200"],
              ["Julio", "43"],
              ["Agosto", "88"],
              ["Septiembre", "789"],
              ["Octubre", "5"],
              ["Noviembre", "0"],
              ["Diciembre", "77"]];                
              chart.data(data); 
         }
         else{
          if(cat=="A"&& prod=="A"&& marca=="B"){
              data=
                  [["Enero", "120"],
                  ["Febrero", "130"],
                  ["Marzo", "150"],
                  ["Abril", "140"],
                  ["Mayo", "110"],
                  ["Junio", "100"],
                  ["Julio", "143"],
                  ["Agosto", "188"],
                  ["Septiembre", "189"],
                  ["Octubre", "15"],
                  ["Noviembre", "10"],
                  ["Diciembre", "17"]];                
                  chart.data(data); 
             }
             else{
              if(cat=="A"&& prod=="B"&& marca=="A"){
                  data=
                      [["Enero", "220"],
                      ["Febrero", "230"],
                      ["Marzo", "250"],
                      ["Abril", "240"],
                      ["Mayo", "210"],
                      ["Junio", "200"],
                      ["Julio", "243"],
                      ["Agosto", "288"],
                      ["Septiembre", "289"],
                      ["Octubre", "25"],
                      ["Noviembre", "20"],
                      ["Diciembre", "277"]];                
                      chart.data(data); 
                 }
                 else{
                  if(cat=="A"&& prod=="B"&& marca=="B"){
                      data=
                          [["Enero", "320"],
                          ["Febrero", "330"],
                          ["Marzo", "350"],
                          ["Abril", "340"],
                          ["Mayo", "310"],
                          ["Junio", "300"],
                          ["Julio", "343"],
                          ["Agosto", "388"],
                          ["Septiembre", "389"],
                          ["Octubre", "35"],
                          ["Noviembre", "30"],
                          ["Diciembre", "377"]];                
                          chart.data(data); 
                     }
                     else{
                      if(cat=="B"&& prod=="A"&& marca=="A"){
                          data=
                              [["Enero", "420"],
                              ["Febrero", "430"],
                              ["Marzo", "450"],
                              ["Abril", "440"],
                              ["Mayo", "410"],
                              ["Junio", "400"],
                              ["Julio", "443"],
                              ["Agosto", "488"],
                              ["Septiembre", "489"],
                              ["Octubre", "45"],
                              ["Noviembre", "40"],
                              ["Diciembre", "477"]];                
                              chart.data(data); 
                         }
                         else{
                          if(cat=="B"&& prod=="A"&& marca=="B"){
                              data=
                                  [["Enero", "520"],
                                  ["Febrero", "530"],
                                  ["Marzo", "550"],
                                  ["Abril", "540"],
                                  ["Mayo", "510"],
                                  ["Junio", "500"],
                                  ["Julio", "543"],
                                  ["Agosto", "588"],
                                  ["Septiembre", "589"],
                                  ["Octubre", "55"],
                                  ["Noviembre", "50"],
                                  ["Diciembre", "57"]];                
                                  chart.data(data); 
                                         
                             }
                             else{
                              if(cat=="B"&& prod=="B"&& marca=="A"){
                                  data=
                                      [["Enero", "620"],
                                      ["Febrero", "630"],
                                      ["Marzo", "650"],
                                      ["Abril", "640"],
                                      ["Mayo", "610"],
                                      ["Junio", "600"],
                                      ["Julio", "643"],
                                      ["Agosto", "688"],
                                      ["Septiembre", "689"],
                                      ["Octubre", "65"],
                                      ["Noviembre", "60"],
                                      ["Diciembre", "677"]];                
                                      chart.data(data); 
                                              
                                 }
                                 else{
                                  if(cat=="B"&& prod=="B"&& marca=="B"){
                                      data=
                                          [["Enero", "720"],
                                          ["Febrero", "730"],
                                          ["Marzo", "70"],
                                          ["Abril", "740"],
                                          ["Mayo", "710"],
                                          ["Junio", "700"],
                                          ["Julio", "743"],
                                          ["Agosto", "788"],
                                          ["Septiembre", "789"],
                                          ["Octubre", "75"],
                                          ["Noviembre", "70"],
                                          ["Diciembre", "777"]];                
                                          chart.data(data);                                                       
                                     }
                                 }
                             }
                         }
                     }
                 }
                 
             }
         }

         
         
        }

  </script>`;
app.get('/', function (req, res) {

    res.send(
        `   <html>${head}
   
    <body>
   <form method="post" action="/sumaarreglo">
   ${container2}
   <div class="container2"><p class="cuadro_centro">${'[1, 2, 3, [1, 2, 3], 4, 5]'}  </p>      
   <input class="cuadro_derecha" type="submit" value="Calcular suma"/></div>
    <div id="container"></div>
   
   </form>
      
   ${funcionesScripts}
    
    
    </body>
    </html>`
    );
});





function sumafuncion(n) {
    var res = 0;
    for (let i = 0; i < n.length; i++) {
        if (Array.isArray(n[i])) {
            res = res + sumafuncion(n[i]);
        }
        else {
            res = res + n[i];
        }

    } return res;
}

app.post('/sumaarreglo', (req, res) => {
    
    var result = sumafuncion(arreglo);
    res.send(
        `   <html>${head}      
       <body>
      <form method="post" action="/sumaarreglo">
      ${container2} 
      <div class="container2"><p class="cuadro_centro">${result}  </p>      
        <input class="cuadro_derecha" type="submit" value="Suma calculada"/></div>
      <div id="container"></div>      
      </form>         
      ${funcionesScripts}       
       </body>
       </html>`
    );
})

http.createServer(app).listen(8001, () => {
    console.log('Server started at http://localhost:8001');
});