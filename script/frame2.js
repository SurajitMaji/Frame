// Birthday details fetched from JS
    const birthdayData = {
        date: "17",
        month: "June",
        name: "Princess Vrihana",
        message: `On your special day, today, I wish to tell you that you are the princess of our world.
        May you always keep shining with success in your life. I wish you luck, love, and strength to win it all.
        Wishing you a very Happy Birthday. Enjoy your day.`,
        images: [
            './assets/IMG_20211021_144840.jpg',
    './assets/IMG_20211221_134828.jpg',
    './assets/IMG_20250201_131923.jpg',
    './assets/IMG_20241014_153123.jpg',
    './assets/IMG-20240115-WA0515.jpg',
    './assets/IMG20211101121213.jpg',    
    './assets/IMG_20211021_144840.jpg',
    './assets/IMG_20211221_134828.jpg',    
    './assets/IMG_20211221_134828.jpg'
        ]
    };

    // Injecting data dynamically
    document.getElementById("special_date").innerHTML = birthdayData.date;
    document.getElementById("monthText").innerHTML = birthdayData.month;
    document.getElementById("birthdayMessage").innerHTML = birthdayData.message;
    document.getElementById("wish_text").innerHTML = `Happy Birthday My ${birthdayData.name}`;

      // Load images dynamically
    for (let i = 0; i < birthdayData.images.length; i++) {
      const imgTag = document.getElementById(`image${i + 1}`);
      if (imgTag) {
        imgTag.src = birthdayData.images[i];
        imgTag.alt = `Birthday Image ${i + 1}`;
      }
    }





    // after selecting the imaags through from 

     document.getElementById('dateInput').addEventListener('input', function() {
      document.getElementById('special_date').innerHTML = this.value;
    });

    document.getElementById('monthInput').addEventListener('input', function() {
      document.getElementById('monthText').textContent = this.value;
    });

    document.getElementById('messageInput').addEventListener('input', function() {
      document.getElementById('birthdayMessage').textContent = this.value;
    });

    document.getElementById('wishInput').addEventListener('input', function() {
      document.getElementById('wish_text').textContent = this.value;
    });




    // Image preview setup
    for (let i = 1; i <= 10; i++) {
      document.getElementById(`img${i}`).addEventListener('change', function(event) {
        const file = event.target.files[0];
        const imgPreview = document.getElementById(`image${i}`);
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            imgPreview.src = e.target.result;
          }
          reader.readAsDataURL(file);
        }
      });
    }