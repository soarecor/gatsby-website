import React from "react"
import Sketch from 'react-p5'


export const Circle = () => {
    const setup = (p5) => {
        p5.createCanvas(1000, 500)
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
          p5.circle(p5.mouseX, p5.mouseY, 50)
      }
      
      return <Sketch setup={setup} draw={draw} />
  }