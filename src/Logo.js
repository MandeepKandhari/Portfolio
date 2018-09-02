import React from 'react';
import Logos from './Logos.png';
import './Logo.css';
import FontAwesome from 'react-fontawesome';
const Logo=()=>
	{
	return(
		<div className='ma0 pa0 shadow-5 bw3 flex justify-between'>
			<div className='mh2 mt3 grow'>
				<img className='br-100  pv2  ml4-l ml3-ns pointer' src={Logos} 
				width={80} height={80} alt='logo' />
			</div>
			
				<nav className=' mt4-l mr2 dropdown '>
					<FontAwesome name='bars' className='dib dropbtn  mt2 pa2' />
					<ul className='pa2-l pa0 ma2 tc f3 br2 dropdown-content list'>
						<li><a href='#about'>About</a></li>
						<li><a href='#work'>Work</a></li>
						<li><a href='#skills'>Skills</a></li>
						<li><a href='#contact'>Contact</a></li>
					</ul>
				</nav>
			</div>
		);
	}
export default Logo;