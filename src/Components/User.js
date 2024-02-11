import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
        const user = response.data.results[0];
        setUserData(user);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts

  return (
    <div>
      {userData ? (
        <div className="w-[100%] min-h-screen text-black bg-[#E5E4E2] p-2">
          <section className="max-w-[1170px] mx-auto min-h-screen ">
            <h3 className="text-4xl justify-center items-center flex">
              User Data
            </h3>

            <main className="w-25 h-25  items-center flex justify-center my-[30vh] ">
              <div className="bg-red-500 flex gap-6 p-6 rounded-md items-center bg-white  shadow-2xl">
                {/* image section  */}
                <div>
                  <img
                    className="w-[100%] rounded border-2 shadow-3xl border-sky-500"
                    src={userData.picture.large}
                    alt="User"
                  />
                </div>
                {/* text areA */}
                <div className="my-3">
                  {/* NAME AREA */}
                  <div className="flex text-3xl gap-2 font-s4emibold">
                    <h3 className="">{userData.name.first}</h3>
                    <h3>{userData.name.last}</h3>
                  </div>
                  <h3 className="text-2xl">{userData.gender}</h3>
                  <h3 className="text-xl"> {userData.phone}</h3>
                </div>
              </div>
            </main>
          </section>
        </div>
      ) : (
        <p className="text-2xl font-bold items-center justify-content flex mx-auto p-4">
          Loading...
        </p>
      )}
    </div>
  );
};

export default User;
