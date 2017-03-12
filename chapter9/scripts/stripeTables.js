function stripeTables()
{
	
	var tables = document.getElementsByTagName("table");
	for (var i = 0; i < tables.length; i++) 
	{
		var odd = false;
		var trs = tables[i].getElementsByTagName("tr");
		if(!trs) continue;
		for (var i = 0; i < trs.length; i++) {
			if(odd)
			{
				trs[i].style.backgroundColor = "#fcc";
				odd = false;
			}
			else{
				odd = true;
			}
		}
	}
}
addLoadEvent(stripeTables);
