import { useState } from "react";

interface PopUpProps {
  styles?: string;
}

export default function PopUp({ styles = "" }: PopUpProps) {
  //Entire Project for Database
  const [description, setDescription] = useState("");
  const [projectName, setProjectName] = useState("");
  // End of Entire Project
  const [componentName, setComponentName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("pcs");
  // useState Components
  interface componentProps {
    componentName: string;
    category?: string;
    quantity: number;
    unit: string;
  }

  const [components, setComponents] = useState<componentProps[]>([]);
  const [clicked, setClicked] = useState(false);

  const renderComponentSection = () => {
    if (!clicked && components.length === 0) {
      return (
        <div className="rounded-[2vw] bg-gray-800 w-[820px] border-2 border-dashed border-gray-600 h-[110px] mt-5 flex flex-row justify-center">
          <p className="text-gray-300 mt-10">No components added yet</p>
        </div>
      );
    } else if (!clicked && components.length > 0) {
      return (
        <div className="overflow-y-auto max-h-[200px]">
          {components.map((component, index) => (
            <div
              key={index}
              className="flex flex-row justify-between bg-gray-800 p-4 rounded-lg mt-2 hover:border hover:border-gray-500"
            >
              <div className="flex flex-col gap-1">
                <span className="flex flex-row">
                  <p className="text-white text-sm me-2">
                    {component.componentName}
                  </p>
                  <p className="text-[#CFA407] text-sm bg-[#F0B100] pe-1 text-center rounded font-bold">
                    {component.category}
                  </p>
                </span>
                <p className="text-white text-sm">
                  {component.quantity} {component.unit}
                </p>
              </div>
              <button
                onClick={() => {
                  setComponents(components.filter((_, i) => i !== index));
                }}
                className="me-1 text-gray-600 font-bold cursor-pointer"
              >
                X
              </button>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="w-[820px] flex flex-col bg-[#1E2939] p-3 rounded-lg">
          {
            <div className="w-[820px] flex flex-col bg-[#1E2939] p-3 rounded-lg">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col mt-1">
                  <div className="flex flex-col ms-5">
                    <label className="text-white text-sm">
                      Component Name:
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setComponentName(e.target.value);
                      }}
                      placeholder=" eg.,AMD Ryzen 9 CPU"
                      className="text-white border p-1 mt-1 me-2 w-[350px] rounded-full text-sm"
                    />
                  </div>
                  <div className="flex flex-col ms-5 mt-1">
                    <label className="text-white text-sm">Quantity:</label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setQuantity(e.target.valueAsNumber);
                      }}
                      className="border text-white rounded-full p-1 mt-1 me-2 text-sm"
                      placeholder=" 1"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col me-10">
                    <label className="text-white mt-1 text-sm">
                      Category (Optional)
                    </label>
                    <input
                      type="text"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      placeholder=" e.g, Electronics, Hardware"
                      className="mt-1 rounded-full text-white border p-1 w-[350px] text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white mt-1 text-sm">Unit</label>
                    <input
                      type="text"
                      placeholder=" pcs"
                      onChange={(e) => {
                        setUnit(e.target.value);
                      }}
                      className="rounded-full text-white border p-1 w-[350px] mt-1 text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-2 mt-5 ms-5">
                <button
                  onClick={() => {
                    const newComponent: componentProps = {
                      componentName: componentName,
                      category: category,
                      quantity: quantity,
                      unit: unit,
                    };
                    setComponents([...components, newComponent]);
                    setClicked(!clicked);
                  }}
                  className="text-white cursor-pointer text-sm bg-yellow-500 px-3 py-1 rounded-full"
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                  className="text-white text-sm cursor-pointer bg-gray-600 px-3 py-1 rounded-full"
                >
                  Cancel
                </button>
              </div>
            </div>
          }
        </div>
      );
    }
  };
  // End of useState Components
  return (
    <div
      className={`rounded-[2vw] bg-[#101828] w-[900px] h-[630px] p-10 flex flex-col gap-3 {styles}`}
    >
      <h1 className="text-white font-semibold text-xl">Create New Project</h1>
      <label className="text-white">Project Name</label>
      <input
        type="text"
        onChange={(e) => {
          setProjectName(e.target.value);
        }}
        placeholder="  e.g., Build a Gaming PC, DIY Kitchen Renovation"
        className="border rounded-full p-2 text-white border-gray bg-gray-800 focus:outline-none"
      />
      <label className="text-white">Description</label>
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="  Describe what you're building...."
        className="border rounded-full p-2 text-white border-gray bg-gray-800 focus:outline-none"
      />
      <div className="flex flex-row justify-between">
        <label className="text-white mt-3">Components Needed</label>
        {!clicked ? (
          <button
            onClick={() => {
              setClicked(!clicked);
            }}
            className="text-white text-sm cursor-pointer mt-1 bg-[#1F2937] p-2 rounded-full"
          >
            + Add Component
          </button>
        ) : (
          <></>
        )}
      </div>
      {renderComponentSection()}
      <hr className="border-gray-600 mt-2" />
      <div className="flex flex-row gap-5">
        <button className="flex-1 bg-yellow-500 rounded-full p-2 font-semibold cursor-pointer">
          Create project
        </button>
        <button className="flex-none text-gray-300 bg-[#1F2937] p-4 rounded-[1vw] border-white cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
}
