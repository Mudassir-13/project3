function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 41.77733255084747, lng: -87.61660508659033},
    });
  
    var marker = new google.maps.Marker({
      position: {lat: 41.77733255084747, lng: -87.61660508659033}, 
      map: map,
      title: 'Parkway Gardens',
    });
  }
  
