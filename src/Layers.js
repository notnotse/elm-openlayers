class OLLayers extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.layers = this.parentNode.onLayersConnected()
    }
    connectLayer(index, layer) {
      this.layers.insertAt(index, layer)
    }
    disconnectLayer(layer) {
      this.layers.remove(layer)
    }
}

export default OLLayers
