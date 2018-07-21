var photos = [];

photos.push({
    name: 'photo1',
    path: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532151737190&di=2db45177621832c2d3cc48cf4c9902c1&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn12%2F235%2Fw666h369%2F20180422%2F8c93-fznefkh6260918.jpg'
});

photos.push({
   name: 'photo2',
   path: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532151737189&di=17a219e5edfe6b67f722ead58bc27805&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fthing_review%2Fl%2Fpublic%2Fp1437046.jpg'
});

exports.list = function (req, res) {
    // photo代表文件夹，去photo下面找到index.ejs
  res.render('photo/index.ejs', {
      title: 'photos',
      photos: photos,
  })
};