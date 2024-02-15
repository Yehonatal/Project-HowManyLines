import { useState } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Title from "./component/Title";
function App() {
    const [user, setUser] = useState("");
    return (
        <>
            <main className="">
                <Header />
                <br />
                <Search setUser={setUser} />
                <br />
                <Title user={user} />
            </main>
        </>
    );
}

export default App;
