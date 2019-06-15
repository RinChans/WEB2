module.exports = {
    mongoDB_URL: `mongodb+srv://rinchan:KmWX8YL6JDM9EMpn@cluster0-4gdeu.mongodb.net/test?retryWrites=true&w=majority`,
    PORT : process.env.PORT || 3000,
    globalVariables : (req,res,next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');
        next();
    }
}