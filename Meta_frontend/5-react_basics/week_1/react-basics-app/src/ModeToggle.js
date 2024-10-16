function ModeToggler() {
    const darkModeOn = true;
    const darkMode = <div>Dark Mode is one.</div>
    const lightMode = <div>Light Mode is one.</div>

    const handleClick = () => {
        darkModeOn = !darkModeOn;
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Mode
            </button>
        </div>
    )
}

export default ModeToggler;