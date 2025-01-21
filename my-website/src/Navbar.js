import './Navbar.css';

function Navbar() {
    return (
        <div class="title">
            <div>
                <header>Alex Huynh</header>
            </div>
            <div class="navigation">
                <NavBarButton id={"aboutPageButton"} purpose={"About"}/>
                <NavBarButton id={"projectHBPageButton"} purpose={"Project HB"}/>
                <NavBarButton id={"otherProjectPageButton"} purpose={"Other Projects"}/>
            </div>
        </div>
    )
}

function NavBarButton({id, purpose}) {
    return (
        <div id={id}>{purpose}</div>
    )
}

export default Navbar;