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
    var playerImg = [];
    for (var l = 0; l < 95; l++) {
        playerImg.push(new Image());
        playerImg[l].onload = function () {
            imageLoading++;
            run();
        };
        playerImg[l].src = "imagens/player/player" + l + ".png";
    }
//  -----------------\END/-----------------
    var defaultTile = new Image();
    defaultTile.onload = function () {
        imageLoading++;
        run();
    };
    defaultTile.src = "imagens/floor.png";

    var frontOtherFloor = new Image();
    frontOtherFloor.onload = function () {
        imageLoading++;
        run();
    };
    frontOtherFloor.src = "imagens/frontOtherFloor.png";

    var backOtherFloor = new Image();
    backOtherFloor.onload = function () {
        imageLoading++;
        run();
    };
    backOtherFloor.src = "imagens/backOtherFloor.png";

    var walls = new Image();
    walls.onload = function () {
        imageLoading++;
        run();
    };
    walls.src = "imagens/walls.png";

    var doorUp = [];
    for (var l = 0; l < 33; l++) {
        doorUp.push(new Image());
        doorUp[l].onload = function () {
            imageLoading++;
            run();
        };
        doorUp[l].src = "imagens/door/doorUp/door" + l + ".png";
    }

    var doorDown = [];
    for (var l = 0; l < 33; l++) {
        doorDown.push(new Image());
        doorDown[l].onload = function () {
            imageLoading++;
            run();
        };
        doorDown[l].src = "imagens/door/doorDown/door" + l + ".png";
    }

    var doorLeft = [];
    for (var l = 0; l < 33; l++) {
        doorLeft.push(new Image());
        doorLeft[l].onload = function () {
            imageLoading++;
            run();
        };
        doorLeft[l].src = "imagens/door/doorLeft/door" + l + ".png";
    }

    var doorRight = [];
    for (var l = 0; l < 33; l++) {
        doorRight.push(new Image());
        doorRight[l].onload = function () {
            imageLoading++;
            run();
        };
        doorRight[l].src = "imagens/door/doorRight/door" + l + ".png";
    }

    var buttonFrames = [];
    for (var l = 0; l < 69; l++) {
        buttonFrames.push(new Image());
        buttonFrames[l].onload = function () {
            imageLoading++;
            run();
        };
        buttonFrames[l].src = "imagens/button/buttonPedestal" + l + ".png";
    }

    var floorLightDown = [];
    for (var l = 0; l < 107; l++) {
        floorLightDown.push(new Image());
        floorLightDown[l].onload = function () {
            imageLoading++;
            run();
        };
        floorLightDown[l].src = "imagens/floorLight/floorLightDown/floorLightDown" + l + ".png";
    }

    var floorLightLeft = [];
    for (var l = 0; l < 107; l++) {
        floorLightLeft.push(new Image());
        floorLightLeft[l].onload = function () {
            imageLoading++;
            run();
        };
        floorLightLeft[l].src = "imagens/floorLight/floorLightLeft/floorLightDown" + l + ".png";
    }

    var floorLightRight = [];
    for (var l = 0; l < 107; l++) {
        floorLightRight.push(new Image());
        floorLightRight[l].onload = function () {
            imageLoading++;
            run();
        };
        floorLightRight[l].src = "imagens/floorLight/floorLightRight/floorLightDown" + l + ".png";
    }

    var floorLightUp = [];
    for (var l = 0; l < 99; l++) {
        floorLightUp.push(new Image());
        floorLightUp[l].onload = function () {
            imageLoading++;
            run();
        };
        floorLightUp[l].src = "imagens/floorLight/floorLightUp/floorLightUp" + l + ".png";
    }

    var lightSign = [];
    for (var l = 0; l < 52; l++) {
        lightSign.push(new Image());
        lightSign[l].onload = function () {
            imageLoading++;
            run();
        };
        lightSign[l].src = "imagens/lightSign/light" + l + ".png";
    }

    var monitor = [];
    for (var l = 0; l < 36; l++) {
        monitor.push(new Image());
        monitor[l].onload = function () {
            imageLoading++;
            run();
        };
        monitor[l].src = "imagens/monitor/monitor" + l + ".png";
    }

    var arrow = [];
    for (var l = 0; l < 16; l++) {
        arrow.push(new Image());
        arrow[l].onload = function () {
            imageLoading++;
            run();
        };
        arrow[l].src = "imagens/arrow/arrow" + l + ".png";
    }

    var bar = [];
    for (var l = 0; l < 17; l++) {
        bar.push(new Image());
        bar[l].onload = function () {
            imageLoading++;
            run();
        };
        bar[l].src = "imagens/bar/bar" + l + ".png";
    }

    var lightSigin = [];
    for (var l = 0; l < 52; l++) {
        lightSigin.push(new Image());
        lightSigin[l].onload = function () {
            imageLoading++;
            run();
        };
        lightSigin[l].src = "imagens/lightSign/light" + l + ".png";
    }

    var lightFront = new Image();
    lightFront.onload = function () {
        imageLoading++;
        run();
    };
    lightFront.src = "imagens/lightSign/front.png";

    var lightBack = new Image();
    lightBack.onload = function () {
        imageLoading++;
        run();
    };
    lightBack.src = "imagens/lightSign/back.png";

    var finalAnimationI = [];
    for (var l = 0; l < 132; l++) {
        finalAnimationI.push(new Image());
        finalAnimationI[l].onload = function () {
            imageLoading++;
            run();
        };
        finalAnimationI[l].src = "imagens/finalAnimation/final" + l + ".png";
    }

    var finalWall = new Image();
    finalWall.onload = function () {
        imageLoading++;
        run();
    };
    finalWall.src = "imagens/finalAnimation/wall.png";

    var finalShadow = new Image();
    finalShadow.onload = function () {
        imageLoading++;
        run();
    };
    finalShadow.src = "imagens/finalAnimation/shadow.png";

    function run() {
        if (imageLoading == 935) {
            load();
        }
    }

    function load() {
        canvas = document.getElementById('box');
        var ctx = canvas.getContext('2d');
        var mapWidth = 9600;
        var mapHeight = 9600;
        var tileSize = 480;

        var keyUp, keyDown, keyLeft, keyRight, letterE, enter, backspace;
        keyUp = 87;
        keyDown = 83;
        keyLeft = 65;
        keyRight = 68;
        letterE = 69;
        enter = 13;
        backspace = 8;
        var up, down, left, right;
        up = false;
        down = false;
        left = false;
        right = false;
        var anyKey = false;
        var nextLine = false;
        var previousLine = false;
        var interact = false;
        var focused = false
        window.addEventListener("keydown", checkKeyDown, false);
        function checkKeyDown(event) {
            if (!(focused)) {
                if (event.keyCode == keyUp) {
                    up = true;
                } else if (event.keyCode == keyDown) {
                    down = true;
                } else if (event.keyCode == keyLeft) {
                    left = true;
                } else if (event.keyCode == keyRight) {
                    right = true;
                } else if (event.keyCode == letterE) {
                    interact = true;
                }
            }
            if (event.keyCode == enter) {
                nextLine = true;
            }
            if (event.keyCode == backspace) {
                previousLine = true;
            }
            anyKey = true;
        }

        window.addEventListener("keyup", checkKeyUp, false);
        function checkKeyUp(event) {
            if (event.keyCode == keyUp) {
                up = false;
            } else if (event.keyCode == keyDown) {
                down = false;
            } else if (event.keyCode == keyLeft) {
                left = false;
            } else if (event.keyCode == keyRight) {
                right = false;
            } else if (event.keyCode == letterE) {
                interact = false;
            }
            if (event.keyCode == enter) {
                nextLine = false;
            }
            if (event.keyCode == backspace) {
                previousLine = false;
            }
            anyKey = false;
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

        function animation(x, y, images, length, frames, task, defaultTask, loop) {
            this.x = x;
            this.y = y;
            this.images = images;
            this.length = length;
            this.currentTask = defaultTask;
            this.frames = frames;
            this.task = task;
            this.loop = loop;
            this.ended = false;

            this.img = [];
            for (var i = 0; i < this.length; i++) {
                this.img[i] = this.images[i];
            }

            this.CI;//Current Image
            this.CIN = 0;//Current Image Number
            this.FC = 0;//Frame Counter
            this.run = function () {
                this.CI = this.task[this.currentTask];
                if (this.CI.playing == false) {
                    this.CIN = this.CI.start;
                    this.CI.playing = true;
                }

                if (this.FC == this.frames) {
                    this.CIN++;
                    if (this.CIN == this.CI.frames + this.CI.start) {
                        this.ended = true;
                        if (this.loop) {
                            this.CIN = this.CI.start;
                        } else {
                            this.CIN = this.CI.frames + this.CI.start - 1;
                        }
                    } else {
                        this.ended = false;
                    }
                    this.FC = 0;
                }
                ctx.drawImage(this.img[this.CIN], this.x, this.y);
                this.FC++;
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
        
        function lightSign(x, y, width, height, images, front, back, thisFloorLight) {
            var self = this;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.images = images;

            this.animate = new animation(this.x, this.y, this.images, 52, 4, {
                idle: {start: 0, frames: 1, playing: false},
                open: {start: 1, frames: 33, playing: false},
                textApearing: {start: 34, frames: 11, playing: false},
                blink: {start: 45, frames: 7, playing: false}
            }, 'idle', false);

            this.custom = {x: this.x, y: this.y + this.height - 27, width: this.width, height: 2}
            potentialCollisions.push(this.custom);

            this.open = function () {
                self.animate.changeTask('open');
            }
            this.showText = function () {
                self.animate.changeTask('textApearing');
            }
            this.blink = function () {
                self.animate.changeTask('blink');
                self.animate.loop = true;
            }

            var nextAnimation = false;
            this.update = function () {
                ctx.drawImage(back, this.x, this.y);
                /*if (self.animate.currentTask == "open"){
                 if (self.animate.ended){
                 self.showText();
                 nextAnimation = true;
                 self.animate.ended = false;
                 }
                 }
                 if (nextAnimation){
                 if (self.animate.ended){
                 self.blink();
                 }
                 }*/
                if (self.animate.currentTask == "textApearing") {
                    if (self.animate.ended) {
                        self.blink();
                        if (thisFloorLight == "up") {
                            floorLights.up.animate.changeTask("glow");
                            floorLights.up.animate.loop = true;
                        }
                        if (thisFloorLight == "down") {
                            floorLights.down.animate.changeTask("glow");
                            floorLights.down.animate.loop = true;
                        }
                        if (thisFloorLight == "left") {
                            floorLights.left.animate.changeTask("glow");
                            floorLights.left.animate.loop = true;
                        }
                        if (thisFloorLight == "right") {
                            floorLights.right.animate.changeTask("glow");
                            floorLights.right.animate.loop = true;
                        }
                    }
                } else {
                    self.animate.ended = false;
                }
            }
            this.front = function () {
                self.animate.run();
                ctx.drawImage(front, this.x, this.y);
            }
        }

        function room(x, y, width, height, backImage, frontImage, type2, roomNumber, floorLightz, text) {
            var self = this;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.center = {};
            this.center.x = this.x + this.width / 2;
            this.center.y = this.y + this.height / 2;

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
            if (type2) {
                this.monitor = new createMonitor(this.x + 45, this.y, 'textBox'+roomNumber, thePlayer);
                this.sign = new sign(this.x + 95, this.y + this.height - 100, text);
                this.tree = {x: this.x + this.width - 130, y: this.y + this.height - 120, width: 50, height: 1}
                potentialCollisions.push(this.tree);
                this.lightSign = new lightSign(this.x + 50, this.y + 200, 74, 107, lightSigin, lightFront, lightBack, floorLightz);

                var request = []
                var counter = 0;
                var outputReady = false;
                var monitorOff = true;
                self.roomVariant = 0;

                /*INFO: self.monitor.print(self.monitor.layer + 1, "Alguma coisa"); é tipo o console.log.
                self.monitor.moveDown() pula uma linha.
                self.monitor.output = ""; Limpa a variavel das respostas.
                request[] = function(){}; Requisita uma resposta do console para rodar o resto do código.
                counter = 0; Reseta os requests, limpando o numero de requisições.
                outputReady = true; Reabilita as requisições.
                 */
                /*EXERCICIOS*/function runExercise() {
                    /*Pedro*/if (roomNumber == 1) {
                        if (self.roomVariant == 1) {
                            self.monitor.print(self.monitor.layer + 1, "Informações sobre o objetivo do jogo");
                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 2) {
                            var salas = 0;
                            salas = 4;
                            self.monitor.print(self.monitor.layer + 1, "Você precisa completar todas as " + salas + " salas, cada sala <br> possui" +
                                " um desafio ou uma informação.");
                            self.monitor.moveDown();

                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 3) {
                            var salas = 0;
                            salas = 4;
                            self.monitor.print(self.monitor.layer + 1, "Ao passar por todas as " + salas + " salas o botão será <br>  re-ativado " +
                                "novamente.");
                            self.monitor.moveDown();

                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 4) {
                            var salas = 0;
                            salas = 1;
                            self.monitor.print(self.monitor.layer + 1, "Quando você pressionar o botão reativado " + salas + " sala <br> secreta irá surgir.");
                            self.monitor.moveDown()

                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 5) {
                            self.lightSign.showText();
                            self.monitor.output = "";
                        }
                    }
                    /*Pedro*/if (roomNumber == 2) {
                        if (self.roomVariant == 1) {
                            self.monitor.print(self.monitor.layer + 1, "Informações gerais e curiosidades");
                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 2) {
                            var i = ["Para movimentar o personagem use as teclas: W para <br> ir para frente; A para ir para a esquerda; S para <br> ir para baixo; D para ir para a direita", "Para interagir use a tecla E", "A tela estará sempre no centro independente do <br> monitor usado"];

                            for (var x = 0; x < 3; x++) {
                                self.monitor.print(self.monitor.layer + 1, i[x]);
                                if (x == 0) {
                                    self.monitor.moveDown();
                                    self.monitor.moveDown();
                                }
                                if (x == 2) {
                                    self.monitor.moveDown();
                                }
                            }
                        }
                        if (self.roomVariant == 3) {
                            var z = ["Jogo feito por", "Exercícios feitos por", "Exercícios feitos por"]
                            var g = ["Theo", "Pedro Miczewski", "João Bosco"];

                            for (var x = 0; x < 3; x++) {
                                self.monitor.print(self.monitor.layer + 1, z[x] + " " + g[x]);
                            }

                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 4) {
                            var z = ["Os programas utilizados foram: ", "Aseprite, Photoshop", ", Dropbox e WebStorm."];
                            var i = 1;
                            for (var x = 0; x < 3; x++) {
                                self.monitor.print(self.monitor.layer + 1, z[x]);
                                i++;
                            }

                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 5) {
                            self.lightSign.showText();
                            self.monitor.output = "";
                        }
                    }
                    /*João*/if (roomNumber == 3) {
                        if (self.roomVariant == 1) {
                            self.monitor.print(self.monitor.layer + 1, "Tests and tools");
                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 2) {
                            var idade;
                            self.monitor.print(self.monitor.layer + 1, "Insert year:");
                            request[0] = function () {
                                idade = self.monitor.output;
                                if (idade >= 13 && idade <= 20) {
                                    self.monitor.print(self.monitor.layer + 1, "PrEra");
                                }
                                else if (idade >= 20 && idade <= 59) {
                                    self.monitor.print(self.monitor.layer + 1, "Recent Era");
                                }
                                else if (idade < 13) {
                                    self.monitor.print(self.monitor.layer + 1, "Forgotten Era");
                                }
                                else if (idade >= 60) {
                                    self.monitor.print(self.monitor.layer + 1, "New Era");
                                }
                            }
                            self.monitor.output = "";
                            outputReady = true;
                        }
                        if (self.roomVariant == 3) {
                            var res;
                            self.monitor.print(self.monitor.layer + 1, "5X5+4X3-2 ??");
                            request[1] = function () {
                                res = self.monitor.output;
                                if (res == 35) {
                                    self.monitor.print(self.monitor.layer + 1, "Correct");
                                }
                                else {
                                    self.monitor.print(self.monitor.layer + 1, "Wrong");
                                }
                            }
                            self.monitor.output = "";
                            outputReady = true;
                        }
                        if (self.roomVariant == 4) {
                            var temp;
                            self.monitor.print(self.monitor.layer + 1, "Insert room temperature");
                            request[2] = function () {
                                temp = self.monitor.output;
                                if (temp >= 50) {
                                    self.monitor.print(self.monitor.layer + 1, "Critical heat");
                                } else {
                                    self.monitor.print(self.monitor.layer + 1, "Normal temperature")
                                }
                            }
                            self.monitor.output = "";
                            outputReady = true;
                        }
                        if (self.roomVariant == 5) {
                            self.lightSign.showText();
                            self.monitor.output = "";
                            outputReady = true;
                            counter = 0;
                        }
                    }
                    /*João*/if (roomNumber == 4) {
                        if (self.roomVariant == 1) {
                            self.monitor.print(self.monitor.layer + 1, "Zueira do jão");
                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 2) {
                            var j = 0;
                            var x = [1,2,3];
                            var acertos = 0;
                            self.monitor.print(self.monitor.layer + 1, "1 2 3");
                            do
                            {
                                j++;
                                if (x[j-1] == j) {
                                    self.monitor.print(self.monitor.layer + 1, "Acertou");
                                    acertos++;
                                }
                                else {
                                    self.monitor.print(self.monitor.layer + 1, "errou");
                                }
                            } while (j < 3);

                            if (acertos == 3) {
                                self.monitor.print(self.monitor.layer + 1, "Passou no teste");
                            }
                            else {
                                self.monitor.print(self.monitor.layer + 1, "Burro");
                            }

                            self.monitor.output = "";
                            outputReady = true;
                        }
                        if (self.roomVariant == 3) {
                            var resposta;
                            var j = 0;
                            self.monitor.print(self.monitor.layer + 1, "Pelas forças do pãozinho...");
                            request[0] = function () {
                                resposta = self.monitor.output;
                                do {
                                    if (resposta == "xubida" && j==1) {
                                        self.monitor.print(self.monitor.layer + 1, "Mizeravi");
                                    }
                                    if (resposta != "xubida" && j==2){
                                        self.monitor.print(self.monitor.layer + 1, "É um país da europa,");
                                        self.monitor.print(self.monitor.layer + 1, "O idioma é o holandes,");
                                        self.monitor.print(self.monitor.layer + 1, "Itália!");
                                        self.monitor.print(self.monitor.layer + 1, "EROU");
                                    }
                                    j++;
                                } while (j < 3);
                            }
                            self.monitor.output = "";
                            outputReady = true;
                        }
                        if (self.roomVariant == 4) {
                            var resposta;
                            var j = 0;
                            self.monitor.print(self.monitor.layer + 1, "Quem é o mestre do VisualG");
                            self.monitor.print(self.monitor.layer + 1, "1-Maior 2-jiraya 3-Violência");
                            request[1] = function () {
                                resposta = self.monitor.output;
                                do {
                                    if (resposta == 1) {
                                        self.monitor.print(self.monitor.layer + 1, "Acertou");
                                    }
                                    if (resposta == 2){
                                        self.monitor.print(self.monitor.layer + 1, "Errado. Jiraiya é o mestre ninja");
                                    }
                                    if (resposta == 3){
                                        self.monitor.print(self.monitor.layer + 1, "Errado. Violência nunca é a resposta");
                                    }
                                    j++;
                                } while (j < 3);
                            }
                            self.monitor.output = "";
                            outputReady = true;
                        }
                        if (self.roomVariant == 5) {
                            self.lightSign.showText();
                            self.roomVariant = 0;
                            self.monitor.output = "";
                            outputReady = true;
                        }
                    }
                }
            }

            this.finalAnimation = new animation(this.x,this.y,finalAnimationI,132,5,{
                animate: {start: 0, frames: 132, playing: false},
            }, 'animate', false);
            this.finalRun = false;
            this.runFinal = function () {
                this.finalRun = true;
                this.monitor = new createMonitor(this.x + 50, this.y + 50, 'textBox5', thePlayer);
                self.wallz = {
                    left: {x: this.x+32, y: this.y+32, width: 1, height: 224},
                    right: {x: this.x + this.width - 32, y: this.y+32, width: 1, height: 224},
                    up: {x: this.x+32, y: this.y+32, width: 416, height: 1},
                    down: {x: this.x + 32, y: this.y + 224+32, width: 416, height: 1}
                };
                potentialCollisions.push(self.wallz.left);
                potentialCollisions.push(self.wallz.right);
                potentialCollisions.push(self.wallz.up);
                potentialCollisions.push(self.wallz.down);

                var request = []
                var counter = 0;
                var outputReady = false;
                var monitorOff = true;
                self.roomVariant = 0;
                runExercise = function() {
                    /*Pedro*/if (roomNumber == 5) {
                        if (self.roomVariant == 1) {
                            self.monitor.print(self.monitor.layer + 1, "Code demonstration");
                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 2) {
                            var y = 1;
                            while (y < 5) {
                                if (y == 1) {
                                    self.monitor.print(self.monitor.layer + 1,"Passou-se " + y + " instantes.");
                                }
                                else {
                                    self.monitor.print(self.monitor.layer + 1,"Passou-se " + y + " instantes.");
                                }
                                y++;
                            }

                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 3) {
                            var x = ["Hello"," World"," !"];
                            var y = 0;
                            var z = "";
                            while (y < 3) {
                                z += x[y];
                                y++;
                            }
                            self.monitor.print(self.monitor.layer + 1,z);

                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 4) {
                            var x = ["1"," + 2"," + 3"," + 4 ="];
                            var y = 0;
                            var z = "";
                            var k = "10 ";
                            while (y < 5) {
                                if (y < 4) {
                                    z += x[y];
                                    self.monitor.print(self.monitor.layer + 1,z);
                                }
                                else {
                                    self.monitor.print(self.monitor.layer + 1,k);
                                }
                                y++;
                            }

                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 5) {
                            self.monitor.print(self.monitor.layer + 1, "Fim do Trabalho de lógica");
                            self.monitor.print(self.monitor.layer + 1, "Integrantes: Théo, João e Pedro M.");
                            self.monitor.output = "";
                        }
                        if (self.roomVariant == 6) {
                            if (thePlayer.final){
                                thePlayer.animate.changeTask('off');
                                thePlayer.animate.loop = false;
                                thePlayer.final = false;
                            }
                        }
                    }
                }
            }

            var lightOpen = true;
            this.drawB = function () {
                ctx.drawImage(backImage, this.x - 80, this.y - 80);
                if (type2) {
                    self.lightSign.update();
                    if (collision({
                            x: self.x + 100,
                            y: self.y + 100,
                            width: self.width - 200,
                            height: self.height - 200
                        }, thePlayer, "touch") && lightOpen) {
                        self.lightSign.open();
                        lightOpen = false;
                    }
                }
            }
            this.drawF = function () {
                if (type2) {
                    ctx.drawImage(frontImage, this.x, this.y);
                    self.monitor.update();
                    self.sign.draw();
                    self.lightSign.front();
                    if (self.monitor.output == "next") {
                        self.monitor.clearScreen();
                        self.roomVariant++;
                        runExercise();
                    } else if (self.monitor.output != "") {
                        if (outputReady) {
                            request[counter]();
                            outputReady = false;
                            counter++;
                        }
                    }
                    if (self.monitor.on && monitorOff) {
                        runExercise();
                        monitorOff = false;
                    }
                }
                if (self.finalRun){
                    ctx.drawImage(finalWall,self.x,self.x);
                    ctx.drawImage(finalShadow,self.x,self.x);
                    self.monitor.update();
                    self.finalAnimation.run();
                    if (!(self.finalAnimation.ended)){
                        if (self.finalAnimation.CIN > 33){
                            thePlayer.y += 0.5;
                            potentialCollisions[37].y += 0.35;
                            potentialCollisions[38].y += 0.35;
                            potentialCollisions[39].y += 0.35;
                            potentialCollisions[40].y += 0.35;
                        }
                    }
                    if (self.monitor.output == "next") {
                        self.monitor.clearScreen();
                        self.roomVariant++;
                        runExercise();
                    } else if (self.monitor.output != "") {
                        if (outputReady) {
                            request[counter]();
                            outputReady = false;
                            counter++;
                        }
                    }
                }
            }

        }

        function player(x, y, speed) {
            var self = this;
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.speedX = this.speed;
            this.speedY = this.speed;
            this.width = 32;
            this.height = 37;

            var start = true;
            this.final = true;
            this.animate = new animation(this.x,this.y,playerImg,95,5,{
                start: {start: 0, frames: 40, playing: false},
                idle: {start: 40, frames: 14, playing: false},
                off: {start: 54, frames: 41, playing: false},
            }, 'start', false);

            this.up = false;
            this.down = false;
            this.left = false;
            this.right = false;

            this.movementReaction = new movementReaction(this, potentialCollisions);

            this.draw = function () {
                self.up = up;
                self.down = down;
                self.left = left;
                self.right = right;
                self.animate.x = self.x;
                self.animate.y = self.y;
                self.animate.run();
                if (self.animate.ended && start){
                    self.animate.changeTask("idle");
                    self.animate.loop = true;
                    start = false;
                }
            }
        }

        var doorWidth = 94;
        var doorHeight = 81;

        function door(x, y, width, height, destinationX, destinationY, target, image) {
            var self = this;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.on = false;
            this.destination = [];
            this.destination.x = destinationX;
            this.destination.y = destinationY;
            this.animate = new animation(this.x, this.y, image, 33, 6, {
                start: {start: 0, frames: 11, playing: false},
                idle: {start: 11, frames: 22, playing: false}
            }, 'start', true);

            var custom = {};
            custom.x = this.x - 30;
            custom.y = this.y - 30;
            custom.width = this.width * 1.5;
            custom.height = this.height * 1.5;
            this.update = function () {
                this.animate.run();
                if (collision(custom, target, 'touch')) {
                    ctx.fillStyle = "white";
                    ctx.font = "10px";
                    ctx.fillText('Press "E" to interact.', target.x - target.width, target.y - target.height / 4);
                    if (interact) {
                        target.x = self.destination.x;
                        target.y = self.destination.y;
                    }
                }
            }
        }

        var buttonWidth = 26;
        var buttonHeight = 58;

        function button(x, y, width, height, imagem) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = width;
            this.imagem = imagem;

            this.click = true;
            this.reactivation = true;
            this.interactions = 0;
            this.glows = false;

            this.animate = new animation(this.x, this.y, this.imagem, 69, 6, {
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
                        if (this.interactions == 0) {
                            if (this.click) {
                                this.press();
                                doors.up.on = true;
                                doors.down.on = true;
                                doors.left.on = true;
                                doors.right.on = true;
                                this.click = false;
                                this.interactions++;
                            }
                        }
                        if (this.interactions == 1) {
                            if (this.click) {
                                this.lightPress();
                                this.animate.loop = false;
                                this.click = false;
                                this.interactions++;
                                mainRoom.runFinal();
                            }
                        }
                    }
                }
            }
        }

        function floorLight(x, y, width, height, type, imagem) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.imagem = imagem;

            if (type == 'most') {
                this.animate = new animation(this.x, this.y, imagem, 107, 6, {
                    lightOn: {start: 0, frames: 8, playing: false},
                    glow: {start: 8, frames: 8, playing: false},
                    floodFill: {start: 16, frames: 90, playing: false},
                    idle: {start: 106, frames: 1, playing: false}
                }, 'idle', false);
            } else {
                this.animate = new animation(this.x, this.y, imagem, 99, 6, {
                    lightOn: {start: 0, frames: 8, playing: false},
                    glow: {start: 8, frames: 8, playing: false},
                    floodFill: {start: 16, frames: 82, playing: false},
                    idle: {start: 98, frames: 1, playing: false}
                }, 'idle', false);
            }
        }

        function watchChange(elementId, object, max) {
            var self = this;

            self.element = document.getElementById(elementId);
            this.previousValue = self.element.value.length;
            this.newValue = 0;
            this.element.oninput = function () {
                self.newValue = self.element.value.length;
                if (!(self.newValue > max)) {
                    if (self.newValue > self.previousValue) {
                        self.previousValue = self.newValue;
                        self.newValue = 0;
                        object.moveSideways("right");
                    } else if (self.newValue == 0) {
                        self.previousValue = self.newValue;
                        self.newValue = 0;
                        self.newValue = 0;
                        object.resetBar();
                    } else if (self.newValue < self.previousValue) {
                        self.previousValue = self.newValue;
                        self.newValue = 0;
                        object.moveSideways("left");
                    }
                }
            }

        }

        function createMonitor(x, y, textBox, target) {
            var self = this;
            this.x = x;
            this.y = y;
            this.width = 389;
            this.height = 170;
            this.on = false;
            this.animate = new animation(this.x, this.y, monitor, 36, 4, {
                off: {start: 0, frames: 1, playing: false},
                start: {start: 1, frames: 28, playing: false},
                blink: {start: 29, frames: 7, playing: false}
            }, "off", true);

            this.tile = function (id, x, y, width, height) {
                this.id = id;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            };

            var tileWidth = 7;
            var tileHeight = 12;
            var monitorX = 200;
            var monitorY = 200;
            var monitorWidth = 389;
            var monitorHeight = 170;
            this.layer = 0;

            var TCP = {}; //tileCreatingProperties
            TCP.x = this.x + 9;
            TCP.y = this.y + 9;
            TCP.id = 0;

            this.tiles = [[]];
            for (var h = 0; h < (monitorHeight - 18) / tileHeight; h++) {
                for (var w = 0; w < (monitorWidth - 18) / tileWidth; w++) {
                    this.tiles[h][w] = new this.tile(TCP.id, TCP.x, TCP.y, tileWidth, tileHeight);
                    TCP.id++;
                    TCP.x += tileWidth;
                }
                TCP.x = this.x + 9;
                TCP.y += tileHeight;
                this.tiles.push([]);
            }

            var titleOpacity = 0.0;
            this.title = document.createElement("DIV");
            document.getElementById('screenArea').appendChild(this.title);
            this.title.style.position = "absolute";
            this.title.style.opacity = titleOpacity;
            this.title.style.top = canvas.style.top + this.tiles[0][0].y;
            this.title.style.left = canvas.style.left + (this.tiles[0][0].x + 2);
            this.title.style.display = "none";
            this.title.innerHTML = "Scholar PROJECT [V 0.1.1]";

            this.textBox = document.createElement("INPUT");
            document.getElementById('screenArea').appendChild(this.textBox);
            this.textBox.setAttribute("id", textBox);
            this.textBox.style.position = "absolute";
            this.textBox.style.backgroundColor = "transparent";
            this.textBox.style.borderColor = "inherit";
            this.textBox.style.boxShadow = "none";
            this.textBox.style.border = "none";
            this.textBox.style.outline = "none";
            this.textBox.style.textShadow = "0 0 0 white";
            this.textBox.style.color = "transparent";
            this.textBox.style.fontSize = "12px";
            this.textBox.style.fontFamily = "Courier New";
            this.textBox.style.top = canvas.style.top + (this.tiles[this.layer + 2][1].y - 3) - thePlayer.y + (canvas.height / 2);
            this.textBox.style.left = canvas.style.left + (this.tiles[2][1].x + 1) - thePlayer.x + (canvas.width / 2);
            this.textBox.style.width = monitorWidth - 36;
            this.textBox.style.display = "none";
            this.textBox.type = "text";
            this.textBox.autocomplete = "off";
            this.textBox.setAttribute("maxlength", "49");
            this.textBox.autofocus = true;
            this.textBox.spellcheck = false;
            this.textBox.addEventListener("keypress", function () {
                if (event.keyCode == 13) {
                    return false
                }
                ;
            })
            this.textBox.addEventListener("focus", function () {
                focused = true;
            });
            this.textBox.addEventListener("blur", function () {
                focused = false;
            });

            var texts = [];
            var tY = 1;
            for (var i = 0; i < (monitorHeight - 45) / tileHeight; i++) {
                texts[i] = document.createElement("DIV");
                document.getElementById('screenArea').appendChild(texts[i]);
                texts[i].style.position = "absolute";
                texts[i].style.top = canvas.style.top + (this.tiles[tY][1].y - 2);
                texts[i].style.left = canvas.style.left + (this.tiles[tY][1].x + 1);
                texts[i].style.display = "none";
                texts[i].setAttribute("id", "text" + i);
                tY++;
            }

            var standStill = false;
            this.arrow = function (x, y) {
                var selfie = this;
                this.x = x;
                this.y = y;
                this.animate = new animation(this.x, this.y, arrow, 16, 8, {
                    off: {start: 0, frames: 1, playing: false},
                    start: {start: 1, frames: 14, playing: false},
                    idle: {start: 15, frames: 1, playing: false}
                }, "off", true);

                this.draw = function () {
                    selfie.animate.run();
                }
            };
            this.arrows = [];
            this.arrows.push(new this.arrow(this.tiles[2][0].x + 2, this.tiles[2][0].y, arrow));

            this.bar = {};
            this.bar.x = this.tiles[2][1].x;
            this.bar.y = this.tiles[2][1].y + tileHeight / 1.5;
            this.bar.animate = new animation(this.bar.x, this.bar.y, bar, 17, 8, {
                off: {start: 0, frames: 1, playing: false},
                start: {start: 1, frames: 14, playing: false},
                blink: {start: 15, frames: 2, playing: false}
            }, "off", true);

            this.output = "";
            this.moveDown = function () {
                if (self.layer != self.tiles.length - 5) {
                    self.layer++;

                    self.bar.animate.y = self.tiles[self.layer + 2][1].y + tileHeight / 1.5;
                    self.resetBar();

                    self.arrows.push(new self.arrow(self.tiles[self.layer + 2][0].x + 2, self.tiles[self.layer + 2][0].y, arrow));

                    self.textBox.style.top = canvas.style.top + (self.tiles[self.layer + 2][1].y - 3);
                    self.output = self.textBox.value;
                    self.textBox.value = "";
                }
            };

            this.character = 0;
            this.moveSideways = function (side) {
                if (side == "left") {
                    if (self.character != 0) {
                        self.character--;
                    }
                } else {
                    self.character++;
                }
                self.bar.animate.x = self.tiles[2][self.character + 1].x;
            };

            this.resetBar = function () {
                self.bar.animate.x = self.tiles[2][1].x;
                self.character = 0;
                self.textBoxChange.newValue = 0;
                self.textBoxChange.previousValue = 0;
            };

            this.print = function (line, text) {
                texts[line].innerHTML = text;
                self.moveDown();
                self.resetBar();
            };

            this.turnOn = function () {
                self.animate.changeTask('start');
                self.bar.animate.changeTask('start');
                self.arrows[0].animate.changeTask('start');
                self.animate.ended = false;
                self.title.style.display = "block";
                self.textBox.style.display = "block";
                for (var i = 0; i < (monitorHeight - 45) / tileHeight; i++) {
                    texts[i].style.display = "block";
                }
                self.on = true;
            };

            this.clearScreen = function () {
                self.layer = 0;
                for (var i = 0; i < (monitorHeight - 45) / tileHeight; i++) {
                    texts[i].innerHTML = "";
                }
                for (var i = 1; i < self.arrows.length; i++) {
                    delete self.arrows[i];
                }
                self.textBox.style.top = canvas.style.top + (self.tiles[self.layer + 2][1].y - 3) - thePlayer.y + (canvas.height / 2);
                self.textBox.style.left = canvas.style.left + (self.tiles[2][1].x + 1) - thePlayer.x + (canvas.width / 2);
                self.bar.animate.y = self.tiles[2][1].y + tileHeight / 1.5;
                self.resetBar();
                self.textBox.value = "";
            };

            this.requestAnswer = function (code) {
                this.oldValue = self.output;
                var run = true;
                this.update = function () {
                    if (run) {
                        if (this.oldValue != self.output) {
                            code(self.output);
                            run = false;
                        }
                    }
                }
            }
            this.textBoxChange = new watchChange(textBox, self, 58);
            this.click = true;

            this.support = {x: this.x + (this.width / 2) - 14, y: this.y + this.height + 25, width: 28, height: 1}
            potentialCollisions.push(this.support);

            this.enter = false;
            var runDown = true;
            this.update = function () {
                if (self.on) {
                    if (nextLine) {
                        if (runDown) {
                            runDown = false;
                            self.enter = true;
                            self.moveDown();
                        }
                    } else {
                        runDown = true;
                        self.enter = false;
                    }

                    self.animate.run();
                    if (self.animate.currentTask == "start") {
                        if (self.animate.ended) {
                            self.animate.changeTask('blink');
                            self.animate.frames = 10
                        } else {
                            self.title.style.opacity = titleOpacity;
                            titleOpacity += 0.0357;
                        }
                    }

                    for (var i = 0; i < self.arrows.length; i++) {
                        if (self.arrows[i] != undefined) {
                            if (standStill) {
                                self.arrows[i].animate.changeTask('idle');
                            }
                            self.arrows[i].draw();
                            if (self.arrows[i].animate.currentTask == "start") {
                                if (self.arrows[i].animate.ended) {
                                    self.arrows[i].animate.changeTask('idle');
                                    standStill = true;
                                }
                            }
                        }
                    }

                    self.bar.animate.run();
                    if (self.bar.animate.currentTask == "start") {
                        if (self.bar.animate.ended) {
                            self.bar.animate.changeTask('blink');
                            self.bar.animate.frames = 30;
                        }
                    }
                    if (self.tiles != undefined) {
                        self.title.style.top = canvas.style.top + self.tiles[0][0].y - thePlayer.y + (canvas.height / 2);
                        self.title.style.left = canvas.style.left + (self.tiles[0][0].x + 2) - thePlayer.x + (canvas.width / 2);

                        self.textBox.style.top = canvas.style.top + (self.tiles[self.layer + 2][1].y - 3) - thePlayer.y + (canvas.height / 2);
                        self.textBox.style.left = canvas.style.left + (self.tiles[2][1].x + 1) - thePlayer.x + (canvas.width / 2);

                        tY = 1;
                        for (var i = 0; i < (monitorHeight - 45) / tileHeight; i++) {
                            texts[i].style.top = canvas.style.top + (self.tiles[tY][1].y - 2) - thePlayer.y + (canvas.height / 2);
                            texts[i].style.left = canvas.style.left + (self.tiles[tY][1].x + 1) - thePlayer.x + (canvas.width / 2);
                            tY++;
                        }
                    }
                } else {
                    self.animate.run();
                    if (collision(self, thePlayer, 'touch')) {
                        ctx.fillStyle = "white";
                        ctx.font = "10px";
                        ctx.fillText('Press "E" to interact.', target.x - target.width * 2, target.y - target.height / 4);
                        if (interact) {
                            if (this.click) {
                                self.turnOn();
                                this.click = false;
                            }
                        }
                    }
                }
            }
        }

        function sign(x, y, text) {
            this.x = x;
            this.y = y;

            var wall = {x: x + 11, y: y + 30, width: 6, height: 1};
            potentialCollisions.push(wall);

            this.draw = function () {
                ctx.fillStyle = "brown";
                ctx.font = "10px";
                ctx.fillText(text, this.x, this.y);
            }
        }

        mainRoom = new room(tiles[10][10].x, tiles[10][10].y, tileSize, tileSize, walls, false,false,5);

        thePlayer = new player(mainRoom.x + 224, mainRoom.y + 100, 2);

        room1 = new room(tiles[5][10].x, tiles[5][10].y, tileSize, tileSize, walls, frontOtherFloor, true, 1, "up", "DIRETO");
        tiles[5][10].image = backOtherFloor;
        var doorRoom1 = new door(room1.center.x - doorWidth / 2, room1.y + room1.height - 1, doorWidth, doorHeight, mainRoom.center.x, mainRoom.center.y - 200,
            thePlayer, doorDown);

        var room2 = new room(tiles[10][5].x, tiles[10][5].y, tileSize, tileSize, walls, frontOtherFloor, true, 2, "left", "FOR");
        tiles[10][5].image = backOtherFloor;
        var doorRoom2 = new door(room2.x + room2.width - 1, mainRoom.center.y - doorWidth / 2, doorWidth, doorHeight, mainRoom.center.x - 200, mainRoom.center.y,
            thePlayer, doorRight);

        var room3 = new room(tiles[10][15].x, tiles[10][15].y, tileSize, tileSize, walls, frontOtherFloor, true, 3, "right", "IF");
        tiles[10][15].image = backOtherFloor;
        var doorRoom3 = new door(room3.x - doorHeight + 1, room3.center.y - doorWidth / 2, doorWidth, doorHeight, mainRoom.center.x + 150, mainRoom.center.y,
            thePlayer, doorLeft);

        var room4 = new room(tiles[15][5].x, tiles[15][5].y, tileSize, tileSize, walls, frontOtherFloor, true, 4, "down", "WHILE DO");
        tiles[15][5].image = backOtherFloor;
        var doorRoom4 = new door(room4.center.x - doorWidth / 2, room4.y - doorHeight + 1, doorWidth, doorHeight, mainRoom.center.x, mainRoom.center.y + 150,
            thePlayer, doorUp);

        mainButton = new button(mainRoom.center.x - buttonWidth / 2, mainRoom.center.y - buttonHeight + buttonWidth / 2, buttonWidth,
            buttonHeight, buttonFrames);

        floorLights = [];
        floorLights.up = new floorLight(mainRoom.center.x - 52 / 2, mainRoom.y + 1, 52, 194, 0, floorLightUp);
        floorLights.down = new floorLight(mainRoom.center.x - 52 / 2, mainRoom.center.y + 52 / 4, 52, 226, 'most', floorLightDown);
        floorLights.left = new floorLight(mainRoom.x + 1, mainRoom.center.y - 52 / 2, 226, 52, 'most', floorLightLeft);
        floorLights.right = new floorLight(mainRoom.center.x + 13, mainRoom.center.y - 52 / 2, 226, 52, 'most', floorLightRight);

        var doors = [];
        doors.up = new door(mainRoom.center.x - doorWidth / 2, mainRoom.y - doorHeight + 1, doorWidth, doorHeight, doorRoom1.x + 30, doorRoom1.y-100,
            thePlayer, doorUp);
        doors.down = new door(mainRoom.center.x - doorWidth / 2, mainRoom.y + mainRoom.height - 1, doorWidth, doorHeight, doorRoom4.x - 30, doorRoom4.y + 100,
            thePlayer, doorDown);
        doors.left = new door(mainRoom.x - doorHeight + 1, mainRoom.center.y - doorWidth / 2, doorWidth, doorHeight, doorRoom2.x - 100, doorRoom2.y + 30,
            thePlayer, doorLeft);
        doors.right = new door(mainRoom.x + mainRoom.width - 1, mainRoom.center.y - doorWidth / 2, doorWidth, doorHeight, room3.center.x - 200, room3.center.y,
            thePlayer, doorRight);

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
            mainRoom.drawB();
            room1.drawB();
            room2.drawB();
            room3.drawB();
            room4.drawB();

            floorLights.up.animate.run();
            floorLights.down.animate.run();
            floorLights.left.animate.run();
            floorLights.right.animate.run();

            if (doors.up.on) {
                doors.up.update();
                doors.down.update();
                doors.left.update();
                doors.right.update();
                doorRoom1.update();
                doorRoom2.update();
                doorRoom3.update();
                doorRoom4.update();
                if (doors.up.animate.currentTask != 'idle') {
                    if (doors.up.animate.ended) {
                        doors.up.animate.changeTask('idle');
                        doors.down.animate.changeTask('idle');
                        doors.left.animate.changeTask('idle');
                        doors.right.animate.changeTask('idle');
                        doorRoom1.animate.changeTask('idle');
                        doorRoom2.animate.changeTask('idle');
                        doorRoom3.animate.changeTask('idle');
                        doorRoom4.animate.changeTask('idle');
                    }
                }
            }

            if (floorLights.up.animate.currentTask == "glow" && floorLights.down.animate.currentTask == "glow" &&
                floorLights.left.animate.currentTask == "glow" && floorLights.right.animate.currentTask == "glow"){
                floorLights.up.animate.changeTask('floodFill');
                floorLights.down.animate.changeTask('floodFill');
                floorLights.left.animate.changeTask('floodFill');
                floorLights.right.animate.changeTask('floodFill');

                floorLights.up.animate.loop = false;
                floorLights.down.animate.loop = false;
                floorLights.left.animate.loop = false;
                floorLights.right.animate.loop = false;

                floorLights.up.animate.ended = false;
                floorLights.down.animate.ended = false;
                floorLights.left.animate.ended = false;
                floorLights.right.animate.ended = false;
            }
            if (floorLights.down.animate.currentTask == 'floodFill'){
                if (floorLights.down.animate.ended && mainButton.reactivation){
                    mainButton.reactivate();
                    mainButton.reactivation = false;
                    mainButton.click = true;
                    mainButton.animate.ended = false;
                    mainButton.glows = true;
                }
                if (mainButton.animate.currentTask == "reactivate" && mainButton.glows){
                    if (mainButton.animate.ended){
                        mainButton.glow();
                        mainButton.glows = false;
                        mainButton.animate.loop = true;
                    }
                }
            }
            if (!(mainRoom.finalRun)) {
                mainButton.update();
            }
            mainRoom.drawF();
            thePlayer.draw();
            room1.drawF();
            room2.drawF();
            room3.drawF();
            room4.drawF();
        }, 1000 / 60);
    }
}