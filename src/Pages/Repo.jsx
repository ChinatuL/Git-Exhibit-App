import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import leftArrow from "../assets/Icons/LeftArrow.svg";
import language from "../assets/Icons/Language.svg";
import folder from "../assets/Icons/Folder.svg";
import fork from "../assets/Icons/Fork.svg";
import star from "../assets/Icons/Star.svg";

const Repo = () => {
    const [repo, setRepo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { reponame } = useParams();

    const repoUrl = `https://api.github.com/repos/ChinatuL/${reponame}`;
    const token = import.meta.env.VITE_GITHUB_TOKEN;

    const getRepo = async () => {
        const response = await fetch(repoUrl, {
            headers: {
                Authorization: `token ${token}`,
            },
        });
        const repo = await response.json();
        console.log(repo);
        setRepo(repo);
        setIsLoading(false);
    };

    useEffect(() => {
        getRepo();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main className='main'>
            <section className='repo__details flex-col'>
                <Link to='/' className='back-to-home flex-row'>
                    <img src={leftArrow} alt='' />
                    <span>Return to Home</span>
                </Link>
                <div>
                    <h1>{repo.name}</h1>
                    <p className='repo__details-desc'>{repo.description}</p>
                </div>
                <div className='repo__stats'>
                    <div className='repo__language'>
                        <img src={language} alt='' />
                        <p>{repo.language}</p>
                    </div>
                    <div className='repo__size'>
                        <img src={folder} alt='' />
                        <p>{repo.size} mb</p>
                    </div>
                    <div className='repo__forks'>
                        <img src={fork} alt='' />
                        <p>{repo.forks} forks</p>
                    </div>
                    <div className='repo__stars'>
                        <img src={star} alt='' />
                        <p>{repo.stargazers_count} stars</p>
                    </div>
                </div>
                <a
                    href={repo.html_url}
                    rel='noreferrer'
                    className='github__link'
                >
                    View on Github
                </a>
            </section>
        </main>
    );
};
export default Repo;
