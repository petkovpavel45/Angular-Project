# Angular-Project - Fondation-Project

## Base URL

The Base URL is the root URL for all of the API, if you ever make a request to the API and you get back a 404 NOT FOUND response then check the Base URL first.
The Base URL for the API is:
`https://localhost:3000/api`
The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

# Endpoints: Users

- `/users/register` -- signing up;
- `/users/login` -- signing in;
- `/users/logout` -- logging out;

## Register User

Signs up user and returns the registered data as json.

### URL --> `/users/register`

### Method --> `POST`

### Body -->

```
{
    "email":"test@abv.bg",
    "username":"test45",
    "tel": "+3598654781"
    "password":"12345",
    "rePassword":"12345"
}
```

Required:
`email` : [string] -- The email of the person is required and must be valid email;
`username` : [string] -- The username of the person is required and must be unique, also there is a minimum length of 5 chars, allowed are latin letters and numbers;
`tel` : [string] -- The phone number of the person is required and must be minimum length of 10 digits;
`password` : [string] -- The password of the person is required and there is a minimum length of 5 chars, allowed are latin letters and numbers;

### Success Response:

Code: 200
Content:

```
{
"_id" : "639a0a29b626a1085a323c1c"
"email" : "test@abv.bg"
"username" : "test45"
"tel" : "+35987654254"
"created_at" : "2022-12-14T17:38:49.568+00:00"
"updatedAt" : "2022-12-14T17:38:49.568+00:00"
}
```

### Error Response:

Code: 409 CONFLICT
Content:

```
{
    "message": "This email/username is already registered!"
}
```

## Login User

Signs in user and returns the registered data as json.

### URL --> `/users/login`

### Method --> `POST`

### Body -->

```
{
    "username":"test45",
    "password":"12345"
}
```

Required:
`username` : [string] -- The username of the person
`password` : [string] -- The password of the person

### Success Response:

Code: 200
Content:

```
{
    "_id" : "639a0a29b626a1085a323c1c"
    "email" : "test@abv.bg"
    "username" : "test45"
    "tel" : "+35987654254"
    "created_at" : "2022-12-14T17:38:49.568+00:00"
    "updatedAt" : "2022-12-14T17:38:49.568+00:00"
}
```

### Error Response:

Code: 401 Unauthorized
Content:

```
{
    "message": "Wrong username or password"
}
```

## Logout User

Logout user.

### URL --> `/users/logout`

### Method --> `POST`

### Success Response:

Code: 401 Unauthorized
Content:

```
{
    "message": "Logged out!"
}
```

# Endpoints: Fondations

- `/fondations`
- `/fondations/:fondationId`

## Get Fondation

Returns all fondations as json.

### URL --> `/fondations`

### Method --> `GET`

### Success Response:

Code: 200
Content:

```
[
    {
        "_id": "639a112eb626a1085a323c26",
        "title": "Kids fondation",
        "description": "They need food- like pizza",
        "location": "Varna",
        "img": "https://hext.to/wp-content/uploads/2018/12/shutterstock_1181290198-Converted-1920.jpg",
        "_ownerId": 639a0a29b626a1085a323c1c,
        "created_at" : "2022-12-14T18:08:46.136+00:00",
        "updatedAt" : "2022-12-14T18:08:46.136+00:00"
    }
]
```

### Error Response:

Code: 500 Internal Server Error
Content:

```
{
    message: "Something went wrong!"
}
```

## Post Fondation

Creates new Fondation and returns the fondation as json.

### URL --> `/fondations`

### Method --> `POST`

### Body -->

```
{
    "title": "some title",
    "description": "Some description",
    "location": "Varna",
    "image": "url for image"
}
```

Required:
`title` : [string] -- The Title of your new Fondation, which you want to create
`description` : [string] -- The description of your Fondation.
`locations` : [string] -- The location that is located the fondation. Must be Varna, Plovdiv, Sofia
`image` : [string] -- The image of your fondation

### Success Response:

Code: 200
Content:

```
{
    "_id": "639a112eb626a1085a323c26",
    "title": "Kids fondation",
    "description": "They need food- like pizza",
    "location": "Varna",
    "img": "https://hext.to/wp-content/uploads/2018/12/shutterstock_1181290198-Converted-1920.jpg",
    "_ownerId": 639a0a29b626a1085a323c1c,
    "created_at" : "2022-12-14T18:08:46.136+00:00",
    "updatedAt" : "2022-12-14T18:08:46.136+00:00"
 }
```

### Error Response:

Code: 500 Internal Server Error
Content:

```
{
    message: "Something went wrong!"
}
```

## Detail Fondation

Get detail of the fondation you select as a json

### URL --> `/fondation/:fondationId`

### Method --> `GET`

### Success Response:

Code: 200
Content:

```
{
    "_id": "639a112eb626a1085a323c26",
    "title": "Kids fondation",
    "description": "They need food- like pizza",
    "location": "Varna",
    "img": "https://hext.to/wp-content/uploads/2018/12/shutterstock_1181290198-Converted-1920.jpg",
    "_ownerId": 639a0a29b626a1085a323c1c,
    "created_at" : "2022-12-14T18:08:46.136+00:00",
    "updatedAt" : "2022-12-14T18:08:46.136+00:00"
 }
```

### Error Response:

Code: 500 Internal Server Error
Content:

```
{
    message: "Something went wrong!"
}
```

## Edit Fondation

Edit Fondation if the user is the author of the fondation and returns the changed fondation.

### URL --> `/fondations/:fondationId`

### Method --> `PUT`

### Body -->

```
{
    "title": "Kids fondation",
    "description": "They need food- like pizza",
    "location": "Varna",
    "img": "https://hext.to/wp-content/uploads/2018/12/shutterstock_1181290198-Converted-1920.jpg"
}
```

### Success Response:

Code: 200
Content:

```
{
    "_id": "639a112eb626a1085a323c26",
    "title": "Kids fondation",
    "description": "They need food- like pizza",
    "location": "Varna",
    "img": "https://hext.to/wp-content/uploads/2018/12/shutterstock_1181290198-Converted-1920.jpg",
    "_ownerId": 639a0a29b626a1085a323c1c,
    "created_at" : "2022-12-14T18:08:46.136+00:00",
    "updatedAt" : "2022-12-14T18:08:46.136+00:00"
 }
```

### Error Response:

Code: 401 Unauthorized
Content:

```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error
Content:

```
{
    message: "Something went wrong!"
}
```

## Delete Fondation

Deletes Fondation if the user is the author of the fondation and returns the deleted fondation.

### URL --> `/fondations/:fondationId`

### Method --> `DELETE`

### Success Response:

Code: 200
Content:

```
{
    "_id": "639a112eb626a1085a323c26",
    "title": "Kids fondation",
    "description": "They need food- like pizza",
    "location": "Varna",
    "img": "https://hext.to/wp-content/uploads/2018/12/shutterstock_1181290198-Converted-1920.jpg",
    "_ownerId": 639a0a29b626a1085a323c1c,
    "created_at" : "2022-12-14T18:08:46.136+00:00",
    "updatedAt" : "2022-12-14T18:08:46.136+00:00"
 }
```

### Error Response:

Code: 401 Unauthorized
Content:

```
{
    message: "Not allowed!"
}
```

Code: 500 Internal Server Error
Content:

```
{
    message: "Something went wrong!"
}
```

# Endpoints: Donations

- `/donations/:fondationId`


## Make Donation

Make donation to the fondation.

### URL --> `/donations/:fondationId`

### Method --> `PUT`

### Body -->

```
{
    "fondationId": "639a112eb626a1085a323c26",
    "userId": "639a0a29b626a1085a323c1c",
}
```

### Error Response:

Code: 403 Forbidden
Content:

```
{
    message: "You cannot donate in this fondation!"
}
```

Code: 403 Internal Server Error
Content:

```
{
    message: "You cannot donate again!"
}
```

Code: 400 Bad Request
Content:

```
{
    message: "Something went wrong!"
}
```
