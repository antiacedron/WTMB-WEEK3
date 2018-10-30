module.exports = class Person { 
    constructor(name,age) { 
        this.name=name
        this.age=age
        this.books= []
        this.cities=[] 
    }  
  
    read (book) {
        this.books.push (book)
        book.readers.push (this) 
        } 
    live(city) {
        this.cities.push (city) 
        city.readers.push(this) 
    }  
    static create (obj) {
        return new Person(obj.name,obj.age); 
    } 
  }  