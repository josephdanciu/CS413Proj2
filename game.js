//intializing everything to start the game
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
//adding the player, game, welcome screen, credits, and death screen before
pre.add("player.png");
pre.add("game.png");
pre.add("WelcomeScreen.png");
pre.add("credits.png");
pre.add("blowup.png");

//loading the stage
pre.load(setStage);
    
//adding all the instructions, needed to make multiple of them due to the fact that align content didnt work
let instructions = new PIXI.Text('Press 2 for Instructions', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal1 = new PIXI.Text('Instructions: Take your hot air balloon to the other side of the castle.' , {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal2 = new PIXI.Text('Watch out for obsticles!' , {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal3 = new PIXI.Text('If you hit a bird, tree, or the castle you will have to restart. (you can hit the clouds).', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal4 = new PIXI.Text('Controls: (also included at the bottom of the screen during play) ', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal5 = new PIXI.Text('Q: Move 2 Up (and 1 Right)', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal6 = new PIXI.Text('W: Move 2 Down (and 1 Right)', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal7 = new PIXI.Text('A: Move 1 Up (and 1 Right)', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal8 = new PIXI.Text('S: Move 1 Down (and 1 Right)', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let instructionsReal9 = new PIXI.Text('D: Move 1 Right', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});


//load startgame text and welcomescreen text
let welcomeScreenText = new PIXI.Text('Press 1 to go to Welcome Screen', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});
let startGame = new PIXI.Text('Press 1 to Start Game', {fontFamily : 'Arial', fontSize: 15, fill : 0x000000, visible : true});



function setStage() 
{
    //load some basic png's
    background = new Sprite(resources["game.png"].texture);
    player = new Sprite(resources["player.png"].texture);
    welcomeScreen = new Sprite(resources["WelcomeScreen.png"].texture);
    credits = new Sprite(resources["credits.png"].texture);
    gameOver = new Sprite(resources["blowup.png"].texture);

    //add the startGame and instructions text on the welcome screen
    startGame.position.set(220, 319);
    game.stage.addChild(startGame);
    instructions.position.set(220, 382);
    game.stage.addChild(instructions);
    
    //initialize their location
    background.x = 0;
    background.y = 0;
    player.x = 0;
    player.y = 300;
    player.vx = 0;
    player.vy = 0;
    welcomeScreen.x = 0;
    welcomeScreen.y = 0;
    game.stage.addChild( welcomeScreen );
    
    //initialize the keyboard keys used in the game
    let aKey = keyboard( 65 );
    let dKey = keyboard( 68 );
    let wKey = keyboard( 87 );
    let sKey = keyboard( 83 );
    let qKey = keyboard(81);
    let enterKey = keyboard( 13 );
    player.x = 0;
    player.y = 300; 
    
    //instructions for the Q key
    qKey.press = () => 
    {
        player.x = player.x + 50;
        player.y = player.y - 100;
    };
    //instructions for the W key
    wKey.press = () => 
    {
        player.x = player.x + 50;
        player.y = player.y + 100;
    };
    //instructions for the A key
    aKey.press = () => 
    {
        player.x = player.x + 50;
        player.y = player.y - 50;
    };
    //instructions for the S key
    sKey.press = () => 
    {
        player.x = player.x + 50;
        player.y = player.y + 50;
    };
    //instructions for the D key
    dKey.press = () => 
    {
        player.x = player.x + 50;
        player.y = player.y + 0;
    };
     
    state = play;
    game.ticker.add( delta => gameLoop( delta ) );
}

//gameLoop function
function gameLoop( delta )
{
    state( delta );
}

//play function..called every tick
function play( delta ) 
{
    bounds();
    balloonCollider();
    runEverything();
}

//function to check if player left the bounds
function bounds()
{
    if(player.x < 0 || player.y < 0)
    {
        window.setTimeout(resetPlayer, 300);
    }
if(player.x > 550 || player.y > 500)
    {
        window.setTimeout(resetPlayer, 300);
    }
}

//function to check if the balloon collided with anything on the screen
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
        if(player.x == 200 && (player.y >= 200 ))
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
    if(player.x == 350 && (player.y >= 100) )
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

//function to easily reset the player if it crashes with anything or if it goes out of bounds
function resetPlayer()
{
    player.x = 0;
    player.y = 300;
    game.stage.addChild(gameOver);
    game.stage.removeChild(background);
    window.setTimeout(removeCrash, 800);
    return;
}

//function to remove the crash screen
function removeCrash()
{
    game.stage.removeChild(gameOver);
    game.stage.addChild(background);
}

//function used to check what screen you are on and to change the screens
function runEverything()
{
    let oneKey = keyboard( 49 );
    let twoKey = keyboard( 50 );

    if(player.x == 0 && player.y == 300)
    {
        oneKey.press = () => 
        {
            game.stage.removeChild(welcomeScreen);
            game.stage.addChild(background);
            game.stage.addChild(player);
            game.stage.removeChild(instructions);
            game.stage.removeChild(startGame);
            game.stage.removeChild(instructionsReal1);
            game.stage.removeChild(instructionsReal2);
            game.stage.removeChild(instructionsReal3);
            game.stage.removeChild(instructionsReal4);
            game.stage.removeChild(instructionsReal5);
            game.stage.removeChild(instructionsReal6);
            game.stage.removeChild(instructionsReal7);
            game.stage.removeChild(instructionsReal8);
            game.stage.removeChild(instructionsReal9);
            return;
        };
        twoKey.press = () => 
        {
            if(player.x != 0 && player.y != 300)
            {
            game.stage.removeChild(instructionsReal1);
            game.stage.removeChild(instructionsReal2);
            game.stage.removeChild(instructionsReal3);
            game.stage.removeChild(instructionsReal4);
            game.stage.removeChild(instructionsReal5);
            game.stage.removeChild(instructionsReal6);
            game.stage.removeChild(instructionsReal7);
            game.stage.removeChild(instructionsReal8);
            game.stage.removeChild(instructionsReal9);
            }
            else{
            instructionsReal1.position.set(25, 450);
            game.stage.addChild(instructionsReal1);
            instructionsReal2.position.set(25, 470);
            game.stage.addChild(instructionsReal2);
            instructionsReal3.position.set(25, 490);
            game.stage.addChild(instructionsReal3);
            instructionsReal4.position.set(25, 510);
            game.stage.addChild(instructionsReal4);
            instructionsReal5.position.set(25, 530);
            game.stage.addChild(instructionsReal5);
            instructionsReal6.position.set(25, 550);
            game.stage.addChild(instructionsReal6);
            instructionsReal7.position.set(275, 530);
            game.stage.addChild(instructionsReal7);
            instructionsReal8.position.set(275, 550);
            game.stage.addChild(instructionsReal8);
            instructionsReal9.position.set(25, 570);
            game.stage.addChild(instructionsReal9);
                return;
            }
        };
    }
    
    
    else if(player.x == 550 && player.y == 200)
    {
        window.setTimeout(finish, 500)
    }
    else if(player.x == 0 && player.y == 0)
        {
            oneKey.press = () => 
            {
                game.stage.removeChild(welcomeScreenText);
                game.stage.addChild(startGame);
                game.stage.addChild(instructions);
                game.stage.removeChild(player);
                game.stage.removeChild(credits);
                game.stage.removeChild(background);
                game.stage.addChild(welcomeScreen);
                player.x = 0;
                player.y = 300;
            }
        }
}


//function to finish the game
function finish()
{
    game.stage.removeChild(background);
    player.x = 0;
    player.y = 0;
    game.stage.addChild(credits);
    game.stage.removeChild(player);
    game.stage.removeChild(gameOver);
    welcomeScreenText.position.set(220, 319);
    return;
}

//keyboard function used whenever a key is pressed
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
        event.preventDefault();
    };
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
    return key;
}
	
//Code used for Keyboard Movement:
//https://github.com/kittykatattack/learningPixi/blob/master/examples/12_keyboardMovement.html