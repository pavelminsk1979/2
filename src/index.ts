import express,{Request,Response} from 'express'
const app = express()
const port = 3010

app.get('/', (req:Request, res:Response) => {
    res.send('Hello99999444444444444444444444')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})