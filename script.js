document.body.onload=function() {

     var MyImages = [
          "imgs/img-1.png",
          "imgs/img-2.png",
          "imgs/img-3.png",
          "imgs/img-4.png",
          "imgs/img-5.png",
          "imgs/img-6.png",
          "imgs/img-7.png",
          "imgs/img-8.png",
     ]
    nbr=MyImages.length;
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

   d.onclick=function() {
     if(p>-nbr+1)
     p--;
     container.style.transform="translate("+p*800+"px)";
     container.style.transition = "all 0.5s ease"
   }


   g.onclick=function() {
     if(p<0)
     p++;
     container.style.transform="translate("+p*800+"px)";
     container.style.transition = "all 0.5s ease"
   }
}

