import {RequestService} from "./request"


export const get_filter_records = (data) => RequestService("/getFilterRecords", "POST", data)

export const getShowMore = (data) => RequestService("/showMoreRecords", "POST", data)

export const getDetails = (data) => RequestService("/getDetails", "POST", data)