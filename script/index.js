let frameContainer=document.getElementById('frameContainer');

let frameFolder='./frameImages/';
let frameArray=[
    [
        '98db103f-05b1-4c7f-a01e-ac030de59771.jpg',
        'frame1.html'
    ],
    [
        '20250925-165559.png',
        'frame2.html'
    ],
    [
        'il_570xN.3941414368_2u6t.jpg',
        'frame3.html'
    ],
    [
        '898d5e5d-b0c7-4a34-b421-b15649d8aa22.jpg',
        'frame4.html'
    ],
    [
        'cd075844-ed3e-464b-8a06-8065ca817f90.jpg',
        'frame5.html'
    ],
    [
        'c3f47a9f-2e02-4122-b637-87865397ff41.jpg',
        'frame6.html'
    ],
    [
        '20250925-164904.png',
        'frame7.html'
    ],
    [
        '20250925-150035.png',
        'frame8.html'
    ],
    [
        '20250925-151243.png',
        'frame9.html'
    ],
    [
        '20250925-164515.png',
        'frame10.html'
    ],
    [
        '20250930-173919.png',
        'frame11.html'
    ]
    ,
    [
        '20250930-215632.png',
        'frame12.html'
    ],
    [
        '20250930-174244.png',
        'frame13.html'
    ]
];
for(let i=0;i<frameArray.length;i++){

    let ancharValue=frameArray[i][1];
    let imgSRC=frameFolder+frameArray[i][0];
    
    let figureValue=`Frame `+`${i+1}`;
    frameContainer.innerHTML+=`
    <figure class="card">
        <a href="${ancharValue}">
            <img src="${imgSRC}" alt="">
            <figcaption>
                ${figureValue}                       
            </figcaption>
            </a>
    </figure>
    `;
}