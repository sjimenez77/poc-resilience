import { Component } from '@angular/core';
import { tileLayer, latLng, circle, polygon } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My first Leaflet project';
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
    ],
    zoom: 10,
    center: latLng(46.879966, -121.726909)
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Cycle Map' }),
      // tslint:disable-next-line:max-line-length
      'MapBox': tileLayer('https://api.mapbox.com/styles/v1/sjimenez77/cjd5wyiwe6l7h2ska1njg42xm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2ppbWVuZXo3NyIsImEiOiJjamQ1d3h4dTk0anBkMzJvN3VqOGRmb3UwIn0.rlmkQfmQyHl2iDETwxa1QQ', {
        maxZoom: 18,
        // tslint:disable-next-line:max-line-length
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoic2ppbWVuZXo3NyIsImEiOiJjamQ1d3h4dTk0anBkMzJvN3VqOGRmb3UwIn0.rlmkQfmQyHl2iDETwxa1QQ'
      })
    },
    overlays: {
      'Big Circle': circle([46.95, -122], { radius: 5000 }),
      'Big Square': polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
    }
  }
}
