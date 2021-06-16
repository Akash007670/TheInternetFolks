import React, { useState, useEffect } from "react";
import axios from "axios";
import bgshorten from "../assets/images/bg-shorten-desktop.svg";

import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Background,
  SearchBar,
  Button,
  LinkList,
  CopyBtn,
  Paragraph,
} from "../MainContent/SearchbarElement";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 3000);
    }
  }, [copied]);

  const handleOnClick = async (e) => {
    console.log(query);
    if (query !== "") {
      try {
        setLoading(true);
        let res = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${query}`
        );
        console.log(res.data);
        setResponse(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Background>
        <img src={bgshorten} alt="bg-short" />
        <SearchBar
          input
          type="text"
          placeholder="Shorten a link here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleOnClick}>
          {loading ? "Shortening...." : "Shorten It!"}
        </Button>
      </Background>

      <LinkList>
        <Paragraph>
          {response ? response?.result?.short_link : "Please add a link"}
        </Paragraph>
        <CopyToClipboard
          text={response?.result?.short_link}
          onCopy={() => setCopied(true)}
        >
          <CopyBtn>{copied ? "Copied" : "Copy"}</CopyBtn>
        </CopyToClipboard>
      </LinkList>
    </>
  );
};

export default Searchbar;
