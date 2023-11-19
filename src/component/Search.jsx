import SearchIcon from "../assets/icon-search.svg";
import "../index.css";

const Search = () => {
    return (
        <div className="px-2 bg-[#4d4d4d2c] border-[#4d4d4d2c] w-full flex gap-2 md:gap-4 items-center border-2 py-2 rounded-md ">
            <div>
                <img src={SearchIcon} alt="The search Icon" />
            </div>
            <form
                className="flex gap-2 items-center flex-1"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    className="px-2 rounded-md bg-transparent font-bold flex-1 text-lg focus:outline-none"
                    type="text"
                    placeholder="Search Github Username . . . "
                />

                <input
                    className="bg-[#213547] text-white px-4 py-1 rounded-md font-bold"
                    type="submit"
                    value="Search"
                />
            </form>
        </div>
    );
};

export default Search;
