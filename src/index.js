// import './style.css';

class HashMap {
    constructor(capacity = 16) {
        this.capacity = capacity;
        this.loadFactor = 0.75;
        this.bucket = new Array(this.capacity);
        this.size = 0;
    }
    hash(key) {
        let hashKey = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashKey = primeNumber * hashKey + key[i].charCodeAt();
        }
        return hashKey % this.capacity;
    }
    set(key, value) {
        const index = this.hash(key);
        if (this.length() >= this.bucket.length * this.loadFactor) {
            this.resize();
        }
        if (!this.bucket[index]) {
            this.bucket[index] = [];
        }
        for (let bucket of this.bucket[index]) {
            if (bucket[0] === key) {
                bucket[1] = value;
                return;
            }
        }
        this.bucket[index].push([key, value]);
        this.size++;
    }
    get(key) {
        const index = this.hash(key);
        if (!this.bucket[index]) return undefined;
        for (let bucket of this.bucket[index])
            if (bucket[0] === key) {
                return bucket[1];
            }
    }
    has(key) {
        const index = this.hash(key);
        if (!this.bucket[index]) return false;
        for (let bucket of this.bucket[index]) if (bucket[0] === key) return true;
        return false;
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.bucket[index];
        if (!bucket) return false;
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                if (bucket.length === 0) this.bucket[index] = undefined;
                return true;
            }
        }
        return false;
    }
    keys() {
        const keysArr = [];
        for (const bucket of this.bucket) {
            if (bucket) {
                for (const [key, value] of bucket) keysArr.push(key);
            }
        }
        return keysArr;
    }
    values() {
        let valuesArr = [];
        for (let bucket of this.bucket)
            if (bucket) {
                for (const [key, value] of bucket) valuesArr.push(value);
            }
        return valuesArr;
    }
    entries() {
        let entriesArr = [];
        for (let bucket of this.bucket)
            if (bucket) {
                for (const [key, value] of bucket) entriesArr.push([key, value]);
            }
        return entriesArr;
    }
    length() {
        return this.size;
    }
    resize() {
        const oldBucket = this.bucket;
        const newCapacity = this.capacity * 2;
        this.bucket = new Array(newCapacity);
        this.capacity = newCapacity;
        this.size = 0;
        for (let i = 0; i < oldBucket.length; i++) {
            const bucket = oldBucket[i];
            if (bucket) {
                for (const [key, value] of bucket) {
                    this.set(key, value);
                }
            }
        }
    }
}

module.exports = HashMap;
