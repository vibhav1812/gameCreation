class Game{
    constructor(){
    }

    readGameState(){
        database.ref("gameState").on("value",function(data){
            gameS = data.val();
        })
    }

    writeGameState(state){
        database.ref("/").update({
            gameState : state 
        })
    }

    start(){
        if(gameS === 0){
            player = new Player();
            player.getPlayerCount();
          
            form = new Form();
            form.display();
        }
        bg = createSprite(width/2,height/2,width,height);
        bg.addImage(bgImg);
        bg.scale = 1.5
        bg.y = height/2
        astro1 = createSprite(300,700,10,10);
        astro1.addImage(astroImg);
        astro1.scale = 0.1
        astro2 = createSprite(1000,700,10,10);
        astro2.addImage(astroImg);
        astro2.scale = 0.1
        astro = [astro1,astro2]
    }

    play(){
        form.hide();
        player.getAllPlayerDetails();
        if(allPlayers){
            bg.velocityY = -2;
                if(bg.y<150){
                 bg.y = height/2
                }   

                var y = 700
                var x = 300 
                var i = 0
                for(var plr in allPlayers){
                    y = 700;
                    x = width-allPlayers[plr].distance;
                    astro[i].x = x 
                    astro[i].y = y
                    console.log(astro[i])
                    i=i+1
                }

            if(keyDown("LEFT_ARROW")){
                player.distance = player.distance+10;
                player.updatePlayerDetails();
            }

            if(keyDown("RIGHT_ARROW")){
                player.distance = player.distance-10;
                player.updatePlayerDetails();
            }
        }

    }

}