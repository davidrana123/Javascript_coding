class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    appendNode(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    //logic-> 

    insertNode(pos, value){
        let newNode = new Node(value)

        if(pos === 0){
            newNode.next = this.head;
            this.head = newNode
        }

        if(!this.tail){
            this.tail = newNode;
        }

        let counter = 0;
        let currentNode = this.head

        while(currentNode && counter < pas -1){
            counter++;
            currentNode = currentNode.next;
        }

        if(!currentNode){
            console.log('Position out of bounds.')
        }


        
       newNode.next = currentNode.next;
       currentNode.next = newNode


       if (newNode.next === null) {
        this.tail = newNode;
      }

    }

    display(){
        let current = this.head;
        let list = [];
        while(current){
            list.push(current.value)
            current = current.next
        }

        console.log(list.join(' -> '))
    }
}

let linkedlist = new LinkedList()
linkedlist.appendNode(10)
linkedlist.appendNode(11)
linkedlist.appendNode(12)
linkedlist.display()
linkedlist.insertNode(4,10000)
linkedlist.display()