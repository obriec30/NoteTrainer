
// the global object 
var guitar; 

/** Makes a 2d array that acts as a guitar
*	"guitar" goes low to high 
*	"guitar" can have as many strings as objects in the array 
* 	@Params
*	array notes for strings to be tuned to 
*/
function makeGuitar(strings)
{
	guitar =[];
	for(var x = 0; x < strings.length; x++)
	{
		var string=[];
		var start = notesFlat.indexOf(strings[x]);
		for(var y =0;  y < 24; y++)
		{
			string.push(notesFlat[(start + y) %12]);
			
		}
		if(DEBUG)
			console.log(string.toString());
		guitar.push(string);
	}
}


function stdGuitar()
{
	var strings=['E','A','D','G','B','E'];
	guitar =[];
	for(var x = 0; x < strings.length; x++)
	{
		var string=[];
		var start = notesFlat.indexOf(strings[x]);
		for(var y =0;  y < 24; y++)
		{
			string.push(notesFlat[(start + y) %12]);
			
		}
		if(DEBUG)
			console.log(string.toString());
		guitar.push(string);
	}
}

/**	Returns the position of the note on the specified string 
*	@Params
*	stringnum : int: string number string 1 is lowest string (might change this later)
*	note : string : the note you're looking for 
*	
*/
function posOnString(stringnum, note)
{

	if(DEBUG)
		console.log(guitar[stringnum - 1].indexOf(note));
	return guitar[stringnum - 1].indexOf(note);
}