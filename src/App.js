import { useEffect, useState } from 'react';
import './App.css';
import ListPost from './components/ListPost';
import ColorBox from './features/ColorBox/components/Box';
import TodoFeature from './features/Todo';
import queryString from 'query-string';
import Pagination from './components/Pagination';
import SearchForm from './components/SearchForm';

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const params = queryString.stringify(filter);
        const data = await fetch(`https://js-post-api.herokuapp.com/api/posts?${params}`);
        const dataJson = await data.json();

        setPostList(dataJson.data);
        setPagination(dataJson.pagination);
      } catch(e) {
        console.log('fail to fetch post list: ', e.message);
      }
    }

    fetchPostList();
  }, [filter]);

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage
    });
  }

  function handleOnSubmit(formValues) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: formValues.searchTerm
    });
  }

  return (
    <div className="App">
      {/* <TodoFeature /> */}
      {/* <ColorBox /> */}
      <SearchForm onSubmit={handleOnSubmit}/>
      <ListPost posts={postList}/>
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChange}/>
    </div>
  );
}

export default App;
