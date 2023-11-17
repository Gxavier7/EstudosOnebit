const Comment = require("./Comment");

class Post{
  constructor(title, post, author){
    this.title = title;
    this.post = post;
    this.author = author;
    this.comments = [];
  }

  addComment(author, comment) {
    this.comments.push(new Comment(author,comment));
  }

}

module.exports = Post