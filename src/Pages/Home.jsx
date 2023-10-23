import { useState, useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Loading, Pagination, Navbar } from "../Components"
import people from "../assets/Icons/People.svg";
import locationIcon from "../assets/Icons/Location.svg";
import email from "../assets/Icons/Email.svg";
import twitter from "../assets/Icons/Twitter.svg";
import repo from "../assets/Icons/Repo.svg";
import repoLink from "../assets/Icons/Link.svg";

const userUrl = "https://api.github.com/users/chinatul";
const repoUrl = "https://api.github.com/users/ChinatuL/repos?per_page=250";
const token = import.meta.env.VITE_GITHUB_TOKEN;

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();

    const getUser = async () => {
        const response = await fetch(userUrl, {
            headers: {
                Authorization: `token ${token}`,
            },
        });
        const user = await response.json();
        setUser(user);
        setIsLoading(false);
    };

    const getRepos = async () => {
        const response = await fetch(repoUrl, {
            headers: {
                Authorization: `token ${token}`,
            },
        });
        const repos = await response.json();
        setRepos(repos);
        setIsLoading(false);
    };

    useEffect(() => {
        getUser();
        getRepos();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    const reposPerPage = 10;
    const lastRepoIndex = currentPage * reposPerPage;
    const firstRepoIndex = lastRepoIndex - reposPerPage;
    const currentRepos = repos.slice(firstRepoIndex, lastRepoIndex);
    const numberOfPages = Math.ceil(repos.length / reposPerPage);

    return (
        <div>
            <Helmet>
                <title>Home | Git-Exhibit</title>
                <meta
                    name='description'
                    content='The home page of the Git-Exhibit app, an app that fetches data from the GitHub API and displays it in a user-friendly way.'
                />
                <link rel='canonical' href='/home' />
            </Helmet>
            <Navbar />
            {location.pathname === "/" ? (
                <main className='main flex-col'>
                    <section className='profile flex-row'>
                        <div className='flex-row intro'>
                            <div className='profile__img'>
                                <img src={user.avatar_url} alt='avatar' />
                                <div className='flex-col'>
                                    <h1 className='profile__fullname'>
                                        {user.name}
                                    </h1>
                                    <p className='profile__username'>
                                        {user.login}
                                    </p>
                                    <p className='profile__bio'>{user.bio}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex-row intro2'>
                            <div className='profile__followers'>
                                <img src={people} alt='' />
                                <p>{user.followers} followers</p>
                            </div>
                            <div className='profile__following'>
                                <img src={people} alt='' />
                                <p>{user.following} following</p>
                            </div>
                            <div className='profile__location'>
                                <img src={locationIcon} alt='' />
                                <p>{user.location}</p>
                            </div>
                            <div className='profile__email'>
                                <img src={email} alt='' />
                                <p>{user.email}</p>
                            </div>
                            <div className='profile__twitter'>
                                <img src={twitter} alt='' />
                                <p>@{user.twitter_username}</p>
                            </div>
                            <div className='profile__repos'>
                                <img src={repo} alt='' />
                                <p>{user.public_repos} Repositories</p>
                            </div>
                        </div>
                    </section>
                    <section className='repos'>
                        <h2 className='repos__heading'>Repositories</h2>
                        <div className='repos__list'>
                            {currentRepos.map((repo) => {
                                return (
                                    <Link
                                        className='repo'
                                        to={`repo/${repo.name}`}
                                        key={repo.id}
                                    >
                                        <article className='flex-col'>
                                            <div className='flex-row badges'>
                                                <span>{repo.visibility}</span>
                                                <img src={repoLink} alt='' />
                                            </div>
                                            <div className='flex-col'>
                                                <h3 className='repo__title'>
                                                    {repo.name}
                                                </h3>
                                                <p className='repo__description'>
                                                    {repo.description}
                                                </p>
                                            </div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            numberOfPages={numberOfPages}
                        />
                    </section>
                </main>
            ) : (
                <Outlet />
            )}
        </div>
    );
};
export default Home;
