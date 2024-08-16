const mongoose = require('mongoose');
const app      = require('../app');

const fetchFoodMenu = () =>{

    const foodSchema = new mongoose.Schema(
        {
            name : String,
            image: Object,
            description: String,
            cuisine: String,
            category: String,
            quantity: String,
            rating: String,
            preptime: String,
            subtitle:String,
            tags: String,
            price: Number,
        }
    )
    
    const foodModel = mongoose.model("food_menus", foodSchema);
    
    // app.get('/getFoodMenu', async(req,res) => {
    //     try{
    //         const food_menu = await foodModel.find({})
    //         res.json([{message: "success"},{"data":food_menu}]);
    //     } catch(error) {
    //         res.json({message:error.message});
    //     }
    // });

    app.get('/getFoodMenu', async(req,res) => {
        await foodModel.find({}).then(
            (food) =>{
                res.json([{message: "success"},{"data":food}]);
            }
        ).catch((error) =>{
            res.json({message:error.message});
        });
    });
}
module.exports = fetchFoodMenu;