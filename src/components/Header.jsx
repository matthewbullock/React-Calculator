import React from 'react';
import { Link } from 'react-router-dom'
import {
  Grid,
  Header,
  Menu,
} from 'semantic-ui-react'

const AppHeader = () => (
  <Grid container style={{ padding: '5em 0em' }}>
    <Grid.Row>
      <Grid.Column>
        <Header as='h1' dividing>Tools</Header>
          <Menu>
            <Menu.Item as={Link} to='/'>
              Home
            </Menu.Item>
            <Menu.Item as={Link} to='/calculator'>
              Calculator
            </Menu.Item>
            <Menu.Item as={Link} to='/todo'>
              ToDo List
            </Menu.Item>
          </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default AppHeader;
