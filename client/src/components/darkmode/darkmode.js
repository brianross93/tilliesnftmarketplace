import React from 'react';
import './darkmode.css';

const DarkMode = () => {
  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'dark';
  const darkTheme = 'light';
  let theme;

  //if (localStorage) {
  //theme = localStorage.getItem('theme');
  //}

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      theme = darkTheme;
    }
  };

  return (
    <label class='switch'>
      <input
        type='checkbox'
        className={theme === 'light' ? clickedClass : ''}
        id='darkMode'
        onClick={(e) => switchTheme(e)}
      />
      <span class='slider round'></span>
    </label>
  );
};

export default DarkMode;
