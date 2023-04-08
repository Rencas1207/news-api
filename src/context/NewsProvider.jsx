import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
   const [category, setCategory] = useState('general');
   const [news, setNews] = useState([]);

   const handleChangeCategory = e => {
      setCategory(e.target.value);
   }

   useEffect(() => {
      const requestApi = async () => {
         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

         const { data } = await axios(url);
         setNews(data.articles)
      }
      requestApi();
   }, [category])

   return (
      <NewsContext.Provider
         value={{
            category,
            handleChangeCategory,
            news
         }}
      >
         {children}
      </NewsContext.Provider>
   )
}

export default NewsContext;