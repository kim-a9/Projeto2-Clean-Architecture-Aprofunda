import express from 'express';
// import { listTexts, createText } from '../controllers/text-controller';

const router = express.Router();


router.get('/texts', listTexts);
router.post('/texts', createText);

// router.get('/texts/:id', listTextByID);

// router.patch('/texts/:id', editText);
// router.delete('texts/:id', delText);




export default router;