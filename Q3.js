class ListNode{
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

function removeElements(head, value) {
    //Base case: If the list is empty, return null
    if(head === null) return null;

    //Recursively process the rest of the list
    head.next = removeElements(head.next, value);

    //If the current node's value matches the specified value, skip it
    return head.value === value ? head.next : head;
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
const head = arrayToLinkedList([1, 2, 6, 3, 4, 5, 6,]);
const modifiedList = removeElements(head, 6);
console.log(linkedListToArray(modifiedList)); //Output: [1, 2, 3, 4, 5]