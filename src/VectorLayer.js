import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import GeoJSON from 'ol/format/GeoJSON'
import OLLayer from './Layer'


class OLLayerVector extends OLLayer {
    constructor() {
        super()

    }
    connectedCallback() {
      this.layer = new VectorLayer({
        source: new VectorSource({
          url: this.getAttribute('url'),
          format: new GeoJSON()
        })
      })
      super.connectedCallback()
    }
}

export default OLLayerVector
