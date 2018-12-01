/* Singly Linked List
   Author: Nilesh Khodake
*/

// Constructor
// Factory method
// Let
// Spread
// Error Handling
// Deep copy for this.head object in display method
// RxJs

// Node constructor to create new node
function Node(data) {
    this.data = data;
    this.next = null;
}

// Factory method to initialize and return the instance
let createNode = function () {
    return new Node(...arguments);
}

// Linked List collection to maintain length and head of the linked list
function LinkedList() {
    this._length = 0;
    this.head = null;
}

// Factory method to initialize new linked list
let createLinkedList = function () {
    return new LinkedList();
}

// Function to add a node to linked list
LinkedList.prototype.add = function(value) {
    let node = createNode(value);
    let currentNode = this.head;
 
    // Add node to an empty linked list 
    if (!currentNode) {
        this.head = node;
        this._length++;
         
        return node;
    }
 
    // Add node to a non-empty linked list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
     
    return node;
};

// Function to search a node in linked list
LinkedList.prototype.search = function(position) {
    let currentNode = this.head;
    let length = this._length;
    let count = 1;
    let message = "Invalid position entered"
 
    // Check if the position is valid
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message);
    }
 
    // Search node for valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};

// Function to remove a node from linked list
LinkedList.prototype.remove = function(position) {
    let currentNode = this.head;
    let length = this._length;
    let count = 1;
    let message = "Invalid position entered";
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;
 
    // Check if an invalid position
    if (position < 0 || position > length) {
        throw new Error(message);
    }
 
    // Check if the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // Any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        currentNode = currentNode.next;
        nodeToDelete = currentNode;
        count++;
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};

// Function to display linked list
LinkedList.prototype.display = function() {
    // Deep copying to display linked list and keep this.head intact
    let head = JSON.parse(JSON.stringify(this.head));
    while (head) {
        console.log(head.data);
        head = head.next;
    }
};