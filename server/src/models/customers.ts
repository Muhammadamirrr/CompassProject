import mongoose from 'mongoose'

const benefitSchema = new mongoose.Schema({
    tier: String,
    benefits: [String],
    active: Boolean,
    id: String,
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    accounts: {
        type: [Number],
        required: true,
    },
    tier_and_details: { benefitSchema },
})

const CustomerModel = mongoose.model('Customer', userSchema)

export default CustomerModel
