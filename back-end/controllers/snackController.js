const express = require("express")
const snacks = express.Router()
const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require("../queries/snacks.js")

snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks();
    if(allSnacks[0]){
        res.status(200).json(allSnacks)
    }else{
        res.status(500).json({error: "server error!"})
    }
})

snacks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const snack = await getSnack(id);
    if(snack){
        res.json(snack);
    }else{
        res.status(404).json({error: "not found"})
    }
})

snacks.post("/", async (req, res) => {
    try{
        const snack = await createSnack(req.body);
        res.json(snack)
    }catch(err){
        res.status(400).json({error: "error "})
    }
})

snacks.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedSnack = await deleteSnack(id);
    if(deletedSnack.id) {
        res.status(200).json(deletedSnack)
    }else{
        res.status(404).json({error: "Snack not found!"})
    }
} )

snacks.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedSnack = await updateSnack(req.body, id);
    if(updateSnack.id){
        res.status(200).json(updateSnack)
    }else{
        res.status(404).json({error: "This snack could not be updated!"})
    }
})

module.exports = snacks