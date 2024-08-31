class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        let newNode = new Node(value);
        this.head  = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head){
            return undefined;
        }else{
            let temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--;
            if(this.length == 0){
                this.tail = null;
            }
            return temp;
    }}
}

let myLinkedList = new LinkedList(9);
myLinkedList.push(5)
myLinkedList.push(7)
myLinkedList.push(8)
console.log(myLinkedList);
console.log(myLinkedList.shift());
console.log(myLinkedList);

