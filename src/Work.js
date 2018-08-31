import React from 'react';
import ECommerce from './ECommerce.PNG';
import Facedetection from './Facedetection.PNG';
//import './Work.css';

const Work=()=>{
	return(
		<div className='tc' id='work'>
			<h1 className='tc f1-l pa3-l ma3-l'>Work</h1>
			<div className='flex flex-wrap justify-around card-col'>
			<div className='flex flex-column items-center ma1-l ma2 pa2 shadow-5 grow card bw2 br3 w-30-l w-80 ba b--black'>
				<div className='h4 mb2'>
				<img className='br-2' src={ECommerce}
				 alt='web-Design-Development' width={250} height={150} />
				
			</div>
			<div>
				<h3>Voice Controlled E-Commerce Web Application</h3>
				<p className='tj'>A voice-controlled system embedded in a web application can enhance user experience and will provide voice as a means to control the functionality of e-commerce websites.</p>
			</div>
			</div>
			
			<div className='flex flex-column items-center ma1-l ma2 pa2 shadow-5 card grow bw2 br3 w-30-l w-80 ba b--black'>
				<div className='h4 mb2'>
					<img className='br-2' src={Facedetection} 
					alt='Data Analytics' width={250} height={150} />
				</div>
				<div>
					<h3>Face Detection Web Application</h3>
					<p className='tj'>face recognition web application that accepts image URLs as input, displays the images, and detects the human faces. A machine learning API “Clarifai” has been incorporated into the application, that is trained to detect human faces.</p>
				</div>
			</div>
			<div className='flex flex-column items-center ma1-l ma2 pa2 shadow-5 grow card bw2 br3 w-30-l w-80 ba b--black'>
				<div className=' h4 mb2'>
					<img className='br-2' src='http://www.doonexams.com/001/img/web-Design-Development.png' 
					alt='Web web-Design-Development'  width={250} height={150}/>
				</div>
				<div>
					<h3>Background Generator</h3>
					<p className='tj'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Mauris augue ipsum, tempus vel egestas et, sollicitudin sed ligula. 
					Vivamus sem neque, suscipit nec purus eget, vulputate semper libero.`} 
					 </p>
				
			</div>


				</div>
			</div>	

		</div>

		);
}
export default Work;