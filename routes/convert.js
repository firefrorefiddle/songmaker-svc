

var express = require('express');
child_process = require('child_process');

var router = express.Router();

router.get('/:content', function(req, res, next) {
    const songmaker = child_process.spawn('songmaker', []);
    songmaker.stdin.write(new Buffer(req.params.content, "base64").toString());
    songmaker.stdout.on('data', (data) => {
	res.send(new Buffer(data).toString("base64"));
    });
    songmaker.stderr.on('data', (data) => {
	res.send(new Buffer(data).toString("base64"));
    });
    songmaker.stdin._handle.close();
});

module.exports = router;
