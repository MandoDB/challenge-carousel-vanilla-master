document.body.onload=function() {
    nbr=5;
    p=0;

    var container = document.getElementById("container");
    var carousel = document.getElementById("carousel");
    var g = document.getElementById("g");
    var d = document.getElementById("d");

    container.style.width=(800*nbr)+"px";
   for(i=1;i<=nbr;i++) {
        var div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('imgs/img-"+i+".png')";
        container.appendChild(div)
   } 
}