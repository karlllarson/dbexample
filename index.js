import express from 'express';
import authors from './routers/authors.js';
const app = express();
app.use(express.json());
app.use('/authors',authors);   // localhost:5000/authors
app.get('/',(req, res) => {    // localhost:5000/
    res.send('howdy');
});
app.listen(5000, ()=> {
    console.log('listening at port 5000');
});