import sql from "mssql";
import dbConfig from "../config/db.js";

export const getPersons = async (req, res) => {
  try {
    // Reuse the SQL Server connection pool
    const pool = await sql.connect(dbConfig);

    // Read the first five persons, ordered by ID
    const result = await pool.request().query(`
      SELECT TOP (5) ID, Fornavn, Etternavn
      FROM dbo.t_Person
      ORDER BY ID;
    `);

    res.status(200).json({
      data: result.recordset,
    });
  } catch (error) {
    console.error("SQL error:", error.message);

    res.status(500).json({
      message: "Failed to retrieve persons",
    });
  }
};
