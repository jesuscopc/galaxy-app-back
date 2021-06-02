import { Request, Response} from 'express';
import { SATELLITES } from "../constants";

// Endpoints for external data
const { Router } = require('express');
const router = new Router();

router.post('/topsecret', async (req: Request, res: Response) => {
    res.status(200).json(SATELLITES);
});

module.exports = router;