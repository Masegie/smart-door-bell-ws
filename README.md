## smart-door-bell-ws

WebSocket server for SmartDoorBell

### Register
Parameter: 
- content.type = `client`/`cluster`
```json
{
  "type": "register",
  "content": {
    "type": "client"
  }
}
```
Response:
- content.id = Returned ID from server. Required for future requests.
```json
{
  "status": "success",
  "type": "notification",
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
  "status": "success",
  "type": "soundOn"
}
```
