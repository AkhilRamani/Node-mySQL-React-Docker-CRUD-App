import React, { useEffect, useState } from 'react'
import {message} from 'antd'
import { InputList } from '../../../components/listInput/listInput'
import { deleteSite, getSites, saveSite } from '../../../api/api'
import { IconTitle } from '../../../components/IconTitle/IconTitle'
import {DesktopOutlined} from '@ant-design/icons'

export const SiteSection = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSites()
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [])

    const _handleSiteAdd = site => {
        saveSite(site)
            .then(res => setData([...data, { id: res.data.id, site }]))
            .catch(e => message.error('Error while deleting'))
    }

    const _handleSiteClear = id => {
        deleteSite(id)
            .then(res => {
                const sites = data;
                const index = sites.findIndex(site => site.id === id)
                if(index !== -1) sites.splice(index, 1)
                setData([...sites])
            })
            .catch(e => message.error('Error while deleting'))
    }

    return (
        <div className='d-flex flex-column' style={{height: '100%'}}>
            <IconTitle Icon={<DesktopOutlined style={{fontSize: 25, color: '#51d74f'}}/>} withMargin >Sites</IconTitle>

            <InputList placeholder='Enter your site here' listData={data} listLoading={loading} onAdd={_handleSiteAdd} onClear={_handleSiteClear} />
        </div>
    )
}