import express from 'express'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/calculate', (req, res) => {

    const html = `
        <form action="/api/calculate" method="post">
            <label for="number">Enter a number: </label>
            <input type="number" name="number" id="number" placeholder="03">
            <button type="submit">Submit</button>
        </form>
    `


    res.status(200).send(html)
})

app.post('/api/calculate', async (req, res) => {

    let number 
    number = req.body.number

    try {
        number = parseInt(number, 10)

        if (typeof number !== 'number') {
            throw new Error(`Invalid number: ${number}`)
        }
        (number %3 === 0) ?
            res.status(200).send({msg: `Number ${number}: is divisible by 3`})
            :
            res.status(200).send({msg: `Number ${number}: is not divisible by 3`})
        
    } catch (error) {
        console.log(error)
    }
   

    // res.status(200).send({msg: number})
})



app.listen(PORT, () => { console.log(`Listening on ${PORT}`) })