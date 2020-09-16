var ball,database,position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    database = firebase.database()
    ball.shapeColor = "red";
    var ballpos = database.ref('ball/position')
    ballpos.on("value", readPos);
}

function draw(){
    background("white");
    if(position !== undefined) {
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPos(data) {
      position = data.val()
      ball.x = position.x;
      ball.y = position.y;
}
function writePos(x,y) {
    database.ref('ball/position').set({
        x: position.x+x,
        y: position.y+y
    })
}