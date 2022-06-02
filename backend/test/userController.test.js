const mongoose = require('mongoose');
const User = require('../Model/user');
const adminData = { name: 'minoshadmin', email: 'minoshadmin@gmail.com', password: 'minoshadmin', userRole: 'Admin', date:"2022-12-23" };
describe('Admin Model Test', () => {

    // It's just so easy to connect to the MongoDB Memory Server 
    // By using mongoose.connect
    beforeAll(async () => {
        process.env.MDB_CONNECT_STRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        };
    });

    it('create admin without required field should failed', async () => {
        const adminWithoutRequiredField = new User({ name: 'minoshadmin' });
        let err;
        try {
            const savedAdminWithoutRequiredField = await adminWithoutRequiredField.save();
            error = savedAdminWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.password).toBeDefined();
    });

})




