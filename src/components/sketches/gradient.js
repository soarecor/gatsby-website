import React from "react"
import Sketch from 'react-p5'


export const Grad = () => {
    let cnv

    const randomIntFromInterval = (min, max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    const setup = (p5, canvasParentRef) => {
        cnv = p5.createCanvas( 1000, 6000).parent(canvasParentRef)
      }

      const draw = p5 => {
          p5.noStroke()
        //   p5.stroke('#fff')
        //   p5.strokeWeight(randomIntFromInterval(1,4))
          let gradient = cnv.drawingContext.createLinearGradient(50, 300, 20, 10);
        
          if (!p5.mouseIsPressed) {

          let rand1 = randomIntFromInterval(200,255)
            let rand2 = randomIntFromInterval(21,190)
            let rand3 = randomIntFromInterval(133,202)
            let col = p5.color(rand1, rand2, rand3 )

          gradient.addColorStop(0,   col.toString());
          gradient.addColorStop(1,   'Peru');
          
          cnv.drawingContext.fillStyle = gradient;
  
            // p5.fill(gradient);
            p5.circle(p5.mouseX, p5.mouseY, randomIntFromInterval(50,100))
          }
      }
      
      return <Sketch setup={setup} draw={draw} />
  }