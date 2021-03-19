function setDarkMode(isDark) {
	if(isDark) {
		document.body.setAttribute( 'id', 'darkmode')
		localStorage.setItem('theme', 'dark')
	} else {
		document.body.setAttribute('id', '')
		localStorage.removeItem('theme')
	}
}