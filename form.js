class Form{
    constructor(){
        this.button = createButton("PLAY");
        this.input = createInput("Name");
        this.title = createElement("h1");
        this.greeting = createElement("h1");
    }

    display(){
        this.button.position(width/2+10,height/2+80);
        this.input.position(width/2-50, height/2+20);
        this.title.position(width/2-70,130);
        this.title.html("Ultimate Survival")
       
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerC = playerC+1
            player.index = playerC;
            player.setPlayerCount(playerC);
            player.updatePlayerDetails();
            this.greeting.position(width/2,height/2);
            this.greeting.html("Welcome "+ player.name);
        });

    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.greeting.hide();
    }
    
}