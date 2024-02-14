import { TitleList } from "../api/getReposList";
const Title = () => {
    return (
        <div>
            <ul>
                {TitleList.map((title, index) => (
                    <li key={index}>title</li>
                ))}
            </ul>
        </div>
    );
};

export default Title;
