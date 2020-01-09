/**
 * promises
 */
var url = "data.json";
var nothome = "bogus.json";

// assign the button click handlers
// Done: Make sure the view is updated appropriately
$(document).ready(function () {
    $("#sendbutton").click(function () {
        displayData('Sending request');
        sendAjaxRequest(url)
            .then(displayData, displayError);
    });
    $("#badrequest").click(function () {
        displayData('Sending bad request');
        sendAjaxRequest(nothome)
            .then(displayData, displayError);
    });
});

// display the data in the datadiv
var displayData = function (data) {
    $("#datadiv").html(data);
    $("#errordiv").html('');
};

// display the data in the datadiv
var displayError = function (data) {
    $("#datadiv").html('');
    $("#errordiv").html(data);
};

// send an Ajax request and return a Promise
var sendAjaxRequest = function (url) {
    return new Promise((resolve, reject) => {
        $.get(url)
            .done((response) => { resolve(response.data) })
            .fail(() => {
                reject("Error in request sent to " + url);
            });
    });
};
