class Node {
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
        const newNode = new Node(value)
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

    shift(){
        if(!this.head) return undefined
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return temp;
    }

    pop(){
        if(!this.head) return undefined;
        let temp = this.head;
        let pre =  this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index ; i ++){
            temp = temp.next
        }
        return temp;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        let pre = this.get(index-1);
        let temp = pre.next;
        pre.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }
}

let myLinkedList = new LinkedList(5);
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log(myLinkedList);
console.log(myLinkedList.remove(2));



