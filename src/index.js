const app = require('./app');
const port = process.env.POST | 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
