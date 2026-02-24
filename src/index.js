import './style.css';

/**
 * HashMap - A hash table implementation with collision handling via chaining.
 * 
 * @class HashMap
 * @description A data structure that stores key-value pairs and uses hashing for efficient
 * retrieval. Includes automatic resizing when load factor exceeds threshold.
 * 
 * @property {number} capacity - The current number of buckets in the hash map
 * @property {number} loadFactor - The threshold ratio (0.75) that triggers resizing
 * @property {Array} bucket - Array of buckets, each containing key-value pairs
 * @property {number} size - The current number of key-value pairs stored
 * 
 * @constructor
 * @param {number} [capacity=16] - Initial capacity of the hash map
 * 
 * @method hash(key) - Generates a hash index for a given key
 * @param {string} key - The key to hash
 * @returns {number} The hash index within the bucket array
 * 
 * @method set(key, value) - Adds or updates a key-value pair
 * @param {string} key - The key to set
 * @param {*} value - The value to associate with the key
 * 
 * @method get(key) - Retrieves the value associated with a key
 * @param {string} key - The key to retrieve
 * @returns {*} The value associated with the key, or undefined if not found
 * 
 * @method has(key) - Checks if a key exists in the hash map
 * @param {string} key - The key to check
 * @returns {boolean} True if the key exists, false otherwise
 * 
 * @method remove(key) - Removes a key-value pair from the hash map
 * @param {string} key - The key to remove
 * @returns {boolean} True if the key was found and removed, false otherwise
 * 
 * @method keys() - Returns an array of all keys
 * @returns {Array<string>} Array containing all keys in the hash map
 * 
 * @method values() - Returns an array of all values
 * @returns {Array<*>} Array containing all values in the hash map
 * 
 * @method entries() - Returns an array of all key-value pairs
 * @returns {Array<Array>} Array of [key, value] pairs
 * 
 * @method length() - Returns the number of key-value pairs
 * @returns {number} The current size of the hash map
 * 
 * @method resize() - Doubles the capacity and rehashes all entries
 */
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
