pairing-heap
============
A non-functional pairing heap data structure for implementing a priority queue.  Based on the implementation in:

G. Navarro, R. Paredes. (2010) "[On sorting, heaps, and minimum spanning trees](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.218.3241)" Algorithmica

# API

```javascript
var pq = require('pairing-heap')
```

#### `pq.NIL`
An empty pairing heap

#### `var node = pq.create(weight)`
Creates a new heap node with some initial weight

* `weight` is the weight of the node to create

**Returns** a new node

#### `var merged = pq.merge(heap1, heap2)`
Merges two heaps together

* `heap1,heap2` are both pairing heaps

**Returns** a merged heap

#### `root = pq.pop(root)`
Removes the root item from a heap

* `root` is the root of the heap

**Returns** a heap with the min item poppped off.  `NIL` if heap is empty

#### `root = pq.decreaseKey(root, node)`
To decrease the weight of an item, update it and then call this function.

* `root` is the root of the heap
* `node` is an item whose key is being decreased

**Returns** the root of the new heap

# License
(c) 2015 Mikola Lysenko. MIT License
