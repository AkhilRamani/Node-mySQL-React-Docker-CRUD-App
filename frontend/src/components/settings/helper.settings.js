export const fromateRequestPayload = data => {
    const target_site_wait = `${data.target_site_wait_min}-${data.target_site_wait_sec}`;
    const wait_after = `${data.wait_after_min}-${data.wait_after_sec}`;

    let tmpObj = Object.assign({}, data);
    ['target_site_wait_min', 'target_site_wait_sec', 'wait_after_min', 'wait_after_sec'].forEach(p => delete tmpObj[p])

    return { ...tmpObj, target_site_wait, wait_after }
}

export const validateAndSetDefault = data => {
    Object.keys(data).forEach(key => {
        if(!data[key]) data[key] = 0;
    })
    return data
}