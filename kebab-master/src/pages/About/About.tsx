import React, { FC } from 'react';

interface AboutProps {}

const About: FC<AboutProps> = () => (
 <div id='about' data-testid="About">
    <h2>About Us</h2>
    <p>The Kebab Master Mission is to bring quality kebabs to everyone and find me reason to live </p>
 </div>
);

export default About;
