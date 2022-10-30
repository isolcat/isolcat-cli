class Creator {
    // 项目名称及项目路径
    constructor(name, target) {
            this.name = name;
            this.target = target;
        }
        // 创建项目部分
    create() {
        console.log(this.name, this.target);
    }
}

module.exports = Creator;