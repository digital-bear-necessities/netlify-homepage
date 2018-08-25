import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column >
            <p>
              Made with<Icon hasTextColor="danger" className="fa fa-heart" />
              by <a href="https://bears.digital">bears.digital</a>
            </p>
          </Column>
        </Columns>
        <Content isSize="small">
          <p>
            &copy; Digital Bear Necessities Ltd. Registered company: 11531108.
          </p>
          <p>
            The source code is licensed under <a target="_blank">MIT</a>.
          </p>
          <p>
            The website content is <a target="_blank">Copyright &copy; 2018 Digital Bear Necessities Ltd.</a>.
          </p>
        </Content>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
