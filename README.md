### json-server (mock)

# 增
POST
# 删
DELETE
# 改
PUT
# 查
GET
# 改某一个属性
PATCH



 
## TS

// 
function foo(a: string, b: number): number{ }

function foo({a, b}: {a: string, b: number}) : number{}

const foo = (a: string) : number  => {}

const foo : (a:string) => number = (a) => {}

# class
class Foo{
  name: string = 'jo' # 类的属性
  constructor (name: string) {
    this.name = name
  }
  getName(a: string) : string { # 类方法
    return a
  }
}

public
private
protected

class Foo{
  <!-- name: string = 'jo' # 类的属性 -->
  constructor (public name: string) {
    <!-- constructor 的形参加上public 后 等价于 先声明类属性 + 赋值 -->
    <!-- this.name = name -->
  }
  getName(a: string) : string { # 类方法
    return a
  }
}


# 类 继承
class A{
  constructor(public name: string){

  }
}

class B extends A{
  constructor(public age: number){
    super()
  }
}

# set get

class Foo{
  constructor(private _name: string){}

  get name () {
    return this._name
  }

  set name (val: string) {
    this._name = val
  }

}

let foo = new Foo('tom')
foo.name // 'tom' => get name
foo.name = 100 // => set name(val = 100)

static class的静态属性 挂载类上
class Foo{
  static name: string = 'tom'
}


# 泛型
function <T>foo(param: T){}

function <T>foo(param: Array<T>){}

function <T>foo(param: T[]){}



function foo <T>(param: T) : T{}

const foo : <T>(param: T) => T = <T>(param) =>  


