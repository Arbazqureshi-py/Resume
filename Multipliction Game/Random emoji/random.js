const btnEl= document.getElementById("btn");
const emojinameEl= document.getElementById("emoji-name");

const emoji=[];

async function getEmoji() {
    
    let response= await fetch("https://emoji-api.com/emojis?access key=2c56e190ac4ae57aca6d45c30929414353d6621d");
    
    data = await response.json();
      
    for (let i=0; i< 1500; i++) {
        emoji.push({
            emojiName: date[i].character,
            emojiCode: data[i].unicodeName,
        });
    }


}
getEmoji();

btnEl.addEventListener("click", () => {
    const randomNum= Math.floor(Math.random()*emoji.length);
    btnEl.innerText= emoji[randomNum].emojiName;

});