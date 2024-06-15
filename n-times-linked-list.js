class LinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null,
        }
        this.tail = this.head;
        this.size = 1
    }

    append(newData){

        for(let i = 1 ; i < newData ; i++){
            let newNode = {
                value : i,
                next : null,
            }
            this.tail.next = newNode;
            this.tail = newNode;
            this.size+=1;
        }
    }

    display(){
        let curret = this.head;
        let list = []
        while(curret){
            list.push(curret.value)
            curret = curret.next;
        }

        console.log('Linked List:', list.join(' -> '));
        console.log('Size', this.size)
    }
}


let linkedlist = new LinkedList()
linkedlist.append(10)
linkedlist.display()

