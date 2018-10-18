function start () {
  console.log('Start Function');
  return 'Hello Start';
}

function upload () {
  console.log('Upload Function');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
