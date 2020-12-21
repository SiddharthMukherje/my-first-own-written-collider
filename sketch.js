var fix
var move



function setup() {
  createCanvas(1200,400);
 fix=createSprite( 200,200,60,100)
 fix.shapeColor="green"
 move=createSprite(100,150,100,60 )
 move.shapeColor="green"

 fix.debug=true
 move.debug=true
}

function draw() {
  background(0);  
  move.x=World.mouseX
  move.y=World.mouseY

  if(move.x-fix.x< fix.width/2+move.width/2 &&
    fix.x-move.x<fix.width/2+move.width/2
    && fix.y-move.y<fix.height/2+move.height/2&&
    move.y-fix.y<fix.height/2+move.height/2){
    move.shapeColor="red"
    fix.shapeColor="red"
  }
  else{
    move.shapeColor="green"
    fix.shapeColor="green"
  }
  drawSprites();

}