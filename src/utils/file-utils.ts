import fs from 'fs'

const TEMP_DIR = 'out/'

export function copyToTemp(srcPath: string): string {
    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(srcPath)
    }

    let fileName = srcPath.split('/').pop()
    let destPath = TEMP_DIR + fileName
    fs.copyFileSync(srcPath, destPath)
    return destPath
}

export default {}