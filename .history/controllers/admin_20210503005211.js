app.use(req, res) {
    res.send('pwelcome to the page admin');
}

app.get('/example/a', function (req, res) {
    res.send('Hello from A!');
  });