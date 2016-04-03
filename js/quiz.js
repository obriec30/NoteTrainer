/**
*	Class for making a quiz from the form 
*	
*
**/


function quizNotesOnString(numQuestions)
{
	var form = "<div id=\"qnos\"><h2>Notes on string</h2><br>";

	for(var x = 0; x < numQuestions; x++)
	{
		// randomly pick a note 
		var noteIndex = Math.floor((Math.random() * 12));
		var note = notesSharp[noteIndex];
		
		// randomly pick a string
		var stringIndex = Math.floor((Math.random() * guitar.length));
		var stringValue = guitar[stringIndex][0];   
		
		var POS = posOnString(stringIndex +1, note);

		form += "Note : " + POS + "  on " + stringValue + " string : ";
		var qNum = "qNum" +x;
		var aNum = "aNum" +x;
		form += "<input type=\"hidden\" id=\"" + aNum + "\" value=\"" + note + "\"></input>"
		form += "<input type=\"text\" id=\""+ qNum + "\"></input><br>";
	}
	form += "<button id=\"submitnos\" >Submit</button></div>";

	return form; 
}

function correctNOS(numQ)
{
	var q; 
	var a; 
	var total = 0; 
	for(var x = 0 ; x < numQ ; x  ++)
	{
		var qNum = "qNum" +x;
		var aNum = "aNum" +x;
		q = document.getElementById(qNum).value;
		a = document.getElementById(aNum).value;
		
		q=q.toUpperCase();
		
		console.log("q = " +q);
		console.log("a = " +a);
		
		if(notesSharp.indexOf(q) == notesSharp.indexOf(a) || notesSharp.indexOf(q) == notesFlat.indexOf(a) )
		{
			document.getElementById(qNum).style.color = "green";
			total ++;
		}
		else
		{
			document.getElementById(qNum).style.color = "red";
		}
	}
	
	var result = "Result : " + total + "/" + numQ ;

	var node = document.createElement("DIV");                 // Create a <li> node
	var textnode = document.createTextNode(result);         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	document.getElementById("qnos").appendChild(node);     // Append <li> to <ul> with 
	
	
}



