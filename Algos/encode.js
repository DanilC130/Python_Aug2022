//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
function encode(str) {
    return encode(str)
}



console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));


//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
function decode(str){
            
}

// console.log(decode("a3b2c4"));
// console.log(decode("t2h10j4"));






function encoder (str){
    result=""
    var counter=1
    for (var i=0; i< str.length; i++)
        {
            if (str[i]==str[i-1]){
                counter += 1

            }
            else // they are not the same!
            {
                if (counter!=1){
                    result += counter+str[i]
                }
                console.log(" is it here? result is", result)
                counter=1
            }
            

            console.log(str[i], counter)
        }
    
    result += counter+str[i]

    return result
}

var minput="nnnwwwwxxxxxx"
var moutput=encoder(minput)

console.log(moutput)