import React from 'react';

const Card = ({ Imgurl, Demourl, Githuburl, color, showLinks, height, padding, experience }) => {
  const paddingClass = padding ? 'p-10' : 'p-0';
  const experienceClass = experience ? 'flex justify-center' : 'flex-1';

  return (
    <div className={`bg-black shadow-sm ${color} text-white rounded-md ${paddingClass} ${experienceClass}`}>
      <img className={`rounded-sm ${height}`} src={Imgurl} alt="Project" />
      {showLinks && (
        <div className='flex justify-around p-4'>
          <a href={Demourl} target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={Githuburl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      )}
    </div>
  );
}

export default Card;
