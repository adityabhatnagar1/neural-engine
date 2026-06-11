const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine("html", require("fs").readFileSync.bind(null));

// Article data
const latestStories = [
  {
    category: "Cryptocurrency",
    categorySlug: "cryptocurrency",
    title:
      "Investors Flocking to Super-Anonymous Cryptocurrency Used for the Sketchiest Stuff Imaginable",
    author: "Joe Wilkins",
    slug: "#",
  },
  {
    category: "Robotics",
    categorySlug: "robotics",
    title:
      "Robophobic Airline Bans Humanoid Robots From Flights After Disruption",
    author: "Joe Wilkins",
    slug: "#",
  },
  {
    category: "Self-Driving Vehicles",
    categorySlug: "self-driving",
    title:
      "Swarm of Empty Waymos Descends on Unsuspecting Suburb, Circle Cul-de-Sacs for Hours on End Like Strange Ghosts",
    author: "Joe Wilkins",
    slug: "#",
  },
  {
    category: "Ethics",
    categorySlug: "ethics",
    title:
      "Mayor Eats His Words After Admitting He's Delegating Work to 11 AI Agents",
    author: "Krystle Vermes",
    slug: "#",
  },
  {
    category: "Artificial Intelligence",
    categorySlug: "ai",
    title:
      "Oops: Bosses Realize Their Companies Have Been Swarmed by Legions of Redundant AI Agents",
    author: "Frank Landymore",
    slug: "#",
  },
];

const featuredArticle = {
  category: "Machine Learning",
  categorySlug: "machine-learning",
  title:
    "Being a Crappy Boss to AI Chatbots Pushes Them Toward Spouting Marxist Rhetoric and Organizing With Their Compatriots, Researchers Find",
  excerpt:
    "\"Without collective voice, 'merit' becomes whatever management says it is.\"",
  author: "Joe Wilkins",
  image:
    "https://futurism.com/wp-content/uploads/2025/05/crappy-boss-ai-marxist.jpg",
  slug: "#",
};

const topStories = [
  {
    category: "Global Warming",
    title: "The Latest Data on El Niño Is a Looming Nightmare",
    author: "Krystle Vermes",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80",
    slug: "#",
  },
  {
    category: "Future Materials",
    title:
      'Scientists Say $600,000 Lab-Grown "T-Rex Leather" Handbag Is Actually Something Laughable',
    author: "Joe Wilkins",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    slug: "#",
  },
  {
    category: "Future Society",
    title: "Princeton in Shambles Over AI Cheating",
    author: "Joe Wilkins",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80",
    slug: "#",
  },
  {
    category: "Gene Editing",
    title: "Gene Therapy Causes Patient to Grow Alarming Tumor",
    author: "Krystle Vermes",
    image:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&q=80",
    slug: "#",
  },
];

const aiPsychosis = [
  {
    category: "xAI",
    title: "Certain Chatbots Vastly Worse For AI Psychosis, Study Finds",
    excerpt:
      '"There\'s no longer an excuse for releasing models that reinforce user delusions so readily."',
    author: "Maggie Harrison Dupré",
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&q=80",
    slug: "#",
  },
  {
    category: "Mental Health",
    title:
      "Woman Sues OpenAI, Saying ChatGPT Unleashed a Vicious Stalker Against Her and Did Nothing When She Begged for Help",
    excerpt:
      '"His location and plans are something OpenAI could shed light on if they were willing to cooperate."',
    author: "Maggie Harrison Dupré",
    image:
      "https://images.unsplash.com/photo-1633613286991-611fe299a4be?w=400&q=80",
    slug: "#",
  },
  {
    category: "Ethics",
    title:
      "Paper Finds That Leading AI Chatbots Like ChatGPT and Claude Remain Incredibly Sycophantic, Resulting in Twisted Effects on Users",
    excerpt:
      '"AI sycophancy is not merely a stylistic issue or a niche risk, but a prevalent behavior with broad downstream consequences."',
    author: "Maggie Harrison Dupré",
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&q=80",
    slug: "#",
  },
];

const muskWatch = [
  {
    category: "Elon Musk",
    title:
      "Elon Musk Absolutely Obsessed With Tweets From Random Guy In India Who Constantly Glazes Him, Analysis Shows",
    excerpt:
      '"Musk loves to be glazed, and this person is the doughnut factory."',
    author: "Frank Landymore",
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&q=80",
    slug: "#",
  },
  {
    category: "Elon Musk",
    title: "Elon Musk Flees OpenAI Trial as Tide Turns Against Him",
    excerpt: "And he's gone.",
    author: "Frank Landymore",
    image:
      "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?w=400&q=80",
    slug: "#",
  },
  {
    category: "Elon Musk",
    title:
      "Sam Altman Accuses Elon Musk of Laughing at Memes During Important OpenAI Meetings",
    excerpt: '"MEMES ON HIS PHONE."',
    author: "Maggie Harrison Dupré",
    image:
      "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=400&q=80",
    slug: "#",
  },
];

const theFeed = [
  {
    category: "Mass Transit",
    title: "College Kid Shuts Down High Speed Trains With a Laptop and a Radio",
    author: "Joe Wilkins",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=200&q=80",
    slug: "#",
  },
  {
    category: "Machine Learning",
    title:
      "Amazon Employees Forced to Hit Quotas on AI Use, Immediately Start Using it for Everything Except Work",
    author: "Joe Wilkins",
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&q=80",
    slug: "#",
  },
  {
    category: "Medical",
    title:
      "Dentists Are Using AI to Scare Patients Into Unnecessary Dental Work, According to an Explosive Investigation",
    author: "Frank Landymore",
    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=200&q=80",
    slug: "#",
  },
  {
    category: "Astronomy",
    title: "Scientists Detect Weird Anomalies in Clouds of Venus",
    author: "Frank Landymore",
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=200&q=80",
    slug: "#",
  },
  {
    category: "Biology",
    title: "NASA Satellite Images Show Huge Colored Plumes Staining the Ocean",
    author: "Frank Landymore",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=200&q=80",
    slug: "#",
  },
  {
    category: "Ethics",
    title:
      "Doctors' AI Systems Are Hallucinating Nonexistent Medical Issues During Appointments With Patients",
    author: "Joe Wilkins",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&q=80",
    slug: "#",
  },
  {
    category: "Artificial Intelligence",
    title:
      "Men Haven't Yet Noticed That a Large Number of Women Are Disgusted by AI",
    author: "Krystle Vermes",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80",
    slug: "#",
  },
  {
    category: "Brain",
    title:
      "Scientists Say Test Subjects Were Able to Quit Smoking After They Blasted Their Brains With a Huge Magnet",
    author: "Krystle Vermes",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&q=80",
    slug: "#",
  },
  {
    category: "Studies",
    title:
      "Scientists Say They've Invented a Serum That Activates a Dormant Ability to Regrow Lost Limbs in Mammals",
    author: "Joe Wilkins",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=200&q=80",
    slug: "#",
  },
  {
    category: "Google",
    title: "Programmer Breaks Out of the Matrix",
    author: "Frank Landymore",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&q=80",
    slug: "#",
  },
  {
    category: "Pollution",
    title: "Residents Say Data Centers Are Radiating Bizarre Frequencies",
    author: "Krystle Vermes",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80",
    slug: "#",
  },
  {
    category: "Meta",
    title:
      "Meta Employee Attacks Zuckerberg for Collecting Every Employee Keystroke",
    author: "Frank Landymore",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&q=80",
    slug: "#",
  },
];

const navCategories = [
  {
    name: "AI",
    slug: "#",
    sub: [
      "Anthropic",
      "Ethics",
      "Facial Recognition",
      "Google",
      "Machine Learning",
      "Meta",
      "OpenAI",
      "xAI",
    ],
  },
  {
    name: "Society",
    slug: "#",
    sub: [
      "Art",
      "Blockchain",
      "Cybersecurity",
      "Education",
      "Finance",
      "Food",
      "Privacy",
    ],
  },
  {
    name: "Health",
    slug: "#",
    sub: ["Brain", "Genetics", "Medical", "Prosthetics", "Sleep", "Studies"],
  },
  { name: "Machines", slug: "#", sub: ["Computing", "Robotics"] },
  {
    name: "Science",
    slug: "#",
    sub: [
      "Agriculture",
      "Biology",
      "Chemistry",
      "Energy",
      "Environment",
      "Physics",
    ],
  },
  {
    name: "Space",
    slug: "#",
    sub: ["Astronomy", "Astrophysics", "Blue Origin", "NASA", "SpaceX"],
  },
  {
    name: "Transport",
    slug: "#",
    sub: ["Electric Vehicles", "Mass Transit", "Self-Driving", "Tesla"],
  },
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/api/data", (req, res) => {
  res.json({
    latestStories,
    featuredArticle,
    topStories,
    aiPsychosis,
    muskWatch,
    theFeed,
    navCategories,
  });
});

app.listen(PORT, () => {
  console.log(`Futurism clone running at http://localhost:${PORT}`);
});
