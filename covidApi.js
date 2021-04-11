function getCovidStats(){

  var request=new XMLHttpRequest();
  var country=document.getElementById("country").value;
  var url= `https://api.covid19api.com/live/country/${country}`;
  
  console.log(url)

  request.open('GET',url,true);
  request.send(); 
  
  
  request.onload=function(){
      var table=document.createElement("TABLE")
      table.border="1"
  
      var row=table.insertRow(-1)
      var cellH1=row.insertCell(-1)
      var cellH2=row.insertCell(-1)
      var cellH3=row.insertCell(-1)
      var cellH4=row.insertCell(-1)
      var cellH5=row.insertCell(-1)
      cellH1.innerHTML="PROVINCE"
      cellH2.innerHTML="CONFIRMED"
      cellH3.innerHTML="RECOVERED"
      cellH4.innerHTML="DEATHS"
      cellH5.innerHTML="ACTIVE"
      var result=JSON.parse(this.response)
      console.log(result);
      result.forEach((day) => {
           var row1=table.insertRow(-1);
           var cell1=row1.insertCell(-1)
           var cell2=row1.insertCell(-1)
           var cell3=row1.insertCell(-1)
           var cell4=row1.insertCell(-1)
           var cell5=row1.insertCell(-1);
          cell1.innerHTML=day.Province;
          cell2.innerHTML=day.Confirmed;
          cell3.innerHTML=day.Recovered;
          cell4.innerHTML=day.Deaths;
          cell5.innerHTML=day.Active;
        
         
      })
      var Dtable=document.getElementById("temptable")
      Dtable.append(table);
      
  
  }
}