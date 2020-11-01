import React, {useEffect, useState} from 'react'
import {message} from 'antd'
import {Settings} from '../../../components/settings/settings'
import {IconTitle} from '../../../components/IconTitle/IconTitle'
import { SettingOutlined } from '@ant-design/icons'
import {getSettings, saveSettings, updateSetting} from '../../../api/api'

export const SettingSection = () => {

    const [settings, setSettings] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchSetting = () => {
        getSettings()
            .then(res => {
                if (!res.data) {
                    saveSettings({chrome: 0})
                        .then(res => setSettings({id: res.data.id}))
                        .catch(e => console.log(e))
                }
                else setSettings(res.data)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }

    useEffect(fetchSetting, [])

    const _handleSaveClick = (settingFormData) => {
        const { id } = settingFormData
        delete settingFormData.id

        updateSetting(id, settingFormData)
            .then(res => message.success('New settings saved!'))
            .catch(res => message.error('Error while saving!'))
    }

    const _handleStopclick = () => message.info('Stop button clicked.')

    return (
        <div className='d-flex' style={{ flexDirection: 'column', height: '100%' }}>
            {/* <div className='setting-title-div d-flex align-center flex-row' style={{ marginBottom: 16 }} > */}
                <IconTitle Icon={<SettingOutlined style={{fontSize: 25, color: '#fbd54d'}} />} withMargin >Settings</IconTitle>
                {/* <Button className='border-radius g-btn' type='primary' htmlType='submit' danger onClick={_handleSaveClick} >SAVE</Button>
            </div> */}

            <Settings settings={settings} loading={loading} onStart={_handleSaveClick} onExport={_handleSaveClick} onStop={_handleStopclick} />
        </div>
    )
}