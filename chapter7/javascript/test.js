window.onload=function(){
	var test = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(test);
	var text = document.createTextNode("hello world");
	test.appendChild(text);
}
