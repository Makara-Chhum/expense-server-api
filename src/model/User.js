const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//create Userschema
const userSchema = mongoose.Schema({
    firstName: {
        require: [true, 'firstName is require'],
        type: String,
    },
    lastName: {
        require: [true, 'lastName is require'],
        type: String,
    },
    email: {
        require: [true, 'email is require'],
        type: String,
    },
    password: {
        require: [true, 'password is require'],
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);

//Hashing Password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//Verify Password
userSchema.methods.isPasswordMatch = async function(enteredPasswords) {
    return await bcrypt.compare(enteredPasswords, this.password);
}

//compile schema into models
const User = mongoose.model('User', userSchema);

module.exports = User;
