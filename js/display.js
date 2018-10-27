function display(){
    var sumid = + localStorage.getItem('idd');
    var title = JSON.parse(localStorage.getItem("alltitle"));
    var description = JSON.parse(localStorage.getItem('alldescriptions'));
    var location = JSON.parse(localStorage.getItem('alllocation'));
    var updatetitle = title.slice(sumid, sumid + 1);
    var updatedescription = description.slice(sumid, sumid + 1);
    var updatelocation = location.slice(sumid, sumid + 1);
    document.getElementById('title').innerHTML = updatetitle;
    document.getElementById('description').innerHTML = updatedescription;
    document.getElementById('location').innerHTML = updatelocation;

}
