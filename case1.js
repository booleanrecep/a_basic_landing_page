const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const testimony = document.querySelector(".testi");
const feedback = document.querySelector(".feed");
const slider_typography = document.querySelector(".slider-typography");
const cards = document.querySelectorAll(".card");

let ind = 0;
let toggle = 0;

const data = {
  testimonials: [
    {
      testi:
        "“Testimony-1-Your affordability calculator saved me some serious time to focus...”",
    },
    {
      testi:
        "“Testimony-2-Your affordability calculator saved me some serious time to focus ...”",
    },
    {
      testi:
        "Testimony-3-Your affordability calculator saved me some serious time to focus...”",
    },
  ],
  feedbacks: [
    {
      feed:
        "“Feedback-1-Your affordability calculator saved me some serious time to focus...”",
    },
    {
      feed:
        "“Feedback-2-Your affordability calculator saved me some serious time to focus...”",
    },
    {
      feed:
        "“Feedback-3-Your affordability calculator saved me some serious time to focus...”",
    },
  ],
};
const cardClick = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      feedback.style.background = "wheat";
      testimony.style.background = "none";
      slider_typography.innerText = data.feedbacks[i].feed;
    });
  }
};

feedback.addEventListener("click", () => {
  toggle = 1;
  ind = 0;
  cards[ind].style.background = "wheat";
  cards[ind].style.color = "black;";
  slider_typography.innerText = data.feedbacks[ind].feed;
  feedback.style.background = "wheat";
  testimony.style.background = "none";
});
testimony.addEventListener("click", () => {
  toggle = 0;
  ind = 0;
  cards[ind].style.background = "#222328";
  cards[ind].style.color = "#a8acb9;";
  slider_typography.innerText = data.testimonials[ind].testi;
  feedback.style.background = "none";
  testimony.style.background = "wheat";
});

left.addEventListener("click", () => {
  if (toggle === 0) {
    slider_typography.innerText = data.testimonials[ind].testi;

    if (ind === 0) {
      ind;
    } else {
      ind--;
    }
  } else {
    slider_typography.innerText = data.feedbacks[ind].feed;
    if (ind === 0) {
      ind;
    } else {
      ind--;
    }
  }
});

right.addEventListener("click", () => {
  if (toggle === 0) {
    if (ind < data.testimonials.length - 1) {
      ind++;

      slider_typography.innerText = data.testimonials[ind].testi;
    } else {
      ind = data.testimonials.length - 1;
    }
  } else {
    if (ind < data.feedbacks.length - 1) {
      ind++;
      slider_typography.innerText = data.feedbacks[ind].feed;
    } else {
      ind = data.testimonials.length - 1;
    }
  }
});

window.addEventListener("load", cardClick());
