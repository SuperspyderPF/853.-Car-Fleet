 class Paddy{
    constructor(){
        this.items = []
        this.count = 0
    }

    push(element){
        this.items[this.count] = element
        this.count += 1
        console.log(`${element} added to ${this.count}`)
        return this.count - 1 
    }

 }

 const paddy = new Paddy()

 paddy.push(100)
 paddy.push(200)
 paddy.push(300)

