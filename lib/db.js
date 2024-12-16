import mysql from 'mysql2/promise' ;

let connection ;

export const createConnection = async () =>{
  if(!connection){
      connection = await mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:null,
        database:'safarmarket',
        port:'3306'
      })
  }
  return connection ;
}