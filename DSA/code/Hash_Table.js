class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value){
        const index = this.hash(key)
        // this.table[index] = value;//after removing collision
        //collision part start
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value])
            }
        }
         //collision part end
    }
    get(key){
        const index = this.hash(key);
        // return this.table[index] //after removing collision
        //collision part start
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
        //collision part end
    }
    remove(key){
        const index = this.hash(key);
        // this.table[index] = undefined //after removing collision
        //collision part start
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
        //collision part end
    }
    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}
const table = new HashTable(50);
table.set("name", "Abhijeet");
table.set("age", 25);
table.display()
/*
1 25
17 Abhijeet
*/
console.log(table.get("name"));//Abhijeet

table.set("mane", "kumar")
table.display()//17 kumar || lost "name" key because of similar keyCode -> hash table collision

// after collision corrected
/*
1 [ [ 'age', 25 ] ]
17 [ [ 'name', 'Abhijeet' ], [ 'mane', 'kumar' ] ]
*/

table.set("name", "Rahul");
table.display()
/*
1 [ [ 'age', 25 ] ]
17 [ [ 'name', 'Rahul' ], [ 'mane', 'kumar' ] ]
*/

table.remove("name")
table.display()
/*
1 [ [ 'age', 25 ] ]
17 [ [ 'mane', 'kumar' ] ]
*/