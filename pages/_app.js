
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import 'boxicons/css/boxicons.min.css'
import '../styles/globals.css';

import Layout from 'components/Layout';

function App({ Component, pageProps }) {
  const router = useRouter()
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([])
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      let local = []

      const response = await axios.get("/db.json");

      tools.map(tool => tool.categories.map(category => local.push(category)))

      setTools(response.data);
      setCategories([...new Set(local)])

    })()


  }, [tools]);

  useEffect(() => {

    if (router.query?.category) {
      const filteredTools = tools.filter(tool => tool.categories.includes(router.query.category));
      setFilteredTools(filteredTools)
    } else {
      setFilteredTools(tools)
    }

  }, [router.query, tools])

  return (

    <Layout>
      <Component {...pageProps} tools={filteredTools} categories={categories} />
    </Layout>
  );
}

export default App;
