var fileTraverser = require('../common/fileTraverser');
var settings = require('../common/settings');

exports.get = function (req, res) {
        console.log('toimintasuun, __filename', __filename);
	var files = fileTraverser(settings.toimintasuunnitelmatPath);
	console.log(files);
	res.json({
		files: files
	})
}
