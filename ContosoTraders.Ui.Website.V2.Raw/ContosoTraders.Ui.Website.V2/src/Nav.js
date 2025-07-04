import About from "./About";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Contoso Traders</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" link={About}>About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )

    // Enable Bootstrap navbar toggling for mobile 
    document.addEventListener("DOMContentLoaded", function () {
        var toggler = document.querySelector('.navbar-toggler');
        var navCollapse = document.getElementById('navbarNav');
        if (toggler && navCollapse) {
            toggler.addEventListener('click', function () {
                navCollapse.classList.toggle('show');
            });
        }
    });
}

export default Nav;