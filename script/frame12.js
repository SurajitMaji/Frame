// fatching images
let totalImage=9;
let imageFolder='./assets/'; 
let imageArray=[
    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg',
    'IMG_20241014_153123.jpg',
    'IMG-20240115-WA0515.jpg',
    'IMG20211101121213.jpg',    
    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg'
    ,

    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg',
    'IMG_20241014_153123.jpg',
    'IMG-20240115-WA0515.jpg',
    'IMG20211101121213.jpg',    
    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg',

    
    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg',
    'IMG_20241014_153123.jpg',
    'IMG-20240115-WA0515.jpg',
    'IMG20211101121213.jpg',    
    'IMG_20211021_144840.jpg'

];

let n=totalImage;
let i=0;
let imageArea=document.getElementById('grid_images');
for(let i=0;i<imageArray.length;i++){
    imageArea.innerHTML+=`
        <img src='${imageFolder+imageArray[i]}' class='each-blk-image'>
    `;
}

let colorImage='677888ad-8f1c-438d-a0fa-ca58cfe9b81.jpg';
document.getElementById('color_image_area').innerHTML=`<img src=${imageFolder+colorImage} class='color-image'>`;
