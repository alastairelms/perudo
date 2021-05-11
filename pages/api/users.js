export default (req, res) => {
    if (req.method !== "POST") {
        return res.status(404).json({ error: "Not found" })
    }
    const name = req.body.name

    if (!name) {
        return res.status(400).json({ error: "Name required" })
    }

    res.status(201).json({ body: `Your name is ${name}`})  
    
}



