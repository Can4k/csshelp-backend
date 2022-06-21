import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

// НЕ ЗАБЫВАЕМ ОБ AWAIT

const PORT = 5000;
const DB_URL = 'mongodb+srv://Can4k:gjlowrt1329@cluster0.xwjif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();

app.use(express.json())
app.use('/api', router);

async function StartApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log(`Started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

StartApp();