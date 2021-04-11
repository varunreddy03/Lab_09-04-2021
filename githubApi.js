function getRepo(){

  var request=new XMLHttpRequest();
  var uname=document.getElementById("uname").value;
  var url=`https://api.github.com/users/${uname}/repos`
  console.log(url)

  request.open('GET',url,true);
  request.send();
  
  
  request.onload=function(){
      var table=document.createElement("TABLE")
      table.border="1"
  
      var row=table.insertRow(-1)
      var cella1=row.insertCell(-1)
      var cella2=row.insertCell(-1)
      var cella3=row.insertCell(-1)
      var cella4=row.insertCell(-1)
      cella1.innerHTML="<h5>ID</h5>"
      cella2.innerHTML="<h5>Project Name</h5>"
      cella3.innerHTML="<h5>Owner</h5>"
      cella4.innerHTML="<h5>Type</h5>"
      var result=JSON.parse(this.response)
      console.log(result);
      result.forEach((day) => {
          var row1=table.insertRow(-1);
           var cell1=row1.insertCell(-1)
           var cell2=row1.insertCell(-1)
           var cell3=row1.insertCell(-1)
           var cell4=row1.insertCell(-1)
           
          cell1.innerHTML=day.id;
          cell2.innerHTML=day.name;
          cell3.innerHTML=day.owner.login
          var val=day.private;
          var type=""
          if(val==false){
            type="Public";
          }
          else{
            type="private";
          }
          cell4.innerHTML=type;
          
          
      })
      var Dtable=document.getElementById("temptable")
      Dtable.append(table);
      
  
  }
}