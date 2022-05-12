import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.send('homeController')
};

export const dogs = (req: Request, res: Response) => {
    res.send('dogsController')
};

export const cats = (req: Request, res: Response) => {
    res.send('catsController')
};

export const fishes = (req: Request, res: Response) => {
    res.send('fishesController')
};