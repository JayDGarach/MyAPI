const express = require("express")
const ModelEmp=require("./Model/employee")

const router=express.Router()

router.get("/emp",async (req,res)=>{

    const employee = await ModelEmp.find();
    res.send(employee)

})

router.post("/insemp",async (req,res)=>{

    try
    {
        const emp=new ModelEmp(
            {
                name:req.body.name,
                email:req.body.email,
                city:req.body.city,
                hobby:req.body.hobby,
                address:req.body.address
            }
        )
        await emp.save()
        res.send(emp)
    }
    catch(error)
    {
        res.status(404).send(error)
    }


})

router.delete("/delemp/:id",async (req,res)=>{

    try
    {
        await ModelEmp.deleteOne({_id:req.params.id})
        res.send("Deleted Successfully...")
    }
    catch(error)
    {
        res.status(404).send({error:"Record not found!..."})
    }
})

router.patch("/emp/:id",async (req,res)=>{

    try
    {
        /*
        const emp=await ModelEmp.findOne({_id:req.params.id})
        emp.name=req.body.name
        await emp.save()
        */

        const filter={_id:req.params.id}
        const update={name:req.body.name}
        const emp=await ModelEmp.findOneAndUpdate(filter,update)
        res.send("Record is updated...")
    }
    catch(error)
    {
        res.status(404).send({error:"Record not found..."})
    }
})
module.exports=router