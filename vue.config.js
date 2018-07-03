module.exports = {
  devServer: {
    compress: true,
    port: 9000,
    watchOptions: {
      aggregateTimeout: 300, // 一旦第一个文件改变，在重建之前添加一个延迟
      poll: 1000, // 每隔（你设定的）多少时间查一下有没有文件改动过
      ignored: /node_modules/ // 排除一个文件夹
    }
  }
};
