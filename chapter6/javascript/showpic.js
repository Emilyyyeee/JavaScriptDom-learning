window.onload = preparaGallery;
function preparaGallery()
{
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	var imagegallery = document.getElementById("imagegallery");
	var links = imagegallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) 
	{
		links[i].onClick = function()
		{
			return (!showPic(this))
		};
	}
}
function showPic(whichpic){
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	description.firstChild.nodeValue=text;
}