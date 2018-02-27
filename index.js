// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredUFO to addressData initially
var filteredUFO = dataSet;

// renderTable renders the filteredUFO to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFO.length; i++) {
    
    // Get get the current sighting object and its fields
    var sighting = filteredUFO[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim();

  // Set filteredUFO to an array of all addresses whose "state" matches the filter
  filteredUFO = dataSet.filter(function(sighting) {
    var sightingDate = sighting.datetime;

    // If true, add the address to the filteredUFO, otherwise don't add it to filteredUFO
    return sightingDate === filterDate;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();