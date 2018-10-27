var btnid = 0;
var divid = 1;
function show() {

    var title = localStorage.getItem('alltitle');
    var description = localStorage.getItem('alldescriptions');
    var location = localStorage.getItem('alllocation');
    var a = JSON.parse(title);
    var b = JSON.parse(description);
    var c = JSON.parse(location);
     for (var loop = 0; loop < a.length; loop++) {
        // creating new div
        var div = document.createElement('div');
        div.id = divid;
        // creating button div
        var btndiv = document.createElement("div");
        btndiv.classList.add("btnDiv");
        btndiv.id = divid + 1;
        // adding classes to div
        div.classList.add("todoDiv");
        div.classList.add('style');
        // creating delete button
        var btn = document.createElement("button");
        btn.id = btnid;
        btn.onclick = delet;
        btn.classList.add('btn');
        btn.classList.add('hov');
        btn.classList.add('custombutton')
        btn.classList.add('waves-effect');
        btn.classList.add('waves-lighten-2');
        var text = document.createTextNode('Delete');
        btn.appendChild(text);
        // creating update button
        var btn1 = document.createElement("button");
        btn1.id = btnid;
         btn1.onclick = update;
        btn1.classList.add('btn');
        btn1.classList.add('custombutton')
        btn1.classList.add('waves-effect');
        btn1.classList.add('waves-lighten-2');
        var text1 = document.createTextNode('Edit');
        btn1.appendChild(text1);
        //Creating Detail Button
        var btn2 = document.createElement("button");
        btn2.id = btnid;
        btn2.onclick = display;
        btn2.classList.add('btn');
        btn2.classList.add('custombutton')
        btn2.classList.add('waves-effect');
        btn2.classList.add('waves-lighten-2');
        var text1 = document.createTextNode('Details');
        btn2.appendChild(text1);

        var e = document.getElementById('show').appendChild(div);
        // creating paragraph
        var g = document.createElement("p");
        g.classList.add('paragraph')
        var f = document.createTextNode(a[loop]);
        g.appendChild(f);
        btndiv.appendChild(g);
        e.appendChild(btndiv);
        e.appendChild(btn);
        e.appendChild(btn1);
        e.appendChild(btn2);

        divid += 1;
        btnid += 1;
    }
}
function delet(){
    var val = document.getElementById(this.id);
    val.parentNode.remove();
    var mytitle = JSON.parse(localStorage.getItem("alltitle"));
    var mydescription = JSON.parse(localStorage.getItem("alldescriptions"));
    var mylocation = JSON.parse(localStorage.getItem('alllocation'));
    mytitle.splice(this.id, 1);
    mydescription.splice(this.id, 1);
    mylocation.splice(this.id, 1);
    localStorage.setItem("alltitle", JSON.stringify(mytitle));
    localStorage.setItem("alldescriptions", JSON.stringify(mydescription));
    localStorage.setItem("alllocation", JSON.stringify(mylocation));
    window.location.reload();
}
function update(){
    var sum =  this.id;
    localStorage.setItem('idd', sum);
    location.href = "Edit.html";
}
function display(){
    var sum =  this.id;
    localStorage.setItem('idd', sum);
    location.href = "display.html";
}
