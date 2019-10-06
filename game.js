let Application = PIXI.Application;
let Sprite = PIXI.Sprite;
let pre = PIXI.loader;
let Text = PIXI.Text;
let resources = PIXI.loader.resources;
let game = new Application({ 
    backgroundColor: 0x87CEEB,  
    height: 600, 
    width: 600});
var player;
var state;
document.body.appendChild(game.view);
pre.add("player.png");
pre.add("chef.png");
pre.add("game.png");
pre.load(setStage);
    
function setStage() {
maze = new Sprite(resources["game.png"].texture);
player = new Sprite(resources["player.png"].texture);

maze.x = 0;
maze.y = 0;
player.x = 0;
player.y = 300; 
player.vx = 0;
player.vy = 0;

game.stage.addChild( maze );
game.stage.addChild( player );

let aKey = keyboard( 65 );
let dKey = keyboard( 68 );
let wKey = keyboard( 87 );
let sKey = keyboard( 83 );
let qKey = keyboard(81);
let enterKey = keyboard( 13 );
    
enterKey.press = () =>{        
qKey.press = () => {
  player.x = player.x + 50;
    player.y = player.y - 100;
    console.log("Player X = " + player.x);
    console.log("Player Y = " + player.y);
};
    
wKey.press = () => {
  player.x = player.x + 50;
    player.y = player.y + 100;
    console.log("Player X = " + player.x);
    console.log("Player Y = " + player.y);
};

aKey.press = () => {
  player.x = player.x + 50;
    player.y = player.y - 50;
    console.log("Player X = " + player.x);
    console.log("Player Y = " + player.y);
};
    
sKey.press = () => {
  player.x = player.x + 50;
    player.y = player.y + 50;
    console.log("Player X = " + player.x);
    console.log("Player Y = " + player.y);
};
    
dKey.press = () => {
  player.x = player.x + 50;
    player.y = player.y + 0;
    console.log("Player X = " + player.x);
    console.log("Player Y = " + player.y);
};
}
        
state = play;
game.ticker.add( delta => gameLoop( delta ) );}

function gameLoop( delta )
{
state( delta );
}

function play( delta ) 
{
player.x += player.vx;
player.y += player.vy;
bounds();
balloonCollider();
finish();
}

function bounds()
{
if(player.x < 0 || player.y < 0)
{
window.setTimeout(resetPlayer, 300);
}
if(player.x > 550 || player.y > 500)
{
window.setTimeout(resetPlayer, 300);
}}

function balloonCollider()
{
    if(player.y > 350)
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 50 && (player.y >=250))
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 100 && (player.y == 200 || player.y == 150))
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 100 && (player.y == 100 || player.y == 150))
    {
        window.setTimeout(resetPlayer, 300);
    }
        if(player.x == 200 && (player.y >= 250 ))
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 250 && (player.y >= 100 ))
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 300 && (player.y ==0 || player.y == 50) )
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 300 && (player.y > 100) )
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 350 && (player.y >= 150) )
    {
        window.setTimeout(resetPlayer, 300);
    }
    
    
    if(player.x == 400 && (player.y >= 200) )
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 450 && (player.y >= 100) )
    {
        window.setTimeout(resetPlayer, 300);
    }
    if(player.x == 500 && (player.y >= 150) )
    {
        window.setTimeout(resetPlayer, 300);
    }
}

function resetPlayer()
{
    player.x = 0;
    player.y = 300;
}

function finish()
{
if (player.x == 550 && player.y == 200)
{
let finishText = new PIXI.Text('YOU WON', {fontFamily : 'Arial', fontSize: 30, fill : 0x000000, visible : true});
finishText.position.set(270, 0);
game.stage.addChild(finishText);}}
    
function keyboard(keyCode) 
{
var key = {};
key.code = keyCode;
key.isDown = false;
key.isUp = true;         
key.downHandler = event => 
{
if (event.keyCode == key.code && key.press)
{
key.press();
key.isDown = true;
key.isUp = false;}
event.preventDefault();};
key.upHandler = event => 
{
if (event.keyCode == key.code && key.release)
{
key.release();
key.isDown = false;
key.isUp = true;
}
event.preventDefault();};
window.addEventListener("keydown", key.downHandler.bind(key), false);
window.addEventListener("keyup", key.upHandler.bind(key), false);
return key;}
	
//Code used for Keyboard Movement:
//https://github.com/kittykatattack/learningPixi/blob/master/examples/12_keyboardMovement.html