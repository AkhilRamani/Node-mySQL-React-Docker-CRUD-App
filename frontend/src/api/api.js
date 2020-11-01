import axios from 'axios'
import { server_url } from '../constants/constants'

const getSettings = () => axios.get(`${server_url}/setting`)
const saveSettings = data => axios.post(`${server_url}/setting`, data)
const updateSetting = (id, data) => axios.patch(`${server_url}/setting/${id}`, data)

const getKeywords = () => axios.get(`${server_url}/keyword`)
const saveKeyword = word => axios.post(`${server_url}/keyword/${word}`)
const deleteKeyword = id => axios.delete(`${server_url}/keyword/${id}`)

const getSites = () => axios.get(`${server_url}/site`)
const saveSite = site => axios.post(`${server_url}/site/${site}`)
const deleteSite = id => axios.delete(`${server_url}/site/${id}`)

export {
    getSettings,
    saveSettings,
    updateSetting,
    getKeywords,
    saveKeyword,
    deleteKeyword,
    getSites,
    saveSite,
    deleteSite
}