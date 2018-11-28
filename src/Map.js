import Map from 'ol/Map'
import View from 'ol/View'

class OLMap extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: "closed"})
    }
    connectedCallback() {
        const div = document.createElement('div')
        div.className = 'map'
        this.shadow.appendChild(div)
        this.map = new Map({
          renderer: 'canvas',
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

export default OLMap
