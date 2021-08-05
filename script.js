const apiUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=";

async function getData()
{
   try 
{
   
   var country = document.getElementById("country").value;
   country = ((country.charAt(0).toUpperCase())+country.slice(1).toLowerCase());
  
   
  

      let resp = await fetch(apiUrl+country);
      let data = await resp.json();
    console.log(data);
 
    let arr = Object.entries(data)
    // console.log(arr);
    
    dom(arr);
    
}
   catch(error)
   {
        console.log(error);
   }
}

// getData()




function dom(arr) 
{
    // Getting the element from outside the for loop so that we can assign blank values whenever click the function and load the values
    // Initially the page will have only the overall count and upon entering the country the page will loas
    var body = document.getElementById('state')
    body.innerHTML=""
    
   console.log(arr);
//    Below to get the state names as they are array of array 
   let b = arr[1]
   console.log("Confirmed: " + b[1].confirmed);
   let overall = arr[0];
   console.log(overall[1].confirmed);
   var all = document.getElementById('All')
   all.innerHTML = `Total Cases in ${overall[1].country}: ${overall[1].confirmed}
   <p>Total Death: ${overall[1].deaths}</p>
                   <p>Total Recovered: ${overall[1].recovered}</p>
                   `
   for (let i = 1; i < arr.length; i++) {
    //    Used b[1] so that we will get the state values instead of country values
       let a = arr[i]
       body.innerHTML += ` <div class="col-sm-3">
       <div class="box-part text-left" id="container">
           <div class="title" id="card">
           <div id="front"><h4>${a[0]}</h4></div>
               <div class="text" id="back">
                   <span> Confirmed Cases: ${b[1].confirmed}</span>
                   <p><span>Total Death: </span>${b[1].deaths}</p>
                   <p><span>Total Recovered: </span>${b[1].recovered}</p>
                   <p><span>Last Updated: </span>${new Date (b[1].updated).toLocaleString()}</p>
               </div>
           </div>
           
         </div>
         </div>`
   }
   
}
