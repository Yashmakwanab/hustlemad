import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import "./card.css";
import "./flip-transition.css";

function Card1({ onClick }) {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row container-gap card flip-card" onClick={onClick}>
      <div className="flip-card-front dot card-front">
        <div className="flex flex-col">
          <ImageWrapper
            src={"/Images/aboutPage/anuragImage.webp"}
            className="person-image"
          />
          <p className="font-recoleta text-[#001636] text-center opacity-80 name-plate">
            Anurag Singh
          </p>
        </div>
      </div>
      <div className="flip-card-back dot2 card-back">
        <div className="relative">
          <div className="text-container bg-[#FFDCC8] mb-2">
            <p className="text-center text-[#001636] font-mazzardMedium description">
              Brand logo quiz winner. Loves music, football &
              motor-racing. Reach out to Anurag for all your crazy
              ideas, you will find the perfect audience in him.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-end justify-center">
                <ImageWrapper
                  src="/Images/aboutPage/twiter.webp"
                  alt="Twitter Logo"
                  className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                />
              </div>
              <div className="flex items-end justify-center">
                <ImageWrapper
                  src="/Images/aboutPage/mail.webp"
                  alt="Twitter Logo"
                  className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                />
              </div>
              <div className="flex items-end justify-center">
                <ImageWrapper
                  src="/Images/aboutPage/linkedin.webp"
                  alt="Twitter Logo"
                  className="w-[32px] h-[32px] lg:w-[40px] lg:h-[40px]"
                />
              </div>
            </div>
          </div>
          <p className="font-recoleta text-[#001636] text-center opacity-80 name-plate">
            Anurag Singh
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
