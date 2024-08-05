import React from 'react';
import Card from './Card'; // Adjust the import path as needed

const Portfolio = () => {
  const Projects = [
    {
      id: 1,
      Imgurl: 'src/assets/Catalog.png',
      Demourl: 'https://12anupa-baral.github.io/YoungInnovation_Frontend/',
      Githuburl: 'https://github.com/12anupa-baral/YoungInnovation_Frontend'
    },
    {
      id: 2,
      Imgurl: 'src/assets/Highstep.png',
      Demourl: 'https://12anupa-baral.github.io/Highstep_Clone/',
      Githuburl: 'https://github.com/12anupa-baral/Highstep_Clone'
    },
    {
      id: 3,
      Imgurl: 'src/assets/Reactdashboard.png',
      Demourl: 'https://react-dashboard-orpin.vercel.app/',
      Githuburl: 'https://github.com/12anupa-baral/React_dashboard'
      
    },
    {
      id: 4,
      Imgurl: 'src/assets/Catalog.png',
      Demourl: 'https://12anupa-baral.github.io/YoungInnovation_Frontend/',
      Githuburl: 'https://github.com/12anupa-baral/YoungInnovation_Frontend'
    },
    {
      id: 5,
      Imgurl: 'src/assets/Catalog.png',
      Demourl: 'https://12anupa-baral.github.io/YoungInnovation_Frontend/',
      Githuburl: 'https://github.com/12anupa-baral/YoungInnovation_Frontend'
    },
    {
      id: 6,
      Imgurl: 'src/assets/Catalog.png',
      Demourl: 'https://12anupa-baral.github.io/YoungInnovation_Frontend/',
      Githuburl: 'https://github.com/12anupa-baral/YoungInnovation_Frontend'
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="grid grid-cols-3 gap-5">
        {Projects.map((project) => (
          <Card 
            key={project.id} 
            Imgurl={project.Imgurl} 
            Demourl={project.Demourl} 
            Githuburl={project.Githuburl} 
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
