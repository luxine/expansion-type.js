/**
 * 定义一个队列类
 */
export class Queue<T> {
    /**
     * 使用 WeakMap 存储队列元素，键为队列实例，值为数组
     */
    protected wkm: WeakMap<Queue<T>, Array<T>>;

    /**
     * 构造函数初始化 WeakMap，并设置当前实例的键值为一个空数组
     */
    constructor(){
        this.wkm = new WeakMap();
        this.wkm.set(this, []) ;
    }
    
    /**
     * 入队操作：向队列添加一个元素
     * @param element - 要添加到队列的元素
     */
    enqueue(element: T): void{
        let _wkm = this.wkm.get(this);
        _wkm?.push(element);
    }
    
    /**
     * 出队操作：移除并返回队列的第一个元素，如果队列为空则返回 undefined
     * @returns 队列的第一个元素或 undefined
     */
    dequeue(): T | undefined {
        if(this.isEmpty()){
            return undefined
        }
        
        let _wkm = this.wkm.get(this) as Array<T>;
        let result = _wkm[0];
        _wkm.shift();
        return result;
    }
    
    /**
     * 返回队列的元素个数
     * @returns 队列的元素个数
     */
    size(): number{
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.length;
    }
    
    /**
     * 检查队列是否为空，为空则返回 true，否则返回 false
     * @returns 队列是否为空
     */
    isEmpty(): boolean{
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm.length === 0;
    }
    
    /**
     * 返回队列的第一个元素，但不移除它，如果队列为空则返回 undefined
     * @returns 队列的第一个元素或 undefined
     */
    peek(): T | undefined {
        if(this.isEmpty()){
            return undefined;
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        return _wkm[0];
    }

    /**
     * 清空队列
     */
    clear(): void{
        this.wkm.set(this,[]);
    }

    /**
     * 打印队列的所有元素
     * @returns 队列的所有元素
     */
    print(): T[]{
        if(this.isEmpty()){
            return [];
        }
        let _wkm = this.wkm.get(this) as Array<T>;
        
        return _wkm;
    }
}
