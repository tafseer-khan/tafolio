export default function Mouse(){
    let cursor = document.querySelector(".cursor");

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

     let randomSC = () => {
      let c1=getRandomInt(0, 255);
      let c2=getRandomInt(0, 255);
      let c3=getRandomInt(0, 255);
      let sc = "border: 4px solid rgb(" + c1 + "," + c2 + "," + c3 + ");"+"box-shadow:0px 0px 40px 10px rgba("+c1+","+ c2+","+c3+", 1)";
      cursor.style.cssText += sc;
    }

    document.addEventListener("mousemove", function (e) {
      let mx = e.clientX -16;
      let my = e.clientY - 16;
      cursor.style.cssText += 
        "left: " + mx + "px; top: " + my + "px;";
        
    });
    document.addEventListener("mousedown",function(e){
      cursor.style.cssText += "background-color: rgba(255, 255, 255, 0.562);"
    });
    document.addEventListener("mouseup",function(e){
      cursor.style.cssText += "background-color: rgba(240, 248, 255, 0);";
    })
    randomSC();
    

    var intervalId = window.setInterval(function(){
      randomSC()
      
}, 1000);

}