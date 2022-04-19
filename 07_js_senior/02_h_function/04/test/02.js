(function(){
    var msg = "test"

    function big(){
        console.log(msg.toUpperCase())
    }

    function small(){
        console.log(msg.toLowerCase())
    }
    window.md2 = {
        big:big,
        small:small
    }
})()