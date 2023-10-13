// Inverting the opacity from the layer underneath

const invertedLayer = thisComp.layer(index+1);
const transparency = invertedLayer.transform.opacity;

linear(transparency,0,value,100,0)