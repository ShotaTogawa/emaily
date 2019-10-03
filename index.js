const express = require('express');
const mongoose = require('mongoose');
// 順番大事
require('./models/User');
require('./services/passport');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,// browserにどれくらいの期間を保持するか
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// 下記もauthRoutes(app)と同じ
// require('./routes/authRoutes')(app)
authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(PORT);
});