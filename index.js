const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs')

app.use('/Addin', express.static(path.join(__dirname, 'Addin')));

app.get('/', (req, res) => {
	res.render('index');
});

const PORT = 5100;

app.listen(process.env.PORT || PORT, () => {
	console.log('now listening to ' + PORT)
});