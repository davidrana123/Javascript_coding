class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Method to append nodes to the list
    appendNode(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Method to reverse the linked list
    reverseLinkedlist() {
      let first = this.head;
      let second = this.head.next; // Initialize second correctly
      this.tail = this.head; // Update the tail to the original head
  
      while (second) {
        let temp = second.next; // Save the next node
        second.next = first; // Reverse the link
        first = second; // Move first one step forward
        second = temp; // Move second one step forward
      }
  
      this.head.next = null; // Set the original head's next to null
      this.head = first; // Update the head to the new head (last node)
    }
  
    // Method to display the list
    display() {
      let current = this.head;
      let list = [];
  
      while (current) {
        list.push(current.value);
        current = current.next;
      }
  
      console.log('Linked List:', list.join(' -> '));
    }
  }
  
  // Create a new linked list
  let linkedList = new LinkedList();
  
  // Append nodes with values 0 to 9
  for (let i = 0; i < 10; i++) {
    linkedList.appendNode(i);
  }
  
  // Display the original list
  console.log("Original List:");
  linkedList.display();
  
  // Reverse the linked list
  linkedList.reverseLinkedlist();
  
  // Display the reversed list
  console.log("Reversed List:");
  linkedList.display();
  