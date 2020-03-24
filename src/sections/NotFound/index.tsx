import { Colors, Title } from '@components/global.styles';
import * as React from 'react';
import { Container } from './styles';

const NotFound = () => {
    return (
        <Container>
            <Title className='four-title' colors={Colors.pink}>404</Title>
            <Title className='four-not' colors={Colors.light_gray}>Not Found</Title>
        </Container>
    )
}

export default NotFound
