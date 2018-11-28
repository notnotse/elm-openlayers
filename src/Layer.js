class OLLayer extends HTMLElement {
    connectedCallback() {
        let child = this
        for (var i=0; (child=child.previousElementSibling); i++);
        this.parentNode.connectLayer(i, this.layer)
        this.parent = this.parentNode
    }
    
    disconnectedCallback() {
      this.parent.disconnectLayer(this.layer)
      this.parent = null
    }
}

export default OLLayer
