var dogHappy
var dogStand
var foodS
var FoodStock

function preload()
{
	dogHappy = loadImage("images/dogHappy.png");
  dogStand = loadImage("images/dogStand.png");
  //load images here
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);
  dog = createSprite(250,300,100,100);
  dog.scale =0.25
  dog.addImage(dogStand)
}
function readStock(data){
  foodS = data.val();
 
 }
 function writeStocks(x){
  dog.addImage(dogHappy)
   if(x<=0){
      x=0;
   }
   else{
     x=x-1
   }
 
   database.ref('/').update({
     Food:x
   })
  }

function draw() {  
background(46, 139, 87);


  drawSprites();
  //add styles here
  text("Note: Press UP_ARROW Key To Feed the Pup! ",250, 50)
  textSize(25)
  text("Food remaining :"+foodS,250,200)


  if(keyWentDown(UP_ARROW)){
    writeStocks(foodS);
  }
}