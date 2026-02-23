import './style.css';

class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.table = new Array(this.capacity);
    }
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.capacity;
    }
    set(key, value) {
        const index = this.hash(key);
        this.table[index] = [key, value];
    }
    get(key) {
        const index = this.hash(key);
        if (this.table[index]) return this.table[index];
        return undefined;
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) console.log(this.table[i]);
        }
    }
}

let test = new HashMap();
// console.log(test.set('ayuash', 'ayuash'));
// console.log(test.set('Aayush', 'Aayush'));
console.log(test.set('Test', 'temp'));
console.log(test.get('Test'));
// test.display();
