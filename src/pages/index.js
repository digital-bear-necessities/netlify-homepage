import React from 'react'
import { Container, Title, Columns, Column, Hero, HeroBody } from 'bloomer'

const Image = ({src, color, setBackground}) => <img
  src={src}
  style={{width: '200px', height: '200px'}}
  onMouseOver={() => setBackground(color)}
  onMouseOut={() => setBackground('white')}
/>

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.setBackground = this.setBackground.bind(this);

    // Set some state
    this.state = {
      color: 'white'
    };
  }

  setBackground(color) {
    this.setState({
      color: color
    });
  }

  // Render the child component and set the action property with the handler as value
  render() {
    return (
      <Hero isFullHeight style={{backgroundColor: this.state.color}}>
        <HeroBody>
          <Container hasTextAlign="centered">
            <Columns isCentered>
              <Column isSize='narrow'>
                <Image src="../brown-bear.svg" color='#88C5CC' setBackground={this.setBackground} />
              </Column>
              <Column isSize='narrow'>
                <Image src="../panda-bear.svg" color='#88C571' setBackground={this.setBackground} />
              </Column>
              <Column isSize='narrow'>
                <Image src="../polar-bear.svg" color='#B2E3FF' setBackground={this.setBackground} />
              </Column>
              <Column isSize='narrow'>
                <Image src="../koala-bear.svg" color='#F2CF61' setBackground={this.setBackground} />
              </Column>
            </Columns>
            <Title isSize="2">hello@bears.digital</Title>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}

export default IndexPage
