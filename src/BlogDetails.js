import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();
  const[deleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    setTimeout(() => {
      fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE'
      }).then(() => {
        setIsDeleting(false);
        navigate('/');
      })
    }, 1000);
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            {!deleting && <button onClick={handleClick}>Delete</button>}
            {deleting && <button disabled>Deleting...</button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
