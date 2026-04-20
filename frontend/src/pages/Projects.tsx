import { useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
export default function Projects() {
  const [addCard, setAddCard] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-1 bg-[#0B1220] overflow-y-auto">
        <div className="flex flex-row ms-6 mt-5 justify-between">
          <span>
            <h1 className="text-2xl font-semibold text-white">Your Projects</h1>
            <p className="text-gray-300 mt-2">
              Track what you're building and what you need.
            </p>
          </span>
          <button
            className="rounded-full cursor-pointer bg-[#22D3EE] h-[40px] w-[130px] font-semibold me-11 pe-2 ps-1"
            onClick={() => {
              setAddCard(true);
            }}
          >
            ➕ New Project
          </button>
          {/* If add Card is true Take the information within form, setAddCard to false, add info to database*/}
          {/* Here we would go through the list of Projects within the Database and Fill the card */}
          {/* If none in the Database use the Div on the bottom here */}
        </div>
        <div className="flex flex-col items-center mt-[100px] ">
          <svg
            width="146"
            height="146"
            viewBox="0 0 146 146"
            fill="none"
            className=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_1_18" fill="white">
              <path d="M0 16C0 7.16344 7.16344 0 16 0H130C138.837 0 146 7.16344 146 16V130C146 138.837 138.837 146 130 146H16C7.16344 146 0 138.837 0 130V16Z" />
            </mask>
            <path
              d="M0 16C0 7.16344 7.16344 0 16 0H130C138.837 0 146 7.16344 146 16V130C146 138.837 138.837 146 130 146H16C7.16344 146 0 138.837 0 130V16Z"
              fill="#111827"
            />
            <path
              d="M16 0V1H130V0V-1H16V0ZM146 16H145V130H146H147V16H146ZM130 146V145H16V146V147H130V146ZM0 130H1V16H0H-1V130H0ZM16 146V145C7.71573 145 1 138.284 1 130H0H-1C-1 139.389 6.61116 147 16 147V146ZM146 130H145C145 138.284 138.284 145 130 145V146V147C139.389 147 147 139.389 147 130H146ZM130 0V1C138.284 1 145 7.71573 145 16H146H147C147 6.61116 139.389 -1 130 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z"
              fill="#1F2937"
              mask="url(#path-1-inside-1_1_18)"
            />
            <path
              d="M69.6667 105.433C70.6801 106.018 71.8298 106.326 73 106.326C74.1702 106.326 75.3199 106.018 76.3333 105.433L99.6667 92.1C100.679 91.5154 101.52 90.6749 102.105 89.6628C102.69 88.6506 102.999 87.5024 103 86.3333V59.6667C102.999 58.4976 102.69 57.3494 102.105 56.3372C101.52 55.325 100.679 54.4845 99.6667 53.9L76.3333 40.5667C75.3199 39.9815 74.1702 39.6735 73 39.6735C71.8298 39.6735 70.6801 39.9815 69.6667 40.5667L46.3333 53.9C45.3209 54.4845 44.4799 55.325 43.8949 56.3372C43.3098 57.3494 43.0012 58.4976 43 59.6667V86.3333C43.0012 87.5024 43.3098 88.6506 43.8949 89.6628C44.4799 90.6749 45.3209 91.5154 46.3333 92.1L69.6667 105.433Z"
              stroke="#6B7280"
              stroke-width="6.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M73 106.333V73"
              stroke="#6B7280"
              stroke-width="6.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M43.9667 56.3333L73 73L102.033 56.3333"
              stroke="#6B7280"
              stroke-width="6.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M58 47.2333L88 64.4"
              stroke="#6B7280"
              stroke-width="6.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h1 className="text-white font-medium text-xl mt-4">
            No Projects Yet
          </h1>
          <p className="text-gray-300 mt-2">
            Create your first project to start tracking what you have
          </p>
          <p className="text-gray-300 mt-2">and what you need to buy.</p>
          <button className="rounded-full cursor-pointer bg-[#22D3EE] h-[40px] w-[220px] font-semibold mt-10">
            ➕ Create Your first Project
          </button>
        </div>
      </div>
    </div>
  );
}
