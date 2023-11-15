
# MOOVD API

created with NestJS and MySQL


## API Reference

#### Get all GPS

```http
  GET http://localhost:3001/gps
```

#### Get GPS by device id

```http
  GET http://localhost:3001/gps/${device_id}
```

| Parameter | Type     |
| :-------- | :------- |
| `device_id` | `string` |


#### Add GPS

```http
  POST http://localhost:3001/gps
```

| json | Type     |
| :-------- | :------- |
| `device_id` | `string` |
| `device_type` | `string` |
| `timestamp` | `string` |
| `location` | `string` |

#### Edit GPS

```http
  PUT http://localhost:3001/gps
```

| json | Type     |
| :-------- | :------- |
| `device_id` | `string` |
| `device_type` | `string` |
| `timestamp` | `string` |
| `location` | `string` |

#### Delete GPS by device id

```http
  DELETE http://localhost:3001/gps/${device_id}
```

| Parameter | Type     |
| :-------- | :------- |
| `device_id` | `string` |

#### Get all user

```http
  GET http://localhost:3001/user
```

#### Get user by email

```http
  GET http://localhost:3001/user/${email}
```

| Parameter | Type     |
| :-------- | :------- |
| `email` | `string` |


#### Add User

```http
  POST http://localhost:3001/user
```

| json | Type     |
| :-------- | :------- |
| `id` | `number` |
| `fullName` | `string` |
| `email` | `string` |
| `password` | `string` |

#### Edit User

```http
  PUT http://localhost:3001/user
```

| json | Type     |
| :-------- | :------- |
| `id` | `number` |
| `fullName` | `string` |
| `email` | `string` |
| `password` | `string` |

#### Delete user by id

```http
  DELETE http://localhost:3001/user/${id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id` | `number` |


