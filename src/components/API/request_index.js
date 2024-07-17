import {RequestService} from "./request"


export const get_filter_records = (data) => RequestService("/getFilterRecords", "POST", data)