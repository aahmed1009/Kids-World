const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function generateLetters() {
  const letterCount = document.getElementById("letterCount").value;
  const lettersContainer = document.getElementById("lettersContainer");
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modalContent");
  lettersContainer.innerHTML = "";

  if (letterCount < 1 || letterCount > 26) {
    alert("Please enter a number between 1 and 26");
    return;
  }

  const letters = getRandomLetters(letterCount);
  for (let i = 0; i < letters.length; i++) {
    const letterDiv = document.createElement("div");
    letterDiv.className = "letter-card";
    letterDiv.textContent = letters[i];
    letterDiv.onclick = function () {
      showLetterInfo(letters[i]);
    };
    lettersContainer.appendChild(letterDiv);
  }
}

function getRandomLetters(count) {
  const selectedLetters = [];
  while (selectedLetters.length < count) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const letter = alphabet[randomIndex];
    if (selectedLetters.indexOf(letter) === -1) {
      selectedLetters.push(letter);
    }
  }
  return selectedLetters;
}

function showLetterInfo(letter) {
  const modal = document.getElementById("myModal");
  const modalLetter = document.getElementById("modalLetter");
  const modalImage = document.getElementById("modalImage");
  const modalWord = document.getElementById("modalWord");
  const letterData = {
    A: { image: "images/a.png", word: "Apple" },
    B: { image: "images/b.png", word: "Ball" },
    C: { image: "images/c.png", word: "Cat" },
    D: { image: "images/d.png", word: "Dog" },
    E: { image: "images/e.png", word: "Eggs" },
    F: { image: "images/f.png", word: "Frog" },
    G: { image: "images/g.png", word: "Goat" },
    H: { image: "images/h.png", word: "Hen" },
    I: { image: "images/i.png", word: "Iglo" },
    J: { image: "images/j.png", word: "jar" },
    K: { image: "images/k.png", word: "Kite" },
    L: { image: "images/l.png", word: "Lion" },
    M: { image: "images/m.png", word: "Monkey" },
    N: { image: "images/n.png", word: "Nest" },
    O: { image: "images/o.png", word: "Owl-Orange-Octopus" },
    P: { image: "images/p.png", word: "Penguin-Pizza-Panda" },
    Q: { image: "images/q.png", word: "Queen" },
    R: { image: "images/r.png", word: "Rabbit" },
    S: { image: "images/s.png", word: "Star" },
    T: { image: "images/t.png", word: "Tomato-Taxi-Turtle" },
    U: { image: "images/u.png", word: "Umbrella-Under-Ukulele" },
    V: { image: "images/v.png", word: "Vase" },
    W: { image: "images/w.png", word: "Watch" },
    X: { image: "images/x.png", word: "Xylophone-X-ray" },
    Y: { image: "images/y.png", word: "Yarn" },
    Z: { image: "images/z.png", word: "Zucchini-Zipper-Zebra" },
  };

  const info = letterData[letter];
  if (info) {
    modalLetter.textContent = letter;
    modalImage.src = info.image;
    modalWord.textContent = `${letter} - ${info.word}`;
    modal.style.display = "flex";
  }
}
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
