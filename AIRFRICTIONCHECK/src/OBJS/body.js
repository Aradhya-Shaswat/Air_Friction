class BodyOfObjs {
    constructor(x, y, w, h) {
      let options = {
        restitution: 1,
        // frictionAir:0.03,
        friction:1,
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.color = color;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("#808080");
      rect(0, 0, this.w, this.h);
      pop();
    }
  }