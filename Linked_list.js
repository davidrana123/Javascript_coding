class List {
    constructor(data){
        this.head = {
            value : data,
            next : null,
        }
        this.tail = this.head
    }

    appendNode(nodeData){
        let newNode = {
            value : nodeData,
            next : null
        };

        this.tail.next = newNode;
        this.tail = newNode
    }

    display(){
        let current = this.head;
        let listValue = []

        while(current){
            listValue.push(current.value)
            current = current.next
        }

        console.log('Linked List', listValue.join(' -> '))
    }
}

let list = new List(100)
list.appendNode(300)
list.appendNode(300)
list.appendNode(300)
list.appendNode(300)
list.appendNode(300)
list.appendNode(300)
list.appendNode(300)
console.log(list)
list.display()


///



//linked list 
//node -> head -> value, next
//value , next
//tail

class Node{
    constructor(data){
        this.head = {
            value : data,
            next : null,
        }
        this.tail = this.head;
    }

    appendNode(nodeData){
        let newNode = {
            value : nodeData,
            next : null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    display(){
        let current = this.head;
        let list = []
        while(current){
            list.push(current.value)
            current = current.next
        }

        console.log('List', list.join(' -> '))

    }
}

let linkedlist = new Node(12);
linkedlist.appendNode(100)
linkedlist.appendNode(200)
linkedlist.appendNode(300)
linkedlist.appendNode(400)
linkedlist.appendNode(500)
linkedlist.appendNode(600)
linkedlist.appendNode(700)
linkedlist.appendNode(800)
linkedlist.appendNode(900)
linkedlist.appendNode(1000)
linkedlist.display()



