import customElements from './src/customElements'
customElements()

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
