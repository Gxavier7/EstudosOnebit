import { Component } from "./Component.js"

export class Input extends Component{

  constructor(parent, options, type){
    super('input', parent, options)
    this.type = type
  }

}
