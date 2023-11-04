import styled from 'styled-components'

export const Container = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  display: flex;
  padding: 10px;
  background-color: #1b1c22;
  height: 80%;
  width: 80%;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 50%;
`
export const Heading = styled.h1`
  color: #f8fafc;
  margin-top: 20px;
`
export const Image = styled.img`
  height: 50%;
  width: 50%;
  margin-top: 40px;
`
export const EditorContainer = styled.div`
  width: 50%;
  height: 96%;
  background-color: #25262c;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
`
export const EditOptionsBox = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #cbd5e1;
  height: 40px;
`
export const EditButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 3px;
  color: ${props => props.color};
  font-size: 18px;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 96%;
  color: white;
  background: none;
  border: none;
  outline: none;
  padding: 20px;
  font-size: 18px;
  font-weight: ${props => props.weight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.decoration};
`
