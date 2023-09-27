// The object is blinking from the first marker on the layer to the second

if(time>marker.key(1).time && time < marker.key(2).time){
	blinkSpeed=15;
	Math.sin(time*blinkSpeed)<0?0:100;
}else{
	value;
}