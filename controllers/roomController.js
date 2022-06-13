const { Room } = require("../models")

module.exports = {
    createRoom : (req, res) => {
        let name = req.body.name
        let code = Math.floor(Math.random() * 212)
        try{
            Room.createRoom(name, code)
            .then(() => {
                res.send( respon = {
                    "status" : 201,
                    "message" : "room berhasil dibuat",
                    "room_name" : name,
                    "room_id" : code
                })
            })
        }catch(err){
            res.send( respon = {
                "status" : 422,
                "error" : err.message,
                "message" : "room gagal dibuat"
            })
        }
    }
}