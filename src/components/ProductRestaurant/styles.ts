import styled from "styled-components";
import { colors } from "../../styles";


export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  margin-bottom: 48px;
  max-width: 474px;

`
export const ImageCard = styled.img`
  display: block;
  width: 100%;
  height: 251px;
  object-fit: cover;
`
export const Title = styled.h2`
font-weight: bold;
font-size: 18px;
color: ${colors.pink};
padding-left: 8px;
padding-top: 8px;
display:flex;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px;
  display: block;
  color: ${colors.pink};
`

export const Infos = styled.div`
  position: absolute;
  top:16px;
  right: 16px;
  display: flex;

`
export const Tag = styled.div`
  background-color: ${colors.pink};
  color: ${colors.beige};
  max-width: 100%;
  height: 26px;
  text-align: center;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin: 8px;
`
export const Note = styled.span`
  color: ${colors.pink};
  font-size: 20px;
  font-Weight: bold;
`

export const Star = styled.img`
  width: 20px;
  height: 20px;
  margin: 8px;
`
export const Details = styled.div`
  display: block;
  border: solid 1px ${colors.pink};
  border-top: none;
  div{
    display:flex;
    justify-content: space-between;
  }
`
export const Assessment = styled.div`
  display: flex;
  align-items: center;
  }
`
export const Button = styled.button`
background-color: ${colors.pink};
  color: ${colors.beige};
  max-width: 100%;
  height: 26px;
  text-align: center;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin: 8px;
  border:none;
  cursor: pointer;
`




