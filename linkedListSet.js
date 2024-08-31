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
        this.length = 1
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

    set(index, value){
        if(index < 0 || index >= this.length){
            return undefined;
        }else{
            let temp = this.head;
            for(let i = 0; i < index; i++){
                temp = temp.next;
            }
            temp.value = value;
            return this;
        }
    }
    // can also be written like below
    // get(index){
    //     if(index<0 || index >= this.length){
    //         return undefined;
    //     }else{
    //         let temp = this.head;
    //         for(let i=0; i < index; i++){
    //             temp = temp.next;
    //         }
    //         return temp;
    //     }
    // }
    // set(index, value) {
    //     let temp = this.get(index);
    //     if (temp) {
    //         temp.value = value;
    //         return true;
    //     }
    //     return false;
    // }
}

let myLinkedList = new LinkedList(5);
myLinkedList.push(4)
myLinkedList.push(6)
myLinkedList.push(2)
console.log(myLinkedList.set(0,10));

