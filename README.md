# node-mongo-backend-example
Example of backend using node.js (express) and mongodb

## TODO
- [X] GET hello world from localhost
- [X] POST users/register
- [ ] POST users
- [ ] GET users/:id
- [ ] PUT users/:id
- [ ] DELETE users/:id

## Run server
```
$ node index.js
$ nodemon index.js
```

## Curl it
### POST users/register
```
$ . curl/postUserRegister.sh
{"err":"Login is required"}
$ . curl/postUserRegister.sh
{"err":"Password is required"}
$ . curl/postUserRegister.sh
{"_id":"5aafbf4cc5a54975c872120a","login":"login"}
$ . curl/postUserRegister.sh
Login login already taken :(
```