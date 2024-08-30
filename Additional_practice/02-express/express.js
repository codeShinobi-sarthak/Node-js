import express from "express";
import 'dotenv/config'
//  logger
import logger from './logger.js';
import morgan from 'morgan';

const app = express()
const port = process.env.PORT 

//  logger
const morganFormat = ':method :url :status :response-time ms';

app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(' ')[0],
        url: message.split(' ')[1],
        status: message.split(' ')[2],
        responseTime: message.split(' ')[3],
      };
      logger.info(JSON.stringify(logObject));
    }
  }
}));

// * getting app data
app.use(express.json())

let data = []
let nextId = 1

// * add a tea
app.post('/herbalTeas', (req, res) => {
  const { name, price } = req.body
  const herbalTeas = { id: nextId++, name, price }
  data.push(herbalTeas)
  res.status(201).send(herbalTeas)
});

// *get all tea in json format
app.get("/herbalTeas", (req, res) => {
  res.status(201).send(data);
});

// *get specific tea usinf id
app.get("/herbalTeas/:id", (req, res) => {
  const tea = data.find(t => t.id === parseInt(req.params.id));
  if(!tea){
    return res.status(404).send("tea not found")
  }

  const {name, price} = req.body
  tea.name = name
  tea.price = price
  res.status(200).send(tea)
});

// * update tea
app.put("/herbalTeas/:id", (req, res) => {
  const tea = data.find(t => t.id === parseInt(req.params.id));
  
  if(!tea){
    return res.status(404).send("tea not found")
  }

  const {name, price} = req.body
  tea.name = name
  tea.price = price
  res.send(200).send(tea) 
})

// * deleating data(tea)
app.delete("/herbalTeas/:id", (req, rea) => {
  const index =  data.findIndex(t => t.id === parseInt(req.params.id))
  if(index === -1){
    return res.status(404).send("tea not found")
  }
  data.splice(index,1)
  return res.status(204).send("tea deleated")
})

// * sending app data using res.send
// app.get("/", (req, res) => {
//   res.send("Hello express js");
// });

// app.get("/about", (req, res) => {
//   res.send("This is about section");
// });

// app.get("/membership", (req, res) => {
//   res.send("This is membership section");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
