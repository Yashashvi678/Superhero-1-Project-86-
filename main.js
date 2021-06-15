var canvas = new fabric.Canvas('myCanvas');

superhero_new_image_width = 30;
superhero_new_image_height = 30;

player_x = 10;
player_y = 10;

var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
        
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        superhero_new_image_object = Img;
        
        superhero_new_image_object.scaleToWidth(superhero_new_image_width);
        superhero_new_image_object.scaleToHeight(superhero_new_image_height);
        superhero_new_image_object.set({

            top: player_y,
            left: player_x
        });
        canvas.add(superhero_new_image_object);
        
    });

}