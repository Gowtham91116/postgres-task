const AdminRouter = require('./adminRouter');

module.exports = function(app){
    app.use('/Admin',AdminRouter);
}
