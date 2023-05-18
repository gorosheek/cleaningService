

export const test1 = async (req,res) => {
    try {
        res.status(200).json()
    }
    catch (e)
    {
        console.log(e)
        res.status(500).json(e)
    }
}
