
# MOOVD API

created with NestJS and MySQL


## API Reference

#### baseUrl

```http
  GET 
```

#### Get all GPS

```http
  GET /gps
```

#### Get GPS by device id

```http
  GET /gps/${device_id}
```

| Parameter | Type     |
| :-------- | :------- |
| `device_id` | `string` |


#### Add GPS

```http
  POST /gps
```

| json | Type     |
| :-------- | :------- |
| `device_id` | `string` |
| `device_type` | `string` |
| `timestamp` | `string` |
| `location` | `string` |

#### Edit GPS

```http
  PUT /gps
```

| json | Type     |
| :-------- | :------- |
| `device_id` | `string` |
| `device_type` | `string` |
| `timestamp` | `string` |
| `location` | `string` |

#### Delete GPS by device id

```http
  DELETE /gps/${device_id}
```

| Parameter | Type     |
| :-------- | :------- |
| `device_id` | `string` |

#### Get all user

```http
  GET /user
```

#### Get user by email

```http
  GET /user/${email}
```

| Parameter | Type     |
| :-------- | :------- |
| `email` | `string` |


#### Add User

```http
  POST /user
```

| json | Type     |
| :-------- | :------- |
| `id` | `number` |
| `fullName` | `string` |
| `email` | `string` |
| `password` | `string` |

#### Edit User

```http
  PUT /user
```

| json | Type     |
| :-------- | :------- |
| `id` | `number` |
| `fullName` | `string` |
| `email` | `string` |
| `password` | `string` |

#### Delete user by id

```http
  DELETE /user/${id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id` | `number` |


