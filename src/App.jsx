import HubIcon from "./assets/github-icon.png";
function App() {
    return (
        <>
            <div className="flex items-center gap-4">
                <div className="p-[2px] bg-[#213547] shadow-lg rounded-md">
                    <img
                        className="w-10 shadow-lg"
                        src={HubIcon}
                        alt="Github icon"
                    />
                </div>
                <h1 className="text-3xl font-extrabold">OtherMe V2</h1>
            </div>
        </>
    );
}

export default App;
