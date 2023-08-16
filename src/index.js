import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css'


const GetGithubUsers = () => {

  const [users, setUsers] = useState([]);

  const url = 'https://api.github.com/users';

  const getUsers = async () => {

    const response = await fetch(url);
    const userData = await response.json();
    setUsers(userData);

  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h1 className=" text-3xl text-center mt-6">List of Github Users</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 mx-auto container">
        {users.length > 1 && users.map((userData) => {
          return (
            <div key={userData.id} className=" flex gap-6 bg-slate-200 w-[100%] p-3 rounded-md">
              <img className=" w-28 h-32 rounded-md object-cover" src={userData.avatar_url} alt={userData.login} />
              <div>
                <h3 className=" text-slate-900">{userData.login} </h3>
                <p className=" text-slate-900 pl-8 mt-1">[lowing/other_user]</p>
                <div className=" flex gap-5 mt-3 bg-slate-300 rounded-md p-3">
                  <div>
                    <div className=" text-slate-900 text-sm mb-1">Articles</div>
                    <div className=" text-slate-900 text-xs text-center">38</div>
                  </div>
                  <div>
                    <div className=" text-slate-900 text-sm mb-1">Followers</div>
                    <div className=" text-slate-900 text-xs text-center">980</div>
                  </div>
                  <div>
                    <div className=" text-slate-900 text-sm mb-1">Rating</div>
                    <div className=" text-slate-900 text-xs text-center">89</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        {users.length === 0 && <h1>Users not found!</h1>}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<GetGithubUsers />)