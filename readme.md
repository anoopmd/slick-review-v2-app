# Slick Review App V2
UI for the Slick Review App V2 - Code challenge that I did while interviewing for Gumroad.

## Installation
Clone from repository:
```
$ git clone https://github.com/anoopmd/slick-review-v2-app.git
```

Install dependencies:
```js
$ npm install
```

## Run
Build files and start local server in watch mode:
```js
$ npm run start
```
This will open the browser at `http://localhost:8080/`.

## Build
Create a distributable:
```bash
npm run build
```
## Dockerize
Create a distributable:
```bash
# docker build image
docker build -t slick-app .

# docker run container
docker run -d -p 9000:80 slick-app
```

## License
[MIT](LICENSE)
