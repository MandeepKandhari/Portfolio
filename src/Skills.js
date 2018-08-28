import React from 'react';
//import './Skills.css';


const Skills=()=>{
	return(

		<div id='skills'>
			<h1 className='tc f1 pa3 ma3'>Skills</h1>

			<div className='center-row ma2 pa2 bw3 shadow-5 h-auto '>
				<img className='br-100 pa2 ma2 grow' src="https://openclipart.org/download/248484/387.svg" width={100} height={100} alt='Python' />
				<img className='br4 pa2 ma2 grow' src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" 
				width={100} height={100} alt='HTML5' />
				<img className='br-100 pa2 ma2 grow' src="https://d2rhekw5qr4gcj.cloudfront.net/img/400sqf/from/uploads/course_photos/3146044000171223182438.png" 
				width={100} height={100} alt='CSS3' />
				<img className='br-100 pa2 ma2 grow' src="https://briggo.com/wp-content/uploads/2016/03/js-logo.png" 
				width={100} height={100} alt='Javascript' />
				<img className='br-100 pa2 ma2 grow' src="https://cdn-ak.f.st-hatena.com/images/fotolife/o/opttechnologies2015/20160914/20160914142352.png" 
				width={100} height={100} alt='React' />
				<img className='br-100 pa2 ma2 grow' src="https://cdn.iconscout.com/public/images/icon/free/png-512/nodejs-logo-brand-development-tools-35bfe9b2ad24f37d-512x512.png" 
				width={100} height={100} alt='Nodejs' />
				<img className='br-100 pa2 ma2 grow' src="http://noghtechin.com/cms/wp-content/uploads/2017/07/mongodb-logo.png" 
				width={100} height={100} alt='MongoDB' />
				
			</div>


		</div>

		);
}
export default Skills;