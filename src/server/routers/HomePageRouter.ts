import { Router } from 'express'
import { getHome } from '@contexts/homePage/HomePageController'

const homePageRouter = Router()

homePageRouter.route('/').get(getHome)

export default homePageRouter
