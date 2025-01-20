console.log("Before Function Invoked : ");
show = function(x,y,obj)
{
  console.log("Show Called...")	
  var z = x+y;
  //obj(z); 
  setTimeout(()=>{
	  obj(z);
  },2000)
}
show(10,20,(res)=>{
	console.log("Result Value is : "+res);
});

console.log("After Function Invoked")