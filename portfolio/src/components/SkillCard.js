import styled from 'styled-components';

const SkillCard = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'lightTheme'
})`
  width: 400px;
  height: 280px;
  background: ${props => props.lightTheme ? 'rgba(248, 249, 250, 0.1)' : 'rgba(22, 22, 29, 0.1)'};
  border: 2px solid ${props => props.lightTheme ? 'rgba(108, 117, 125, 0.3)' : 'rgba(85, 85, 85, 0.3)'};
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform .5s;
  cursor: pointer;

  .border {
    display: none;
  }

  .bottom-text {
    display: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: transform .5s;
  }

  .skills-list {
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 24px;
    transition: transform .5s;
  }

  .card-title {
    color: ${props => props.lightTheme ? '#495057' : '#fff'};
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    font-family: monospace;
    text-shadow: ${props => props.lightTheme ? 'none' : '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'};
    transition: transform .5s;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform .5s;
    cursor: pointer;
    border-radius: 8px;
    background: transparent;
    padding: 8px;
    border: none;
  }

  &:hover {
    transform: translateZ(20px) rotateX(10deg) rotateY(10deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &:hover .content {
    transform: translateZ(30px);
  }

  &:hover .card-title {
    transform: translateZ(40px);
  }

  &:hover .skills-list {
    transform: translateZ(25px);
  }

  .skill-icon:hover {
    transform: translateZ(15px) rotateX(25deg) rotateY(25deg);
  }
`;

export default SkillCard;
