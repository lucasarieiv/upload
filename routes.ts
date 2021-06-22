import { Router } from 'express';
import upload from './upload';

const router = Router();

router.get('/', (req, res) => {
    res.render('index.html');
});
  
router.post('/', upload.single('files'), (req, res) => {
    res.redirect('/');
});

export { router }