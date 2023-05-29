import mercadopago from "mercadopago";

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN})

const donation_controller = {
    create: (req, res) => {

        let data = req.body;
        console.log(data)

        let preference = {
            items: [
                {
                    id: data.id,
                    title: data.title,
                    currency_id: "ARS",
                    unit_price: data.unit_price,
                    quantity: 1,
                } 
            ],
            back_urls: {
                success: "http://localhost:5173/donate/success",
                failure: "http://localhost:5173/donate/failed",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
            statement_descriptor: "MINGA",
        };
        console.log(preference)

        mercadopago.preferences
            .create(preference)
            .then((response) => res.status(200).json({ response }))
            .catch((error) => res.status(400).json({ error: error.message }));
    }
}
export default donation_controller