const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        client_name: {
            type: String,
            required: [true, "Name of the client"],
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