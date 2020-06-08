import {AbstractForm} from './AbstractForm.js';

class Immeuble extends AbstractForm {
    constructor(
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        fillColor = '',
        strokeColor = '',
        strokeWidth = 2,
        pesanteur = false
      )
         {
        super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur)
      }

/**  
 * Dessine la forme du building
   */
  draw(ctx){
    ctx.save()
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor
    ctx.lineWidth = this.strokeWidth

    const MAX_HEAD = 80
    let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD : this.y
    ctx.rect(this.x, new_y, this.width, this.height)

    ctx.fillStyle = this.fillColor

    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }

  /** 
   * premier building
   */

    Batiment1(){
        const Batiment1 = new Immeuble(10,0,200,400,'yellow','black',3,true)
        return Batiment1
    }
    Porte(){ 
      const Porte= new Immeuble(80,0,50,100,'red','black',3,true)
      return Porte
    }
    Batiment2(){
        const Batiment2= new Immeuble(400,0,200,500,'orange','black',3,true)
        return Batiment2
    }
    Porte1(){ 
      const Porte= new Immeuble(480,0,50,100,'red','black',3,true)
      return Porte
    }
    Batiment3(){
        const Batiment3= new Immeuble(800,0,200,400,'green','black',3,true)
        return Batiment3
    }
    Porte2(){ 
      const Porte= new Immeuble(880,0,50,100,'red','black',3,true)
      return Porte
    }
    Batiment4(){
    const Batiment4= new Immeuble(1500,0,200,800,'yellow','black',3,true)
    return Batiment4
    }
    Porte3(){ 
      const Porte= new Immeuble(1580,0,50,100,'red','black',3,true)
      return Porte
    }
    Batiment5(){
      const Batiment4= new Immeuble(1900,0,200,800,'gray','black',3,true)
      return Batiment4
      }
      Porte4(){ 
        const Porte = new Immeuble(1980,0,50,100,'red','black',3,true)
        return Porte
      }



  /** 
   * Dessin de la forme de l'objet
   */
  static buildForms() {
    const bld = new Immeuble()
    let forms = []
    forms.push(
        bld.Batiment1(),
        bld.Porte(),
        bld.Batiment2(),
        bld.Porte1(),
        bld.Batiment3(),
        bld.Porte2(),
        bld.Batiment4(),
        bld.Porte3(),
        bld.Batiment5(),
        bld.Porte4()
        )

    const builds = forms
    return builds

  }
  
}
export {Immeuble}
