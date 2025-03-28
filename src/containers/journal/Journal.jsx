import React from "react";
import Article from "../../components/article/Article";
import { one, two, three, four, five } from "./journal_import";
import "./journal.css";

const Journal = () => (
  <div className="journal section__padding" id="journal">
    <div className="journal-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="journal-container">
      <div className="journal-container_groupA">
        <Article
          imgUrl={one}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="journal-container_groupB">
        <Article
          imgUrl={two}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={three}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={four}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={five}
          date="Sep 26, 2021"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Journal;
