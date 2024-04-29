class ShellPrefab extends GameObject{
    constructor(name){
        super(name);
    }
    start(ctx){
        this.addComponent(new Circle("green", "transparent"))
        this.addComponent(new RigidBody())
        this.addComponent(new CameraFollowerComponent())

    }
}

window.ShellPrefab = ShellPrefab