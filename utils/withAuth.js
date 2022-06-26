const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        console.log("no session user ID");
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;