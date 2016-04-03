var DEBUG = true;
	// All the notes starting at A 
	// Sharp and flats lined up for comparioson of answers 
	var notesSharp = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
	var notesFlat = ["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];
	
	
	/** Returns pentatonic minor scale
	*	@Params	
	*		root : Root of the the scale 
	*		oct : Booolean, include second octave
	*/
	function scalePentaMin(root,oct)
	{
		var scale =[];
		var index = notesSharp.indexOf(root);
		//root 
		scale.push(notesFlat[index]);
		// second note 
		index = index + 3; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]);
		
		//3rd note 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]);
		
		// 4th note 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]);
		
		// 5th note 
		index = index + 3; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]);
		// ocatve
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]);
		if(oct == true)
		{
			scale.push(scale[1]);
			scale.push(scale[2]);
			scale.push(scale[3]);
			scale.push(scale[4]);
			scale.push(scale[0]); // finish 2 octaves 
		}
		
		if(DEBUG)
			printScale(scale, root + " Minor pentatonic scale");
			
		return scale;
	}

	/** Returns Major scale 
	*	@Params	
	*		root : Root of the the scale 
	*		oct : Booolean, include second octave
	*/
	function scaleMajor(root,oct)
	{
		var scale = [];
		var index = notesSharp.indexOf(root);
		//root 
		scale.push(notesFlat[index]); 
		// 2nd 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 	
		// 3rd 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		// 4th 
		index = index + 1; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		// 5th 
		index = index + 2; 
		if(index > 11)
			index = index % 11;
		scale.push(notesFlat[index]); 
		//6th 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		//7th 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		//octave 
		index = index + 1; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		
		if(oct == true)
		{
			// 2 octaves 
			scale.push(scale[1]);
			scale.push(scale[2]);
			scale.push(scale[3]);
			scale.push(scale[4]);
			scale.push(scale[5]);
			scale.push(scale[6]);
			scale.push(scale[0]);	
		}
		
		if(DEBUG)
			printScale(scale, root +" Major Scale");
		
		return scale;
	}
	
	/** Returns Minor scale
	*	@Params	
	*		root : Root of the the scale 
	*		oct : Booolean, include second octave
	*/
	function scaleMinor(root,oct)
	{
		var scale = [];
		var index = notesSharp.indexOf(root);
		//root 
		scale.push(notesFlat[index]); 
		// 2nd 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 	
		// 3rd 
		index = index + 1; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		// 4th 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		// 5th 
		index = index + 2; 
		if(index > 11)
			index = index % 11;
		scale.push(notesFlat[index]); 
		//6th 
		index = index + 1; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		//7th 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		//octave 
		index = index + 1; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		
		if(oct == true)
		{
			// 2 octaves 
			scale.push(scale[1]);
			scale.push(scale[2]);
			scale.push(scale[3]);
			scale.push(scale[4]);
			scale.push(scale[5]);
			scale.push(scale[6]);
			scale.push(scale[0]);	
		}
		
		
		if(DEBUG)
			printScale(scale, root +" Minor Scale");
		
		return scale;
	}
	
	/** Returns Harmonic minor scale
	*	@Params	
	*		root : Root of the the scale 
	*		oct : Booolean, include second octave
	*/
	function scaleHarmonicMinor(root,oct)
	{
		var scale = [];
		var index = notesSharp.indexOf(root);
		//root 
		scale.push(notesFlat[index]); 
		// 2nd 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 	
		// 3rd 
		index = index + 1; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		// 4th 
		index = index + 2; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		// 5th 
		index = index + 2; 
		if(index > 11)
			index = index % 11;
		scale.push(notesFlat[index]); 
		//6th 
		index = index + 1; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		//7th 
		index = index + 3; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		//octave 
		index = index + 1; 
		if(index > 11)
			index = index % 12;
		scale.push(notesFlat[index]); 
		
		if(oct == true)
		{
			// 2 octaves 
			scale.push(scale[1]);
			scale.push(scale[2]);
			scale.push(scale[3]);
			scale.push(scale[4]);
			scale.push(scale[5]);
			scale.push(scale[6]);
			scale.push(scale[0]);	
		}
		
		
		printScale(scale, root +" Minor Scale");
		
		if(DEBUG)
			return scale;
	}
	
	/** Returns pentatonic minor scale
	*	@Params	
	*		root : Root of the the scale 
	*		oct : Booolean, include second octave
	*/
	function printScale(scale, name)
	{
		console.log(name);
		var x;
		for(x = 0; x < scale.length; x++)
		{
			console.log("index " + x + " : " + scale[x]);
		}
	}	
	
	/** Returns chord scale 
	* @param 
	*	root : string : root note of scale
	*	major : bool : major or minor
	*/
	function chordScale(root, major)
	{
		var scale = [];
		if(major == false)
		{
			var prog=["min","dim","maj","maj","min","min","maj","maj"];
			var roots = sacleMinor(root);
			
			for(var x = 0; x < prog.length; x++)
			{
				scale.push(roots[x] + prog[x]);
			}
			
			if(DEBUG)
				printScale(scale, root + " Major chord scale");
			 
		}
		else 
		{
			var prog=["maj","min","min","maj","maj","min","dim","maj"];
			var roots = scaleMajor(root,false);
			
			for(var x = 0; x < prog.length; x++)
			{
				scale.push(roots[x] + prog[x]);
			}
			
			if(DEBUG)
				printScale(scale, root + " Major chord scale");
			
		}
	}
	
	/** Returns aray with notes on the fretboard in the specified position in major or minor
	*	@param
	*		root : string : root note of the scale 
	*		pos : int:  position number
	*		maj : bool : major or minor 
	**/
	function pentaPos(root,pos,maj)
	{
		var scale;
		if(maj)
		{
			
		}
		else 
		{
			scale = scalePentaMin(root, false);
		}
		
		var index = pos -1;
		
		var positions = [];
		
		for(var x = 1; x <= guitar.length; x++)
		{
			var one = posOnString(x, scale[index]);
			index = (index + 1) % scale.length;
			var two = posOnString(x, scale[index]);
			index = (index + 1) % (scale.length - 1);
			var notes = [one,two];
			positions.push(notes);
		}
		
		console.log("Strings and scales");
		for(var a = 0; a < scale.length ; a ++)
		{
			console.log(positions[a]);
		}
	}
	
	/** Returns desired scale as 3 notes per string 
	*	@Params
	*	root : string : root note of scale 
	*	maj : boolean : major or minor 
	*/
	function threeNotesPerString(root, maj)
	{
		var scale;
		if(maj)
		{
			scale = scaleMajor(root, false);
		}
		else 
		{
			scale = scaleMinor(root, false);
		}
		
		var tnps = [];
		var index= 0; 
		for(var x = 1 ; x <= guitar.length;  x ++)
		{
			var one = posOnString(x, scale[index]);
			index = (index +1) % (scale.length -1);
			var two = posOnString(x, scale[index]);
			index = (index +1) % (scale.length -1);
			var three = posOnString(x, scale[index]);
			index = (index +1) % (scale.length -1);
			tnps.push([one,two,three]);
		}
		for(var x =0; x < tnps.length; x++)
		{
			console.log(tnps[x]);
		}
	}