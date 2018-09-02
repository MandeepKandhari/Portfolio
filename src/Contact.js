import React from 'react';
import './Contact.css';
import FontAwesome from 'react-fontawesome';



const Contact=()=>{
	return(
		<div id='contact'>
			<h1 className='tc f1 pa1'>Contact</h1>
			<div className='tc center-column'> 
				<div className='w-50 flex justify-around pa2 ma1'>
					<a href='https://www.facebook.com/profile.php?id=100000108468240' target="_blank"><FontAwesome name='facebook' className='icons grow mh1-l mh3 mv2 pa2' /> </a>
					<a href='https://www.linkedin.com/in/mandeep-kandhari-59b1bb112/' target="_blank"><FontAwesome name='linkedin' className='icons grow mh1-l mh3 mv2 pa2' /> </a>
					<a href='https://github.com/MandeepKandhari' target="_blank"><FontAwesome name='github' className='icons grow mh1-l mh3 mv2 pa2' /> </a>
				</div>
			
				<div className='w-90 w-50-l flex flex-column items-center pa2 ma1 tc shadow-5 grow br4 pattern'>
					<label  htmlFor='name' className='flex justify-start w-80 f3 mt2 mb0 '><span className='pl2'>Name:</span></label>
					<input className=' br4 pa3 mv2 w-80 ' type='text' placeholder='Enter your Name..' name='name' />
					
					<label htmlFor='email' className='flex justify-start w-80 f3 mt2 mb0'><span className='pl2'>Email:</span></label>
					<input className='br4 pa3 mv2 w-80' type='text' placeholder='Enter your email..' name='email' />
					
					<label htmlFor='message' className='flex justify-start w-80 f3 mt2 mb0'><span className='pl2'>Message:</span></label>
					<textarea className='br4 pa3 mv2 w-80' placeholder='Enter your message..' name='message'></textarea>
					
					<button className='pa3 ma3 br4 bg-black white' type='submit'>Submit</button>

				</div>
			</div>
		</div>
		);
}
export default Contact;