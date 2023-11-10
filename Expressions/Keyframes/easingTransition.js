function easingTransition(speedProperty, speedDimension, fromValue, toValue) { // speedDimension has to be onedimensional
    const originalTime = linear(time, key(1).time, key(2).time, speedProperty.key(1).time, speedProperty.key(2).time);
    return linear(speedProperty.valueAtTime(originalTime)[speedDimension], speedProperty.key(1).value[speedDimension], speedProperty.key(2).value[speedDimension], fromValue, toValue);
}

// Example:
const speedPosition = thisComp.layer(index-1).transform.position;
[easingTransition(speedPosition, 0, 10, 3000),thisComp.height/2]