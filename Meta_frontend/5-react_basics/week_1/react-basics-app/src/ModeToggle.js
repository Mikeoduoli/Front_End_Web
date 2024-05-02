function ModeToggler() {
    const darkModeOn = true;
    const darkMode = <div>Dark Mode is one.</div>
    const lightMode = <div>Light Mode is one.</div>


    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
        </div>
    )
}

export default ModeToggler;