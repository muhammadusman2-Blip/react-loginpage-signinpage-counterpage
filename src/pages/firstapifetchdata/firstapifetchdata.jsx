import { useEffect, useState } from "react";
import axios from "axios";

function Firstapi() {
  const [post, setPost] = useState([]);

  async function api() {
    try {
      const ref = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(ref.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <h1>This is first API</h1>
      {post.map((user) => (
        <div key={user.id}>
          <h3>{user.id}</h3>
          <h3>{user.title}</h3>
          <p>{user.body}</p>
        </div>
      ))}
    </>
  );
}

export default Firstapi;