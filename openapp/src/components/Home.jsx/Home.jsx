import { useState } from "react";
import * as XLSX from "xlsx";
import Select from "react-select";
import { AiOutlineDelete } from "react-icons/ai";

const Home = () => {
    const [data, setData] = useState([]);
    const [selectedTags, setSelectedTags] = useState({});
    const [selectedFileName, setSelectedFileName] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setSelectedFileName(file.name);

        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parseData = XLSX.utils.sheet_to_json(sheet);
            console.log(parseData);
            setData(parseData);
            setSelectedTags({});
        };
    };

    const handleTagChange = (rowId, selectedOptions) => {
        const newSelectedTags = { ...selectedTags, [rowId]: selectedOptions };
        setSelectedTags(newSelectedTags);
    };

    const handleRemoveTag = (rowId, tagIndex) => {
        const updatedTags = { ...selectedTags };
        if (updatedTags[rowId]) {
            updatedTags[rowId] = updatedTags[rowId].filter(
                (tag, index) => index !== tagIndex
            );
            setSelectedTags(updatedTags);
        }
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row  w-full h-full md:h-full bg-[#EBEBEB]">
                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 bg-white p-6 hidden md:block  ">
                    <div
                        id="base1"
                        className="flex items-center justify-start px-6 py-8 "
                    >
                        <img
                            src="https://file.rendit.io/n/pucVWkhg6JevbqKOUJv9.svg"
                            alt="Base logo"
                            className="h-10 w-10"
                        />
                        <span className="ml-4 text-xl font-semibold text-[#030229]">
                            Base
                        </span>
                    </div>
                    <nav>
                        <a
                            href="#dashboard"
                            className="flex items-center mb-8 mt-2 text-[#9a9aa9]"
                        >
                            <img
                                src="https://file.rendit.io/n/3maVTlgbWsrXm9PwyixU.svg"
                                alt="Dashboard"
                                className="mr-3"
                            />
                            Dashboard
                        </a>
                        <a
                            href="#upload"
                            className="flex items-center mb-8 text-[#504bde]  rounded"
                        >
                            <img
                                src="https://file.rendit.io/n/T5gkxITSrZtZWrt3zryt.svg"
                                alt="Upload"
                                className="mr-3 bg-white p-1 rounded"
                            />{" "}
                            Upload
                        </a>
                        <a
                            href="#invoices"
                            className="flex items-center mb-8 text-[#9a9aa9]"
                        >
                            <img
                                src="https://file.rendit.io/n/4JyL1bKuQjQesvDQhX3i.svg"
                                alt="Invoices"
                                className="mr-3"
                            />{" "}
                            Invoice
                        </a>
                        <a
                            href="#schedule"
                            className="flex items-center mb-8 text-[#9a9aa9]"
                        >
                            <img
                                src="https://file.rendit.io/n/4UXsaz0hnWftilI4u3b8.svg"
                                alt="Schedule"
                                className="mr-3"
                            />{" "}
                            Schedule
                        </a>
                        <a
                            href="#calendar"
                            className="flex items-center mb-8 text-[#9a9aa9]"
                        >
                            <img
                                src="https://file.rendit.io/n/qZZWEBdQrpUOSdBAqEwg.svg"
                                alt="Calendar"
                                className="mr-3"
                            />{" "}
                            Calendar
                        </a>
                        <a
                            href="#notifications"
                            className="flex items-center mb-8 text-[#9a9aa9]"
                        >
                            <img
                                src="https://file.rendit.io/n/iwNBoZ7HSabibcAcvaAv.svg"
                                alt="Notifications"
                                className="mr-3"
                            />{" "}
                            Notification
                        </a>
                        <a href="#settings" className="flex items-center text-[#9a9aa9]">
                            <img
                                src="https://file.rendit.io/n/DDvo9yVG8GBepZolpVbu.svg"
                                alt="Settings"
                                className="mr-3"
                            />{" "}
                            Settings
                        </a>
                    </nav>
                </aside>

                {/* Main content area */}
                <main className="flex-1 p-4 md:p-4 h-[100%] lg:grid-cols-2  ">
                    {/* Header for large  screens */}

                    <div className=" flex-col hidden md:block">
                        <header className=" flex justify-between items-center pb-4 md:pb-12 md:pt-5">
                            <h1 className="text-xl md:text-2xl font-semibold">Upload CSV</h1>
                            <div className="flex items-center">
                                <img
                                    src="https://file.rendit.io/n/Hbit6pZaTh6ghDxDelk7.svg"
                                    alt="Notifications"
                                    className="mr-3 md:mr-5"
                                />
                                <img
                                    src="https://file.rendit.io/n/05dhX5CgoAr1AaFbHIgE.svg"
                                    alt="User Profile"
                                    className="mx-8"
                                />
                            </div>
                        </header>
                    </div>
                    {/* Header for mobile screen  screens */}
                    <div>
                        <header className="bg-white shadow-sm md:hidden w-full">
                            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                                <div className="flex items-center">
                                    <button aria-label="Open menu" onClick={handleSidebarToggle}>
                                        <img
                                            src="https://file.rendit.io/n/sTb55xUI00Hw16Ne2Dd8.svg"
                                            alt="Menu"
                                            className="h-6 w-6"
                                        />
                                    </button>
                                    <div className="flex items-center ml-4">
                                        <img
                                            src="https://file.rendit.io/n/8F6K2vovJPsH93I9inwW.svg"
                                            alt="Brand logo"
                                            className="h-6 w-auto"
                                        />
                                        <span className="text-lg font-semibold ml-2">Base</span>
                                    </div>
                                </div>

                                {/* after click button sidebar appears */}
                                <div className="flex items-center justify-center">
                                    <button aria-label="Show notifications">
                                        <img
                                            src="https://file.rendit.io/n/3lpFinCy16hRFBWXyUdK.svg"
                                            alt="Notification"
                                            className="h-6 w-6"
                                        />
                                    </button>
                                    <button aria-label="User profile" className="ml-6">
                                        <img
                                            src="https://file.rendit.io/n/Nsf7bTNagxgUcgDIOcpg.svg"
                                            alt="User avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </button>
                                </div>
                            </div>
                            <h1 className="text-xl md:text-2xl font-semibold hidden">
                                Upload CSV
                            </h1>
                        </header>

                        {/* Sidebar toggle bar */}
                        {isSidebarOpen && (
                            <aside className="bg-[#fff] absolute top-3 w-screen h-full md:w-64 p-6 flex-column justify-center gap-2 md:hidden ">
                                <div className="bg-[#fff] pt-6 font-['Nunito'] rounded-tr-[20px] rounded-br-[20px] flex w-full max-w-xs h-[60px] w-100%">
                                    <div className="flex flex-row items-center justify-between px-1 mb-6 w-100%">
                                        <div className="flex items-center gap-3 w-10px">
                                            <img
                                                src="https://file.rendit.io/n/4EVtjdGnUufrc53Uprkh.svg"
                                                alt="Subtract1"
                                                className="w-10 h-10"
                                            />
                                            <div className="text-xl font-semibold text-[#030229]">
                                                Base
                                            </div>
                                        </div>
                                        <button
                                            aria-label="Close sidebar"
                                            onClick={handleSidebarClose}
                                        >
                                            <img
                                                src="https://file.rendit.io/n/aAdygrtXEAQvBZ0adRaA.svg"
                                                alt="Close Icon"
                                                className="w-10 h-10 ml-20 cursor-pointer"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <nav className=" px-4 items-center justify-center">
                                    <a
                                        href="#dashboard"
                                        className="flex items-center pt-5 mb-8 mt-2 text-[#9a9aa9]"
                                    >
                                        <img
                                            src="https://file.rendit.io/n/3maVTlgbWsrXm9PwyixU.svg"
                                            alt="Dashboard"
                                            className="mr-3"
                                        />
                                        Dashboard
                                    </a>
                                    <a
                                        href="#upload"
                                        className="flex items-center mb-8 text-[#504bde] rounded"
                                    >
                                        <img
                                            src="https://file.rendit.io/n/T5gkxITSrZtZWrt3zryt.svg"
                                            alt="Upload"
                                            className="mr-3 bg-white p-1 rounded"
                                        />{" "}
                                        Upload
                                    </a>
                                    <a
                                        href="#invoices"
                                        className="flex items-center mb-8 text-[#9a9aa9]"
                                    >
                                        <img
                                            src="https://file.rendit.io/n/4JyL1bKuQjQesvDQhX3i.svg"
                                            alt="Invoices"
                                            className="mr-3"
                                        />{" "}
                                        Invoice
                                    </a>
                                    <a
                                        href="#schedule"
                                        className="flex items-center mb-8 text-[#9a9aa9]"
                                    >
                                        <img
                                            src="https://file.rendit.io/n/4UXsaz0hnWftilI4u3b8.svg"
                                            alt="Schedule"
                                            className="mr-3"
                                        />{" "}
                                        Schedule
                                    </a>
                                    <a
                                        href="#calendar"
                                        className="flex items-center mb-8 text-[#9a9aa9]"
                                    >
                                        <img
                                            src="https://file.rendit.io/n/qZZWEBdQrpUOSdBAqEwg.svg"
                                            alt="Calendar"
                                            className="mr-3"
                                        />{" "}
                                        Calendar
                                    </a>
                                    <a
                                        href="#notifications"
                                        className="flex items-center mb-8 text-[#9a9aa9]"
                                    >
                                        <img
                                            src="https://file.rendit.io/n/iwNBoZ7HSabibcAcvaAv.svg"
                                            alt="Notifications"
                                            className="mr-3"
                                        />{" "}
                                        Notification
                                    </a>
                                    <a
                                        href="#settings"
                                        className="flex pb-4 items-center text-[#9a9aa9]"
                                    >
                                        <img
                                            src="https://file.rendit.io/n/DDvo9yVG8GBepZolpVbu.svg"
                                            alt="Settings"
                                            className="mr-3"
                                        />{" "}
                                        Settings
                                    </a>
                                </nav>
                            </aside>
                        )}
                    </div>

                    {/* Upload Container for larger screen */}
                    <div
                        id="InputContainer"
                        className="bg-[#ffff] flex flex-col justify-center items-center md:flex mt-[10%] lg:mt-[10%] gap-5 lg:w-1/2 lg:mx-[25%] p-4 rounded-lg"
                    >
                        <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%] h-[267px] items-center mb-4 border-dashed border-black/8 border-2 rounded-lg mt-4">
                            <div className="flex flex-col items-center pt-[10%]">
                                <div>
                                    <img
                                        src="https://file.rendit.io/n/ryTMpR2wlZ9lx83DBmfU.svg"
                                        alt="MicrosoftOfficeExcelpresent"
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div
                                    id="PlaceholderText1"
                                    className="text-center leading-[24px] text-[#999ca0] h-6 w-[267px] pt-12"
                                >
                                    {selectedFileName ? (
                                        <span>{`${selectedFileName} `}</span>
                                    ) : (
                                        <>
                                            Drop your excel sheet here or{" "}
                                            <span className=" text-[#605bff] cursor-pointer">
                                                <label htmlFor="uploadFile">
                                                    <input
                                                        type="file"
                                                        id="uploadFile"
                                                        accept=".xlsx"
                                                        onChange={handleFileUpload}
                                                        className="hidden"
                                                    />
                                                    here!
                                                </label>
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button
                            // onClick={handleSubmit}
                            className="bg-[#605bff] flex justify-center items-center w-[90%] md:w-[80%] lg:w-[70%] h-12 px-6 rounded-lg hover:bg-[#4f4bba] transition-colors duration-300 ease-in-out"
                        >
                            <img
                                src="https://file.rendit.io/n/EhAiWA7tcMn7Sqyb9hwV.svg"
                                alt="Icon"
                                className="w-6"
                            />
                            <span className="text-sm font-semibold leading-[24px] text-white ml-2">
                                Upload
                            </span>
                        </button>
                    </div>


                    {/* Upload Container for smaller screen */}

                    {/* <h1 className="text-xl md:text-2xl font-semibold   md:hidden">Upload CSV</h1> */}
                    {/* <div className="shadow-md bg-white flex flex-col  items-center p-6 rounded-lg w-full max-w-md mx-auto md:hidden">
                        <div className="relative w-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                            <img
                                src="https://file.rendit.io/n/JCaginf0V1TqgVSyXyA0.svg"
                                alt="Microsoft Office Excel present"
                                className="w-8 h-6 mb-4"
                            />
                            <p className="text-sm text-gray-400">
                                Upload your excel sheet <span className="text-indigo-600">here</span>
                            </p>
                        </div>
                        <button
                            type="button"
                            className="mt-4 bg-indigo-600 w-full flex items-center justify-center gap-2 h-12 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            <img
                                src="https://file.rendit.io/n/EhAiWA7tcMn7Sqyb9hwV.svg"
                                alt="Upload Icon"
                                className="w-4"
                            />
                            <span className="text-sm font-semibold text-white">Upload</span>
                        </button>
                    </div> */}

                    {/* Display Table if Data Exists */}
                    {data.length > 0 && (
                        <>
                            <h1 className="pt-8 text-xl md:text-2xl font-semibold">
                                Uploads
                            </h1>

                            <table className="w-full bg-white shadow-md rounded mb-8 mt-10 mx-auto overflow-hidden">
                                <thead>
                                    <tr>
                                        {Object.keys(data[0]).map((key) => (
                                            <th key={key} className="bg-gray-300 p-2">
                                                {key}
                                            </th>
                                        ))}
                                        <th className="bg-gray-300 p-2">Selected Tags</th>
                                    </tr>
                                </thead>
                                <tbody className="border-none">
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            {Object.keys(item).map((key) => (
                                                <td key={key} className="border p-2 text-center">
                                                    {key === "select tags" ? (
                                                        <Select
                                                            className="bg-slate-500 max-w-250px w-[%]"
                                                            isMulti={true}
                                                            placeholder="Select tags"
                                                            value={selectedTags[item.id] || []}
                                                            onChange={(selectedOptions) =>
                                                                handleTagChange(item.id, selectedOptions)
                                                            }
                                                            options={item[key]
                                                                .split(", ")
                                                                .map((tag, index) => ({
                                                                    value: tag,
                                                                    label: tag,
                                                                    index: tag,
                                                                }))}
                                                            components={{
                                                                Placeholder: () => {
                                                                    return (
                                                                        <>
                                                                            <p>Select tag</p>
                                                                        </>
                                                                    );
                                                                },
                                                                MultiValueContainer: () => null,
                                                                Input: () => null,
                                                                MultiValueRemove: () => null,
                                                                ClearIndicator: () => null,
                                                                SingleValue: ({ children, ...props }) => (
                                                                    <div {...props}>
                                                                        <p>Select tag</p>
                                                                    </div>
                                                                ),
                                                            }}
                                                        />
                                                    ) : key === "links" ? (
                                                        <a
                                                            className="text-[#5B93FF] text-decoration-line-through "
                                                            href={item.links}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {item.links}
                                                        </a>
                                                    ) : (
                                                        item[key]
                                                    )}
                                                </td>
                                            ))}
                                            <td className="border p-2 flex flex-row justify-center flex-grow-0">
                                                {selectedTags[item.id]
                                                    ? selectedTags[item.id].map((tag, index) => (
                                                        <div className="h-full flex flex-col" key={index}>
                                                            <div className="bg-[#605bff] flex flex-col lg:flex-row gap-1 w-[6rem] items-center justify-center my-1 mx-[0.7rem] py-1 pl-2 pr-1 rounded-lg">
                                                                <span className="text-[0.65rem] font-semibold tracking-[0.5] leading-[16px] uppercase text-white">
                                                                    {tag.value}
                                                                </span>
                                                                <button
                                                                    onClick={() =>
                                                                        handleRemoveTag(item.id, index)
                                                                    }
                                                                    className="w-4 cursor-pointer"
                                                                >
                                                                    <AiOutlineDelete />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))
                                                    : ""}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </main>
            </div>
        </>
    );
};

export default Home;
