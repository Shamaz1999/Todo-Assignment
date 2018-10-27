function update(){
    var sumid = + localStorage.getItem('idd');
    var title = JSON.parse(localStorage.getItem("alltitle"));
    var description = JSON.parse(localStorage.getItem('alldescriptions'));
    var location = JSON.parse(localStorage.getItem('alllocation'));
    var updatetitle = title.slice(sumid, sumid + 1);
    var updatedescription = description.slice(sumid, sumid + 1);
    var updatelocation = location.slice(sumid, sumid + 1);
    document.getElementById('title').value = updatetitle;
    document.getElementById('description').value = updatedescription;
    document.getElementById('location').value = updatelocation;
}
// updating values inlocalstprage
function update1(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;

    if (title == "" || description == "" || location == "") {
        return false;
    }

   else{
        var sumid = localStorage.getItem('idd');
        var gettitle = JSON.parse(localStorage.getItem("alltitle"));
        var getdescription = JSON.parse(localStorage.getItem("alldescriptions"));
        var getlocation = JSON.parse(localStorage.getItem('alllocation'));
        gettitle.splice(sumid, 1, title);
        getdescription.splice(sumid, 1, description);
        getlocation.splice(sumid, 1, location);
        localStorage.setItem('alltitle', JSON.stringify(gettitle));
        localStorage.setItem('alldescriptions', JSON.stringify(getdescription));
        localStorage.setItem('alllocation', JSON.stringify(getlocation));
        return true;
   }
}