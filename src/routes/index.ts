import { Request, Response } from 'express'; 
const { Router } = require('express');

const router = new Router();

router.get('/health', (req: Request, res: Response) => {
    const data = {
        name: 'Health Page',
    };
    res.status(200).json(data);
});  

module.exports = router;
