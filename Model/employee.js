const mongoose=require('mongoose')

const schema = mongoose.Schema(
    {
        name:
        {
            type:String,
            require:true,
            minlength:3
        },
        email:
        {
            type:String,
            require:true,
            minlength:5
        },
        city:
        {
            type:String,
            require:true,
            minlength:2
        },
        hobby:
        {
            type:Array
        },
        address:
        {
            add1:
            {
                type:String
            },
            add2:
            {
                type:String
            }
        }
    },
    {
        timestamps:true
    }
)                            //give collection name...
module.exports = mongoose.model("colemps",schema)

