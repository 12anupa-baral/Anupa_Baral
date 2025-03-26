import React from 'react';
import Card from './Card'; 

const Portfolio = () => {
  const Projects = [
    {
      id: 1,
      Imgurl: '/assets/Catalog.png',
      Demourl: 'https://12anupa-baral.github.io/YoungInnovation_Frontend/',
      Githuburl: 'https://github.com/12anupa-baral/YoungInnovation_Frontend'
    },
    {
      id: 2,
      Imgurl: '/assets/Highstep.png',
      Demourl: 'https://12anupa-baral.github.io/Highstep_Clone/',
      Githuburl: 'https://github.com/12anupa-baral/Highstep_Clone'
    },
    {
      id: 3,
      Imgurl: '/assets/Reactdashboard.png',
      Demourl: 'https://react-dashboard-orpin.vercel.app/',
      Githuburl: 'https://github.com/12anupa-baral/React_dashboard'

    },
    {
      id: 4,
      Imgurl: '/assets/Hackernews.png',
      Demourl: 'https://hacker-news-12anupa-barals-projects.vercel.app/',
      Githuburl: 'https://github.com/12anupa-baral/HackerNews'
    },
    {
      id: 5,
      Imgurl: '/assets/Sessami.png',
      Demourl: 'https://12anupa-baral.github.io/Sessami-website/',
      Githuburl: 'https://github.com/12anupa-baral/Sessami-website'
    },
    {
      id: 6,
      Imgurl: '/assets/Github.png',
      Demourl: 'https://12anupa-baral.github.io/Github_ui/',
      Githuburl: 'https://github.com/12anupa-baral/Github_ui'
    },
  ];

  return (
    <div className="text-white mt-10 ">
        <div className='mb-10'>
      <h2 className='underline text-3xl font-bold '>Portfolio</h2>
      <p>Check out some of my work right here</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {Projects.map((project) => (
          <Card 
            key={project.id} 
            Imgurl={project.Imgurl} 
            Demourl={project.Demourl} 
            Githuburl={project.Githuburl} 
            color='shadow-white'
            showLinks ={true}
            height='h-[250px]'
            padding={false}
            experience={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
