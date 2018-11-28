import LayerType from 'ol/LayerType'
import customElements from './customElements'
import OLLayers from './Layers'
import OLMap from './Map'

describe('Vector Layer', () => {
  const wrapper = document.body
  beforeEach(() => {
    customElements()
    wrapper.innerHTML = ''
  })

  it('Create vector layer', () => {
    const map = document.createElement('ol-map')
    const layers = document.createElement('ol-layers')
    const vectorLayer = document.createElement('ol-layer-vector')
    wrapper.appendChild(map)
    map.appendChild(layers)
    layers.appendChild(vectorLayer)
    const layer = map.map.getLayers().getArray()[0]
    expect(layer.type).toEqual(LayerType.VECTOR)
  })

  it('Create vector layer element with URL', () => {
    const map = document.createElement('ol-map')
    const layers = document.createElement('ol-layers')

    const vectorLayer = document.createElement('ol-layer-vector')
    const url = 'http://openlayers.org/en/latest/examples/data/geojson/countries.geojson'
    vectorLayer.setAttribute('url', url)

    wrapper.appendChild(map)
    map.appendChild(layers)
    layers.appendChild(vectorLayer)

    const layer = map.map.getLayers().getArray()[0]
    const source = layer.getSource()

    expect(source.getUrl()).toEqual(url)
  })
})
