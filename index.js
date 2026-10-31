const http = require('http');

// Server creation using built-in http module
const server = http.createServer((req, res) => {
    const url = req.url;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.write('<h1>Hello from Sharpener</h1>');
        res.write('<h3>This is page 1</h3>');
        res.write('<h3>I love coding</h3>');
        return res.end();
    }

    // Default route
    res.write('<h1>Page Not Found</h1>');
    res.end();
});

// Port configuration
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
