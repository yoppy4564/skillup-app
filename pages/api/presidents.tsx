const data = [
    { name: "Joe Biden", period: "2021-" },
    { name: "Donald Trump", period: "2017-2021" },
    { name: "Barack Obama", period: "2009-2017" },
]

export default function server(req:any, res:any){
    res.status(200).json(data)
}