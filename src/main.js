import 'EpicodWarsRPG.js';
import $ from 'jquery';

$(document).ready(function() {
  $("#addName").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
  })

  
})

