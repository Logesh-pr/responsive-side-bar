import "./App.css";
import react, { useState } from "react";
import profile from "./assets/profile.png";
import home from "./assets/icons/home.svg";
import file from "./assets/icons/file.svg";
import calendar from "./assets/icons/calendar.svg";
import email from "./assets/icons/email.svg";
import sales from "./assets/icons/sales.svg";
import notification from "./assets/icons/notification.svg";
import chat from "./assets/icons/chat.svg";
import settings from "./assets/icons/settings.svg";
import arrow from "./assets/icons/arrow.svg";

function App() {
  const [value, setValue] = useState(true);
  const menus = [
    {
      icon: home,
      name: "Dashboard",
    },

    {
      icon: file,
      name: "My project ",
    },
    {
      icon: calendar,
      name: "Calendar",
    },
    {
      icon: email,
      name: "Mail",
    },
    {
      icon: sales,
      name: "Sales",
    },
  ];
  const accounts = [
    {
      icon: notification,
      name: "Notification",
    },
    {
      icon: chat,
      name: "Chat",
    },
    {
      icon: settings,
      name: "Settings",
    },
  ];

  return (
    <>
      <div className="container mx-auto w-screen min-h-screen flex flex-col justify-center items-center px-2 py-5 ">
        <div
          className={`side_bar p-7 ease-out duration-300  ${
            value ? "w-64" : "w-32"
          } `}
        >
          <div
            className={`flex ${
              value ? "justify-start" : "justify-center"
            } items-center gap-x-2 ease-out duration-500`}
          >
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div
            className={`py-5 mt-3 flex flex-row ${
              value ? "justify-start" : "justify-center"
            } items-center border-b border-b-slate-500`}
          >
            <img src={profile} alt="profile" className="w-12 h-12 rounded" />
            {value && (
              <h3
                className={`ps-3 font-medium text-slate-100 whitespace-pre  duration-200 ${
                  !value && " translate-x-10 hidden overflow-hidden "
                } `}
              >
                P.R.Logesh
              </h3>
            )}
          </div>
          <div className="py-3 border-b border-b-slate-500">
            <h6
              className={`text-slate-300 text-[13px]  duration-300  ${
                value ? "text-start" : "text-center"
              }`}
            >
              Menu
            </h6>
            <div className="menu ">
              <ul
                className={`mt-3 flex flex-col ${
                  value ? "items-start" : "items-center "
                } justify-center  gap-y-3 `}
              >
                {menus.map((menu) => (
                  <li
                    className={`group w-full flex ${
                      value ? "justify-start gap-x-4 " : "justify-center  "
                    } items-center p-3 text-slate-200 cursor-pointer menus  `}
                  >
                    <img
                      src={menu.icon}
                      className={`${value ? "w-6" : "w-7"} duration-300`}
                    />
                    <p
                      className={` whitespace-pre   duration-500   text-[15px] font-medium  ${
                        !value && " translate-x-10 hidden overflow-hidden "
                      }`}
                    >
                      {menu.name}
                    </p>
                    <p
                      className={`${
                        value && "hidden"
                      } bg-black w-0 overflow-hidden  text-[11px]  whitespace-pre rounded-xl absolute left-48 group-hover:left-20 group-hover:py-2 group-hover:px-4 group-hover:w-fit group-hover:duration-500 group-hover:shadow-2xl group-hover:border border-slate-500`}
                    >
                      {menu.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-3">
            <h6
              className={`text-slate-300 text-[13px]  duration-200 ${
                value ? "text-start" : "text-center"
              } `}
            >
              Accounts
            </h6>
            <ul className="mt-3 flex flex-col justify-center items-start gap-y-3">
              {accounts.map((account) => (
                <li
                  className={`group w-full flex ${
                    value ? "justify-start" : "justify-center"
                  } items-center gap-x-4 p-3 text-slate-200 cursor-pointer menus  `}
                >
                  <img src={account.icon} className="w-6" />
                  <p
                    className={` whitespace-pre  duration-500   text-[15px] font-medium  ${
                      !value && " translate-x-10 hidden overflow-hidden "
                    }`}
                  >
                    {account.name}
                  </p>
                  <p
                    className={`${
                      value && "hidden"
                    } bg-black w-0 overflow-hidden  text-[11px]  whitespace-pre rounded-xl absolute left-48 group-hover:left-20 group-hover:py-2 group-hover:px-4 group-hover:w-fit group-hover:duration-500 group-hover:shadow-2xl group-hover:border border-slate-800 `}
                  >
                    {account.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="mt-5 w-12 h-12 rounded-full mx-auto flex justify-center items-center arrow_btn "
            onClick={() => setValue(!value)}
          >
            <img
              src={arrow}
              className={` w-6 ease-out duration-200 ${
                value ? "-rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
