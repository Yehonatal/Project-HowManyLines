import useGitHubRepos from "../api/useGitHubRepos";
import PropTypes from "prop-types";

const Title = ({ user }) => {
    const TitleList = useGitHubRepos(user);
    return (
        <section className=" mt-10 ">
            <h1 className="font-extrabold text-3xl underline">
                List of the Public Projects : {user}
            </h1>
            <div>
                <ul className="grid grid-cols-2  lg:grid-cols-3 lg:gap-4 gap-2 p-4">
                    {TitleList.map((title, index) => (
                        <li className=" list-decimal" key={index}>
                            <h1 className="font-extrabold">{title}</h1>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

Title.propTypes = {
    user: PropTypes.string.isRequired,
};

export default Title;
