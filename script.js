// Add image file paths
const images = [
  "images/King diamonds.jpg",
  "images/Ace diamonds.jpg",
  "images/Queen diamonds.jpg",
  "images/Jack diamonds.jpg",
  "images/Ten diamonds.jpg",
  "images/Nine diamonds.jpg",
  "images/Eight diamonds.jpg",
  "images/Seven diamonds.jpg",
  "images/Six diamonds.jpg",
  "images/Five diamonds.jpg",
  "images/Four diamonds.jpg",
  "images/Three diamonds.jpg",
  "images/Two diamonds.jpg",
  "images/Ace spades.jpg",
  "images/King spades.jpg",
  "images/Queen spades.jpg",
  "images/Jack spades.jpg",
  "images/Ten spades.jpg",
  "images/Nine spades.jpg",
  "images/Eight spades.jpg",
  "images/Seven spades.jpg",
  "images/Six spades.jpg",
  "images/Five spades.jpg",
  "images/Four spades.jpg",
  "images/Three spades.jpg",
  "images/Two spades.jpg",
  "images/Ace clubs.jpg",
  "images/King clubs.jpg",
  "images/Queen clubs.jpg",
  "images/Jack clubs.jpg",
  "images/Ten clubs.jpg",
  "images/Nine clubs.jpg",
  "images/Eight clubs.jpg",
  "images/Seven clubs.jpg",
  "images/Six clubs.jpg",
  "images/Five clubs.jpg",
  "images/Four clubs.jpg",
  "images/Three clubs.jpg",
  "images/Two clubs.jpg",
  "images/Ace hearts.jpg",
  "images/King hearts.jpg",
  "images/Queen hearts.jpg",
  "images/Jack hearts.jpg",
  "images/Ten hearts.jpg",
  "images/Nine hearts.jpg",
  "images/Eight hearts.jpg",
  "images/Seven hearts.jpg",
  "images/Six hearts.jpg",
  "images/Five hearts.jpg",
  "images/Four hearts.jpg",
  "images/Three hearts.jpg",
  "images/Two hearts.jpg"
];

// ---------- Lucky numbers (1–59, unique) ----------
function generateLuckyNumbers() {
  const s = new Set();
  while (s.size < 6) s.add(Math.floor(Math.random() * 59) + 1);
  return Array.from(s).sort((a, b) => a - b);
}

// Write lucky numbers to the top text
const topTextEl = document.querySelector(".top-text");
if (topTextEl) {
  const nums = generateLuckyNumbers();
  topTextEl.innerHTML = `Your lucky numbers: <span>${nums.join(", ")}</span>`;
}

// ---------- Quotes by suit ----------
const quotesBySuit = {
  hearts: [
    "People don’t care how much you know until they know how much you care. — Theodore Roosevelt",
    "To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity. — Douglas Adams",
    "Customers may forget what you said but they’ll never forget how you made them feel. — Maya Angelou",
    "Your most unhappy customers are your greatest source of learning. — Bill Gates",
    "Trust is earned when actions meet words. — Chris Butler",
    "You never get a second chance to make a first impression. — Will Rogers",
    "Customers don’t measure you on how hard you tried. They measure you on what you deliver. — Steve Jobs",
    "Treat every customer as if they sign your paycheck — because they do. — Anonymous",
    "Courteous treatment will make a customer a walking advertisement. — James Cash Penney",
    "Your smile is your logo, your personality is your business card, how you leave others feeling after an experience with you becomes your trademark. — Jay Danzie",
    "A kind gesture can reach a wound that only compassion can heal. — Steve Maraboli",
    "Customers don’t expect you to be perfect. But they do expect you to fix things when they go wrong. — Donald Porter",
    "Kindness is the language which the deaf can hear and the blind can see. — Mark Twain"
  ],
  diamonds: [
    "Happiness is a choice. You can choose to be happy. There’s going to be stress in life, but it’s your choice whether you let it affect you or not. — Valerie Bertinelli",
    "Kind hearts are the gardens, kind thoughts are the roots. - Henry Longfellow.",
    "Happiness is always a choice. You can’t wait for circumstances to get better. You have to create your own good fortune. — Joel Osteen",
    "Happiness is a way of travel not a destination. — Roy M. Goodman",
    "When you get up in the morning, you have two choices – either to be happy or to be unhappy. Just choose to be happy. — Norman Vincent Peale",
    "Happiness is a conscious choice, not an automatic response. — Mildred Barthel",
    "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
    "For every minute you are angry, you lose sixty seconds of happiness. — Ralph Waldo Emerson",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. — Albert Schweitzer",
    "The happiest people don’t have the best of everything, they just make the best of everything. — Anonymous",
    "Happiness is a state of mind. It's just according to the way you look at things. — Walt Disney",
    "Happiness grows at our own firesides, and is not to be picked in strangers’ gardens. — Douglas William Jerrold",
    "Happiness is a perfume you cannot pour on others without getting some on yourself. — Ralph Waldo Emerson",
    "Whether you think you can or you think you can’t — you’re right. — Henry Ford",
    "You can’t solve a problem with the same mind that created it. — Albert Einstein"
  ],
  clubs: [
    "Clients do not come first. Employees come first. If you take care of your employees, they will take care of the clients. — Richard Branson",
    "When people are financially invested, they want a return. When people are emotionally invested, they want to contribute. — Simon Sinek",
    "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. — Jack Welch",
    "Train people well enough so they can leave. Treat them well enough so they don’t want to. — Richard Branson",
    "Everyone wants to be appreciated, so if you appreciate someone, don’t keep it a secret. — Mary Kay Ash",
    "Alone we can do so little; together we can do so much. — Helen Keller",
    "The strength of the team is each individual member. The strength of each member is the team. — Phil Jackson",
    "Talent wins games, but teamwork and intelligence win championships. — Michael Jordan",
    "Individually, we are one drop. Together, we are an ocean. — Ryunosuke Satoro",
    "Leaders who fail to listen will eventually be surrounded by people who have nothing to say. — Andy Stanley",
    "No one can whistle a symphony. It takes an orchestra to play it. — H.E. Luccock",
    "A team is successful when everyone’s unique strengths complement each other’s weaknesses. - Anonymous",
    "We are only as strong as we are united, as weak as we are divided. — J.K. Rowling",
    "Growth and comfort do not coexist. — Ginni Rometty",
    "A man’s mind, stretched by new ideas, never returns to its original dimensions. — Oliver Wendell Holmes Jr."
  ],
  spades: [
    "It always seems impossible until it’s done. — Nelson Mandela",
    "The difference between the impossible and the possible lies in a person’s determination. — Tommy Lasorda",
    "Fall seven times, stand up eight.” — Japanese Proverb",
    "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
    "Strength does not come from winning. Your struggles develop your strengths. — Arnold Schwarzenegger",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "There’s a way to do it better — find it. — Thomas Edison",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "A river cuts through rock not because of its power but because of its persistence. — Jim Watkins",
    "Obstacles are those frightful things you see when you take your eyes off your goal. — Henry Ford",
    "Success seems to be largely a matter of hanging on after others have let go. — William Feather",
    "There is a solution to every problem; you just have to be creative enough to find it. — Travis Kalanick",
    "It’s not the load that breaks you down, it’s the way you carry it. — Lou Holtz",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. — Winston Churchill"
  ],
  generic: [
    "Keep your face always toward the sunshine — and shadows will fall behind you. — Walt Whitman",
    "We cannot become what we want by remaining what we are. — Max DePree",
    "If it doesn’t challenge you, it won’t change you. — Fred DeVito",
    "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
    "Unless you try to do something beyond what you have already mastered, you will never grow. — Ralph Waldo Emerson",
    "The important thing is not to stop questioning. — Albert Einstein",
    "Progress is impossible without change, and those who cannot change their minds cannot change anything. — George Bernard Shaw",
    "If you always do what you’ve always done, you’ll always get what you’ve always got. — Henry Ford",
    "Whenever you find yourself on the side of the majority, it is time to pause and reflect. — Mark Twain",
    "Discovery is seeing what everybody else has seen and thinking what nobody else has thought. — Albert Szent-Györgyi",
    "We do not learn from experience… we learn from reflecting on experience. — John Dewey",
    "Be curious, not judgmental. — Walt Whitman",
    "If you’re not willing to risk the usual, you’ll have to settle for the ordinary. — Jim Rohn",
    "The ones who are crazy enough to think they can change the world are the ones who do. — Steve Jobs",
    "You can’t do today’s job with yesterday’s methods and be in business tomorrow. — George W. Bush",
    "The art and science of asking questions is the source of all knowledge. — Thomas Berger",
    "He who asks a question remains a fool for five minutes. He who does not ask remains a fool forever. — Chinese Proverb",
    "Asking the right questions takes as much skill as giving the right answers. — Robert Half"
  ]
};

// Helper: detect suit from filename
function detectSuitFromPath(path) {
  const p = path.toLowerCase();
  if (p.includes("heart"))   return "hearts";   // matches heart/hearts
  if (p.includes("diamond")) return "diamonds"; // matches diamond/diamonds
  if (p.includes("club"))    return "clubs";    // matches club/clubs
  if (p.includes("spade"))   return "spades";   // matches spade/spades
  return null;
}

// Pick ONE random image
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const chosenImage = pickRandom(images);

// Render image
const gallery = document.getElementById("gallery");
if (gallery) {
  const img = document.createElement("img");
  img.src = chosenImage;
  img.alt = "";
  gallery.replaceChildren(img); // clears and adds image
}

// Pick matching quote for the image
const suit = detectSuitFromPath(chosenImage);
const pool =
  (suit && quotesBySuit[suit] && quotesBySuit[suit].length)
    ? quotesBySuit[suit]
    : quotesBySuit.generic;

const quote = pickRandom(pool);

// Write quote to the bottom text
const bottomTextEl = document.querySelector(".bottom-text");
if (bottomTextEl) {
  bottomTextEl.innerHTML = `Quote of the day: <span>${quote}</span>`;
}