// from data.js
var tableData = data;
var tbody = d3.select("tbody");


// pulling in data onto page as a table
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
    });



//button event function to filter

 //assign button variable
 var button = d3.select(".btn");


//  d3.event.preventDefault();

button.on("click", runEnter)

function runEnter(){
        tbody.html("")
        var inputElement = d3.select("#datetime");
        var inputValue = inputElement.property("value");
            console.log(inputValue);
    
   
if (inputValue)
{
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
}
else {
  filteredData=tableData
}


    
      filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

}