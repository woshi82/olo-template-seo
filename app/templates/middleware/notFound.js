/**********************************/
/* notFound.js                       */
/* 功能说明: 页面404处理       */
/* Author: Hiufan <Hiufan@qq.com> */
/**********************************/
// catch 404 and forward to error handler
module.exports = function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    logger.error(err);
    next(err);
};
