var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
    blockImgObj=Img;
    blockImgObj.scaleToWidth(700);
    blockImgObj.scaleToHeight(510);
    blockImgObj.set({
        top:0,
        left:0,

    });
    canvas.add(blockImgObj);
});	
	
}

function x_play(){
	x.play();
}
