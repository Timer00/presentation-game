function collision(a, b, c, type) {
    if ((a.x + a.width > c.x) && (a.x < c.x + c.width) && (a.y + a.height > c.y) && (a.y < c.y + c.height)) {
        return false;
    } else {
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
}

var potentialCollisions = [];
var nonCollisions = [];

function movementReaction(target, collisionsObject, nonCollisionObject) {//Both must have: x,y,width,height - Target must have: speedX,speedY,up,down,left,right;
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
                            if (collision(target, collisionsObject[g], nonCollisionObject[0], 'touch')) {
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
                            if (collision(target, collisionsObject[g], nonCollisionObject[0], 'touch')) {
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
                            if (collision(target, collisionsObject[g], nonCollisionObject[0], 'touch')) {
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
                            if (collision(target, collisionsObject[g], nonCollisionObject[0], 'touch')) {
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