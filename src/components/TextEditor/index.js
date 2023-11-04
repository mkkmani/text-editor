import {Component} from 'react'
import {BsTypeBold, BsTypeItalic, BsTypeUnderline} from 'react-icons/bs'
import {
  Container,
  Card,
  ImageContainer,
  Heading,
  Image,
  EditorContainer,
  EditOptionsBox,
  EditButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textInput: '',
    bold: false,
    italic: false,
    underLine: false,
  }

  onClickBold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  onClickItalic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  onClickUnderLine = () => {
    this.setState(prev => ({underLine: !prev.underLine}))
  }

  onChangeInput = e => {
    this.setState({textInput: e.target.value})
  }

  renderTextEditor = () => {
    const {textInput, bold, italic, underLine} = this.state

    const boldBtnColor = bold ? '#faff00' : '#f1f5f9'
    const italicBtnColor = italic ? '#faff00' : '#f1f5f9'
    const underlineBtnColor = underLine ? '#faff00' : '#f1f5f9'

    const weight = bold ? 'bold' : 'normal'
    const style = italic ? 'italic' : 'normal'
    const decoration = underLine ? 'underline' : 'normal'

    return (
      <Container>
        <Card>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <EditorContainer>
            <EditOptionsBox>
              <li>
                <EditButton
                  data-testid="bold"
                  color={boldBtnColor}
                  onClick={this.onClickBold}
                >
                  <BsTypeBold />
                </EditButton>
              </li>
              <li>
                <EditButton
                  data-testid="italic"
                  color={italicBtnColor}
                  onClick={this.onClickItalic}
                >
                  <BsTypeItalic />
                </EditButton>
              </li>
              <li>
                <EditButton
                  data-testid="underline"
                  color={underlineBtnColor}
                  onClick={this.onClickUnderLine}
                >
                  <BsTypeUnderline />
                </EditButton>
              </li>
            </EditOptionsBox>
            <TextArea
              weight={weight}
              fontStyle={style}
              decoration={decoration}
              onChange={this.onChangeInput}
              value={textInput}
            >
              {textInput}
            </TextArea>
          </EditorContainer>
        </Card>
      </Container>
    )
  }

  render() {
    return this.renderTextEditor()
  }
}

export default TextEditor
