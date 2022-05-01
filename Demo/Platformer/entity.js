class entity {
    constructor(x, y, Xv = 0, Yv = 0) {
        this.x = x;
        this.y = y;
        this.Xv = Xv;
        this.Yv = Yv;
    }
}

class player extends entity {
    constructor(x, y, radius, controls) {
        super(x, y);
        this.radius = radius;
        this.controls = controls;
        this.type = "circle";
    }

    init() {
        this.Xv = 0;
        this.Yv = 0;
        this.x = 56;
        this.y = 132;
    }

    update() {
        if (keyIsDown(this.controls.right)) {
            this.Xv += 2;
        }
        if (keyIsDown(this.controls.left)) {
            this.Xv -= 2;
        }
        this.Xv = this.Xv * 0.9;
        this.x += this.Xv;
        for (let i = 0; i < 5; i++) {
            if (checkAllCollisions(this, levels[currentlevel], "floor")) {
                this.y += 2;
            }
        }
        if (checkAllCollisions(this, levels[currentlevel], "floor")) {
            this.x += this.Xv * -1;
            this.y -= 10;
            if (keyIsDown(this.controls.up)) {
                if (this.Xv > 0) {
                    this.Xv = -10;
                } else {
                    this.Xv = 10;
                }
                this.Yv = 20;
            } else {
                this.Yv = 0;

            }
        }

        this.Yv -= 2;
        this.y -= this.Yv;
        if (checkAllCollisions(this, levels[currentlevel], "floor")) {
            this.y -= this.Yv * -1;
            this.Yv = 0;
        }
        this.y += 2;
        if (checkAllCollisions(this, levels[currentlevel], "floor")) {
            if (keyIsDown(this.controls.up)) {
                this.Yv = 30;
            }
        }
        this.y -= 2;

        if (checkAllCollisions(this, levels[currentlevel], "death") || this.y - this.radius < 0 || this.y + this.radius > 720 || this.x - this.radius < 0 || this.x + this.radius > 960) {
            this.init();
        }

        if (checkAllCollisions(this, levels[currentlevel], "goal")) {
            currentlevel += 1;
            this.init();
        }
    }
}