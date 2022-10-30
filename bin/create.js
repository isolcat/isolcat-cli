// 当前函数中可能存在很多异步操作，因此我们将其包装为 async
module.exports = async function(projectName, options) {
    console.log(projectName, options);
};