import { CustomerDTO } from "../dtos/models.js"

export const test1 = async (req, res) => {
    try {
        res.status(200).json()
    }
    catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const test2 = async (req, res) => {
    try {
        let cus = new CustomerDTO(1, 89630857714, 'Biba', 'Booba')
        res.status(200).json(cus)
    }
    catch (e) {
        res.status(500).json({error: 'Лох'})
        console.log(e.stack)
    }
}
