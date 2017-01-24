var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(coords, contentString) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    var infowindow = new google.maps.InfoWindow({
             content: contentString
           });
    marker.addListener('click', function() {
              infowindow.open(marker);
            });

  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click",
      function(event){
        console.log(event);
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        this.addMarker({lat: lat, lng: lng});
      }.bind(this));
  },

  markerAddListenerEvent:function(content){
    markerInfoBox(content);
    marker.addListener('click', function() {
              infowindow.open(map, marker);
            });
  }
}