function ModeToggler() {
    let darkModeOn = true;
    const darkMode = <div>Dark Mode is one.</div>
    const lightMode = <div>Light Mode is one.</div>

    const handleClick = () => {
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
            console.log("Dark Mode is on!");
        } else {
            console.log("Light Mode is on");
        }
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