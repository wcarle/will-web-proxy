$(document).ready(function () {
    var host = "http://active-analytics.appspot.com";
    if(window.location.host.indexOf("localhost") >= 0){
        host = "http://localhost:8082";
    }
    $.getScript( host + "/client/example-implementation.js", function( data, textStatus, jqxhr ) {setTimeout(grabScripts, 10)});
})