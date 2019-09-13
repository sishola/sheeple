// from data.js
var tableData = data;

// YOUR CODE HERE!
var ufos = data

var button = d3.select("#filter-btn");

var searchFilter = d3.select("#search-filter");

//This function is called when an item in the multi dropdown is clicked and enables the corresponding input field
searchFilter.on("click", function(){
    //get select option clicked
    var clickedOption = d3.event.target.value

    //IF block to enable input field
    if(clickedOption === "cityOption"){
        d3.select("#city").property("disabled",false)
    }
    else if(clickedOption === "countryOption"){
        d3.select("#country").property("disabled",false)
    }
    else if(clickedOption === "datetimeOption"){
        d3.select("#datetime").property("disabled",false)
    } 
    else if(clickedOption === "shapeOption"){
        d3.select("#shape").property("disabled",false)
    }
    else if(clickedOption === "stateOption"){
        d3.select("#state").property("disabled",false)
    } 
})


//This function triggers the search
button.on("click", function() {
    
    var searchedCity = d3.select("#city").property("value")
    var searchedCountry = d3.select("#country").property("value")
    var searchedDate = d3.select("#datetime").property("value")
    var searchedShape = d3.select("#shape").property("value")
    var searchedState = d3.select("#state").property("value")

    var searchString = [] 
    var filteredData = ufos

    if(searchedCity != ""){
        filteredData = filteredData.filter(ufo => ufo.city === searchedCity);
    }
    if(searchedCountry != ""){
        filteredData = filteredData.filter(ufo => ufo.country === searchedCountry);
    }
    if(searchedDate != ""){
        filteredData = filteredData.filter(ufo => ufo.datetime === searchedDate);
    }
    if(searchedShape != ""){
        filteredData = filteredData.filter(ufo => ufo.shape === searchedShape);
    }
    if(searchedState != ""){
        filteredData = filteredData.filter(ufo => ufo.state === searchedState);
    }
    console.log(filteredData)
    


    d3.select("tbody").html("")
    filteredData.forEach(ufo => {
        var row = d3.select("tbody").append("tr")
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
        }
    )
    




});