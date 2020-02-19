var currCulture = '';
var info = {
    genMyth: "\tMythology is something that all cultures around the world have come up with.  It was, and still is, a way to teach lessons about morality and justice, as well as great stories to tell by the fire!!\n\n"+
			  "\tDifferent cultures have different belief systems and ideas, but the similarities in different mythologies are amazing.  So many things carry over from one culture to another, that sometimes you have to wonder if these people that weren\'t supposed to have known each other at particular times, perhaps, did.\n\n"+
			  "\tParticular monsters appear in multiple cultures (i.e. giants and dragons).  Most cultures see their gods as divine beings, and yet surprisingly human.  Cultures have differing ways of venerating their deities, and yet they often have similarities.  Sacrifices made to appease for a sin or prior to battle, praying for luck or guidance, and asking for favors are common ideas throughout multiple cultures.\n\n"+
			  "\tHere we will have stories from different cultures, and attempt to make connections between them, as well as be a repository for some good old fashioned story time!!  Click a culture above and we can get started!  Follow the links on the left to get to where you want to be within each culture!\n\n"+
			  "Have fun and enjoy!!"
};

document.onload = document.getElementById("writing").innerText = info.genMyth;
document.getElementById("greek").onclick = function (){setUpDisplay(this);};
document.getElementById("celt").onclick = function (){setUpDisplay(this);};
document.getElementById("norse").onclick = function (){setUpDisplay(this);};
document.getElementById("japan").onclick = function (){setUpDisplay(this);};
document.getElementById("china").onclick = function (){setUpDisplay(this);};
document.getElementById("india").onclick = function (){setUpDisplay(this);};
document.getElementById("egypt").onclick = function (){setUpDisplay(this);};
document.getElementById("namer").onclick = function (){setUpDisplay(this);};

document.getElementById("banner").onclick = function (){
	document.getElementById("topics").style.display = 'none';
	document.getElementById("about").style.width = '56vw';
	document.getElementById("title").innerText = "Overview";
	document.getElementById("writing").innerText = info.genMyth;
};

document.getElementById("story").onmouseenter = function (){
	for (var key in eval(currCulture+"Info")){
		if (key.match('Title')){
			var listItem = document.createElement("li");
			listItem.setAttribute("id",key.split("T")[0]);
			listItem.setAttribute("class","stories");
			var newText = document.createTextNode(eval(currCulture+"Info")[key]);
			listItem.appendChild(newText);
			document.getElementById("storyList").appendChild(listItem);
			document.getElementById(key.split("T")[0]).onclick = function (){setupStoryDisplay(this);};
		}			
	}
};

document.getElementById("story").onmouseleave = function (){
	var e = document.getElementById("storyList");
	var child = e.lastElementChild;  
	while (child) { 
		e.removeChild(child); 
		child = e.lastElementChild;
	}
};
	
function setUpDisplay (elem){
	document.getElementById("topics").style.display = 'block';
	document.getElementById("about").style.width = '49vw';
	document.getElementById("title").innerText = "Overview";
	document.getElementById("mythTitle").innerText = elem.innerText+" Mythology";
	var content = elem.id+"Info."+elem.id+"Myth";			
	document.getElementById("writing").innerText = eval(content);
    currCulture = elem.id;	
}

function setupStoryDisplay (elem){
	document.getElementById("title").innerText = eval(currCulture+"Info."+elem.id+"Title");
	var content = currCulture+"Info."+elem.id;	
	document.getElementById("writing").innerText = eval(content);
}
	

