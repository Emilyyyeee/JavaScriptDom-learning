function showPic(whichpic){
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	description.firstChild.nodeValue=text;

}