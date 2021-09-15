const {Query} = require('../models/query')


const addQuery = async(req,res)=>{
    try{
        console.log(req.body)
        const newQuery={
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }
        console.log(newQuery)

        const query = new Query(newQuery)
        await query.save()
        res.redirect('/contact')
    }catch(err){
        console.log(err)

    }
}



module.exports={addQuery}