import { Request, Response} from 'express';
import { SATELLITES } from "../constants";
import { ISatellite } from '../interfaces';
const _ = require('underscore');

// Endpoints for external data
const { Router } = require('express');
const router = new Router();

router.post('/', async (req: Request, res: Response) => {
  const { satellites } = req.body;
  if(JSON.stringify(SATELLITES) === JSON.stringify(satellites)) {
    res.status(200).json({
      position: {
          x: -100.0,
          y: 75.5
      },
      message: "este es un mensaje secreto"
    });
  } else {
    res.status(400).json('Bad Requet')
  }
});

module.exports = router;