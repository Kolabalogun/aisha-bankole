import { useState, createContext, useContext, useEffect } from "react";

import useFirestoreCollection from "../Hook/useFirestoreCollection";

import { fetchFirestoreData } from "../Hook/fetchFirestoreData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  //loading state
  const [loading, setloading] = useState(false);

  //notification state
  const [notification, setnotification] = useState("");

  //  notification timeout
  useEffect(() => {
    const timeoutt = setTimeout(() => {
      setnotification("");
    }, 3000);

    return () => {
      clearInterval(timeoutt);
    };
  }, [notification]);

  // get projects from firestore

  const { data: projectsFromDB, loader: projectsFromDBLoader } =
    useFirestoreCollection("Projects");

  console.log(projectsFromDB);

  // get page contents
  const [pageContent, pageContentF] = useState(null);

  useEffect(() => {
    const getPageContentDetail = async () => {
      setloading(true);
      const data = await fetchFirestoreData(
        "Page content",
        "5TpYbWjWzBZXUJmKpN32"
      );
      if (data) {
        pageContentF(data);
      }
      setloading(false);
    };

    getPageContentDetail();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setloading,
        notification,
        setnotification,
        projectsFromDB,
        projectsFromDBLoader,
        pageContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
