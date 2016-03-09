//include scales.js


//var notesFlat = scales.notesFlat;
//var notesSharp = scales.notesSharp;


/** Makes a 2d array that acts as a guitar
*	"guitar" goes low to high 
*	"guitar" can have as many strings as objects in the array 
* 	@Params
*	array notes for strings to be tuned to 
*/
function makeGuitar(strings)
{
	var guitar =[];
	for(var x = 0; x < strings.length; x++)
	{
		var string=[];
		var start = notesFlat.indexOf(strings[x]);
		for(var y =0;  y < 24; y++)
		{
			string.push(notesFlat[(start + y) %12]);
			
		}
		console.log(string.toString());
		guitar.push(string);
	}
}