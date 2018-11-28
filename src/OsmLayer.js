import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import OLLayer from './Layer'

class OLLayerOsm extends OLLayer {
    constructor() {
      super()
    }

    connectedCallback() {
      this.layer  = new TileLayer({
        source: new XYZ({
          url: this.getAttribute('url')
        })
      })
      super.connectedCallback()
    }
}

export default OLLayerOsm
