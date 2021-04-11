function weather(){

  var request=new XMLHttpRequest();
  var city=document.getElementById("city").value;
  var url=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=24814ed70b00b3a015c117650077bf86`
  console.log(url)

  request.open('GET',url,true)
  request.send()

  request.onload=function(){
      var result=JSON.parse(this.response)
      var table=document.createElement("TABLE")
      table.border="1"
      
      var row=table.insertRow(-1)
      var cella1=row.insertCell(-1)
      var cella2=row.insertCell(-1)
      var cella3=row.insertCell(-1)
      var cella4=row.insertCell(-1)
      cella1.innerHTML="<h5>Date </h5>"
      cella2.innerHTML="<h5>Time </h5>"
      cella3.innerHTML="<h5>Min Temperature</h5>"
      cella4.innerHTML="<h5>Max Temperature</h5>"
  
      result.list.forEach((day) => {
          var row1=table.insertRow(-1);
           var cell1=row1.insertCell(-1)
           var cell2=row1.insertCell(-1)
           var cell3=row1.insertCell(-1)
           var cell4=row1.insertCell(-1)
           var str=day.dt_txt;
           console.log(str);
           var d=str.split(" ");
          cell1.innerHTML=d[0];
          cell2.innerHTML=d[1];
          cell3.innerHTML=day.main.temp_min
          cell4.innerHTML=day.main.temp_max
          
      });
      var Dtable=document.getElementById("temptable")
      Dtable.append(table);
      
  
  }
  }