'use strict'

function PairingHeapNode(weight, parent, left, right) {
  this.weight = weight
  this.parent = parent
  this.left   = left
  this.right  = right
}

//Sentinel node
var NIL = new PairingHeapNode(-Infinity, null, null, null)
NIL.left = NIL.right = NIL.parent = NIL

function link(a, b) {
  var al = a.left
  b.right = al
  al.parent = b
  b.parent = a
  a.left = b
  a.right = NIL
  return a
}

function merge(a, b) {
  if(a === NIL) {
    return b
  } else if(b === NIL) {
    return a
  } else if(a.weight < b.weight) {
    return link(a, b)
  } else {
    return link(b, a)
  }
}

function takeMin(root) {
  var p = root.left
  root.left = NIL
  root = p
  while(true) {
    var q = root.right
    if(q === NIL) {
      break
    }
    p = root
    var r = q.right
    var s = merge(p, q)
    root = s
    while(true) {
      p = r
      q = r.right
      if(q === NIL) {
        break
      }
      r = q.right
      s = s.right = merge(p, q)
    }
    s.right = NIL
    if(p !== NIL) {
      p.right = root
      root = p
    }
  }
  root.parent = NIL
  return root
}

function decreaseKey(root, p) {
  var q = p.parent
  if(q.weight < p.weight) {
    return root
  }
  var r = p.right
  r.parent = q
  if(q.left === p) {
    q.left = r
  } else {
    q.right = r
  }
  if(root.weight <= p.weight) {
    var l = root.left
    l.parent = p
    p.right = l
    root.left = p
    p.parent = root
    return root
  } else {
    var l = p.left
    root.right = l
    l.parent = root
    p.left = root
    root.parent = p
    p.right = p.parent = NIL
    return p
  }
}

function makeHeap(weight) {
  return new PairingHeapNode(
    weight,
    NIL,
    NIL,
    NIL)
}

exports.NIL = NIL
exports.create = makeHeap
exports.merge = merge
exports.pop = takeMin
exports.decreaseKey = decreaseKey
