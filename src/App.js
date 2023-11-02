import React, { useEffect, useState } from "react";
import axios from "axios";

import { Flex, Layout, Spin } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import Logo from "./components/Ui/Logo";
import Tags from "./components/Ui/Tags";
import SearchInp from "./components/Ui/SearchInp";
import Gifs from "./components/Gifs";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchGifs = async () => {
    setLoading(true);
      try {
        
        const { data: { data } } = await axios.get( `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25`);
        
        if (!data.length) setLoading(false);
       
        const gifsimages = data.map((items) => items.images.original);
        setGifs(gifsimages)

      } catch (err) {
        console.log(err);
      }
    };

    if (search.length) fetchGifs();

  }, [search]);

  console.log(gifs);
  return (
    <Layout style={{ height: "100vh", overflow: "hidden", maxWidth: "1024px", margin: "0 auto", background: "transparent" }} >
      
      <Header style={{ position: "sticky", top: 0, zIndex: 1, background: "transparent", height: "150px" }} >
        <Flex gap="middle" horizontal="true" align="center" justify="space-between" style={{ padding: "12px 0" }} >
          <Logo />
          <Tags setSearch={setSearch} />
        </Flex>
        <SearchInp setSearch={setSearch} />
      </Header>
      
      <Content style={{ display: "block", margin: "10px 0", height: "100%", overflow: "scroll" }} >
        {loading && <Gifs  gifs={gifs} />}
        {!loading && <Spin size="large" style={{ margin: "0 auto", display: "block", marginTop: "50px" }} /> }
      </Content>
      
      <Footer style={{ textAlign: "center", background: "transparent" }}>
        <p>Made by ❤ Amonov Otabek | 2023</p>
      </Footer>
    
    </Layout>
  );
};

export default App;
