import express,{Request,Response} from 'express'
import bodyParser from "body-parser";
const app = express()
const port = 3010


const parserMideleware= bodyParser({})
app.use (parserMideleware)

const products = [{id:'1',title:'tomato'},{id:'2',title:'orange'}]
const  addresses=[{id:'1',value:'Nezalejnasti 12'},{id:'2',value:'Surganovo 51'}]

app.get('/products', (req:Request, res:Response) => {

    if(req.query.title){
        let value = req.query.title.toString()
        res.send(products.filter(p=>p.title.indexOf(value)>-1))
    }else {
        res.send(products)
    }

})
app.get('/products/:productTitle', (req:Request, res:Response) => {
    let product = req.params.productTitle
    let value= products.find(e=>e.title===product)
    if(value){
        res.send(value)
    } else { res.send(404)}
})

app.get('/addresses', (req:Request, res:Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req:Request, res:Response) => {
    let adress=req.params.id
    let item=addresses.find(e=>e.id===adress)
    if(item){
        res.send(item)
    }else {res.send(404)}

})

app.delete('/products/:id',(req:Request, res:Response) =>{
    for(let i=0;i<products.length;i++){
       if(products[i].id=== req.params.id){
           products.splice(i,1)
           res.send(204)
           return
       }
    } res.send(404)
})

app.post('/products', (req:Request, res:Response) => {
const newProduct = {id:String(+(new Date())),title:req.body.title}
    products.push(newProduct)
res.status(201).send(newProduct)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})