class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        let newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value){
        let newNode = new Node(value)
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

    get(index){
        if(index<0 || index >= this.length){
            return undefined;
        }else{
            let temp = this.head;
            for(let i=0; i < index; i++){
                temp = temp.next;
            }
            return temp;
        }
    }
}

let myLinkedList = new LinkedList(5);
myLinkedList.push(8);
myLinkedList.push(6);
myLinkedList.push(9);
console.log(myLinkedList.get(3));
console.log(myLinkedList.get(2));
console.log(myLinkedList.get(8));
console.log(myLinkedList.get(-8));
console.log(myLinkedList.get(4));
