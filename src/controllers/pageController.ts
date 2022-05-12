import { Request, Response } from 'express';

import { Pet } from '../models/Pet'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
    const data = {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list: Pet.getAll()
    };

    res.render('pages/page', data);
};

export const dogs = (req: Request, res: Response) => {
    const data = {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list: Pet.getFromType('dog')
    };

    res.render('pages/page', data);
};

export const cats = (req: Request, res: Response) => {
    const data = {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list: Pet.getFromType('cat')
    };

    res.render('pages/page', data);
};

export const fishes = (req: Request, res: Response) => {
    const data = {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list: Pet.getFromType('fish')
    };

    res.render('pages/page', data);
};