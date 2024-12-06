"use server";

import mongoose from 'mongoose';

const MONGODB_URI = "mongodb://localhost:27017/wynnsy"; 

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function databaseConnect() 
{
    if (cached.conn) 
        return cached.conn;

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default databaseConnect;
