import React from 'react'
import {Layout, Row, Col} from 'antd'
import './home.style.scss'
import { KeywordSection } from './sections/keywordSection'
import { SettingSection } from './sections/settingSection'
import { SiteSection } from './sections/siteSection'

const {Header, Content} = Layout

export const HomePage = () => {
    return (
        <>
            <Layout className='ph' >
                <Header>Google Adwords Configurator</Header>

                <Content style={{padding: '0px 30px'}}>
                    <Row style={{height: '100%'}} >
                        <Col className='col' span={6} >
                            <KeywordSection />
                        </Col>
                        <Col className='col' span={7} >
                            <SiteSection />
                        </Col>
                        <Col className='col' span={11} >
                            <SettingSection />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}