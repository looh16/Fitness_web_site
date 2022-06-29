const container = document.getElementById("activitiesId");
const parentDir = './images/';

const cards = [
    {
      img: "img/team/man.png",
      name: "Bimal Timilsina",
      position: "Web Designer",
      facebook: "https://facebook.com/",
      email: "mailto:someone@gmail.com"
    },
    {
      img: "img/team/man.png",
      name: "Bimal Timilsina",
      position: "Web Designer",
      facebook: "https://facebook.com/",
      email: "mailto:someone@gmail.com"
    },
    {
      img: "img/team/man.png",
      name: "Bimal Timilsina",
      position: "Web Designer",
       facebook: "https://facebook.com/",
      email: "mailto:someone@gmail.com"
    },
    {
      img: "img/team/man.png",
      name: "Bimal Timilsina",
      position: "Web Designer",
       facebook: "https://facebook.com/",
      email: "mailto:someone@gmail.com"
    },
    {
      img: "img/team/man.png",
      name: "Bimal Timilsina",
      position: "Web Designer",
       facebook: "https://facebook.com/",
      email: "mailto:someone@gmail.com"
    }
  ];

  
  let htmlCard = '';

cards.forEach((card) => {
  htmlCard += 
  `
  <div class="row">
  <div class="col-lg-4 col-md-6">
    <div class="activities-box shadow">
      <img src="images/fitness/happy.jpg" alt="activities images" title="image 1" class="img-fluid">
      <div class="activities-info">
        <div class="caption">
          <h4>project name goes here 1</h4>
          <p>category project</p>
        </div>
      </div>
    </div>
  </div>
</div>

`;
});

const cardxx = document.querySelector('.cardContent');
cardxx.innerHTML = htmlCard;


