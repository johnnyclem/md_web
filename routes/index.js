
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mind Diaper' });
};
exports.cinepro = function(req, res){
  res.render('cinepro', { title: 'CinePro | Mind Diaper' });
};