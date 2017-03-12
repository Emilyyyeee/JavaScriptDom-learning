function displayAbbreviations()
{
	var abbr = document.getElementsByTagName("abbr");
	var defs = new Array();
	for (var i = 0; i < abbr.length; i++) 
	{
		var title = abbr[i].getAttribute("title");
		var key = abbr[i].lastChild.nodeValue;
		defs[key] = title;
	}	
}
addLoadEvent(displayAbbreviations);
// 1.判断有没有方法
// 2.判断获取的abbr是否为空
// 3.
