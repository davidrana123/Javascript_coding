class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        this.tail = null;
    }


    append(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    countNode(){
        let count = 0;
        let current = this.head

        while(current){
            count++;
            current = current.next;
        }

        console.log(count)
    }


    display(){
        let current = this.head;
        let list = []

        while(current){
            list.push(current.value)
            current = current.next
        }


        console.log(list.join(' -> '))
    }
}


let linkedlist = new Linkedlist()
// linkedlist.append(10)
// linkedlist.append(20)
// linkedlist.append(30)
// linkedlist.append(40)
// linkedlist.display()

let n = 100;
for(let i = 1 ; i <= n ; i++){
    linkedlist.append(i)
}
linkedlist.display();
linkedlist.countNode()