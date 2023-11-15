
# MOOVD API

created with NestJS and MySQL


## API Reference

#### baseUrl

```
  GET http://localhost:3001
```

#### Get all GPS

```
  GET /gps
```

#### Get GPS by device id

```
  GET /gps/${device_id}
```

| Parameter | Type     |
| :-------- | :------- |
| `device_id` | `string` |


#### Add GPS

```
  POST /gps
```

| json | Type     |
| :-------- | :------- |
| `device_id` | `string` |
| `device_type` | `string` |
| `timestamp` | `string` |
| `location` | `string` |

#### Edit GPS

```
  PUT /gps
```

| json | Type     |
| :-------- | :------- |
| `device_id` | `string` |
| `device_type` | `string` |
| `timestamp` | `string` |
| `location` | `string` |

#### Delete GPS by device id

```
  DELETE /gps/${device_id}
```

| Parameter | Type     |
| :-------- | :------- |
| `device_id` | `string` |

#### Get all user

```
  GET /user
```

#### Get user by email

```
  GET /user/${email}
```

| Parameter | Type     |
| :-------- | :------- |
| `email` | `string` |


#### Add User

```
  POST /user
```

| json | Type     |
| :-------- | :------- |
| `id` | `number` |
| `fullName` | `string` |
| `email` | `string` |
| `password` | `string` |

#### Edit User

```
  PUT /user
```

| json | Type     |
| :-------- | :------- |
| `id` | `number` |
| `fullName` | `string` |
| `email` | `string` |
| `password` | `string` |

#### Delete user by id

```
  DELETE /user/${id}
```

| Parameter | Type     |
| :-------- | :------- |
| `id` | `number` |


