

export const TangGiamSoLuongAction = (value,payload) => {
    return {
        type: 'TANG_GIAM_SO_LUONG',
        food: value,
        payload: payload,
    }
}