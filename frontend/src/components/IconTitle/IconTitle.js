import React from 'react'
import { Typography } from 'antd'
import './iconTitle.style.scss'

export const IconTitle = ({ children, Icon, withMargin }) => (
    <div className='d-flex align-center icon-title' style={{marginBottom: withMargin ? 20 : 0}} >
        {Icon}
        <Typography.Title level={4} >{children}</Typography.Title>
    </div>
)