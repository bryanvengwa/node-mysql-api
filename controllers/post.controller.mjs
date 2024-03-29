function save(request, response, next) {
  const post = {
    title: request.body.title,
    content: request.body.content,
    imageUrl: request.body.image_url,
    categoryId: request.body.category_id,
    userId:1
  };
}
