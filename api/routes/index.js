const userRouter = require('./users');
const authRouter = require('./auth');
const postRouter = require('./posts');
const conversationRoute = require('./conversations');
const messageRoute = require('./messages');

function route(app) {
    app.use('/api/posts', postRouter);
    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter);
    app.use("/api/conversations", conversationRoute);
    app.use("/api/messages", messageRoute);
}

module.exports = route;