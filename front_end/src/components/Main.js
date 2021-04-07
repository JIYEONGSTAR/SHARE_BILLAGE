import React, { useState } from "react";
import BookCard from "./cards/BookCard";

import { Link } from "react-router-dom";
import "../css/BookList.css";
// import BookListBySubject from "./BookListBySubject";

function Main(props) {
  let data = props.data;
  // let [booklist, setBooklist] = useState(props.booklist);
  let booklist = props.booklist;

  // console.log("data ");
  // console.log(data);
  console.log("data");
  console.log(data);
  const handleAdd = (e) => {
    props.handleBookDetail(e.id);
  };
  let IT = "IT융합자율학부";
  let humanities = "인문융합자율학부";
  let society = "사회융합자율학부";
  let mediacontents = "미디어콘텐츠융합자율학부";
  let culture = "교양";

  return (
    <>
      <div className="subjectList">
        <button
          value="subject"
          onClick={() => {
            props.handleAll();
          }}
        >
          ALL
        </button>
        <button
          value="subject"
          onClick={() => {
            props.handleSubject(humanities);
            // setList(booklist);
          }}
        >
          인문
        </button>
        <button
          value="subject"
          onClick={() => {
            props.handleSubject(society);
            // setList(booklist);
          }}
        >
          사회
        </button>
        <button
          value="subject"
          onClick={() => {
            props.handleSubject(mediacontents);
            // setList(booklist);
          }}
        >
          미콘
        </button>

        <button
          value="subject"
          onClick={() => {
            props.handleSubject(IT);
            // setList(booklist);
          }}
        >
          IT
        </button>

        <button
          value="subject"
          onClick={() => {
            props.handleSubject(culture);
            // setList(booklist);
          }}
        >
          교양
        </button>
      </div>
      {booklist ? (
        <div className="bookWrap">
          {booklist.map((d) => (
            <div className="bookList">
              <div className="bookCard">
                <BookCard
                  image={d.image}
                  title={d.title}
                  author={d.author}
                  publisher={d.publisher}
                  pubDate={d.pubdate}
                  isbn={d.isbn}
                  subject={d.subject}
                  className={d.className}
                  professor={d.professor}
                  stock={d.stock}
                />
                <Link to={`/bookdetail/${d.id}`}>
                  <button value="add" onClick={() => handleAdd(d)}>
                    자세히
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "버튼을 클릭하세요"
      )}
    </>
  );
}

export default Main;