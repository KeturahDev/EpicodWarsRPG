// import './src/EpicodWarsRPG.js';
import $ from 'jquery';


$(document).ready(function() {
  $("#addName").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    $('#showName').text(name);
  });
});

