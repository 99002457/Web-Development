
function checkVowel(string)
{
count=0;
constd=0;
for (c of [...string]){ 
    if(/[aeiou]/.test(c))
    {
        count+=1;
    } 
    else
    {
        constd+=1
    }
}
console.log()
console.log("consonant ",constd);
return count;
}

console.log("Vowel: ",checkVowel("this is the one with vowels")); //8

console.log("Vowel: ",checkVowel("aeiou")) //5
console.log("Vowel: ",checkVowel(`



aeiou rest package in the system`)) //12
