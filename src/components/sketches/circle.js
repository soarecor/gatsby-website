import React from "react"
import {loadableP5 as Sketch} from './loadable'


export const Circle = () => {
  let cnv
    const setup = (p5, canvasParentRef) => {
         cnv = p5.createCanvas(800, 420).parent(canvasParentRef)
      }

      const draw = p5 => {
          p5.noStroke()
        if (!p5.mouseIsPressed) {
            let rand1 = Math.floor(Math.random()*255)
            let rand2 = Math.floor(Math.random()*170)
            let rand3 = Math.floor(Math.random()*10)

            let col = p5.color(rand1, rand2, rand3 )
            p5.fill(col);
          }
          cnv.drawingContext.fillStyle = '';
          p5.circle(p5.mouseX, p5.mouseY, 50)
      }
      
      return <Sketch class="canvas" setup={setup} draw={draw} />
  }