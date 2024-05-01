
class CharacterGameObject extends GameObject{
  constructor(name="CharacterGameObject"){
      super(name)
      this.addComponent(new Circle("red", "transparent"))
      this.addComponent(new CharacterControllerComponent());
  }
  
}

window.CharacterGameObject = CharacterGameObject