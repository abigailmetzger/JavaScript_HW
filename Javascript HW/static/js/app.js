var tableData = data;

var tbody = d3.select("#ufo-table>tbody");

tableData.forEach(function(ufoData) {
    var row = tbody.append('tr');
    Object.entries(ufoData).forEach(([key, value])=> {
        row.append('td').text(value);
    })
});

var button = d3.select("#filter-btn");

button.on("click", eventHandler);

function eventHandler() {
    d3.event.preventDefault();
    inputDate = d3.select(".form-control").node().value;
    console.log(inputDate);
    tbody.html("")
    filteredData = tableData.filter(data => data.datetime === inputDate);
    console.log(filteredData);
    if (Object.keys(filteredData).length === 0) {
        tbody.html("<tr><td> Date Not Found </td></tr>");
    } else {
        filteredData.forEach(data => {
            var row = tbody.append('tr');
            Object.values(data).forEach(value => row.append('td').text(value));
        })
    };
}

