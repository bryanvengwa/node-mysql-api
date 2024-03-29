# node-mysql-api

blog api created using node-js , mysql , sequelize ORM and authentication using tokens

How to create a table with sequelize

npx sequelize-cli model:generate --name Post --attributes title:string,content:text,imageUrl:string,categoryId:integer,userId:integer
npx sequelize-cli model:generate --name User --attributes name:string,name:string,email:string,password:string
npx sequelize-cli model:generate --name Category --attributes name:string,
npx sequelize-cli model:generate --name Comment --attributes content:string,postId:integer,userId:integer



how to migrate the database using sequelize-cli
npx sequelize-cli db:migrate