console.log("Before Function Invoked : ");
show = function(obj)
{
  console.log("Show Called...")	
  //obj(); 
  setTimeout(obj,2000);
}
wish = function()
{
	console.log("Wish Called...");
}
show(wish);
console.log("After Function Invoked")