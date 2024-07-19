import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../API/Api";

export const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const userData = await Api.getUserById(userId);
        setUser(userData.user);
        console.log("User: ", userData.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchEvent();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>{user.firstName}</div>;
};
