import React from "react";
import "./intro.css";
import bg1 from "../../assets/bg1.png";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

// Import the PDF file
import myResumePDF from "../../assets/resume.pdf";

const Intro = () => {
    const handleDownloadPDF = () => {
        const link = document.createElement("a");
        link.href = myResumePDF;
        link.download = "Senuri_Resume.pdf"; // Specify the desired file name
        link.click();
    };

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText"> I'm <span className="introName">Senuri</span><br/><span style={{fontSize:'2rem'}}>Creative Designer</span></span>
                <p className="introPara">Welcome to my creative design portfolio! I'm passionate about turning <br/>ideas into visually captivating experiences.<br/> With a keen eye for aesthetics and a love for innovation,<br/> I bring unique and engaging concepts to life. <br/></p>
                <button className="btn" style={{ display: 'flex', alignItems: 'center' }} onClick={handleDownloadPDF}>
                    <FileDownloadIcon style={{ marginRight: '8px' }} />
                    Download my CV
                </button>
            </div>
            <div className="dp">
                <img src={bg1} alt="Portfolio" className="bg"/>
            </div>
        </section>
    );
}

export default Intro;
