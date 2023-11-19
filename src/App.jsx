import Header from "./component/Header";
import Search from "./component/Search";
function App() {
    return (
        <>
            <main className="relative -z-10">
                <Header />
                <br />
                <Search />
            </main>
            <div className="absolute flex gap-10 opacity-[0.25] flex-wrap items-center justify-center bg-red-400 z-0  top-0 left-0 right-0 bottom-0 select-none"></div>
            <div className="absolute flex gap-10 flex-wrap items-center justify-center z-50  top-0 left-0 right-0 bottom-0 select-none">
                <div className="scale-[5]">🏗️</div>
                <h1 className="text-orange-300 z-20 font-extrabold text-4xl">
                    UNDER DEVELOPMENT . . .
                </h1>
            </div>
        </>
    );
}

export default App;
