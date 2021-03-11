class Positions{

    getPosition(){

        var balloonPosition = database.ref("balloon/position");
        balloonPosition.on("value", position, showError);
        console.log("balloon==>",balloonPosition);
      }
    
    updatePosition(x, y){
      
        database.ref('balloon/position').set({
      
          'x' : position.x + x,
          'y' : position.y + y
        })
    }
      
    position(data){
      
        position = data.val();
        balloon.x = position.x;
        balloon.y = position.y;
      }
      
    showError(){

        console.log("Error");

    }  
      
}
