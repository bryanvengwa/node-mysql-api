import models from '../models/index.js'; 

export function save(request, response, next) {
  console.log(request.body);
  const post = {
    title: request.body.title,
    content: request.body.content,
    imageUrl: request.body.image_url,
    categoryId: request.body.category_id,
    userId: 1,
  };
  
  models.Post.create(post)
    .then((result) => {
      response
        .status(201)
        .send({ message: 'post created successfully', post: result });
    })
    .catch((err) => {
      response.status(500).send({ message: 'Something went wrong', post: err });
    });
}
