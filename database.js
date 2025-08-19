require("dotenv").config();
const {MongoClient}=require("mongodb");

const url = process.env.mongo_url;
const dbName = process.env.dbName;

const client=  new MongoClient(url);



async function main(){
    await client.connect();
    console.log("connected to database");
    const db= client.db(dbName);
    const collection = db.collection('User');
    
    //CRUD operations
    const data = {
        firstName: "Sonal",
        lastName: "Dixit",
        age: "23",
        city: "Delhi"
    }

    //insert
    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    //read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    //update
    const updateResult = await collection.updateMany(
        {age: "23"},
        {$set: {age: "24"}}
    );
    console.log('Updated documents =>', updateResult);

    //delete
    const deleteResult = await collection.deleteMany({age:"24"});
    console.log('Deleted documents =>', deleteResult);


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());

