import { useNavigate } from "react-router-dom";


const About = () => {
    const Navigate = useNavigate();
    const goToContact = () => {
        Navigate("/contact");
    }
    return (
        <>
        <section>
            <h1>About Page</h1>
            <button onClick={() =>goToContact()}>Contact us</button>
            <br />
            <button onClick={()=> {
            Navigate(-1);}
            }>Go Back</button>
        </section>
        </>
    );
};

export default About;