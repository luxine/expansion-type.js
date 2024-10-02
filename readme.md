# expansion-type.js介绍

#### 本包拓展了JavaScript的基础数据结构，已实现的数据结构如下

#### 1.`栈（Stack）`

#### 2.`队列（Queue）`

#### 3.`双端队列（Deque）`

#### 4.`链表（LinkedListNode）`

##### 后续将逐步拓展更多的数据结构

****

#### 简介

**本包的源码实现均采用`抽象接口（AbstractInterface）-->抽象类（AbstractClass）-->实现类（ImplementationClass）`架构，源码请查看`src`目录下文件**



#### 各种数据结构的方法（未完善，持续更新中）

****

###### 栈（Stack）结构的方法

`push(element)`

将一个元素压入栈顶。

- 参数

  - `element`：要添加到栈顶的元素。

- 示例

  ```
  stack.push(1);
  ```

`pop()`

移除并返回栈顶的元素。如果栈为空，返回 `undefined`。

- 返回

  - 栈顶元素或 `undefined`。

- 示例

  ```
  console.log(stack.pop()); // 输出: 3
  ```

`peek()`

返回栈顶的元素，但不移除它。如果栈为空，返回 `undefined`。

- 返回

  - 栈顶元素或 `undefined`。

- 示例

  ```
  console.log(stack.peek()); // 输出: 2
  ```

`isEmpty()`

检查栈是否为空。

- 返回

  - `true` 如果栈为空，否则 `false`。

- 示例

  ```
  console.log(stack.isEmpty()); // 输出: false
  ```

`size()`

返回栈的元素个数。

- 返回

  - 栈中元素的数量。

- 示例

  ```
  console.log(stack.size()); // 输出: 2
  ```

`clear()`

清空栈。

- 示例

  ```
  stack.clear();
  ```

****

