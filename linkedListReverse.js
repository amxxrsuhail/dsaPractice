class Node{
    constructor(value){
        this.value =value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        let newNode = new Node(value);
        this.head = newNode;
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    reverse(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let pre = null;
        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = pre;
            pre = temp;
            temp = next;
        }
        return this;
    }
}
let myLinkedList = new LinkedList(5);
myLinkedList.push(8);
myLinkedList.push(4);
myLinkedList.push(1);
console.log(myLinkedList.reverse());
