import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { StyledDiv } from "./styles";

interface IProps {
  starsValue: number;
  starsSize: number;
}

const Stars: React.FC<IProps> = ({ starsValue, starsSize }) => {
  const getStars = () => {
    const toRenderStars: React.ReactNode[] = [];
    const stars = starsValue.toString().split(".");

    for (let index = 0; index < +stars[0]; index++) {
      toRenderStars.push(<BsStarFill size={starsSize} />);
    }

    if (+stars[1] > 0) toRenderStars.push(<BsStarHalf size={starsSize} />);

    if (toRenderStars.length < 5) {
      for (let index = 0; toRenderStars.length < 5; index++) {
        toRenderStars.push(<BsStar size={starsSize} />);
      }
    }

    return toRenderStars;
  };

  return (
    <StyledDiv>
      {getStars().map((el) => el)}
      <span>{starsValue.toFixed(1)}</span>
    </StyledDiv>
  );
};

export default Stars;
