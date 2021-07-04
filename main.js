 var  canvas = new fabric.Canvas("myCanvas");
 var imge_width = 35;
 var imge_height = 35;
 var playerx = 20;
 var playery = 20;
 var player_object = "";
  var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:playery,
    left:playerx
});
canvas.add(player_object);
    });
}

function Tarana(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(imge_width);
        block_image_object.scaleToHeight(imge_height);
        block_image_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_image_object);
    });
 }

 window.addEventListener("keydown", my_key);
 function my_key(e){
     keyPressed = e.keyCode;
     console.log(keyPressed);
     if(e.shiftKey == true && keyPressed == '80'){
         console.log("p and shift pressed together");
        imge_width = imge_width + 10;
        imge_height = imge_height + 10;        document.getElementById("cwidth").innerHTML = imge_width;
        document.getElementById("cheight").innerHTML = imge_height;
     }
        if(e.shiftKey == true && keyPressed == '77'){
            console.log("m and shift pressed together");
           imge_width = imge_width - 10;
           imge_height = imge_height - 10;
           document.getElementById("cwidth").innerHTML = imge_width;
           document.getElementById("cheight").innerHTML = imge_height;
    

     }
     if(keyPressed == '38')
     {  up();
         console.log("up");
     }
     if(keyPressed == '40'){
         down();
         console.log("down");
     }
     if(keyPressed == '37'){
         left();
         console.log("left");
     }
     if(keyPressed == '39'){
         right();
         console.log("right");
     }
     if(keyPressed == '87'){
        Tarana('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '71'){
        Tarana('ground.png');
        console.log("g");
    }
    if(keyPressed == '76'){
        Tarana('light_green.png');
        console.log("l");
    }
    if(keyPressed == '85'){
        Tarana('unique.png')
        console.log("u")
    }
    if(keyPressed == '68'){
        Tarana('dark_greeen.png')
        console.log("d")
    }}
    function up()
    {
        if(playery >= 0)
    {
        playery = playery - imge_height ;
        console.log("height of the block =" + imge_height);
        console.log("When up arrow is presssed, X =" + playerx + "Y="+ playery);
        canvas.remove(player_object);
        player_update();
    }
    }

    function down()
    {
        if(playery <= 530)
    {
        playery = playery + imge_height ;
        console.log("height of the block =" + imge_height);
        console.log("When down arrow is presssed, X =" + playerx + "Y="+ playery);
        canvas.remove(player_object);
        player_update();
    }
    }

    function left()
    {
        if(playerx >=0  )
    {
        playerx = playerx - imge_width ;
        console.log("  width of the block =" + imge_width);
        console.log("When left arrow is presssed, X =" + playerx + "Y="+ playery);
        canvas.remove(player_object);
        player_update();
    }
    }
    
    function right()
    {
        if(playerx <= 840 )
    {
        playerx = playerx + imge_width ;
        console.log("width of the block =" + imge_width);
        console.log("When right arrow is presssed, X =" + playerx + "Y="+ playery);
        canvas.remove(player_object);
        player_update();
    }
    }
    

    