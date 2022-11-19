import express from "express";
import Accounts from './routes/account.js';
import Store from './routes/store.js';

const app=express();

app.use(express.json());

app.use('/api/account', Accounts);
app.use('/api/store', Store);

const port = 3001;

app.listen(port,function(){
    console.log(`Server is running via port ${port}`);
})