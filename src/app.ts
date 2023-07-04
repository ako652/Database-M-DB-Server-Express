// server here
import Express from 'express'
import productRouter from './routes/products'
import cors from 'cors'


const app =Express()
app.use(cors());

app.use(Express.json())

app.use('/products', productRouter)

export default app
