const express = require('express');
const path = require('path')
const app = express();

const port = 8080;

// The ________ functions 
// alter the request and response 
// objects in the request-response 
// cycle of the application.

// Static
// HTTP
// Route Handler
// Middleware [Ans]



var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: "main.html",
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath, options));


app.get("/", (req, res)=>{
	console.log(__dirname)
	res.send("Hello World!")
})
// app.use((req, res, next)=> {
// 	// console.log(req.method)
// 	// console.log(req.path)

// 	const {method, path} = req;

// 	console.log(
// 		`New Request to: ${method} on path ${path}`
// 	)

// 	next();
// })


app.get("/:name", (req, res)=>{
	res.send(`Welcome to express, ${req.params.name}`)

})

app.listen(port, ()=>{
	console.log(`Server is up on port ${port}`)
});