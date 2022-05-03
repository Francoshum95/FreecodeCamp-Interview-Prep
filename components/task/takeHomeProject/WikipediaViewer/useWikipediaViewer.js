import {useState} from 'react';

export default function useWikipediaViewer(){
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleToggle = () => {
    setToggle(false);
    setSearchData(null)
  }

  const handleSetToggle = () => {
    setToggle(true)
  }

  const handleOnChange = (e) => {
    setQuery(e.target.value);
    setSearchData(null);
  }

  const onSumbit = async() => {
    const searchResponse = await fetch(`https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${query}`);
    const searchResult = await searchResponse.json();

    let result = [];

    for (const [key, value] of Object.entries(searchResult.query.pages)){
        
      const df_dict = {
        title: value.title,
        content: value.extract,
        url: `https://en.wikipedia.org/?curid=${value.pageid}`,
        index: value.index
      }
  
      result.push(df_dict)
    }

    setSearchData(result);
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter"){
      if (!/\s/.test(query) && query.length > 0){
        onSumbit();
      }
    }
  }

  return {
    toggle, 
    query,
    handleOnChange,
    handleSetToggle,
    handleToggle,
    onKeyPress,
    searchData
  }

}