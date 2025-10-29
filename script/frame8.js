// images fetching
let imagesContainer=document.getElementById("images_area");
let backGround=document.getElementById("frame_background");

let imageFolder='./assets/';
let bgImage='IMG_20250201_131923.jpg';
let bgURL=imageFolder+bgImage;
backGround.style.backgroundImage=`url(${bgURL})`;
let imagesArray=[
    'IMG_20250201_131923.jpg',
    'IMG_20250201_131923.jpg',
    'IMG_20250201_131923.jpg'
];
for(let i=0;i<imagesArray.length;i++){
    let imgURL=imageFolder+imagesArray[i];
    let imgClassName=`eachImage`+`${i}`;
    imagesContainer.innerHTML+=`
    <div class="each-image-area ${imgClassName}"  >
        <div class="image-area">
            <div class="frame-pin"></div>
            <img src="${imgURL}" alt="Photo${i}" srcset="">
        </div>
    </div>
    `;
}

// text fetching
let textDetails={
    wish:'Happy Birthday',
    name:'RAM ❤️',
    mainText:'MAY GOOD BLESD YOU EVER ASPECT OF YOUR LIFE 🤗',
    subText:"On your special day this year, I'm wishing for only love, joy, and happiness to bless your life! You're a person with a big heart and deserve all of life a wonders to flood your days! Happy Birthday to You ❤️"

};

let wishContaint=document.getElementById("wish_area");
wishContaint.innerHTML=`
    <div class="wish">${textDetails.wish}</div>
    <div class="name">${textDetails.name}</div>
    <div class="main-wish">${textDetails.mainText}</div>
    <div class="sub-wish">${textDetails.subText}</div>
`;