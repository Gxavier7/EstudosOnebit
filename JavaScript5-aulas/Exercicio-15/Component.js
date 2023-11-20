export class Component{

  #reference = null;

  constructor(tag, parent, options){
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }

  getElement(){
    return this.#reference
  }

  build(){
    this.#reference = document.createElement(this.tag);
    Object.assign(this.#reference, this.options)
    return this
  }

  render(){
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#reference);
    }else{
      document.querySelector(this.parent).append(this.#reference)
    }
  }

}

