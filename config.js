import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['593967811592', 'Patobot🦆', true],[593962681710]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['593967811592']
global.suittag = ['593967811592']
global.mods = []
global.prems = []

global.packname = 'Patobot'
global.author = ''
global.wm = '© Patobot🦆'
global.wm2 = 'Patobot🦆 : 𝗕𝗈𝗍'
global.azami = 'Axel'
global.cb = 'Patobot🦆'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '593962681710'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
