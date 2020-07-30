
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Update is called once per frame

var character = {
    x: 0,
    y: 110
};
var background = getMap("map");
paper (7);

exports.update = function () {
    if(btn.right) {
        sfx('WalkTwo')
        character.x +=1;
    }
    if(btn.left){
        sfx('WalkTwo')
        character.x -=1;
    }
    if(btn.up){
        sfx ('WalkTwo')
        character.y -=1;
    }
    if(btn.down){
        sfx ('WalkTwo')
        character.y +=1;
    }
    cls();
    draw(background, 0, 0);
	sprite(153, character.x, character.y)
};
