function displayAccesskeys()
{
	var a = document.getElementsByTagName("a");
	var access = new Array();
	for (var i = 0; i < a.length; i++) 
	{
		if(!a[i].getAttribute("accesskey"))continue;
		var key = a[i].getAttribute("accesskey");
		var value = a[i].lastChild.nodeValue;
		access[key] = value;
	}
	var ul = document.createElement("ul");
	for(key in access)
	{
		var li = document.createElement("li");
		var text = key + access[key];
		var textnode = document.createTextNode(text);
		li.appendChild(textnode);
		ul.appendChild(li);
	}
	var h1 = document.createElement("h1");
	var h1_text = document.createTextNode("Accesskeys");
	h1.appendChild(h1_text);
	document.body.appendChild(h1);
	document.body.appendChild(ul);
}
addLoadEvent(displayAccesskeys);