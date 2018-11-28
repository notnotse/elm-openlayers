import OLMap from './Map'
import OLLayers from './Layers'
import OLLayer from './Layer'
import OLLayerOsm from './OsmLayer'
import OLLayerVector from './VectorLayer'

const elements = [{
  name: 'ol-map',
  class: OLMap
},{
  name: 'ol-layers',
  class: OLLayers
},{
  name: 'ol-layer',
  class: OLLayer
},{
  name: 'ol-layer-osm',
  class: OLLayerOsm
},{
  name: 'ol-layer-vector',
  class: OLLayerVector
}]

const init = () => {
    elements.forEach(elem => {
      if (!customElements.get(elem.name)) {
        customElements.define(elem.name, elem.class)
      }
    })
}

export default init
