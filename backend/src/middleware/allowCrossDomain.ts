import {Request, Response, NextFunction } from 'express';

const allowCrossDomain = function(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE');

    next();
};

export default allowCrossDomain;