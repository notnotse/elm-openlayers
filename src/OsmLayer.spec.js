import LayerType from 'ol/LayerType'
import customElements from './customElements'
import OLLayers from './Layers'
import OLMap from './Map'

describe('OSM Layer', () => {
  const wrapper = document.body
  beforeEach(() => {
    customElements()
    wrapper.innerHTML = ''
  })

  it('Create OSM Layer', () => {
    const map = document.createElement('ol-map')
    const layers = document.createElement('ol-layers')
    const osmLayer = document.createElement('ol-layer-osm')
    wrapper.appendChild(map)
    map.appendChild(layers)
    layers.appendChild(osmLayer)
    const layer = map.map.getLayers().getArray()[0]
    expect(layer.type).toEqual(LayerType.TILE)
  })

  it('Create OSM Layer with URL', () => {
    const map = document.createElement('ol-map')
    const layers = document.createElement('ol-layers')

    const osmLayer = document.createElement('ol-layer-osm')
    const url = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
    osmLayer.setAttribute('url', url)

    wrapper.appendChild(map)
    map.appendChild(layers)
    layers.appendChild(osmLayer)

    const layer = map.map.getLayers().getArray()[0]
    const source = layer.getSource()
    expect(source.getUrls()).toEqual([url])
  })
})
