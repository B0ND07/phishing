import "./SecondaryBody.css";
import BackgroundShape from "../../assets/BackgroundShape.svg";

export function SecondaryBody() {
  return (
    <>
      <div className="relative">
        <img src={BackgroundShape} alt="BackgroundImage" className="mt-1 w-full max-sm:h-72 sm:max-lg:h-80 lg:h-96" />
        <p className="text-white font-semibold text-roboto text-center absolute max-sm:top-12 top-16 lg:top-24 text-2xl
        min-[350px]:left-[27%] min-[400px]:left-[33%] min-[520px]:left-[38%] md:left-[40%] lg:left-[42%]
        min-[350px]:text-xl lg:text-3xl">
          How does it Work ?
        </p>
        <p className="absolute text-roboto text-white font-light text-center
         max-sm:text-xs sm:text-sm md:text-base lg:text-lg max-sm:top-20 top-24 lg:top-36 max-md:mx-7 md:mx-14 lg:mx-20">
          Phishing is a type of online fraud in which criminals use email, text messages, advertisements, or other means to impersonate legitimate organizations in order to steal confidential information. It usually involves inserting a link that seemingly takes you to the company's website, where you can enter your information - however, the website is a sophisticated fake, and the information you enter is directly forwarded to the fraudsters behind the scam. To detect the malicious websites as efficiently as possible, we use a machine learning method called artificial neural network trained on a dataset of 600,000 legitimate and malicious URLs.
          
          <br/> <br/>
         
        </p>
      </div>
    </>
  );
}
