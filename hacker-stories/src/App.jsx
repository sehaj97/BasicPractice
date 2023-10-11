import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

const content = {
  header: {
    title: "Hacker Stories",
    secondaryTitle: "Open Forum Board",
  },
  Posts: [
    {
      title: "How to build a blog app with React and Vite",
      description: "This is the best tutorial on building a blog app",
      author: "sehaj",
      date: "2021-11-3",
      Id: 1,
      likes: 0,
      comments: ["good one", "no one", "i am comment", "am i comment?"],
    },
    {
      title: "Post 2",
      description: "Can you learn typescript?",
      author: "magan",
      date: "2023-11-3",
      Id: 2,
      likes: 0,
      comments: ["good one", "no one", "i am comment", "am i comment?"],
    },
  ],
};
function App() {
  const handleSearchTerm = (event) => {
    SetDisplaySearchTerm(event.target.value);
  };
  const [displaySearchTerm, SetDisplaySearchTerm] = useState("");
  const filteredPosts = content.Posts.filter((post) => {
    return post.title.toLowerCase().includes(displaySearchTerm.toLowerCase());
  });
  return (
    <>
      <Header />
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start">
        <Search onSearch={handleSearchTerm} />
        {displaySearchTerm && <p>Looking for {displaySearchTerm}</p>}
      </div>
      <br />
      <div>
        <Posts Posts={filteredPosts} />
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
function Search({ onSearch }) {
  const [searchTerm, SetSearchTerm] = useState("");
  function handleChange(event) {
    SetSearchTerm(event.target.value);
    onSearch(event);
  }
  return (
    <>
      <label htmlFor="search">Search Post</label>
      <input id="search" type="text" onChange={handleChange} />
    </>
  );
}

function Posts({ Posts }) {
  return (
    <>
      {Posts.map((post) => {
        return <Post post={post} />;
      })}
    </>
  );
}
function Post({ post }) {
  return (
    <p
      key={post.Id}
      className="card d-flex flex-column justify-content-start align-items-start"
    >
      <p className="fs-4 fw-bold">{post.title}</p>
      <p>{post.description}</p>
      <div className="d-flex flex-row justify-content-evenly">
        <button className="btn btn-outline-primary">
          <span>
            {post.likes}
            <span>&nbsp;{"Likes"}</span>
          </span>
        </button>
        &nbsp;
        <button className="btn btn-outline-primary">
          <span>
            {post.comments.length}
            <span>&nbsp;{"Comments"}</span>
          </span>
        </button>
      </div>
      <small>
        {post.author} | {post.date}
      </small>
    </p>
  );
}

export default App;
