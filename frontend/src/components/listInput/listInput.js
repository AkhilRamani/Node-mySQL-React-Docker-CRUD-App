import React, { useState } from 'react'
import { List, Button, Input} from 'antd';
import {MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons'
import './listInput.style.scss'

export const InputList = ({placeholder, listData, onAdd, onClear, listLoading}) => {
    const [text, setText] = useState('')

    const _handleChnage = e => setText(e.target.value)
    const _handleOnAdd = () => {
        onAdd(text)
        setText('')
    }

    return (
        <div className='lst-inpt d-flex g-ovrflow-auto' >
            <div className='inpt-div g-bdr-btm' >
                <Input className='input'
                    value={text}
                    onChange={_handleChnage}
                    placeholder={placeholder}
                    addonAfter={<Button
                            icon={<PlusCircleOutlined />}
                            loading={false}
                            type='primary'
                            onClick={_handleOnAdd} 
                        >ADD
                        </Button>}
                />
            </div>

            <List
                className='list'
                dataSource={listData}
                loading={listLoading}
                
                renderItem={item => (
                    <List.Item
                        actions={[<Button icon={<MinusCircleOutlined />} type='ghost' onClick={() => onClear(item.id)} >Clear</Button>]}
                    >
                        {item.word || item.site}
                    </List.Item>
                )}
            />
        </div>
    )
}