const datainfo = [
    {
        pfp: "Tommyportrait2.webp",
        name: "CILLIAN MURPHY",
        job: "ACTOR",
        description: "Cillian Murphy, born on May 25, 1976, is an acclaimed Irish actor known for his intense performances and striking looks. He began his career in theater, making his professional debut in Enda Walshs 1996 play Disco Pigs. Murphy gained international prominence after starring in the hit zombie film 28 Days Later in 2002. He is perhaps best known for his collaborations with filmmaker Christopher Nolan, including his role as Scarecrow in The Dark Knight Trilogy, and for his portrayal of Tommy Shelby in the BBC period drama series Peaky Blinders."
    },
    
    {
        pfp: "theweeknd.jpg",
        name: "THE WEEKND",
        job: "ARTIST",
        description: "The Weeknd, born Abel Makkonen Tesfaye on February 16, 1990, is a Canadian singer-songwriter and record producer. He is noted for his unique music production, artistic reinventions, and his signature use of the falsetto register. His explicit songs about sex and drugs, many of which are autobiographical, have gained him international recognition. His hit songs include “Blinding Lights”, “Starboy”, and “The Hills”."
    },

    {
        pfp: "ksi.jpg",
        name: "KSI",
        job: "INFLUENCER",
        description: "KSI, whose real name is Olajide Olayinka Williams “JJ” Olatunji, is a British internet personality, professional boxer, and musician. He started his career on YouTube in 2009, posting gaming commentary videos, and has since diversified his content to include vlogs and comedy-style videos. As a musician, he has released several hit singles and albums. In addition to his online and music careers, KSI has also ventured into boxing."
    },

    {
        pfp: "drizzy.jpg",
        name: "DRAKE",
        job: "ARTIST",
        description: "Aubrey Drake Graham, known mononymously as Drake, is a Canadian rapper and singer born on October 24, 1986. He first gained recognition as an actor on the TV series “Degrassi: The Next Generation” before pursuing a career in music. Drake has been credited with popularizing R&B sensibilities in hip hop and is an influential figure in contemporary popular music."
    }
]

// here we set the first profile that appears when we load the website
let index = -1
forward()

function forward() {
    index += 1
    if (index > datainfo.length - 1) {
        index = 0
    }
    let profile = datainfo[index];
    document.getElementsByClassName("pfp")[0].src = profile.pfp;
    let texts = document.getElementsByClassName("text");
    texts[0].innerHTML = profile.name;
    texts[1].innerHTML = profile.job;
    texts[2].innerHTML = profile.description;
}

function back() {
    index -= 1
    if (index < 0) {
        index = datainfo.length - 1
    }
    let profile = datainfo[index];
    document.getElementsByClassName("pfp")[0].src = profile.pfp;
    let texts = document.getElementsByClassName("text");
    texts[0].innerHTML = profile.name;
    texts[1].innerHTML = profile.job;
    texts[2].innerHTML = profile.description;
}

function suprise() {
    let oldindex = index
    while (index === oldindex) {
        index = Math.floor(Math.random() * datainfo.length);
    }
    let profile = datainfo[index];
    document.getElementsByClassName("pfp")[0].src = profile.pfp;
    let texts = document.getElementsByClassName("text");
    texts[0].innerHTML = profile.name;
    texts[1].innerHTML = profile.job;
    texts[2].innerHTML = profile.description;
}