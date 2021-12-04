import React from "react"
import Sketch from 'react-p5'


export const Web = () => {
    let cnv
    const setup = (p5, canvasParentRef) => {
        cnv = p5.createCanvas( 500, 400).parent(canvasParentRef)
      }

      const draw = p5 => {
          p5.noStroke()
          let gradient = cnv.drawingContext.createLinearGradient(50, 300, 20, 10);
        
          if (!p5.mouseIsPressed) {

          let rand1 = Math.floor(Math.random()*200)
            let rand2 = Math.floor(Math.random()*200)
            let rand3 = Math.floor(Math.random()*120)
            let col = p5.color(rand1, rand2, rand3 )

          gradient.addColorStop(0,   col.toString());
          gradient.addColorStop(1,   'Cornsilk');
          
          cnv.drawingContext.fillStyle = gradient;
  
            // p5.fill(gradient);
            p5.square(p5.mouseX, p5.mouseY, 100)
          }
      }
      
      return <Sketch setup={setup} draw={draw} />
  }