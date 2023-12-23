import alexandrovvitaliy from './speakers/alexandrov-vitaliy.json'
import alexeenkogrigoriy from './speakers/alexeenko-grigoriy.json'
import kozhinalexandr from './speakers/kozhin-alexandr.json'
import krauzevadim from './speakers/krauze-vadim.json'
import parfenovalexandr from './speakers/parfenov-alexandr.json'
import smirnovsergey from './speakers/smirnov-sergey.json'
import smotrovkonstantin from './speakers/smotrov-konstantin.json'
import ugrinovichvaleriy from './speakers/ugrinovich-valeriy.json'
import vorontsovartem from './speakers/vorontsov-artem.json'
import yakovlevmichail from './speakers/yakovlev-michail.json'
import yakuninanatalia from './speakers/yakunina-natalia.json'

//TODO: make it beautiful
export const getSpeakerById = id => {
  switch (id) {
    case 'alexandrov-vitaliy':
      return alexandrovvitaliy
    case 'alexeenko-grigoriy':
      return alexeenkogrigoriy
    case 'kozhin-alexandr':
      return kozhinalexandr
    case 'krauze-vadim':
      return krauzevadim
    case 'parfenov-alexandr':
      return parfenovalexandr
    case 'smirnov-sergey':
      return smirnovsergey
    case 'smotrov-konstantin':
      return smotrovkonstantin
    case 'ugrinovich-valeriy':
      return ugrinovichvaleriy
    case 'vorontsov-artem':
      return vorontsovartem
    case 'yakovlev-michail':
      return yakovlevmichail
    case 'yakunina-natalia':
      return yakuninanatalia
    default:
      throw Error(`No speaker by id: '${id}'`)
  }
}
