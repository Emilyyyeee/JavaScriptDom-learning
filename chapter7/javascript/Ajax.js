window.onload = function()
{
	var request = new XMLHttpRequest();
	if(request)
	{
		request.open("GET","test.txt",true);
		request.onreadystatechange = function()
		{
			if(request.readyState==4)
			{
				var p = document.createElement("p")
				var testdiv = document.getElementById("testdiv");
				var response = document.createTextNode(request.responseText);
				p.appendChild(response);
				testdiv.appendChild(p);
			}
		}
	}
}