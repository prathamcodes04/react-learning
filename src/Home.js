import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
   const[blogs, setBlogs] = useState(null);
   const[isPending, setIsPending] = useState(true);

   // const [name, setName] = useState('mario');

   //temporary changing objects
   //after refrehsing everything will be reset to deafault 3 blogs
   // const handleDelete = (id) => {
   //    const newBlogs = blogs.filter(blog => blog.id !== id);
   //    setBlogs(newBlogs);  
   // }

   //basics
   // useEffect(() => {
   //    console.log('use effect ran');
   //    console.log(name);
   // }, [name]);

   //fetching data in useEffect hook
   useEffect(() => {
      setTimeout(() => {
         fetch('http://localhost:8000/blogs')
         .then(res => {
            return res.json();
         })
         .then((data) => {
            // console.log(data);
            setBlogs(data);
            setIsPending(false);
         })
      }, 1000)
   }, []);

   return(
      <div className="home">
         {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
         {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blog" /> */}
         {/* <button onClick={() => setName('luigi')}>change name</button> */}
         {/* <p>{name}</p> */}
      </div>
   );
   
   
   // // let name = 'mario';
   // const [name, setName] = useState('mario');
   // const [age, setAge] = useState(25);

   // const handleClick = () => {
   //    setName('luigi');
   //    setAge(30);
   // }

   // // const handleClick = (e) => {
   // //    console.log('hello', e.target);
   // // }

   // // const handleClickAgain = (name, e) => {
   // //    console.log('hello ' + name, e.target);
   // // }

   // return (
   //    <div className="home">
   //       <h2>Homepage</h2>
   //       <p>{name} is {age} years old</p>
   //       <button onClick={handleClick}>Click Me!</button>
   //       {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
   //    </div>
   // );
};

export default Home;
