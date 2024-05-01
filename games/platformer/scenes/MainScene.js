import "../prefabs/CharacterGameObject.js"
import "../prefabs/LineGameObject.js"

import "../components/CharacterControllerComponent.js"


class MainScene extends Scene {
  constructor() {
    super("darkgray")
    this.aspectRatio = 1;
    this.logicalWidth = 20;
    
  }
  start(ctx){

    let lineGameObject = new GameObject("Line")
    lineGameObject.addComponent(new Line(new Vector2(5, 15), new Vector2(15, 15), "white", .1))
    GameObject.instantiate(lineGameObject)

    let line2GameObject = new GameObject("Line")
    line2GameObject.addComponent(new Line(new Vector2(11, 10), new Vector2(19, 10), "white", .1))
    GameObject.instantiate(line2GameObject)

    let line3GameObject = new GameObject("Line")
    line3GameObject.addComponent(new Line(new Vector2(6, 5), new Vector2(14, 5), "white", .1))
    GameObject.instantiate(line3GameObject)

    let characterGameObject = new CharacterGameObject();
    GameObject.instantiate(characterGameObject, 10, 9)


    
  }

}

window.MainScene = MainScene