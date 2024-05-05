import { Router } from "express";
import { StatusCodes } from 'http-status-codes'


const router = Router()

router.get('/', (_, res) => {
    return res.send('teste')
})

router.post('/', (req, res) => {
    return res.status(StatusCodes.UNAUTHORIZED).send(req.body)
})

export { router }