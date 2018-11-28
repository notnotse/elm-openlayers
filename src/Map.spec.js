import Map from 'ol/Map'
import OLMap from './Map'
import OLLayers from './Layers'
import OLLayerOsm from './OsmLayer'
import customElements from './customElements'


describe('Map', () => {
  const wrapper = document.body
  beforeEach(() => {
    customElements()
    wrapper.innerHTML = ''
  })

  it('Create a OpenLayers Map object on when connected', () => {
    const map = document.createElement('ol-map')
    wrapper.appendChild(map)
    expect(map.map.getLayers().getArray()).toEqual([])
  })

  it('Openlayers element should have className', () => {
    const map = document.createElement('ol-map')
    wrapper.appendChild(map)
    expect(map.shadow.firstElementChild.className).toEqual('map')
  })

  it('onLayersConnected should return a list of layers', () => {
    const map = document.createElement('ol-map')
    const layers = document.createElement('ol-layers')
    const osmLayer = document.createElement('ol-layer-osm')
    layers.appendChild(osmLayer)
    map.appendChild(layers)
    wrapper.appendChild(map)

    expect(map.onLayersConnected().getArray().length).toBe(1)
  })
})
