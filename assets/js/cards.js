const container = document.getElementById('cardContent');
const parentDir = '../images/fitness/';
let htmlCard = '';
let pastHtmlCard = '';

const cards = [
  {
    img: `${parentDir}one.jpg`,
    title: 'Work hard in silence. Let success be your noise -Frank Ocean',
  },
  {
    img: `${parentDir}two.jpg`,
    title: 'I try and groom myself, be it through fitness or dance. -Yami Gautam',
  },
  {
    img: `${parentDir}three.jpg`,
    title: 'Fitness has nothing to do with age. -Virender Sehwag',
  },
  {
    img: `${parentDir}four.jpg`,
    title: 'In fitness, there are no short cuts. It involves immense discipline and hard work. -Mahesh Babu',
  },
  {
    img: `${parentDir}happy.jpg`,
    title: 'You can always improve your fitness if you keep training. -Pastor Maldonad',
  },
  {
    img: `${parentDir}seven.jpg`,
    title: 'I understand only three things – films, fitness, and food. -Rakul Preet Singh',
  },
];

const pastCards = [
  {
    img: `${parentDir}one.jpg`,
    title: 'Work hard in silence. Let success be your noise -Frank Ocean',
  },
  {
    img: `${parentDir}two.jpg`,
    title: 'I try and groom myself, be it through fitness or dance. -Yami Gautam',
  },
];

cards.forEach((card) => {
  htmlCard
  += `
  <div class="col-lg-4 col-md-6">
    <div class="activities-box shadow">
      <img src="${card.img}" alt="activities images" title="image 1" class="img-fluid">
      <div class="activities-info">
        <div class="caption">
          <h5> ${card.title}</h5>
        </div>
      </div>
    </div>
  </div>
`;
});

container.innerHTML = htmlCard;

