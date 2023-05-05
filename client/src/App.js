import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from './components/Loading';
import Navbar from './components/Navbar/Navbar';
import routes from './config/routes';
import { getLoggedIn, logout } from './services/auth';
import * as USER_HELPERS from './utils/userToken';

export default function App() {
  const [snippetData, setSnippetData] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [filteredSnippets, setFilteredSnippets] = useState(null);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error('Logout was unsuccessful: ', res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }
  async function handleAdd(e) {
    e.preventDefault();
    console.log('Submitted add');

    const { title, code, tags } = e.target;
    let snippet = {
      title: title.value,
      code: code.value,
      tags: tags.value,
    };

    await axios.post(
      'https://get-to-the-snippet.vercel.app/api/create',
      snippet,
    );
    toast('Snippet added');
    setShowForm(false);
    getSnippetData();
  }

  async function getSnippetData() {
    let response = await axios.get(
      'https://get-to-the-snippet.vercel.app/api/snippets',
    );
    setSnippetData(response.data);
    setFilteredSnippets(response.data);
  }

  useEffect(() => {
    getSnippetData();
  }, []);
  function filterSnippets(searchText) {
    let filteredList = snippetData.filter((item) => {
      return item.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredSnippets(filteredList);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <ToastContainer />
      <Navbar
        handleLogout={handleLogout}
        user={user}
        filterSnippets={filterSnippets}
      />
      <Routes>
        {routes({
          onHandleAdd: handleAdd,
          user,
          authenticate,
          handleLogout,
          filteredSnippets,
          snippetData,
          showForm,
          onSetSnippetData: setSnippetData,
          onSetShowForm: setShowForm,
          getSnippetData,
        }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
