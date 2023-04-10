import React from "react"

const hello = (req, res) => {
    
    return res.status(200).json({message: "こんにちは", date:"今日は金曜日です"})
}

export default hello