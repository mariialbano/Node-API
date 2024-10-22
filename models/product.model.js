const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        client_name: {
            type: String,
            required: [true, "Name of the client"],
        },

        client_email: {
            type: String,
            required: [true, "E-mail"],
        },

        client_phone: {
            type: Number,
            required: true,
            default: 0
        },

        client_cpf: {
            type: Number,
            required: true,
            default: 0
        },

        client_adress: {
            type: String,
            required: [true, "Name of the adress"],
        },

        name: {
            type: String,
            required: [true, "Name of the product"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        payment_method: {
            type: String,
            required: [true, "Payment Method"],
        },

        status: {
            type: String,
            required: [true, "Status"],
        },

        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;