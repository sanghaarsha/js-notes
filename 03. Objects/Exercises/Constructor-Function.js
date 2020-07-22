// Imagine a user is drafting a blogpost but it's still unpublished.
// Write a constructor funtion to implement this.

let userDraft = new blogPost('A','B','C');

// For a new unpublished post views and comments = 0 and isLive is false.

function blogPost(title,author,body){
	this.title = title;
	this.author = author;
	this.body=body;
	this.views=0;
	this.comments=[];
	isLive=false;
}

console.log(userDraft);