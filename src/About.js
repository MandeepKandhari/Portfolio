import React from 'react';
import './About.css';
import Profile from './Profile.jpg';

const About=()=>{
	return(
		<div className='pa3 flex flex-column items-center' id='about'>
			<h1 className='tc f1-l pa3-l ma3-l ma4-ns f3-ns'>About</h1>
			<div className='mh3 br4 grow bw2 dib tc w-80 w-70-l'>
				<img className='br-100 grow relative top-2 bottom-2 ' src={Profile} 
				alt='Photo' width={150} height={125} />
				<div className='br4 pa3 bg-green center'>
					<h1 className='mt4'>Mandeep Singh Kandhari</h1>
					<h3 >Front-End-Web developer</h3>
					<p className='tj about_para'>{`An innovative and competent Masters computer engineering student,  
									 dedicated to build user-centric, high-impact dynamic, high-speed websites.
				                     An enthusiastic computer geek focussed  about learning new state-of-the-art technologies
				                     and implementing them in the projects.`}</p> 
				</div>                     
 	 		</div>
			
			
		</div>


		);
}
export default About;