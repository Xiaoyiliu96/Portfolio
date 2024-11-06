const dropdownLinks = document.querySelectorAll('.dropdown-content a');
const dropbtn = document.querySelector('.dropbtn');

	
	function handleHover()
	{
		dropbtn.style.color = 'orange';
		this.style.color = 'orange';     
	}


	function handleMouseOut() 
	{
		dropbtn.style.color = '';  
		this.style.color = '';     
	}


	dropdownLinks.forEach(link => 
	{
		link.addEventListener('mouseover', handleHover);
		link.addEventListener('mouseout', handleMouseOut);
	});



