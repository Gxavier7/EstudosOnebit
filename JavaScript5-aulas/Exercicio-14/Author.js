const Comment = require("./Comment");
const Post = require("./Post");

class Author{
  constructor(name){
    this.name = name;
    this.posts = [];
  }

  addPost(title, post){
    this.posts.push(new Post(title, post, this.name));
  }

}

module.exports = Author;