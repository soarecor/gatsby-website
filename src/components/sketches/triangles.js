import React from "react"
import {loadableP5 as Sketch} from './loadable'


export const Triangles = () => {
  let cnv

    const setup = (p5, canvasParentRef) => {
        cnv = p5.createCanvas(800, 420).parent(canvasParentRef)
      }

      const draw = p5 => {
        p5.noStroke()
        if (!p5.mouseIsPressed) {
            let rand1 = Math.floor(Math.random()*255)
            let rand2 = Math.floor(Math.random()*150)
            let rand3 = Math.floor(Math.random()*255)

            let col = p5.color(rand1, rand2, rand3 )
            p5.fill(col);
          }
          p5.beginShape(p5.TRIANGLES);
          p5.vertex(p5.mouseX, 75);
          p5.vertex(40, p5.mouseX);
          p5.vertex(p5.mouseX*0.5, 75);
          p5.vertex(60, p5.mouseY);
          p5.vertex(p5.mouseX, 75);
          p5.vertex(p5.mouseY, 20);
          p5.endShape();

          cnv.drawingContext.fillStyle = '';
      }
      
      return <Sketch class="canvas" setup={setup} draw={draw} />
  }