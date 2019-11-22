var counter = 0;
function centerScreen() {
    //Center screen
    var canvas = document.getElementById("box");
    var GSA = document.getElementById("screenArea");//Game Screen Area
    GSA.style.marginTop = (-canvas.height / 2) + 'px';
    GSA.style.marginLeft = (-canvas.width / 2) + 'px';
    //gameArea.style.fontSize = (newWidth / 400) + 'em';
    //window.addEventListener('resize', resizeScreen, false);

    if (counter == 0) {
        loadImages();
        counter++;
    }
}
function loadImages() {
    var imageLoading = 0;
//  ---------------/PLAYER IMG\------------
    var playerImg = new Image();
    playerImg.onload = function () {
        imageLoading++;
        run();
    };
    playerImg.src = "imagens/player.png";
//  -----------------\END/-----------------
    var defaultTile = new Image();
    defaultTile.onload = function () {
        imageLoading++;
        run();
    };
    defaultTile.src = "imagens/floor.png";

    var walls = new Image();
    walls.onload = function () {
        imageLoading++;
        run();
    };
    walls.src = "imagens/walls.png";

    function run() {
        if (imageLoading == 3) {
            load();
        }
    }

    function load() {
        var canvas = document.getElementById('box');
        var ctx = canvas.getContext('2d');
        var mapWidth = 9600;
        var mapHeight = 9600;
        var tileSize = 480;

        var keyUp, keyDown, keyLeft, keyRight, letterE;
        keyUp = 87;
        keyDown = 83;
        keyLeft = 65;
        keyRight = 68;
        letterE = 69;
        var interact = false;
        window.addEventListener("keydown", checkKeyDown, false);
        function checkKeyDown(event) {
            if (event.keyCode == keyUp) {
                thePlayer.up = true;
            } else if (event.keyCode == keyDown) {
                thePlayer.down = true;
            } else if (event.keyCode == keyLeft) {
                thePlayer.left = true;
            } else if (event.keyCode == keyRight) {
                thePlayer.right = true;
            } else if (event.keyCode == letterE) {
                interact = true;
            }
        }

        window.addEventListener("keyup", checkKeyUp, false);
        function checkKeyUp(event) {
            if (event.keyCode == keyUp) {
                thePlayer.up = false;
            } else if (event.keyCode == keyDown) {
                thePlayer.down = false;
            } else if (event.keyCode == keyLeft) {
                thePlayer.left = false;
            } else if (event.keyCode == keyRight) {
                thePlayer.right = false;
            } else if (event.keyCode == letterE) {
                interact = false;
            }
        }

        function collision(a, b, type) {
            if (type == 'touch') {
                if ((a.x + a.width > b.x) && (a.x < b.x + b.width) && (a.y + a.height > b.y) && (a.y < b.y + b.height)) {
                    return true;
                }
            }
            if (type == 'inside') {
                if ((a.x > b.x) && (a.x + a.width < b.x + b.width) && (a.y > b.y) && (a.y + a.height < b.y + b.height)) {
                    return true;
                }
            }
        }


        var potentialCollisions = [];

        function movementReaction(target, collisionsObject) {//Both must have: x,y,width,height - Target must have: speedX,speedY,up,down,left,right;
            for (var i = 0; i < collisionsObject.length; i++) {
                var COS = collisionsObject[i];//collision objects
                if (target == COS) {
                    this.objectNumber = i;
                    break;
                }
            }

            this.update = function () {
                if (target.up) {
                    target.speedY = -target.speed;
                    if (target.speedY < 0) {
                        for (var i = 0; i > target.speedY; i--) {
                            target.y -= 1;
                            for (var g = 0; g in collisionsObject; g++) {
                                if (g != this.objectNumber) {
                                    if (collision(target, collisionsObject[g], 'touch')) {
                                        target.y += 1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (target.down) {
                    target.speedY = target.speed;
                    if (target.speedY > 0) {
                        for (var i = 0; i < target.speedY; i++) {
                            target.y += 1;
                            for (var g = 0; g in collisionsObject; g++) {
                                if (g != this.objectNumber) {
                                    if (collision(target, collisionsObject[g], 'touch')) {
                                        target.y -= 1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (target.left) {
                    target.speedX = -target.speed;
                    if (target.speedX < 0) {
                        for (var i = 0; i > target.speedX; i--) {
                            target.x -= 1;
                            for (var g = 0; g in collisionsObject; g++) {
                                if (g != this.objectNumber) {
                                    if (collision(target, collisionsObject[g], 'touch')) {
                                        target.x += 1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if (target.right) {
                    target.speedX = target.speed;
                    if (target.speedX > 0) {
                        for (var i = 0; i < target.speedX; i++) {
                            target.x += 1;
                            for (var g = 0; g in collisionsObject; g++) {
                                if (g != this.objectNumber) {
                                    if (collision(target, collisionsObject[g], 'touch')) {
                                        target.x -= 1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function cameraFollow(x, y, canvasO) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvasO.width, canvasO.height);
            ctx.translate(-x + canvasO.width / 2, -y + canvasO.height / 2);
        }

        function animation(x, y, images, frames, task, defaultTask, loop) {
            this.x = x;
            this.y = y;
            this.images = images;
            this.currentTask = defaultTask;
            this.frames = frames;
            this.task = task;
            this.loop = loop;
            this.ended = false;

            this.img = [];
            for (var i = 0; i < this.images.length; i++) {
                this.img.push(new Image());
                this.img[i].src = this.images.src + i + ".png";
            }

            var CI;//Current Image
            var CIN = 0;//Current Image Number
            var FC = 0;//Frame Counter
            this.run = function () {
                CI = this.task[this.currentTask];
                if (CI.playing == false) {
                    CIN = CI.start;
                    CI.playing = true;
                }

                if (FC == this.frames) {
                    CIN++;
                    if (CIN == CI.frames + CI.start) {
                        this.ended = true;
                        if (this.loop) {
                            CIN = CI.start;
                        } else {
                            CIN = CI.frames + CI.start - 1;
                        }
                    } else {
                        this.ended = false;
                    }
                    FC = 0;
                }
                ctx.drawImage(this.img[CIN], this.x, this.y);
                FC++;
            };

            this.changeTask = function (task) {
                this.currentTask = task;
                CIN = this.task[this.currentTask].start;
            }
        }

        function tile(id, x, y, size, image) {
            this.id = id;
            this.x = x;
            this.y = y;
            this.size = size;
            this.image = image;

            this.draw = function () {
                ctx.drawImage(this.image, this.x, this.y);
            }
        }

        var TCP = {}; //tileCreatingProperties
        TCP.x = 0;
        TCP.y = 0;
        TCP.id = 0;

        var tiles = [[]];
        for (var h = 0; h < mapHeight / tileSize; h++) {
            for (var w = 0; w < mapWidth / tileSize; w++) {
                tiles[h][w] = new tile(TCP.id, TCP.x, TCP.y, tileSize, defaultTile);
                TCP.id++;
                TCP.x += tileSize;
            }
            TCP.x = 0;
            TCP.y += tileSize;
            tiles.push([]);
        }

        function room(x, y, width, height, image) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.center = {};
            this.center.x = this.x + this.width / 2;
            this.center.y = this.y + this.height / 2;

            this.image = image;
            this.imageWidth = this.image.width;
            this.imageHeight = this.image.height;

            this.walls = {
                left: {x: this.x, y: this.y, width: 1, height: this.height},
                right: {x: this.x + this.width - 1, y: this.y, width: 1, height: this.height},
                up: {x: this.x, y: this.y, width: this.width, height: 1},
                down: {x: this.x, y: this.y + this.height - 1, width: this.width, height: 1}
            };
            potentialCollisions.push(this.walls.left);
            potentialCollisions.push(this.walls.right);
            potentialCollisions.push(this.walls.up);
            potentialCollisions.push(this.walls.down);

            this.draw = function () {
                ctx.drawImage(this.image, this.x - 80, this.y - 80);
            }
        }

        var mainRoom = new room(tiles[10][10].x, tiles[10][10].y, tileSize, tileSize, walls);


        function player(src, x, y, speed) {
            this.image = new Image();
            this.image.src = src;
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.speedX = this.speed;
            this.speedY = this.speed;
            this.width = this.image.width;
            this.height = this.image.height;

            this.up = false;
            this.down = false;
            this.left = false;
            this.right = false;

            this.movementReaction = new movementReaction(this, potentialCollisions);

            this.draw = function () {
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            }
        }

        var thePlayer = new player("imagens/player.png", mainRoom.x + 232, mainRoom.y + 136, 2);

        var doorWidth = 94;
        var doorHeight = 81;

        function door(x, y, width, height, destination,target, src) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.on = false;
            this.destination = destination;
            this.animate = new animation(this.x, this.y, {src: src, length: 33}, 6, {
                start: {start: 0, frames: 11, playing: false},
                idle: {start: 11, frames: 22, playing: false}
            }, 'start', true);

            var custom = {};
            custom.x = this.x-30;
            custom.y = this.y-30;
            custom.width = this.width*1.5;
            custom.height = this.height*1.5;
            this.update = function () {
                this.animate.run();
                if (collision(custom,target,'touch')){
                    ctx.fillStyle = "white";
                    ctx.font = "10px";
                    ctx.fillText('Press "E" to interact.', target.x-target.width*2, target.y-target.height/4);
                    if (interact) {
                        target.x = destination.x;
                        target.y = destination.y;
                    }
                }
            }
        }

        var doors = [];
        doors.up = new door(mainRoom.center.x - doorWidth / 2, mainRoom.y - doorHeight + 1, doorWidth, doorHeight, mainRoom.center,thePlayer,
            "imagens/door/doorUp/door");
        doors.down = new door(mainRoom.center.x - doorWidth / 2, mainRoom.y + mainRoom.height - 1, doorWidth, doorHeight, mainRoom.center,thePlayer,
            "imagens/door/doorDown/door");
        doors.left = new door(mainRoom.x - doorHeight + 1, mainRoom.center.y - doorWidth / 2, doorWidth, doorHeight, mainRoom.center,thePlayer,
            "imagens/door/doorLeft/door");
        doors.right = new door(mainRoom.x + mainRoom.width - 1, mainRoom.center.y - doorWidth / 2, doorWidth, doorHeight, mainRoom.center,thePlayer,
            "imagens/door/doorRight/door");

        var buttonWidth = 26;
        var buttonHeight = 58;

        function button(x, y, width, height, src) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = width;
            this.src = src;

            var click = true;

            this.animate = new animation(this.x, this.y, {src: src, length: 69}, 6, {
                press: {start: 0, frames: 3, playing: false},
                release: {start: 3, frames: 3, playing: false},
                reactivate: {start: 6, frames: 51, playing: false},
                glow: {start: 57, frames: 9, playing: false},
                lightPress: {start: 66, frames: 3, playing: false}
            }, 'release', false);

            this.press = function () {
                this.animate.changeTask('press');
            };
            this.release = function () {
                this.animate.changeTask('release');
            };
            this.reactivate = function () {
                this.animate.changeTask('reactivate');
            };
            this.glow = function () {
                this.animate.changeTask('glow');
            };
            this.lightPress = function () {
                this.animate.changeTask('lightPress');
            };

            this.update = function () {
                this.animate.run();
                if (collision(this, thePlayer, 'touch')) {
                    ctx.fillStyle = "white";
                    ctx.font = "10px";
                    ctx.fillText('Press "E" to interact.', this.x - this.width, this.y);
                    if (interact) {
                        if (click) {
                            this.press();
                            doors.up.on = true;
                            doors.down.on = true;
                            doors.left.on = true;
                            doors.right.on = true;
                            click = false;
                        }
                    }
                }
            }
        }

        var mainButton = new button(mainRoom.center.x - buttonWidth / 2, mainRoom.center.y - buttonHeight + buttonWidth / 2, buttonWidth,
            buttonHeight, "imagens/button/buttonPedestal");

        function floorLight(x, y, width, height, type, src) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.src = src;

            if (type == 'most') {
                this.animate = new animation(this.x, this.y, {src: src, length: 107}, 6, {
                    lightOn: {start: 0, frames: 8, playing: false},
                    glow: {start: 8, frames: 8, playing: false},
                    floodFill: {start: 16, frames: 90, playing: false},
                    idle: {start: 106, frames: 1, playing: false}
                }, 'idle', false);
            } else {
                this.animate = new animation(this.x, this.y, {src: src, length: 99}, 6, {
                    lightOn: {start: 0, frames: 8, playing: false},
                    glow: {start: 8, frames: 8, playing: false},
                    floodFill: {start: 16, frames: 82, playing: false},
                    idle: {start: 98, frames: 1, playing: false}
                }, 'idle', false);
            }
        }

        var floorLights = [];
        floorLights.up = new floorLight(mainRoom.center.x - 52 / 2, mainRoom.y + 1, 52, 194, 0, "imagens/floorLight/floorLightUp/floorLightUp");
        floorLights.down = new floorLight(mainRoom.center.x - 52 / 2, mainRoom.center.y + 52 / 4, 52, 226, 'most', "imagens/floorLight/floorLightDown/floorLightDown");
        floorLights.left = new floorLight(mainRoom.x + 1, mainRoom.center.y - 52 / 2, 226, 52, 'most', "imagens/floorLight/floorLightLeft/floorLightDown");
        floorLights.right = new floorLight(mainRoom.center.x + 13, mainRoom.center.y - 52 / 2, 226, 52, 'most', "imagens/floorLight/floorLightRight/floorLightDown");

        var intervalo = setInterval(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            thePlayer.movementReaction.update();

            cameraFollow(thePlayer.x, thePlayer.y, canvas);

            for (var i = 0; i < tiles.length; i++) {
                for (var z = 0; z < tiles[i].length; z++) {
                    var tilez = tiles[i][z];
                    tilez.draw();
                }
            }
            mainRoom.draw();

            floorLights.up.animate.run();
            floorLights.down.animate.run();
            floorLights.left.animate.run();
            floorLights.right.animate.run();

            if (doors.up.on) {
                doors.up.update();
                doors.down.update();
                doors.left.update();
                doors.right.update();
                if (doors.up.animate.currentTask != 'idle') {
                    if (doors.up.animate.ended) {
                        doors.up.animate.changeTask('idle');
                        doors.down.animate.changeTask('idle');
                        doors.left.animate.changeTask('idle');
                        doors.right.animate.changeTask('idle');
                    }
                }
            }
            mainButton.update();
            thePlayer.draw();
        }, 1000 / 60);
    }
}