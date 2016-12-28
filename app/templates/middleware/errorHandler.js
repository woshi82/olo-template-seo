/**********************************/
/* errorHandle.js                       */
/* 功能说明: 页面500处理       */
/* Author: Hiufan <Hiufan@qq.com> */
/**********************************/
module.exports = function(err, req, res, next) {
    if (process.env.ENV === 'DEV') {
        // development error handler
        // will print stacktrace
        res.status(err.status || 500);
        res.render('error', {
            layout: false,

            message: err.message,
            error: err
        });
    } else {
        // production error handler
        // no stacktraces leaked to user
        res.status(err.status || 500);
        res.render('error', {
            layout: false,
            message: err.message,
            error: {}
        });
    }
};
