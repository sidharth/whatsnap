
// (timestamp) -> ('21st Feb 2021')
export function getDateStr(ts: number, platform: "android" | "ios") {
    if (isNaN(ts)) return undefined
    switch (platform) {
        case "android":
            throw new Error("Android not supported right now")
        case "ios":
            // iOS stores timestamps starting from 2001-01-01 because reasons...
            // https://www.epochconverter.com/coredata
            let offsetTs = 978307200000
            let unixTs = 1000*ts + offsetTs
            return new Date(unixTs).toISOString().split('T')[0]
        default:
            throw new Error("Invalid platform. Should be 'android' or 'ios'.")
    }
}