import React from 'react'
import { Container, Title, Columns, Column, Hero, HeroBody } from 'bloomer'

const Image = ({src, color, setBackground}) => <img
  src={src}
  style={{width: '200px', height: '200px'}}
  onMouseOver={() => setBackground(color)}
/>

class IndexPage extends React.Component {
  halfBaked;
  mantis;
  anakiwa;
  creamCan;

  constructor(props) {
    super(props);

    this.setBackground = this.setBackground.bind(this);
    this.colors = [this.halfBaked, this.mantis, this.anakiwa, this.creamCan] = ['#88C5CC', '#88C571', '#B2E3FF', '#F2CF61'];

    // Set some state
    this.state = {
      color: this.getRandomColor()
    };
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
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
                <Image src="../brown-bear.svg" color={this.halfBaked} setBackground={this.setBackground} />
              </Column>
              <Column isSize='narrow'>
                <Image src="../panda-bear.svg" color={this.mantis} setBackground={this.setBackground} />
              </Column>
              <Column isSize='narrow'>
                <Image src="../polar-bear.svg" color={this.anakiwa} setBackground={this.setBackground} />
              </Column>
              <Column isSize='narrow'>
                <Image src="../koala-bear.svg" color={this.creamCan} setBackground={this.setBackground} />
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
