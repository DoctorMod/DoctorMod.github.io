var x = 20;
var y = 20;
var xvel = 0;
var yvel = 20;

var oldTime = 0;

var player1;
var currentlevel = 0;

//Debug
var drawMode = false;
var shapeMode = "rect";

var startMouse = { x: 0, y: 0 };
var endMouse = { x: 0, y: 0 };
var debugDrawList = [];

var draw_button;
var rect_button;
var circle_button;
var decorLevels = {};

var t = 1;

function preload() {

}

function setup() {
    const myCanvas = createCanvas(960, 720);
    myCanvas.parent('canvasDiv');

    player1 = new player(56, 132, 35, {
        up: 87,
        down: 83,
        left: 65,
        right: 68
    });
    decorLevels = {
        13: loadImage('backgrounds/13.png'),
        20: loadImage('backgrounds/20.png'),
        21: loadImage('backgrounds/21.png'),
        22: loadImage('backgrounds/22.png'),
        24: loadImage('backgrounds/24.png'),
        25: loadImage('backgrounds/25.png'),
        27: loadImage('backgrounds/27.png'),
        30: loadImage('backgrounds/30.png'),
        32: loadImage('backgrounds/32.png'),
        34: loadImage('backgrounds/34.png'),
        35: loadImage('backgrounds/35.png')
    };
    wheel = loadImage('wheel.png');
}

function draw() {
    dt = Date.now() - oldTime;
    if (dt > 17) {
        oldTime = Date.now();
        update();
    }

    background(255);
    if (decorLevels[currentlevel] != undefined) background(decorLevels[currentlevel]);
    noStroke();
    fill("red");
    circle(player1.x, player1.y, player1.radius * 2);
    fill("black");
    if (levels[currentlevel] == undefined) currentlevel = 0;
    for (let i = 0; i < levels[currentlevel].length; i++) {
        const platformElem = levels[currentlevel][i];
        platformElem.init();
    }
    if (keyIsDown(76)) {
        text('Yv: ' + player1.Yv, 800, 35);
        text('Xv: ' + player1.Xv, 800, 70);
        text('t: ' + t, 800, 105);
        console.log(t);
        stroke('black');
        strokeWeight(10);
        point(player1.x, player1.y);
        stroke('pink');
        point(player1.x + player1.radius, player1.y + player1.radius);
    }
    if (keyIsDown(66)) {
        currentlevel += 1;
        player1.init();
    }
    if (drawMode) {
        text('DRAW MODE ACTIVE', 800, 35);
        if (draw_button == undefined) {
            draw_button = createButton("Turn off Draw Mode");
            draw_button.position(30, 70);
            draw_button.mousePressed(endDraw);
        }
        if (rect_button == undefined) {
            rect_button = createButton("RECT MODE");
            rect_button.position(30, 700);
            rect_button.mousePressed(function() { shapeMode = "rect"; });
        }
        if (circle_button == undefined) {
            circle_button = createButton("CIRCLE MODE");
            circle_button.position(130, 700);
            circle_button.mousePressed(function() { shapeMode = "circle"; });
        }
        fill("blue")
        if (shapeMode == "rect") {
            rect(startMouse.x, startMouse.y, endMouse.x - startMouse.x, endMouse.y - startMouse.y);
        } else if (shapeMode == "circle") {
            var distX = startMouse.x - endMouse.x;
            var distY = startMouse.y - endMouse.y;
            var radius = sqrt((distX * distX) + (distY * distY));
            circle(startMouse.x, startMouse.y, radius * 2);
        }
        for (let j = 0; j < debugDrawList.length; j++) {
            debugDrawList[j].init();
        }
    }

    if (currentlevel == 26) {
        t += 0.5;
        if (t > 360) t = 0;
        translate(784, 200);
        imageMode(CENTER);
        rotate(PI / 180 * t);
        image(wheel, 0, 0, 256, 252);
        if (t > 0 && t < 90) {
            levels[currentlevel][levels[currentlevel].length - 1].tag = "death";
        } else if (t > 90 && t < 180) {
            levels[currentlevel][levels[currentlevel].length - 1].tag = "floor";
        } else if (t > 180 && t < 270) {
            levels[currentlevel][levels[currentlevel].length - 1].tag = "goal";
        } else if (t > 270) {
            levels[currentlevel][levels[currentlevel].length - 1].tag = "floor";
        }
    } else {
        translate(0, 0);
        rotate(0);
        imageMode(CORNER);
    }
    if (currentlevel == 29) {
        t -= 7;
        if (t < -50) t = 900;
        levels[currentlevel][levels[currentlevel].length - 1].x = t;
    }

}

function update() {
    if (keyIsDown(78) && !drawMode) {
        drawMode = true;
    }
    if (!drawMode) {
        player1.update();
    }
}

function mousePressed() {
    if (drawMode) {
        startMouse.x = 2 * Math.round(mouseX / 2);
        startMouse.y = 2 * Math.round(mouseY / 2);
        endMouse.x = 2 * Math.round(mouseX / 2);
        endMouse.y = 2 * Math.round(mouseY / 2);
    }
}

function mouseDragged() {
    if (drawMode) {
        endMouse.x = 2 * Math.round(mouseX / 2);
        endMouse.y = 2 * Math.round(mouseY / 2);
    }
}

function mouseReleased() {
    if (drawMode) {
        if (shapeMode == "rect") {
            if (endMouse.x - startMouse.x < 0) {
                var width = startMouse.x - endMouse.x;
                startMouse.x = endMouse.x;
            } else var width = endMouse.x - startMouse.x;
            if (endMouse.y - startMouse.y < 0) {
                var height = startMouse.y - endMouse.y;
                startMouse.y = endMouse.y;
            } else var height = endMouse.y - startMouse.y;
            if (width != 0 || height != 0) debugDrawList.push(new platform(startMouse.x, startMouse.y, width, height, 'debug'));


        } else if (shapeMode == "circle") {
            var distX = startMouse.x - endMouse.x;
            var distY = startMouse.y - endMouse.y;
            var radius = Math.round(sqrt((distX * distX) + (distY * distY)));
            if (radius != 0) debugDrawList.push(new circlePlatform(startMouse.x, startMouse.y, radius, 'debug'));
        }
    }
}

function endDraw() {
    var outp = 'var TempLevel = [];'
    for (let j = 0; j < debugDrawList.length; j++) {
        if (debugDrawList[j].type == "rect") {
            outp += `\nTempLevel.push(new platform(${debugDrawList[j].x}, ${debugDrawList[j].y}, ${debugDrawList[j].w}, ${debugDrawList[j].h}, ''));`;
        } else if (debugDrawList[j].type == "circle") {
            outp += `\nTempLevel.push(new circlePlatform(${debugDrawList[j].x},${debugDrawList[j].y},${debugDrawList[j].radius}, ''));`;
        }
    }
    drawMode = false;
    draw_button.remove();
    draw_button = undefined;
    circle_button.remove();
    circle_button = undefined;
    rect_button.remove();
    rect_button = undefined;

    console.log(outp + '\nlevels.push(TempLevel);');
}

function collision(obj1, obj2) {
    if (obj1.type == "circle" && obj2.type == "rect") {
        //https://jeffreythompson.org/collision-detection/circle-rect.php
        var testX = obj1.x;
        var testY = obj1.y;

        if (obj1.x < obj2.x) testX = obj2.x; // left edge
        else if (obj1.x > obj2.x + obj2.w) testX = obj2.x + obj2.w; // right edge

        if (obj1.y < obj2.y) testY = obj2.y; // top edge
        else if (obj1.y > obj2.y + obj2.h) testY = obj2.y + obj2.h; // bottom edge

        var distX = obj1.x - testX;
        var distY = obj1.y - testY;
        var distance = sqrt((distX * distX) + (distY * distY));

        if (distance <= obj1.radius) {
            return true;
        }

        return false;
    } else if (obj1.type == "circle" && obj2.type == "circle") {
        var distX = obj1.x - obj2.x;
        var distY = obj1.y - obj2.y;
        var distance = sqrt((distX * distX) + (distY * distY));
        if (distance <= obj1.radius + obj2.radius) {
            return true;
        }
        return false;
    }
}

function checkAllCollisions(entity, list, tag) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].tag == tag) {
            if (collision(entity, list[i])) {
                i = list.length;
                return true;
            }
        }
    }
    return false;
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();

    if (axis === Y_AXIS) {
        // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            let inter = map(i, y, y + h, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    } else if (axis === X_AXIS) {
        // Left to right gradient
        for (let i = x; i <= x + w; i++) {
            let inter = map(i, x, x + w, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(i, y, i, y + h);
        }
    }
}