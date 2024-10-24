# Book Collaboration Station

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
<!-- - **npm run test** to start server using testing environment -->

### Framework : Express

-    Allows for rapid implementation
-    Excellent documentation and other sources available
-    Stable, has been around for a while

## Endpoints


#### Monitoring

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/`                     | All            | Returns a message indicating server is up    |

#### Authentication Routes

| Method | Endpoint           | Access Control | Description                                         |
| ------ | ------------------ | -------------- | --------------------------------------------------- |
| POST   | `auth/register/`   | All            | Add a new user. Returns the user object and a JWT   |
| POST   | `auth/login`           | All            | Returns the user object and a JWT                   |


#### Books Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/books/`          | All            | Returns all books in the database.      |
| GET    | `/books/:id`       | All            | Returns the specified book.              |
| POST   | `/books/:id`          | All            | Adds a new section to the specified book.                         |            |

# Data Model

![nlR2wXI](https://github.com/user-attachments/assets/50a94eef-c668-429d-8024-2672f0137185)


#### USERS

---

```
{
  id: INTEGER
  username: STRING
  password: STRING
  user_id: INTEGER foreign key in FAMILIES table
}
```

#### BOOKS

---

```
{
  id: INTEGER
  book_id: STRING
  title: STRING
  author_id: STRING foreign key in USERS table

}
```

#### SECTIONS

---

```
{
  id: INTEGER
  title: STRING
  section_id: STRING
  book_id: STRING foreign key in BOOKS table
  content: TEXT
  parent_section_id: STRING references section_id in SECTIONS table
}
```

#### COLLABORATORS

---

```
{
  id: INTEGER
  book_id: STRING foreign key in BOOKS table
  user_id: STRING foreign key in USERS table
}
```


## Actions

TODO

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

    *  PORT - set to any valid local port number for running server locally
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    
