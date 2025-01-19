const stripe = require('../../config/Stripe');
const userModel = require('../../models/userModel'); 

const paymentController = async (request, response) => {
    try {
        const { cartItems } = request.body;

         console.log("cartItems",cartItems)
        
        const user = await userModel.findOne({ _id: request.userId });

        if (!user) {
            return response.status(404).json({
                message: "User not found",
                error: true,
                success: false,
            });
        }

        
        const params = {
            submit_type: 'pay',
            mode: "payment",
            payment_method_types: ['card'], 
            billing_address_collection: 'auto', 
            shipping_options: [
                {
                    shipping_rate: 'shr_1QXIntIYJuuGSF1PS8M2FHiL',
                },
            ],
            customer_email: user.email,
            line_items: cartItems.map((item) => {
                return {
                    price_data: {
                        currency: 'LKR',
                        product_data: {
                            name: item.productId.productName,
                            images : item.productId.productImage,
                            metadata : {
                                productId : item.productId._id
                            } 
                        },
                        unit_amount: item.productId.sellingPrice
                    },
                     

                    quantity: item.quantity, 
                };
            }),
        };

        const session = await stripe.checkout.sessions.create(params);

        response.status(200).json({
            message: "Checkout session created successfully",
            session,
            error: false,
            success: true,
        });
    } catch (error) {
        response.status(500).json({
            message: error?.message || "An error occurred while creating the checkout session.",
            error: true,
            success: false,
        });
    }
};

module.exports = paymentController;
