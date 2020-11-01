import React, { useEffect, useState } from 'react'
import { InputList } from '../../../components/listInput/listInput'
import { deleteKeyword, getKeywords, saveKeyword } from '../../../api/api'
import { IconTitle } from '../../../components/IconTitle/IconTitle'
import {PicRightOutlined} from '@ant-design/icons'
import { message } from 'antd'

export const KeywordSection = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getKeywords()
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [])

    const _handleKeywordAdd = word => {
        saveKeyword(word)
            .then(res => setData([...data, { id: res.data.id, word }]))
            .catch(e => message.error('Error while saving'))
    }

    const _handleKeywordClear = id => {
        deleteKeyword(id)
            .then(res => {
                const keywords = data;
                const index = keywords.findIndex(word => word.id === id)
                if(index !== -1) keywords.splice(index, 1)
                setData([...keywords])
            })
            .catch(e => message.error('Error while deleting'))
    }

    return (
        <div className='listInpt-divs d-flex flex-column' style={{height: '100%'}} >
            <IconTitle Icon={<PicRightOutlined style={{fontSize: 25, color: '#1890ff'}} />} withMargin >Keywords</IconTitle>

            <InputList placeholder='Enter yout keyword here (shoes)' listData={data} listLoading={loading} onAdd={_handleKeywordAdd} onClear={_handleKeywordClear} />
        </div>
    )
}