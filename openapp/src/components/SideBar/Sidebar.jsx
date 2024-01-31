<div className="flex h-screen bg-fafafb">
    {/* Sidebar Navigation */}
    <aside className="w-64 bg-white p-6">
        <img src="https://file.rendit.io/n/pucVWkhg6JevbqKOUJv9.svg" alt="Base" className="mb-6" />
        <nav>
            <a href="#dashboard" className="flex items-center mb-5 text-9a9aa9">
                <img src="https://file.rendit.io/n/3maVTlgbWsrXm9PwyixU.svg" alt="Dashboard" className="mr-3" /> Dashboard
            </a>
            <a href="#upload" className="flex items-center mb-5 text-030229 bg-605bff rounded p-2">
                <img src="https://file.rendit.io/n/T5gkxITSrZtZWrt3zryt.svg" alt="Upload" className="mr-3 bg-white p-1 rounded" /> Upload
            </a>
            <a href="#invoices" className="flex items-center mb-5 text-9a9aa9">
                <img src="https://file.rendit.io/n/4JyL1bKuQjQesvDQhX3i.svg" alt="Invoices" className="mr-3" /> Invoice
            </a>
            <a href="#schedule" className="flex items-center mb-5 text-9a9aa9">
                <img src="https://file.rendit.io/n/4UXsaz0hnWftilI4u3b8.svg" alt="Schedule" className="mr-3" /> Schedule
            </a>
            <a href="#calendar" className="flex items-center mb-5 text-9a9aa9">
                <img src="https://file.rendit.io/n/qZZWEBdQrpUOSdBAqEwg.svg" alt="Calendar" className="mr-3" /> Calendar
            </a>
            <a href="#notifications" className="flex items-center mb-5 text-9a9aa9">
                <img src="https://file.rendit.io/n/iwNBoZ7HSabibcAcvaAv.svg" alt="Notifications" className="mr-3" /> Notification
            </a>
            <a href="#settings" className="flex items-center text-9a9aa9">
                <img src="https://file.rendit.io/n/DDvo9yVG8GBepZolpVbu.svg" alt="Settings" className="mr-3" /> Settings
            </a>
        </nav>
    </aside>

    {/* Main content area */}
    <main className="flex-1 p-10">
        {/* Header */}
        <header className="flex justify-between items-center pb-12">
            <h1 className="text-2xl font-semibold">Upload CSV</h1>
            <div className="flex items-center">
                <img src="https://file.rendit.io/n/Hbit6pZaTh6ghDxDelk7.svg" alt="Notifications" className="mr-5" />
                <img src="https://file.rendit.io/n/05dhX5CgoAr1AaFbHIgE.svg" alt="User Profile" />
            </div>
        </header>

        {/* Upload Container */}
        <div className="flex justify-center items-center">
            <div className="p-6 border-2 border-dashed border-999ca0 rounded-lg bg-white w-full max-w-4xl">
                <div className="flex flex-col items-center">
                    <img src="https://file.rendit.io/n/ryTMpR2wlZ9lx83DBmfU.svg" alt="Excel File" className="mb-4" />
                    <p className="mb-6 text-lg text-999ca0">Drop your excel sheet here or browse</p>
                    <button className="bg-605bff text-white px-6 py-2 rounded">
                        <span className="flex items-center">
                            <img src="https://file.rendit.io/n/EhAiWA7tcMn7Sqyb9hwV.svg" alt="Upload" className="mr-2" />
                            Upload
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </main>
</div>