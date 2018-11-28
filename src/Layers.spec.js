import customElements from './customElements'
import OLLayers from './Layers'
import OLMap from './Map'

describe('Layers', () => {
  const wrapper = document.body
  beforeEach(() => {
    customElements()
    wrapper.innerHTML = ''
  })
  
  it('Create Layers element as a child to Map', () => {
    const map = document.createElement('ol-map')
    const layers = document.createElement('ol-layers')
    wrapper.appendChild(map)
    map.appendChild(layers)
    expect(map.map.getLayers().getArray()).toEqual([])
  })
})
