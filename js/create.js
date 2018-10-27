function store(){
   var title =  document.getElementById('todoName').value;
   var location =  document.getElementById('todoLoc').value;
   var description =  document.getElementById('todoDesc').value;
   var t = localStorage.getItem('alltitle');
  if(t==null){
      mytitle = [];
  }
  else{
    mytitle  = JSON.parse(t);
  }
  mytitle.push(title);
  localStorage.setItem('alltitle',JSON.stringify(mytitle));
  var l = localStorage.getItem('alllocation');
  if(l==null){
      mylocation = [];
  }
  else{
     mylocation =  JSON.parse(l);
  }
mylocation.push(location);
localStorage.setItem('alllocation',JSON.stringify(mylocation));
var d = localStorage.getItem('alldescriptions');
if(d==null){
    mydescription = [];
}
else{
   mydescription =  JSON.parse(d);
}
mydescription.push(description);
localStorage.setItem('alldescriptions',JSON.stringify(mydescription));
return true;
}
