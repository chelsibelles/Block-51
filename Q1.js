class ListNode{
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}
function mergeTwoLists(linked_list1, linked_list2) {
    //Base cases
    if (linked_list1 === null) return linked_list2;
    if (linked_list2 === null) return linked_list1;

    //Recursive case
    if (linked_list1.value < linked_list2.value) {
        linked_list1.next = mergeTwoLists(linked_list1.next, linked_list2);
        return linked_list1;
    } else {
        linked_list2.next = mergeTwoLists(linked_list1, linked_list2.next);
        return linked_list2;
    }
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
const linked_list1 = arrayToLinkedList([1, 2, 4]);
const linked_list2 = arrayToLinkedList([1, 3, 4]);

const mergedList = mergeTwoLists(linked_list1, linked_list2);
console.log(linkedListToArray(mergedList)); //Output: [1, 1, 2, 3, 4, 4]