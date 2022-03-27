import React from "react"
import {loadableP5 as Sketch} from './loadable'


export const Web = () => {
  let cnv
  var step = 40;
  var size = window.innerWidth;
 

  const setup = (p5, canvasParentRef) => {
    cnv = p5.createCanvas(800, 420).parent(canvasParentRef)
    cnv.drawingContext.lineCap = 'round';
    cnv.drawingContext.lineWidth = 10; 
    p5.noLoop()
    p5.background('black')
  }
   
  const drawer = (x,y,width=800,height=420) => {
    var leftToRight = Math.random() >= 0.9;

    if(leftToRight) {
      cnv.drawingContext.moveTo(x, y);
      cnv.drawingContext.lineTo(x + width, y + height);    
    } else {
      cnv.drawingContext.moveTo(x + width, y);
      cnv.drawingContext.lineTo(x, y + height);
    }

    var gradient = cnv.drawingContext.createLinearGradient(0,0, 800,420)

    // Add three color stops
    gradient.addColorStop(0, 'black');
    gradient.addColorStop(0.25, 'grey');
    gradient.addColorStop(.5, 'white');
    gradient.addColorStop(0.75, 'grey');
    gradient.addColorStop(1, 'black');

    cnv.drawingContext.strokeStyle = gradient
    cnv.drawingContext.stroke()

  }

  const draw = (p5) => {
    for(var x = 0; x < size; x += step) {
      for(var y = 0; y < size; y+= step) {
        drawer(x, y, step, step); 
      }
    }
  }


  return <Sketch setup={setup} draw={draw} />
}