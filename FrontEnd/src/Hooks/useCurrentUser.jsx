import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Authcontext } from "../AuthProvider/Authprovider";

export const useCurrentUser = () => {
  const { user } = useContext(AuthContext); // logged-in user
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || !user.email) {
      setUserInfo(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    axios
      .get("http://localhost/Web-Engineering-Project-Github/BackEnd/fitflex-backend/api/get_users.php")
      .then((res) => {
        if (res.data.status === "success" && Array.isArray(res.data.users)) {
          const currentUser = res.data.users.find(u => u.email === user.email);
          setUserInfo(currentUser || null);
        } else {
          setUserInfo(null);
          setError("Failed to find user");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch users error:", err);
        setError("Something went wrong!");
        setLoading(false);
      });
  }, [user]);

  return { userInfo, loading, error };
};