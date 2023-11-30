import express,{Request,Response} from 'express'
const app = express()
const port = 3010


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
    let idProduct = req.params.id
    let product = products.filter(e=> e.id!==idProduct)
    res.send(204)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})