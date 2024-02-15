import { useEffect, useState } from "react";

const useGitHubReposCount = (user) => {
    const URL = `https://api.github.com/users/${user}`;
    const [repoCount, setRepoCount] = useState(0);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setRepoCount(data.public_repos);
            })
            .catch((error) => {
                console.error("Error fetching GitHub data:", error);
            });
    }, [URL, user]);

    return repoCount;
};

export default useGitHubReposCount;
