const userModel = require('../models/user.model.js')
const mongoose = require('mongoose')
const zod = require('zod')


class UserService {

    constructor() {
        this.userModel = userModel
    }


    async createUser(data) {
        const schema = zod.object({
            name: zod.string(),
            email: zod.string().email(),
            password: zod.string().min(6),
            role: zod.string().min(4).max(6)
        })

        schema.parse(data)

        const user = new userModel(data)
        return await user.save()
    }

    async getUsers() {
        return await userModel.find()
    }

    async getUserById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return await userModel.findById(id)
    }

    async updateUser(id, data) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return await userModel.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteUser(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return null
        }
        return await userModel.findByIdAndDelete(id)
    }





}
module.exports = new UserService()