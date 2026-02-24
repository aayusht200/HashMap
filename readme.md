# HashMap

A hash table implementation with collision handling via chaining.

## Features

- **capacity**: Current number of buckets in the hash map
- **loadFactor**: Threshold ratio (0.75) that triggers resizing
- **bucket**: Array of buckets containing key-value pairs
- **size**: Current number of stored key-value pairs

## Getting Started

### Constructor

```javascript
const map = new HashMap([capacity=16]);
```

### Methods

| Method | Description |
|--------|-------------|
| `hash(key)` | Generates a hash index for a given key |
| `set(key, value)` | Adds or updates a key-value pair |
| `get(key)` | Retrieves the value for a key |
| `has(key)` | Checks if a key exists |
| `remove(key)` | Removes a key-value pair |
| `keys()` | Returns all keys |
| `values()` | Returns all values |
| `entries()` | Returns all key-value pairs |
| `length()` | Returns the number of pairs |
| `resize()` | Doubles capacity and rehashes entries |

