import { Component } from './Component.js';
import { Form } from './Form.js';
import { Input, Input } from "./Input.js";
import { Label, Label } from "./Label.js";

const title = new Component('h1', 'body', {textContent: 'Olá, mundo'});

title.render();

console.log(title);

title.tag('h3');

title.build().render();

const form = new Form('body');

const Label = new Label('Nome:', form, {htmlFor:'nameInput'});

const Input = new Input(form, { id: 'nameInput', name:'name'});

form.render();
label.render(); 

form.addChildren(input);