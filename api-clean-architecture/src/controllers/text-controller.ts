import express from 'express';
import { Request, Response } from 'express';
import { textServices } from '../services/text-service';

export const createPost = (req: Request, res: Response): void => {
    const { title, author, content, status } = req.body;

    const newText = textServices.createText({ title, author, content, status });
    res.status(201).json({ message: 'Text created with success'});

};

export const listTexts = (req: Request, res: Response): void => {

};

