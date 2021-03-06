import fs from 'fs'

const TEMP_DIR = 'temp/'
const GEN_DIR = 'gen/'

export function copyToTemp(srcPath: string): string {
    if (!fs.existsSync(TEMP_DIR)) {
        fs.mkdirSync(TEMP_DIR)
    }

    let fileName = srcPath.split('/').pop()
    let destPath = TEMP_DIR + fileName
    fs.copyFileSync(srcPath, destPath)
    return destPath
}

export function savePage(pageName: string, contents: string) {
    if (!fs.existsSync(GEN_DIR)) {
        fs.mkdirSync(GEN_DIR)
    }
    pageName = pageName.replace('/','-')
    let filePath = GEN_DIR + pageName + '.html'
    fs.writeFileSync(filePath, contents)
}

export default {}