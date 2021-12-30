import React from "react"
import {loadableP5 as Sketch} from './loadable'


export const Stars = () => {
  let cnv

    const setup = (p5, canvasParentRef) => {
        cnv = p5.createCanvas(800, 420).parent(canvasParentRef)
      }

      const draw = p5 => {
          p5.noStroke()
        if (!p5.mouseIsPressed) {
            let rand1 = Math.floor(Math.random()*255)
            let rand2 = Math.floor(Math.random()*10)
            let rand3 = Math.floor(Math.random()*90)

            let col = p5.color(rand1, rand2, rand3 )
            p5.fill(col);
          }
          p5.beginShape(p5.TESS);
          p5.vertex(100, p5.mouseY);
          p5.vertex(p5.mouseX, 100);
          p5.vertex(200, p5.mouseY);
          p5.vertex(p5.mouseX, 40);
          p5.vertex(40, p5.mouseY);
          p5.vertex(p5.mouseX, 60);
          p5.vertex(200, p5.mouseY);
          p5.vertex(p5.mouseX, 200);
          p5.endShape(p5.CLOSE);
          cnv.drawingContext.fillStyle = '';
      }
      
      return <Sketch class="canvas" setup={setup} draw={draw} />
  }