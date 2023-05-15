import me1 from "../images/me1.jpg";
import me2 from "../images/me2.jpg";
import me3 from "../images/me3.jpg";
import me4 from "../images/me4.jpg";
import me5 from "../images/me5.jpg";
import me6 from "../images/me6.jpg";

import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect} from "react";
import resume from "../pages/about/CV - Daria Hertsun.pdf";

const meArr = [me2, me1, me3, me5, me6, me4];

const AboutMe = ({name, email, location, availability, brand}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);
  const [imageClassName, setImageClassName] = useState("about-picture-front");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageClassName("about-picture-front about-picture-front--invisible")
      const timer2 = setTimeout(() => {
        setImageClassName("about-picture-front")
        setCurrentImgIndex(prevState => meArr.length === prevState + 1 ? 0 : prevState + 1)
      }, 700);
      return () => {clearInterval(timer2);}
    }, 3000);
    return () => {clearInterval(timer);}
  });

  let aboutMeImg = meArr[currentImgIndex];

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "CV - Daria Hertsun.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{
            x: "-10vw",
            opacity: 0
          }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img className={imageClassName} src={aboutMeImg} alt={name}/>
        </motion.div>
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{
            x: "10vw",
            opacity: 0
          }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Nice to meet you</h4>
            <h5>Software engineer who creates amazing digital experiences!</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>Daria Hertsun</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download Resume"}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
