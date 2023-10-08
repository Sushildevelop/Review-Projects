const reviews = [{
        id: 1,
        name: "Google",
        job: "	 Larry Page & Sergey Brin",
        img: "/image/download-google1.png",
        text: "Google  is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence,and consumer electronics. "

    },
    {
        id: 2,
        name: "IBM",
        job: "	Herman Hollerith , Charles Ranlett Flint , Thomas J. Watson, Sr.",
        img: "/image/download-ibm.jpeg",
        text: "The International Business Machines Corporation (IBM), nicknamed Big Blue, is an American multinational technology corporation headquartered in Armonk, New York and present in over 175 countries. It specializes in computer hardware, middleware, and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. "


    },
    {
        id: 3,
        name: "YouTube",
        job: "Steve Chen , Chad Hurley , Jawed Karim",
        img: "image/download-youtube.png",
        text: "YouTube is an American global online video sharing and social media platform headquartered in San Bruno, California, United States. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website, after Google Search. YouTube has more than 2.5 billion monthly users,who collectively watch more than one billion hours of videos each day. "

    },
    {
        id: 4,
        name: "PW Skills",
        job: "	Alakh Pandey , Prateek Maheshwari",
        img: "image/download-pwskills.png",
        text: "Physics Wallah Private Limited (also known as just Physics Wallah or PW) is an Indian educational technology company headquartered in Noida, Uttar Pradesh.It was founded by Alakh Pandey and Prateek Maheshwari in 2020. It became a unicorn in June 2022 after raising $100 million at a valuation of $1.1 billion."
    }
]

// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// Css by using javascript

info.style.Height = "20px"
info.style.width = "500px";


// set Starting item
let currentItem = 0;

// Load inital item
window.addEventListener("DOMContentLoaded", function() {
        showPerson(currentItem);
    })
    // show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// Show Next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem)
})

// show prev person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});


randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);

})