function shiftKeyToNewTime(prop, keyToCopyIndex, newTimeSeconds)
	{
		var timeOriginalKey = prop.keyTime(keyToCopyIndex);
		
		// Remember the key's settings before creating the new setting, just in case creating the new key affects keyToCopyIndex's settings
		// alert(keyToCopyIndex);
		var inInterp = prop.keyInInterpolationType(keyToCopyIndex);
		var outInterp = prop.keyOutInterpolationType(keyToCopyIndex);
		var keyToCopyValue = prop.keyValue(keyToCopyIndex);
		
		
		if ((inInterp === KeyframeInterpolationType.BEZIER) && (outInterp === KeyframeInterpolationType.BEZIER))
		{
			var tempAutoBezier = prop.keyTemporalAutoBezier(keyToCopyIndex);
			var tempContBezier = prop.keyTemporalContinuous(keyToCopyIndex);
		}
		if (outInterp !== KeyframeInterpolationType.HOLD)
		{
			var inTempEase = prop.keyInTemporalEase(keyToCopyIndex);
			var outTempEase = prop.keyOutTemporalEase(keyToCopyIndex);
		}
		if ((prop.propertyValueType === PropertyValueType.TwoD_SPATIAL) || (prop.propertyValueType === PropertyValueType.ThreeD_SPATIAL))
		{
			var spatAutoBezier = prop.keySpatialAutoBezier(keyToCopyIndex);
			var spatContBezier = prop.keySpatialContinuous(keyToCopyIndex);
			var inSpatTangent = prop.keyInSpatialTangent(keyToCopyIndex);
			var outSpatTangent = prop.keyOutSpatialTangent(keyToCopyIndex);
			var roving = prop.keyRoving(keyToCopyIndex);
		}
		
		// Create the new keyframe
		// var newTime = newTimeSeconds;
//		$.writeln("adding new key...");
		var newKeyIndex = prop.addKey(newTimeSeconds);
//		$.writeln("setting new key's value...");
		prop.setValueAtKey(newKeyIndex, keyToCopyValue);
		
		if (outInterp !== KeyframeInterpolationType.HOLD)
		{
//			$.writeln("setting temp ease...");
			prop.setTemporalEaseAtKey(newKeyIndex, inTempEase, outTempEase);
		}
		
		// Copy over the keyframe settings
//		$.writeln("setting interp...");
		prop.setInterpolationTypeAtKey(newKeyIndex, inInterp, outInterp);
		
		if ((inInterp === KeyframeInterpolationType.BEZIER) && (outInterp === KeyframeInterpolationType.BEZIER) && tempContBezier)
		{
//			$.writeln("setting temp cont...");
			prop.setTemporalContinuousAtKey(newKeyIndex, tempContBezier);
//			$.writeln("setting temp auto bez...");
			prop.setTemporalAutoBezierAtKey(newKeyIndex, tempAutoBezier);		// Implies Continuous, so do after it
		}
		
		if ((prop.propertyValueType === PropertyValueType.TwoD_SPATIAL) || (prop.propertyValueType === PropertyValueType.ThreeD_SPATIAL))
		{
//			$.writeln("setting spat cont...");
			prop.setSpatialContinuousAtKey(newKeyIndex, spatContBezier);
//			$.writeln("setting spat auto bez...");
			prop.setSpatialAutoBezierAtKey(newKeyIndex, spatAutoBezier);		// Implies Continuous, so do after it
			
//			$.writeln("setting spat tangents...");
			prop.setSpatialTangentsAtKey(newKeyIndex, inSpatTangent, outSpatTangent);
			
//			$.writeln("setting roving...");
			prop.setRovingAtKey(newKeyIndex, roving);
		}
		
		// Remove the old keyframe
//		$.writeln("removing key...");
		prop.removeKey(prop.nearestKeyIndex(timeOriginalKey));
	}

/*
( function () {
	//@include aequery.js

	var comp = aeq.getActiveComp();


	if ( comp === null ) {
		return;
	}

	aeq.createUndoGroup( "Add motionblur", addMotionBlurToCompLayers, [ comp ] );

	function addMotionBlurToCompLayers( comp ) {
		aeq( "layer:not(motionBlur)", comp ).forEach( function( layer ) {
			aeq.forEachProperty( layer, function( property ) {
				if ( property.isTimeVarying ) {
					addMotionBlur( layer );
					return false;
				}
			} );
		} );
	}

	function addMotionBlur( layer ) {
		var children = aeq.layer.children( layer );

		aeq.forEach( children, addMotionBlur );
		if ( layer.motionBlur !== undefined && !layer.nullLayer ) {
			layer.motionBlur = true;
		}
	}
}() );
*/



( function () {
	//@include aequery.js

	var comp = aeq.getActiveComp();


	if ( comp === null ) {
		return;
	}

	aeq.createUndoGroup( "Move Keys", moveTheKeys, [ comp ] );

	function moveTheKeys( comp ) {
		var prop = comp.layer(1).position;
        aeq.prop(1).moveTo(1);

	}

	
}() );