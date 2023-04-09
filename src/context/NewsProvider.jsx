import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
   const [category, setCategory] = useState('general');
   const [news, setNews] = useState([]);
   const [page, setPage] = useState(1);
   const [totalNews, setTotalNews] = useState(0);

   const handleChangeCategory = e => {
      setCategory(e.target.value);
   }

   useEffect(() => {
      const requestApi = async () => {
         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

         const { data } = await axios(url);
         setNews(data.articles)
         setTotalNews(data.totalResults);
         setPage(1);
      }
      requestApi();
   }, [category])

   useEffect(() => {
      const requestApi = async () => {
         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`

         const { data } = await axios(url);
         setNews(data.articles)
         setTotalNews(data.totalResults);
      }
      requestApi();
   }, [page])

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [page, category])

   const handleChangePage = (e, value) => {
      setPage(value);
   }

   return (
      <NewsContext.Provider
         value={{
            category,
            handleChangeCategory,
            news,
            totalNews,
            handleChangePage,
            page
         }}
      >
         {children}
      </NewsContext.Provider>
   )
}

export default NewsContext;