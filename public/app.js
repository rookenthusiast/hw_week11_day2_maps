var contentString = '<div id="content">' +'</div>'+'<h1 id="bodyContent">'+'<p><b>Hobbinton</b></p>'+'<p>It is located in the middle of North Island in New Zealand and was “discovered” by Peter Jackson and New Line Cinema during aerial search for suitable “The Lord of the Rings” sites in 1998.</p>'
var mainMap
var handleButtonClick = function(){
  mainMap.setCenter();
}

var initialize = function() {
  var center = {lat: -37.872262, lng: 175.683167};
  var mapDiv = document.querySelector('#main-map');
  mainMap = new MapWrapper(mapDiv, center, 15);
  mainMap.addMarker(center, contentString);
  mainMap.addClickEvent();
  var button = document.querySelector("button");
  button.onclick = handleButtonClick;
 
;}

window.onload = initialize;
