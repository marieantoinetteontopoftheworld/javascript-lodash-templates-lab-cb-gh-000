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
