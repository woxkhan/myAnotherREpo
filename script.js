const obj = {
    log : ["example" , "Test"],
    get latest(){
        if(this.log.length===0)
        return this.log[this.log.length - 1]
    },
}

console.log(obj.latest)


class Myclass{
    constructor(){
        this._myProperty =45
    }
    get myProperty(){
        return this._myProperty
    }
}
const myObjext =new Myclass()
console.log(myObjext.myProperty)