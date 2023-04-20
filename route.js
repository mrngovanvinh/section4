const fs = require('fs');

const routeHandler = (req, res) => {
    console.log(req.url, req.method, req.headers); 
    //process.exit();

    const url = req.url;
    const method = req.method;
    if (url == '/') {
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form>></body>');
        res.write('</html>');
        return res.end();   
    }
    if (url == '/message' && method == "POST") {
        const body =  [];
        let parsedBody = '';
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
         return req.on('end', () => {
            parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody+"hello2");
            fs.writeFile('message.txt', parsedBody.split('=')[1], err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
            
        })
        
    }
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<body>Hello from my Nodes</body>');
    res.write('</html>');
    res.end();
}


module.exports = routeHandler;

