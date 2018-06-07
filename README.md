## smart-door-bell-ws

WebSocket server for SmartDoorBell

### Register
Parameter: 
- content.type = `client`/`cluster`
```json
{
  "type": "register",
  "content": {
    "id": 88,
    "type": "client"
  }
}
```
Response:
- content.id = Returned ID from server. Required for future requests.
```json
{
  "type": "register",
  "content": {
    "id": 52
  }
}
```


### soundOn
Parameter:
- content.id = Client ID, acquired from register request.
```json
{
  "type": "soundOn",
  "content": {
    "id": 52
  }
}
```
Response:
```json
{
  "type": "soundOn",
  "content": {
    "msg": "success"
  }
}
```

### setText
Parameter:
- content.id = Client ID, acquired from register request.
- content.text = Text to display.
```json
{
  "type": "setText",
  "content": {
    "id": 52,
    "text": "Hello, I\'m out."
  }
}
```
Response:
```json
{
  "type": "setText",
  "content": {
    "msg": "success"
  }
}
```

### buttonPressed
Parameter:
- content.id = Cluster ID, acquired from register request.
```json
{
  "type": "buttonPressed",
  "content": {
    "id": 52
  }
}
```
Response:
```json
{
  "type": "buttonPressed",
  "content": {
    "msg": "success"
  }
}
```
