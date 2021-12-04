import React from "react"
import Sketch from 'react-p5'


export const Triangles = () => {
    const setup = (p5) => {
      p5.noStroke()
        p5.createCanvas(1000, 500)
        p5.line(100, 25, 70, 90)
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
          p5.vertex(p5.mouseX*0.1, 75);
          p5.vertex(60, p5.mouseY);
          p5.vertex(p5.mouseX, 75);
          p5.vertex(p5.mouseY, 20);
          p5.endShape();
      }
      
      return <Sketch setup={setup} draw={draw} />
  }