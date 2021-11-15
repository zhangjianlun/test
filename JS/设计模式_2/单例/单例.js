/* 单例设计模式 */
// 特点：在整个程序运行过程中一个类型只有一个实例对象
// 通过指定的构造函数，无论创建多少次对象，都只有一个。全局用户信息对象。登录\注册
/* js实现单例的方式 */
// 全局变量，静态属性，优化-即时函数，闭包-惰性函数
/* 方式1：全局变量 */
/* 步骤 */
// 1.提供一个全局的变量，
// 2.提供一个构造函数Person
// 3.在构造函数内部先判断全局变量是否有值，如果有那么就直接返回
// 4.如果没有，那么久把this赋值给全局变量
// 5.通过this设置属性和方法
/* 缺点 */
// 1.使用一个全局变量来保存单例对象，这个全局变量在整个作用域中都可以访问或者是修改，可能会轻易的被覆盖或者是修改
// 2.修改之后，创建出来的实例对象就不再是之前的那个单例对象了
/* 方式2：静态属性 */
/* 步骤 */
// 同上，知识将全局变量变为静态属性
/* 缺点 */
// 构造函数的静态属性起始也可能被修改，因此这种方法不安全
/* 方式3：闭包-惰性函数 */
/* 步骤 */
// 1.提供构造函数
// 2.在构造函数内部提供一个私有变量(instance)
// 3.使用惰性函数定义来更新构造函数(直接把私有变量的值返回)
// 4.使用this设置属性和方法
// 5.把this赋值给私有变量

/* 场景 */
// 只需要一个对象的时候。避免重复创建，删除对象
