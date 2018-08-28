import React from 'react';
import './Contact.css';
import FontAwesome from 'react-fontawesome';



const Contact=()=>{
	return(
		<div id='contact'>
			<h1 className='tc f1 pa1'>Contact</h1>
			<div className='tc center-column'> 
				<div className='flex flex-row no-wrap justify-between pa2 ma1'>
					<a href='#'><FontAwesome name='facebook' className='icons grow mh3 mv2 pa2' /> </a>
					<a href='#'><FontAwesome name='google' className='icons grow mh3 mv2 pa2' /> </a>
					<a href='#'><FontAwesome name='linkedin' className='icons grow mh3 mv2 pa2' /> </a>
					<a href='#'><FontAwesome name='github' className='icons grow mh3 mv2 pa2' /> </a>
				</div>
			
				<div className='w-80 w-50-l flex flex-column items-center pa2 ma1 tc shadow-5 grow br4 pattern'>
					<label  for='name' className='flex justify-start w-80 f3 mt2 mb0 '><span className='pl2'>Name:</span></label>
					<input className=' br4 pa3 mv2 w-80 ' type='text' placeholder='Enter your Name..' name='name' />
					
					<label for='email' className='flex justify-start w-80 f3 mt2 mb0'><span className='pl2'>Email:</span></label>
					<input className='br4 pa3 mv2 w-80' type='text' placeholder='Enter your email..' name='email' />
					
					<button className='pa3 ma3 br4 bg-dark-green bw2' type='submit'>Submit</button>

				</div>
			</div>
		</div>
		);
}
export default Contact;