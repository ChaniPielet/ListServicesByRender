const express=require('express') 
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())
app.get('', (req, res) => {
    //send - מה שיחזור ויוצג על הדפדפן / לצד לקוח
    res.status(200).send(good)
})

// const sdk = require('api')('@render-api/v1.0#ja8rb1jlsxhh7qu');

// sdk.auth('rnd_0H3CaJvsXwn4NnKLctZEb1X8SzJB');
// sdk.getServices({limit: '20'})
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));
app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})