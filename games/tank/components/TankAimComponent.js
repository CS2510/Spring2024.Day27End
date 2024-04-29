class TankAimComponent extends Component {
  start(ctx) {
    this.angle = 0
    this.radius = 1
    this.speed = 2;

  }
  update(ctx) {
    if (Input.keysDown.includes("ArrowLeft"))
      this.angle -= Time.deltaTime * this.speed
    if (Input.keysDown.includes("ArrowRight"))
      this.angle += Time.deltaTime * this.speed
    // if (Input.keysDown.includes("ArrowUp"))
    //   this.nextMove = this.up
    // if (Input.keysDown.includes("ArrowDown"))
    //   this.nextMove = this.down

    if (Input.keysUpThisFrame.includes("Space")) {
      //console.log("Space")
      let shell = new ShellPrefab()
      let lineComponent = this.parent.getComponent("Line")
    
      let x = lineComponent.two.x;
      let y = lineComponent.two.y;

      GameObject.instantiate(shell, x, y, .5, .5)
      shell.start(ctx)
      shell.getComponent("RigidBody").vx = Math.cos(this.angle) * 10
      shell.getComponent("RigidBody").vy = Math.sin(this.angle) * 10

    }

    // if(this.angle > 0)
    //   this.angle = 0;
    // if(this.angle < Math.PI)
    //   this.angle = Math.PI

    let lineComponent = this.parent.getComponent("Line")
    let x = lineComponent.one.x + Math.cos(this.angle) * this.radius;
    let y = lineComponent.one.y + Math.sin(this.angle) * this.radius;
    lineComponent.two.x = x;
    lineComponent.two.y = y;
  }
}

window.TankAimComponent = TankAimComponent;