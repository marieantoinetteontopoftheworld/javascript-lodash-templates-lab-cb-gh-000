function createPost() {
  var title = document.getElementById('title').value;
  var body = document.getElementById('body').value;
  var author = document.getElementById('author').value;

  var pageTemplate = document.getElementById('page-template').innerHTML;
  var postTemplate = document.getElementById('post-template').innerHTML;

  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);

  var postTemplateHTML = postTemplateFn({ 'title': title, 'body': body, 'author': author });
  var pageTemplateHTML = pageTemplateFn({ 'post': postTemplateHTML });

  document.getElementById('content').innerHTML += pageTemplateHTML;
}

function postComment() {
  var comment = document.getElementById('comment').value;
  var commenter = document.getElementById('commenter').value;

  var commentsTemplate = document.getElementById('comments-template').innerHTML;
  var commentTemplate = document.getElementById('comment-template').innerHTML;

  var commentsTemplateFn = _.template(commentsTemplate);
  var commentTemplateFn = _.template(commentTemplate);

  var commentTemplateHTML = commentTemplateFn({ 'comment': comment, 'commenter': commenter });
  var commentsTemplateHTML = commentsTemplateFn({ 'comments': commentTemplateHTML });

  document.getElementById('comments').innerHTML += commentsTemplateHTML;
}

//solution version

function createPost() {
  // create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
