import { Request, Response} from 'express';
import { SATELLITES_EXTRA } from '../constants/satellites';
import { ISatelliteExtra } from '../interfaces';
const _ = require('underscore');
const { Router } = require('express');
const router = new Router();

router.get('/:satelliteName', (req: Request, res: Response) => {
  const { satelliteName } = req.params;
  let findedSatellite;
  if(satelliteName) {
    _.each(SATELLITES_EXTRA, ({name, x, y, message}: ISatelliteExtra) => {
        if (name === satelliteName) {
          findedSatellite = {
            position: {
              x,
              y
            },
            message
          }
        }
    });
    if(findedSatellite) {
      res.status(200).json(findedSatellite);
    }
    res.status(404).json('insuficient information')
  } else {
    res.status(500).json('There is an error')
  }
});

router.post('/:satelliteName', (req: Request, res: Response) => {
  const { distance, message } = req.body;
  const { satelliteName } = req.params;
  let findedSatellite: ISatelliteExtra = {
    name: '',
    distance: 0,
    message: [],
    x: 0,
    y: 0
  };
  if(distance) {
    _.each(SATELLITES_EXTRA, (satellite: ISatelliteExtra) => {
        if (satellite.name === satelliteName) {
          findedSatellite = satellite;
        }
    });
    if(findedSatellite.distance === distance && JSON.stringify(findedSatellite.message) === JSON.stringify(message)) {
      res.status(200).json({
        position: {
          x: findedSatellite.x,
          y: findedSatellite.y
        },
        message: findedSatellite.message
      });
    }
    res.status(404).json('insuficient information')
  } else {
    res.status(500).json('There is an error')
  }
});

module.exports = router;