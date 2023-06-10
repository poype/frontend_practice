import test1 from './js/test1'
import {add, multiple} from './js/test2'

// 引入CSS资源
import './css/index.css'
import './less/index.less'


test1()

console.log(add(3, 4))
console.log(multiple(1, 2, 3, 4, 5))

let str = 'test eslint'
console.log(str)