import * as qs from 'qs'
import { API, BEARER } from '../constants'
import auth from './auth'
import { strapiDataToObject } from './funcoes'

export const Pedidos = {
    async find(pedidoId = undefined) {
        const user = auth.getUserInfo()
        try {
            let query = qs.stringify(
                populate: [
                    'poduto',
                    
                ]
            )
        }
    }
}