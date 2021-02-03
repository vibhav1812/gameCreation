class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.lives = 10;
        this.distance = 0;
    }

    setPlayerCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    getPlayerCount(){
        database.ref("playerCount").on("value",function(data){
            playerC = data.val();
        })
    }

    updatePlayerDetails(){
        var path = "players/player"+ this.index
        database.ref(path).set({
            Name : this.name,
            Lives : this.lives,
            Distance : this.distance
        })
    }

    getAllPlayerDetails(){
        database.ref("players").on("value",function(data){
            allPlayers = data.val();

        })
    }

}