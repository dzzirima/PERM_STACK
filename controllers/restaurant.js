/** create a restaurant */
import db from "../db/index.js";

export const createRestaurant = async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location,price_range) VALUES ($1 ,$2 , $3) RETURNING *",
      [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(200).json({
      success: true,
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/** get a restaurant */
export const getRestaurant = async (req, res) => {
  const { id } = req.query;

  /**Never use string concatination it will lead to sql injection */

  const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [
    id,
  ]);

  try {
    res.status(200).json({
      success: true,
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/** UpDate the restaurant */
export const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.query;
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2 , price_range = $3 WHERE id = $4  RETURNING *",
      [req.body.name, req.body.location, req.body.price_range, id]
    );

    return res.status(200).json({
      success: true,
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
/** delete  restaurant */
export const deleteRestaurant = async (req, res) => {
    const { id } = req.query;
  const result = db.query("DELETE FROM restaurants Where id = $1", [id])

  try {
    return res.status(200).json({
      success: true,
      

    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/** get all the restaurants */
export const getAllRestaurants = async (req, res) => {
  console.log("HElllo");
  const results = await db.query("SELECT *  FROM restaurants");

  try {
    res.status(200).json({
      success: true,
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
