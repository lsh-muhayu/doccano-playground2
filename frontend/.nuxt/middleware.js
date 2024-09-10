const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['check-admin'] = require('../middleware/check-admin.js')
middleware['check-admin'] = middleware['check-admin'].default || middleware['check-admin']

middleware['check-auth'] = require('../middleware/check-auth.js')
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth']

middleware['isProjectAdmin'] = require('../middleware/isProjectAdmin.ts')
middleware['isProjectAdmin'] = middleware['isProjectAdmin'].default || middleware['isProjectAdmin']

middleware['set-project'] = require('../middleware/set-project.js')
middleware['set-project'] = middleware['set-project'].default || middleware['set-project']

middleware['setCurrentProject'] = require('../middleware/setCurrentProject.ts')
middleware['setCurrentProject'] = middleware['setCurrentProject'].default || middleware['setCurrentProject']

export default middleware
