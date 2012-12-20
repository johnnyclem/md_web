var ts = require('twitter-stream');
var jsdom = require('jsdom');

//Connecting to Twitter Streaming API
// var stream = ts.connect({
//   screen_name: 'johnnyclem',
//   password: 'glowkin22',
//   action: 'sample',
//   // params: {track: 'Twitter'},
// });

//Retrieving status one by one
// stream.on('status', function(status) {
//   console.log(status.entities.media[0].media_url);

// 	jsdom.env({
// 	  html: "<html><body></body></html>",
// 	  scripts: [
// 	    'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'
// 	  ]
// 	}, function (err, window) {
// 	  var $ = window.jQuery;

// 	  $('body').append("<div class='testing'>Hello World</div>");
// 	  console.log($(".testing").text()); // outputs Hello World
// 	});
// });

//Handling error
// stream.on('error', function(error) {
//   console.error(error);
// });

//Aborting the stream
// stream.abort();

exports.index = function(req, res){
  res.render('bezel', { title: 'Bezel | Mind Diaper', photos: '' });
};

  // <a href="http://pbs.twimg.com/media/A-hczVNCcAAsOGJ.jpg" title="Banana" rel="gallery">Banana</a>
  // <a href="apple.jpg" title="Apple" rel="gallery">Apple</a>
  // <a href="orange.jpg" title="Orange" rel="gallery">Orange</a>
