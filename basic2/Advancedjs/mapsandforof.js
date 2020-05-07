var one = {
    name: 'john',
    type: 'integer'
};
let user = new Map()
console.log(typeof user)
user.set('one',1)
user.ser('two',2)
user.set('three',3)
for(const key of user.keys())
{
    console.log(key)
}
for(const [key,value] of user.entries){
    console.log(key +'=' + value)
}