
import {Router} from 'express'

const routerMain = Router();

routerMain.get('/', (req, res) => {
    res.send('Hello World!')
})

export const mainRouter = routerMain;