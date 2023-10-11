import { useState } from "react";

import "./App.css";

const content = {
  header: {
    title: "Human Blabering",
    secondaryTitle: "Share Cool Facts",
  },
  posts: [
    {
      title: "The Mysterious Language of Whales",
      description:
        "Whales communicate using complex songs that can travel for hundreds of miles through the ocean. These songs, unique to each group, remain one of the great mysteries of marine biology.",
      author: "MarineBiologyFan",
      date: "2023-11-03",
      id: 1,
      likes: 15,
      comments: ["Fascinating!", "Nature's wonders never cease to amaze."],
    },
    {
      title: "The Science Behind Lightning Strikes",
      description:
        "Lightning is a discharge of electricity in the atmosphere. A single lightning bolt can heat the surrounding air to 50,000 degrees Fahrenheit - hotter than the surface of the sun!",
      author: "StormChaser123",
      date: "2023-10-25",
      id: 2,
      likes: 8,
      comments: ["Impressive and dangerous!", "Nature's fireworks."],
    },
    {
      title: "The Mystery of Dark Matter",
      description:
        "Dark matter makes up about 85% of the universe's total mass, yet it doesn't interact with light or other forms of electromagnetic radiation. Its nature remains one of the greatest puzzles in astrophysics.",
      author: "CosmicExplorer",
      date: "2023-09-15",
      id: 3,
      likes: 25,
      comments: [
        "I hope we find answers soon!",
        "Dark matter, the enigma of the cosmos.",
      ],
    },
    {
      title: "The Magic of Bioluminescent Organisms",
      description:
        "Bioluminescent organisms, like fireflies and certain deep-sea creatures, produce light through chemical reactions. They create their own natural light shows in the darkness of the natural world.",
      author: "BioEnthusiast",
      date: "2023-08-05",
      id: 4,
      likes: 12,
      comments: [
        "Nature's own fireworks!",
        "I'd love to see a bioluminescent bay.",
      ],
    },
    {
      title: "The Surprising World of Ant Colonies",
      description:
        "Ant colonies can be massive, housing millions of ants. These tiny insects can organize complex societies, communicate through pheromones, and solve problems collectively.",
      author: "AntLover23",
      date: "2023-07-19",
      id: 5,
      likes: 9,
      comments: ["Ants are amazing engineers!", "Nature's little architects."],
    },
    {
      title: "The Unexplained Phenomenon of Ball Lightning",
      description:
        "Ball lightning is a rare and poorly understood atmospheric electrical phenomenon. Witnesses have reported seeing luminous, spherical objects that float, flicker, and disappear.",
      author: "MysteryHunter",
      date: "2023-06-28",
      id: 6,
      likes: 7,
      comments: [
        "I've always been intrigued by ball lightning.",
        "A true scientific mystery.",
      ],
    },
    {
      title: "The Wonders of Human Memory",
      description:
        "The human brain can store information equivalent to about 2.5 petabytes of data, enough to fill over three million hours of TV shows. Our memory's capacity is truly astounding.",
      author: "MemoryGeek",
      date: "2023-05-14",
      id: 7,
      likes: 17,
      comments: [
        "Our brains are like supercomputers!",
        "Memory is the library of the mind.",
      ],
    },
    {
      title: "The Intricate World of Spider Silk",
      description:
        "Spider silk is not only incredibly strong, but it's also lightweight and elastic. Some spider silk varieties are as strong as steel, and they are used by spiders for hunting and web-building.",
      author: "ArachnoFanatic",
      date: "2023-04-02",
      id: 8,
      likes: 11,
      comments: [
        "Nature's engineers at work!",
        "Spider silk is a marvel of bioengineering.",
      ],
    },
    {
      title: "The Enigma of Crop Circles",
      description:
        "Crop circles are intricate geometric patterns found in fields, often attributed to mysterious origins. While many are hoaxes, some remain unexplained, fueling conspiracy theories and speculation.",
      author: "CropCircleEnigma",
      date: "2023-03-19",
      id: 9,
      likes: 6,
      comments: [
        "I've always wondered about crop circles.",
        "Are they messages from extraterrestrial beings?",
      ],
    },
    {
      title: "The Secret Life of Trees",
      description:
        "Trees communicate with each other through a network of fungal mycelia called the 'wood wide web.' They can exchange nutrients and information, helping each other survive and thrive.",
      author: "TreeHugger",
      date: "2023-02-11",
      id: 10,
      likes: 14,
      comments: [
        "Nature's social network!",
        "We have much to learn from trees.",
      ],
    },
  ],
};
function App() {
  const handleSearchTerm = (event) => {
    SetDisplaySearchTerm(event.target.value);
  };
  const [displaySearchTerm, SetDisplaySearchTerm] = useState("");
  const filteredPosts = content.posts.filter((post) => {
    return post.title.toLowerCase().includes(displaySearchTerm.toLowerCase());
  });
  return (
    <>
      <Header />
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start">
        <Search onSearch={handleSearchTerm} term={displaySearchTerm} />
        {displaySearchTerm && <p>Looking for {displaySearchTerm}</p>}
      </div>
      <br />
      <div className="row">
        <div className="col-0 col-md-3"></div>
        <div className="col-12 col-md-6">
          <Posts Posts={filteredPosts} />
        </div>
        <div className="col-0 col-md-3"></div>
      </div>
    </>
  );
}

function Header() {
  return (
    <div>
      <h1>{content.header.title}</h1>
      <h2>{content.header.secondaryTitle}</h2>
    </div>
  );
}
function Search({ onSearch, term }) {
  const [searchTerm, SetSearchTerm] = useState(term);
  function handleChange(event) {
    SetSearchTerm(event.target.value);
    onSearch(event);
  }
  return (
    <>
      <label htmlFor="search">Search Post</label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
    </>
  );
}

function Posts({ Posts }) {
  return (
    <>
      {Posts.map((post) => {
        return <Post {...post} />;
      })}
    </>
  );
}
function Post({ Id, title, description, date, likes, comments, author }) {
  return (
    <p
      key={Id}
      className="card d-flex flex-column justify-content-start align-items-start"
    >
      <p className="fs-5 fw-bold text-start">{title}</p>
      <p className="fs-6 text-start">{description}</p>
      <div className="d-flex flex-row justify-content-evenly">
        <button className="btn btn-outline-primary">
          <span>
            {likes}
            <span>&nbsp;{"Likes"}</span>
          </span>
        </button>
        &nbsp;
        <button className="btn btn-outline-primary">
          <span>
            {comments.length}
            <span>&nbsp;{"Comments"}</span>
          </span>
        </button>
      </div>
      <small>
        {author} | {date}
      </small>
    </p>
  );
}

export default App;
