class ListNode{
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

function swapPairs(head) {
    //Base case: If the list is empty or has one node, return the head
    if (head === null || head.next === null) {
        return head;
    }
//Recursive case:
//Nodes to be swapped: head (1st node) and head.next (2nd node)
let firstNode = head;
let secondNode = head.next;

//Recursively swap the rest of the list from the 3rd node onward
firstNode.next = swapPairs(secondNode.next);

//Swap the first and second nodes
secondNode.next = firstNode;

//The new head is the second node
return secondNode;
}

//Helper function to create linked lists from arrays
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

//Helper function to print the linked list
function linkedListToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.value);
        head = head.next;
    }
    return arr;
}

//Example:
const head = arrayToLinkedList([1, 2, 3, 4]);
const swappedList = swapPairs(head);
console.log(linkedListToArray(swappedList)); //Output: [2, 1, 4, 3]

