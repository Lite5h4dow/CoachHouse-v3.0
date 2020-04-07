import { NextApiRequest, NextApiResponse } from "next";

const withSQL = handler => async (req: NextApiRequest, res: NextApiResponse) => {
 const mssql = require('mssql')
 try {
  await mssql.connect(`${process.env.mssql}`)
  handler(req, res, mssql)
 } catch (err) {
  console.log(`SQL Connection Failed: ${err}`)
 } finally {
 }
}