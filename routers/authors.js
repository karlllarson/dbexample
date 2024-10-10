import express from 'express';
import mysql from 'mysql2';

const router = express.Router()
// connecting Database
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});  

/*************************************************************************
 * QUERY (GET)
 *************************************************************************/
router.get("/", async (req, res) => {       // localhost:5000/authors/ [GET]
    try {
        const data =  await connection.promise().query(
          `SELECT *  from Authors;`
        );
        res.status(202).json({  // res.send(data)
          users: data[0]
        });
      } catch (err) {
        res.status(500).json({
          message: err
        });
      }
});

export default router;