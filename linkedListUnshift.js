class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class Linkedlist{
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

    unshift(value){
         let newNode = new Node(value);
         if(!this.head){
            this.head = newNode;
            this.tail = newNode;
         }else{
            newNode.next = this.head;
            this.head = newNode;
         }
         this.length++;
         return this;
    }
}

let myLinkedList = new Linkedlist(5);
myLinkedList.push(6);
myLinkedList.push(6);
console.log(myLinkedList);
console.log( myLinkedList.unshift(9));

