import  postgres from "pg";
const pool = new postgres.Pool();

let db = {}




db.query =   async(text, params, callback)=> {
  return pool.query(text, params, callback);
}


export default db