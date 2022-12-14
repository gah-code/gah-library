import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
`;

// tagged template literal
// const Title = styled.h1`
//   text-align: center;
//   text-transform: capitalize;

//   color: ${({ special }) => special && 'red'};
// `;

export default Title;
