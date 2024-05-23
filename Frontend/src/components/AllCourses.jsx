import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function AllCourses() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URLS}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Happy to see you today at{" "}
            <span className="text-pink-500">Bookshelf!</span>
          </h1>
          <p className="mt-12">
            Welcome to Bookshelf! We're thrilled to have you here as we embark
            on a literary journey together. At Bookshelf, our mission is to
            ignite your passion for reading and provide a sanctuary where book
            lovers can gather, explore, and discover endless worlds within the
            pages of a book. Whether you're seeking thrilling mysteries,
            heartwarming romances, or thought-provoking classics, we've curated
            a diverse collection just for you. From bestsellers to hidden gems,
            there's something for every reader to enjoy. So, dive into our
            virtual shelves, lose yourself in captivating stories, and let the
            magic of reading transport you to new heights. We're delighted to
            see you here at Bookshelf, where every book has a story and every
            reader finds a home.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllCourses;
