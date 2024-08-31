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

    get(index){
        if(index<0 || index >= this.length) {
            return undefined  
        }else{
            let temp = this.head;
            for(let i = 0; i < index; i++){
                temp = temp.next;
            }
            return temp;  
            }
        
    }

    insert(index, value){
       if(index === 0) return this.unshift(value);
       if(index === this.length) return this.push(value);
       if(index < 0 || index > this.length) return undefined;
       
       const newNode = new Node(value);
       const temp = this.get(index-1)

       newNode.next = temp.next
       temp.next = newNode;

       this.length++;
       return this;
    }
}

let myLinkedList = new LinkedList(5);
console.log(myLinkedList.push(5));
console.log(myLinkedList.insert(1,10));


