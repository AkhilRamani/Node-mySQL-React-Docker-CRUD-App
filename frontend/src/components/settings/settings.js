import React, { useEffect, useState } from 'react'
import { Checkbox, Typography, InputNumber, Button, Spin } from 'antd'
import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { fromateRequestPayload, validateAndSetDefault } from './helper.settings'
import { LoadingOutlined } from '@ant-design/icons'
import './settings.styles.scss'

const { Title } = Typography

export const Settings = ({ settings, loading, onStart, onStop, onExport }) => {

    const [settingState, setSettingState] = useState({
        analytic_protect: 1,
        change_resolution: 0,
        chrome: 0,
        data_saving: 1,
        device_reset: 0,
        explorer: 1,
        firefox: 0,
        opera: 0,
        fly_mode: 0,
        incognito: 1,
        mobile_data: 1,
        mouse_track: 0,
        no_cookie: 1,
        no_page: 1,
        not_found_wait: '20',
        page_from: 30,
        page_to: 50,
        phone_reset: 0,
        randome_generate: 0,
        remove_history: 0,
        reset_no: 1,
        safari: 0,
        target_site: 10,
        target_site_wait_min: '40',
        target_site_wait_sec: '55',
        vinn_reset: 0,
        visit_within: 1,
        wait_after_min: '5',
        wait_after_sec: '10'
    })

    const formateAndSetState = data => {
        if (Object.keys(data).length !== 0 && data.target_site_wait) {
            const targetSiteWait = data.target_site_wait.split('-');
            const waitAfter = data.wait_after.split('-');

            ['target_site_wait', 'wait_after'].forEach(_ => delete data[_])

            setSettingState({
                target_site_wait_min: targetSiteWait[0],
                target_site_wait_sec: targetSiteWait[1],
                wait_after_min: waitAfter[0],
                wait_after_sec: waitAfter[1],
                ...data
            })
        }
        else setSettingState(s => ({...s, id: data.id}))
    }

    useEffect(() => formateAndSetState(settings), [settings])

    const _handeNumberInputChange = (id, value) => setSettingState({ ...settingState, [id]: value })
    const _handleCheckboxChange = e => setSettingState({ ...settingState, [e.target.id]: !settingState[e.target.id] })

    const _handleOnStart = () => {
        setSettingState({ ...settingState, ...validateAndSetDefault(settingState) })
        onStart && onStart(fromateRequestPayload(settingState))
    }
    const _handleOnExport = () => {
        setSettingState({ ...settingState, ...validateAndSetDefault(settingState) })
        onExport && onExport(fromateRequestPayload(settingState))
    }

    return (
        <div style={{ flex: 1, position: 'relative' }} >
            <div className='setting d-flex flex-column' >
                <div style={{ overflow: 'auto' }} >
                    <div className='color-gray bdr-radius' >
                        <div className='top-div d-flex flex-row align-center g-bdr-btm' >
                            <Checkbox id='chrome' checked={settingState.chrome} onChange={_handleCheckboxChange} >Chrome</Checkbox>
                            <Checkbox id='firefox' checked={settingState.firefox} onChange={_handleCheckboxChange} >Firefox</Checkbox>
                            <Checkbox id='explorer' checked={settingState.explorer} onChange={_handleCheckboxChange} >Explorer</Checkbox>
                            <Checkbox id='safari' checked={settingState.safari} onChange={_handleCheckboxChange} >Safari</Checkbox>
                            <Checkbox id='opera' checked={settingState.opera} onChange={_handleCheckboxChange}>Opera</Checkbox>
                            <Checkbox id='incognito' checked={settingState.incognito} onChange={_handleCheckboxChange}>Incognito</Checkbox>
                        </div>

                        <div className='mid-div' >
                            <Title level={5} >
                                Wait &nbsp;
                                    <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={40} value={settingState.target_site_wait_min} onChange={v => _handeNumberInputChange('target_site_wait_min', v)} />
                                <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={40} value={settingState.target_site_wait_sec} onChange={v => _handeNumberInputChange('target_site_wait_sec', v)} />
                                    seconds in the targeted site.
                                </Title>

                            <Checkbox id='visit_within' checked={settingState.visit_within} onChange={_handleCheckboxChange} >Visit the page within the site</Checkbox>

                            <Title level={5} >
                                <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={1} value={settingState.no_page} onChange={v => _handeNumberInputChange('no_page', v)} />
                                    pages&nbsp;
                                    <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={30} value={settingState.page_from} onChange={v => _handeNumberInputChange('page_from', v)} />
                                <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={50} value={settingState.page_to} onChange={v => _handeNumberInputChange('page_to', v)} />
                                    visit from to second.
                                </Title>
                            <Title level={5} >
                                After the operation is complete&nbsp;
                                    <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={5} value={settingState.wait_after_min} onChange={v => _handeNumberInputChange('wait_after_min', v)} />
                                <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={10} value={settingState.wait_after_sec} onChange={v => _handeNumberInputChange('wait_after_sec', v)} />
                                    seconds wait.
                                </Title>
                            <Title level={5} >
                                Target site&nbsp;
                                    <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={10} value={settingState.target_site} onChange={v => _handeNumberInputChange('target_site', v)} />
                                    if not found times &nbsp;
                                    <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={20} value={settingState.not_found_wait} onChange={v => _handeNumberInputChange('not_found_wait', v)} />
                                    minutes waut.
                                </Title>
                            <Title level={5} >
                                <InputNumber className='num-inpt bdr-radius' min={0} defaultValue={1} value={settingState.reset_no} onChange={v => _handeNumberInputChange('reset_no', v)} />
                                    automatic reset after operation.
                                </Title>
                        </div>
                    </div>

                    <div className='color-gray bdr-radius div-seperator' >
                        <div className='top-div d-flex flex-row align-center g-bdr-btm' >
                            <Checkbox id='device_reset' checked={settingState.device_reset} onChange={_handleCheckboxChange} >Device Reset</Checkbox>
                            <Checkbox id='vinn_reset' checked={settingState.vinn_reset} onChange={_handleCheckboxChange} >Vinn Reset</Checkbox>
                            <Checkbox id='phone_reset' checked={settingState.phone_reset} onChange={_handleCheckboxChange} >Phone Reset</Checkbox>
                            <Checkbox id='mobile_data' checked={settingState.mobile_data} onChange={_handleCheckboxChange} >Mobile Data</Checkbox>
                            <Checkbox id='fly_mode' checked={settingState.fly_mode} onChange={_handleCheckboxChange} >Fly Mode</Checkbox>
                        </div>
                        <div className='chk-div'>
                            <Checkbox id='no_cookie' checked={settingState.no_cookie} onChange={_handleCheckboxChange} >Remove Cookies</Checkbox>
                            <Checkbox id='change_resolution' checked={settingState.change_resolution} onChange={_handleCheckboxChange} >Change Resolution</Checkbox>
                            <Checkbox id='mouse_track' checked={settingState.mouse_track} onChange={_handleCheckboxChange} >Mouse Tracks</Checkbox>
                            <Checkbox id='data_saving' checked={settingState.data_saving} onChange={_handleCheckboxChange} >Data Saving Mode</Checkbox>
                            <Checkbox id='randome_generate' checked={settingState.randome_generate} onChange={_handleCheckboxChange} >Random Generate</Checkbox>
                            <Checkbox id='analytic_protect' checked={settingState.analytic_protect} onChange={_handleCheckboxChange} >Analytics Protection</Checkbox>
                            <Checkbox id='remove_history' checked={settingState.remove_history} onChange={_handleCheckboxChange} >Remove History</Checkbox>
                        </div>
                    </div>
                </div>

                <div className='div-seperator btn-div d-flex' >
                    <Button size='large' className='g-btn yellow-btn right-space g-flex-2' type='primary' onClick={_handleOnExport} >Export Report</Button>
                    <Button size='large' className='g-btn right-space g-flex-1' type='primary' icon={<PauseCircleOutlined />} onClick={onStop} >Stop</Button>
                    <Button size='large' className='g-btn green-btn g-flex-1' type='primary' icon={<PlayCircleOutlined />} onClick={_handleOnStart} >Start</Button>
                </div>
            </div>

            {loading && <div className='loading-div d-flex align-center border-radius' >
                <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
            </div>}
        </div>
    )
}