import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Grid } from "../components/Grid";

export const Starter = () => {
  return (
    <div className="features-section__wrapper">
      <div className="features-section__container">
        <Header />
        <Title />
        <Grid />
      </div>
    </div>
  );
};
