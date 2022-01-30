/** create a restaurant */
import db from "../db/index.js"

export const createRestaurant =  async (req, res) =>{

    // const result = await db.query("SELECT *  FROM restaurants")
    // console.log(result)

    try {
        res.status(200).json({
            success:true,
            message:"restaurants"
        })
        
    } catch (error) {
        
    }
}
/** get a restaurant */
export const getRestaurant =  async (req, res) =>{

    const {id } = req.query

    /**Never use string concatination it will lead to sql injection */

    const results = await db.query("SELECT * FROM restaurants WHERE id = $1",[id])

    try {
        res.status(200).json({
            success:true,
            data:{
                restaurant:results.rows[0]
            }
        })
        
    } catch (error) {
        
    }
}


/** UpDate the restaurant */
export const updateRestaurant = async (req,res) =>{

    try {
        const results = await db.query("SELECT ")

        res.status(200).json({
            success:true,
            message:"restaurants"
        })
        
    } catch (error) {
        
    }

}
/** delete  restaurant */
export const deleteRestaurant = async (req,res) =>{
    console.log(req.query)

    try {
       return  res.status(200).json({
            success:true,
            message:"restaurants"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }

}

/** get all the restaurants */
export const getAllRestaurants =  async (req, res) =>{
    console.log("HElllo")
     const results = await db.query("SELECT *  FROM restaurants")
    

    try {
        res.status(200).json({
            success:true,
            results:results.rows.length,
            data:{
            restaurants:results.rows
            }
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}



