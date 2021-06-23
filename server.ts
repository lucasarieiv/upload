import express from 'express';
import path from 'path';
import { router } from './routes';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(router);

app.set('views', path.join(__dirname, 'views', 'pages'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen('3000', () => {
  console.log(`server running at 3000`);
})