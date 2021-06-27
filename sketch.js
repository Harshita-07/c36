var database;
var position;
var gameState = 0;
var playerCount, Form, Player, Game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

Game = new game();
Game.getState();
Game.start();
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}