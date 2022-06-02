const mongoose = require('mongoose');
const GroupRegister = require('../Model/GroupRegister');
const GroupRegisterData = {    GruopLeaderEmail:"email@gmail.com",GruopLeaderItNumber:"it20088683", GruopMembersItNumbers:"it20088683 ,it20088683",GruopMembersNames:"minosh , disa ", GruopMembersEmail:"it20088683@gmail.com , it20088683@gmail.com", GruopMembersContectNumber:"071459838743, 07156828432" };

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
        const adminWithoutRequiredField = new GroupRegister({ GruopLeaderEmail: 'email@gmail.com' });
        let err;
        try {
            const savedAdminWithoutRequiredField = await adminWithoutRequiredField.save();
            error = savedAdminWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.GruopLeaderItNumber).toBeDefined();
    });

})




