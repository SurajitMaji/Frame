// fatching images
let bgImage='IMG_20250201_131923.jpg';
let totalImage=15;
let imageFolder='./assets/'; 
document.getElementById('inner_container').style.backgroundImage=`url(${imageFolder+bgImage})`;
let imageArray=[
    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg',
    'IMG_20241014_153123.jpg',
    'IMG-20240115-WA0515.jpg',
    'IMG20211101121213.jpg',    
    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg',
    'IMG_20241014_153123.jpg',
    'IMG-20240115-WA0515.jpg',
    'IMG20211101121213.jpg',    
    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg',
];

let n=totalImage;
let i=0;
let imageArea=document.getElementById('fraem11ImageArea');
let colNo=1;
while(i<n){
    let colClass='col'+`${colNo}`;
    imageArea.innerHTML+=`
                <div class="each-col ${colClass}">
                    <div class="each-image">
                        <img src="${imageFolder+imageArray[i]}" alt="${i}" srcset="">
                    </div>
                    <div class="each-image">
                        <img src="${imageFolder+imageArray[i]}" alt="${i}" srcset="">
                    </div>
                    <div class="each-image">
                        <img src="${imageFolder+imageArray[i]}" alt="${i}" srcset="">
                    </div>
                </div>
    `;
    i+=3;
    colNo++;
}

