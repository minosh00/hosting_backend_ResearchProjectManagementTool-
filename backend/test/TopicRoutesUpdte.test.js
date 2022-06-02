const mongoose = require('mongoose');
const User = require('../Model/user');
const adminData = { topic:"testtopic" , GroupID:"grp_34334",
    TopicName:"resrach test topic"  ,GruopLeaderEmail: "it20088683@my.sliit.lk",GruopMembersItNumbers:"it200984850" ,GruopLeaderItNumber:"it20088682" ,GruopMembersNames:"minoshimamths"};
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
        const adminWithoutRequiredField = new User({ GruopLeaderItNumber: "it20088682" });
        let err;
        try {
            const savedAdminWithoutRequiredField = await adminWithoutRequiredField.save();
            error = savedAdminWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.GruopLeaderEmail).toBeDefined();
    });

})




