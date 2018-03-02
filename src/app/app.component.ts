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
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Open Street Map',
      }),
    ],
    zoom: 17,
    // @option wheelPxPerZoomLevel: Number = 50
    // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
    // mean a change of one full zoom level. Smaller values will make wheel-zooming
    // faster (and vice versa).
    wheelPxPerZoomLevel: 500,
    zoomSnap: 0.1,
    center: latLng(39.4561165, -0.3545661),
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: 'Open Street Map' },
      ),
      'Open Cycle Map': tileLayer(
        'http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: 'Open Cycle Map' },
      ),
      MapBox: tileLayer(
        // tslint:disable-next-line:max-line-length
        'https://api.mapbox.com/styles/v1/sjimenez77/cjd5wyiwe6l7h2ska1njg42xm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2ppbWVuZXo3NyIsImEiOiJjamQ1d3h4dTk0anBkMzJvN3VqOGRmb3UwIn0.rlmkQfmQyHl2iDETwxa1QQ',
        {
          maxZoom: 18,
          attribution:
            // tslint:disable-next-line:max-line-length
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          id: 'mapbox.streets',
          accessToken:
            'pk.eyJ1Ijoic2ppbWVuZXo3NyIsImEiOiJjamQ1d3h4dTk0anBkMzJvN3VqOGRmb3UwIn0.rlmkQfmQyHl2iDETwxa1QQ',
        },
      ),
    },
    overlays: {
      'Big Circle': circle([39.4561165, -0.3], { radius: 5000 }),
      'Big Polygon': polygon([
        [39.4, -0.35],
        [39.5, -0.35],
        [39.5, -0.4],
        [39.4, -0.4],
        [39.42, -0.38],
      ]),
    },
  };
}
