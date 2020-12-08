// Api server function
var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.onreadystatechange = function(){
    if(xhttp.readyState==4 && xhttp.status==200){
        var response = JSON.parse(xhttp.responseText);
        var table = document.getElementById("content");
        for(var i=0; i<response.length;i++){
            var row= table.insertRow();
            row.insertCell(0).innerHTML = response[i].id;
            row.insertCell(1).innerHTML = response[i].title;
            if(response[i].completed==true){
                row.insertCell(2).innerHTML = "<input type='checkbox' checked disabled='true'></input>";
            }
            else{
                row.insertCell(2).innerHTML = "<input type='checkbox' class='check' onclick='checkbox()'></input>";
            }
            
        }
    }
}

xhttp.send();
// api function ends


// checkbox count

function checkbox(){
    var x = document.getElementsByClassName("check");
    var c=0;
    var promise = new Promise(function(resolve,reject){
        for(var i=0; i<x.length; i++){
            if(x[i].checked==true){
                c++;
                // alert(c);
            }
        }
        if(c==5){
            resolve("Congrats!! 5 tasks have been successfully completed.");
        }
        else{
            reject("Error");
        }
    });

    promise
      .then(function(s){
        alert(s);
      })
      .catch(function(e){
        console.log(e);
      })
}

// checkbox count ends


