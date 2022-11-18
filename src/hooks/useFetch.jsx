import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { app } from "../utils/firebase";

export const useFetch = () => {
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const database = getDatabase(app);
    const postsRef = ref(database, "posts/");
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      const postsArray = [];
      for (let id in data) {
        postsArray.push({ id, ...data[id] });
      }
      setPostsList(postsArray);
      setLoading(false);
    });
  }, []);
  return { postsList, loading };
};
