const express = require('express');

const app = express();
const port = 8000;

app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => {
  console.log(`Server running on the PORT: ${port}`);
});
