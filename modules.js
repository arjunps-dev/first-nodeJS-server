const hello = {

    name: 'Jain',
    place : 'Calicut',
    greet : function (){
        console.log('I am ${this.name} from &{this.place}');
    },
    message: function(){
        console.log('Sample Message');
    }
    

}

module.exports = hello;

