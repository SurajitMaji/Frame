var week=document.getElementById('days');
    week.innerHTML=`
    <span>S</span>
    <span>M</span>
    <span>T</span>
    <span>W</span>
    <span>T</span>
    <span>F</span>
    <span>S</span>
    `;

    // dates calculation
     var empty_days=2;
        var total_days=31;
        let output=``;
        var special_date=15;
        for(let i=0;i<empty_days;i++){
            output+=`<span></span>`;
        }
        for(let i=1;i<=total_days;i++){
            if(i==special_date){
                output+=`<span class="date-value">
                  ${i}
                  </span>`;
            }
            else{
                output+=`<span class="
                    flex items-center justify-center 
                ">`+i+`</span>`;
            }
        }
        document.getElementById("month").innerHTML=output;
