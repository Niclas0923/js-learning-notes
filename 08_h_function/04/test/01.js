function module1(){
    var msg = "test"

    function big(){
        console.log(msg.toUpperCase())
    }

    function small(){
        console.log(msg.toLowerCase())
    }
    return {
        big:big,
        small:small
    }
}