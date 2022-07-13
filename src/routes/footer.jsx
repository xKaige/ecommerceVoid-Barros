import github from "../img/github.png";

function Footer(){
    return(
        <>
            <div className="container-fluid footer-bc ">
                <div className="row">
                    <div className="col-lg-12 col-sm-4">
                        <a href="#">
                            <img src={github} className="footer-img"/>
                        </a>
                        <p>All images remain property of their original owners. Site & code . Privacy Policy · Terms of Service© 2021 Company, Inc</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
