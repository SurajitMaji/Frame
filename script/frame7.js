// image set up

let totalImage=15;
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
    'IMG_20250201_131923.jpg',
    'IMG_20241014_153123.jpg',
    'IMG-20240115-WA0515.jpg',
    'IMG20211101121213.jpg',    
    'IMG_20211021_144840.jpg',
    'IMG_20211221_134828.jpg',
    'IMG_20250201_131923.jpg'
];


for(let i=0;i<totalImage;i++){
    document.getElementById('image'+`${i+1}`).src=imageFolder+imageArray[i];
}

