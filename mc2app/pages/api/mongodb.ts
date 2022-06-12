import {MongoClient, Collection, ObjectId} from 'mongodb'
const MONGODB_URI:string ="mongodb+srv://michal:michal@cluster0.izabq.mongodb.net/?retryWrites=true&w=majority";
const MONGODB_DB:string = "mc2main"

const connectToDb = async () =>{
    let db;

    try {
        db = new MongoClient(MONGODB_URI);
        await db.connect();
        console.log('Connected to Mongo Database');
        const collectionNews = db.db('mc2main').collection('news');
        const randomNews = await collectionNews.findOne();
        console.log(randomNews);

        const newNews = {
            title: 'New news',
            image: 'https://drive.google.com/file/d/1r_LYTnpiGYaTGUp-Hz486Hj03-R4l_nW/view?usp=sharing',
            date: Date.now,
            description: 'Test news'
        }

        // await collectionNews.insertOne(newNews)
        // await collectionNews.deleteOne({"_id":new ObjectId("62761418301a457d0b15849b")})
        await db.close();
        
    } catch (error) {
     
        console.log('Connection failed',error);
       
    }

}

export default connectToDb;