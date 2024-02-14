import Header from "./component/Header";
import Search from "./component/Search";
import Title from "./component/Title";
function App() {
    return (
        <>
            <main className="relative -z-10">
                <Header />
                <br />
                <Search />
                <br />
                <Title />
            </main>
            <div className="absolute flex gap-10 opacity-[0.25] flex-wrap items-center justify-center bg-red-400 z-0  top-0 left-0 right-0 bottom-0 select-none"></div>
        </>
    );
}

export default App;
