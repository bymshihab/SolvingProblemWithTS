class MyArray {
    length: number;
    data: { [key: number]: any };
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index: number): any {
        return this.data[index];
    }

    push(item: any): string {
        this.data[this.length] = item;
        this.length++;
        return `Item added at index ${this.length - 1}`;
    }

    pop(): any {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index: number): any {
        if (index < 0 || index >= this.length) return undefined;
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    private shiftItems(index: number): void {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    private unshiftItems(index: number): void {
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.length++;
    }

    insert(index: number, item: any): void {
        if (index < 0 || index > this.length) return;
        this.unshiftItems(index);
        this.data[index] = item;
    }

    print(): void {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(this.data[i]);
        }
        console.log(result);
    }

    reverse(): void {
        let left = 0;
        let right = this.length - 1;
        while (left < right) {
            const temp = this.data[left];
            this.data[left] = this.data[right];
            this.data[right] = temp;
            left++;
            right--;
        }
    }

    clear(): void {
        this.data = {};
        this.length = 0;
    }
    isEmpty(): boolean {
        return this.length === 0;
    }
    indexOf(item: any): number {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) return i;
        }
        return -1;
    }
    includes(item: any): boolean {
        return this.indexOf(item) !== -1;
    }
    slice(start: number, end?: number): MyArray {
        const newArray = new MyArray();
        if (end === undefined || end > this.length) end = this.length;
        for (let i = start; i < end; i++) {
            newArray.push(this.data[i]);
        }
        return newArray;
    }
    concat(otherArray: MyArray): MyArray {
        const newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(this.data[i]);
        }
        for (let i = 0; i < otherArray.length; i++) {
            newArray.push(otherArray.get(i));
        }
        return newArray;
    }
    join(separator: string = ','): string {
        let result = '';
        for (let i = 0; i < this.length; i++) {
            result += this.data[i];
            if (i < this.length - 1) result += separator;
        }
        return result;
    }

    forEach(callback: (item: any, index: number) => void): void {
        for (let i = 0; i < this.length; i++) {
            callback(this.data[i], i);
        }
    }

    map(callback: (item: any, index: number) => any): MyArray {
        const newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArray.push(callback(this.data[i], i));
        }
        return newArray;
    }

    filter(callback: (item: any, index: number) => boolean): MyArray {
        const newArray = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if (callback(this.data[i], i)) {
                newArray.push(this.data[i]);
            }
        }
        return newArray;
    }
    reduce(callback: (accumulator: any, item: any, index: number) => any, initialValue: any): any {
        let accumulator = initialValue;
        for (let i = 0; i < this.length; i++) {
            accumulator = callback(accumulator, this.data[i], i);
        }
        return accumulator;
    }
    find(callback: (item: any, index: number) => boolean): any {
        for (let i = 0; i < this.length; i++) {
            if (callback(this.data[i], i)) {
                return this.data[i];
            }
        }
        return undefined;
    }

    findIndex(callback: (item: any, index: number) => boolean): number {
        for (let i = 0; i < this.length; i++) {
            if (callback(this.data[i], i)) {
                return i;
            }
        }
        return -1;
    }

    sort(compareFn?: (a: any, b: any) => number): void {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - i - 1; j++) {
                if (compareFn) {
                    if (compareFn(this.data[j], this.data[j + 1]) > 0) {
                        const temp = this.data[j];
                        this.data[j] = this.data[j + 1];
                        this.data[j + 1] = temp;
                    }
                }
                else {
                    if (this.data[j] > this.data[j + 1]) {
                        const temp = this.data[j];
                        this.data[j] = this.data[j + 1];
                        this.data[j + 1] = temp;
                    }
                }
            }
        }
    }

}

const newArray = new MyArray();
newArray.push('Hello');
newArray.push('World');
newArray.push('!');
console.log(newArray); // MyArray { length: 3, data: { 0: 'Hello', 1: 'World', 2: '!' } }
// console.log('------------------------------------');
// console.log(newArray.get(0)); // undefined
// newArray.data[0] = 'Hello';
// newArray.length++;
// console.log(newArray.get(0)); // Hello
// console.log(newArray.length); // 1

// console.log('------------------------------------');
// newArray.push('World');
// console.log(newArray.get(1)); // World
// console.log(newArray.length); // 2

// console.log('------------------------------------');
// console.log(newArray.pop()); // World
// console.log(newArray.length); // 1
// console.log(newArray.pop()); // Hello
// console.log(newArray.length); // 0
// console.log(newArray.pop()); // undefined

// console.log('------------------------------------');
// newArray.unshiftItems(3);
// newArray.print(); // []
// newArray.unshiftItems(0);
// newArray.print(); // [ <1 empty item> ]
// newArray.data[0] = 'First';
// newArray.length++;
// newArray.print(); // [ 'First' ]
// newArray.unshiftItems(0);
// newArray.print(); // [ <1 empty item>, 'First' ]
// newArray.data[0] = 'Zeroth';
// newArray.length++;
// newArray.print(); // [ 'Zeroth', 'First' ]
// newArray.unshiftItems(1);
// newArray.print(); // [ 'Zeroth', <1 empty item>, 'First' ]
// newArray.data[1] = 'Between';
// newArray.length++;
// newArray.print(); // [ 'Zeroth', 'Between', 'First' ]

// console.log('------------------------------------');
// newArray.insert(1, 'Inserted');
// newArray.print(); // [ 'Zeroth', 'Inserted', 'Between', 'First' ]
// newArray.insert(0, 'NewZeroth');
// newArray.print(); // [ 'NewZeroth', 'Zeroth', 'Inserted', 'Between', 'First' ]
// newArray.insert(5, 'NewLast');
// newArray.print(); // [ 'NewZeroth', 'Zeroth', 'Inserted', 'Between', 'First', 'NewLast' ]
// newArray.insert(10, 'OutOfBounds'); // No effect
// newArray.print(); // [ 'NewZeroth', 'Zeroth', 'Inserted', 'Between', 'First', 'NewLast' ]

// console.log('------------------------------------');
// console.log(newArray.delete(2)); // Inserted
// newArray.print(); // [ 'NewZeroth', 'Zeroth', 'Between', 'First', 'NewLast' ]
// console.log(newArray.delete(0)); // NewZeroth
// newArray.print(); // [ 'Zeroth', 'Between', 'First', 'NewLast' ]     