const CodingProfiles = () => {
    return (
        <div className="bg-navy-dark min-h-screen pt-20">
            <div className="text-center mt-12">
                <h1 className="text-5xl font-bold text-sunny-yellow">CODING PROFILES</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 mt-20 mb-8">

                    <div className="bg-custom-gray rounded-lg shadow-lg p-6 space-y-4 transition-transform duration-200 hover:bg-sunny-yellow hover:scale-105 hover:shadow-xl">
                        <a href="https://www.geeksforgeeks.org/user/ps7701124/" target="_blank" rel="noopener noreferrer">
                            <img src='./icons8-geeksforgeeks-48.png' alt="Geeks for Geeks" className="mx-auto" />
                        </a>
                        <h2 className="text-xl font-bold text-navy-dark">Geeks for Geeks</h2>
                        <div className="flex justify-center space-x-4">
                            <img src="./icons8-c++-48.png" alt="C++" />
                            <img src="./icons8-c-programming-48.png" alt="C" />
                        </div>
                        <p className="text-gray-500">Invalid Date - Present</p>
                        <p>Solve 330+ problems on DSA using C++ and C.</p>
                    </div>

                    <div className="bg-custom-gray rounded-lg shadow-lg p-6 space-y-4 transition-transform duration-200 hover:bg-sunny-yellow hover:scale-105 hover:shadow-xl">
                        <a href="https://www.hackerrank.com/profile/ps7701124" target="_blank" rel="noopener noreferrer">
                            <img src="./hackerrank-icon.png" alt="HackerRank" className="mx-auto w-12 h-12" />
                        </a>
                        <h2 className="text-xl font-bold text-navy-dark">HackerRank</h2>
                        <div className="flex justify-center space-x-4">
                            <img src="./icons8-c++-48.png" alt="C++" />
                            <img src="./icons8-mysql-48.png" alt="MySQL" />
                            <img src="./icons8-c-programming-48.png" alt="C Programming" />
                        </div>
                        <p className="text-gray-500">Invalid Date - Present</p>
                        <p>Solve 200+ problems on DSA using C++ and C, and MySQL problems. Earn badges and certificates.</p>
                    </div>

                    <div className="bg-custom-gray rounded-lg shadow-lg p-6 space-y-4 transition-transform duration-200 hover:bg-sunny-yellow hover:scale-105 hover:shadow-xl">
                        <a href="https://leetcode.com/priya1121/" target="_blank" rel="noopener noreferrer">
                            <img src="./icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png" alt="Level Up Coding" className="mx-auto" />
                        </a>
                        <h2 className="text-xl font-bold text-navy-dark">Leetcode</h2>
                        <div className="flex justify-center items-center space-x-4">
                            <img src="./icons8-c++-48.png" alt="C++" />
                            <img src="./icons8-mysql-48.png" alt="MySQL" />
                        </div>
                        <p className="text-gray-500">Invalid Date - Present</p>
                        <p>Solve 200+ problems on DSA using C++. Earn badges and also solve problems of MySQL.</p>
                    </div>

                    <div className="bg-custom-gray rounded-lg shadow-lg p-6 space-y-4 transition-transform duration-200 hover:bg-sunny-yellow hover:scale-105 hover:shadow-xl">
                        <a href="https://github.com/PRIYA1102S" target="_blank" rel="noopener noreferrer">
                            <img src="./icons8-github-64.png" alt="GitHub" className="mx-auto w-12 h-12" />
                        </a>
                        <h2 className="text-xl font-bold text-navy-dark">Github</h2>
                        <div className="flex justify-center space-x-4">
                            <img src="./icons8-css3-48.png" alt="CSS3" />
                            <img src="./icons8-html-5-48.png" alt="HTML5" />
                            <img src="./icons8-javascript-48.png" alt="JavaScript" />
                            <img src="./icons8-react-16.png" alt="React" />
                        </div>
                        <p className="text-gray-500">Invalid Date - Present</p>
                        <p>Learned about git and GitHub commands, cloning repositories, making pull requests, and maintaining good repositories for contributions.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CodingProfiles;
