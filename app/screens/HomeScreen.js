import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { Button } from 'react-native';

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    font-size: 20
`;

type State = {}

type Props = {}

class Home extends Component<Props, State> {

    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    render() {
        const { user, logout, navigation } = this.props
        return (
            <Container>
                <Text >Base</Text>
                <Button 
                title="Ir para Login"
                onPress={() => navigation.push('Login') }
                />
            </Container>
        );
    }
}
Home.navigationOptions = {
    title: 'Home tudo',//title page
}

export default connect(
    state => ({

    }),
    {}
)(Home)