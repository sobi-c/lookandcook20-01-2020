const express = require('express')
const app = express()
 
app.get('*', function (req, res) {
	//console.log('yes')
 res.sendFile(__dirname + '/pages/maintenance.html') // server down page path here

  //res.send(__filename)
  //resss
})
 
app.listen(3000,()=>{
	console.log('server running')
})