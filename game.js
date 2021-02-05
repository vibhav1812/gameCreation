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

    async start(){
        if(gameS === 0){
            player = new Player();
            player.getPlayerCount();
          
            var tempPC = await database.ref("playerCount").once("value");
            if(tempPC.exists()){
                playerC = tempPC.val();
                player.getPlayerCount();
            }

            form = new Form();
            form.display();
        }
        bg = createSprite(width/2,height/2,width,height);
        bg.addImage(bgImg);
       // bg.scale = 1.5
        bg.y = bg.height/2;
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
        var startingX;
        if(allPlayers){
            bg.velocityY = -2;
                if(bg.y<0){
                 bg.y = bg.height/2;
                }   

                var y=550;
                var x; 
                var i = 0
                for(var plr in allPlayers){
                    x = allPlayers[plr].startingX-allPlayers[plr].Distance;
                    //console.log(x);
                    astro[i].x = x 
                    astro[i].y = y
                   // console.log(astro[i])
                   
                    i=i+1
                }

            if(keyDown("LEFT_ARROW") && player.index!=null){
                player.distance = player.distance+10;
                player.updatePlayerDetails();
            }

            if(keyDown("RIGHT_ARROW")  && player.index!=null){
                player.distance = player.distance-10;
                player.updatePlayerDetails();
            }
        }

    }

}