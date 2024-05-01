class CharacterControllerComponent extends Component {
  constructor() {
    super()
  }
  start(ctx) {
    // this.isJumping = false;
    // this.isGrounded = false;
    // this.vy = 0;
  }
  update(ctx) {

    // let speed = 2
    // if (Input.keysDown.includes("ArrowLeft"))
    //   this.transform.x -= speed / Time.fps
    // if (Input.keysDown.includes("ArrowRight"))
    //   this.transform.x += speed / Time.fps
    // if (Input.keysUpThisFrame.includes("ArrowUp") && this.isGrounded) {
    //   this.isJumping = true;
    //   this.isGrounded = false;
    //   this.vy = -12;
    // }
    // else {

    //   let yBefore = this.transform.y
    //   let yAfter = yBefore + this.vy * Time.deltaTime;
    //   let yFinal = yAfter

    //   let lines = GameObject.filter("Line")
    //   let x = this.transform.x;
    //   let y = this.transform.y;


    //   this.parent.getComponent("Circle").fill = "blue"

    //   if (this.vy >= 0) {
    //     this.isGrounded = false;
    //     this.parent.getComponent("Circle").fill = "red"
    //     for (const lineGameObject of lines) {
    //       let line = lineGameObject.getComponent("Line")
    //       if (x > line.one.x && x < line.two.x) {
    //         if (yBefore <= line.one.y && yAfter >= line.one.y) {
    //           yFinal = line.one.y
    //           this.isGrounded = true;
    //           this.parent.getComponent("Circle").fill = "green"
    //         }
    //       }
    //     }
    //   }

    //   this.transform.y = yFinal;
    //   if (!this.isGrounded) {
    //     this.vy += 9.8 * Time.deltaTime;

    //   }
    //   else {
    //     this.vy = 0;
    //   }
    // }

  }
}

window.CharacterControllerComponent = CharacterControllerComponent;