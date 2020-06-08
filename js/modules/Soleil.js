import { AbstractForm } from './AbstractForm.js';
class Soleil extends AbstractForm {
  
  constructor (
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur= false
  ) {
    super(x,y,width, height, fillColor, strokeColor, strokeWidth, pesenteur)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw (ctx) {
    ctx.save()

        ctx.beginPath()
        ctx.strokeStyle = this.strokeColor
        ctx.lineWidth = this.strokeWidth

        const MAX_HEAD = 80
        let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD : this.y
        
        ctx.arc(this.x, new_y, this.width, this.height, 2 * Math.PI)

        ctx.fillStyle = this.fillColor

        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()
    }
    
    static buildForms() {
    const cx =  window.innerWidth/2 - 600/2

    const mySoleil = new Soleil(cx,100, 100, 0, 'gold', '', 1, false ) 
    const forms = [mySoleil]
    return forms
  }

}

export { Soleil}
