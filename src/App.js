import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Daria Hertsun",
    location: "Warsaw, Poland",
    email: "hertsunday@gmail.com",
    availability: "Open for work",
    brand: "As a Frontend React Developer, I strive to create intuitive and captivating digital experiences that leave a lasting impression. With a passion for combining technical excellence with creative flair, I am dedicated to delivering top-quality products that exceed client expectations. My keen eye for design, coupled with my expertise in the latest front-end technologies, allows me to transform complex concepts into stunning web applications. Let's work together to bring your vision to life!"
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;