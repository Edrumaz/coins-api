const uploadFile = (req, res, next) =>{

    let uploadPath = `resources/${req.files.img.name}`

    req.files.img.mv(uploadPath, (err)=>{
        if(err)
            return res.status(500).send({message: err})
        res.locals.coinInfo = req.body
        res.locals.coinInfo.img = uploadPath
        return next()
    })
}

export default uploadFile
