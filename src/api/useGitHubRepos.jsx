import { useEffect, useState } from "react";
import useGitHubReposCount from "./useGitHubReposCount";

const useGitHubRepos = (user) => {
    // const user = "yehonatal";
    const baseURL = `https://api.github.com/users/${user}/repos?page=`;
    const repoCount = useGitHubReposCount(user);
    const totalPages = Math.ceil(repoCount / 30);
    const [titleList, setTitleList] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const allTitles = [];
            for (let i = 1; i <= totalPages; i++) {
                const pageURL = baseURL + i;
                try {
                    const response = await fetch(pageURL);
                    const data = await response.json();
                    const titles = data.map((repo) => repo.name);
                    allTitles.push(...titles);
                } catch (error) {
                    console.error("Error fetching GitHub data:", error);
                }
            }
            setTitleList(allTitles);
        };

        fetchRepos();
    }, [user, baseURL, totalPages]);

    return titleList;
};

export default useGitHubRepos;
