class ListNode{
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

function reverseList(head) {
    //Base case: If the list is empty or has one node, return the head
    if (head === null || head.next === null) {
        return head;
    }

    //Recursively reverse the rest of the list 
    let newHead = reverseList(head.next);

    head.next.next = head; //Make the next node point back to current head
    head.next = null; //Set current head's next pointer to null

    return newHead; //Return the new head of the reversed list
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
const head = arrayToLinkedList([1, 2, 3, 4, 5]);
const reversedList = reverseList(head);

console.log(linkedListToArray(reversedList)); //Output: [5, 4, 3, 2, 1]