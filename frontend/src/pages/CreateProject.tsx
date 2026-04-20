import NavBar from "../components/NavBar";
import PopUp from "../components/PopUp";

export default function CreateProject() {
  return (
    <div className="bg-black flex flex-col h-screen overflow-hidden">
      <NavBar />
      <div className="flex-1 flex flex-col items-center justify-center mb-25">
        <button className="text-gray-600 font-semibold mb-4 cursor-pointer me-[720px] mb-2">
          🔙 Back to Projects
        </button>
        <PopUp />
      </div>
    </div>
  );
}
