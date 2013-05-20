/**
 * Created with JetBrains WebStorm.
 * User: Aram Ali Qureshi
 * Date: 5/19/13
 * Time: 9:54 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){

    var svg = d3.select("#canvas").append("svg").attr("width",window.screen.width-10).attr("height",window.screen.height-140);
    function drawCircle(canvas,cx,cy,url){

        var candidate = canvas.append("image")
                        .attr({
                            x:cx,
                            y:cy,
                            width:100,
                            height:100,
                            "xlink:href":url
                        });


        candidate.on("click",function(){
            d3.select(this).transition().duration(3000)
                .attr({
                    x:(screen.width-110)/2,
                    y:(screen.height-240)/2
                });
        console.log(this);
        });


    }

    function drawRectangle(canvas,x,y,width,height,fill){
        return canvas.append("rect")
            .attr({
                "x":x,
                "y":y,
                "width":width,
                "height": height,
                "fill":fill
            });
    }


    var nationalAssembly = drawRectangle(svg,(screen.width-110)/2,(screen.height-240)/2,100,100,"green");
    var pti = drawCircle(svg,50,10,"ik.png");
    var pmln = drawCircle(svg,window.innerWidth-160,10,"sharif.png");
    var mqm = drawCircle(svg,window.innerWidth-160,window.innerHeight-140,"bhai.png");
    var ppp = drawCircle(svg,50,window.innerHeight-140,"kuta.png");


})();


