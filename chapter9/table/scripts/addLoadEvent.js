function addLoadEvent(func)
{
	var oldOnload = window.onload;
	if(typeof window.onload!="function")
	{
		window.onload = func;
	}
	else
	{
		window.onload = function()
		{
			oldOnload();
			func();
		}
	}
}
// function addLoadEvent(func) 
// {
//   var oldonload = window.onload;
//   if (typeof window.onload != 'function') 
//   {
//     window.onload = func;
//   } 
//   else 
//   {
//     window.onload = function() 
//     {
//       oldonload();
//       func();
//     }
//   }
// }