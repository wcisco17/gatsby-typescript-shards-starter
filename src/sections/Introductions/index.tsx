import Button from '@components/Button';
import { Colors, Text, Title } from '@components/global.styles';
import * as React from 'react';
import { Fragment } from 'react';
import { Row } from 'shards-react';
import { Containe, Content } from './styles';

interface IntroductionProps {
    name: string;
}

const Introduction: React.FC<IntroductionProps> = ({ name }) => {
    return (
        <Fragment>
            <Containe >
                <Row>
                    <Content>
                        <Text style={{ fontSize: '20px' }} colors={Colors.pink} >
                            Hey! My name is
            </Text>
                        <Title className='op1 big-text' style={{ marginTop: '2rem', }} colors={Colors.gray} >
                            {name}.
            </Title>
                        <Title className='big-text' style={{ marginTop: '3rem', marginBottom: '3rem', opacity: 0.7 }} colors={Colors.light_gray} >
                            I build things for the web.
            </Title>
                        <Text
                            className='small-text' colors={Colors.gray} >
                            Full stack Web developer based in Gatsby,
                            I specialise in designing, building Performant web apps and
                            apps.
                                </Text>
                        <br />
                        <div className="content-button01">
                            <Button
                                title="Check out my Github"
                                classes='btn01'
                                size='lg'
                                onClick={() => window.open('https://github.com/wcisco17/')}
                            />
                        </div>
                    </Content>
                </Row>
            </Containe>
        </Fragment >
    )
}

export default Introduction
