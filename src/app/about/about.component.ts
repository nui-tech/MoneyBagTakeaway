import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var google: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  marker: any;
  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle('About - Money Bag Thai Takeaway');
    var myLatlng = new google.maps.LatLng(-43.561521, 172.738544);
    var mapOptions = {
      zoom: 15,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      label: 'Money Bag - Thai Takeaway',
    
    });
    
    // To add the marker to the map, call setMap();
    marker.setMap(map);
    
  }
  

 
  
  toggleBounce(){
    var marker = this.marker;
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
