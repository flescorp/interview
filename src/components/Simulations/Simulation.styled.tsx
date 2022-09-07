import styled from 'styled-components';
import BgSimulation from '@/assets/images/img-bg-banpick-simulation.png';

const SimulationContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BgSimulation.blurDataURL});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const SimulationLayout = styled.div`
  display: grid;
  grid-template-columns: 930px 300px;
  justify-content: space-between;
  width: 1260px;
  min-height: 1000px;
  margin: 0 auto;
  padding: 70px 0;
`;

const AdvertBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 31px;
`;

export { SimulationContainer, SimulationLayout, AdvertBox };
