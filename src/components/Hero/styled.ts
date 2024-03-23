import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0.75rem 0 0.75rem 0;
  width: 100%;
  margin: 0 auto;
`

export const Bg = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  min-height: 500px;

  @media only screen and (max-width: 768px){
    min-height: 600px;
  }
`

export const Heading = styled.h1`
  font-size: calc(2.5rem + 0.6vw);
  position: absolute;
  letter-spacing: 1px;
  font-weight: 200;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Subheading = styled.h2`
  text-align: center;
  padding-top: 1rem;
  font-size: calc(0.75rem + 0.6vw);
  position: absolute;
  letter-spacing: 1px;
  font-weight: 200;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`
