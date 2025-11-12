import '../App.css'
function Nike(){
    return(
        <div >
            <nav>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5eFtuYgX33AuaSyBieaT4K_nuahtyHyiavA&s" alt="logo"  className="nike-logo"/>
                </div>
                <div>
                    <ul>
                        <li href="#">Menu</li>
                        <li href="#">Location</li>
                        <li href="#">About</li>
                        <li href="#">Contact</li>
                    </ul>
                </div>
                <div>
                    <button className='navbar-button'>login</button>
                </div>
            </nav>

        </div>
    )
}
export default Nike;