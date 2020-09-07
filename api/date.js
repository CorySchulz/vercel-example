



export default (req, res) => {
  
  // if (req.method === 'POST') {
  //   // Process a POST request
  // } else {
  //   // Handle any other HTTP method
  // }

  res.setHeader('Content-Type', 'text/html');
  const currentDate = new Date().toString();
  res.status(200).end("The date is " + currentDate)


  // Use this if you want to return JSON data
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify({ name: 'John Doe' }))
}

