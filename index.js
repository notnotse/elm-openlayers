import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';

// new TileLayer({
//   source: new XYZ({
//     url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//   })
// })

class OpenLayersMap extends HTMLElement {
    constructor() {
        super()

        this.shadow = this.attachShadow({mode: "closed"})

    }
    connectedCallback() {
        var div = document.createElement('div');

        div.className = 'map'
        this.shadow.appendChild(div)
        this.map = new Map({
          target: div,
          layers: [],
          view: new View({
            center: [0, 0],
            zoom: 2
          })
        });
    }

    onLayersConnected() {
      return this.map.getLayers()
    }
}

class OpenLayersLayers extends HTMLElement {
    constructor() {
        super()

    }
    connectedCallback() {
        console.log('OpenLayersLayers connected', this.parentNode)
        this.layers = this.parentNode.onLayersConnected()
    }
    connectLayer(index, layer) {
      this.layers.insertAt(index, layer)
    }
    disconnectLayer(layer) {
      this.layers.remove(layer)
    }
}

class OpenLayersLayer extends HTMLElement {

    connectedCallback() {
        let child = this
        for (var i=0; (child=child.previousElementSibling); i++);
        this.parentNode.connectLayer(i, this.layer)
        this.parent = this.parentNode
    }
    disconnectedCallback() {
      this.parent.disconnectLayer(this.layer)
      this.parent = null
    }
}

class OpenLayersLayerOsm extends OpenLayersLayer {
    constructor() {
        super()
        this.layer = new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
    }

}

class OpenLayersLayerVector extends OpenLayersLayer {
    constructor() {
        super()
        this.layer = new VectorLayer({
        source: new VectorSource({
          url: 'http://openlayers.org/en/latest/examples/data/geojson/countries.geojson',
          format: new GeoJSON()
        })
      });
    }
}

window.removeLayer = () => {
  const el = document.getElementById('osm')
  el.parentNode.removeChild(el)
}

window.moveLayer = () => {
  const osm = document.getElementById('osm')
  const vector = document.getElementById('vector')
  // vector.before(osm)
  osm.after(vector)
}

customElements.define('openlayers-map', OpenLayersMap)
customElements.define('openlayers-layers', OpenLayersLayers)
customElements.define('openlayers-layer-osm', OpenLayersLayerOsm)
customElements.define('openlayers-layer-vector', OpenLayersLayerVector)
